export const quizTopicsLoader = async () => {
    const quizTopicsData = await fetch("https://openapi.programming-hero.com/api/quiz");
    const quizTopics = await quizTopicsData.json();
    return quizTopics;
};
