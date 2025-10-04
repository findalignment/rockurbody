import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/auth/login" />;
}

export default ProtectedRoute;
