import React from 'react'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import { Admin, AuthProvider, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { UserList } from './users/list'
import { PostList } from './posts/list'
import { PostEdit } from './posts/edit'
import { PostCreate } from './posts/create'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: ({ username }) => {
      localStorage.setItem('username', username);
      // accept all username/password combinations
      return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
      localStorage.removeItem('username');
      return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
      if (status === 401 || status === 403) {
          localStorage.removeItem('username');
          return Promise.reject();
      }
      return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
      return localStorage.getItem('username')
          ? Promise.resolve()
          : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
}

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" icon={UserIcon} list={UserList} />
  </Admin>
)

export default App
