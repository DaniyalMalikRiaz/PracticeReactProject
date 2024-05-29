import * as React from 'react';
import Box from '@mui/material/Box';
import SetTextFields from './fields/textField';


const contactObj = [
  {id: "email",label: "Email",value: "email",form: "contactInfo"},
  {id: "mobileNumber",label: "Mobile Number",value: "mobileNumber",form: "contactInfo"},
  {id: "address",label: "Address",value: "address",form: "contactInfo"}
]


const MapObj = () => (
  <div>
    {contactObj.map(item => (
      <SetTextFields  item={item} />
    ))}
  </div>
);

export default function ContactInfo (){
  return(
    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <div>
        <MapObj />
      </div>
  </Box>
  )

}