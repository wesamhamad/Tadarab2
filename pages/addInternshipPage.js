import React from 'react';
import AddInternshipPage from '../components/AddInternshipPage';

const AddInternship = () => {
    const handleAddInternship = (newInternship) => {
        // Handle adding the newInternship to the list or perform any other logic
        console.log(newInternship);
    };

    return (
        <div>
            <AddInternshipPage onAddInternship={handleAddInternship} />
        </div>
    );
};

export default AddInternship;
