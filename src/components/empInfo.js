import * as React from 'react';
import Box from '@mui/material/Box';
import SetTextFields from './fields/textField';

const empObj = [
  {id: "empStatus",label: "Employement Status",value: "empStatus",form: "empInfo"},
  {id: "monthlyIncome",label: "Monthly Income",value: "monthlyIncome",form: "empInfo"},
  {id: "occupation",label: "Occupation",value: "occupation",form: "empInfo"}
]



const MapObj = (props) => (
  <div>
    {empObj.map(item => (
      <SetTextFields  objData = {props.objData} item={item} />
    ))}
  </div>
);


export default function EmpInfo (props){
  return(
    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <div>
        <MapObj objData = {props} />
      </div>
  </Box>
  )

}