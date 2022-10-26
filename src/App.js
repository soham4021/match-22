import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />
          <Route
            path="/chats/:person"
            element={
              <>
                <Header backButton="/chats" />
                <ChatScreen />
              </>
            }
          />
          <Route
            path="/chats"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//3:04:00 --> Route /chats/:person is now explained
