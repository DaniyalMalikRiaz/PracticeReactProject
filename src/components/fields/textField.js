import * as React from 'react';
import TextField from '@mui/material/TextField';



export default function SetTextFields  ( props )  {


return(
    <TextField
        id={props.item.id}
        label={props.item.label}
        value = {props.objData.inputData[props.item.id]}
        onChange = {(event)=> {
          props.objData.setData({...props.objData.inputData, [props.item.id]: event.target.value})
        }}
      />
    )
    }