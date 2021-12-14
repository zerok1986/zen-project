import React from "react";
import UserService from "../../services/user.service";
import { useEffect, useState } from "react";
import ProfileCard from "../pages/ProfilePage/ProfileCard/ProfileCard";

const userService = new UserService();

function AdminPanel() {
  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    refreshUsers();
  }, []);

  const refreshUsers = () => {
    userService
      .getAllUsers()
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => console.error(err));
  };

  const deleteUser = (id) => {
    userService
      .deleteUser(id)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    refreshUsers();
  };

  return (
    <div>
      {usersList.map((elem) => (
        <ProfileCard deleteUser={deleteUser} userDetails={elem} />
      ))}
    </div>
  );
}

export default AdminPanel;
