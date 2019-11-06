import React from 'react';

function App() {
  var data = {
    h1 : "First Application on React",
    paraOne : "This is paragraph One",
    paraTwo : "This is paragraph Two"
  }
  return (
    <div>
     <h1>{data.h1}</h1>
     <p>{data.paraOne}</p>
     <p>{data.paraTwo}</p>
    </div>
  );
}

export default App;
