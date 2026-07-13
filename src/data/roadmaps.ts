export interface RoadmapStep {
  step: string;
  details: string;
}

export interface CareerPath {
  id: string;
  title: string;
  skills: string[];
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
        skills: ["Advanced DSA", "System Design", "OS & Networking", "Lycide Logic"],
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
        content: [
          { step: "Phase 1: Math & Python", details: "Strengthen Linear Algebra and Calculus. Master Python libraries like NumPy." },
          { step: "Phase 2: Data Engineering", details: "Learn data cleaning and visualization with Pandas and Matplotlib." },
          { step: "Phase 3: ML Algorithms", details: "Implement Linear Regression, SVM, and Decision Trees from scratch." },
          { step: "Phase 4: Deep Learning", details: "Master Neural Networks and build projects using PyTorch or TensorFlow." }
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
        content: [
          { step: "Step 1: Spreadsheet Mastery", details: "Learn advanced Excel formulas, pivot tables, and VBA." },
          { step: "Step 2: SQL Fundamentals", details: "Query databases like a pro. Master Joins, Aggregates, and Windows functions." },
          { step: "Step 3: Visualization", details: "Master Tableau or PowerBI to turn data into visual stories." },
          { step: "Step 4: Reporting", details: "Learn to build automated dashboards for industrial stakeholders." }
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
        content: [
          { step: "Unit 1: Financial Statements", details: "Master Balance Sheets, P&L, and Cash Flow analysis." },
          { step: "Unit 2: Valuation", details: "Learn DCF and Comparable Company Analysis (CCA)." },
          { step: "Unit 3: Market Dynamics", details: "Understand macro-economic factors affecting global markets." },
          { step: "Unit 4: Portfolio Prep", details: "Prepare for CFA Level 1 and learn investment banking protocols." }
        ]
      }
    ]
  }
];
