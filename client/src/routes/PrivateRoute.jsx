
import Spinner from '@/components/ui/spinner';
import { AuthContext } from '@/providers/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <Spinner />;

    return user ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
