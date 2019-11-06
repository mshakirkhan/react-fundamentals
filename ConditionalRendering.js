import React from 'react';

// Conditional Rendering

// 1. If Statements
// 2. Ternary Operators
// 3. Logical and Operator

// Undefined | Null | Boolean are ignored by JXS

function App() {
  var data = {
    name : "Muhammad Shakir Khan",
    age : 23,
    height : 5.4
  }

  // If Statements Example Start
  function getName(name)
  {
    if(name){
      return name;
    }
    else{
      return "Unknown";
    }
  }
  // If Statements Example Close
  return (
    <div>
     <h1>Name: {getName(data.name)}</h1>
     <h1>Age: {data.age ? data.age : 'No Age Defined'}</h1>
     <h1>Height: {data.height >= 5.4 && 'Normal Height'}</h1>
    </div>
  );
}

export default App;
