import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  jenkins,
  vuejs,
  nodejs,
  mongodb,
  git,
  springboot,
  jira,
  acidbase,
  adfm,
  ats,
  falldetectionsystem,
  innoversity,
  timeclock,
  panelmanagement,
  mysql,
  nwmsu,
  zensar,
  epam,
  women,
  men
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Scalable Systems Creator",
    icon: mobile,
  },
  {
    title: "User-Centric Interface Designer",
    icon: backend,
  },
  {
    title: "Agile Practitioner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JIRA",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "LTC - Northwest Missouri State University",
    icon: nwmsu,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2024",
    points: [
      "Designed and deployed scalable applications, enhancing project efficiency and streamlining workflows.",
      "Optimized database management and improved application performance by implementing efficient practices.",
      "Conducted comprehensive testing to ensure high reliability and robustness in all projects.",
      "Implemented robust CI/CD pipelines, facilitating automated deployments and reducing delivery timelines.",
      "Collaborated in Agile teams to manage multiple user stories, improving team productivity and testing outcomes.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Zensar Technologies",
    icon: zensar,
    iconBg: "#383E56",
    date: "Jul 2022 - Jul 2023",
    points: [
      "Developed and deployed applications, significantly improving system reliability and performance.",
      "Enhanced user engagement by delivering responsive interfaces and optimizing front-end functionality.",
      "Actively contributed to project SDLC by documenting requirements, providing code reviews, and coordinating release schedules.",
      "Improved project management efficiency by actively participating in Agile practices and cross-functional collaborations.",
      "Conducted thorough testing to ensure seamless deployments and reduce downtime.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Epam Systems",
    icon: epam,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Jun 2022",
    points: [
      "Developed full-stack applications, achieving significant improvements in response times and user engagement.",
      "Optimized APIs to ensure seamless communication between front-end and back-end systems, boosting system efficiency. ",
      "Developed API-driven solutions by designing RESTful services that ensured smooth communication across distributed systems.",
      "Optimized CI/CD pipelines for quicker deployments, ensuring minimal impact on live environments.",
      "Improved code quality and maintainability through rigorous code reviews and clean coding practice",
    ],
  },
  {
    title: "PEP [Pre Education Program]",
    company_name: "Epam Systems",
    icon: epam,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Jun 2021",
    points: [
      "Leveraged Core Java Programming and Object-Oriented Programming (OOP) principles to develop modular, reusable code, establishing a strong programming foundation.",
      "Applied design patterns and industry best practices, improving software scalability and maintainability in practical tasks.",
      "Executed manual and automated testing to ensure software quality and performance.",
      "Gained hands-on experience in software engineering principles, participating in webinars and practical sessions focused on release management, front-end development, and project workflows.",
      "Enhanced code readability and maintainability with clean coding and OOP practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Vaishnavi is a talented software developer with exceptional technical knowledge and expertise in development and deployment of applications built with Python Fast API and VueJS. I had the pleasure of working as her supervisor on the development of a faculty management web application. I am confident in her ability to understand complex technical requirements and develop scalable and efficient technical solutions in an agile environment and I am happy to recommend Vaishnavi to a team looking for a skilled and dedicated software developer.",
    name: "Bikash Adhikari",
    designation: "Software Developer | Programming Lead",
    company: "Northwest Missouri State University",
    image: men,
  },
  {
    testimonial:
      "Vaishnavi worked as a Graduate Assistant (GA) in the Learning & Teaching Center (LTC) at Northwest Missouri State University during 2023-2024. As a GA, Vaishnavi helped to manage a team of 10 student employees for the LTC.  Vaishnavi worked on the Adjunct Faculty Management System (ADFM) project. This web application was created to assist provosts, department chairs and directors to view, track, and manage adjunct faculty. Two other programs that Vaishnavi assisted with were the E-mail Automation and Time Clock. These were programs that were already developed, but needed some updating and maintenance. E-mail Automation sends automated e-mails to our online students. The Time Clock is a system used in our office for our student employees to clock in and out digitally and to easily track hours.  Vaishnavi would be an excellent employee. She is organized and follows through on tasks. Our office benefitted from the work that Vaishnavi was able to complete during the time here.",
    name: "Darla Runyon",
    designation: "Director--Learning & Teaching Center and Northwest Online at Northwest Missouri State University",
    company: "Northwest Missouri State University",
    image: women,
  },
  {
    testimonial:
      "I worked with Vaishnavi to develop an online game for my chemistry students. The game is posted online at https://vaishnavi-varaganti.itch.io/acid-base-quest. Vaishnavi developed this game in a semester as part of a course requirement. She was very responsive when I asked for modifications. I think that you will find that she is a very talented programmer if you hire her.",
    name: "Micheal Bellamy",
    designation: "Chemistry Professor",
    company: "Northwest Missouri State University",
    image: men,
  },
];

const projects = [
  {
    name: "Acid Base",
    description:
      "The Acid-Base Game is a 2D interactive educational game built with the Godot Engine to teach acid-base chemistry through engaging gameplay. Players must neutralize attacks from a duck by selecting the correct acid or base across four levels of increasing complexity. Levels involve identifying acids or bases, reacting to random challenges, and predicting reaction products, with players needing a 70% success rate to advance. Points are earned for correct answers, while incorrect ones cost lives.",
    tags: [
      {
        name: "Godot",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Retool",
        color: "pink-text-gradient",
      },
    ],
    image: acidbase,
    source_code_link: "https://github.com/vaishnavi-varaganti/acid-base-game",
  },
  {
    name: "Adjunct Faculty Management System",
    description:
      "The Adjunct Faculty Management System is a web application built with Python FastAPI, VueJs, and MySQL to streamline adjunct faculty management post-pandemic. It integrates LMS, Canvas, and Evaluation Kit data to evaluate faculty performance based on engagement and student outcomes, supporting three user roles: Administrators, Chairs, and Viewers. This tool enhances administrative efficiency and academic standards in online education.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: adfm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Attendance Tracking System",
    description:
      "The Attendance Tracking System is a web-based solution designed to automate attendance management with an intuitive Vue.js front end and a secure Node.js backend. Integrated with a MySQL database, it ensures reliable data storage and retrieval. This scalable system modernizes attendance tracking for institutions and organizations.",
    tags: [
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "Vue JS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "RaspberryPi",
        color: "blue-text-gradient",
      },
    ],
    image: ats,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fall Detection System for the Elderly",
    description:
      "The IoT-based Fall Detection System integrates a wearable device with Raspberry Pi and accelerometers to detect falls with 90% accuracy and alert caregivers via a Firebase-powered mobile app within 15 seconds. The solution ensures safety for seniors, combining reliable data management, a user-friendly interface, and quick emergency response.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "RaspberryPi",
        color: "green-text-gradient",
      },
      {
        name: "Android Development",
        color: "pink-text-gradient",
      },
    ],
    image: falldetectionsystem,
    source_code_link: "https://github.com/vaishnavi-varaganti/Fall-Detection-System-for-the-Elderly",
  },
  {
    name: "Innoversity",
    description:
      "Innoversity is a web application that connects challengers posting problems with innovators proposing solutions, fostering creativity and collaboration. It rewards the top three solutions with cash prizes, promoting a competitive yet inclusive environment. Powered by Node.js, MongoDB, and React, it delivers a seamless user experience for driving sustainable innovation.",
    tags: [
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: innoversity,
    source_code_link: "https://github.com/vaishnavi-varaganti/innoversity",
  },
  {
    name: "Time Clock",
    description:
      "The TimeClock application is designed to help employees log and track their work hours efficiently. It allows users to clock in and out, view their work hours for the day, week, or month, and calculate total work time. The system features an intuitive user interface, with options to manage employee records and track attendance. Admins can monitor employee attendance and generate reports.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: timeclock,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
