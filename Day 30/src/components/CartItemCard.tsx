import React from "react";
import { Button, Input } from "antd";
import { useAppDispatch } from "../redux/hooks";

interface Props {
  title: string;
  price: number;
  description: string;
  image: string;
  qty: number;
  id: number;
}

const CartItemCard = () => {
  const dispatch = useAppDispatch();
  return <></>;
};

export default CartItemCard;
