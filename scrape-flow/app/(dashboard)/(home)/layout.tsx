import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import DesktopSidebar from "@/components/sidebar";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {Separator} from "@/components/ui/separator";
import React from 'react'

function layout({children}: {children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
        <DesktopSidebar />
        <div className="flex flex-col flex-1 min-h-screen">
            <header className="flex items-center justify-between px-6 py-4 h-[50px] containers">
              <BreadcrumbHeader />
            </header>
            <Separator/>
            <div className="overflow-auto">
                <div className="flex-1 container py-4 text-accent-foreground">
                    {children}
                </div>
            </div>

        </div>
        </div>
    
  );
}

export default layout;