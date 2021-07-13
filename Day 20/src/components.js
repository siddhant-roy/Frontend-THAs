import React from "react";

export default function Components(props) {
  const { food, calories, deleteComponent } = props;
  return (
    <div className="components">
      <h1>{props.food}</h1>
      <button onClick={() => deleteComponent(food)}>Delete</button>
      <h2>This food item has {props.calorie} calories</h2>
    </div>
  );
}

