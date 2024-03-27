import React, {useEffect, useRef, useState } from 'react'
import {HiChevronLeft,HiChevronRight} from 'react-icons/hi2';

function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef = useRef();
    const getMovies=()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9afbb6cdc232f27885e28a42bd8c9e08")
        .then(res => res.json())
        .then(json =>setMovieList(json.results))
    }
    useEffect(()=>{
        getMovies();
    },[])
    console.log(movieList);
    const scrollLeft = (element)=>{
        element.scrollLeft-=1290
    }
    const scrollRight = (element)=>{
        element.scrollLeft+=1290
    }
  return (
   <div>
    <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'onClick={()=>scrollLeft(elementRef.current) }/>
    <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 'onClick={()=>scrollRight(elementRef.current) }/>   
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}> 
        {movieList.map((item)=>(
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} 
            className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>

   </div>
    
  )
}

export default Slider