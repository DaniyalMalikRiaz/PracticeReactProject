import * as React from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {DataContext} from './form';


export default function Summary (props){
    
  const objData = React.useContext(DataContext);



    
    return(
      

      
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },

        }}
        noValidate
        autoComplete="off"
      >
   <div>
          <div className='product'>
          <TextField
            disabled
            id="product"
            label="Product"
            value = {objData.inputData.product}
          /> 
          </div>


          
          <div className='personalInfo'>
          <TextField
            disabled
            id="name"
            label="Full Name"
            value = {objData.inputData.name}
          />
          <TextField
            disabled
            id="fatherName"
            label="Father Name"
            value = {objData.inputData.fatherName}
          />
          <TextField
            disabled
            id="motherName"
            label="Mother Name"
            value = {objData.inputData.motherName}
          />
          <TextField
            disabled
            id="gender"
            label="Gender"
            value = {objData.inputData.gender}
          />
            <Fab size="small" color="primary" aria-label="add" variant='circular' sx={{ m: 1.5}}
            onClick = { () => {
              props.setPage(1);
            }}
            >
            <EditNoteIcon />
              
            </Fab>
        </div>
    
        
        <div className='contactInfo'>
          <TextField
            disabled
            id="email"
            label="Email"
            value = {objData.inputData.email}
          />
          <TextField
            disabled
            id="mobileNumber"
            label="Mobile Number"
            value = {objData.inputData.mobileNumber}
          />
          <TextField
            disabled
            id="address"
            label="Address"
            value = {objData.inputData.address}
          />
          <Fab size="small" color="primary" aria-label="add" variant='circular' sx={{ m: 1.5}}
          onClick = { () => {
            props.setPage(2);
          }}
          >
              <EditNoteIcon />
            </Fab>
        </div>
          
        <div className='empInfo'>
          <TextField
            disabled
            id="monthlyIncome"
            label="Monthly Income"
            value = {objData.inputData.monthlyIncome}
          />
          <TextField
            disabled
            id="occupation"
            label="Occupation"
            value = {objData.inputData.occupation}
          />
          <TextField
            disabled
            id="empStatus"
            label="Employement Status"
            value = {objData.inputData.empStatus}
          />
           <Fab size="small" color="primary" aria-label="add" variant='circular' sx={{ m: 1.5}}
           onClick = { () => {
            props.setPage(3);
          }}
           >
              <EditNoteIcon />
            </Fab>
        </div>

          
          </div>
          </Box>
         
    )
}


