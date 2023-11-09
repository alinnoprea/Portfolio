import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import About from "./Components/About";

function App() {
  return (
    <div className="flex flex-col no-scrollbar scroll-smooth ">
      <Home />

      <About />

      <SideBar />
    </div>
  );
}

export default App;
