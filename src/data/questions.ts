export interface Question {
  id: string;
  text: string;
  options: string[];
  correct: number;
  category: string;
  isTemplated?: boolean;
}

export const questionBank: Question[] = [
  // Programming - Python
  {
    id: "py1",
    category: "Programming",
    text: "What is the output of 'print(2 ** 3)' in Python?",
    options: ["6", "8", "9", "5"],
    correct: 1
  },
  {
    id: "py2",
    category: "Programming",
    text: "Which of these is a mutable data type in Python?",
    options: ["Tuple", "String", "List", "Integer"],
    correct: 2
  },
  // Aptitude - Templated
  {
    id: "apt1",
    category: "Quantitative Aptitude",
    text: "If a train travels 300 km in 5 hours, what is its speed in km/h?",
    options: ["50", "60", "70", "80"],
    correct: 1,
    isTemplated: true
  },
  // DSA
  {
    id: "dsa1",
    category: "Computer Science Core",
    text: "What is the worst-case time complexity of QuickSort?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    correct: 2
  },
  {
    id: "dsa2",
    category: "Computer Science Core",
    text: "Which data structure follows the LIFO principle?",
    options: ["Queue", "Stack", "LinkedList", "Heap"],
    correct: 1
  },
  // Logical Reasoning
  {
    id: "log1",
    category: "Logical Reasoning",
    text: "In a certain code, 'APPLE' is written as 'BQQMF'. How is 'GRAPE' written?",
    options: ["HSBQF", "ITCRG", "HSCQF", "HSAQF"],
    correct: 0
  },
  // Add more to reach 40+ to allow for randomization...
  { id: "q7", category: "Verbal Ability", text: "Identify the synonym of 'Abundant'.", options: ["Scarce", "Plentiful", "Rare", "Limited"], correct: 1 },
  { id: "q8", category: "Data Interpretation", text: "If the total budget is $1000 and marketing gets 25%, how much does marketing get?", options: ["$200", "$250", "$300", "$150"], correct: 1 },
  { id: "q9", category: "Programming", text: "What does HTML stand for?", options: ["High Text Markup Language", "Hyper Tabular Markup Language", "Hyper Text Markup Language", "None of these"], correct: 2 },
  { id: "q10", category: "Computer Science Core", text: "Which protocol is used for secure web browsing?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], correct: 1 },
  { id: "q11", category: "Logical Reasoning", text: "Find the odd one out.", options: ["Lion", "Tiger", "Leopard", "Cow"], correct: 3 },
  { id: "q12", category: "Quantitative Aptitude", text: "Calculate 15% of 200.", options: ["20", "25", "30", "35"], correct: 2 },
  { id: "q13", category: "Programming", text: "Which language is primarily used for Android development?", options: ["Swift", "Java", "Python", "C#"], correct: 1 },
  { id: "q14", category: "Computer Science Core", text: "What is the primary function of an Operating System?", options: ["Playing Games", "Managing Hardware", "Watching Movies", "Calculations"], correct: 1 },
  { id: "q15", category: "Verbal Ability", text: "Correct the sentence: 'He don't like apples.'", options: ["He doesn't like apples.", "He didn't likes apples.", "He not like apples.", "He don't liked apples."], correct: 0 },
  { id: "q16", category: "Quantitative Aptitude", text: "The square root of 625 is:", options: ["15", "25", "35", "45"], correct: 1 },
  { id: "q17", category: "Programming", text: "What is the range of 'int' in 32-bit systems?", options: ["-32768 to 32767", "-2.1b to 2.1b", "0 to 65535", "None"], correct: 1 },
  { id: "q18", category: "Computer Science Core", text: "DNS stands for:", options: ["Data Name System", "Digital Network Suite", "Domain Name System", "Distributed Node Server"], correct: 2 },
  { id: "q19", category: "Logical Reasoning", text: "If 1=3, 2=5, 3=7, then 4=?", options: ["8", "9", "10", "11"], correct: 1 },
  { id: "q20", category: "Quantitative Aptitude", text: "Simple interest on $1000 at 10% for 1 year is:", options: ["$100", "$110", "$120", "$90"], correct: 0 },
  { id: "q21", category: "Computer Science Core", text: "A deadlock occurs when:", options: ["CPU is idle", "Processes wait infinitely", "Disk is full", "RAM is empty"], correct: 1 },
  { id: "q22", category: "Programming", text: "Which keyword is used for inheritance in Java?", options: ["implements", "inherits", "extends", "super"], correct: 2 },
  { id: "q23", category: "Verbal Ability", text: "Antonym of 'Gigantic' is:", options: ["Huge", "Tiny", "Large", "Colossal"], correct: 1 },
  { id: "q24", category: "Quantitative Aptitude", text: "Find the average of 10, 20, 30, 40, 50.", options: ["25", "30", "35", "40"], correct: 1 }
];
