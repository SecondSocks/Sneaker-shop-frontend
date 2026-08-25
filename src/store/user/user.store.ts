import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { TUser } from '@/types/user.interface'

interface InitialStore {
	user: TUser | null
	setUser: (user: TUser | null) => void
	deleteUser: () => void
}

const useUserStore = create<InitialStore>()(
	persist(
		set => ({
			user: null,
			setUser: user => set({ user }),
			deleteUser: () => set({ user: null })
		}),
		{ name: 'user-store', storage: createJSONStorage(() => localStorage) }
	)
)

export default useUserStore
