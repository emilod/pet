import { create } from 'zustand'

export const useStore = create<{
  count: number
  increasePopulation: () => void
  removeAllCount: () => void
  updateCount: (newCount: number) => void
}>((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({ count: state.count + 1 })),
  removeAllCount: () => set({ count: 0 }),
  updateCount: (newCount) => set({ count: newCount }),
}))
