import { create } from "zustand";
import { ModalStore } from "../interfaces/interface";


const useRegsiterModal = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useRegsiterModal