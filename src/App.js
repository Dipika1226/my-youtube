//import './App.css';
// import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsPage from "./components/SearchResultsPage";
import Error from "./components/Error";
import { useState } from "react";
const AppRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "search",
      element: <SearchResultsPage />
    },
  ],
},
])
function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");

  const handleLogin = () => {
    if (password === "myYoutube2312") {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  if (!authenticated) {
    const isDark = theme === "dark";

    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
        {/* Theme Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
                className="sr-only"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner dark:bg-gray-600"></div>
              <div
                className={`dot absolute w-4 h-4 bg-white rounded-full shadow -left-1 top-0.5 transition transform ${isDark ? "translate-x-full bg-yellow-400" : ""
                  }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Login Box */}
        <div className={`p-8 rounded-lg shadow-lg w-full max-w-sm ${isDark ? "bg-zinc-900" : "bg-gray-100"}`}>
          {/* Heading */}
          <h2 className={`text-2xl font-semibold mb-6 text-center ${isDark ? "text-white" : "text-black"}`}>
            🚫 Restricted Access
          </h2>

          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 mb-4 rounded border ${isDark ? "bg-zinc-800 text-white border-zinc-700 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"} focus:outline-none focus:ring-2 ${isDark ? "focus:ring-red-600" : "focus:ring-red-500"}`}
          />
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded transition duration-300"
          >
            Login
          </button>
        </div>

      </div>
    );
  }

  return (
    <Provider store={store}>
      <div className="box-border overflow-x-hidden">
        {/* <Header /> */}
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  );
}

export default App;
