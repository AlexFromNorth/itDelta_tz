"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getImages } from "../../api/getImages";
import { sendComment } from "../../api/sendComment";
import Modal from "../../components/Modal";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

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
      {/* <button onClick={() => setIsOpen(true)}>Открыть модалку</button> */}
      {isOpen && <Modal onClose={() => setIsOpen(false)} currentModal={currentModal} />}
      {images.map((el) => (
        <img
          key={el.id}
          src={el.image}
          alt={`Image ${el.id}`}
          className="w-full h-auto"
          onClick={() => (setCurrentModal(el.id), setIsOpen(true))}
        />
      ))}
    </div>
  );
}
