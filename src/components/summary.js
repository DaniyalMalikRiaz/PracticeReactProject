import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import EditNoteIcon from '@mui/icons-material/EditNote';


export default function Summary (props){
    
    
    
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
            value = {props.inputData.product}
          /> 
          </div>
        <div className='personalInfo'>
          <TextField
            disabled
            id="name"
            label="Full Name"
            value = {props.inputData.name}
          />
          <TextField
            disabled
            id="fatherName"
            label="Father Name"
            value = {props.inputData.fatherName}
          />
          <TextField
            disabled
            id="motherName"
            label="Mother Name"
            value = {props.inputData.motherName}
          />
          <TextField
            disabled
            id="gender"
            label="Gender"
            value = {props.inputData.gender}
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
            value = {props.inputData.email}
          />
          <TextField
            disabled
            id="mobileNumber"
            label="Mobile Number"
            value = {props.inputData.mobileNumber}
          />
          <TextField
            disabled
            id="address"
            label="Address"
            value = {props.inputData.address}
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
            value = {props.inputData.monthlyIncome}
          />
          <TextField
            disabled
            id="occupation"
            label="Occupation"
            value = {props.inputData.occupation}
          />
          <TextField
            disabled
            id="empStatus"
            label="Employement Status"
            value = {props.inputData.empStatus}
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


