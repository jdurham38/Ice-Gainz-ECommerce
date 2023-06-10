import React, { useState, useEffect } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Products } from './models';


function ProductComponent() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await DataStore.query(Products);
      if (products.length > 0) {
        setProduct(products[0]);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.products}</h2>
          <p>Price: {product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductComponent;
