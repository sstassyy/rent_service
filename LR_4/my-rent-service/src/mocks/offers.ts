import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
    {
        id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
        title: "Wood and stone place",
        description: "A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families",
        type: "apartment",
        price: 370,
        images: ["/img/apartment-01.jpg", "/img/apartment-02.jpg", "/img/apartment-03.jpg"],
        city: {
            name: "Paris",
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.86861,
            longitude: 2.342499,
            zoom: 16
        },
        goods: ["Heating", "Wi-Fi", "Fridge", "Laptop friendly workspace", "Baby seat", "Air conditioning", "Washer", "Towels", "Dishwasher", "Kitchen", "Washing machine", "Breakfast", "Coffee machine"],
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "/img/avatar-angelina.jpg"
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.9,
        bedrooms: 2,
        maxAdults: 3
    },
    {
        id: "f9a3b4c6-7d5a-4e2d-8a2b-614fb2ddf6c3",
        title: "Cozy studio in Amsterdam",
        description: "A small yet comfortable studio in the heart of Amsterdam. Close to all attractions and canals.",
        type: "studio",
        price: 250,
        images: ["/img/amsterdam-studio-1.jpg", "/img/amsterdam-studio-2.jpg", "/img/amsterdam-studio-3.jpg"],
        city: {
            name: "Amsterdam",
            location: {
                latitude: 52.37403,
                longitude: 4.88969,
                zoom: 13
            }
        },
        location: {
            latitude: 52.37589,
            longitude: 4.88121,
            zoom: 16
        },
        goods: ["Wi-Fi", "Kitchen", "Coffee machine", "Towels", "Washing machine"],
        host: {
            isPro: false,
            name: "Thomas",
            avatarUrl: "/img/avatar-max.jpg"
        },
        isPremium: false,
        isFavorite: false,
        rating: 4.7,
        bedrooms: 1,
        maxAdults: 2
    },
    {
        id: "a1b2c3d4-5678-9101-1121-314151617181",
        title: "Modern loft",
        description: "A spacious loft with an industrial design. Perfect for digital nomads and artists.",
        type: "loft",
        price: 450,
        images: ["/img/berlin-loft-1.jpg", "/img/berlin-loft-2.jpg", "/img/berlin-loft-3.jpg"],
        city: {
            name: "Berlin",
            location: {
                latitude: 52.5200066,
                longitude: 13.404954,
                zoom: 13
            }
        },
        location: {
            latitude: 52.523356,
            longitude: 13.412338,
            zoom: 16
        },
        goods: ["Heating", "Wi-Fi", "Laptop friendly workspace", "Kitchen", "Dishwasher"],
        host: {
            isPro: true,
            name: "Michael",
            avatarUrl: "/img/avatar-max.jpg"
        },
        isPremium: true,
        isFavorite: true,
        rating: 4.8,
        bedrooms: 2,
        maxAdults: 4
    },
    {
        id: "98765432-1abc-4def-5678-90abcdef1234",
        title: "Luxury penthouse",
        description: "A luxurious penthouse with stunning city views, large terrace, and all modern amenities.",
        type: "penthouse",
        price: 600,
        images: ["/img/brussels-penthouse-1.jpg", "/img/brussels-penthouse-2.jpg", "/img/brussels-penthouse-3.jpg"],
        city: {
            name: "Brussels",
            location: {
                latitude: 50.85045,
                longitude: 4.34878,
                zoom: 13
            }
        },
        location: {
            latitude: 50.8521,
            longitude: 4.3571,
            zoom: 16
        },
        goods: ["Wi-Fi", "Heating", "Air conditioning", "Jacuzzi", "Kitchen", "Dishwasher", "Washing machine"],
        host: {
            isPro: true,
            name: "Sophia",
            avatarUrl: "/img/avatar-angelina.jpg"
        },
        isPremium: true,
        isFavorite: false,
        rating: 4.9,
        bedrooms: 3,
        maxAdults: 5
    }
];
