import { useState } from "react";

function ListPrac() {
  const userInfo = [
    { name: "코디", mail: "codi@gmail.com" },
    { name: "권구호", mail: "codi@gmail.com" },
  ];

  const [list, setList] = useState(userInfo);
  const [newName, setNewName] = useState("");
  const [newMail, setNewMail] = useState("");

  const addInfo = () => {
    const newObj = { name: newName, mail: newMail };
    const newList = list.concat(newObj);
    setList(newList);
    setNewName("");
    setNewMail("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const newObj = { name: newName, mail: newMail };
      const newList = list.concat(newObj);
      setList(newList);
      setNewName("");
      setNewMail("");
    }
  };

  return (
    <>
      <label>정보</label>
      <br></br>
      <input
        type="text"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
      <input
        type="text"
        value={newMail}
        onChange={(e) => {
          setNewMail(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
      <button onClick={addInfo}>추가</button>
      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              이름: {value.name}, 메일: {value.mail}
            </li>
          );
        })}
      </ul>
      <fieldset>
        <div>
          작성자 : <input></input>
          제목 : <input></input>
          <button>작성</button>
        </div>
      </fieldset>
      <select>
        <option>작성자</option>
        <option>ㅋㅋ</option>
      </select>
      <input></input>
      <button>검색</button>
      <table border="1">
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <tr></tr>
        <tr></tr>
      </table>
    </>
  );
}

export default ListPrac;
