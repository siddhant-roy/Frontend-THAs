import React, { useEffect } from "react";
import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadCart } from "../../redux";
import CartItemCard from "../CartItemCard";

interface Props {
  onClose: () => void;
  visible: boolean;
}

const DrawerComponent = ({ onClose, visible }: Props) => {
  const cartItems = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return <></>;
};

export default Drawer;
