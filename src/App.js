//import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsPage from "./components/SearchResultsPage";
import Error from "./components/Error";
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
