import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Ayush",
    lastName: "Pratap",
    email: "ayush@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "IMG_6863 (1).png",
    friends: [],
    location: "Jhansi, Uttar Pradesh",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Mannu",
    lastName: "Srk",
    email: "mannu@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "IMG_7102.png",
    friends: [],
    location: "Surat, Gujrat",
    occupation: "Backend developer",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Utkarsh",
    lastName: "Pratap",
    email: "utkarsh@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "IMG_6924.png",
    friends: [],
    location: "Gorakhpur, UP",
    occupation: "Full Stack developer",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Utkarsh",
    lastName: "Pratap",
    location: "Gorakhpur, UP",
    description: "Coorg trip with friends",
    picturePath: "IMG_6864.png",
    userPicturePath: "IMG_6924.png",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
    ]),
    comments: [
      "Very nice Place",
      "Coord is one of the best place of karnataka",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Ayush",
    lastName: "Pratap",
    location: "Jhansi, Uttar Pradesh",
    description:
      "Meet my best friend Manendra",
    picturePath: "IMG_7102.png",
    userPicturePath: "IMG_6863 (1).png",
    likes: new Map([
      [userIds[2], true],
    ]),
    comments: [
      "Nice Picture boy",
      "Awesome friendship bond",
    ],
  },
];