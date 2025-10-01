export type QA = {
  id: number;
  question: string;
  answer: string;
  category: 'Manual Testing' | 'Automation' | 'Java' | 'ServiceNow';
};

export const qaCategories: QA['category'][] = ['Manual Testing', 'Automation', 'Java', 'ServiceNow'];

export const qaData: QA[] = [
  // Manual Testing
  {
    id: 1,
    question: 'What is manual testing?',
    answer: 'Manual testing is the process of testing software by hand to find defects without using any automation tools. Testers act as end-users and check if all features of the application are working correctly.',
    category: 'Manual Testing',
  },
  {
    id: 2,
    question: 'What is a test case?',
    answer: 'A test case is a set of conditions or variables under which a tester will determine whether a system under test satisfies requirements or works correctly. It includes steps, test data, preconditions, and expected results.',
    category: 'Manual Testing',
  },
  {
    id: 3,
    question: 'Explain the difference between smoke and sanity testing.',
    answer: 'Smoke testing is a quick test to ensure the basic and critical functionalities of a build are working. Sanity testing is a more focused test on a specific feature or functionality after a minor change or bug fix.',
    category: 'Manual Testing',
  },
  
  // Automation Testing
  {
    id: 4,
    question: 'What is automation testing?',
    answer: 'Automation testing is the process of using software tools to execute pre-scripted tests on a software application before it is released into production. The main goal is to find bugs and ensure the application works as expected.',
    category: 'Automation',
  },
  {
    id: 5,
    question: 'What is Selenium?',
    answer: 'Selenium is an open-source suite of tools used for automating web browsers. It provides a way to write tests in various programming languages like Java, C#, Python, etc., and run them across different browsers.',
    category: 'Automation',
  },
  {
    id: 6,
    question: 'What is the Page Object Model (POM)?',
    answer: 'Page Object Model (POM) is a design pattern in Selenium that creates an object repository for web UI elements. It helps to keep the test code separate from the UI locators, making the code cleaner, more readable, and easier to maintain.',
    category: 'Automation',
  },

  // Java
  {
    id: 7,
    question: 'What is the difference between JDK, JRE, and JVM?',
    answer: 'JVM (Java Virtual Machine) is an abstract machine that provides a runtime environment in which Java bytecode can be executed. JRE (Java Runtime Environment) is a set of software tools for development of Java applications. JDK (Java Development Kit) is a software development environment used for developing Java applications and applets.',
    category: 'Java',
  },
  {
    id: 8,
    question: 'What are the main principles of Object-Oriented Programming (OOP)?',
    answer: 'The four main principles of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction.',
    category: 'Java',
  },
  {
    id: 9,
    question: 'What is the difference between `==` and `.equals()` in Java?',
    answer: '`==` is an operator that compares object references (memory addresses), whereas `.equals()` is a method that compares the content or values of the objects.',
    category: 'Java',
  },

  // ServiceNow
  {
    id: 10,
    question: 'What is ServiceNow?',
    answer: 'ServiceNow is a cloud-based platform that automates IT service management (ITSM). It provides a single system of record for IT services, operations, and business management.',
    category: 'ServiceNow',
  },
  {
    id: 11,
    question: 'What is an Update Set in ServiceNow?',
    answer: 'An Update Set is a group of configuration changes (customizations) that can be moved from one ServiceNow instance to another. It allows administrators to develop in a development instance and then apply the changes to a production instance.',
    category: 'ServiceNow',
  },
  {
    id: 12,
    question: 'What is a Business Rule in ServiceNow?',
    answer: 'A Business Rule is a server-side script that runs when a record is displayed, inserted, updated, or deleted, or when a table is queried. It can be used to automate processes and enforce business logic.',
    category: 'ServiceNow',
  },
];
