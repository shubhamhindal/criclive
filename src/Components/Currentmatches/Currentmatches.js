import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Currentmcard } from './Currentmcard'
import { PageNotFound } from '../PageNotFound/PageNotFound'
import { Networkerr } from '../PageNotFound/Networkerr'
export const  Currentmatches= (props) => {

    const [state,setState] = useState([])
    const [errmsg,setErrmsg]= useState("")
    useEffect(() => {
     let response= axios.get("https://api.cricapi.com/v1/currentMatches?apikey=aa291726-a61c-4807-bf2b-cf6d4c3433ac&offset=0").then((response) => {
        // console.log(response.data.data)
        setState(response.data.data)
      }).catch((err => {
        setErrmsg(err.message)
        // console.log(err.message);
        // console.log(err)
       
      }))
    }, [])
 
  return (
    <>
    { errmsg != "Network Error" ?
        <div>
    {state ?
       <div className='container'>   
    {
 state.map((value,index,array)=>{
        return(
              <Currentmcard match={value}/>
              )
            })
         }
          
    </div> : <PageNotFound />}
  </div> :<Networkerr/> }
  </>
       )
     }


            