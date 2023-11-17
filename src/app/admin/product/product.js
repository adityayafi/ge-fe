import axios from "axios";

const getProduct = async () => {

    try {
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`);
      console.log("resp", resp.data.data.product)
    } catch (err) {
      console.log(err)
    }

  return resp.data.data.product
}

export default getProduct;

