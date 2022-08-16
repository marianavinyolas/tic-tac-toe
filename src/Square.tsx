import { FC } from "react";

interface SquareInterface {
  hdlClick: (id: string) => void;
  className?: string;
  id: string;
  mark?: string;
}

const Square: FC<SquareInterface> = ({ hdlClick, className, id, mark }) => (
  <button
    className={`w-16 h-16 m-1 text-2xl font-bold rounded bg-slate-100 shadow
${mark === "X" && "text-blue-500"}
${mark === "0" && "text-purple-500"}
${className}`}
    onClick={() => hdlClick(id)}
  >
    {mark}
  </button>
);

export default Square;
