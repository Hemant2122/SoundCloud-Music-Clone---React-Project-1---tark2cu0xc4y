import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({
  getToken: "",
  getName: "",
  nameHandler: () => {},
  tokenHandler: () => {},
  logout: () => {},
  searchText: null
});

const UserProvider = (props) => {
  const [getName, setName] = useState('');
  const [getToken, setToken] = useState('');
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    setName(sessionStorage.getItem("name") || '');
    setToken(sessionStorage.getItem("token") || '');
  }, []);

  // console.log(getName, getToken, "User Provider logs");

  const { children } = props;

  const tokenHandler = (token) => {
    sessionStorage.setItem("token", token);
    setToken(token);
    
  };

  const nameHandler = (name) => {
    setName(name);
    sessionStorage.setItem("name", name);
  };

  const logout = () => {
    setName("");
    setToken("");
    sessionStorage.clear();
    // location.reload();
  };

  const valueObj = {
    getName,
    getToken,
    tokenHandler,
    nameHandler,
    logout,
    searchText,
    setSearchText
  };

  return (
    <UserContext.Provider value={valueObj}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
