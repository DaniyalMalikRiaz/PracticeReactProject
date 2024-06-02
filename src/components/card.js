import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {DataContext} from './form';

const selectionObj = { option: 'PLEASE SELECT', selection: false }


export default function CardBox(props) {

  const objData = React.useContext(DataContext);
const [selectedOption, setOption] = useState(selectionObj);



const handleOptionChange = (event) => {

  const temp = {...selectedOption}
      temp["option"] = event.target.value
      temp["selection"] = true
      setOption(temp)
      props.productData(temp.option)
      objData.setInputData({...objData.inputData, product: temp.option})
};


    return (
      <div>
      <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ minWidth: 500 , gap: 5, p:20}}>
        

        {props.allProducts.map(prod => (
          <Card variant="outlined">
            <React.Fragment>
              <CardContent>
                <Typography variant="h5" component="div">
                  {prod.title}
                </Typography>
                <input
                    type="radio"
                    id={prod.id}
                    name={prod.id}
                    value={prod.value}
                    checked={selectedOption.option === prod.value}
                    onChange={handleOptionChange}
                  />
              </CardContent>
            
            </React.Fragment>
          </Card>
      ))}
      </Box>
      

      </div>
     
    );
  }







  
  


