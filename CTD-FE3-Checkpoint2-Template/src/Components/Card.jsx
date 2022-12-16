import styles from "./Card.module.css";
import { ThemeContext } from "../Providers/ThemeProvider";
import { useContext } from "react";

const Card = (props) => {

  const {dentist}= props;
  const { theme, handleTheme } =useContext(ThemeContext)

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={theme === "light" ? `card-body ${styles.CardBody}` : `card-body ${styles.CardDark}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <a href={`/dentist/${dentist.matricula}`}>
            
            <h5 className={theme === "light" ? `card-title ${styles.title}` : `card-title ${styles.titleDark}`}>{`${dentist.nome} ${dentist.sobrenome}`}</h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
