export const SETTING_CARD = {
  PlacesCount: 312
};

export const SITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SORT_TYPES: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Main = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export interface CardData {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export const CARD_MOCK_DATA: CardData[] = [
  {
    'id': '445f03aa-9650-4b58-9304-8f0e453a4f41',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 136,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': 'b14a184b-e9de-4823-b72d-bc3449f8bda5',
    'title': 'House in countryside',
    'type': 'house',
    'price': 853,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '8021e847-18ac-46a2-b02d-54ca1899ba6c',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 282,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '9fd7188b-8426-4414-ace5-fdfc57ffaebc',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 873,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '81283e09-b775-442e-befb-a1486a0ecf86',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 887,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': '1e381222-c598-4b75-ac63-ae4cb71858ea',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 354,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': 'de218d9c-3650-4997-b50a-c015a745e1f1',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 229,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': '2b06d1ee-4b54-49f2-bdb2-33f13f14ec73',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 283,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': 'ed4c371d-fbc5-4118-b6bc-e71118ce43ea',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 366,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': '90b6d701-6fef-48fd-b30f-93166c93d4b1',
    'title': 'Tile House',
    'type': 'room',
    'price': 187,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '2874bdb9-f481-4dfe-942b-7b98be1be826',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 174,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': 'ea366eb1-7623-4937-b3c3-c6a98d2bb39e',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 103,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.861610000000006,
      'longitude': 2.340499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '8f8d585c-9c42-411f-9247-94628f7226f6',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 431,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87861,
      'longitude': 2.357499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '31e05335-5f8e-40fb-91aa-2a052db6809d',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 234,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.877610000000004,
      'longitude': 2.333499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '879b8f12-b1ed-4988-abc9-4a3ffdd6cc42',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 167,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83961,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '32574812-8cce-4a67-8a4c-e238dea32d09',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 417,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.865610000000004,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 5
  },
  {
    'id': 'c8cd07b7-e976-484a-b5ec-b6f471067abe',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 794,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '2d9e2545-d4db-417f-b26f-531666969529',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 271,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': 'f72f1401-e6da-46da-8bf4-67e621086f80',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 110,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': '9feace36-5528-466f-b5ad-d82f9edd88e3',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 279,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '301cc325-0f6a-49f2-bdb8-1d288150e125',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 247,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': 'c98028c0-6a49-45bd-b781-7686868c662b',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 831,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': 'a41ca5a8-c740-4226-ab6d-fee7430c7e5e',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 476,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '2014cc74-40da-4394-a40b-57b1b0283d70',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 107,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.947361,
      'longitude': 6.9799739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '37d899fe-1bd1-43c4-8592-2cb80d214f8c',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 472,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.967974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': '0ece0dcc-65fa-4824-997c-e27bbc9b0ca8',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 821,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': '6b5bbf7c-4dbe-41d9-831f-a147c7bcb9cb',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 227,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '4bae31fa-60ef-4259-b0d8-991f2b5c15f5',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 154,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '713c1c5e-33cd-4b8d-9528-18fd5ad7db1d',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 142,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '8a3778c8-d7f2-466b-ac89-97fce573003c',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 103,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': 'a6b0334a-cac2-455a-b193-4c8b6eeeaf5f',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 312,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': '4d036e78-2862-4325-814f-dfa59b68d978',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 478,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2
  },
  {
    'id': '7755bf29-570a-4e63-a1cf-99fbada0805d',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 188,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '84cf1c7a-e37b-4466-9654-69c18420c5d1',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 150,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': '9047f5c7-d7f5-4386-a323-0cfaf9415c9e',
    'title': 'House in countryside',
    'type': 'house',
    'price': 999,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': 'be51da52-310b-4680-8e55-e08362f51687',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 336,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.960974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '8fed3bed-3dc0-4d18-9642-581aa518a6b2',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 325,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.954361,
      'longitude': 6.982974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': 'ad1c45b6-54d7-494b-8f2c-57818b927470',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 204,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.962974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': 'df9ee72e-1b77-46dc-8de5-82639f2991e1',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 392,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.917361,
      'longitude': 6.977974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': '745dece1-d2c2-4e81-8460-0ae77f60688e',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 378,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.935974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'bcb339f8-a3a7-492d-8822-92cf52f448e2',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 219,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.5
  },
  {
    'id': 'e90f4ac3-0a13-4ba9-ad79-f73d8a204f31',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 199,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': '8cedd4ad-f7d0-4182-b7b9-7fd59a7d1e81',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 472,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.827557,
      'longitude': 4.336697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '37943457-c537-4649-9adf-d09034dde49d',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 258,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.833557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '415469ae-f64e-4357-be50-60e551775216',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 341,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.837557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': '2b32a77a-ff53-4e87-bb8d-b5819f4c792f',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 283,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.849557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': '2e898b07-acb9-4eb7-8086-3f0a2cbdd5cc',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 219,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.852557,
      'longitude': 4.3376969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': 'afce170a-80e6-4052-9d23-4c61a86bc632',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 455,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.828556999999996,
      'longitude': 4.362697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': 'c99aeeff-202b-4f4f-9502-bab1e690a992',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 165,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.835556999999994,
      'longitude': 4.354697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': '24b3a443-d550-4b94-a89e-95116771ee44',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 210,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '132807cd-8b67-47e1-a268-07c264e6bcb4',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 804,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.839557,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '18e452f0-85b5-4d5c-b369-384c6db887c2',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 121,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.844556999999995,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4
  },
  {
    'id': '582ff5cb-4451-40e3-8fbe-19e0b707529d',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 413,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.865556999999995,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': '46769a7b-d958-4e68-9112-5f54e9df7ae5',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 280,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.869557,
      'longitude': 4.332697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': 'f1505983-7a51-4f8a-801d-6002f3aefe86',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 255,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.860557,
      'longitude': 4.376697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7
  },
  {
    'id': '3480859c-b6e1-4331-91a5-4b66bccf5ac7',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 446,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.862556999999995,
      'longitude': 4.375697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '0da27baf-7ea0-42fc-98cf-939831a1af55',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 327,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '7b20dbbe-13d3-49c5-8bd5-265c55b88eed',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 182,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.822556999999996,
      'longitude': 4.347697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': 'c914f938-9185-4959-93e0-587c37a95add',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 316,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': '97c45956-329f-44de-b2ee-02aa91b33814',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'hotel',
    'price': 455,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': 'a3108426-4694-4360-9eac-422b419bd643',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 131,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36554,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': '6535c824-12cc-4169-bdad-9319efb5d949',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 122,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '254c632f-9ca6-4219-90f7-dac69a7a8126',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 498,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '0123eb07-86f7-4a3c-88b0-168d59e7cd87',
    'title': 'Tile House',
    'type': 'room',
    'price': 198,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': '70b42f87-c6b5-4e6b-bee1-3523b858ee20',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 297,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },
  {
    'id': '1ba18c26-3767-4004-85f5-4625580ea82f',
    'title': 'House in countryside',
    'type': 'house',
    'price': 559,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': 'e90ed26e-4485-4f5f-a744-d80db5735203',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 760,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35754,
      'longitude': 4.9179759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '865ab749-b651-4d99-a503-797474683415',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 314,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37854,
      'longitude': 4.894976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '08f037f5-860d-4b28-af9c-d6943daaa260',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 347,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36854,
      'longitude': 4.887976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': 'dec1c4e2-008e-4f37-8ea4-9359bcf77cad',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 390,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.370540000000005,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': '83491c73-f627-4eb3-a677-850e54ccbee9',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 274,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.389540000000004,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.5
  },
  {
    'id': '1c87f93b-835c-43ac-ab9b-5314f2f790b6',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 147,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35054,
      'longitude': 4.908976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': '8a514fff-4191-4b1b-8686-53e154adfc98',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 402,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37154,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': 'e3e347ee-83e2-4bef-9a95-7b443081568f',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 223,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.364540000000005,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': '006ef9a8-aa33-4be1-9e03-8bef29abf5e1',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 287,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': '369cf065-38bb-4111-8457-e5ecaa4f778a',
    'title': 'House in countryside',
    'type': 'house',
    'price': 498,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '3c13465e-14c4-424d-953a-ecbb2692b74a',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 353,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.388540000000006,
      'longitude': 4.899976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.3
  },
  {
    'id': '4677923b-a854-4478-910b-43bf92eb6d84',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 245,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36954,
      'longitude': 4.914976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '7b58dc2b-36c8-4df5-aa02-1e04fdceca6d',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 419,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37554,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': 'a5a464b0-43d2-4599-a871-7c0e99b7c324',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 137,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.886976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '27911a0b-44cf-4b28-bc4f-3af1b325f66d',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 228,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 10.018654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '2ba06c2b-f676-4348-ba0b-227b993ad257',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 116,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.538341,
      'longitude': 9.976654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': '43cb35b3-1a98-4a2f-9588-f976f8c64216',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 349,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 10.019654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '228ac60a-5137-4e71-bd51-76b222c7fbaf',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 257,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.7
  },
  {
    'id': '948c68e9-5429-4bc4-af20-f2684347fb26',
    'title': 'Tile House',
    'type': 'room',
    'price': 128,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': '572ebd7f-a1d3-4721-b36d-7a746ee77159',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 486,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.546341000000005,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '2297bbd6-bcfe-4672-bcc9-0952e5fbc5af',
    'title': 'The house among olive ',
    'type': 'room',
    'price': 111,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341000000004,
      'longitude': 9.978654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': 'bf2aa0a0-c4f0-4fa9-90c2-ac38a6eea6a6',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 262,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.570341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8
  },
  {
    'id': 'cf4819b0-ef2a-46ff-944c-c51e10c031a9',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 134,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 10.001654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': 'a26460ed-6a8d-4b03-9acb-fe9bfaa668c2',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 995,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.009654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '0416b112-2975-4d09-99dc-e5495a38c4c1',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 121,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 9.994654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': 'ffc07a36-0a91-4b41-86a1-5642b297e83e',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 464,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 9.982654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': 'fab26b97-6d98-4d03-a6f9-bda21f86c1e8',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 381,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.540341000000005,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': 'db922710-fa42-4129-80be-f96ef817c9e9',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 293,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.555341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '4ce5cb4f-a5b0-4cde-8ca8-85b5c445afe8',
    'title': 'Waterfront with extraordinary view',
    'type': 'house',
    'price': 396,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.534341000000005,
      'longitude': 9.998654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '7cd913f9-1a0e-4ee8-be3f-849c5048ee71',
    'title': 'House in countryside',
    'type': 'house',
    'price': 239,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': '426b0f9a-f415-42d1-b3e8-0b13e93af1c8',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 599,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.574341000000004,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': 'a537a104-e1e8-4ded-b2e8-46ca3e1950a0',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 202,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 5
  },
  {
    'id': '26e418ab-75f9-4548-9fc3-66280543856e',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 569,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.550341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': '83b05fc8-4b69-47c7-ade5-eec8ac977cec',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 226,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 9.999654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.7
  },
  {
    'id': '89c86da7-f627-42b1-a69b-56ed1280c6d5',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 412,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.236402000000005,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': 'a9cc5076-0c8a-415f-b7ff-0e1ed7685a5a',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 445,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.210402,
      'longitude': 6.798314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': '59f7390f-a031-47f6-8ca8-774b260fd3a9',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 292,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.211402,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': '74a00382-8798-46c2-8d1d-47421b347f09',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 266,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.228402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': '1bf1c73e-c9a4-43bf-8ca6-96c43426e0f4',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 122,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.204402,
      'longitude': 6.7773140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': '8bb089f3-4c49-4a06-bfa5-73f50bfee589',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 178,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.217402,
      'longitude': 6.7693140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.7
  },
  {
    'id': 'b0d0512c-92c4-42ae-a4a9-9267a3d267be',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 218,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.241402,
      'longitude': 6.782314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': 'dff0d24b-60ab-4917-b5d3-f6622b8569f5',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 441,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.235402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '4af49468-c6e1-46ee-8bb4-6371f89a2da1',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 134,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.779314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '977fa63d-12de-4e2d-a1a2-d2ab9fc39454',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 225,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.797314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': '11edc8c9-c06c-43dc-a9fe-ebcd55bc389d',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 469,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.222402,
      'longitude': 6.786314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.7
  },
  {
    'id': '63cf8fdb-f0d5-4d3a-ade0-99eaf968420c',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 439,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.232402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': '778c00ac-21d3-4854-98d2-a90d58d8dc62',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 904,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.216402,
      'longitude': 6.758314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '8227fef1-660f-4616-8a70-e3f3e832992e',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 101,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.205402,
      'longitude': 6.7613140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': 'd5714751-e834-4dad-acb6-f924e7172658',
    'title': 'House in countryside',
    'type': 'apartment',
    'price': 172,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.248402000000006,
      'longitude': 6.763314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': '04eb1a63-701e-4a66-a4f8-2814db71b113',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 266,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.250402,
      'longitude': 6.7853140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': '7fcfcfc1-18f3-4a5d-911c-c7adc272c318',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 368,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.239402000000005,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '0b6b3ce3-b86f-4a69-ac36-eb1e5d3b43b8',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 472,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': 'c72aeaf8-bdef-4464-83df-ff6330b7268f',
    'title': 'House in countryside',
    'type': 'house',
    'price': 659,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.214402,
      'longitude': 6.764314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': '057171ea-a922-4df1-a6b6-03b80d70bfc1',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 143,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  }
];


export interface UserData {
  userName: string;
  favoriteCount: number;
}

export const USER_DATA: UserData = {
  userName: 'Admin.admin000@yandex.ru',
  favoriteCount: 0,
};

export const CARD_NEIGHBOURHOOD_MOCK_DATA: CardData[] = [
  {
    'id': '057171ea-a922-4df1-a6b6-03b80d70bfc1',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 80,
    'previewImage': 'img/room.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '057171ea-a922-4df1-a6b6-03b80d70bfc1',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 132,
    'previewImage': 'img/apartment-02.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  }, {
    'id': '057171ea-a922-4df1-a6b6-03b80d70bfc1',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 180,
    'previewImage': 'img/apartment-03.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  }
];

export interface CommentData {
  id: string;
  date: string;
  user: {
  name: string;
  avatarUrl: string;
  isPro: boolean;};
  comment: string;
  rating: number;
}

export const COMMENT_MOCK_DATA: CommentData[] = [
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  }];

