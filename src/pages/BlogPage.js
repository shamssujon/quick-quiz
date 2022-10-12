import React from "react";

const BlogPage = () => {
    return (
        <section className="h-full bg-slate-100 py-20">
            <div className="container max-w-3xl">
                <h2 className="mb-10 text-center text-4xl font-bold">Blog</h2>
                <div className="grid gap-10">
                    <div className="rounded-md bg-white p-8 shadow-md">
                        <h3 className="text-3xl font-bold">What is the purpose of React Router?</h3>
                        <div className="mt-8 space-y-4 text-lg">
                            <p className="text-xl">
                                React Router is a Node package made for react applications. It
                                allows to navigate pages without reloading the website.
                            </p>
                            <p>
                                In traditional websites, the browser requests a document from a web
                                server, downloads and evaluates CSS and JavaScript assets, and
                                renders the HTML sent from the server. When the user clicks a link,
                                it starts the process all over again for a new page.
                            </p>
                            <p>
                                React Router enables <strong>"client side routing"</strong>. It
                                allows your app to update the URL from a link click without making
                                another request for another document from the server. Instead, your
                                app can immediately render some new UI and make data requests with
                                fetch to update the page with new information.
                            </p>
                            <p>
                                This enables faster user experiences because the browser doesn't
                                need to request an entirely new document or re-evaluate CSS and
                                JavaScript assets for the next page. It also enables more dynamic
                                user experiences with things like animation.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-md bg-white p-8 shadow-md">
                        <h3 className="text-3xl font-bold">How does context API works?</h3>
                        <div className="mt-8 space-y-4 text-lg">
                            <h4 className="text-2xl font-semibold">What is Context API?</h4>
                            <p>
                                The React Context API provides a way to share values between
                                components without having to explicitly pass a prop through every
                                level of the tree.
                            </p>
                            <h4 className="text-2xl font-semibold">How does it works?</h4>
                            <p>
                                React.createContext() returns a consumer and a provider. Provider is
                                a component that as it's names suggests provides the state to its
                                children. It will hold the "store" and be the parent of all the
                                components that might need that store. Consumer as it so happens is
                                a component that consumes and uses the state.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-md bg-white p-8 shadow-md">
                        <h3 className="text-3xl font-bold">What is useRef? Explain a bit.</h3>
                        <div className="mt-8 space-y-4 text-lg">
                            <p>
                                useRef returns a mutable ref object whose .current property is
                                initialized to the passed argument (initialValue). The returned
                                object will persist for the full lifetime of the component.
                            </p>
                            <p>
                                Essentially, useRef is like a “box” that can hold a mutable value in
                                its .current property. It can be used to access a DOM element
                                directly.
                            </p>
                            <p>
                                If we tried to count how many times our application renders using
                                the useState Hook, we would be caught in an infinite loop since this
                                Hook itself causes a re-render. To avoid this, we can use the useRef
                                Hook.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
