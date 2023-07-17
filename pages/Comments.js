import React from 'react';
import CommentPage from '../components/CommentPage';

const CommentsPage = () => {
    const internships = [
        {
            id: 1,
            position: 'موقع تدريب 1',
            company: 'شركة تدريب 1',
            location: 'الموقع 1',
            date: '10/08/2023',
            website: 'https://example.com/internship1',
        },
        {
            id: 2,
            position: 'موقع تدريب 2',
            company: 'شركة تدريب 2',
            location: 'الموقع 2',
            date: '11/08/2023',
            website: 'https://example.com/internship2',
        },
        {
            id: 3,
            position: 'موقع تدريب 3',
            company: 'شركة تدريب 3',
            location: 'الموقع 3',
            date: '11/08/2023',
            website: 'https://example.com/internship2',
        },
        // Add additional internship data...
    ];

    return (
        <div>
            <CommentPage internships={internships} />
        </div>
    );
};

export default CommentsPage;
