import { useState, useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return { products, addProduct, deleteProduct };
}
