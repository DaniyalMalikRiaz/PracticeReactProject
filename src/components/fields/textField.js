import * as React from 'react';
import TextField from '@mui/material/TextField';
import {DataContext} from '../form';



export default function SetTextFields  ( props )  {

  const objData = React.useContext(DataContext);


return(
    <TextField
        id={props.item.id}
        label={props.item.label}
        value = {objData.inputData[props.item.id]}
        onChange = {(event)=> {
          objData.setInputData({...objData.inputData, [props.item.id]: event.target.value})
        }}
      />
    )
    }