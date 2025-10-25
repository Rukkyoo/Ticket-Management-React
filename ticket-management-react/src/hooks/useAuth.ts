import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('ticketapp_session');
    navigate('/');
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem('ticketapp_session');
  };

  return { logout, isAuthenticated };
};