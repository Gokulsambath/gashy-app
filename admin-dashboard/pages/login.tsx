import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    // Placeholder for Google SSO flow
    alert('Google SSO login flow to be implemented');
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
