import React, {useEffect, useState} from 'react';
import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";
import {FormField} from "./components/FormField";
import {CountrySelector} from "./components/CountrySelector";
import {Form} from "./models/Form";
import {getUser, submitUser} from "./services/api";

function App() {
    const [form, setForm] = useState<Form>({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        jobTitle: "",
        country: null,
        profilePicture: null
    });

    const [canSave, setCanSave] = useState<boolean>(true);

    useEffect( () => {
        const getForm = async () => {
            const user = await getUser();
            const {first_name, last_name, phone_number, job_title, country} = user.data;

            setForm((form) => ({
                ...form,
                firstName: first_name,
                lastName: last_name,
                phoneNumber: phone_number,
                jobTitle: job_title,
                country
            }));
        }
        getForm();
    }, []);

    useEffect(() => {

        // check if all values are truthy before enabling save button (minus profile picture)
        setCanSave(Object.entries(form).every(([key, value]) => key === 'profilePicture' || value));
    }, [form]);

    const handleSubmit = async () => {
        setCanSave(false);
        await submitUser(form);

        // simulate longer timeout for demo purposes
        setTimeout(() => {
            setCanSave(true);
        }, 1000);
    }

  return (
      <div className="mx-auto w-1/2 lg:w-1/3 space-y-24">
          <div className="py-8 space-y-5 lg:flex lg:justify-between md:items-center lg:my-5 lg:space-y-0">
              <h1 className="inline text-2xl ">Edit your Contact Information</h1>
              <button
                  className={`text-sm font-semibold rounded px-14 py-2 uppercase transition duration-100 ${
                      canSave ? 'bg-orange-500 text-white hover:bg-orange-400' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                  onClick={handleSubmit}
                  disabled={!canSave}
              >
                  Save
              </button>
          </div>

          <div className="flex justify-center">
              <ProfilePicture image={form.profilePicture} onChange={(value) => setForm({...form, profilePicture: value})}/>
          </div>

          <div className="space-y-3">
              <div className="grid grid-flow-col justify-stretch space-x-3">
                  <FormField onChange={(value) => setForm({...form, firstName: value})} value={form.firstName} label="First Name"/>
                  <FormField onChange={(value) => setForm({...form, lastName: value})} value={form.lastName} label="Last Name"/>
              </div>
              <FormField onChange={(value) => setForm({...form, phoneNumber: value})} value={form.phoneNumber} label="Phone Number"/>
              <FormField onChange={(value) => setForm({...form, jobTitle: value})} value={form.jobTitle} label="Job Title"/>
              <CountrySelector selected={form.country} onSelect={(value) => setForm({...form, country: value})} />
          </div>

      </div>
  );
}

export default App;
