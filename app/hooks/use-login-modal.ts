import { create } from "zustand";
import { ModalStore } from "../interfaces/interface";


const useLoginModal = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useLoginModal