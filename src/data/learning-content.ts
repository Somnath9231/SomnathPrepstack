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
            content: "As a professor would explain, complexity isn't about time in seconds, but growth in steps. We analyze how 'n' (input size) affects performance.",
            code: "// O(n) example\nfor(int i=0; i<n; i++) { ... }"
          }
        ]
      },
      {
        id: "m2",
        title: "Module 2: Linear Data Structures",
        description: "Deep dive into Arrays, Linked Lists, Stacks, and Queues.",
        sections: [
          {
            subtitle: "The Power of Linked Lists",
            content: "Unlike arrays, linked lists are dynamic. They allow O(1) insertions at the cost of O(n) access. Ideal for systems where memory is fragmented.",
          }
        ]
      },
      {
        id: "m3",
        title: "Module 3: Non-Linear Structures",
        description: "Trees, Graphs, and Heaps.",
        sections: [
          {
            subtitle: "Binary Search Trees",
            content: "The golden standard for sorted data retrieval. Each node has at most two children, ensuring logarithmic search time.",
          }
        ]
      },
      {
        id: "m4",
        title: "Module 4: Interview Masterclass",
        description: "Solving FAANG-level problems with optimization.",
        sections: [
          {
            subtitle: "Sliding Window Technique",
            content: "A must-know for competitive programming to solve array/string problems in O(n) instead of O(n^2).",
          }
        ]
      }
    ]
  },
  dbms: {
    title: "Database Management Systems",
    description: "Professional database architecture and management for industrial scalability.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Relational Foundations",
        description: "ER Diagrams and the Relational Model.",
        sections: [
          {
            subtitle: "Entity-Relationship Mapping",
            content: "Before writing code, we architect data. Entities represent real-world objects, and Relationships define their interactions.",
          }
        ]
      },
      {
        id: "m2",
        title: "Module 2: Advanced SQL & Optimization",
        description: "Mastering Joins, Indexing, and Subqueries.",
        sections: [
          {
            subtitle: "Indexing for Performance",
            content: "Indexes are like book catalogs. They speed up searches at the cost of disk space and slower writes.",
            code: "CREATE INDEX idx_user_name ON users(name);"
          }
        ]
      },
      {
        id: "m3",
        title: "Module 3: Normalization & Integrity",
        description: "Ensuring data consistency through 1NF to BCNF.",
        sections: [
          {
            subtitle: "3rd Normal Form",
            content: "The goal is to eliminate transitive dependencies. Every non-prime attribute must depend solely on the primary key.",
          }
        ]
      },
      {
        id: "m4",
        title: "Module 4: Distributed DBs & NoSQL",
        description: "Scaling data globally for millions of users.",
        sections: [
          {
            subtitle: "CAP Theorem",
            content: "Consistency, Availability, and Partition Tolerance. In a distributed system, you can only pick two.",
          }
        ]
      }
    ]
  },
  python: {
    title: "Python for Industrial Tech",
    description: "From scripting basics to advanced enterprise-level development.",
    modules: [
      {
        id: "m1",
        title: "Module 1: Core Fundamentals",
        description: "Variables, Loops, and Data Types.",
        sections: [
          {
            subtitle: "Pythonic Logic",
            content: "Python emphasizes readability. Variables are dynamically typed, making it the perfect starting point for developers.",
            code: "name = 'PrepStack'\nprint(f'Hello {name}')"
          }
        ]
      },
      {
        id: "m2",
        title: "Module 2: Functional & OOP Python",
        description: "Mastering Functions and Class-based design.",
        sections: [
          {
            subtitle: "Decorators and Generators",
            content: "Advanced Pythonic features that allow for powerful function wrapping and memory-efficient iteration.",
          }
        ]
      },
      {
        id: "m3",
        title: "Module 3: Data Science Libraries",
        description: "NumPy, Pandas, and Scikit-Learn.",
        sections: [
          {
            subtitle: "Data Manipulation",
            content: "Learn how to process millions of rows of data with vectorized operations in Pandas.",
          }
        ]
      },
      {
        id: "m4",
        title: "Module 4: Enterprise Projects",
        description: "API development and Backend Architecture.",
        sections: [
          {
            subtitle: "Flask & FastAPI",
            content: "Building high-performance REST APIs for modern web applications.",
          }
        ]
      }
    ]
  }
};
