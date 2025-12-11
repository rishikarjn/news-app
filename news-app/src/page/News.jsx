import React, { useEffect, useState} from 'react'
import Wrapper from "../components/Wrapper"
import axios from 'axios'

const News = ({className}) => {
        
      const [news, setNews]=useState([]); 

      const fetchNews= async()=>{
           const response=await axios('https://newsapi.org/v2/everything?q=tesla&from=2025-11-11&sortBy=publishedAt&apiKey=9088b5ddaaf349b79960d1af4918b9aa')
          console.log(response.data)
        }

        useEffect(()=>{
            fetchNews();
        },[])


  return (
    <Wrapper>
    <div className={`grid grid-cols-4 gap-6 ${className}`}>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
    </div>
    </Wrapper>
  )
}
  
const NewsCard=() =>{
    return(
        <div className="card bg-base-200  shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    )
}
export default News
