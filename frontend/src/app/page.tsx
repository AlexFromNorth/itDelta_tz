"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getImages } from "../../api/getImages";
import Modal from "../../components/Modal";
import Header from "../../components/Header";

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
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4 py-8 px-4 xl:px-[10vw] xl:gap-6 xl:grid-cols-3 sm:grid-cols-3 ">
        {isOpen && (
          <Modal onClose={() => setIsOpen(false)} currentModal={currentModal} />
        )}
        {loading ? (
          <p>Загрузка...</p>
        ) : error ? (
          <p>Ошибка: {error}</p>
        ) : (
          images.map((el) => (
            <div key={el.id} className="mt-2 cursor-pointer">
              <img
                src={el.image}
                alt={`Image ${el.id}`}
                className="w-full max-h-[25vh] object-cover rounded"
                onClick={() => {
                  setCurrentModal(el.id);
                  setIsOpen(true);
                }}
              />
              <p className="mt-2">Id: {el.id}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
