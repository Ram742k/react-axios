# User Management React App

![User Management](https://img.icons8.com/fluency/48/000000/user-group-man-man.png)

This is a React application that performs CRUD (Create, Read, Update, Delete) operations on user data using Axios to interact with a mock API. The application is designed with a clean and responsive UI to easily manage user records.

## ✨ Features

- ![Display](https://img.icons8.com/fluency/24/000000/visible.png) **Display Users:** View all existing user data fetched from a mock API.
- ![Add](https://img.icons8.com/fluency/24/000000/add-user-male.png) **Add Users:** Create new user records.
- ![Edit](https://img.icons8.com/fluency/24/000000/edit-user-male.png) **Edit Users:** Modify existing user details.
- ![Delete](https://img.icons8.com/fluency/24/000000/remove-user-male.png) **Delete Users:** Remove user records.
- ![Responsive](https://img.icons8.com/fluency/24/responsive.png) **Responsive Design:** Ensures usability on various devices.

## 🛠️ Technologies Used

- ![React](https://img.icons8.com/color/24/000000/react-native.png) **React**
- ![Axios](https://img.icons8.com/color/24/000000/axios.png) **Axios**
- ![Bootstrap](https://img.icons8.com/color/24/000000/bootstrap.png) **React Bootstrap**
- ![React Router](https://img.icons8.com/color/24/000000/react-native.png) **React Router**
- ![JSONPlaceholder](https://img.icons8.com/ios/24/000000/api-settings.png) **JSONPlaceholder** (for mock API)



## 🗂️ Project Structure

```plaintext
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddUser.jsx
│   │   ├── UserList.jsx
│   │   ├── UserForm.jsx
│   │   ├── Loader.jsx
│   │   ├── Navigation.jsx
│   ├── api.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── README.md
```
    
`


- `src/`
  - `components/`
    - `AddUser.jsx` - Component for adding a new user.
    - `UserList.jsx` - Component for displaying and managing the list of users.
    - `UserForm.jsx` - Form component used for adding and editing users.
    - `Loader.jsx` - Loader component to display during data fetching.
    - `Navigation.jsx` - Navigation component to switch between adding and listing users.
  - `api.js` - Axios instance configuration for API calls.
  - `App.js` - Main application component.
  - `index.js` - Entry point of the application.
  - `App.css` - Custom styles for the application.

## 🌐 API

The application uses JSONPlaceholder as a mock API for user data:
- Base URL: `https://jsonplaceholder.typicode.com/users`

## 📚 Additional Resources

- [React Bootstrap](https://react-bootstrap.github.io/) - React Bootstrap is a popular UI library for building responsive web applications.
- [React Router](https://reactrouter.com/) - React Router is a popular routing library for React.
- [Axios](https://axios-http.com/) - Axios is a popular HTTP client for making HTTP requests from React applications.


## 🌐 Demo

[Live Demo](https://your-demo-link.com)




## 📄 Code Overview

### Axios Instance (`api.js`)

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users'
});

export default api;

```
## 👤 Author

**Ramkumar**

- 💼 LinkedIn: [Ramkumar Sundaram](https://www.linkedin.com/in/ramkumar-sundaram/)
- 📧 Email: [ramkumar742k@gmail.com](mailto:ramkumar742k@gmail.com)

## 🙏 Thank You for Visiting!

Thank you for taking the time to explore this project. Have a great day! 😊

---

Made with ❤️ by Ramkumar
`


