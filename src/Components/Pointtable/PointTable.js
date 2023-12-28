import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Networkerr } from '../PageNotFound/Networkerr';
import { Container } from '@mui/material';

export const PointTable= () => {

    const[points,setPoints]=useState([])
    const [errmsg,setErrmsg]= useState("")
    useEffect(() => {
     let response= axios.get("https://api.cricapi.com/v1/series_points?apikey=647416f0-8d6f-4761-a889-55ea522550a9&id=00c21116-37f4-4b9c-9a96-a55330463208").then((response) => {
        // console.log(response.data.data)
        setPoints(response.data.data)
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
    { points ?
       <div className="box-wrap2">
          <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>Images</th>
          <th>Sort-Name</th>
          <th>Matches</th>
          <th>Wins</th>
          <th>Loss</th>
          <th>Ties</th>
        </tr>
      </thead>
      <tbody>
        {points.map((point, index) => (
          <tr key={index}>
            <td>{point.teamname}</td>
            <td> <img src={point.img} alt="image" />  </td>
            <td>{point.shortname}</td>
            <td>{point.matches}</td>
            <td>{point.wins}</td>
            <td>{point.loss}</td>
            <td>{point.ties}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>:<PageNotFound/>}
  </div> :<Networkerr/> }

    </>
  )
}

