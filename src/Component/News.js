import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getDate() + 1).padStart(2, "0");
    var yyy = today.getFullYear();
    today = yyy + "-" + mm + "-" + dd;
    console.log(today);

    fetch(
      "https://Newsapi.org/v2/everything?q=apple&from=${today}to=${today}&sortBy=popularity&apiKey=603f3a7fc46e4938bd2f797f81faa01d"
    )
      .then((response) => response.json())
      .then((data) => {
        let newNews = data.articles;
        setNews(newNews);
      });
  }, []);
  console.log(news);
  return (
    <div className="allarticleWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper">
              <h1>Latest News</h1>
              <br />
              <br />
            </div>
          </div>

          {news.slice(0, 6)?.map((singleVideo) => {
            let url = singleVideo.url;

            let videoWrapper = (
              <div key={url} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleNewsWrapper">
                  <div className="newsThumbnail">
                    <a href={url} target="_blank">
                      <img src={singleVideo.urlToImage} />
                    </a>
                  </div>
                  <div className="newsInfoWrapper">
                    <div className="newsTitle">
                      <a href={url} target="_blank">
                        {singleVideo.title}
                      </a>
                    </div>
                    <div className="newsdesc">{singleVideo.description}</div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
