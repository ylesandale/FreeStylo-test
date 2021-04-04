interface Video {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  title: string;
  description: string;
  created_at: string;
  published_at: string;
  url: string;
  thumbnail_url: string;
  viewable: string;
  view_count: number;
  language: string;
  type: string;
  duration: string;
  favoriteVideo?: boolean;
}

interface StateSelector {
  app: {
    inputValue: string;
    currentUserId: string;
    currentVideos: Video[] | [];
    favoriteVideos: Video[] | [];
    mainPage: boolean;
    favoritesPage: boolean;
    loading: boolean;
  };
}

interface State {
  inputValue: string;
  currentUserId: string;
  currentVideos: Video[] | any[];
  favoriteVideos: Video[] | any[];
  mainPage: boolean;
  favoritesPage: boolean;
  loading: boolean;
}
