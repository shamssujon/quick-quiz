import React from "react";
import { Link } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const QuizTopic = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (
        <div className="overflow-hidden rounded-lg border shadow transition hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-slate-800">
                <img src={logo} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="bg-slate-100 p-4">
                <h4 className="text-2xl font-semibold">{name}</h4>
                <p>Total questions: {total}</p>
            </div>
            <div className="group">
                <Link
                    to=""
                    className="flex items-center justify-center gap-2 bg-blue-600 py-4 px-8 text-center font-bold uppercase text-white transition hover:bg-blue-700">
                    <span>Start Practice</span>
                    <ArrowSmallRightIcon className="h-6 w-6 transition group-hover:translate-x-1"></ArrowSmallRightIcon>
                </Link>
            </div>
        </div>
    );
};

export default QuizTopic;
