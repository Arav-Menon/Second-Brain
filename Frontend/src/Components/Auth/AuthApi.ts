import axios from "axios";

const API_URL = 'http://localhost:5000';

interface userSignupData {
    userName : string,
    email : string,
    password : string
}

export const signup = async (userData: userSignupData) => {
    const response = await axios.post(`${API_URL}/api/v1/user/signup`, userData)

    return response.data

}
