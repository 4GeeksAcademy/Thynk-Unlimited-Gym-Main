import { error } from "jquery";
import React, { useState, useEffect } from "react";
import "../../styles/resources.css";
import { ScaleLoader } from "react-spinners";
import "animate.css";

function Resources() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/articles")
      .then((resp) => resp.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>

      {loading ? (
        <div className="loading-spinner">
          <ScaleLoader id="loader" color="#e8c552" height={75} width={8} />
        </div>
      ) : (
        <>
          {/* Healthy LifeStyle Jumbotron*/}

          <div
            className="jumbotron jumbotron fluid animate__animated animate__fadeInUp"
            style={{
              marginTop: "60px",
              marginBottom: "30px",
            }}
          >
            <div className="container text-center">
              <h1 className="display-4">Empowering your journey</h1>
              <p className="lead fs-4">
                Inspiring Articles for a Healthier Lifestyle
              </p>
            </div>
          </div>

          {/* Article Cards */}
          <div
            className="container animate__animated animate__slideInUp"
            style={{
              maxWidth: "100%",
              marginLeft: "60px",
              marginRight: "60px",
            }}
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
                  className="card text-black"
                  key={index}
                  style={{
                    width: "calc(33.33% - 20px)",
                    marginBottom: index < 3 ? "60px" : "60px", // Different margins for the first and second row
                    marginTop: index >= 3 ? "0px" : "80px", // Different top margin for the second row
                    backgroundColor: "#E8C552", // Background color of the cards
                    padding: "20px", // Add padding for better spacing
                  }}
                >
                  <img
                    src={article.image_url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text"> {article.preview}</p>
                    <a href={article.button_url} className="btn btn-dark">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Resources;

