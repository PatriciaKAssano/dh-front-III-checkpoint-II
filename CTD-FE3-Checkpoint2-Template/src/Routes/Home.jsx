import { useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Providers/ThemeProvider";
import { DentistContext } from "../Providers/DentistProvider";

const Home = () => {

  const { dentists, error, setError, loading, setLoading, getDentists} = useContext(DentistContext)
  const { theme, handleTheme } = useContext(ThemeContext);

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    getDentists();

  }, []);

{/* <div className={theme === "light" ? "bg_light" : "bg_dark"}></div> */}

  return (
    <div className="">
      <h1>Home</h1>
      <div className="card-grid container">
        {dentists.map((dentist) =>(
          <Card dentist={dentist}/>
        ))}
        </div>
    </div>
  );
};

export default Home;
