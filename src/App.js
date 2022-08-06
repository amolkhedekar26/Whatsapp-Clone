import { Sidebar, Chat } from "./components";

import "./App.css";
import "./styles/globals.scss";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <div className="app_title_div">
          <h1 className="app_title">Whatsapp</h1>
        </div>
        <div className="app_main">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
