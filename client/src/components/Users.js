import React from "react";

const Users = ({ data }) => {
  const insertUsers = () => {
    return data.map((user) => {
      const accounts = !user.accounts.length ? "none" : user.accounts.join(", ");

      return (
        <React.Fragment key={user._id}>
          <tr>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{accounts}</td>
          </tr>
        </React.Fragment>
      );
    });
  };
  return (
    <div className="table-container">
      <table className="users-table">
        <tbody>
          <tr className="tr">
            <th>username</th>
            <th>password</th>
            <th>accounts</th>
          </tr>
          {insertUsers()}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
