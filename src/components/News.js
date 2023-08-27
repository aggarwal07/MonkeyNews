import React, { Component } from "react";
import NewsContent from "./NewsContent";

import Load from "./Load";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    pageSize: "12",
    category: "general",
    country: "in"
  }
  static propTypes = {
    
    country: PropTypes.string,
    category: PropTypes.string
  }

  articles = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page:null,
      totalResults:null,
      length: 12
    };
  }
  async componentDidMount(){
    
    let dataUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=815e68ad59614b2e9eb9ca70cc7461d3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(dataUrl);
    let parseData = await data.json();
    this.setState({
      articles : parseData.articles,
      loading : false,
      page : 1,
      totalResults : parseData.totalResults
    }) 

  }
  handelNext = async()=>{
    this.setState({loading: true})
    let dataUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=815e68ad59614b2e9eb9ca70cc7461d3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(dataUrl);
    let parseData = await data.json();
    this.setState({loading: false})
    this.setState({
      articles : parseData.articles,
      
      page : this.state.page +1
      
    }) 

  }
  handelPrev = async()=>{
    this.setState({loading: true})
    let dataUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=815e68ad59614b2e9eb9ca70cc7461d3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(dataUrl);
    let parseData = await data.json();
    this.setState({loading: false})
    this.setState({
      articles : parseData.articles,
      
      page : this.state.page -1
    }) 

  }
  fetchMoreData= async()=>{
    let dataUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=815e68ad59614b2e9eb9ca70cc7461d3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(dataUrl);
    let parseData = await data.json();
   
    this.setState({
      articles : this.state.articles.concat(parseData.articles),
      length :12,
      page : this.state.page +1
    }) 

  }
  
  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">MonkeyNews - Top Headlines Of The Day</h1>
        
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Load />}
          >
            <div className="container">
              <div className="row my-4">
            {this.state.articles.map((element) => {
              return (

                  <div className="col-md-3 my-3" key={element.url}>
                    <NewsContent
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      />
                  </div>
              );
            })}
            </div>
            </div>
          </InfiniteScroll>
        <div className="d-flex justify-content-between">
         {/* <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handelPrev}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 12)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handelNext}
          >
            Next &raquo;
          </button>*/}
        </div>
      </div>
    );
  }
}

export default News;
