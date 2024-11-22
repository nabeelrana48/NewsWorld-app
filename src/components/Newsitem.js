import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, dateTime, source} = this.props
    return (
      <div className="col-lg-4 col-md-6 mx-auto mb-3">
      <div className="card" style={{"width": "20rem"}}>
        <img src={!imgUrl?"https://assets3.cbsnewsstatic.com/hub/i/r/2024/11/15/1d25f8aa-596a-4f65-ad0a-2209648539cf/thumbnail/1200x630g6/1a23a6770e3dc5e6fd274c53ad95e118/gettyimages-2182359629.jpg?v=cc5700e8049ccc64c4e0272313675898": imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="badge text-bg-dark">{source}</span>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown Author"} on {new Date(dateTime).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
          </div>
      </div>
      </div>
    )
  }
}
