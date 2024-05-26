import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CardBox from './card';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';
import EmpInfo from './empInfo';
import Summary from './summary';

const inputObj = { 
    name: "", 
    gender:"",
    motherName: "",
    fatherName: "",
    email: "",
    mobileNumber: "",
    address: "",
    monthlyIncome: "",
    occupation: "",
    empStatus: ""

 }


 const pageTitle = ["Products","Personal Information","Contact Information","Employement Information","Summary"]


function Form(){

    const [page,setPage] = useState(0);
    const [inputData,setInputData] = useState(inputObj);

        const pageForm = () => {
        if(page === 0){
            return <CardBox/>
        }else if(page === 1){
        return <PersonalInfo inputData = {inputData} setData = {setInputData}/>
        }else if(page === 2){
            return <ContactInfo inputData = {inputData} setData = {setInputData}/>
        }else if(page === 3){
            return <EmpInfo inputData = {inputData} setData = {setInputData}/>
        }else if(page === 4){
            return <Summary inputData = {inputData}/>
        }
        };


    return (
<div className = "form">
<div className = "progressBar"></div>

<div className = "form-container">
<div className = "header">
<h1>{pageTitle[page]}</h1>
</div>
<div className = "body">{pageForm()}</div>
<div className = "footer">
<Button 
    variant="contained" 
    disabled = {page === 0}
    onClick = {() => {
        setPage((cur) => cur - 1);
    }}
    >Previous
    </Button>

    <Button 
    variant="contained" 
    disabled = {page === pageTitle.length - 1}
    onClick = {() => {
        setPage((cur) => cur + 1);
    }}
    > {page === pageTitle.length - 1 ? "Submit": "Next"}
    </Button>
</div>
</div>

</div>
    );
}


export default Form;