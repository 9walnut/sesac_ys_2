import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const [photos, setPhotos] = useState();
  const [error, setError] = useState("Loading...");
  const { id } = useParams();
  console.log(id);
  const navigator = useNavigate();

  const getProduct = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      if (res.ok) {
        const prod = await res.json();
        setPhotos(prod);
      } else {
        throw Error("존재하지 않는 상품입니다.");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {photos ? (
        <>
          <ul>
            <li>제목 : {photos.title}</li>
            <img src={photos.thumbnailUrl}></img>
          </ul>
        </>
      ) : (
        <div>{}</div>
      )}
    </>
  );
}
