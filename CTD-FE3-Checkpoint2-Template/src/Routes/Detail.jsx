import DetailCard from "../Components/DetailCard";
import { ThemeContext } from "../Providers/ThemeProvider";
import { useContext } from "react";
import {useParams} from "react-router-dom";

const Detail = () => {
  const { id } = useParams()

  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <DetailCard id={id} />
    </div>
  )
}

export default Detail