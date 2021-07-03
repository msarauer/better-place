import React from "react";
import CategoryListSmallCard from './CategoryListSmallItem'
import "./CategoryListSmall.scss";

export default function CategoryListSmall() {
 

  return (
<div className="list-container">
  <CategoryListSmallCard />
  <CategoryListSmallCard />
  <CategoryListSmallCard />
</div>
  );
}