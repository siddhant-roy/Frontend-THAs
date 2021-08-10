import React from "react";
import CardComponent from "../components/Card";
import useProducts from "../hooks/useProducts";
import { Item } from "../models/product";

const ProductListing = () => {
  let products = useProducts();

  return (
    <div className="item-container">
      {products && products.length > 0
        ? products.map((item, Item) => (
            <CardComponent
              description={item.description}
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))
        : null}
    </div>
  );
};

export default ProductListing;
