import axios, { AxiosResponse } from "axios";

export const getItems = async (qty: number = 20): Promise<any> => {
  try {
    const res: AxiosResponse = await axios.get(
      `https://fakestoreapi.com/products?limit=${qty}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleItem = async (id: number): Promise<any> => {
  try {
    const res: AxiosResponse = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
