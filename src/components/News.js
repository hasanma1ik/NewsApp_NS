import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey `;

  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  const updateNews = async (newPage = page) => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${newPage}&pageSize=${props.pageSize}`;
    setLoading(true)
    let response = await fetch(url);
    props.setProgress(30);
    let parsedData = await response.json();
    props.setProgress(70);
    if(newPage === 1){
      setArticles(parsedData.articles);
    } else {
      setArticles(articles.concat(parsedData.articles));
    }
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
}

useEffect(() => {
  updateNews(page);
}, [page, props.country, props.category, props.apiKey, props.pageSize]);

  
 
    
    // console.log("cdm"); 
    // &apiKey= =${props.category}&apiKey= -> replaced the two and got news on science

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=07bd4837602b403ca6d530d030ee25db&page=1&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    // let response = await fetch(url);
    // let parsedData = await response.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles, 
    //   totalResults: parsedData.totalResults,
    //  loading: false})

  

  const fetchMoreData = () => {

  // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey `;
    const newPage = page + 1;
    updateNews(newPage);
};




    // console.log("render")
    return (

      <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: "90px" }}>News Synthesis - Latest {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}

      <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length !== totalResults}
    loader={<Spinner/>}
> 
    <div className="container">
    <div className="row">
    {articles.map((element, index) => {
        return (
            <div className="col-md-4" key={index}>
                <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                />
            </div>
        );
    })}
    </div>
    </div> 
</InfiniteScroll>

  </>
)
}



              News.defaultProps = {
                country: 'us',
                pageSize: 20,
                category: 'general',
              };
            
              News.propTypes = {
                country: PropTypes.string,
                pageSize: PropTypes.number,
                category: PropTypes.string,
            
              };

export default News


 {/* {this.state.articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                      <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
              })} */}


  {/* element.slice title 45, equal amount of characters in both titles to make it look more uniform */}

              {/* md-4 meaning 3 newsitems taking equal spaces */}