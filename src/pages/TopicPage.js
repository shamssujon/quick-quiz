import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizeItem from "../components/QuizeItem";

const TopicPage = () => {
    const topicDataRaw = useLoaderData();
    const topicData = topicDataRaw.data;
    const { name, total, logo, questions } = topicData;
    return (
        <section className="py-20">
            <div className="container">
                <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-4 ">
                        <img src={logo} alt="" className="w-20 rounded-md bg-slate-800" />
                        <div>
                            <h2 className="mb-2 text-4xl font-bold">{name} Quiz</h2>
                            <p>
                                Total questions: <span className="font-bold">{total}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>Correct answers: 9</p>
                        <p>Incorrect answers: 2</p>
                    </div>
                </div>
                <div className="grid gap-12">
                    {questions.map((questionItem, index) => (
                        <QuizeItem key={questionItem.id} questionItem={questionItem} index={index}></QuizeItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopicPage;
