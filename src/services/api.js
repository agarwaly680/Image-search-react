import axios from "axios";

const API_URL=`https://pixabay.com/api/`
const apikey="39553977-6f25d5a86dc0e153b9daf83ea"
export const getImages = async (text,count) =>{
    try{
      return await axios.get(`${API_URL}/?key=${apikey}&q=${text}&image_type=photo&per_page=${count}&safe_search=true`)
    }catch(error){
        console.log(error);
    }
}