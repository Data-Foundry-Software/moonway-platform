'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { BookA, DatabaseIcon, FileBarChart, Gauge, GitGraph, Menu, Nfc, Play, Wallet } from 'lucide-react'
import clsx from 'clsx'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import Link from 'next/link'
import { Separator } from '../ui/separator'

type Props = {
  defaultOpen?: boolean
  sidebarLogo: string
}

const MenuOptions = ({
  sidebarLogo,
  defaultOpen,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return

  return (
    <Sheet
      modal={false}
      {...openState}
    >
      <SheetTrigger
        asChild
        className="absolute left-4 top-4 z-[100] md:!hidden felx"
      >
        <Button
          variant="outline"
          size={'icon'}
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        side={'left'}
        className={clsx(
          'bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6',
          {
            'hidden md:inline-block z-0 w-[300px]': defaultOpen,
            'inline-block md:hidden z-[100] w-full': !defaultOpen,
          }
        )}
      >
        <div>
          <AspectRatio ratio={16 / 5}>
            <Image
              src={sidebarLogo}
              alt="Sidebar Logo"
              fill
              className="rounded-md object-contain"
            />
          </AspectRatio>
          <p className="text-muted-foreground text-xs mb-2"></p>
          <Separator className="mb-4" />
          <nav className="relative">
            <Command className="rounded-lg overflow-visible bg-transparent">
              <CommandInput placeholder="Search..." />
              <CommandList className="py-4 overflow-visible">
                <CommandEmpty>No Results Found</CommandEmpty>
                <CommandGroup className="overflow-visible">
                  <CommandItem
                    className="md:w-[320px] w-full"
                  >
                    <Link
                      href={'/strategies'}
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <GitGraph />
                      <span>{"Strategies"}</span>
                    </Link>
                  </CommandItem>

                  <CommandItem
                    className="md:w-[320px] w-full"
                  >
                    <Link
                      href={'/definitions'}
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <BookA />
                      <span>{"Definitions"}</span>
                    </Link>
                  </CommandItem>

                  <CommandItem
                    className="md:w-[320px] w-full"
                  >
                    <Link
                      href={'/apipage'}
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <Nfc />
                      <span>{"API"}</span>
                    </Link>
                  </CommandItem>

                  <CommandItem
                    className="md:w-[320px] w-full"
                  >
                    <Link
                      href={'/panel'}
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <Gauge />
                      <span>{"Panel"}</span>
                    </Link>
                  </CommandItem>

                  <CommandItem
                    className="md:w-[320px] w-full"
                  >
                    <Link
                      href={'/simulation'}
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <Play />
                      <span>{"Simulation"}</span>
                    </Link>
                  </CommandItem>

                  <CommandItem
                    className="md:w-[320px] w-full"
                  >
                    <Link
                      href={'/wallet'}
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <Wallet />
                      <span>{"Wallet"}</span>
                    </Link>
                  </CommandItem>

                  <CommandItem
                    className="md:w-[320px] w-full"
                  >
                    <Link
                      href={'/performance'}
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <FileBarChart />
                      <span>{"Performance"}</span>
                    </Link>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MenuOptions