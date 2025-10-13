export type Testimonial = {
    id: number;
    author: string;
    company: string;
    text: string;
    category: 'Web Dev Project';
  };
  
  export const testimonialsData: Testimonial[] = [
    {
      id: 1,
      author: "Chirag Tiwari",
      company: "Web Dev Project",
      text: "Dilip built a sleek and responsive portfolio for me. The code is clean, and the final site exceeded my expectations. Highly recommended for web development.",
      category: "Web Dev Project",
    },
    {
      id: 2,
      author: "Harshit Yadav",
      company: "Web Dev Project",
      text: "I was impressed with Dilip's ability to turn my ideas into a functional and beautiful website. He's a talented developer with a great eye for design.",
      category: "Web Dev Project",
    },
    {
      id: 3,
      author: "Shivendra Singh",
      company: "Web Dev Project",
      text: "Dilip delivered a high-quality business website on time. His communication was excellent throughout the project. A pleasure to work with.",
      category: "Web Dev Project",
    },
    {
      id: 4,
      author: "Shreeram Sharma",
      company: "Web Dev Project",
      text: "The custom web app Dilip built for us is fantastic. It's fast, intuitive, and perfectly tailored to our needs. He's a skilled and reliable developer.",
      category: "Web Dev Project",
    },
  ];
  