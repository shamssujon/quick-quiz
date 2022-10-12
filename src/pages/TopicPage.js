import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizesSection from "../components/QuizesSection";

const TopicPage = () => {
    const topicDataRaw = useLoaderData();
    const topicData = topicDataRaw.data;
    const { name, total, logo, questions } = topicData;
    return (
        <section className="py-20">
            <div className="container">
                <div className="text-center mb-10">
                    <img src={logo} alt="" className="mx-auto w-20" />
                    <h2 className="mb-2 text-4xl font-bold">{name} Quiz</h2>
                    <p>Total questions: <span className="font-bold">{total}</span></p>
                </div>
                <div>
                    {questions.map(questionItem => <QuizesSection key={questionItem.id} questionItem={questionItem}></QuizesSection>)}
                </div>
            </div>
        </section>
    );
};

export default TopicPage;
