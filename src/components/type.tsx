export interface CommentTypeData {
  id: string;
  date: string;
  user: {
  name: string;
  avatarUrl: string;
  isPro: boolean;};
  comment: string;
  rating: number;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
    name: string;
    location: Location;
  };

export interface CardTypeData {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export interface UserTypeData {
  userName: string;
  favoriteCount: number;
}

export interface OfferTypeData {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: City;
  location: Location;
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}

