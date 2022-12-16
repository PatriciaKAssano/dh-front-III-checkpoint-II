import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DentistProvider from "./Providers/DentistProvider";
import ThemeProvider from "./Providers/ThemeProvider";
import AppRoutes from "./Routes";
import { ThemeContext } from "./Providers/ThemeProvider";
import { useContext} from "react";

function App() {

  const { theme, handleTheme } =useContext(ThemeContext)



  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
    
      <DentistProvider>
        <ThemeProvider>
          <div className={`app ${theme}}`}>
            <Navbar />
            <main>
              <AppRoutes />
            </main>
            <Footer />
          </div>
          </ThemeProvider>
      </DentistProvider>
    </>
  );
}

export default App;
