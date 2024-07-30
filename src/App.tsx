import React from 'react';
import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";
import {FormField} from "./components/FormField";
import {CountrySelector} from "./components/CountrySelector";

function App() {
  return (
      <div className="mx-auto w-1/2">
          <div className="flex justify-between items-center my-5">
              <h1 className="inline text-2xl ">Edit your Contact Information</h1>
              <button className="text-sm bg-orange-500 font-semibold rounded text-white px-14 py-2 py-auto uppercase hover:bg-orange-400 transition hover:duration-100">Save</button>
          </div>
          <ProfilePicture />
          <div className="space-y-3">
              <div className="grid grid-flow-col justify-stretch space-x-3">
                  <FormField label="First Name"/>
                  <FormField label="Last Name"/>
              </div>
              <FormField label="Phone Number"/>
              <FormField label="Job Title"/>
              <CountrySelector onSelect={console.log} />
          </div>
      </div>
  );
}

export default App;
