import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext';

const Category = ({className}) => {

  const {setNews, fetchNews} =useNewsContext();

    const categories =['business','entertainment','general','health','science','sports','technology'];
   const handleClick= async(e)=>{
    const cat=e.target.value;
    const data=await fetchNews(`/everything?q=${cat}`)
    console.log(data)
    setNews(data.articles);
    }
  
  
    return (
    <div className={`${className}`}>
    <Wrapper>
    <div className={`max-w-full w-fit m-auto flex overflow-x-auto px-4
    scrollbar-none gap-5 `}>
        {categories.map((category)=>{
            return (
                      <button onClick={handleClick} key={category} value={category} className="btn btn-active btn-primary">
                        {category}</button>

            )
        })}
       </div>
    </Wrapper>
    </div>
  )
}

export default Category
