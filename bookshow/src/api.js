import axios from "axios";

const BookImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
          Authorization: 'Client-ID gersxd9SWQxWTODXOCnnWIFO5fI8s-mU4wQ0cfduFmw',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        },
        params:{
          query : harry,
        }
    });
    console.log(response.data.results);
    return response.data.results[0];
};

export default searchImage;