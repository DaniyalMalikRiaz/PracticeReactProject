import * as React from 'react';
import Box from '@mui/material/Box';
import SetTextFields from './fields/textField';
import SetDropDownFields from './fields/dropDown';

const personalObj = [
    {id: "name",label: "Full Name",value: "name",form: "personalInfo",type :"text"},
    {id: "fatherName",label: "Father Name",value: "name",form: "personalInfo",type :"text"},
    {id: "motherName",label: "Mother Name",value: "name",form: "personalInfo",type :"text"},
    {id: "gender",label: "Gender",value: "gender",form: "personalInfo",type :"dropDown", menuItems: [{key:"M",value:"MALE"},{key:"F",value:"FEMALE"}]},
]



const MapObj = (props) => (
  <div>
      {personalObj.map(item => {
        if(item.type === "dropDown"){
          return <SetDropDownFields  objData = {props.objData} item={item} />
        }else{
          return <SetTextFields  objData = {props.objData} item={item} />
        }
      }
    )}
  </div>
);

export default function PersonalInfo (props){

    return(
      <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <div>
          <MapObj objData = {props} />
        </div>
    </Box>
    )

}