import React from 'react';
import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";

function App() {
  return (
      <>
        <h1 className="text-3xl">Edit your Contact Information</h1>
        <ProfilePicture />
      </>
  );
}

export default App;
