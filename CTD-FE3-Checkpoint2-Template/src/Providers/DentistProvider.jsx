import { createContext, useEffect, useState } from "react";

//import saveProduct from "../services/productService";

import api from "../services/api";

export const DentistContext = createContext({});

const DentistProvider = ({ children }) => {
  const [dentist, setDentist] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  // async function postProduct(token, product) {
  //   saveProduct(product, token, setError, setLoading);
  // }

  async function getDentists() {
    setLoading(true);
    try {
      const response = await api.get("/dentista");

      setProducts(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, error, loading, getProducts /*postProduct*/ }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;