import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import { SearchProvider } from "./contexts/SearchContext";
import { CardProvider } from "./contexts/CardContext";

export default function App() {
  return (
    <SearchProvider>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={HomePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </SearchProvider>
  );
}
