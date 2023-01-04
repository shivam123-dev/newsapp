import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    function capitalizeFirstLetter(string) {
      return string[0].toUpperCase() + string.substring(1);
    }
    document.title = `Newsify - ${capitalizeFirstLetter(this.props.category)}`;
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    let { bgColor, color, btnMode } = this.props;
    return (
      <>
        <h2
          className="text-center"
          style={{ color: `${color}`, margin: "35px 0px" }}
        >
          {`Newsify - Top ${
            this.props.category[0].toUpperCase() +
            this.props.category.substring(1)
          } Headlines`}
        </h2>
        {this.state.loading && <Spinner color={color} />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner color={color} />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
  }
}

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
