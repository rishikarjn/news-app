import   { useEffect} from 'react'
import Wrapper from "../components/Wrapper"
import { useNewsContext } from '../context/NewsContext';
import Loader from '../components/Loader';

const News = ({className}) => {

         const {news, setNews, fetchNews, loading}=useNewsContext();

        useEffect(()=>{
            (async () =>{
                const data=await fetchNews()
                setNews(data.articles);
            })()
        },[])
 if(loading) return <Loader className={'w-fit m-auto py-24'}/>

  return (
    <Wrapper>
    <div className={`grid grid-cols-4 gap-6 ${className}`}>
        {news.map((newsDetails, index)=>{
            if(!newsDetails.urlToImage )
              null;   
            return (
                <NewsCard key={index} details={newsDetails}/>
            )
        })}
    </div>
    </Wrapper>
  )
}
  
const NewsCard=({details}) =>{
    return(
        <div className="card bg-base-200  shadow-sm">
  <figure>
    <img
    className='aspect-video object-contain'
      src={details?.urlToImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2">{details?.title}</h2>
    <p className='line-clamp-3'>{details.description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>window.open (details.url)} className='badge-outline btn'>Read More</button>
    </div>
  </div>
</div>
    )
}
export default News
