export default interface JikanResponse {
  data: JikanData[];
  pagination: Pagination;
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  items: Items;
}

interface Items {
  count: number;
  total: number;
  per_page: number;
}

export interface JikanData {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Producer[];
  studios: Producer[];
  genres: Producer[];
  explicit_genres: Producer[];
  themes: Producer[];
  demographics: Producer[];
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface Aired {
  from: string;
  to: string;
  prop: Prop;
}

interface Prop {
  from: From;
  to: From;
  string: string;
}

interface From {
  day: number;
  month: number;
  year: number;
}

interface Title {
  type: string;
  title: string;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface Images {
  jpg: Jpg;
  webp: Jpg;
}

export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface JikanRecomendedAnime {
  data: RecomendedData[];
  pagination: Pagination;
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}

interface RecomendedData {
  mal_id: string;
  entry: Entry[];
  content: string;
  user: User;
  [key: string]: string | Entry[] | User;
}

interface User {
  url: string;
  username: string;
}

export interface Entry {
  mal_id: number;
  url: string;
  images: Images;
  title: string;
}
