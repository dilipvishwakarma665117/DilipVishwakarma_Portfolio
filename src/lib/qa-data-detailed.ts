
export type QA = {
  id: number;
  question: string;
  answer: string;
  category: 'Manual Testing' | 'Automation' | 'Java' | 'ServiceNow' | 'Test Design' | 'Test Management' | 'Advanced Concepts' | 'Coding';
};

export const qaCategories: QA['category'][] = ['Manual Testing', 'Test Design', 'Test Management', 'Automation', 'Java', 'ServiceNow', 'Advanced Concepts', 'Coding'];

export const qaDataDetailed: QA[] = [
  // 1. Manual Testing Basics
  {
    id: 1,
    question: 'What is Software Testing?',
    answer: 'Software Testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs, and improving performance. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 2,
    question: 'Difference between Verification and Validation?',
    answer: 'Verification is the process to ensure that the product is being built according to the requirements and design specifications (i.e., "Are we building the product right?"). Validation is the process of checking whether the software product meets the customer’s expectations and requirements (i.e., "Are we building the right product?"). This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 3,
    question: 'What is SDLC and STLC?',
    answer: 'SDLC (Software Development Life Cycle) is a framework that defines the entire process of software development, from planning to deployment and maintenance. STLC (Software Testing Life Cycle) is a sequence of specific activities conducted during the testing process to ensure software quality. STLC is a part of SDLC. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 4,
    question: 'What is a Requirement Traceability Matrix (RTM)?',
    answer: 'A Requirement Traceability Matrix (RTM) is a document that maps and traces user requirements with test cases. It ensures that all requirements are covered by test cases, so no functionality is missed during testing. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 5,
    question: 'What is a Test Case?',
    answer: 'A test case is a set of actions executed to verify a particular feature or functionality of a software application. It includes test steps, test data, preconditions, and expected results. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 6,
    question: 'Difference between Test Case and Test Scenario?',
    answer: 'A Test Scenario is a high-level description of what to test (e.g., "Verify login functionality"). A Test Case is a detailed, step-by-step procedure of how to test it, including specific inputs and expected outcomes (e.g., "Enter valid username and password, click login, verify successful login"). This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 7,
    question: 'What is a Bug, Defect, Error, and Failure?',
    answer: 'Error: A mistake made by a programmer. Defect: An error found by a tester before the application goes to production; also called a bug. Bug: An issue found in the software that causes it to behave incorrectly. Failure: When a defect reaches the end-user and causes the system to fail to meet its requirements. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 8,
    question: 'What is Severity and Priority? Explain with an example.',
    answer: 'Severity defines the impact a defect has on the application (technical impact). Priority defines the urgency of fixing the defect (business impact). Example: A company logo error on the home page has high priority but low severity. A crash on a rarely used feature has high severity but low priority. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 9,
    question: 'Explain Defect Life Cycle.',
    answer: 'The Defect Life Cycle (or Bug Life Cycle) is the journey of a defect from its discovery to its closure. The typical states are: New, Assigned, Open, Fixed, Retest, Reopened, Deferred, and Closed. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 10,
    question: 'What are Functional and Non-functional testing?',
    answer: 'Functional testing verifies what the system does (e.g., testing login, forms, etc.). Non-functional testing verifies how the system works, focusing on aspects like performance, security, usability, and reliability. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 11,
    question: 'What is Smoke Testing vs Sanity Testing?',
    answer: 'Smoke Testing is a quick test performed on an initial build to ensure its critical functionalities are working. It decides if a build is stable enough for further testing. Sanity Testing is a brief test of a specific functionality after a code change to ensure it works as expected. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 12,
    question: 'Difference between Regression and Retesting?',
    answer: 'Retesting is done to ensure that a specific defect has been fixed. Regression testing is done to ensure that a recent code change has not adversely affected existing features. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 13,
    question: 'What is Exploratory Testing?',
    answer: 'Exploratory Testing is an unscripted approach where the tester’s creativity, experience, and intuition guide the testing process. The tester explores the application to find defects that might be missed in formal, scripted testing. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 14,
    question: 'What is Compatibility Testing?',
    answer: 'Compatibility Testing is a type of non-functional testing to ensure the software can run on different hardware, operating systems, browsers, and network environments. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },
  {
    id: 15,
    question: 'What is UAT (User Acceptance Testing)?',
    answer: 'UAT is the final phase of testing, performed by the end-users or clients to verify that the software meets their business requirements before it is released to the market. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Manual Testing',
  },

  // 2. Test Design Techniques
  {
    id: 16,
    question: 'What is Boundary Value Analysis?',
    answer: 'Boundary Value Analysis (BVA) is a test design technique that focuses on testing the boundary values of an input domain. It includes testing the minimum, maximum, just inside, and just outside the boundaries. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 17,
    question: 'What is Equivalence Partitioning?',
    answer: 'Equivalence Partitioning is a technique where input data is divided into partitions of equivalent data from which test cases can be derived. It assumes that if one value in a partition works, all other values in that partition will also work. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 18,
    question: 'What is Decision Table Testing?',
    answer: 'Decision Table Testing is a technique used to test complex business logic. It involves creating a table that maps different combinations of input conditions to their corresponding actions or outcomes. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 19,
    question: 'What is State Transition Testing?',
    answer: 'State Transition Testing is used to test systems that have a finite number of states. It focuses on how the system transitions from one state to another in response to specific events or inputs. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 20,
    question: 'What is Use Case Testing?',
    answer: 'Use Case Testing is a black-box technique that helps testers to identify test scenarios that exercise the entire system on a transaction-by-transaction basis from start to finish. Test cases are derived from the use cases. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 21,
    question: 'Difference between Positive and Negative Testing?',
    answer: 'Positive Testing is done to check if the system works as expected with valid inputs. Negative Testing is done to check how the system behaves with invalid inputs and unexpected user behavior. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 22,
    question: 'What is Error Guessing?',
    answer: 'Error Guessing is an experience-based testing technique where the tester uses their intuition and experience to "guess" where errors might occur in the software and design test cases to expose them. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 23,
    question: 'What is White Box Testing vs Black Box Testing?',
    answer: 'Black Box Testing is a testing method where the tester does not have knowledge of the internal code structure. White Box Testing is a method where the tester has access to and knowledge of the internal code structure. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 24,
    question: 'What is Gray Box Testing?',
    answer: 'Gray Box Testing is a combination of white-box and black-box testing. The tester has partial knowledge of the internal structure of the application, allowing for better test case design. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },
  {
    id: 25,
    question: 'What is Ad-hoc Testing?',
    answer: 'Ad-hoc Testing is an informal, unstructured testing approach without any formal documentation or test design. It is performed randomly and is often called "Monkey Testing" or "Random Testing." This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Design',
  },

  // 3. Test Management Tools & Process
  {
    id: 26,
    question: 'What tools have you used for Test Management?',
    answer: 'Commonly used test management tools include Jira (with plugins like Xray or Zephyr), Azure DevOps (ADO), TestRail, and Quality Center (ALM). These tools are used for requirement management, test case creation, execution, and defect tracking. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 27,
    question: 'What is Jira used for?',
    answer: 'Jira is a project management tool used for issue tracking, bug tracking, and agile project management. In testing, it is primarily used to create and track user stories, test cases, and defects throughout their lifecycle. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 28,
    question: 'What is ADO (Azure DevOps)?',
    answer: 'Azure DevOps (ADO) is a suite of development tools from Microsoft that includes project management, version control (Git), build and release pipelines (CI/CD), and test management capabilities, all integrated into one platform. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 29,
    question: 'How do you write a bug report in Jira/ADO?',
    answer: 'A good bug report should be clear, concise, and complete. It must include: a unique ID, a descriptive title, steps to reproduce, expected result, actual result, severity, priority, environment details (browser, OS), and attachments like screenshots or videos. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 30,
    question: 'What are Test Deliverables?',
    answer: 'Test Deliverables are the documents, tools, and other components that are produced and maintained in support of testing. Key deliverables include the Test Plan, Test Cases, Test Scripts, Bug Reports, and Test Summary Report. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 31,
    question: 'What are Entry and Exit Criteria in Testing?',
    answer: 'Entry Criteria are conditions that must be met before testing can begin (e.g., build is deployed, smoke test passed). Exit Criteria are conditions that must be met to conclude a testing phase (e.g., 95% of test cases passed, no critical defects open). This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 32,
    question: 'How do you prioritize test cases?',
    answer: 'Test cases are prioritized based on factors like business impact, criticality of the feature, risk of failure, and customer requirements. High-priority test cases are executed first to provide quick feedback on the most important areas. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 33,
    question: 'What is Test Coverage?',
    answer: 'Test Coverage is a metric used to measure the amount of testing performed on a software. It can be measured in terms of requirements coverage, code coverage, or feature coverage, indicating what percentage of the application has been tested. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 34,
    question: 'What are different Testing Levels?',
    answer: 'The main levels are: Unit Testing (testing individual components), Integration Testing (testing combined components), System Testing (testing the complete, integrated system), and User Acceptance Testing (UAT, testing by end-users). This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },
  {
    id: 35,
    question: 'Agile Testing vs Waterfall Testing differences?',
    answer: 'In Waterfall, testing is a separate phase that happens after development is complete. In Agile, testing is a continuous activity performed in parallel with development in each sprint. Agile testing is more flexible and collaborative. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Test Management',
  },

  // 4. Automation Testing Basics
  {
    id: 36,
    question: 'What is Automation Testing?',
    answer: 'Automation Testing is the practice of using software tools to execute pre-scripted tests on an application. It helps in running repetitive tests, improving test accuracy, and speeding up the testing process, especially for regression testing. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 37,
    question: 'Difference between Manual Testing and Automation Testing?',
    answer: 'Manual testing is performed by a human, requires less initial investment but can be slow and prone to errors. Automation testing is performed by a machine, requires higher initial investment in tools and scripts, but is faster, more reliable, and ideal for regression tests. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 38,
    question: 'What are the advantages and disadvantages of Automation Testing?',
    answer: 'Advantages: Faster execution, reusability of scripts, increased test coverage, reliability. Disadvantages: High initial cost, steep learning curve, script maintenance can be challenging, not suitable for all testing types (e.g., usability). This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 39,
    question: 'Which framework have you worked on?',
    answer: 'I have experience working with a Hybrid framework using Selenium with Java and TestNG. This framework incorporated elements of both Data-Driven and Keyword-Driven approaches, along with the Page Object Model (POM) for maintainability. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 40,
    question: 'Explain Hybrid, Data-Driven, and Keyword-Driven Frameworks.',
    answer: 'Data-Driven: Test data is separated from the test script and stored in external files (like Excel). Keyword-Driven: Test actions (keywords) are separated from the test logic. Hybrid: A combination of two or more frameworks, typically combining the benefits of data-driven and keyword-driven models. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 41,
    question: 'What is POM (Page Object Model)?',
    answer: 'Page Object Model (POM) is a design pattern in test automation that creates an object repository for web UI elements on each page. It makes the test script code clean, readable, and easy to maintain by separating test logic from UI locators. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 42,
    question: 'Difference between TestNG and JUnit?',
    answer: 'Both are testing frameworks for Java. TestNG is generally considered more powerful than JUnit as it offers more advanced features like parallel test execution, test dependencies, parameterization, and flexible test configuration using annotations. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 43,
    question: 'What is Maven and why is it used?',
    answer: 'Maven is a build automation and project management tool. It is used in test automation to manage project dependencies (libraries like Selenium, TestNG), compile the code, run tests, and build the project in a structured manner using a pom.xml file. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 44,
    question: 'What is Continuous Integration in Automation?',
    answer: 'Continuous Integration (CI) is a DevOps practice where developers frequently merge their code changes into a central repository, after which automated builds and tests are run. Tools like Jenkins or Azure Pipelines are used to automatically trigger the automation suite on every new code commit. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 45,
    question: 'When do you prefer Manual Testing over Automation?',
    answer: 'Manual testing is preferred for exploratory testing, usability testing, ad-hoc testing, and for applications with a rapidly changing UI. It is also more suitable for test cases that are executed only once or twice. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },

  // 5. Selenium WebDriver
  {
    id: 46,
    question: 'What is Selenium WebDriver?',
    answer: 'Selenium WebDriver is a component of the Selenium suite that provides a programming interface to create and execute test cases. It allows you to automate web browsers by making direct calls to them, controlling them as a user would. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 47,
    question: 'Difference between Selenium WebDriver and Selenium RC?',
    answer: 'Selenium RC (Remote Control) was an older version that required a server to act as a proxy between the test script and the browser. Selenium WebDriver is a newer, faster, and more direct approach that communicates with the browser natively. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 48,
    question: 'What are the different WebDriver locators?',
    answer: 'The main locators are: ID, Name, ClassName, TagName, LinkText, PartialLinkText, CSS Selector, and XPath. CSS Selector and ID are generally the fastest and most preferred. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 49,
    question: 'Difference between Absolute XPath and Relative XPath?',
    answer: 'Absolute XPath starts from the root of the HTML document (e.g., `/html/body/div[1]/...`). It is long and brittle. Relative XPath starts from a specific element node (e.g., `//input[@id=\'username\']`). It is shorter, more readable, and less prone to breaking with UI changes. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 50,
    question: 'How do you handle Dropdowns in Selenium?',
    answer: 'Selenium provides the `Select` class for handling dropdowns. You can select options by visible text (`selectByVisibleText()`), by value (`selectByValue()`), or by index (`selectByIndex()`). This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 51,
    question: 'How do you handle multiple windows in Selenium?',
    answer: 'You can use `driver.getWindowHandles()` to get a set of all open window handles. Then, you can iterate through the handles and use `driver.switchTo().window(handle)` to switch to the desired window. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 52,
    question: 'How do you handle Alerts in Selenium?',
    answer: 'You can switch to an alert using `driver.switchTo().alert()`. Then you can use methods like `accept()` to click OK, `dismiss()` to click Cancel, `getText()` to get the alert text, or `sendKeys()` to enter text into a prompt. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 53,
    question: 'How do you handle Frames in Selenium?',
    answer: 'To work with elements inside a frame or iframe, you first need to switch to it using `driver.switchTo().frame()`. You can switch using the frame\'s name, ID, or index. To return to the main content, use `driver.switchTo().defaultContent()`. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 54,
    question: 'Difference between findElement() and findElements()?',
    answer: '`findElement()` returns the first matching WebElement on the page. If no element is found, it throws a `NoSuchElementException`. `findElements()` returns a list of all matching WebElements. If no elements are found, it returns an empty list. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 55,
    question: 'What are Waits in Selenium (Implicit, Explicit, Fluent)?',
    answer: 'Waits are used to handle synchronization issues. Implicit Wait tells WebDriver to wait a certain amount of time before throwing an exception. Explicit Wait is used to wait for a specific condition to occur. Fluent Wait is an advanced type of Explicit Wait with more configuration options like polling frequency. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 56,
    question: 'How do you capture Screenshots in Selenium?',
    answer: 'You can cast the driver object to `TakesScreenshot` and use the `getScreenshotAs()` method, which can save the screenshot as a file. Example: `File srcFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);`. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 57,
    question: 'What are DesiredCapabilities in Selenium?',
    answer: 'DesiredCapabilities is a class used to set properties of the browser, such as browser name, version, and platform, to run the automation tests. It is particularly useful for configuring tests on a Selenium Grid. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 58,
    question: 'How do you run Selenium scripts in multiple browsers?',
    answer: 'This can be achieved by creating different driver instances (ChromeDriver, FirefoxDriver, etc.) based on a configuration parameter. TestNG framework also supports cross-browser testing by defining browser parameters in the `testng.xml` file. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 59,
    question: 'How do you handle Dynamic Web Elements?',
    answer: 'Dynamic elements (with changing attributes) can be handled by using locators that rely on stable parts of the element. This includes using relative XPath with functions like `contains()`, `starts-with()`, or finding a stable parent/sibling element. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 60,
    question: 'How to handle file upload in Selenium?',
    answer: 'For an `<input type="file">` element, you can directly use the `sendKeys()` method and pass the absolute path of the file you want to upload. You don\'t need to click the upload button. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 61,
    question: 'Difference between close() and quit()?',
    answer: '`driver.close()` closes the browser window that is currently in focus. `driver.quit()` closes all browser windows opened by WebDriver and terminates the WebDriver session. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 62,
    question: 'What is headless browser testing?',
    answer: 'Headless testing is running UI tests in a browser without a graphical user interface. This makes tests faster and is essential for running tests in a CI/CD environment. Chrome and Firefox both support headless mode. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 63,
    question: 'Can Selenium handle Captcha or OTP?',
    answer: 'No, Selenium cannot automate Captcha or OTPs. They are designed specifically to prevent automation. For testing purposes, these features are usually disabled in the test environment or a workaround is provided by the development team. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 64,
    question: 'How do you integrate Selenium with TestNG?',
    answer: 'TestNG is integrated by adding its dependency to the project (e.g., in `pom.xml`). Test methods are then annotated with TestNG annotations like `@Test`, `@BeforeMethod`, and `@AfterMethod`. Test execution is controlled via a `testng.xml` file. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },
  {
    id: 65,
    question: 'How do you generate Selenium Test Reports?',
    answer: 'TestNG provides default HTML reports. More advanced and customizable reports can be generated using third-party libraries like ExtentReports or Allure. These reports provide a detailed view of test results with logs and screenshots. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Automation',
  },

  // 6. Java for Testers
  {
    id: 66,
    question: 'Difference between == and equals() in Java?',
    answer: 'The `==` operator checks if two references point to the same memory location. The `.equals()` method, by default, does the same. However, it is often overridden in classes (like String) to compare the actual content or value of the objects. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 67,
    question: 'What is String, StringBuilder, StringBuffer?',
    answer: '`String` is immutable (cannot be changed). `StringBuffer` is mutable and thread-safe (synchronized). `StringBuilder` is also mutable but not thread-safe, making it faster than StringBuffer. Use StringBuilder for single-threaded environments and StringBuffer for multi-threaded ones. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 68,
    question: 'Difference between final, finally and finalize()?',
    answer: '`final` is a keyword used to make a variable constant, a method non-overridable, or a class non-inheritable. `finally` is a block used in exception handling to execute code regardless of whether an exception occurs. `finalize()` is a method called by the garbage collector before an object is destroyed. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 69,
    question: 'What is Exception Handling in Java?',
    answer: 'Exception handling is a mechanism to handle runtime errors. It uses `try`, `catch`, `throw`, `throws`, and `finally` keywords to manage exceptions and prevent the program from crashing. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 70,
    question: 'Difference between Checked and Unchecked Exception?',
    answer: 'Checked Exceptions are checked at compile-time (e.g., `IOException`). They must be handled using `try-catch` or declared with `throws`. Unchecked Exceptions are checked at run-time (e.g., `NullPointerException`). They are not required to be handled. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 71,
    question: 'What is OOPs in Java? Explain with example.',
    answer: 'Object-Oriented Programming (OOPs) is a programming paradigm based on the concept of "objects". An object is an instance of a class, which bundles data (properties) and methods (behaviors) together. For example, a `Car` class can have properties like `color` and methods like `drive()`. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 72,
    question: 'What is Polymorphism, Inheritance, Encapsulation, Abstraction?',
    answer: 'Inheritance: A class acquires properties of another class. Polymorphism: An object can take many forms (method overloading/overriding). Encapsulation: Bundling data and methods into a single unit (class). Abstraction: Hiding implementation details and showing only functionality to the user. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 73,
    question: 'What are Interfaces and Abstract Classes?',
    answer: 'An Abstract Class can have both abstract and non-abstract methods and can have constructors. A class can extend only one abstract class. An Interface can only have abstract methods (in Java 7, modern Java allows default/static methods) and cannot be instantiated. A class can implement multiple interfaces. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 74,
    question: 'What is Static in Java?',
    answer: 'The `static` keyword means a variable or method belongs to the class itself, not to an instance of the class. A static method can be called without creating an object of the class. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 75,
    question: 'What are Constructors in Java?',
    answer: 'A constructor is a special method used to initialize objects. It is called when an object of a class is created. It has the same name as the class and does not have a return type. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 76,
    question: 'Difference between Overloading and Overriding?',
    answer: 'Method Overloading happens in the same class, where two or more methods have the same name but different parameters. Method Overriding happens in a parent-child class relationship, where a subclass provides a specific implementation of a method that is already defined in its parent class. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 77,
    question: 'What is Collection Framework?',
    answer: 'The Collection Framework in Java provides an architecture to store and manipulate a group of objects. It includes interfaces (like List, Set, Map) and classes (like ArrayList, HashSet, HashMap). This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 78,
    question: 'Difference between Array and ArrayList?',
    answer: 'An Array has a fixed size and can store both primitive types and objects. An ArrayList has a dynamic size (it can grow) and can only store objects. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 79,
    question: 'How to handle HashMap in Java?',
    answer: 'A HashMap stores data in key-value pairs. It does not allow duplicate keys. You can add elements using `put(key, value)`, retrieve them using `get(key)`, and iterate over them using `keySet()` or `entrySet()`. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },
  {
    id: 80,
    question: 'Explain the concept of Garbage Collection in Java.',
    answer: 'Garbage Collection is the process of automatic memory management in Java. The JVM automatically reclaims memory by destroying objects that are no longer referenced or reachable by the program. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Java',
  },

  // 7. Testing Types & Advanced Concepts
  {
    id: 81,
    question: 'What is Performance Testing?',
    answer: 'Performance Testing is a non-functional testing type that evaluates how a system performs in terms of responsiveness and stability under a particular workload. It measures speed, scalability, and reliability. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 82,
    question: 'What is Load Testing vs Stress Testing?',
    answer: 'Load Testing checks the system\'s ability to handle an expected user load. Stress Testing checks the system\'s behavior under extreme loads, beyond its normal capacity, to find its breaking point. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 83,
    question: 'What is End-to-End Testing?',
    answer: 'End-to-End (E2E) testing is a technique used to test whether the flow of an application from start to finish is behaving as expected. It involves testing the complete application in a real-world scenario, including integrations with external systems. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 84,
    question: 'What is Risk-Based Testing?',
    answer: 'Risk-Based Testing is a testing approach where test efforts are prioritized based on the risk of failure. Features with higher risk and business impact are tested more thoroughly. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 85,
    question: 'What is Continuous Testing?',
    answer: 'Continuous Testing is the process of executing automated tests as part of the software delivery pipeline. It provides instant feedback on the business risks associated with a software release candidate. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 86,
    question: 'What is API Testing?',
    answer: 'API Testing is a type of software testing that focuses on validating Application Programming Interfaces (APIs). It checks the functionality, reliability, performance, and security of the APIs directly, without a user interface. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 87,
    question: 'What tools are used for API Testing (like Postman)?',
    answer: 'Common tools for API testing include Postman, SoapUI, Rest-Assured (a Java library), and Katalon Studio. These tools are used to send requests to the API, get the response, and validate that it matches the expected outcome. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 88,
    question: 'Difference between Functional and Regression Testing?',
    answer: 'Functional testing verifies that new features work as per the requirements. Regression testing verifies that existing features have not been broken by new changes. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 89,
    question: 'What is Security Testing?',
    answer: 'Security Testing is a type of testing that uncovers vulnerabilities, threats, and risks in a software application and prevents malicious attacks. It aims to protect data and ensure the application functions as intended. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },
  {
    id: 90,
    question: 'Explain Defect Leakage and Defect Density.',
    answer: 'Defect Density is the number of defects found per unit of code (e.g., defects per 1000 lines of code). Defect Leakage is the percentage of defects that were missed in one testing phase and found in a later phase or by the customer. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Advanced Concepts',
  },

  // 8. Coding & Output Questions
  {
    id: 91,
    question: 'Reverse a String in Java.',
    answer: 'You can use `StringBuilder`. \n```java\nString original = "hello";\nString reversed = new StringBuilder(original).reverse().toString();\nSystem.out.println(reversed); // "olleh"\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 92,
    question: 'Check if a String is Palindrome.',
    answer: 'A palindrome reads the same forwards and backward. \n```java\nString str = "madam";\nString reversed = new StringBuilder(str).reverse().toString();\nboolean isPalindrome = str.equals(reversed);\nSystem.out.println(isPalindrome); // true\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 93,
    question: 'Find the largest number in an array.',
    answer: 'Iterate through the array and keep track of the largest number found. \n```java\nint[] arr = {2, 8, 1, 9, 4};\nint max = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n  if (arr[i] > max) {\n    max = arr[i];\n  }\n}\nSystem.out.println(max); // 9\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 94,
    question: 'Swap two numbers without using 3rd variable.',
    answer: 'You can use arithmetic operations. \n```java\nint a = 5;\nint b = 10;\na = a + b; // a = 15\nb = a - b; // b = 5\na = a - b; // a = 10\nSystem.out.println("a=" + a + ", b=" + b);\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 95,
    question: 'Write a program for Fibonacci series.',
    answer: 'Fibonacci series is 0, 1, 1, 2, 3, 5... \n```java\nint n1=0, n2=1, n3, count=10;\nSystem.out.print(n1 + " " + n2);\nfor(int i=2; i<count; ++i) {\n n3=n1+n2;\n System.out.print(" " + n3);\n n1=n2;\n n2=n3;\n}\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 96,
    question: 'Write a program for Factorial.',
    answer: 'Factorial of n (n!) is the product of all positive integers up to n. \n```java\nint num = 5;\nlong factorial = 1;\nfor(int i = 1; i <= num; ++i) {\n  factorial *= i;\n}\nSystem.out.println("Factorial: " + factorial); // 120\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 97,
    question: 'Count the number of vowels in a string.',
    answer: 'Iterate through the string and check if each character is a vowel. \n```java\nString str = "hello world";\nint count = 0;\nfor (char c : str.toLowerCase().toCharArray()) {\n  if (c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\') {\n    count++;\n  }\n}\nSystem.out.println(count); // 3\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 98,
    question: 'Find duplicate elements in an array.',
    answer: 'Using a HashSet is an efficient way. \n```java\nint[] arr = {1, 2, 3, 4, 2, 5};\nSet<Integer> set = new HashSet<>();\nfor (int num : arr) {\n  if (!set.add(num)) {\n    System.out.println("Duplicate: " + num); // Duplicate: 2\n  }\n}\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 99,
    question: 'Print even and odd numbers from an array separately.',
    answer: 'Use the modulo operator (`%`). \n```java\nint[] arr = {1, 2, 3, 4, 5, 6};\nSystem.out.print("Even: ");\nfor (int num : arr) {\n  if (num % 2 == 0) System.out.print(num + " ");\n}\nSystem.out.print("\\nOdd: ");\nfor (int num : arr) {\n  if (num % 2 != 0) System.out.print(num + " ");\n}\n```. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
  {
    id: 100,
    question: 'int a = 5, int b = 2, output = a + (a > b ? a : b) → What is the output?',
    answer: 'The ternary operator `(a > b ? a : b)` checks if `a` is greater than `b`. Since 5 > 2 is true, it returns `a` (which is 5). The final calculation is `output = a + 5`, which is `5 + 5`. The output is 10. This is a placeholder for a more detailed answer that you can provide.',
    category: 'Coding',
  },
];
