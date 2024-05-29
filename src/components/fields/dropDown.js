import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {DataContext} from '../form';

export default function SetDropDownFields  ( props )  {
  const objData = React.useContext(DataContext);
  
return(

    <Select
          labelId={props.item.id}
          id={props.item.id}
          value={objData.inputData[props.item.id]}
          label={props.item.label}
          onChange = {(event)=> {
            objData.setInputData({...objData.inputData, [props.item.id]: event.target.value})
          }}
        >

{  props.item.menuItems.map(item => (
        <MenuItem value={item.value}>{item.value}</MenuItem>
    ))
  }

        </Select>   
    )
    }


