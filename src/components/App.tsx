import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

import { GlobalProvider } from "../context/GlobalState";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import About from "./About";
import NotFound from "./NotFound";
import Game from "./Game";

import "../assets/css/app.css";

WebFont.load({
  google: {
    families: ["Lato:300", "sans-serif"],
  },
});

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <SiteHeader />
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </Router>
    </GlobalProvider>
  );
};

export default App;
