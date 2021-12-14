import React from 'react'
import UserService from '../../services/user.service'
import { useEffect, useState, useContext } from 'react'
import ProfileCard from '../pages/ProfilePage/ProfileCard/ProfileCard'
import UserContext from '../../context/UserContext'

const userService = new UserService()

const AdminPanel = () => {
  const [usersList, setUserList] = useState([])
  const { showText } = useContext(UserContext)

  useEffect(() => {
    refreshUsers()
  }, [])

  const refreshUsers = () => {
    userService
      .getAllUsers()
      .then((res) => {
        setUserList(res.data)
      })
      .catch((err) => showText(err.response.data.message))
  }

  const deleteUser = (id) => {
    userService
      .deleteUser(id)
      //AQUI
      .then((res) => console.info(res))
      .catch((err) => showText(err.response.data.message))
    refreshUsers()
  }

  return (
    <div>
      {usersList.map((elem) => (
        <ProfileCard deleteUser={deleteUser} userDetails={elem} />
      ))}
    </div>
  )
}

export default AdminPanel
