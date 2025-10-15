import { Award, Github, Linkedin, Mail, Star, TrendingUp, NotebookText, Code } from "lucide-react";
import { PlaceholderImages } from "./placeholder-images";

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Achievements", href: "/#achievements" },
  { name: "Freelance", href: "/#freelance" },
  { name: "Contact", href: "/#contact" },
  { name: "QAHub", href: "/qa" },
  { name: "My Creations", href: "/my-creations" },
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dilip-vishwakarma-b9a290222", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/Dilipvishwakarma", icon: Github },
  { name: "Email", href: "mailto:dileepv9721@gmail.com", icon: Mail },
];

export const heroData = {
  name: "Dilip Vishwakarma",
  title: "Quality Engineer Analyst | Software Tester",
  tagline: "Turning Bugs into Quality – 2+ Years of Experience in Manual & Automation Testing.",
  resumeUrl: "https://raw.githubusercontent.com/dilipvishwakarma665117/Pesonal-Portfolio-Web/main/docs/My_Resume.pdf",
  portraitUrl: "https://raw.githubusercontent.com/dilipvishwakarma665117/studio/e95631bfef998e19a20afc89c1b84e4b7379953b/images/DP1.jpg?raw=true",
};

export const aboutData = {
  bio: "Dilip Vishwakarma is currently working as a Quality Engineer Analyst at Accenture with 2+ years of experience in Manual and Automation Testing. Skilled in ServiceNow Testing, Selenium with Java, and Automation Frameworks. Passionate about ensuring top-quality software delivery.",
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "Dr. Ram Manohar Lohia Avadh University, Ayodhya",
    years: "2019 – 2022",
  },
  career: [
    {
      role: "Quality Engineer Analyst",
      year: "2024",
    },
    {
      role: "Associate Software Engineer",
      year: "2022",
    },
  ],
  skills: ["Manual Testing", "Automation Testing", "Selenium with Java", "TestNG", "ServiceNow", "ADO/Jira", "POM Framework", "Agile Methodology"]
};

export const projectsData = [
  {
    title: "ServiceNow EAM Project",
    role: "QA Tester",
    description: "Ensured quality for ServiceNow Enterprise Asset Management (EAM) projects using both manual and automated testing. My work focused on asset lifecycles and integrations, utilizing Selenium and Java to enhance system performance and identify key issues.",
    imageUrl: PlaceholderImages.find(p => p.id === 'project-payment-app')?.imageUrl || '',
    imageHint: "team project",
    tags: ["ServiceNow EAM", "Manual Testing", "Automation", "Selenium", "Java"],
  },
  {
    title: "Bug Tracking System (Mini JIRA)",
    role: "Personal Project",
    description: "Developed a mini bug tracking system inspired by JIRA to understand the lifecycle of bugs and project management workflows. This project enhanced my understanding of the tools I use daily.",
    imageUrl: PlaceholderImages.find(p => p.id === 'project-bug-tracker')?.imageUrl || '',
    imageHint: "dashboard chart",
    tags: ["Project Management", "UI/UX"],
    githubUrl: "https://github.com/Dilipvishwakarma"
  },
  {
    title: "Automation Test Framework",
    role: "Personal Project",
    description: "Built a robust and scalable test automation framework from scratch using Selenium, Java, and TestNG with the Page Object Model (POM) design pattern. The framework is designed for reusability and easy maintenance.",
    imageUrl: PlaceholderImages.find(p => p.id === 'project-automation-framework')?.imageUrl || '',
    imageHint: "code editor",
    tags: ["Selenium", "Java", "TestNG", "POM"],
    githubUrl: "https://github.com/Dilipvishwakarma"
  }
];

export const achievementsData = [
  {
    title: "Best People Award",
    description: "Recognized for outstanding performance and contribution to the project's success.",
    icon: Award,
  },
  {
    title: "Monthly Award",
    description: "Awarded for exceptional dedication and consistent high-quality work during the month.",
    icon: Star,
  },
  {
    title: "Promotion to QEA",
    description: "Promoted to Quality Engineer Analyst in 2024, acknowledging my expertise and growth.",
    icon: TrendingUp,
  },
  {
    title: "Selenium Tester Certification",
    description: "Certified Selenium Automation Tester with Java from Vskills, validating my automation skills.",
    icon: NotebookText,
  }
];

export const contactData = {
  location: "Noida, Uttar Pradesh, India",
};

export const footerData = {
  madeBy: "Dilip Vishwakarma",
};
