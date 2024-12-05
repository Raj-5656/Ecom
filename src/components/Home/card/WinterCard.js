import React from 'react'

function WinterCard({data}) {
  return (
    
    <div className='d-flex gap-3 w-100 mx-3 flex-wrap' style={{marginBottom:"20px"}}>
        {
            data.map((item,index)=>{
                return <img src={item.src} style={{width:"32%",height:"32%"}} alt={item.alt} key={index}/>
            })
        }
        
    </div>

  )
}

export default WinterCard