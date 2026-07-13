export interface Section {
  subtitle: string;
  content: string;
  code?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface CourseContent {
  title: string;
  description: string;
  modules: Module[];
}

export const learningContent: Record<string, CourseContent> = {
  dsa: {
    title: "Data Structures & Algorithms",
    description: "Master the architecture of efficient code through structured data organization and algorithmic optimization.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Foundations of Complexity",
        description: "Understanding Big O notation and basic structures.",
        sections: [
          {
            subtitle: "Time and Space Complexity",
            content: "Complexity analysis is the fundamental tool for comparing algorithms. We focus on Big O notation to describe upper bounds of growth.",
            code: "// O(n) example - Linear Search\nfor(int i=0; i<n; i++) {\n  if(arr[i] == target) return i;\n}"
          }
        ]
      },
      {
        id: "m2",
        title: "Module 2: Linear Structures",
        description: "Deep dive into Arrays, Linked Lists, Stacks, and Queues.",
        sections: [
          {
            subtitle: "Linked List Architecture",
            content: "Linked lists offer dynamic sizing and easy insertions. Unlike arrays, nodes are stored non-contiguously in memory.",
            code: "struct Node {\n  int data;\n  struct Node* next;\n};"
          }
        ]
      },
      {
        id: "m3",
        title: "Module 3: Advanced DSA",
        description: "Trees, Graphs, and Dynamic Programming.",
        sections: [
          {
            subtitle: "Graph Traversal (BFS/DFS)",
            content: "Graphs represent complex relationships. Understanding Breadth-First and Depth-First search is critical for routing and network problems.",
          }
        ]
      }
    ]
  },
  python: {
    title: "Python Mastery",
    description: "Go from basics to industrial-grade automation and AI-ready Python coding.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Python Basics",
        description: "Syntax, data types, and control flow.",
        sections: [
          {
            subtitle: "The Pythonic Way",
            content: "Python emphasizes readability. Variables are dynamically typed, and indentation defines block structure.",
            code: "def greet(name):\n    print(f'Hello, {name}!')\n\ngreet('PrepStack Student')"
          }
        ]
      },
      {
        id: "m2",
        title: "Module 2: Intermediate Python",
        description: "Functions, Modules, and Error Handling.",
        sections: [
          {
            subtitle: "Exception Handling",
            content: "Robust apps handle errors gracefully using try-except blocks.",
            code: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
          }
        ]
      }
    ]
  },
  java: {
    title: "Enterprise Java",
    description: "Master object-oriented programming with the most popular enterprise language.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Java Foundations",
        description: "JVM, JRE, and basic OOP principles.",
        sections: [
          {
            subtitle: "Object Oriented Principles",
            content: "Java is built on Inheritance, Encapsulation, Polymorphism, and Abstraction. Everything is an object.",
            code: "public class Student {\n  private String name;\n  public void study() {\n    System.out.println('Studying...');\n  }\n}"
          }
        ]
      }
    ]
  },
  javascript: {
    title: "Modern JavaScript",
    description: "The language of the web. From ES6+ to full-stack logic.",
    modules: [
      {
        id: "m1",
        title: "Module 1: JS Fundamentals",
        description: "DOM manipulation and modern ES6 syntax.",
        sections: [
          {
            subtitle: "Asynchronous JS",
            content: "Understanding Promises and Async/Await is vital for modern web apps.",
            code: "async function fetchData() {\n  const response = await fetch('/api/data');\n  const data = await response.json();\n  return data;\n}"
          }
        ]
      }
    ]
  },
  c: {
    title: "C Programming",
    description: "The foundation of modern computing. Master memory, pointers, and performance.",
    modules: [
      {
        id: "m1",
        title: "Module 1: C Basics",
        description: "Variables, Loops, and Functions.",
        sections: [
          {
            subtitle: "Pointer Logic",
            content: "Pointers are variables that store memory addresses. They are the key to C's power and efficiency.",
            code: "int x = 10;\nint *p = &x;\nprintf('Value: %d', *p);"
          }
        ]
      }
    ]
  },
  cpp: {
    title: "C++ for Performance",
    description: "Master competitive programming and system-level architecture.",
    modules: [
      {
        id: "m1",
        title: "Module 1: C++ Foundations",
        description: "STL, Templates, and OOP.",
        sections: [
          {
            subtitle: "The Standard Template Library",
            content: "STL provides ready-to-use containers like vectors, sets, and maps, which are essential for competitive programming.",
            code: "#include <vector>\nstd::vector<int> v = {1, 2, 3};"
          }
        ]
      }
    ]
  },
  sql: {
    title: "SQL & Data Querying",
    description: "Communicate with databases efficiently using structured queries.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Basic Queries",
        description: "SELECT, WHERE, and JOIN operations.",
        sections: [
          {
            subtitle: "Complex Joins",
            content: "INNER, LEFT, and RIGHT joins allow you to combine data from multiple tables effectively.",
            code: "SELECT users.name, orders.amount\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;"
          }
        ]
      }
    ]
  },
  dbms: {
    title: "Database Management Systems",
    description: "Industrial database design, normalization, and ACID properties.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Relational Design",
        description: "ER Models and Normalization.",
        sections: [
          {
            subtitle: "Normalization Protocols",
            content: "Normalization (1NF, 2NF, 3NF) minimizes redundancy and ensures data integrity.",
          }
        ]
      }
    ]
  },
  os: {
    title: "Operating Systems",
    description: "Understand the kernel, process management, and memory allocation.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Process Management",
        description: "Scheduling, Deadlocks, and Threads.",
        sections: [
          {
            subtitle: "CPU Scheduling",
            content: "Algorithms like Round Robin and First Come First Serve decide which process gets CPU time.",
          }
        ]
      }
    ]
  },
  networks: {
    title: "Computer Networks",
    description: "The protocols that power the internet. OSI, TCP/IP, and Security.",
    modules: [
      {
        id: "m1",
        title: "Module 1: The OSI Model",
        description: "Understanding the 7 layers of network communication.",
        sections: [
          {
            subtitle: "TCP vs UDP",
            content: "TCP is connection-oriented and reliable, while UDP is faster but connectionless.",
          }
        ]
      }
    ]
  },
  "system-design": {
    title: "System Design",
    description: "Architecting scalable systems for millions of concurrent users.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Scalability",
        description: "Load Balancing, Caching, and Microservices.",
        sections: [
          {
            subtitle: "Load Balancing Strategies",
            content: "Distributing traffic across multiple servers to prevent failure and optimize performance.",
          }
        ]
      }
    ]
  },
  algorithms: {
    title: "Advanced Algorithms",
    description: "Optimize your logic for speed and memory efficiency.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Sorting & Searching",
        description: "Merge Sort, Quick Sort, and Binary Search variants.",
        sections: [
          {
            subtitle: "Divide and Conquer",
            content: "Breaking complex problems into smaller sub-problems. Example: QuickSort partitioning.",
          }
        ]
      }
    ]
  },
  html: {
    title: "HTML5 Foundations",
    description: "Structure the modern web with semantic HTML.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Semantic Tags",
        description: "Building accessible and SEO-friendly structures.",
        sections: [
          {
            subtitle: "The Document Object Model",
            content: "How browsers interpret HTML into a tree structure for interaction.",
          }
        ]
      }
    ]
  },
  css: {
    title: "Advanced CSS",
    description: "Master styling, layout, and modern responsive design.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Flexbox & Grid",
        description: "Modern layout engines for complex UIs.",
        sections: [
          {
            subtitle: "The Box Model",
            content: "Understanding margin, border, padding, and content sizing.",
          }
        ]
      }
    ]
  },
  aptitude: {
    title: "Quantitative Aptitude",
    description: "Master the logic and calculation skills required for industrial placements.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Numerical Ability",
        description: "Percentages, Ratios, and Profit/Loss.",
        sections: [
          {
            subtitle: "Profit and Loss Logic",
            content: "Calculating margins and cost prices is vital for business logic tests.",
          }
        ]
      }
    ]
  },
  marketing: {
    title: "Industrial Marketing",
    description: "The science of growth, branding, and customer acquisition.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Brand Strategy",
        description: "Building identity and market positioning.",
        sections: [
          {
            subtitle: "Consumer Psychology",
            content: "Understanding the decision-making process of your target audience.",
          }
        ]
      }
    ]
  },
  finance: {
    title: "Corporate Finance",
    description: "Master accounting, investment, and capital management.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Financial Statements",
        description: "Interpreting Balance Sheets and Cash Flow.",
        sections: [
          {
            subtitle: "The Income Statement",
            content: "Analyzing revenue, expenses, and net profit for business health.",
          }
        ]
      }
    ]
  }
};
