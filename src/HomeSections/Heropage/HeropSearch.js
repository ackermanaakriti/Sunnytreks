import React from 'react'
import { Container,Grid} from '@mui/material'
import './Heropage.scss'
import FmdGoodIcon from '@mui/icons-material/FmdGood';


const HeropSearch = () => {
  return (
    <>
   
        <Container>
        < div className='heropsearch--container'>
            <div style={{display:'flex',gap:'30px',padding:'5px 30px'}}>
        <div className="homepage--search"> 
       
            <FmdGoodIcon/>
                <input placeholder='Destination'/>
           
         </div>
      <div className="homepage--search"> 
      
                <input placeholder='Destination'/>
             </div> 
      < div className="homepage--search">
     
                <input placeholder='Destination'/>
             
      </div>
      <div className="homepage--search"> 
      
                <input placeholder='Destination'/>
             </div> 
      <div className="homepage--search"> 
    
                <input placeholder='Destination'/>
             </div> 
             </div>
             </div>
        </Container>
 
   
    </>
  )
}

export default HeropSearch