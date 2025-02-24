import {create} from 'zustand';

type SearchStore = {
  isVisible: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};

export const useSearchStore = create<SearchStore>(set => ({
  isVisible: false,
  openSearch: () => set({isVisible: true}),
  closeSearch: () => set({isVisible: false}),
}));
