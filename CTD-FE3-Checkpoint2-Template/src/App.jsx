
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ThemeContext, { themes } from './context'

function App() {

//   const [theme, setTheme] = useState(themes.light);
//   const handleChangeTheme = () => {
//     if (theme === themes.dark) setTheme(themes.light)
//     if (theme === themes.light) setTheme(themes.dark)
//  }
//  const providerValue =  useMemo(()=>({theme, handleChangeTheme}),[theme,handleChangeTheme])
//  <ThemeContext.Provider value={providerValue}>
//  </ThemeContext.Provider>


  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
    
      <div className={`app light}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

    </>
  );
}

export default App;
