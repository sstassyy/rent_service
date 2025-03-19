import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
    title: "Wood and stone place",
    type: "apartment",
    price: 370,
    previewImage: "/img/apartment-01.jpg",
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.86861,
      longitude: 2.342499,
      zoom: 16,
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
  },
  {
    id: "f9a3b4c6-7d5a-4e2d-8a2b-614fb2ddf6c3",
    title: "Cozy studio in city center",
    type: "room",
    price: 120,
    previewImage: "/img/amsterdam-studio-1.jpg",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.37403,
        longitude: 4.88969,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 16,
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.5,
  },
  {
    id: "a1b2c3d4-5678-9101-1121-314151617181",
    title: "Modern loft",
    type: "house",
    price: 850,
    previewImage: "/img/berlin-loft-2.jpg",
    city: {
      name: "Brussels",
      location: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.8476,
      longitude: 4.3572,
      zoom: 16,
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
  },
  {
    id: "98765432-1abc-4def-5678-90abcdef1234",
    title: "Luxury penthouse",
    type: "hotel",
    price: 250,
    previewImage: "/img/brussels-penthouse-1.jpg",
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13,
      },
    },
    location: {
      latitude: 53.5585,
      longitude: 9.9278,
      zoom: 16,
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.6,
  },
];