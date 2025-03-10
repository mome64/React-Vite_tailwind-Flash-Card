import React, { useState } from "react";
const data = [
  { id: 1, question: "What is React?", answer: "Library" },
  { id: 2, question: "What is JSX?", answer: "Syntax" },
  { id: 3, question: "What are props?", answer: "Props" },
  { id: 4, question: "What is state?", answer: "State" },
  { id: 5, question: "What is useState?", answer: "Hook" },
  { id: 6, question: "What is a component?", answer: "Component" },
  { id: 7, question: "What is a hook?", answer: "Hook" },
];

export default function App() {
  const [isOpen, setOpen] = useState(787);
  return (
    <div className=" w-[80%] m-auto  grid grid-flow-row grid-cols-3">
      {data.map((item) => (
        <Exam
          data={item}
          key={item.id}
          isOpen={isOpen}
          setOpen={setOpen}
          id={item.id}
        />
      ))}
    </div>
  );
}

function Exam({ data, isOpen, setOpen }) {
  function handleAns(id) {
    setOpen(id === isOpen ? null : id);
    console.log(isOpen);
  }
  return (
    <button
      onClick={() => handleAns(data.id)}
      className={` cursor-pointer ${
        data.id == isOpen ? "bg-red-400" : "bg-stone-300"
      } h-[8rem] flex justify-center items-center m-4 rounded-2xl`}
    >
      <h2>{data.id == isOpen ? data.answer : data.question}</h2>
    </button>
  );
}
