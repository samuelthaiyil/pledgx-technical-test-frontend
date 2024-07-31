import {Form} from "../models/Form";
import axios from "axios";

const baseUrl = 'http://localhost:3000';

export const submitUser = async (form: Form) => {
    const url = `${baseUrl}/submit-user`;
    return axios.post(url, {
        ...form
    });
};

export const getUser = async () => {
    const url = `${baseUrl}/get-user`;
    return axios.get(url);
};

