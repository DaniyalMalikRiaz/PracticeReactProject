import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CardBox from './card';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';
import EmpInfo from './empInfo';
import Summary from './summary';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';


const inputObj = { 
    product: "",
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
    const [product,setProduct] = useState("");
    const [inputData,setInputData] = useState(inputObj);
    const [progress, setProgress] = React.useState(0);
    const [btnState, setBtnState] = React.useState(true);
    
    function TopBar() {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign: 'left' }}>
                  Customer Digital Onboarding
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,
                      textAlign: 'right'
                 }}>
                  {product}
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        );
      }

    React.useEffect ( ()=> {
        if(page === 0){
            setProgress(0)
        }else if(page === 1){
            setProgress(25)
        }else if(page === 2){
            setProgress(50)
        }else if(page === 3){
            setProgress(75)
        }else if(page === 4){
            setProgress(100)
        }
    }, [page])

    React.useEffect ( ()=> {
        
        if(page === 1){
            if(inputData.name !== "" && inputData.fatherName !== "" && inputData.motherName !== "" && inputData.gender !== ""){
                setBtnState(false)
            }
        }else if (page === 0){
            if(inputData.product !== "" ){
                setBtnState(false)
            }
        }else if (page === 2){
            if(inputData.email !== "" && inputData.mobileNumber !== "" && inputData.address !== ""){
                setBtnState(false)   
            }
        }else if (page === 3){
            if(inputData.empStatus !== "" && inputData.monthlyIncome !== "" && inputData.occupation !== ""){
                setBtnState(false)
            }
        }

        return () => {
            setBtnState(true)
        }

       
    }, [page,inputData])
  
        const pageForm = () => {
        if(page === 0){
            return <CardBox inputData = {inputData} setData = {setInputData} productData = {setProduct}/>
        }else if(page === 1){
        return <PersonalInfo inputData = {inputData} setData = {setInputData}/>
        }else if(page === 2){
            return <ContactInfo inputData = {inputData} setData = {setInputData}/>
        }else if(page === 3){
            return <EmpInfo inputData = {inputData} setData = {setInputData}/>
        }else if(page === 4){
            return <Summary inputData = {inputData} setPage = {setPage}/>
        }
        };

        const backBtn = () =>{

            if (page === 0) {
                return null
            } else {
                return <Button 
                variant="contained" 
                onClick = {() => {
                    setPage((cur) => cur - 1);
                }}
                sx={{ m:2}}
                >Back
                </Button>
            }
        }

        const nextBtn = () => {
            
            return <Button 
                variant="contained"
                disabled = {btnState}
                onClick = {() => {
                    setPage((cur) => cur + 1);
                }}
                sx={{ m:2}}
                > 
                {page === pageTitle.length - 1 ? "Submit": "Next"}
            </Button>
        }

    return (
<div className = "form">
<TopBar />
<div className = "form-container"
>
<div className = "header">
<h1>{pageTitle[page]}</h1>
</div>
<div className = "progressBar">
<Box component="section" sx={{ 
    minWidth: 500,
    padding: 2,
    justifyContent: 'center',
    }}>
<LinearProgress variant="determinate" value={progress} />
    </Box>

</div>

<div className = "body">{pageForm()}</div>
<div className = "button">
    {backBtn()}
    {nextBtn()}
</div>
</div>

</div>
    );
}





export default Form;