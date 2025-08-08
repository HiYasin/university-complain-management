import { Outlet, useLocation } from "react-router"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ui/mode-toggle"
import AdminDashboard from "@/pages/admin/AdminDashboard"
import UserDashboard from "@/pages/user/UserDashboard"

export default function DashboardLayout({role = 'user'} ) {
 const location = useLocation()
  const currentPath = location.pathname

  const isAdmin = currentPath.startsWith("/admin")
  const isUser = currentPath.startsWith("/user")



  return (
    <SidebarProvider>
      <AppSidebar role={role} />

      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-lg font-semibold">
              {isAdmin ? "Admin Dashboard" : "User Dashboard"}
            </h1>
          </div>

          <div className="ml-auto flex items-center gap-2 pr-4">
            <ModeToggle />
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {isAdmin && (
            <AdminDashboard>
              <Outlet />
            </AdminDashboard>
          )}
          {isUser && (
            <UserDashboard>
              <Outlet />
            </UserDashboard>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
