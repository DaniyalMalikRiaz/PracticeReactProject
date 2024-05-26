import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function SetDropDownFields  ( props )  {
    

return(

    <Select
          labelId={props.item.id}
          id={props.item.id}
          value={props.objData.inputData[props.item.id]}
          label={props.item.label}
          onChange = {(event)=> {
            props.objData.setData({...props.objData.inputData, [props.item.id]: event.target.value})
          }}
        >

{  props.item.menuItems.map(item => (
        <MenuItem value={item.value}>{item.value}</MenuItem>
    ))
  }

        </Select>   
    )
    }


