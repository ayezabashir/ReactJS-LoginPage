import './App.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div className="container_white">
        <div className="container_padding">
          <h3 className="container_title">Welcome Back</h3>
          <p className='container_para'>To keep connected with us, please login with your email adress and password</p>
          <div className="input_card">
            <TextField className='input' id="outlined-basic" label="Email" variant="outlined" />
            <TextField className='input' id="outlined-basic" label="Password" type='password' variant="outlined" />
          </div>
        </div>
      </div>
    </Box>

  );
}

export default App;
