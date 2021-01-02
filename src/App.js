import React from 'react';

function Food({ fav }) {
  return <h1>I Like {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="kimchi"></Food>
      <Food fav="ramen"></Food>
      <Food fav="dduk"></Food>
      <Food fav="rice"></Food>
    </div>
  );
}

export default App;
