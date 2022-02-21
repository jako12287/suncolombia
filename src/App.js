import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Detail } from "./components/detail";
import { DetailIntitucion } from "./components/detailInstitucion";
import { Grupos } from "./components/grupos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
      <Route path="/institucion/:id" element={<DetailIntitucion />}></Route>
      <Route path="/grupo/:id" element={<Grupos />}></Route>
    </Routes>
  );
}

export default App;
