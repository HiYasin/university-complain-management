import { Button } from '@/components/ui/button'
import { AuthContext } from '@/providers/AuthProvider';
import React, { useContext } from 'react'

export default function AuthPage() {

    const { user, loginWithGoogle, logout } = useContext(AuthContext);
    console.log(user);


    return (
        <div className="flex justify-center items-center w-full h-screen flex-col">
            {user ? (
                <>
                    <div>Name: {user.displayName}</div>
                    <div>Email: {user.email}</div>
                    <div>User ID: {user.uid}</div>
                    <div>Photo URL: {user.photoURL}</div>
                    <Button onClick={logout}>Logout</Button>
                </>
            ) : (
                <Button onClick={loginWithGoogle}>Login with GSuite</Button>
            )}
        </div>
    )
}
