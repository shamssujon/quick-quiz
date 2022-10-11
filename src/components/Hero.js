import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/hero-illustration.svg";

const Hero = () => {
    return (
        <section className="bg-slate-100 py-20">
            <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="">
                    <h2 className="mb-6 text-5xl font-bold">
                        It's time to <span className="text-blue-600">refresh</span> your brain!
                    </h2>
                    <p className="text-lg font-light text-slate-700 lg:text-xl">
                        <strong>Quick Quiz</strong> is online quiz platform where you can take quiz
                        tests on various topics. It will help you to pass on marketplace skill test
                        exams. Currently we only have 4 topics. More interesting topics will come
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
                <div className="aspect-square overflow-hidden">
                    <img src={heroImg} alt="" className="h-auto w-full object-contain max-w-screen-sm mx-auto lg:ml-auto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
