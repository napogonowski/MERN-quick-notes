// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from "./users-api";

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem("token");
}

export function getToken() {
  // getItem will return null if the key does not exists
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not miliseconds
  if (payload.exp * 1000 < Date.now()) {
    // Token has expired
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function checkToken() {
  return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
  // checkToken reutnrs a string, we making it a date object for more flexibility
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export async function getUserNotes() {
  try {
    const res = await usersAPI.getUserNotes();
    console.log(res);
    return res.notes;
  } catch (error) {
    throw new Error("No Notes Found");
  }
}

export async function createNote(text) {
  try {
    const res = await usersAPI.createNote(text);
    console.log("User-service console,log", res);
    // if (res.ok) return res.json();
    // console.log(res.ok);
    // console.log(res.json());
    // dont need this shit ^^^^^^
    return res;
  } catch (error) {
    throw new Error("failed to create note");
  }
}
