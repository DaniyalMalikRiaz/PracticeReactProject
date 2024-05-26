import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Summary ({inputData}){
    
    
    
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
          <TextField
            disabled
            id="name"
            label="Full Name"
            value = {inputData.name}
          />
          <TextField
            disabled
            id="fatherName"
            label="Father Name"
            value = {inputData.fatherName}
          />
          <TextField
            disabled
            id="motherName"
            label="Mother Name"
            value = {inputData.motherName}
          />
          <TextField
            disabled
            id="email"
            label="Email"
            value = {inputData.email}
          />
          <TextField
            disabled
            id="mobileNumber"
            label="Mobile Number"
            value = {inputData.mobileNumber}
          />
          <TextField
            disabled
            id="address"
            label="Address"
            value = {inputData.address}
          />

        <TextField
            disabled
            id="monthlyIncome"
            label="Monthly Income"
            value = {inputData.monthlyIncome}
          />
          <TextField
            disabled
            id="occupation"
            label="Occupation"
            value = {inputData.occupation}
          />
          <TextField
            disabled
            id="empStatus"
            label="Employement Status"
            value = {inputData.empStatus}
          />
          <TextField
            disabled
            id="gender"
            label="Gender"
            value = {inputData.gender}
          />
          
          </div>
          </Box>
    )
}


