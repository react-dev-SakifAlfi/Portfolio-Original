import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    logo,
  } from "../assets/assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Why Me",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "web Designer",
      icon: mobile,
    },
    {
      title: "FireBase Backend",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "Passion for User-Centered Design",
      company_name: "User-Centric",
      icon: logo,
      iconBg: "#383E56",
      date: "User-Centered Design",
      points: [
        "I believe that great web applications are built with the user in mind. My approach is to deeply understand user needs and create interfaces that are not only visually appealing but also easy to navigate. My focus on intuitive design ensures that every project I take on delivers a seamless experience, whether it’s a complex marketplace or a simple service platform.",
      ],
    },
    {
      title: "Expertise in Modern React Development",
      company_name: "Expertise",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Get Modern React Development",
      points: [
        "As a dedicated React developer, I specialize in building scalable, component-driven applications. My code is structured for reusability, efficiency, and maintainability. Whether I’m implementing advanced state management techniques or leveraging React’s latest hooks, I ensure my applications are optimized for performance and adaptability.",
      ],
    },
    {
      title: "Creative Problem Solving",
      company_name: "Creativity",
      icon: logo,
      iconBg: "#383E56",
      date: "Creative Problem Solving",
      points: [
        "I thrive on tackling challenges that demand innovative solutions. From building a second-hand car-selling website with interactive car cards and hover effects to developing a unique vegetable marketplace, I’m experienced in crafting solutions that go beyond the ordinary. My projects consistently push the boundaries of what’s possible with web technologies, integrating functionality with a sleek, modern aesthetic.",
      ],
    },
    {
      title: "Commitment to Excellence",
      company_name: "Quality",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Commitment to Excellence",
      points: [
        "Quality is at the core of everything I build. I prioritize writing clean, well-documented code that can easily scale and evolve with the project’s needs. From ensuring responsive design to optimizing load times, I take every detail seriously. My goal is not just to deliver a product that works but to create applications that excel in both form and function.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "design onek sundor hoice keep it up inshallah  apni valo kichu korte parben .",
      name: "Nahid hasan",
      designation: "Mentor",
      company: "Creative IT Institute",
      image: "../../public/public/images/nahidsir.png",
    },
    {
      testimonial:
        "WOw! You are doing so great at this than i thought.Keep it up.",
      name: "A.H.M Arif (My dad)",
      designation: "Director at Software Department",
      company: "Huawei",
      image: "../../public/public/images/dadandmom.png",
    },
    {
      testimonial:
        "you are a great developer.your websites are literally super smooth!!",
      name: "All",
      designation: "Friend",
      company: "friend Department",
      image: "../../public/public/images/nahidsir.png",
    },
  ];
  
  const projects = [
    {
      name: "Car Buy",
      description:
        "Web-based platform that allows you to enjoy the fast and smoothness of react-websites",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/react-dev-SakifAlfi/E-commerce-react-cars.git",
    },
    {
      name: "BrainWave",
      description:
        "A fully responsive web template for a Ai website that allows you to feel the smoothness of aweb application.",
      tags: [
        {
          name: "react,reduxgit init",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "HTML,Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/react-dev-SakifAlfi/Brainwave-Al.git",
    },
    {
      name: "Login and SignUP Form",
      description:
        "A seamless react full functioning login and signup form that allows you to enter any website",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "css and html",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/react-dev-SakifAlfi/Full-functioning_signup-wth_backend.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };