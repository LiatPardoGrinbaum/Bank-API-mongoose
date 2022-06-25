import "./App.css";
import { useState } from "react";
import { userAPI } from "./api/user.api";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [showUsers, setshowUsers] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: 0,
    accounts: [],
  });

  const handleclickGet = async () => {
    if (!showUsers) {
      const { data } = await userAPI.get("/users");
      setUsers(data.users);
      setshowUsers(true);
    } else {
      setshowUsers(false);
    }
  };

  const onSubmitCreate = async (e) => {
    e.preventDefault();
    const newUser = user;
    const { data } = await userAPI.post("/users", newUser);
    console.log(data);
  };

  const handleCreateUser = (e) => {
    const newUser = { ...user };
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
    console.log(newUser);
  };

  return (
    <div className="App">
      <h1>Bank Api </h1>
      <div className="getUsers">
        <button className="btn" onClick={handleclickGet}>
          {showUsers ? "close" : "Get all users"}
        </button>

        <div className="users-container">{showUsers && <Users data={users} />}</div>
      </div>
      <div>
        <form className="createUser" onSubmit={onSubmitCreate}>
          <input type="text" id="username" placeholder="username" onChange={handleCreateUser} value={user.username} />
          <input type="text" id="password" placeholder="password" onChange={handleCreateUser} value={user.password} />
          <input type="text" id="accounts" placeholder="accounts" onChange={handleCreateUser} value={user.accounts} />
          <button className="btn">create user</button>
        </form>
      </div>
    </div>
  );
}

export default App;
