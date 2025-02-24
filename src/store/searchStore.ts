import {create} from 'zustand';

type SearchStore = {
  isVisible: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  searchValue: string;
  setSearchValue: (text: string) => void;
};

export const useSearchStore = create<SearchStore>(set => ({
  isVisible: false,
  openSearch: () => set({isVisible: true}),
  closeSearch: () => set({isVisible: false}),
  setSearchValue: (text: string) => {
    set({searchValue: text});
  },
  searchValue: '',
}));
