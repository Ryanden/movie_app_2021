import React from 'react';

function Food({ name, picture, rating }) {
  return <div>
    <h3>I Like {name}</h3>
    <h4>rating : {rating}</h4>
    <img style={{ width: "700px", height: "300px" }} src={picture} />
  </div>
}

const foodLike = [
  {
    id: 1,
    name: "김밥",
    img: "https://cdn.pixabay.com/photo/2016/03/15/08/02/food-1257054_1280.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "떡볶이",
    img: "https://cdn.pixabay.com/photo/2017/09/10/14/23/toppokki-2735719_1280.jpg",
    rating: 3.5,
  },
  {
    id: 3,
    name: "짜장면",
    img: "https://cdn.pixabay.com/photo/2017/07/27/16/45/i-2545938_1280.jpg",
    rating: 5,
  },];

function App() {
  return (
    <div className="App">
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} picture={dish.img}></Food>
      ))}
    </div>
  );
}

export default App;