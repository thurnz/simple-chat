import { Button, Paper, TextField } from "@mui/material";

const Login = () => {
  return (
    <Paper
      sx={{
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        p: '25px',
        m: '200px auto'
      }}
    >
      <TextField
        variant='outlined'
        label="USERNAME" 
        id='username'
      />
      <Button 
        variant='contained'
        sx={{
          m: '20px 20px 0 20px'
        }}
        onClick={() => {
          
        }}
      >
        Login
      </Button>
    </Paper>
  );
};

export default Login;
