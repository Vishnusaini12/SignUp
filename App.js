import React from 'react';
import SignUp from './signUp'; // Corrected import statement

function SignUpPage() {
  // Function to handle button click
  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  };

  return (
    <div style={{
      width: '300px',
      margin: '50px auto',
      marginTop: '100px',
      borderRadius: '10px',
      textAlign: 'center',
      backgroundColor: 'purple',
      height: '410px',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ color: 'white' }}>Sign Up</h1>
      <SignUp type="text" placeholder="Enter your name" />
      <SignUp type="email" placeholder="Enter your email" />
      <SignUp type="password" placeholder="Create Password" />
      <SignUp type="password" placeholder="Confirm Password" />
      <SignUp type="button" onClick={handleSignUp} label="Sign Up" /> {/* Added label */}
    </div>
  );
}

export default SignUpPage;
