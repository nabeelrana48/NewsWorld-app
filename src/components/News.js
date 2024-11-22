import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loader from './Loader'
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: []
    }
    document.title = `${this.props.category[0].toUpperCase() + this.props.category.slice(1)} - News World`
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=${this.props.pageSize}&apikey=${this.props.apiKey}`;
    this.setState({ loading: true })
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(this.state.page, parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews()
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }


  handleNextClick = async () => {
    if ((this.state.page + 1) === Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      this.setState({ page: this.state.page + 1 })
      this.updateNews()
    }
  }

  // fetchMoreData = async ()=>{
  //   this.setState({ page: this.state.page + 1 })
  //   let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=${this.props.pageSize}&apikey=${this.props.apiKey}`;
  //   this.setState({ loading: true })
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   console.log(this.state.page, parsedData)
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults,
  //     loading: false
  //   })
  // }


  render() {
    let id = 1
    return (
      <div className="container my-4">
        <h2 className='text-center m-4 fw-bold'>News World - Top {this.props.category[0].toUpperCase() + this.props.category.slice(1)} Headlines</h2>
        {this.state.loading && <Loader />}

        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Loader />}
        > */}
          <div className="d-flex flex-wrap justify-content-between">
            {!this.state.loading && this.state.articles.map((e) => {
              id++
              return <Newsitem key={id} title={e.title.slice(0, 88)} description={e.description} imgUrl={e.image} newsUrl={e.url} dateTime={e.publishedAt} source={e.source.name} />
            })}
          </div>
        {/* </InfiniteScroll> */}

        <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          {/* <button disabled={(this.state.page <= 1) === Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> */}
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
