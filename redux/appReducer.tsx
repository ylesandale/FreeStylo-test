import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  inputValue: "",
  currentUserId: "",
  currentVideos: [],
  favoriteVideos: [],
  mainPage: true,
  favoritesPage: false,
  loading: false,
};

export const currencySlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setCurrentUser(state, action: PayloadAction<string>) {
      state.currentUserId = action.payload;
    },
    setCurrentVideos(state, action: PayloadAction<Video[] | any[]>) {
      state.currentVideos = action.payload;
    },
    setStartFavoriteVideo(state, action: PayloadAction<Video[] | any[]>) {
      state.favoriteVideos = action.payload;
    },
    setFavoriteVideo(state, action: PayloadAction<Video>) {
      state.favoriteVideos.push(action.payload);
      state.currentVideos = state.currentVideos.map((item: Video) =>
        action.payload.id === item.id ? { ...item, favoriteVideo: true } : item
      );
    },
    onDeleteFavoriteVideo(state, action: PayloadAction<string>) {
      state.favoriteVideos = state.favoriteVideos.filter(
        (item: Video) => item.id !== action.payload
      );
    },
    setMainCurrentPage(state) {
      state.favoritesPage = false;
      state.mainPage = true;
    },
    setFavoritesCurrentPage(state) {
      state.mainPage = false;
      state.favoritesPage = true;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
});

export const {
  setInputValue,
  setCurrentUser,
  setCurrentVideos,
  setFavoriteVideo,
  onDeleteFavoriteVideo,
  setMainCurrentPage,
  setFavoritesCurrentPage,
  setStartFavoriteVideo,
  setLoading,
} = currencySlice.actions;
export default currencySlice.reducer;
