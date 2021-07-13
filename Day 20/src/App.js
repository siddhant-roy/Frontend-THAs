import React, { useState } from "react";
import "./styles.css";
import Components from "./components.js";

const defaultCalorieArr = [
  { food: "Pizza", calories: 400 },
  { food: "Lasagna", calories: 200 },
  { food: "Coke", calories: 50 },
  { food: "Brownie", calories: 280 },
  { food: "Fried Rice", calories: 90 },
  { food: "Chicken", calories: 600 }
];

function App() {

  const [calorieArr, setCalorieArr] = useState(defaultCalorieArr);

  // const deleteComponent = () => {
  //   const updatedComponents = calorieArr.filter();
  //   setCalorieArr(updatedComponents);
  // }

  const deleteComponent = (food) => {
    const updatedCalorieArr = calorieArr.filter((item) => item.food !== food);
    setCalorieArr(updatedCalorieArr);
  };
  
  return (
    <div className="container">
      <div className="content">
        <div className="calorieBox">
          {calorieArr.map((element) => (
            <Components
              deleteComponent={deleteComponent}
              food={element.food}
              calories={element.calories}
            />
          ))}
        </div>
      
      {/*<Components food={"Lasagna"} calorie={200} />
      <Components food={"Pasta"} calorie={300} />
      <Components food={"Pizza"} calorie={400} />
      <Components food={"Pastry"} calorie={500} />
      <Components food={"Chips"} calorie={600} />
      <Components food={"Spaghetti"} calorie={700} />}*/}
    </div>
    </div>
  );
}

export default App;


