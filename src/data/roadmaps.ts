
export interface RoadmapStep {
  step: string;
  details: string;
}

export interface CareerPath {
  id: string;
  title: string;
  skills: string[];
  practiceSlug: string; // Mapping to learning modules
  content: RoadmapStep[];
}

export interface DegreeRoadmap {
  id: string;
  name: string;
  careerPaths: CareerPath[];
}

export const degreesRoadmaps: DegreeRoadmap[] = [
  {
    id: "btech",
    name: "B.TECH (Bachelor of Technology)",
    careerPaths: [
      {
        id: "sde-faang",
        title: "Software Development Engineer (FAANG Focus)",
        skills: ["Advanced DSA", "System Design", "OS & Networking", "Low-Level Optimization"],
        practiceSlug: "dsa",
        content: [
          { step: "Phase 1: Language Mastery", details: "Master C++ or Java. Focus on STL/Collections and memory management." },
          { step: "Phase 2: Data Structures", details: "Solve 200+ problems on LeetCode/CodeChef. Focus on Graphs and DP." },
          { step: "Phase 3: Core Subjects", details: "Deep dive into OS, DBMS, and Computer Networks. Prepare for 1-hour technical rounds." },
          { step: "Phase 4: System Design", details: "Learn Scalability, Load Balancing, and Hashing for High-Level Design rounds." }
        ]
      },
      {
        id: "ai-ml",
        title: "AI / Machine Learning Engineer",
        skills: ["Python", "Linear Algebra", "TensorFlow", "Pandas", "Probability"],
        practiceSlug: "python",
        content: [
          { step: "Phase 1: Math & Python", details: "Strengthen Linear Algebra and Calculus. Master Python libraries like NumPy." },
          { step: "Phase 2: Data Engineering", details: "Learn data cleaning and visualization with Pandas and Matplotlib." },
          { step: "Phase 3: ML Algorithms", details: "Implement Linear Regression, SVM, and Decision Trees from scratch." },
          { step: "Phase 4: Deep Learning", details: "Master Neural Networks and build projects using PyTorch or TensorFlow." }
        ]
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity Specialist",
        skills: ["Network Security", "Cryptography", "Ethical Hacking", "Linux", "Python"],
        practiceSlug: "networks",
        content: [
          { step: "Phase 1: Networking Basics", details: "Understand OSI model, TCP/IP, and network protocols in depth." },
          { step: "Phase 2: Security Principles", details: "Learn about firewalls, VPNs, and basic cryptography techniques." },
          { step: "Phase 3: Defensive Security", details: "Focus on incident response, risk management, and security auditing." },
          { step: "Phase 4: Pentesting", details: "Learn ethical hacking tools and perform vulnerability assessments." }
        ]
      },
      {
        id: "devops",
        title: "DevOps Engineer",
        skills: ["Docker", "Kubernetes", "CI/CD", "AWS/Azure", "Terraform"],
        practiceSlug: "os",
        content: [
          { step: "Phase 1: Linux & Scripting", details: "Master the Linux command line and Shell scripting or Python." },
          { step: "Phase 2: Cloud Computing", details: "Learn AWS or Google Cloud Platform core services." },
          { step: "Phase 3: Containerization", details: "Understand Docker and orchestration with Kubernetes." },
          { step: "Phase 4: Automation", details: "Build CI/CD pipelines using Jenkins or GitHub Actions." }
        ]
      }
    ]
  },
  {
    id: "bca",
    name: "BCA (Bachelor of Computer Applications)",
    careerPaths: [
      {
        id: "full-stack",
        title: "Full Stack Web Developer",
        skills: ["React", "Node.js", "Next.js", "MongoDB", "Tailwind CSS"],
        practiceSlug: "javascript",
        content: [
          { step: "Step 1: Frontend Mastery", details: "Learn HTML5, CSS3, and Modern JavaScript (ES6+). Build responsive UIs." },
          { step: "Step 2: Backend Logic", details: "Master Node.js and Express. Learn how to build RESTful APIs." },
          { step: "Step 3: Databases", details: "Connect your apps with MongoDB or PostgreSQL. Learn CRUD operations." },
          { step: "Step 4: Deployment", details: "Deploy projects on Vercel or AWS. Learn Git/GitHub for collaboration." }
        ]
      },
      {
        id: "data-analyst",
        title: "Data Analyst",
        skills: ["Excel", "SQL", "Tableau", "Python", "Statistics"],
        practiceSlug: "sql",
        content: [
          { step: "Step 1: Spreadsheet Mastery", details: "Learn advanced Excel formulas, pivot tables, and VBA." },
          { step: "Step 2: SQL Fundamentals", details: "Query databases like a pro. Master Joins, Aggregates, and Windows functions." },
          { step: "Step 3: Visualization", details: "Master Tableau or PowerBI to turn data into visual stories." },
          { step: "Step 4: Reporting", details: "Learn to build automated dashboards for industrial stakeholders." }
        ]
      },
      {
        id: "mobile-dev",
        title: "Mobile App Developer",
        skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        practiceSlug: "java",
        content: [
          { step: "Step 1: Mobile UI Design", details: "Learn the principles of mobile user experience and UI patterns." },
          { step: "Step 2: Cross-Platform Frameworks", details: "Master React Native or Flutter to build for both iOS and Android." },
          { step: "Step 3: State Management", details: "Learn Redux or Bloc for complex app states." },
          { step: "Step 4: Native Features", details: "Learn to use native device APIs like Camera, GPS, and Push Notifications." }
        ]
      }
    ]
  },
  {
    id: "bba",
    name: "BBA (Bachelor of Business Administration)",
    careerPaths: [
      {
        id: "marketing",
        title: "Digital Marketing Manager",
        skills: ["SEO", "SEM", "Content Strategy", "Google Analytics", "CRM"],
        practiceSlug: "marketing",
        content: [
          { step: "Unit 1: Market Research", details: "Identify target audiences and analyze competitor strategies." },
          { step: "Unit 2: Content & SEO", details: "Master keyword research and high-converting content creation." },
          { step: "Unit 3: Paid Ads", details: "Learn Google Ads and Meta Ads management to drive traffic." },
          { step: "Unit 4: Analytics", details: "Track ROI and conversion rates using Google Analytics 4." }
        ]
      },
      {
        id: "finance",
        title: "Financial Analyst",
        skills: ["Corporate Finance", "Accounting", "Stock Analysis", "Portfolio Management"],
        practiceSlug: "finance",
        content: [
          { step: "Unit 1: Financial Statements", details: "Master Balance Sheets, P&L, and Cash Flow analysis." },
          { step: "Unit 2: Valuation", details: "Learn DCF and Comparable Company Analysis (CCA)." },
          { step: "Unit 3: Market Dynamics", details: "Understand macro-economic factors affecting global markets." },
          { step: "Unit 4: Portfolio Prep", details: "Prepare for CFA Level 1 and learn investment banking protocols." }
        ]
      },
      {
        id: "hr-manager",
        title: "Human Resource Manager",
        skills: ["Talent Acquisition", "Employee Relations", "Payroll", "Labor Laws", "Leadership"],
        practiceSlug: "marketing",
        content: [
          { step: "Unit 1: Recruitment Protocol", details: "Learn to source, screen, and interview candidates effectively." },
          { step: "Unit 2: Organizational Behavior", details: "Understand group dynamics and leadership in corporate environments." },
          { step: "Unit 3: Compensation & Benefits", details: "Master payroll management and employee benefit schemes." },
          { step: "Unit 4: Conflict Resolution", details: "Learn to manage employee relations and resolve workplace disputes." }
        ]
      }
    ]
  }
];
