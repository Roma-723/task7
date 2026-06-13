// import { useEffect, useState } from "react";
// function useLocalStorage<T>(key: string, initialValue: T) {
//   const [value, setValue] = useState<T>(() => {
//     const savedValue = localStorage.getItem(key);
//     if (savedValue !== null) {
//       return JSON.parse(savedValue)}
//     return initialValue;
//   }); 
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//   return [value, setValue]
// }
// export default useLocalStorage;

import { useEffect, useState } from "react";

  

function getUser() {
  return JSON.parse(localStorage.getItem("user") ?? "null");
}

function useUser() {
  const [user, setUser] = useState(() => getUser());

  // useEffect(() => { 
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  return [user, setUser] 
}


