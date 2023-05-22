import faculty from "../assets/faculty.svg";
import faculty2 from "../assets/faculty2.svg";
import operations from "../assets/Operations.jpeg";
import marketing from "../assets/Joint Research and Marketing.jpg";
import relations from "../assets/Corporate Relations.jpg";
import design from "../assets/Creative design.jpg";
import media from "../assets/Social Media.jpg";
import affairs from "../assets/Student Affairs and PR.jpg";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Events", href: "#events", current: false },
  { name: "Team", href: "#team", current: false },
  { name: "Contact", href: "#contact", current: false },
];

const faculties = [
  {
    name: "Dr. Shalini Mahato",
    image: faculty,
  },
  {
    name: "Dr. Hassan Shadab",
    image: faculty2,
  },
];

const students = [
  {
    title: "CORPORATE RELATIONS",
    name: "Shahnawaz Khan",
    image: relations,
  },
  {
    title: "OPERATIONS",
    name: "Yash Raj",
    image: operations,
  },
  {
    title: "MARKETING",
    name: "Manu Shukla",
    image: marketing,
  },
  {
    title: "SOCIAL MEDIA",
    name: "Piyush Madhukar",
    image: media,
  },
  {
    title: "STUDENT AFFAIRS & PR",
    name: "Prafful Sharma",
    image: affairs,
  },
  {
    title: "CREATIVE DESIGN",
    name: "Manjeet Singh",
    image: design,
  },
];

export { navigation, students, faculties };