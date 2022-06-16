 import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
 
 const Post = () => {

    const {id} = useParams()
    const  {data,error,loading} =useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (loading) {
      return <h2>Loading...</h2>;
    }
    if (error !== "") {
      return <h2>{error}</h2>;
    }
  

   return (

     <h1>Post id : {id} - {data.body}</h1>
   )
 }
 
 export default Post