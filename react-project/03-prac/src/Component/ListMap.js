import { useState } from "react";

function ListMap() {
  const productList = [
    { id: 1, product: "가방" },
    { id: 2, product: "패딩" },
    { id: 3, product: "신발" },
    { id: 4, product: "상의" },
    { id: 5, product: "하의" },
  ];
  const [list, setList] = useState(productList);
  const [newProduct, setNewProduct] = useState("");
  // map은 앞에 있는 배열에 대해 반복을 하면서 map의 인자로
  // 넘어가는 콜백함수의 return 값을 이용해 새로운 배열을 생성함.
  const addProduct = () => {
    // list와 추가할 객체르 합쳐줘야함
    const newObj = { id: list[list.label - 1].id + 1, product: newProduct };
    // ... 스프레드 연산자 사용하면 배열 없어짐
    // const newList = [...list, newObj];
    const newList = list.concat(newObj);
    setList(newList);
    // setList
    setNewProduct("");
  };

  const deleteProduct = (id) => {
    // 더블 클릭한 상품 삭제(배열에서도 삭제)
    // filter 메서드는 앞에 있는 배열에 대해서 반복
    // filter 메서드의 return 값은 조건이 되어야함
    // 조건이 true일 경우 해당 원소는 새로운 배열에 포함
    // false일 경우 새로운 배열에 포함하지 않음ㄴ
    const newList = list.filter((value) => value.id != id);
    // rendering할 떄 list 배열을 이용함. > list배열에서 원하는 원소 삭제
    // 삭제된 버전의 배열을 list에 다시 setList를 이용하여 list의 상태를 변경
    setList(newList);
  };

  return (
    <>
      <label>추가할 상품</label>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
      ></input>
      <button onClick={addProduct}>추가</button>
      <ul>
        {list.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteProduct(value.id)}>
              {value.product}
            </li>
          );
        })}
      </ul>

      <div>
        작성자 : <input></input>
        제목 : <input></input>
      </div>
    </>
  );
}

export default ListMap;
