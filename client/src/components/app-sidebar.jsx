import * as React from "react"
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import logo from "@/assets/iiuc-logo.png"
import {
  LifeBuoy,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

//eta amar admin sidebar data
const adminSidebarData = {
  navMain: [
    { title: "Dashboard", url: "/admin/dashboard", icon: SquareTerminal },
  ],
  projects: [],
  navSecondary: [
    { title: "Settings", url: "/admin/settings", icon: Settings2 },
  ],
  user: {
    name: "Admin User",
    email: "admin@iiuc.ac.bd",
    avatar: "/avatars/admin.jpg",
  },
}

//eta amar user sidebar data
const userSidebarData = {
  navMain: [
    { title: "Dashboard", url: "/user/dashboard", icon: SquareTerminal },
    { title: "Quick Complain", url: "/user/quick-complain", icon: Send },
  ],
  projects: [],
  navSecondary: [
    { title: "Support", url: "/support", icon: LifeBuoy },
  ],
  user: {
    name: "Student User",
    email: "student@iiuc.ac.bd",
    avatar: "/avatars/student.jpg",
  },
}

export function AppSidebar({ role={role}, ...props
}) {
  const { user } = useContext(AuthContext);
  const data = role === "admin" ? adminSidebarData : userSidebarData;
  // Override sidebar user info with AuthProvider user if available
  if (user) {
    data.user = {
      name: user.displayName || user.name || "User",
      email: user.email,
      avatar: user.photoURL || user.avatar || "/avatars/default.jpg",
    };
  }
  
  return (
    <Sidebar variant="inset" {...props}>
      {/* Header Logo + App Name */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-10 items-center justify-center rounded-lg">
                  <img src={logo} alt="iiuc-logo" className="size-8" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">IIUC - Complain System</span>
                  <span className="truncate text-xs">{role === "admin" ? "Admin Panel" : "User Panel"}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Menus */}
      <SidebarContent>
        <NavMain items={data.navMain} role={role} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* Footer User Info */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
