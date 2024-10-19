import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { sendComment } from "../api/sendComment";
import { Comment, ModalProps } from "../types/types";
import { getImage } from "../api/getImage";

const Modal: React.FC<ModalProps> = ({ onClose, currentModal }) => {
  const [commentText, setCommentText] = useState("");
  const id = currentModal;

  const dispatch = useDispatch<AppDispatch>();
  const { image, loading, error } = useSelector(
    (state: RootState) => state.image
  );
  const modalRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null); 

  useEffect(() => {
    dispatch(getImage(id));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, onClose, id]);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      dispatch(
        sendComment({
          id: id,
          comment: { id, author: "User", text: commentText },
        })
      );
      setCommentText("");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center text-lightPrimary"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg px-6 w-full flex flex-col mx-8 md:w-1/2 xl:w-1/3 "
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image?.largeImage}
          alt={`Image ${image?.id}`}
          className="my-6 w-full h-auto rounded-2xl shadow-xl"
        />

        <p className="mt-0">Comment</p>

        <textarea
          ref={textareaRef} 
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Enter your comment"
          className="my-2 p-2 border rounded w-full h-24"
        />
        <p className="text-grey">Write a few sentences about the photo.</p>
        <button
          className="my-4 mx-auto bg-darkBlue text-white py-2 px-4 rounded w-min"
          onClick={handleCommentSubmit}
        >
          Save
        </button>

        <p className="">Comments</p>
        <ul className="mb-6 text-black">
          {image?.comments.map((el: Comment, index: number) => (
            <li key={index} className="my-2">
              <span>{el.author}: </span>
              <span>{el.text} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
