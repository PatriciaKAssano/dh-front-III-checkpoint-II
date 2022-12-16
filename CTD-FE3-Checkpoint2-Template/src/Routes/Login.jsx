import LoginForm from "../Components/LoginForm";
import { ThemeContext } from "../Providers/ThemeProvider";
import { useContext } from "react";

const Contact = () => {

  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div className="">
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Contact;
