"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getImages } from "../../api/getImages";
import { sendComment } from "../../api/sendComment";
import Modal from "../../components/Modal";

export default function Home() {
  const id =5

  const dispatch = useDispatch<AppDispatch>();
  const { images, loading, error } = useSelector(
    (state: RootState) => state.images
  );

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <Modal/>
      {/* {images.map((el) => (
        <img
          key={el.id}
          src={el.image}
          alt={`Image ${el.id}`}
          className="w-full h-auto"
        />
      ))} */}

      <button
        onClick={() =>
          dispatch(
            sendComment({
              id: id,
              comment: { id, author: "User", text: "Your comment" },
            })
          )
        }
      >
        Click me
      </button>
    </div>
  );
}
