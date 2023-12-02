import { useState } from "react";

function Prac3() {
  const userInfo = [];

  const [list, setList] = useState(userInfo);
  const [newNumber, setNumber] = useState(1);
  const [newTitle, setNewTitle] = useState("");
  const [newWriter, setNewWriter] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchOption, setSearchOption] = useState("작성자");
  const [list2, searchList] = useState([]);

  const addInfo = () => {
    const newObj = {
      number: newNumber,
      title: newTitle,
      writer: newWriter,
    };
    const newList = list.concat(newObj);
    setNumber(newNumber + 1);
    setList(newList);
    setNewTitle("");
    setNewWriter("");
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchOption = (e) => {
    setSearchOption(e.target.value);
  };

  const search = () => {
    let filteredList = [];
    if (searchOption === "작성자") {
      filteredList = list.filter((item) => item.writer.includes(searchKeyword));
    } else if (searchOption === "제목") {
      filteredList = list.filter((item) => item.title.includes(searchKeyword));
    }

    searchList(filteredList);
  };

  const showAll = () => {
    searchList(list);
  };

  return (
    <>
      <fieldset>
        <div>
          작성자 :{" "}
          <input
            type="text"
            value={newWriter}
            onChange={(e) => {
              setNewWriter(e.target.value);
            }}
          ></input>
          제목 :{" "}
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          ></input>
          <button onClick={addInfo}>작성</button>
        </div>
      </fieldset>
      <select onChange={handleSearchOption}>
        <option value="작성자">작성자</option>
        <option value="제목">제목</option>
      </select>
      <input type="text" onChange={handleSearch} />
      <button onClick={search}>검색</button>
      <button onClick={showAll}>전체</button>
      <table border="1">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.number}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table border="1">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list2.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.number}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Prac3;
