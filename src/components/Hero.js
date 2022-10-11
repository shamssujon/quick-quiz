import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/hero-illustration.svg";

const Hero = () => {
    return (
        <section className="bg-slate-100 lg:pt-10 overflow-hidden">
            <div className="container grid items-center gap-0 lg:grid-cols-2 lg:gap-20">
                <div className="py-20">
                    <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold">
                        It's time to <span className="text-blue-600">refresh</span> your memory!
                    </h1>
                    <p className="text-lg font-light text-slate-700 lg:text-xl">
                        <strong className="font-bold text-blue-600">Quick Quiz</strong> is online quiz platform where you can take quiz
                        tests on various topics. It will help you to pass on popular course and marketplace's skill test
                        exams. Currently we have a few topics. More interesting topics will come
                        later as we grow.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/topics"
                            className="inline-flex rounded bg-blue-600 py-4 px-8 font-bold uppercase text-white transition hover:bg-blue-700">
                            Take a quiz test
                        </Link>
                    </div>
                </div>
                <div className="aspect-square overflow-hidden self-end -mb-5">
                    <img src={heroImg} alt="" className="h-auto w-full object-contain max-w-screen-sm mx-auto lg:ml-auto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
