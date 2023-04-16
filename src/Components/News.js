import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
export default function News(props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalResults, settotalResults] = useState(0)
    const [page, setPage] = useState(1)
    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.ApiKey}`
        setLoading(true)
        props.setProgress(30)
        let data = await fetch(url)
        props.setProgress(60)
        let parsedData = await data.json()
        props.setProgress(90)
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        props.setProgress(100)
        setLoading(false)
    }

    const fetchMoreData = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page + 1}&apiKey=${props.ApiKey}`
        props.setProgress(30)
        setPage(page + 1)
        let data = await fetch(url)
        props.setProgress(60)
        let parsedData = await data.json()
        props.setProgress(100)
        setArticles(articles.concat(parsedData.articles))
    }
    const capitalizeFirstLetter = (string) => (
        string.charAt(0).toUpperCase() + string.slice(1)
    );
    document.title = `ApniNews | ${capitalizeFirstLetter(props.category)}`
    useEffect(() => {
        updateNews()
    }, []);
    return (
        <div className='m-3'>
            {/* <div className="row" style={{margin:'150px'}}>
                <div className="card col-md-4" style={{ width: '362px', height: '461px',marginLeft:'20px', }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
                <div className="card col-md-4" style={{ width: '362px', height: '461px', marginLeft:'20px',}}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
                <div className="card col-md-4" style={{ width: '362px', height: '461px', marginLeft:'20px', }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
            </div> */}
            <h1 className='text-center' style={{ marginTop: "150px" }}>ApniNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                style={{ overflow: 'hidden' }}
            >
                <div className="row">
                    {
                        articles.map((element) => (
                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-xs-12" key={element.url}>
                                <NewsItem description={element.description} title={element.title} url={element.url} date={element.publishedAt} imageurl={element.urlToImage} name={element.source["name"]} />
                            </div>
                        ))
                    }
                </div >
            </InfiniteScroll >
        </div >
    )
}
