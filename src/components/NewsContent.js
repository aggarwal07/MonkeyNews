import React, { Component } from 'react'



export class NewsContent extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {!author? "unknown" : author} , Time : {date}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsContent
 