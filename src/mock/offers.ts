import { CommentTypeData, CardTypeData, UserTypeData, OfferTypeData } from '../components/type';

export const CARD_MOCK_DATA: CardTypeData[] = [
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
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.2
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
    'isFavorite': true,
    'isPremium': false,
    'rating': 2
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
    'isFavorite': true,
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

];

export const USER_DATA: UserTypeData = {
  userName: 'Admin.admin000@yandex.ru',
  favoriteCount: 0,
};

export const CARD_NEIGHBOURHOOD_MOCK_DATA: CardTypeData[] = [
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
    'isFavorite': true,
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
];

export const OFFER_MOCK_DATA: OfferTypeData =
{
  'id': '4ea6510a-0b4f-423f-9937-aaee1d46f796',
  'title': 'Canal View Prinsengracht',
  'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  'type': 'apartment',
  'price': 482,
  'images': [
    'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/20.jpg'
  ],
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
  'goods': [
    'Dishwasher',
    'Air conditioning',
    'Laptop friendly workspace',
    'Kitchen',
    'Heating',
    'Towels',
    'Cable TV',
    'Wi-Fi',
    'Coffee machine'
  ],
  'host': {
    'isPro': true,
    'name': 'Angelina',
    'avatarUrl': 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
  },
  'isPremium': false,
  'isFavorite': false,
  'rating': 5,
  'bedrooms': 32,
  'maxAdults': 17
};

export const COMMENT_MOCK_DATA: CommentTypeData[] = [
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
  },
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b63a',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Connering',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  }];

export const FAVORITES_MOCK_DATA: CardTypeData[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 190.7,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png'
  }
];
