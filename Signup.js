import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const useStyles = ((theme) => ({
  palette: {
    primary: {
      main: '#004F9D',
    }},
    head:{
      marginTop:15,
     padding:5,
      marginLeft:200,
    },
  back:{
   paddingTop:20,
    backgroundColor: '#004F9D',
    paddingBottom:30,
  },
    paper: {
     
     
      marginTop: theme.spacing(4),
      marginDown: theme.spacing(4),
     backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      padding:5,
      float: 'left',
      width: '90%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
      
      
    },
    submit: {
      backgroundColor: '#004F9D',
      margin: theme.spacing(3, 0, 2),
    },
  }));

 class Signup extends Component
  {
  constructor()
{
    super();
    this.state={
        ema:'',
        pass:'',
        st:false
    }
}

handleLogin = () =>  {

  
    // let a=parseInt(this.state.ema);
    // alert(a+"dsd");
    // let f=1;
    // for(let i=1;i<=a;i++)
    // {
    //   f=f*i;
    // }
    // this.setState({pass:f});
    
    if(this.state.ema=="abc" && this.state.pass=="xyz"){
        alert("Hello")
        this.setState({st: true})
    } else {
        alert("not loggedin")
    }
}

handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
    //console.log(this.state, "formField")
}



    render()
    {
        const {classes} = this.props
        return (
            <div>
            <div className={classes.head}>
              <img src="tradeit1.png" alt="trade" width="270" height="120"></img>
            </div>
            
            <div className={classes.back}>
              {this.state.pass}
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
 
    <Typography component="h1" variant="h5">
      Sign Up
    </Typography>


<div className={classes.form} noValidate>
<TextField varient="outlined" margin="normal" required fullWidth id="name" type="name" label="Name" autoFocus onChange={this.handleChangeFields}></TextField>
<TextField varient="outlined" margin="norrmal" required fullWidth id="contact no"type="number" label="Contect No" autoFocus onChange={this.handleChangeFields}></TextField> 
<TextField varient="outlined" margin="normal" required fullWiidth id="Aadhaar no" label="Aadhaar No" type="number" autoFocus onChange={this.handleChangeFields}></TextField>
<TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="ema" autoComplete="email" autoFocus onChange={this.handleChangeFields}/> 
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Password" type="password" id="password" autoComplete="current-password"  onChange={this.handleChangeFields} /> 
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Confirm Password" type="password" id="password" autoComplete="confirm-password"  onChange={this.handleChangeFields} />
<TextField varient="outlined" margin="normal" required fullWidth id="company name" type="name" label="Company Name" autoFocus onChange={this.handleChangeFields}></TextField>
<TextField varient="outlined" margin="normal" required fullWidth id="company type" type="name" label="Company Type" autoFocus onChange={this.handleChangeFields}></TextField>


 <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Wholesaler" />
 <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Manufacturer" />
                  
<Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>SignUp </Button>

                  <Grid container>
                    <Grid item xs>
                      <Link href="" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                   
                  </Grid>
              
              </div>
</div>
</Container>

              )}
              </div>   
              </div>           

        );
    }

}
export default withStyles(useStyles)(Signup);