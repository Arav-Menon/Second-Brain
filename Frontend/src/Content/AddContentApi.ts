import axios from "axios";

const API_URL = 'http://localhost:5000';

interface addContentData {
    title : string,
    description : string
}

export const addContent = async (contentData : addContentData) => {

    try{
        // const token = localStorage.getItem('token');

        // if(!token) {
        //     alert('You need to sigin to add content');
        // }

        const response = await axios.post(
            `${API_URL}/api/v1/content/create-content`, 
            contentData,
        );
    
        return response.data
    }catch(error) {
        console.log("Faild to add content", error)
    }
    
}