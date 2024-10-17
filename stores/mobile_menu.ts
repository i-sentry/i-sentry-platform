import { create } from "zustand";

type IModal = {
  open: boolean;
  setOpen: () => void;
};

export const useMobileMenuOverlay = create<IModal>((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));
