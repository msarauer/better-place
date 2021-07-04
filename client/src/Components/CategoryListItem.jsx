import React from "react";
import "./CategoryList.scss";



const CategoryList = (props) => {

  

  
  return (
    <div className="card" onClick={() => {props.click(props.id)}}>
        <div className="content">
          <h2 className="title">{props.name}</h2>
          <p className="copy">
            From electrical to plumbing - find neighbors who need your skills
          </p>
      
        </div>
      </div>
  );
};

export default CategoryList;
