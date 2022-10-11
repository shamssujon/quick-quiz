import React from "react";

const QuizTopic = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (
        <div className="border shadow bg-slate-200">
            <div className="aspect-square overflow-hidden">
                <img src={logo} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="">
                <h4 className="">{name}</h4>
                <p>Total questions: {total}</p>
            </div>
        </div>
    );
};

export default QuizTopic;
