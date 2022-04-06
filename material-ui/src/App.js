import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import {  ThemeProvider} from '@material-ui/core'
import { red } from '@mui/material/colors'
import { createMuiTheme } from '@mui/material'

const xyz = createMuiTheme({
  palette:{
    primary:{
      main:'#fefefe'
    
    },
    secondary:red
  }
})


function App() {
  return (
    <ThemeProvider theme={xyz} >
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes/>
          
        </Route>
        <Route path="/create">
          
          <Create/>
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
