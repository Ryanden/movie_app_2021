import React from 'react';

function Food({ name, picture }) {
  return <div>
    <h3>I Like {name}</h3>
    <img style={{ width: "700px", height: "300px" }} src={picture} />
  </div>
}

const foodLike = [
  {
    name: "김밥",
    img: "https://cdn.pixabay.com/photo/2016/03/15/08/02/food-1257054_1280.jpg"
  },
  {
    name: "떡볶이",
    img: "https://cdn.pixabay.com/photo/2017/09/10/14/23/toppokki-2735719_1280.jpg"
  },
  {
    name: "짜장면",
    img: "https://cdn.pixabay.com/photo/2017/07/27/16/45/i-2545938_1280.jpg"
  },];

function App() {
  return (
    <div className="App">
      {foodLike.map(dish => (
        <Food name={dish.name} picture={dish.img}></Food>
      ))}
    </div>
  );
}

export default App;
