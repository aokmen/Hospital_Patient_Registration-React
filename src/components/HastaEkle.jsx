import React from 'react'
import { useState } from 'react'

const HastaEkle = ({doktor,hasta,setHasta}) => {

  const [names, setNames] = useState("")
  const [dates, setDates] = useState("")

  const editSubmit =(e) => {
    e.preventDefault();

    setHasta([...hasta,{
      id:hasta.length+1,
      text:names,
      day:dates,
      bittMi:false,
      doktorum:doktor[0].doktor,
    }])
    setNames("")
    setDates("")  
  }

  return (
    <div>
     
        <form action="" style={{ marginTop:"20px"}} onSubmit={editSubmit}>
          <label htmlFor="">Add Patient Info</label>
          <div><input type="text" placeholder='Your Name...' value={names} onChange={(e)=>setNames(e.target.value)} required
            autoFocus/></div>
          <label htmlFor="">Appointment Date</label>
          <div><input type="datetime-local" value={dates}onChange={(e)=>setDates(e.target.value)} required /></div>
          <input className="buton" type="submit" value='Register' />
          
        </form>
      </div>
  )
}

export default HastaEkle
