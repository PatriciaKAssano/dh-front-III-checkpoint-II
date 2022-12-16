import DetailCard from "../Components/DetailCard";
import { ThemeContext } from "../Providers/ThemeProvider";
import { useContext } from "react";

const Detail = () => {

  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <DetailCard />
    </div>
  )
}

export default Detail