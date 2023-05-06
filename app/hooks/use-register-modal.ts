import { create } from "zustand";
import { RegisterModalStore } from "../interfaces/interface";


const useRegsiterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useRegsiterModal