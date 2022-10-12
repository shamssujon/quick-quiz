import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "./QuizTopic";

const QuizTopics = () => {
    const quizTopicsData = useLoaderData();
    const quizTopics = quizTopicsData.data;
    return (
        <section className="py-20">
            <div className="container">
                <h2 className="mb-10 text-center text-4xl font-bold">Popular Quiz Topics</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {quizTopics.map((quizTopic) => (
                        <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuizTopics;
