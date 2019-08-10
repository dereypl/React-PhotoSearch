import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cc8f2faf129153763346755cd3c8c9dc31b2b4afc183faa95de61305150f6aee'
    }
})