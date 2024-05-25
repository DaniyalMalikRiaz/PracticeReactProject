import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Btn from './btn';
import { useState } from 'react';




export default function CardBox() {

const [selectedOption, setOption] = useState({ option: 'PLEASE SELECT', selection: false });


const handleOptionChange = (event) => {
  setOption({
    option: event.target.value,
    selection: true
  });

};


   

    const card1 = (
    
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            LOCAL DIGITAL ACCOUNT
          </Typography>
          <input
              type="radio"
              id="LDA"
              name="LDA"
              value="LOCAL ACCOUNT"
              checked={selectedOption.option === 'LOCAL ACCOUNT'}
              onChange={handleOptionChange}
            />
        </CardContent>
       
      </React.Fragment>
    );
    const card2 = (
    
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            ROSHAN DIGITAL ACCOUNT
          </Typography>
          <input
              type="radio"
              id="RDA"
              name="RDA"
              value="ROSHAN ACCOUNT"
              checked={selectedOption.option === 'ROSHAN ACCOUNT'}
              onChange={handleOptionChange}
            />
        </CardContent>
       
      </React.Fragment>
    );
  
    const card3 = (
      
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            ASAAN ACCOUNT
          </Typography>
          <input
              type="radio"
              id="ADA"
              name="ADA"
              value="ASAAN ACCOUNT"
              checked={selectedOption.option === 'ASAAN ACCOUNT'}
              onChange={handleOptionChange}
            />
        </CardContent>
       
      </React.Fragment>
    );


    return (
      <div>
      <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ minWidth: 500 , gap: 5, p:20}}>
        <Card variant="outlined">{card1}</Card>
        <Card variant="outlined">{card3}</Card>
        <Card variant="outlined">{card2}</Card> 
      </Box>
      
      <Btn btnState = {{option : selectedOption.option, selection : selectedOption.selection}}/>
      </div>
     
    );
  }





  
  

