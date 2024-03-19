import { error } from "jquery";
import React, { useState, useEffect } from "react";
import "../../styles/resources.css";

function Resources() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/articles")
      .then((resp) => resp.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    <div style={{ marginTop: "90px", marginBottom: "60px"}}>
      <div className="container text-center">
        <div>
          <h1 className="display-4 font-weight-bold">
            Empowering your Journey
          </h1>
        </div>
        <div>
          <p className="lead fs-4 mt-2">
            Inspiring Articles for a Healthier Lifestyle
          </p>
          <div style={{ width: "350px", height: "2px", backgroundColor: "#fff", margin: "20px auto" }}></div> {/* Custom horizontal line */}
        </div>
      </div>
    </div>
      {/* Article Cards */}
      <div
        className="container"
        style={{ maxWidth: "100%", marginLeft: "60px", marginRight: "60px" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {articles.map((article, index) => (
            <div
              className="card text-black hvr-round-corners hvr-grow-shadow"
              key={index}
              style={{
                width: "calc(33.33% - 20px)",
                marginBottom: index < 3 ? "60px" : "260px", // Different margins for the first and second row
                marginTop: index >= 3 ? "0px" : "100px", // Different top margin for the second row
                backgroundColor: "#E8C552", // Background color of the cards
                padding: "20px", // Add padding for better spacing
              }}
            >
              <img src={article.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text weight-normal" style={{ fontWeight: "normal" }}> {article.preview}</p>
                <a href={article.button_url} className="btn btn-dark">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;

