import React from "react";

const QuizesSection = ({ questionItem }) => {
    // console.log(questionItem);
    const { id, correctAnswer, question, options } = questionItem;
    console.log(id, correctAnswer, question, options);
    return <div>quiz section</div>;
};

export default QuizesSection;
