import secureLocalStorage from "react-secure-storage";

export function setUserDetails(user) {
  secureLocalStorage.setItem("user", JSON.stringify(user));
}

export function getXpermissions() {
  return JSON.parse(secureLocalStorage.getItem("permissions"));
}

export function getUserDetails() {
  return JSON.parse((secureLocalStorage.getItem("user")) ?? "null");
}

export function setToken(token) {
  secureLocalStorage.setItem("token", JSON.stringify(token));
}

export function getToken() {
  return JSON.parse(secureLocalStorage.getItem("token"));
}
