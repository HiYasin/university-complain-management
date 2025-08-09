import { auth } from '@/firebase/firebase.config';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const signInWithEmail = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const signedInUser = result.user;
            if (!signedInUser.email.endsWith(allowedDomain)) {
                alert('Access denied: Use your institutional email (ugrad.iiuc.ac.bd)');
                await signOut(auth);
                return;
            }
            setUser(signedInUser);
        } catch (error) {
            alert('Login error: ' + error.message);
        }
    };

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const allowedDomain = '@ugrad.iiuc.ac.bd'; // Only allow this domain

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const signedInUser = result.user;

            if (!signedInUser.email.endsWith(allowedDomain)) {
                alert('Access denied: Use your institutional email (ugrad.iiuc.ac.bd)');
                await signOut(auth);
                return;
            }

            setUser(signedInUser);
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.email.endsWith(allowedDomain)) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
    user,
    loading,
    loginWithGoogle,
    signInWithEmail,
    logout,
    };

    console.log('AuthProvider user:', user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export { AuthContext };
export default AuthProvider;