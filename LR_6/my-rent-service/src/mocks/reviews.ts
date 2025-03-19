import { Review } from "../types/review";

export const reviews: Review[] = [
  {
    id: "463632e8-eecc-42a2-b2fc-797a299b5230",
    comment: "The room was spacious and clean. The pool looked nothing like the photos.",
    date: "2023-06-29T21:00:00.465Z",
    rating: 4,
    user: {
      name: "Max",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true,
    },
  },
  {
    id: "aa8832e8-bbcd-42a2-cdef-123a299b5678",
    comment: "The location was perfect. Everything was within walking distance.",
    date: "2023-08-15T18:30:00.465Z",
    rating: 5,
    user: {
      name: "Angel",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: false,
    },
  }
];

export default reviews;
