import { useEffect } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../../Providers/ThemeProvider";

const Home = () => {

  const { theme, handleTheme } = useContext(ThemeContext);

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <div className={theme === "light" ? "bg_light" : "bg_dark"}>
      <h1>Home</h1>
      <div className="card-grid container">
        <Card />
      </div>
    </div>
  );
};

export default Home;
