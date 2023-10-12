import React, { useState } from "react";

function CategoryFilter({ categories, /*onClickedCategory*/ }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const buttonList = categories.map((category) => (
    <button
      className={`${selectedCategory === category ? "selected" : ""}`}
      onClick={() => {
        onCategoryClicked(category);
      }}
      key={category}
    >
      {category}
    </button>
  ));


  
  const onCategoryClicked = (category) => {
    setSelectedCategory(category);
   //onClickedCategory(category)
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonList}
    </div>
  );
}

export default CategoryFilter;
