let users = `spreatics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`;

exports.axoisInfos = () => {
  return [
    {
      id: "guho",
      pw: "guho",
    },
  ];
};

let str = users.split("\n");
console.log(str);
const userList = [];
for (let i = 0; i < str.length; i++) {
  let temp = str[i].split("//");
  console.log(temp);
  userList.push({
    userId: temp[0],
    userPw: temp[1],
    userName: temp[2],
  });
}

console.log(userList);

exports.userInfos = () => {
  return userList;
};
