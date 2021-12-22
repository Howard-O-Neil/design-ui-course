
export interface vids_t {
  time: string;
  title: string;
  url: string;
}

export interface intro_t {
  vid_type: string; // split or timestamp
  list_content: vids_t[];
}

export interface account_review_t {
  name: string;
  avatar: string;
  text: string;
}

export interface course_content_t {
  name: string;
  num_lectures: number;
  length: number;
}

export interface teacher_t {
  name: string;
  avatar: string;
}

export interface course_t {
  id: string;
  title: string;
  host_url: string;
  categories: string[];
  cost: number;
  language: string;
  certificate: string;
  description: string;
  short_description: string;
  requirements: string;
  subject_student: string;
  length: number;
  thumbnail: string;
  num_students: number;
  num_students_last3week: number;
  liked: number;
  teacher: teacher_t;
  contents: course_content_t[];
  reviews: account_review_t[];
  intro: intro_t;
}

import faker from "faker"
import { AvatarGenerator } from 'random-avatar-generator';

const avtGenerator = new AvatarGenerator();

export let COURSES_DB: course_t[] = [
  {
    id: "1",
    title: "Microsoft Excel for Finance, Accounting & Financial Analysis",
    host_url: "https://www.udemy.com/course/excel-for-business-users/",
    categories: ["Finance"],
    cost: 0,
    language: "en",
    certificate: "Certificate of completion",
    description: "lorem",
    short_description: "Excel tips & tricks for Accounting, Finance and Financial Analysis. Learn from the Bestselling Accounting Instructor",
    requirements: "lorem",
    subject_student: "lorem",
    length: 2.5,
    thumbnail: "https://img-c.udemycdn.com/course/240x135/3020540_73ed.jpg",
    num_students: 65984,
    num_students_last3week: 2500,
    liked: 100,

    intro: {
      vid_type: "timestamp",
      list_content: [
        { time: "0:49", title: "lorem", url: "lorem" },
      ]
    },
    contents: [
      { name: "lorem", num_lectures: 5, length: 41 },
    ],
    reviews: [
      { name: "lorem", avatar: "lorem", text: "lorem" },
    ],
    teacher: {
      name: faker.name.findName(), avatar: avtGenerator.generateRandomAvatar()
    }
  },
  {
    id: "2",
    title: "Microsoft Excel for Finance, Accounting & Financial Analysis",
    host_url: "https://www.udemy.com/course/excel-for-business-users/",
    categories: ["Computer Science"],
    cost: 0,
    language: "en",
    certificate: "Certificate of completion",
    description: "lorem",
    short_description: "Excel tips & tricks for Accounting, Finance and Financial Analysis. Learn from the Bestselling Accounting Instructor",
    requirements: "lorem",
    subject_student: "lorem",
    length: 2.5,
    thumbnail: "https://img-c.udemycdn.com/course/240x135/3020540_73ed.jpg",
    num_students: 65884,
    num_students_last3week: 2600,
    liked: 100,

    intro: {
      vid_type: "timestamp",
      list_content: [
        { time: "0:49", title: "lorem", url: "lorem" },
      ]
    },
    contents: [
      { name: "lorem", num_lectures: 5, length: 41 },
    ],
    reviews: [
      { name: "lorem", avatar: "lorem", text: "lorem" },
    ],
    teacher: {
      name: faker.name.findName(), avatar: avtGenerator.generateRandomAvatar()
    }

  },
  {
    id: "3",
    title: "Microsoft Excel for Finance, Accounting & Financial Analysis",
    host_url: "https://www.udemy.com/course/excel-for-business-users/",
    categories: ["Design"],
    cost: 0,
    language: "en",
    certificate: "Certificate of completion",
    description: "lorem",
    short_description: "Excel tips & tricks for Accounting, Finance and Financial Analysis. Learn from the Bestselling Accounting Instructor",
    requirements: "lorem",
    subject_student: "lorem",
    length: 2.5,
    thumbnail: "https://img-c.udemycdn.com/course/240x135/3020540_73ed.jpg",
    num_students: 64884,
    num_students_last3week: 3000,
    liked: 100,

    intro: {
      vid_type: "timestamp",
      list_content: [
        { time: "0:49", title: "lorem", url: "lorem" },
      ]
    },
    contents: [
      { name: "lorem", num_lectures: 5, length: 41 },
    ],
    reviews: [
      { name: "lorem", avatar: "lorem", text: "lorem" },
    ],
    teacher: {
      name: faker.name.findName(), avatar: avtGenerator.generateRandomAvatar()
    }

  },
  {
    id: "4",
    title: "Microsoft Excel for Finance, Accounting & Financial Analysis",
    host_url: "https://www.udemy.com/course/excel-for-business-users/",
    categories: ["Multimedia"],
    cost: 0,
    language: "en",
    certificate: "Certificate of completion",
    description: "lorem",
    short_description: "Excel tips & tricks for Accounting, Finance and Financial Analysis. Learn from the Bestselling Accounting Instructor",
    requirements: "lorem",
    subject_student: "lorem",
    length: 2.5,
    thumbnail: "https://img-c.udemycdn.com/course/240x135/3020540_73ed.jpg",
    num_students: 75884,
    num_students_last3week: 3500,
    liked: 100,

    intro: {
      vid_type: "timestamp",
      list_content: [
        { time: "0:49", title: "lorem", url: "lorem" },
      ]
    },
    contents: [
      { name: "lorem", num_lectures: 5, length: 41 },
    ],
    reviews: [
      { name: "lorem", avatar: "lorem", text: "lorem" },
    ],
    teacher: {
      name: faker.name.findName(), avatar: avtGenerator.generateRandomAvatar()
    }
  },
  {
    id: "5",
    title: "Microsoft Excel for Finance, Accounting & Financial Analysis",
    host_url: "https://www.udemy.com/course/excel-for-business-users/",
    categories: ["Finance"],
    cost: 0,
    language: "en",
    certificate: "Certificate of completion",
    description: "lorem",
    short_description: "Excel tips & tricks for Accounting, Finance and Financial Analysis. Learn from the Bestselling Accounting Instructor",
    requirements: "lorem",
    subject_student: "lorem",
    length: 2.5,
    thumbnail: "https://img-c.udemycdn.com/course/240x135/3020540_73ed.jpg",
    num_students: 75884,
    num_students_last3week: 3500,
    liked: 100,

    intro: {
      vid_type: "timestamp",
      list_content: [
        { time: "0:49", title: "lorem", url: "lorem" },
      ]
    },
    contents: [
      { name: "lorem", num_lectures: 5, length: 41 },
    ],
    reviews: [
      { name: "lorem", avatar: "lorem", text: "lorem" },
    ],
    teacher: {
      name: faker.name.findName(), avatar: avtGenerator.generateRandomAvatar()
    }

  },
]