import React from 'react'



const HastaListe = ({hasta,setHasta,show}) => {

 

  const cardShow = (index) => {

    setHasta(hasta.map((item,i)=>(
      item.id===index ? {...item,bittiMi:!item.bittiMi}:item
    ))) 
  }
  const quit = (index) => {
 
    setHasta(hasta.filter((item,i)=>(
      item.id!==index 
    )))
  
  }
  
 

  return (
    <div className='row-main'>
        { hasta.map((item,i)=>(
          <div onDoubleClick={()=>cardShow(item.id)} key={i} className={!item.bittiMi ? "falseBitmediStil" : "trueBittiStil"} >
            <div>
              <h3><span className='hasta-name'> {i+1}- </span>{item.text}</h3>
              <h5>{item.day}</h5>
              <h4>{item.doktorum}</h4>
            </div>
            <div className='quit' onClick={()=>quit(item.id)}>X</div>
          </div>
        ))}
   </div>
  )
}

export default HastaListe