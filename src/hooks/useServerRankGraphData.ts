import { rankGraphSchema } from "@/validators/battlemetrics/rank-graph"
import { searchSchema } from "@/validators/battlemetrics/search"
import { useQuery } from "@tanstack/react-query"

export function useServerRankGraphData(serverName: string) {
  const res = useQuery({
    queryKey: ["bm-graph", serverName],
    queryFn: fetchGraphData,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  return res
}

async function fetchGraphData({ queryKey }: { queryKey: string[] }) {
  // Fetch for server id
  const res = await fetch(
    "https://api.battlemetrics.com/" +
      "servers?fields%5Bserver%5D=rank%2Cname" +
      "%2Cplayers%2CmaxPlayers%2Caddress%2Cip%2Cport" +
      "%2Ccountry%2Clocation%2Cdetails%2Cstatus&relations" +
      "%5Bserver%5D=game%2CserverGroup&filter%5Bsearch%5D=" +
      queryKey.at(1)
  ).then(async (res) => {
    return await res.json()
  })

  // Parse safely and return data
  const searchData = await searchSchema
    .safeParseAsync(res)
    .then(() => {
      return searchSchema.parse(res)
    })
    .catch((err) => {
      return Promise.reject(
        new Error("Failed to fetch server data, " + err.message)
      )
    })

  // Get ISO string time of now to 30 days ago
  const now = new Date()
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(now.getDate() - 30)

  // Fetch for graph data
  const graphRes = await fetch(
    "https://api.battlemetrics.com/servers/" +
      searchData.data[0].id +
      "/rank-history?start=" +
      thirtyDaysAgo.toISOString() +
      "&stop=" +
      now.toISOString()
  ).then(async (res) => {
    return await res.json()
  })

  // Parse graph data
  const graphData = await rankGraphSchema
    .safeParseAsync(graphRes)
    .then(() => {
      return rankGraphSchema.parse(graphRes)
    })
    .catch((err) => {
      return Promise.reject(
        new Error("Failed to fetch graph data, " + err.message)
      )
    })

  return graphData
}
