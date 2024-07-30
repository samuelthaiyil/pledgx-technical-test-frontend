import {Form} from "../models/Form";
import axios from "axios";

const baseUrl = 'http://localhost:3000';

export const submitForm = async (form: Form) => {
    const url = `${baseUrl}/submit-form`;
    return axios.post(url, {
        ...form
    });
};
