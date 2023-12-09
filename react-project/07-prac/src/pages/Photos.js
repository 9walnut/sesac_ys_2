import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Photos() {
  const [photos, setPhotos] = useState(null);
  const getProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await res.json();
    setPhotos(photos);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>여기는 사진페이지입니다.</div>
      {photos ? (
        <>
          {photos.map((value) => (
            <ul key={value.id}>
              <li>제목 : {value.title}</li>
              <img src={value.thumbnailUrl}></img>
              <li>
                <Link to={`/photos/${value.id}`}>상세페이지로 이동하기</Link>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <div>Loading </div>
      )}
    </>
  );
}
