import "./styles/App.scss";
import SearchBar from "./Components/SearchBar";
import SideBar from "./Components/SideBar";
function App() {
  return (
    <div className="real">
      <SideBar />
      <SearchBar />
    </div>
  );
}

export default App;
