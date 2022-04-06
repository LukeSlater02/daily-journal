import {loginForm, registerForm} from "./login&registerForm.js"
import {insertEntries} from "./useJournalData.js"

let loggedInUser = {}

export const getLoggedInUser = () => {
    return loggedInUser
}

export const logoutUser = () => {
    loggedInUser = {}
}

export const checkForUser = () => {
    if (sessionStorage.getItem("user")){
      setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
      insertEntries()
    }else {
        showLoginRegister()
    }
  }

  const setLoggedInUser = (userObj) => {
      loggedInUser = userObj
  }

  const showLoginRegister = () => {
      document.querySelector("main").innerHTML = `${loginForm()} <hr/> <hr/> ${registerForm()}`;
  }

  export const loginUser = (userObj) => {
    return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
    .then(response => response.json())
    .then(parsedUser => {
      //is there a user?
      console.log("parsedUser", parsedUser) //data is returned as an array
      if (parsedUser.length > 0){
        setLoggedInUser(parsedUser[0]);
        return getLoggedInUser();
      }else {
        //no user
        return false;
      }
    })
  }

  export const registerUser = (userObj) => {
    return fetch(`http://localhost:8088/users`, {
      method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(response => response.json())
    .then(parsedUser => {
      setLoggedInUser(parsedUser);
      return getLoggedInUser();
    })
  }