import "./App.css";
import { useState } from "react";
import { userAPI } from "./api/user.api";

function App() {
  const [user, setUser] = useState(null);
  const handleclick = async () => {
    const { data } = await userAPI.get("/users");
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={handleclick}>Get all users</button>
    </div>
  );
}

export default App;
