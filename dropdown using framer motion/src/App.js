import StaggeredDropDown from "./StaggerDropdown";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StaggeredDropDown />
      </BrowserRouter>
    </div>
  );
}
