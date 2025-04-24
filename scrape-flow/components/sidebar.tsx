"use client";

import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon } from 'lucide-react';
import React from 'react';
import Logo from './logo';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "/credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "/billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

function DesktopSidebar() {
  const pathname = usePathname();

  const activeRoute =
    routes.find((route) => route.href !== "/" && pathname.includes(route.href)) || routes[0];

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 text-black border-r-2 border-separate dark:bg-secondary/30">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="p-2">TODO CREDITS</div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
          key={route.href}
          href={route.href}
          className={`${buttonVariants({
            variant:
              activeRoute.href === route.href
                ? "sidebarActiveItem"
                : "sidebarItems",
          })} text-black hover:text-black`} // force black text
        >
          <route.icon size={20} className="text-black" />
          <span className="ml-2">{route.label}</span>
        </Link>
        
        ))}
      </div>
    </div>
  );
}

export default DesktopSidebar;
