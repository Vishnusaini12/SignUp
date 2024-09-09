import React from "react";

// SignUp component
const SignUp = ({ type, placeholder, onClick, label }) => {
  // Inline styles for the input and button
  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    width: '80%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'orange',
    color: '#fff',
    cursor: 'pointer',
    width: '47%',
    marginBottom: '25px',
    fontSize: '16px',
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      {type === 'button' ? (
        <button onClick={onClick} style={buttonStyle}>
          {label || 'Submit'}
        </button>
      ) : (
        <input type={type} placeholder={placeholder} style={inputStyle} />
      )}
    </div>
  );
};

export default SignUp;
