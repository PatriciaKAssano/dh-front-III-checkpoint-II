import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DentistProvider from "./Providers/DentistProvider";
import AppRoutes from "./Routes";

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
    
      <DentistProvider>
          <div className={`app light}`}>
            <Navbar />
            <main>
              <AppRoutes />
            </main>
            <Footer />
          </div>
      </DentistProvider>
    </>
  );
}

export default App;
