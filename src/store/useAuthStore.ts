import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserInfo } from '../types/userInfo'

type AuthStore = {
  accessToken: string | undefined
  userInfo: UserInfo
  isAuthenticated: boolean
  setLoginData: (accessToken: string | undefined, userInfo: UserInfo) => void
  setLogout: () => void
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      userInfo: {},
      accessToken: undefined,
      isAuthenticated: false,
      setLoginData: (accessToken: string | undefined, userInfo: UserInfo) => {
        set({
          userInfo,
          accessToken,
          isAuthenticated: true,
        })
      },
      setLogout: () => {
        set({
          accessToken: undefined,
          isAuthenticated: false,
        })
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
)
