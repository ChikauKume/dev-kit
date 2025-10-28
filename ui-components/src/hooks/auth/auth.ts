import { useState, useCallback } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // This will be replaced with actual Inertia.js call
      // const response = await router.post('/login', { email, password });

      // Mock implementation
      const mockUser: User = {
        id: 1,
        name: 'テストユーザー',
        email,
        role: 'user'
      };

      setUser(mockUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ログインに失敗しました');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // This will be replaced with actual Inertia.js call
      // await router.post('/logout');
      setUser(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ログアウトに失敗しました');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
    isLoading,
    error
  };
}
