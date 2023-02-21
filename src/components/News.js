import React, { useState,useEffect } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News=(props)=> {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

        // 

  useEffect(() => {
    document.title=`${(props.category).charAt(0).toUpperCase()+(props.category).slice(1)}`
    updateNews()
     // eslint-disable-next-line
  }, [])
        
  
  const updateNews=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=860b847d0f5448c1aa7fda84e3a285f8&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    
    let data=await fetch(url);
    props.setProgress(30);
    let parsedData=await data.json();
    setArticles(parsedData.articles)
    props.setProgress(70);
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  const fetchMoreData = async() => {
    
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=860b847d0f5448c1aa7fda84e3a285f8&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
     let data=await fetch(url);
     let parsedData=await data.json();
     setArticles(articles.concat(parsedData.articles))
     setTotalResults(parsedData.totalResults)
 

  };
  const handleNext=async()=>{
      setPage(page+1)
      updateNews()
    }
   
 
  const handlePrev=async()=>{
    setPage(page-1)
    updateNews()
  }

    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>NewsBuddy- Top headlines</h1>
        {loading && <Loading/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Loading/>}
        >
          <div className='container'>
        <div className="row">
          {!loading && articles?.map((element)=>{
              //console.log(element);
              return <div className="col-md-4" key={element.url}>
                 <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        <div className='d-flex justify-content-between'>
              <button disabled ={page<=1}type="button" className="btn btn-dark" onClick={handlePrev}>&larr; Previous</button>
              <button disabled={page+1>Math.ceil(totalResults/20)} type="button" className="btn btn-dark"  onClick={handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
}
News.defaultProps={
  country:'in',
  pageSize:8,
  category:'business'
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News