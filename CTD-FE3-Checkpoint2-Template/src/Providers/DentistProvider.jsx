import { createContext, useEffect, useState } from "react";

//import saveProduct from "../services/productService";

import api from "../Services/api";

export const DentistContext = createContext({});

const DentistProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  async function getDentists() {
    setLoading(true);
    try {
      const response = await api.get("/dentista");

      setDentists(response.data);
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
    <DentistContext.Provider
      value={{ dentists, error, loading, getDentists /*postProduct*/ }}
    >
      {children}
    </DentistContext.Provider>
  );
};

export default DentistProvider;