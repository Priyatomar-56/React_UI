import React, { useState, useEffect } from "react";
import "./index.css";

const calculateDaysSince = (dateString: string): number => {
  if (!dateString) return 0;
  const pastDate = new Date(dateString).getTime();
  const currentDate = new Date().getTime();
  const diffTime = Math.abs(currentDate - pastDate);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

interface User {
  humanUser: string;
  createDate: string;
  passwordChangedDate: string;
  lastAccessDate: string;
  mfaEnabled: string;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: User[] = [
        {
          humanUser: "Foo Bar1",
          createDate: "2020-10-01",
          passwordChangedDate: "2021-10-01",
          lastAccessDate: "2025-01-04",
          mfaEnabled: "Yes",
        },
        {
          humanUser: "Foo1 Bar1",
          createDate: "2019-09-20",
          passwordChangedDate: "2019-09-22",
          lastAccessDate: "2025-02-08",
          mfaEnabled: "No",
        },
        {
          humanUser: "Foo2 Bar2",
          createDate: "2022-02-03",
          passwordChangedDate: "2022-02-03",
          lastAccessDate: "2025-02-12",
          mfaEnabled: "No",
        },
        {
          humanUser: "Foo3 Bar3",
          createDate: "2023-03-07",
          passwordChangedDate: "2023-03-10",
          lastAccessDate: "2022-01-03",
          mfaEnabled: "Yes",
        },
        {
          humanUser: "Foo Bar4",
          createDate: "2018-04-08",
          passwordChangedDate: "2020-04-12",
          lastAccessDate: "2022-10-04",
          mfaEnabled: "No",
        },
      ];
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>Human User</th>
            <th>Create Date</th>
            <th>Password Changed Date</th>
            <th>Days Since Last Password Change</th>
            <th>Last Access Date</th>
            <th>Days Since Last Access</th>
            <th>MFA Enabled</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.humanUser}</td>
              <td>{user.createDate}</td>
              <td>{user.passwordChangedDate}</td>
              <td>{calculateDaysSince(user.passwordChangedDate)}</td>
              <td>{user.lastAccessDate}</td>
              <td>{calculateDaysSince(user.lastAccessDate)}</td>
              <td>{user.mfaEnabled}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
