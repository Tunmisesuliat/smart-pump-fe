import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { getUserProfile, login, updateUserApi } from '../utils/api';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  picture: string;
  company: string;
  phone: string;
  age: number;
  address: string;
  eyeColor: string;
  isActive: boolean;
  balance: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  loginUser: (data: {
    email: string;
    password: string;
  }) => Promise<string | void>;
  updateUser: (data: Partial<User>) => Promise<string | void>;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user details if token exists
      getUserProfile(token)
        .then((userData) => {
          setUser({ ...userData.data });
          navigate('/dashboard');
        })
        .catch((error) => {
          console.error('Failed to fetch user details:', error);
          // Optionally clear the token if user details can't be fetched
          localStorage.removeItem('token');
          navigate('/');
        });
    } else {
      navigate('/');
    }
  }, []);

  const loginUser = async (data: {
    email: string;
    password: string;
  }): Promise<string | void> => {
    try {
      const response = await login(data); // Call the login function
      if (response.status === 'success') {
        setUser(response.data);
        localStorage.setItem('token', response.data.sessionToken);
        navigate('/dashboard');
      } else {
        return response.message; // Return the error message
      }

      console.log(response.data.sessionToken);
    } catch (error) {
      console.error('Login failed:', error);
      return 'login failed';
    }
  };

  const updateUser = async (data: Partial<User>): Promise<string | void> => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. User is not authenticated.');
      return 'failed to update user details. User is not authenticated.';
    }
    try {
      await updateUserApi(token, data); // Call the API to update user details
      setUser((prevUser) => (prevUser ? { ...prevUser, ...data } : null)); // Update the user state
    } catch (error) {
      console.error('Failed to update user:', error);
      return 'failed to update user details.';
    }
  };
  const logoutUser = () => {
    localStorage.removeItem('token');
    navigate('/');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, updateUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook for using the Auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
