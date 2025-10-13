export type Testimonial = {
    id: number;
    author: string;
    company: string;
    text: string;
    category: 'Colleague';
  };
  
  export const testimonialsData: Testimonial[] = [
    {
      id: 1,
      author: "Chirag Tiwari",
      company: "Colleague",
      text: "Dilip is a dedicated and detail-oriented QA professional. His commitment to quality is evident in his thorough testing and insightful feedback. He's a great team player and always willing to help out.",
      category: "Colleague",
    },
    {
      id: 2,
      author: "Harshit Yadav",
      company: "Colleague",
      text: "Working with Dilip has been a pleasure. He has a strong grasp of both manual and automation testing concepts and is always eager to learn new technologies. His positive attitude is contagious.",
      category: "Colleague",
    },
    {
      id: 3,
      author: "Shivendra Singh",
      company: "Colleague",
      text: "Dilip's analytical skills are top-notch. He can quickly identify the root cause of complex issues and suggest effective solutions. He's a valuable asset to any quality assurance team.",
      category: "Colleague",
    },
    {
      id: 4,
      author: "Shreeram Sharma",
      company: "Colleague",
      text: "I've been consistently impressed by Dilip's work ethic and his proactive approach to testing. He takes ownership of his tasks and ensures that every release is of the highest quality.",
      category: "Colleague",
    },
  ];
  