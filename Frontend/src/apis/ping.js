import axios from '../config/axiosconfig.js'

export const pingApi = async ()=>{
    try {
        const response = await axios.get('/api/v1/ping');
        console.log(response.data);
        
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}