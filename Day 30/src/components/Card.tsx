import React from "react";
import { Card } from "antd";
import { Item } from "../models/product";
import { Link } from "react-router-dom";
const { Meta } = Card;

const CardComponent = ({
  price,
  description,
  id,
  image,
  title
}: Partial<Item>) => {
  return (
    <Link to={`/${id}`}>
      <Card
        hoverable
        style={{ width: 340, height: 360, padding: 10 }}
        cover={<img className="product-image" alt="" src={image} />}
      >
        <Meta title={title} description={description.slice(0, 50)} />
        <h2>Price: INR{(price * 70).toFixed(2)}</h2>
      </Card>
    </Link>
  );
};

export default CardComponent;
