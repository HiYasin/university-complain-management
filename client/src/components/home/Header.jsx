import { Link, NavLink, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "../ui/mode-toggle"
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

export default function Header() {
  const navigate = useNavigate();
  const { user, loading, logout } = useContext(AuthContext);

  return (
    <header className="w-full border-b px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to={'/'}><h1 className="text-xl font-semibold cursor-pointer">UniComplaints</h1></Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => navigate('/')}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => navigate('/dashboard')}>
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <nav className="flex items-center gap-1">
          <ModeToggle />
          <Link to="/auth">
            {
              user && !loading ? (<Button variant="outline" onClick={logout}>Logout</Button>) : (<Button variant="outline">Login / Sign Up</Button>)
            }
          </Link>
        </nav>
      </div>
    </header>
  )
}
