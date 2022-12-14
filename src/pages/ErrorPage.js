import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";

const ErrorPage = () => {
    return (
        <section className="h-full bg-slate-50 py-20 text-center">
            <div className="container">
                <h2 className="mb-3 text-5xl font-extrabold uppercase">Hoops..!</h2>
                <h4 className="text-2xl font-bold">
                    looks like you are in a wrong path
                </h4>
                <Player
                    autoplay
                    loop
                    speed="1"
                    src="https://assets1.lottiefiles.com/packages/lf20_mifzeur9.json"
                    className="h-auto max-w-[450px] !-mt-8">
                    <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
                </Player>
                <Link
                    to="/home"
                    className="group inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 py-4 px-8 text-center font-bold uppercase text-white transition hover:bg-blue-700">
                    <ArrowSmallLeftIcon className="h-6 w-6 transition group-hover:-translate-x-1"></ArrowSmallLeftIcon>
                    <span>Go Back to Homepage</span>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
