import image1 from "../assets/img/post-screen-example-1.png";
import image2 from "../assets/img/post-screen-example-2.png";
import image3 from "../assets/img/post-screen-example-5.png";
import userAvatar1 from "../assets/img/userAvatar.png";
import userAvatar2 from "../assets/img/userAvatar_.png";

export const postsData = [
  { id: "1", image: image1, title: "Ліс", comment: 1 },
  {
    id: "2",
    image: image2,
    title: "Захід на Чорному морі",
    comment: 1,
  },
  {
    id: "3",
    image: image3,
    title: "Старий будиночок у Венеції",
    comment: 1,
  },
];

export const profileData = [
  { id: "1", image: image1, title: "Ліс", comment: 1, like: 200 },
  {
    id: "2",
    image: image2,
    title: "Захід на Чорному морі",
    comment: 3,
    like: 200,
  },
  {
    id: "3",
    image: image3,
    title: "Старий будиночок у Венеції",
    comment: 50,
    like: 200,
  },
];

export const commentsData = [
  {
    id: "1",
    image: userAvatar1,
    title:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
  {
    id: "2",
    image: userAvatar2,
    title:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
  },
  {
    id: "3",
    image: userAvatar1,
    title: "Thank you! That was very helpful!",
  },
  {
    id: "5",
    image: userAvatar1,
    title:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
  {
    id: "6",
    image: userAvatar2,
    title:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
  {
    id: "7",
    image: userAvatar2,
    title:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
];
