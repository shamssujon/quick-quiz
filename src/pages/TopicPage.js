import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicPage = () => {
    const topicData = useLoaderData()
    console.log(topicData);
    return (
        <div>
            This is a single topic
        </div>
    );
};

export default TopicPage;