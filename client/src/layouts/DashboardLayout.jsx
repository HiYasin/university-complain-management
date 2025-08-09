
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
import { AuthContext } from "@/providers/AuthProvider"
import { useContext } from "react"
import { checkRole } from "@/lib/utils"
import Spinner from "@/components/ui/spinner"

export default function DashboardLayout() {
  const { user, loading } = useContext(AuthContext);
  const role = checkRole(user?.email);
  if (loading) {
    return <div className="flex items-center justify-center h-screen"><Spinner /></div>;
  }

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
              {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
            </h1>
          </div>

          <div className="ml-auto flex items-center gap-2 pr-4">
            <ModeToggle />
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {role === "admin" && <AdminDashboard />}
          {role === "user" && <UserDashboard />}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}