import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { quizTopicsLoader } from "./loaders/quizTopicsLoader";
import BlogPage from "./pages/BlogPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";
import TopicsPage from "./pages/TopicsPage";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout></MainLayout>}>
                <Route path="/" loader={quizTopicsLoader} element={<HomePage></HomePage>}></Route>
                <Route
                    path="/home"
                    loader={quizTopicsLoader}
                    element={<HomePage></HomePage>}></Route>
                <Route path="/topics" element={<TopicsPage></TopicsPage>}></Route>
                <Route path="/statistics" element={<StatisticsPage></StatisticsPage>}></Route>
                <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Route>
        )
    );
    return (
        <div className="App text-slate-900">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
