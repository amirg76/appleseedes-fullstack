import { log } from "console";
import fs from "fs";
import uniqid from "uniqid";
const users = [
  {
    id: uniqid.time(),
    name: "amir",
    email: "bbb@ddd.com",
  },
  { id: uniqid.time(), name: "ali", email: "www@ttt.com" },
];

export const createFile = () => {
  saveusers(users);
};
const loadData = () => {
  const dataTemp = fs.readFileSync("users-json.json");
  const dataJSON = dataTemp.toString();
  const data = JSON.parse(dataJSON);
  return data;
};
export const update = (id, name = "", email = "") => {
  const data = loadData();
  const filterData = data.find((user) => user.id === id);
  console.log(email);
  if (filterData !== 0) {
    filterData.name = name !== "" ? name : filterData.name;
    filterData.email = email !== "" ? email : filterData.email;
  }
  data.map((user) => {
    if (user.id === id) return filterData;
    return user;
  });
  saveusers(data);
};

const saveusers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users-json.json", dataJSON);
};

export const create = (name = "", email = "") => {
  if (name === "") return console.log("Input Name");
  if (email === "") return console.log("Input Email");
  const data = loadData();
  const newUser = {
    id: uniqid.time(),
    name: name,
    email: email,
  };
  data.push(newUser);
  saveusers(data);
};

export const read = (id) => {
  const data = loadData();
  const filterData = data.find((user) => user.id === id);
  console.log("user name");
  console.log(filterData.name);
  console.log("user email");
  console.log(filterData.email);
};

export const deleteUser = (id) => {
  const data = loadData();
  const filterData = data.filter((user) => user.id !== id);
  if (data.length !== filterData.length) saveusers(filterData);
};

export const createPass = (id, pass) => {
  const data = loadData();
  const filterData = data.find((user) => user.id === id);
  if (data.length !== filterData.length) {
    const newPass = { ...filterData, pass: pass };

    const newData = data.map((user) => {
      if (user.id === id) return newPass;
      return user;
    });
    console.log(newData);
    saveusers(newData);
  }
};

export const updatePass = (id, pass) => {
  const data = loadData();
  const filterData = data.find((user) => user.id === id);
  if (data.length !== filterData.length) {
    const newPass = { ...filterData, pass: pass };

    const newData = data.map((user) => {
      if (user.id === id) return newPass;
      return user;
    });
    console.log(newData);
    saveusers(newData);
  }
};
