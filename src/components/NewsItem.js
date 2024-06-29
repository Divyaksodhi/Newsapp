// import React, { Component } from 'react'
import React from 'react'

// export class NewsItem extends Component {
const NewsItem=(props)=>{  
    
  // render() {
    // let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
            <div className="card" style={{border:'2px solid grey'}}>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: 0
              }}>
            <span className=" badge rounded-pill bg-danger"> {source}
    
    </span>
    </div>
            <img src={!imageUrl?"https://etstatic.tnn.in/thumb/msid-108920349,width-1280,height-720,resizemode-75/108920349.jpg":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>

            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm" >Read More</a>
            </div>
            </div>
      </div>
    )
  // }
}

export default NewsItem
