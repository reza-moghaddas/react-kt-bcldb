import React from "react";
function UserList(props) {
  const { users } = props;
  return (
    <div>
      <table className="table mx-auto mt-5 w-50">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Credentials</th>
            <th>Title</th>
            <th>Phone</th>
            <th>Fax</th>
            <th>Cell</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.credentials}</td>
              <td>{user.title}</td>
              <td>{user.phone}</td>
              <td>{user.fax}</td>
              <td>{user.cell}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
