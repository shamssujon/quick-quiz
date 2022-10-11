import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "./QuizTopic";

const QuizTopics = () => {
    const quizTopicsData = useLoaderData();
    const quizTopics = quizTopicsData.data;
    return (
        <section className="py-20">
            <div className="container">
                <h2 className="text-center text-4xl font-bold mb-10">Popular Topics</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        quizTopics.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>)
                    }
                </div>
            </div>
        </section>
    );
};

export default QuizTopics;
