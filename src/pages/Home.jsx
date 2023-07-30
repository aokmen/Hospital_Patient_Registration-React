import React from 'react'
import {doktorData,hastaData} from './../helper/Data'
import HastaListe from '../components/HastaListe'
import { useState } from 'react'
import HastaEkle from '../components/HastaEkle'
const Home = () => {

  const [doktor, setDoktor] = useState(doktorData)
  const [hasta, setHasta] = useState(hastaData)
  const [news, setNews] = useState(hasta)
  const [show, setShow] = useState(true)

  const showImg = (index,dr) => {
    
    setShow(!show);
    setDoktor(show ? doktor.filter((i) => i.id === index) : doktorData);
    
    if(show) {setNews(news.filter((item,i)=>(item.doktorum === dr)))} 
    else {setDoktor(doktorData)     
          setHasta(hasta)} 

  }
  return (
    <div >
      <div className='container'>
        <h1 className=' header'>Hospital Patient Registration</h1>
        <div className='img-container'>
          {doktor.map((item,i)=>(<div key={i}>
            <img className='image' src={item.resim} alt="" width="180px" height="200px" onClick={()=>showImg(item.id,item.doktor)}/>
            <p className='dr-name' onClick={()=>showImg(item.id)}>{item.doktor}</p></div>))}
          
        </div>
          <div className={show ? "col" : "row"}>
          <HastaListe hasta={hasta} setHasta={setHasta} />
        </div>
        {!show && (<HastaEkle doktor={doktor} hasta={hasta} setHasta={setHasta} /> )}
        
      </div> 
    </div>
  )
}
export default Home 
