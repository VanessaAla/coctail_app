import React from "react";

export default function Category(props) {
  console.log("what is props", props);

  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}
