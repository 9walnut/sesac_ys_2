const data = {
  name: "guho",
  gender: "male",
};

const jsondata = JSON.stringify(data);
console.log("json : ", jsondata);

const jsonParse = JSON.parse(json);
console.log("Parse : ", jsonParse);
