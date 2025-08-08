import { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LoginAlert } from "@/components/authComponent/LoginAlert"
import { AuthContext } from "@/providers/AuthProvider"

export default function AuthPageTabs() {
  const { user, loginWithGoogle, logout } = useContext(AuthContext);
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
            ) : (<Button onClick={loginWithGoogle} className={'w-full my-2'}>Login with GSuite</Button>)
          }
        </TabsContent>

        <TabsContent value="authority">
          <h2 className="text-2xl font-semibold my-3 text-center">
            Login as Authority
          </h2>
          <>
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
            <Button type="submit" className="w-full">
              Login
            </Button>
          </>
        </TabsContent>
      </Tabs>
    </div>
  )
}


// import { Button } from '@/components/ui/button'


// import { AuthContext } from '@/providers/AuthProvider';
// import React, { useContext } from 'react'

// export default function AuthPage() {
//     const { user, loginWithGoogle, logout } = useContext(AuthContext);
//     console.log(user);
//     return (
//         <div className="flex justify-center items-center w-full h-screen flex-col">
//             {user ? (
//                 <>
//                     <div>Name: {user.displayName}</div>
//                     <div>Email: {user.email}</div>
//                     <div>User ID: {user.uid}</div>
//                     <div>Photo URL: {user.photoURL}</div>
//                     <Button onClick={logout}>Logout</Button>
//                 </>
//             ) : (
//                 <Button onClick={loginWithGoogle}>Login with GSuite</Button>
//             )}
//         </div>

//     )

// }