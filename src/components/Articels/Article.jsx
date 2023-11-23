import React from "react";
import "./Articles.css";

const Article = ({ img, title, date, URL }) => {
  function viewPage() {
    window.open(URL, "_blank");
  }
  return (
    <div className="article" onClick={(e) => viewPage()}>
      <div className="article-img-contanier">
        <img src={img} alt="" />
      </div>
      <h3 className="article-title">{title}</h3>
      <p className="article-date">{date}</p>
    </div>
  );
};

export default Article;
