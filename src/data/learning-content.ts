export const learningContent = {
  dsa: {
    title: "Data Structures",
    description: "The fundamental building blocks of efficient software. Master how data is organized and stored.",
    sections: [
      {
        subtitle: "Why Data Structures?",
        content: "In production-level software, choosing the right data structure can be the difference between a high-performance system and a failing one. Tech giants like Google and Meta test this extensively because it reflects your ability to optimize memory and processing time."
      },
      {
        subtitle: "Arrays & Linked Lists",
        content: "Arrays offer O(1) access but O(n) insertion. Linked Lists offer O(1) insertion but O(n) access. Knowing when to use which is vital for system efficiency.",
        code: "int[] arr = new int[5]; // Fixed size\nLinkedList<Integer> list = new LinkedList<>(); // Dynamic"
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
      }
    ]
  },
  // Adding language content
  cpp: {
    title: "C++ Programming",
    description: "The language of performance. Used in high-frequency trading, game engines, and operating systems.",
    sections: [
      {
        subtitle: "The Power of Pointers",
        content: "C++ gives you direct memory control. This is high-stakes programming. Pointers allow for efficient data manipulation but require manual memory management.",
        code: "int x = 10;\nint* ptr = &x; // ptr holds memory address of x"
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
      }
    ]
  }
};
