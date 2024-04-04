"use client"

import { UpdateIcon } from "@radix-ui/react-icons"
import { GithubIcon, HomeIcon } from "lucide-react"
import { useCallback, useState } from "react"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

export function AboutDialog() {
  const [updateText, setUpdateText] = useState("")
  const [version, setVersion] = useState("")
  const [name, setName] = useState("")
  const [tauriVersion, setTauriVersion] = useState("")
  const [arc, setArc] = useState("")

  const getInfo = useCallback(async () => {
    const { getName, getTauriVersion, getVersion } = await import(
      "@tauri-apps/api/app"
    )
    const { arch } = await import("@tauri-apps/plugin-os")

    getName && getName().then((x) => setName(x))
    getVersion && getVersion().then((x) => setVersion(x))
    arch && arch().then((x) => setArc(x))
  }, [])

  if (typeof window !== "undefined") {
    getInfo()
  }

  const open = useCallback(async (url: string) => {
    const { open } = await import("@tauri-apps/plugin-shell")
    open && open(url)
  }, [])

  return (
    <DialogContent className="overflow-clip pb-2">
      <DialogHeader className="flex items-center text-center">
        <div className="rounded-full bg-background p-[6px]  text-slate-600 drop-shadow-none transition duration-1000 hover:text-slate-800 hover:drop-shadow-[0_0px_10px_rgba(0,10,50,0.50)]  dark:hover:text-slate-400 ">
          <Icons.logo className="h-12 w-12" />
        </div>

        <DialogTitle className="flex flex-col items-center gap-2 pt-2">
          FTLL
          <span className="flex gap-1 font-mono text-xs font-medium">
            Version {version} ({arc})
            <span className="font-sans font-medium text-gray-400">
              (
              <span
                className="cursor-pointer text-blue-500"
                onClick={() =>
                  open("https://github.com/agmmnn/tauri-ui/releases/tag/v0.2.0")
                }
              >
                release notes
              </span>
              )
            </span>
          </span>
        </DialogTitle>

        <DialogDescription className=" text-foreground">
          A lightweight, open-source, mod launcher for DayZ Standalone.
        </DialogDescription>

        <span className="text-xs text-gray-400">{updateText}</span>
        <DialogDescription className="flex flex-row"></DialogDescription>
      </DialogHeader>

      <DialogFooter className="flex flex-row items-center border-t pt-2 text-slate-400">
        <div className="mr-auto flex flex-row gap-2">
          <HomeIcon
            className="h-5 w-5 cursor-pointer transition hover:text-slate-300"
            onClick={() => open("https://ftl-launcher.com")}
          />
          <GithubIcon
            className="h-5 w-5 cursor-pointer transition hover:text-slate-300 "
            onClick={() =>
              open("https://github.com/danlikestocode/ftl-launcher")
            }
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="h-7 gap-1"
          onClick={() => setUpdateText("You have the latest version.")}
        >
          <UpdateIcon /> Check for Updates
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
