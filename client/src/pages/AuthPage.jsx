import { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LoginAlert } from "@/components/authComponent/LoginAlert"
import { AuthContext } from "@/providers/AuthProvider"
import { useNavigate } from "react-router"

export default function AuthPageTabs() {
  const { user, loginWithGoogle, logout, signInWithEmail } = useContext(AuthContext);
  const [authLoading, setAuthLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuthorityLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    await signInWithEmail(email, password);
    setAuthLoading(false);
    navigate('/dashboard');
  };

  const handleStudentLogin = async () => {
    setAuthLoading(true);
    await loginWithGoogle();
    setAuthLoading(false);
    navigate('/dashboard');
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-md mx-auto p-6">
      <Tabs defaultValue="student" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="student" className={'cursor-pointer'}>Student</TabsTrigger>
          <TabsTrigger value="authority" className={'cursor-pointer'}>Authority</TabsTrigger>
        </TabsList>

        <TabsContent value="student">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Login as Student
          </h2>
          <LoginAlert />
          {
            user ? (
              <Button onClick={logout} className={'w-full my-2'} variant="destructive">
                Logout
              </Button>
            ) : (<Button onClick={handleStudentLogin} className={'w-full my-2'}>Login with GSuite</Button>)
          }
        </TabsContent>

        <TabsContent value="authority">
          <h2 className="text-2xl font-semibold my-3 text-center">
            Login as Authority
          </h2>
          <form onSubmit={handleAuthorityLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className={'pb-2'}>Email</Label>
              <Input
                id="email"
                type="email"
                placeholder={"Authority email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className={'pb-2'}>Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={authLoading}>
              {authLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}