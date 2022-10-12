import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
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

    const optionResultSuccessToast = () => {
        toast.success("Correct answer!", {
            duration: 3000,
            position: "bottom-right",
            className: "!bg-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };

    const optionResultErrorToast = () => {
        toast.error("Incorrect answer!", {
            duration: 3000,
            position: "bottom-right",
            className: "!bg-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };

    // Show result clicking on a option
    const handleOptionClick = (option) => {
        // console.log(option, correctAnswer);
        if (option === correctAnswer) {
            optionResultSuccessToast();
        } else {
            optionResultErrorToast()
        }
    };
    return (
        <div className="rounded-md border bg-white p-8 shadow transition hover:shadow-lg">
            <div className="mb-8 flex justify-between">
                <h4 className="text-2xl">
                    <span className="font-bold">Question: {index + 1} </span>
                    {questionString}
                </h4>
                <button
                    type="button"
                    onClick={handleEyeBtn}
                    className="p-2 opacity-80 transition hover:text-blue-600 hover:opacity-100">
                    <EyeIcon className="h-6 w-6"></EyeIcon>
                </button>
                <Toaster />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        type="button"
                        className="group flex cursor-pointer items-center gap-2 rounded-md border-2 bg-slate-100 p-4 text-left text-lg transition hover:border-blue-400 hover:bg-slate-200 active:bg-slate-300">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-blue-400">
                            <span className="h-2 w-2 rounded-full bg-blue-600 opacity-0 transition group-hover:opacity-100"></span>
                        </span>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizeItem;
