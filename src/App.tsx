import React, {useState} from 'react';
import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";
import {FormField} from "./components/FormField";
import {CountrySelector} from "./components/CountrySelector";
import {Form} from "./models/Form";
import {submitForm} from "./services/api";

function App() {
    const [form, setForm] = useState<Form>({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        jobTitle: "",
        country: ""
    });

    const handleCountrySelected = (name: string, imageSrc: string): void => {
        console.log(name, imageSrc)
        setForm((form) => ({
            ...form,
            country: name
        }));
    }

    const handleSubmit = async () => {
        await submitForm(form);
    }

  return (
      <div className="mx-auto w-1/2 space-y-24">
          <div className="flex justify-between items-center my-5">
              <h1 className="inline text-2xl ">Edit your Contact Information</h1>
              <button
                  className="text-sm bg-orange-500 font-semibold rounded text-white px-14 py-2 py-auto uppercase hover:bg-orange-400 transition hover:duration-100"
                  onClick={handleSubmit}
              >
                  Save
              </button>
          </div>

          <div className="flex justify-center">
              <ProfilePicture/>
          </div>

          <div className="space-y-3">
              <div className="grid grid-flow-col justify-stretch space-x-3">
                  <FormField onChange={(value) => setForm({...form, firstName: value})} value={form.firstName} label="First Name"/>
                  <FormField onChange={(value) => setForm({...form, lastName: value})} value={form.lastName} label="Last Name"/>
              </div>
              <FormField onChange={(value) => setForm({...form, phoneNumber: value})} value={form.phoneNumber} label="Phone Number"/>
              <FormField onChange={(value) => setForm({...form, jobTitle: value})} value={form.jobTitle} label="Job Title"/>
              <CountrySelector onSelect={handleCountrySelected} />
          </div>

      </div>
  );
}

export default App;
