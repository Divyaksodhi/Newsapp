// import React, { Component } from 'react'
import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import { unstable_useViewTransitionState } from 'react-router-dom';

//REPLACD this.props WITH PROPS
// export class News extends Component {
const News = (props)=>{  
    // articles =[
    //     {"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},
    //     {"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}]
   
    // CLASS MAI UPR HOTE HAI DEFAUT AND PROPS AND FUNCTION MAI NEECHA DEFINE HOTE HAI
    // static defaultProps={
    //   country: 'in',
    //   pageSize: 8,
    //   category:'general',
    //   totalResults: 0

    // }

    // static propTypes={
    //   country: PropTypes.string,
    //   pageSize: PropTypes.number,
    //   category: PropTypes.string

    // }

    //in function instead of counstuctor we use useState
    const [articles,setArticles]=useState([]);
    const [loadingspinner,setLoadingSpinner]=useState(true);
    const [page,setPage]=useState(1);
    const [totalResults,setTotalResults]=useState(0);

   const capitalizeFirstLetter= (string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);

    }
    // constructor(props){
    //     super(props);
    //     console.log("Hello i am a constructor from the news component");
    //     this.state={ 
    //         // articles : this.articles,
    //         articles: [],
    //         loading : true,
    //         page:1
    //     }
    //     document.title=`${this.capitalizeFirstLetter(props.category)} - NewsKing`
    // }
    // async updateNews(pageNo)
    const updateNews = async()=>
    {
      props.setProgress(10);
      
      //below was for calss
      // const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      // this.setState({loadingspinner: true})
      setLoadingSpinner(true);
      let data= await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      console.log(parsedData);
      // this.setState({
      //   articles: parsedData.articles,
      //   totalResults :parsedData.totalResults,
      //   loadingspinner: false
      // })
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoadingSpinner(false);
      props.setProgress(100);
    }

    //useEffect is same as componentDidMount but it is for funtion

    useEffect( ()=>{
      document.title=`${capitalizeFirstLetter(props.category)} - NewsKing`
      updateNews();
    }, []);

//     async componentDidMount(){
//       // console.log("cmd")
//       // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2c909e74d76345d18d093afbd511b8c8&page=1&pageSize=${props.pageSize}`;
//       // this.setState({loadingspinner: true})
//       // let data= await fetch(url);
//       // let parsedData = await data.json();
//       // console.log(parsedData);
//       // this.setState({
//       //   articles: parsedData.articles,
//       //   totalResults :parsedData.totalResults,
//       //   loadingspinner: false
//       // })
// //----------------------------------------------------------------------------------------------
// //below is the changes to consize the above function

//       this.updateNews();

//   }

  // const  handlePrevClick = async ()=>{
  //     // console.log("Previous");

  //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2c909e74d76345d18d093afbd511b8c8&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //     // this.setState({loadingspinner: true})  
  //     // let data= await fetch(url);
  //     //   let parsedData = await data.json();
  //     //   console.log(parsedData);
  //     //   this.setState({
  //     //     page: this.state.page -1,
  //     //     articles: parsedData.articles,
  //     //     loadingspinner: false
  //     //   })
  //UPDATED MINIMIZED CODE
  //     // this.setState({page: this.state.page-1});
  //     // this.updateNews();
  //TO USE FOR FUNTION BASED CODE
  //     setPage(page-1);
  //     updateNews();
          
  //   }

  // const  handleNextClick =async ()=>{
  //     // console.log("Next");
  //     // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize))){

  //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2c909e74d76345d18d093afbd511b8c8&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //     // this.setState({loadingspinner: true})  
  //     // let data= await fetch(url);
  //     //   let parsedData = await data.json();
  //     //   console.log(parsedData);
  //     //   this.setState({
  //     //     page: this.state.page + 1,
  //     //     articles: parsedData.articles,
  //     //     loadingspinner: false

  //     //   })

  //     //UPDATED FUNCTION TO MINIMIZE THE CLASS BASED CODE
  //     // this.setState({page: this.state.page+1});
  //     // this.updateNews();
  //     //-------IF WANT TO USE IN FUNCTION BASED CODE
  //     setPage(page+1)
  //     updateNews();
  //   }

  const  fetchMoreData = async () => {
      // this.setState({page: this.state.page +1})
      
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      // this.setState({loadingspinner: true})
      let data= await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      // this.setState({
      //   articles: this.state.articles.concat(parsedData.articles),
      //   totalResults :parsedData.totalResults,
      //   // loadingspinner: false
      // })
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);

      
    };
  
   
  // render() {
    return (
      <div>
        {/* <h1 className='text-center' style={{margin:'40px 0px'}}>NewsKing - Top {this.capitalizeFirstLetter(props.category)} Headlines</h1> */}
        <h1 className='text-center' style={{margin:'40px 0px' , marginTop: '90px'}}>NewsKing - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {/* {this.state.loadingspinner && <Spinner/>} */}
        {loadingspinner && <Spinner/>}
        <InfiniteScroll
          // dataLength={this.state.articles.length}
          dataLength={articles.length}
          // next={this.fetchMoreData}
          next={fetchMoreData}
          // hasMore={this.state.articles.length !== this.state.totalResults}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
        <div className="row">
{/* !this.state.loadingspinner && map wali line mai sbse aage likha tha ye */}
        {/* {this.state.articles.map( (element)=>{ */}
        {articles.map( (element)=>{  
           return  <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>   
        })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  // }
}
News.defaultProps={
  country: 'in',
  pageSize: 8,
  category:'general',
  totalResults: 0

}

News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string

}
export default News
