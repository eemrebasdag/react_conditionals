import React, { useState } from "react";

const INITIAL_PRODUCTS = [
  { id: "p1", title: "Stylish Chair", price: 329.99 },
  { id: "p2", title: "Ergonomic Chair", price: 349.99 },
  { id: "p3", title: "Comfort Chair", price: 369.99 },
  { id: "p4", title: "Gaming Chair", price: 389.99 },
];

const ListOfProducts = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const addProductHandler = () => {
    setProducts(curProducts =>
      curProducts.concat({
        id: new Date().toString(),
        title: "Another new product",
        price: 15.99,
      })
    );
  };

  return (
    <section>
      <button onClick={addProductHandler}>Add Product</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} (${product.price})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListOfProducts;
