import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { MovieContext, ThemeContext } from "./context";
import { useReducer, useState } from "react";
import { CartReducer, initialState } from "./reducers/CartReducer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Header />
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <MovieList />
            </div>
          </main>
          <Footer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};
export default App;
