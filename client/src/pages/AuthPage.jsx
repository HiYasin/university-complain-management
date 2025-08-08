// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// export default function AuthPageTabs() {
//   const [mode, setMode] = useState("login") // login or signup
//   const [studentId, setStudentId] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [success, setSuccess] = useState("")

//   function validateStudentSignup() {
//     if (!studentId || !email) {
//       setError("Please fill all fields")
//       return false
//     }
//     const [emailUser, emailDomain] = email.split("@")
//     if (emailUser?.toLowerCase() !== studentId.toLowerCase()) {
//       setError("Email username must match Student ID")
//       return false
//     }
//     if (emailDomain?.toLowerCase() !== "ugrad.ac.bd") {
//       setError("Email domain must be ugrad.ac.bd")
//       return false
//     }
//     return true
//   }

//   function handleSubmit(role, e) {
//     e.preventDefault()
//     setError("")
//     setSuccess("")

//     if (role === "student" && mode === "signup") {
//       if (!validateStudentSignup()) return
//       setSuccess("Student signed up successfully! You can now login.")
//       setMode("login")
//       resetFields()
//       return
//     }

//     if (mode === "login") {
//       if (password !== "password123") {
//         setError("Incorrect password. Try 'password123'")
//         return
//       }
//       setSuccess(`Welcome back, ${role === "student" ? "Student" : "Authority"}!`)
//       return
//     }

//     if (role === "authority" && mode === "signup") {
//       setSuccess("Authority signed up successfully! You can now login.")
//       setMode("login")
//       resetFields()
//     }
//   }

//   function resetFields() {
//     setStudentId("")
//     setEmail("")
//     setPassword("")
//   }

//   function renderForm(role) {
//     return (
//       <form onSubmit={(e) => handleSubmit(role, e)} className="space-y-4">
//         {role === "student" && mode === "signup" && (
//           <>
//             <div>
//               <Label htmlFor="studentId">Student ID</Label>
//               <Input
//                 id="studentId"
//                 placeholder="C223042"
//                 value={studentId}
//                 onChange={(e) => setStudentId(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="email">University GSuite Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="C223042@ugrad.ac.bd"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </>
//         )}

//         {(mode === "login" || role === "authority") && (
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder={
//                 role === "student"
//                   ? "Your GSuite email"
//                   : "Authority email"
//               }
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//         )}

//         <div>
//           <Label htmlFor="password">Password</Label>
//           <Input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         {error && <p className="text-red-600 text-sm text-center">{error}</p>}
//         {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//         <Button type="submit" className="w-full">
//           {mode === "login" ? "Login" : "Sign Up"}
//         </Button>

//         <p className="mt-4 text-center text-sm text-muted-foreground">
//           {mode === "login"
//             ? "Don't have an account? "
//             : "Already have an account? "}
//           <button
//             type="button"
//             className="text-blue-600 underline"
//             onClick={() => {
//               setError("")
//               setSuccess("")
//               setMode(mode === "login" ? "signup" : "login")
//             }}
//           >
//             {mode === "login" ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </form>
//     )
//   }

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <Tabs defaultValue="student" className="w-full">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="student">Student</TabsTrigger>
//           <TabsTrigger value="authority">Authority</TabsTrigger>
//         </TabsList>

//         <TabsContent value="student">
//           <h2 className="text-2xl font-semibold mb-6 text-center">
//             {mode === "login" ? "Login" : "Sign Up"} as Student
//           </h2>
//           {renderForm("student")}
//         </TabsContent>

//         <TabsContent value="authority">
//           <h2 className="text-2xl font-semibold mb-6 text-center">
//             {mode === "login" ? "Login" : "Sign Up"} as Authority
//           </h2>
//           {renderForm("authority")}
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }




// {/* <div className="flex justify-center items-center w-full h-screen flex-col">
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


// const { user, loginWithGoogle, logout } = useContext(AuthContext); */}

import React from 'react'

export default function AuthPage() {
  return (
    <div>
      Auth page
    </div>
  )
}
