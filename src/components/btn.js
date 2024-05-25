import * as React from 'react';
import Button from '@mui/material/Button';

export default function Btn({btnState}) {
  return <Button 
  variant="contained" disabled={!btnState.selection}>{btnState.option}
  
  </Button>;
}



