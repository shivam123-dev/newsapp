import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setLoading(true);
    props.setProgress(50);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
    document.title = `Newsify - ${capitalizeFirstLetter(props.category)}`;
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setLoading(true);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  let { bgColor, color, btnMode } = props;
  return (
    <>
      <h2
        className="text-center"
        style={{ color: `${color}`, margin: "35px 0px", marginTop: "90px" }}
      >
        {`Newsify - Top ${
          props.category[0].toUpperCase() + props.category.substring(1)
        } Headlines`}
      </h2>
      {loading && <Spinner color={color} />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner color={color} />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    bgColor={bgColor}
                    color={color}
                    btnMode={btnMode}
                    date={element.publishedAt}
                    source={element.source.name}
                    author={element.author}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  pageSize: 3,
  bgColor: "white",
  color: "black",
  btnMode: "dark",
  country: "in",
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  btnMode: PropTypes.string,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
