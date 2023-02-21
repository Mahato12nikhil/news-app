import React from 'react'

const NewsItem=(props)=> {

    let {title,desc,imageUrl,newsUrl}=props;
    return (
      <div >
        <div className="card" >
            <img src={imageUrl?imageUrl:'https://i.dailymail.co.uk/1s/2023/02/16/15/67761727-0-image-a-23_1676561725323.jpg'} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{desc}...</p>
              <a href={newsUrl} className="btn btn-dark">read more...</a>
            </div>
        </div>
     </div>
    )
}

export default NewsItem
