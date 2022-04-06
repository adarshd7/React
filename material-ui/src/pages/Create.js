import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Button  from '@mui/material/Button'
import { ButtonGroup, FormControlLabel, RadioGroup } from '@mui/material'
import { Container } from '@mui/material'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'
import { styled } from '@mui/material/styles';
import { Button as MUIButton} from '@mui/material';
import { TextField } from '@mui/material';
import { Radio } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {Card } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { IconButton } from '@material-ui/core'





const StyledButton = styled(MUIButton)({

  color:'secondary',
  backgroundColor:'blue',
  borderRadius: '4px',
});
const use = makeStyles({
  field:{
   margin:'1050px'
  }
})



export default function Create() {
  const x = use()
  const [data,setData] = useState('')
  const [category,setCategory]= useState('')
  const history = useHistory()

  const handle = (e)=>{
    e.preventDefault()
    if(data){
      console.log(data,category)
      fetch('http://localhost:8000/notes',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({category,data})
      }).then(()=>history.push('/'))
    }
  }
  return (
   <div>
     <Card>
       <CardHeader>
         <Typography>
           hi welcome
         </Typography>
       </CardHeader>
       <CardContent>
         this is zemoso
       </CardContent>
     </Card>

    <Container>
    
      <Typography variant="h1" color='primary' align="center" gutterBottom>
        Create a New 
      </Typography>

      <Button type="submit" color="primary">Submit</Button>
      <Button type="submit" color="primary" variant="outlined">Submit</Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>
          Two
        </Button>
        <StyledButton>
          <Button>
            ten
          </Button>
        </StyledButton>
        <Button>
          three
        </Button>
      </ButtonGroup>
      <StyledButton>
       uwhuqh
     </StyledButton>
     <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
       <FormControlLabel value="money" control={<Radio/>} label='money' />
       <FormControlLabel value="work" control={<Radio/>} label='work' />
     </RadioGroup>
     <form noValidate autoComplete="off" onSubmit={handle}>
       <TextField
       className={x.filed}
       onChange={(e)=>setData(e.target.value)}
       label="hi wel"
       variant="outlined"
       fullWidth
       required/>
       <Button
       
       onClick={()=>
       console.log("you clicked me")}
       type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>
     </form>
      

      <AcUnitOutlinedIcon  color="secondary" fontSize="large"/>
      <AcUnitOutlinedIcon  color="action" fontSize="small"/>
      <form noValidate autoComplete="off">
        <TextField>

        </TextField>
      </form>
    </Container>
    </div>
  )
}
