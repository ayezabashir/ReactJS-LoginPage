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
          <div className="line">
            <p className="line_para">Or Continue with</p>
          </div>
          <div className="social_icons">
            <div className="google">
              <img className='social_img' src="/google.png" alt="" />
            </div>
            <div className="meta">
              <img className='social_img' src="/meta.png" alt="" />
            </div>
            <div className="apple">
              <img className='social_img' src="/apple.png" alt="" />
            </div>
          </div>
          <div className="button_card">
            <button className='button'>Login</button>
          </div>
        </div>
      </div>
    </Box>

  );
}

export default App;
