import React from "react";
import "./Articles.css";
import img1 from "./images/artcile-img1.png";
import img2 from "./images/artcile-img2.png";
import img3 from "./images/artcile-img3.png";
import Article from "./Article";

const Articles = () => {
  return (
    <div className="articles">
      <h1>Read news articles:</h1>
        <div className="articles-main">
            <Article img={img1} title={"What is the story behind tatooing"} date={"Feb 16, 2021"} URL={"https://egrimilan.hu/"}/>
            <Article img={img2} title={"Top 10 tattoo myths & misconceptions"} date={"Feb 17, 2021"} URL={"https://egrimilan.hu/"}/>
            <Article img={img3} title={"Unbelievable benefits of doing tattoo"} date={"Feb 20, 2021"} URL={"https://egrimilan.hu/"}/>
        </div>
    </div>
  );
};

export default Articles;
