import { invoke } from "@tauri-apps/api/core"
import { Button } from "@/components/ui/button"
import { useServerListStore } from "@/stores/server-list-store"

export function Test() {
  const { serverList } = useServerListStore()

  // Test Mod
  // https://steamcommunity.com/sharedfiles/filedetails/?id=3147619641&searchtext=
  const id = 3147619641

  const testClick = async () => {
    console.log("Downloading sharks!", id)
    await invoke("mdq_mod_add", { publishedFileId: id }).catch((e) => {
      console.error(e)
    })
  }

  const testClick1 = async () => {
    console.log("removing sharks 💀💀💀", id)
    await invoke("steam_remove_mod_forcefully", { publishedFileId: id }).catch(
      (e) => {
        console.error(e)
      }
    )
  }

  const testClick2 = async () => {
    console.log("FORCE MOUNT ✅✅")
    await invoke("steam_mount_api").catch((e) => {
      console.error(e)
    })
  }

  const testClick3 = async () => {
    console.log("FORCE UNMOUNT 👹👹")
    await invoke("steam_unmount_api").catch((e) => {
      console.error(e)
    })
  }

  return (
    <div>
      <Button
        onClick={() => {
          testClick().catch((e) => {
            console.error(e)
          })
        }}
      >
        download sharks
      </Button>
      <Button
        onClick={() => {
          testClick1().catch((e) => {
            console.error(e)
          })
        }}
      >
        force remove sharks
      </Button>
      <Button
        onClick={() => {
          testClick2().catch((e) => {
            console.error(e)
          })
        }}
      >
        mount steam api
      </Button>
      <Button
        onClick={() => {
          testClick3().catch((e) => {
            console.error(e)
          })
        }}
      >
        unmount steam api
      </Button>
    </div>
  )
}
