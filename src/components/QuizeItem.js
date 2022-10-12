import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const QuizeItem = ({ questionItem, index }) => {
    const { id, correctAnswer, question, options } = questionItem;

    // Remove HTML tags from the question
    const questionString = question.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, "");

    // Show correct answer clicking on the eye button
    const handleEyeBtn = () => {
        toast(`Correct Answer => ${correctAnswer}`, {
            duration: 3000,
            position: "bottom-right",
            className: "!bg-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };

    // Success result toast
    const optionResultSuccessToast = () => {
        toast.success("Correct answer!", {
            duration: 3000,
            position: "bottom-right",
            className: "!bg-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };

    // Error result toast
    const optionResultErrorToast = () => {
        toast.error("Incorrect answer!", {
            duration: 3000,
            position: "bottom-right",
            className: "!bg-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };

    const [selected, setSelected] = useState(null);

    // Show result clicking on a option
    const handleOptionClick = (option) => {
        setSelected(option);

        if (option === correctAnswer) {
            optionResultSuccessToast();
        } else {
            optionResultErrorToast();
        }
    };
    return (
        <div className="rounded-md border bg-white p-6 shadow transition hover:shadow-lg md:p-8">
            <div className="mb-8 flex items-start justify-between">
                <h4 className="text-xl md:text-2xl">
                    <span className="font-bold">Question: {index + 1} </span>
                    <br />
                    <span>{questionString}</span>
                </h4>
                <button
                    type="button"
                    onClick={handleEyeBtn}
                    className="p-2 opacity-80 transition hover:text-blue-600 hover:opacity-100">
                    <EyeIcon className="h-6 w-6"></EyeIcon>
                </button>
                <Toaster />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        type="button"
                        className={`group flex cursor-pointer items-center gap-2 rounded-md border-2 p-4 text-left text-lg transition hover:border-blue-400 hover:bg-slate-200 active:bg-slate-300 ${
                            selected === option
                                ? "border-blue-300 bg-blue-600 text-white hover:border-blue-300 hover:bg-blue-600 active:bg-blue-600"
                                : "bg-slate-100"
                        }`}>
                        <span
                            className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2  ${
                                selected === option ? "border-white" : "border-blue-400"
                            }`}>
                            <span
                                className={`h-2 w-2 rounded-full   transition group-hover:opacity-100 ${
                                    selected === option
                                        ? "bg-white opacity-100"
                                        : "bg-blue-600 opacity-0"
                                }`}></span>
                        </span>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizeItem;
