import React from "react";
import "./CategoryList.scss";


const CategoryList = ({ handleClick }) => {
  return (
    <main className="page-content">
      <div className="card" onClick={() => {handleClick('1')}}>
        <div className="content">
          <h2 className="title">Home Repair</h2>
          <p className="copy">
            From electrical to plumbing - find neighbors who need your skills
          </p>
          <button className="btn">View More</button>
        </div>
      </div>
      <div className="card" onClick={() => {handleClick('2')}}>
        <div className="content">
          <h2 className="title">Physical</h2>
          <p className="copy">
            Offer a helping hand to someone in your community who needs help
            with heavy lifting
          </p>
          <button className="btn">View More</button>
        </div>
      </div>
      <div className="card" onClick={() => {handleClick('3')}}>
        <div className="content">
          <h2 className="title">Family</h2>
          <p className="copy">Lend support for neighbors with family needs</p>
          <button className="btn">View More</button>
        </div>
      </div>
      <div className="card" onClick={() => {handleClick('4')}}>
        <div className="content">
          <h2 className="title">Other</h2>
          <p className="copy">Find other ways to help in your community</p>
          <button className="btn">View More</button>
        </div>
      </div>
    </main>
  );
};

export default CategoryList;
