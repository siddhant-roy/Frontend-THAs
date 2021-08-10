import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface stateProps {
  cart: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    qty: number;
  }[];
  isOpen: boolean;
}

const initialState: stateProps = {
  cart : [],
  isOpen: false,
};