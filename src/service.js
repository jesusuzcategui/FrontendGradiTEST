import axios from "axios";
const getProduct = async () => {
    try {
        const { data } = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js');
        return data;
    } catch (error) {
        throw new Error(error);        
    }
};

export default getProduct;