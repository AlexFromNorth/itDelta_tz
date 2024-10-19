import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { sendComment } from "../api/sendComment";
import { Comment } from "../types/types";
import { useEffect } from "react";
import { getImage } from "../api/getImage";

const Modal = () => {
  const id = 3;

  const dispatch = useDispatch<AppDispatch>();
  const { image, loading, error } = useSelector(
    (state: RootState) => state.image
  );

  useEffect(() => {
    dispatch(getImage(id));
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <button>button</button>
      <div>
        <p>{image?.id}</p>
        <ul>
          {image?.comments.map((el: Comment, index: number) => {
            return (
              <li key={index}>
                <p>{el.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
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
        add comment
      </button>
    </div>
  );
};

export default Modal;
