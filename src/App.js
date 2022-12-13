import Background from "./Components/Background";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Join from "./Components/Join";
import Members from "./Components/Members";
import Overlay from "./Components/Overlay";
import { useState } from "react";
import 'animate.css';



function App() {
  const [Page, setPage] = useState(1)
  const [Sandwish, setSandwish] = useState(false)

  return (
    <div className="Main">
      <Nav sandwish={Sandwish} sandwishfun={setSandwish} page={Page} next={setPage}/>
      <Background />
      {Page === 1 && <Landing />}
      {Page === 2 && <About />}
      {Page === 3 && <Join />}
      {Page === 4 && <Members />}
      {Sandwish && <Overlay sandwish={Sandwish} sandwishfun={setSandwish} page={Page} next={setPage} />}
    </div>
  );
}

export default App;
