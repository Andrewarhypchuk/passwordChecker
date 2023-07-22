import React from 'react';
import { FormComponent } from './Components/Form';
import { PasswordStrengthBar } from './Components/PasswordStrengthBar';
import './Styles/App.css';

function App() {
  return (
    <div className="AppContainer">
      <FormComponent />
      <PasswordStrengthBar />
    </div>
  );
}

export default App;
