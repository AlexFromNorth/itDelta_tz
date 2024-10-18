"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { sendComment } from "../../api/sendComment";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const id = 4;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button
          onClick={() =>
            dispatch(
              sendComment({
                imageId: id,
                comment: { id, author: "User", text: "Your comment" },
              })
            )
          }
        >
          2222
        </button>
      </main>
    </div>
  );
}
