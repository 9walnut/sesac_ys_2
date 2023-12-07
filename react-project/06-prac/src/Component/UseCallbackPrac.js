// src/component/UseCallbackPrac.js 파일에 아래의 코드를 작성해주세요.
import { useCallback, useState } from "react";

export default function UseCallbackPrac() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = useCallback((item) => {
    setEditing(item);
    setEditText(item);
  }, []);

  const handleSave = useCallback(
    (itemToSave) => {
      setItems(items.map((item) => (item === editing ? itemToSave : item)));
      setEditing(null);
    },
    [items, editing]
  );

  const handleDelete = useCallback(
    (itemToDelete) => {
      setItems(items.filter((item) => item !== itemToDelete));
    },
    [items]
  );

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          {editing === item ? <input type="text" /> : item}
          {editing === item ? (
            <button onClick={() => handleSave(editText)}>Save</button>
          ) : (
            <>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button> onClick={() => handleDelete(item)}Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
