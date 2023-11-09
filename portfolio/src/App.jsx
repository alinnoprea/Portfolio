import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import About from "./Components/About";

function App() {
  return (
    <div className="flex flex-col no-scrollbar scroll-smooth ">
      <div className="snap-center snap-y" id="Home">
        <Home />
      </div>
      <div className="snap-center snap-y	">
        <About />
      </div>
      <div className="snap-center snap-y	">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
