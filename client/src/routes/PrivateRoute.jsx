
import { AuthContext } from '@/providers/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;

    return user ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
