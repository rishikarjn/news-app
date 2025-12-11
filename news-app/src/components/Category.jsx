import React from 'react'
import Wrapper from './Wrapper'

const Category = ({className}) => {

    const categories =['business','entertainment','general','health','science','sports','technology'];
  return (
    <div className={`${className}`}>
    <Wrapper>
    <div className={`max-w-full w-fit m-auto flex overflow-x-auto px-4
    scrollbar-none gap-5 `}>
        {categories.map((category)=>{
            return (
                      <button key={category} className="btn btn-active btn-primary">
                        {category}</button>

            )
        })}
       </div>
    </Wrapper>
    </div>
  )
}

export default Category
