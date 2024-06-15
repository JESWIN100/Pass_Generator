import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PasswordGenerator = () => {
  const [password, setPassword] = React.useState('');

  const generatePassword = () => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 12;
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
    toast.success('Password generated successfully!');
  };


  return (

 

    
    <div style={styles.container}>
       <ToastContainer position="top-center" />
      <h1>Password Generator</h1>
    <button onClick={generatePassword} style={styles.button}>Generate Password</button>
      {password && <p style={styles.password}>{password}</p>}



    </div>


  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '20px 0',
    cursor: 'pointer',
  },
  password: {
    fontSize: '18px',
    wordBreak: 'break-all',
    maxWidth: '80%',
  },
};

export default PasswordGenerator;
