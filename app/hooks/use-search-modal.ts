import { create } from "zustand";
import { ModalStore } from "../interfaces/interface";


const useSearchModal = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useSearchModal