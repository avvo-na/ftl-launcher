import { type ReactNode } from "react"
import { exit } from "@tauri-apps/plugin-process"
import tryingUrl from "@/assets/trying.gif"
import zombieUrl from "@/assets/zombie.gif"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useServerList } from "@/hooks/useServerList"
import { useSteamworks } from "@/hooks/useSteamworks"
import { useUserInfo } from "@/hooks/useUserInfo"

export function FTLLContextProvider({ children }: { children: ReactNode }) {
  const { isSteamReady } = useSteamworks()
  const { isLoadingServers } = useServerList()
  const { hasInfo } = useUserInfo()

  return (
    <>
      <AlertDialog open={isLoadingServers}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Give me a moment... 🔎</AlertDialogTitle>
            <AlertDialogDescription>
              I&apos;m importing some new servers for you! Hold on a second and
              I&apos;ll be done before you can say
              &ldquo;supercalafragilisticexpialidocious&ldquo;!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex w-full justify-center">
            <div className="">
              <img src={zombieUrl} alt="zombie" />
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={!isSteamReady}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Uh oh... 😭</AlertDialogTitle>
            <AlertDialogDescription>
              It looks like Steam isn&apos;t running, or your client is
              out-of-date! Please start Steam and try again.
              {!hasInfo && (
                <p>
                  If you don&apos;t have a Steam account, you can create one{" "}
                  <a
                    href="https://store.steampowered.com/join/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    here
                  </a>
                  .
                </p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex w-full justify-center">
            <div className="">
              <img src={tryingUrl} alt="trying" height={200} width={200} />
            </div>
          </div>
          <AlertDialogFooter className="">
            <AlertDialogCancel onClick={() => void exit(1)}>
              Quit
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => window.location.reload()}>
              Retry
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {children}
    </>
  )
}
