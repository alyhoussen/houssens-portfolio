import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Oussen Aly",
  initials: "HA",
  url: "https://alyhoussen.vercel.app",
  location: "Fianarantsoa, MDG",
  locationLink: "https://www.google.com/maps/place/madagascar",
  avatarUrl: "me.png",
  description:
    "A Computer Science student / Software Developer. I love building things and solve problems through code. I'm open to all opportunities.",
  summary: "In 2022, I obtained my Science High School Diploma from St. Vincent de Paul in Andohanilakaka. That marked the beginning of my journey in shaping my future career and academic path. \nDriven by a strong passion for technology and computers, I chose to pursue a degree in Computer Science at EMIT Fianarantsoa. Since then, I’ve been working hard to develop my skills and deepen my knowledge in this field. \nToday, I feel confident in the solid foundation I’ve built, and I am actively seeking internship opportunities to gain hands-on experience and continue learning. \nOn February 12, 2025, I participated in my very first hackathon, thanks to our tech club, EMITECH. It was an amazing experience, and I’m excited to join more competitions and challenges in the future.", 
  skills: [
    "React",
    "Next.js",
    "Tailwindcss", 
    "Typescript",
    "Node.js", 
    "Laravel",
    "Python", 
    "Postgres",
    "MySQL",
    "C++",
    "Java",
    "C#",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "oussenalyjoma@gmail.com",
    tel: "+261-38-78-399-19",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alyhoussen",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oussen-aly-joma-79b29b311",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/OussenAly?s=09",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "oussenalyjoma@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
     {
       company: "Team Leader Center",
       href: "https://atomic.finance",
       badges: [],
       location: "Local",
       title: "Software Development Engineering Intern",
      logoUrl: "/T.png",
       start: "June 2024",
       end: "sept 2024",
       description:
         "Implemented a web application ( information system ) to track students registrations and manage internal activities",
     },
     {
       company: "Academic Project",
       badges: [],
       href: "emit.mg",
       location: "Local",
       title: "Scrum Master, Tech Lead, Product Owner",
       logoUrl: "/emit.png",
       start: "March 2025",
       end: "April 2025",
       description:
         `Led a 7-member team to design and prototype a real-time collaboration platform for work teams
Defined product vision, user flows, and technical architecture for a seamless, team-centric experience
`      },
  ],
  education: [
     {
       school: "EMIT Fianarantsoa",
       href: "https://emit.mg",
       degree: "Bachelor of Science in Computer Science",
       logoUrl: "/emit.png",
       start: "2023",
       end: "Expected Graduation, November 2025",
     }
  ],
  projects: [
    
     {
       title: "Decizio",
       href: "https://decizio.online",
       dates: "March 2025",
       active: true,
       description:
         "A landing page for my future app, named Decizio, which is a decision making app that helps you make decisions, easily and efficiently.",
       technologies: [
         "Next.js",
         "TailwindCSS",
       ],
       links: [
        {
          type: "Source",
          href: "https://github.com/alyhoussen/decizio",
          icon: <Icons.github className="size-3" />,
        },
       ],
       image: "/Decizio.PNG",
       video:
         "",
     },
     {
       title: "IjeryMeteo",
       href: "https://ijerymeteo.netlify.app/",
       dates: "March 2025",
       active: true,
       description:
         "A simple Weather App that allows you to check the weather forecast in your city or region just by searching it. I implemented this app using React and the Open-meteo API to fetch the weather data.",
       technologies: [
         "React",
         "TailwindCSS",
         "Open-meteo API",
       ],
       links: [
        {
          type: "Source",
          href: "https://github.com/alyhoussen/weather-app",
          icon: <Icons.github className="size-3" />,
        },
       ],
       image: "/Ijery_meteo.PNG",
       video:
         "",
     }, {
       title: "SmartSub",
       href: "",
       dates: "April 2025",
       active: true,
       description:
         "A personal subscription manager, helping manage your subscriptions easily. It allows you to add, edit, and delete your subscriptions, and also provides a dashboard to see your subscriptions at a glance. It has a suggestion feature that suggests you alternatives that maybe cheaper or better.",
       technologies: [
         "React",
         "TailwindCSS",
         "Spring Boot",
         "PostgreSQL",
       ],
       links: [
        {
          type: "Source",
          href: "https://github.com/alyhoussen/smartsub_frontend",
          icon: <Icons.github className="size-3" />,
        },
       ],
       image: "/Smart_sub.PNG",
       video:
         "",
     },
     {
       title: "Screen Recorder App",
       href: "",
       dates: "Mai 2025 - now",
       active: true,
       description:
         "Simple and easy to use web based screen recorder app, that allows you to record your screen in one click, updload it, and share it with friends.",
       technologies: [
         "Next.js",
         "Typescript",
         "TailwindCSS",
       ],
       links: [
        {
          type: "Source",
          href: "https://github.com/alyhoussen/screen_recorder",
          icon: <Icons.github className="size-3" />,
        },
       ],
       image: "/Screen_recorder.PNG",
       video:
         "",
     },
    {
      title: "Training Center Management Application",
      href: "",
      dates: "Jul 2024 - Sep 2024",
      active: true,
      description:
        "A management system, tailored to allow training center operations to be managed efficiently, including student enrollment and fee monitoring.",
      technologies: [
        "Laravel",
        "Tailwindcss",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/traininghttps://github.com/alyhoussen/Training_Center_Management_system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TLC_APP.PNG",
      video: "",
    },
    {
       title: "HooBank Website",
       href: "https://bank-murex-three.vercel.app/",
       dates: "Nov 2024",
       active: true,
       description:
         "This is a modern Bank Website that I decided to implement because I liked how it's designed. I found the design from Figma Community .",
       technologies: [
         "React",
         "TailwindCSS",
       ],
       links: [
        {
          type: "Source",
          href: "https://github.com/alyhoussen/bank",
          icon: <Icons.github className="size-3" />,
        },
       ],
       image: "/hoo-bank.PNG",
       video:
         "",
     },
  ],
  hackathons: [
    {
       title: "EMIHACK 3.0",
       dates: "Feb 28, 2025",
       location: "Fianarantsoa",
       description:
         "Competed both in Algorithm individualy, and development with my team OVERSYNK.",
       image:
        "/emit.png",
       mlh: "",
       links: [], 
    },
  ],
} as const;

