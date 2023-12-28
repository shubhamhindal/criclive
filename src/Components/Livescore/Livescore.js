import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Cardlivescore } from './Cardlivescore'
import { PageNotFound } from '../PageNotFound/PageNotFound'
import { Networkerr } from '../PageNotFound/Networkerr'
export const  Livescore= (props) => {

    const [state,setState] = useState([])
    const [errmsg,setErrmsg]= useState("")
    useEffect(() => {
     let response= axios.get("https://api.cricapi.com/v1/cricScore?apikey=54203d46-c07e-4a08-b56f-7872e1a4188f").then((response) => {
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
   { state ?
     <div className='container'>   
    {
 state.map((value,index,array)=>{
        return(
              <Cardlivescore match={value}/>
              )
            })
         }    
    </div>: <PageNotFound/>}
  </div> :<Networkerr/> }
  </>
      )
     }