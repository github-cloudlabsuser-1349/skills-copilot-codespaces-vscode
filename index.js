const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
  
  function extractNames(data) {
    // Flatten the array of arrays
    const flattenedData = data.flat();
  
    // Extract names from each person object
    const names = flattenedData.map(person => person.name);
  
    return names;
  }
  
  // Example usage:
  const names = extractNames(data);
  console.log(names); // Output: ['John', 'Jane', 'Bob']