export const learningContent = {
  dsa: {
    title: "Data Structures",
    description: "The fundamental building blocks of efficient software. Master how data is organized and stored.",
    sections: [
      {
        subtitle: "Industrial Context",
        content: "In production-level software, choosing the right data structure can be the difference between a high-performance system and a failing one. Tech giants like Google and Meta test this extensively because it reflects your ability to optimize memory and processing time."
      },
      {
        subtitle: "Arrays & Linked Lists",
        content: "Arrays offer O(1) access but O(n) insertion. Linked Lists offer O(1) insertion but O(n) access. Knowing when to use which is vital for system efficiency.",
        code: "int[] arr = new int[5]; // Fixed size\nLinkedList<Integer> list = new LinkedList<>(); // Dynamic"
      },
      {
        subtitle: "Trees & Graphs",
        content: "Trees are used for hierarchical data (like folders) while Graphs represent network connections (like social media or maps). Mastering BFS and DFS is essential.",
      }
    ]
  },
  algorithms: {
    title: "Algorithms",
    description: "The logic behind solving complex problems efficiently. Focus on Time and Space Complexity.",
    sections: [
      {
        subtitle: "Sorting & Searching",
        content: "From Quick Sort to Binary Search, these are the core operations performed billions of times per second in any database or search engine.",
        code: "void quickSort(int arr[], int low, int high) {\n  // Partitioning logic...\n}"
      },
      {
        subtitle: "Dynamic Programming",
        content: "Optimization technique used to solve complex problems by breaking them into smaller overlapping subproblems. Essential for cracking FAANG interviews.",
      }
    ]
  },
  dbms: {
    title: "Database Management",
    description: "Master the architecture of data storage, retrieval, and integrity.",
    sections: [
      {
        subtitle: "SQL vs NoSQL",
        content: "Relational databases (MySQL, Postgres) use structured tables, while NoSQL (MongoDB, Redis) handles unstructured, high-velocity data. Industrial systems often use both.",
        code: "SELECT * FROM users JOIN orders ON users.id = orders.user_id;"
      },
      {
        subtitle: "Normalization",
        content: "Process of organizing data to reduce redundancy and improve data integrity (1NF, 2NF, 3NF, BCNF)."
      }
    ]
  },
  os: {
    title: "Operating Systems",
    description: "Understand the bridge between hardware and software.",
    sections: [
      {
        subtitle: "Process vs Threads",
        content: "A process is a program in execution, while a thread is the smallest unit of processing within a process. Multithreading is key for high-concurrency apps.",
      },
      {
        subtitle: "Memory Management",
        content: "Virtual memory, Paging, and Segmentation. These concepts are core to system-level debugging."
      }
    ]
  },
  networks: {
    title: "Computer Networks",
    description: "The backbone of the internet and modern communication.",
    sections: [
      {
        subtitle: "OSI Model",
        content: "Seven layers that define how data travels across a network. From Physical signals to Application logic (HTTP/FTP).",
      },
      {
        subtitle: "TCP/IP Protocol Suite",
        content: "The real-world protocol used for the internet. TCP for reliability, UDP for speed.",
      }
    ]
  },
  "system-design": {
    title: "System Design",
    description: "Learn how to build scalable, high-availability distributed systems.",
    sections: [
      {
        subtitle: "Load Balancing",
        content: "Distributing incoming network traffic across multiple servers to ensure no single server becomes a bottleneck.",
      },
      {
        subtitle: "Caching Strategies",
        content: "Using Redis or Memcached to store frequently accessed data for sub-millisecond latency.",
      }
    ]
  },
  aptitude: {
    title: "Industrial Aptitude",
    description: "Logical reasoning and quantitative analysis for competitive placements.",
    sections: [
      {
        subtitle: "Quantitative Mastery",
        content: "Focus on Time-Speed-Distance, Profit & Loss, and Probability. These test your quick analytical thinking.",
      },
      {
        subtitle: "Logical Reasoning",
        content: "Syllogisms, Blood Relations, and Seating Arrangements. Crucial for the initial screening rounds of top firms.",
      }
    ]
  },
  verbal: {
    title: "Verbal Ability",
    description: "Effective communication and comprehensive reading skills.",
    sections: [
      {
        subtitle: "Critical Reasoning",
        content: "Analyzing arguments, identifying assumptions, and drawing valid conclusions.",
      },
      {
        subtitle: "Professional Etiquette",
        content: "Email writing, formal vocabulary, and corporate communication standards.",
      }
    ]
  },
  "interview-prep": {
    title: "Interview Protocol",
    description: "The final frontier. Master behavioral and technical interview strategies.",
    sections: [
      {
        subtitle: "The STAR Method",
        content: "Situation, Task, Action, Result. The standard framework for answering behavioral questions like 'Tell me about a time you failed.'",
      },
      {
        subtitle: "HR Round Strategy",
        content: "Salary negotiation, culture fit, and identifying your unique value proposition to the firm.",
      }
    ]
  },
  c: {
    title: "C Programming",
    description: "The foundation of modern computing. Learn low-level memory control.",
    sections: [
      {
        subtitle: "Memory & Pointers",
        content: "Direct access to hardware via memory addresses. This is where high-performance software begins.",
        code: "int *p = &x; // Pointer assignment"
      }
    ]
  },
  cpp: {
    title: "C++ Programming",
    description: "The language of performance. Used in high-frequency trading, game engines, and operating systems.",
    sections: [
      {
        subtitle: "The Power of Pointers",
        content: "C++ gives you direct memory control. Pointers allow for efficient data manipulation but require manual memory management.",
        code: "int x = 10;\nint* ptr = &x; // ptr holds memory address of x"
      },
      {
        subtitle: "Object Oriented Programming",
        content: "Encapsulation, Inheritance, Polymorphism, and Abstraction. These are the 4 pillars of modern software design.",
      }
    ]
  },
  java: {
    title: "Java Enterprise",
    description: "The industry standard for secure, large-scale backend systems.",
    sections: [
      {
        subtitle: "JVM Architecture",
        content: "Write Once, Run Anywhere. Understanding Bytecode and Garbage Collection.",
        code: "public static void main(String[] args) {\n  System.out.println(\"Hello PrepStack\");\n}"
      }
    ]
  },
  python: {
    title: "Python 3",
    description: "The Swiss Army knife of tech. Simple syntax, immense power in AI and Data Science.",
    sections: [
      {
        subtitle: "Pythonic Code",
        content: "Focus on readability and efficiency using list comprehensions and generators.",
        code: "squared = [x**2 for x in range(10)]"
      },
      {
        subtitle: "Libraries & Ecosystem",
        content: "NumPy, Pandas, and Scikit-Learn. The foundation of modern Data Science and ML.",
      }
    ]
  },
  javascript: {
    title: "JavaScript Core",
    description: "The language that powers the modern web interface.",
    sections: [
      {
        subtitle: "Asynchronous JS",
        content: "Mastering Promises, Async/Await, and the Event Loop for responsive UI.",
        code: "const data = await fetch('/api/user').then(r => r.json());"
      }
    ]
  },
  html: {
    title: "HTML5 Structure",
    description: "The semantic skeleton of every web application.",
    sections: [
      {
        subtitle: "Semantic Tags",
        content: "Improving accessibility and SEO using header, footer, section, and main tags.",
        code: "<main>\n  <section>Content Here</section>\n</main>"
      }
    ]
  },
  css: {
    title: "Modern CSS",
    description: "Styling the web with Flexbox, Grid, and Animations.",
    sections: [
      {
        subtitle: "Layout Engines",
        content: "Mastering Flexbox and Grid for responsive, industrial-grade layouts.",
        code: ".container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}"
      }
    ]
  },
  sql: {
    title: "SQL Mastery",
    description: "Relational database querying and optimization.",
    sections: [
      {
        subtitle: "Complex Joins",
        content: "Inner, Left, Right, and Full Outer joins. Essential for data analysis.",
        code: "SELECT name FROM students WHERE id IN (SELECT student_id FROM marks);"
      }
    ]
  }
};
