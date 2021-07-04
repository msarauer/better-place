import React, { useState, useEffect } from "react";
import "./CategoryList.scss";
import axios from "axios";
import CategoryListItem from './CategoryListItem'


const CategoryList = ({ handleClick }) => {

  const [categories, setCategories] = useState();

  useEffect(() => {

    axios.get('/api/categories')
    .then((data) => {
      setCategories(data.data.categories)
    })
    .catch((e) => {console.log(e.message)})
  }, [])



  return (
    <main className="page-content">
      {categories && categories.map((category) => {
        return <CategoryListItem key={category.id} name={category.name} id={category.id} click={handleClick}/>
      })}
    </main>
  );
};

export default CategoryList;
