import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddInternshipPage = ({ onAddInternship }) => {
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [website, setWebsite] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            position.trim() === '' ||
            company.trim() === '' ||
            location.trim() === '' ||
            selectedDate === null ||
            website.trim() === ''
        ) {
            // Handle form validation or display an error message
            return;
        }

        const newInternship = {
            id: Date.now(),
            position,
            company,
            location,
            date: selectedDate.toISOString(),
            website,
        };

        onAddInternship(newInternship);

        // Reset form fields
        setPosition('');
        setCompany('');
        setLocation('');
        setSelectedDate(null);
        setWebsite('');
    };

    return (
        <div className="min-h-screen bg-gray-300 py-8 px-4 sm:px-6 lg:px-8" dir="rtl">
            <div className="max-w-3xl mx-auto mt-40">
                <div className="bg-white shadow-lg rounded-lg px-6 py-4">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">إضافة فرصة تدريب جديدة</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="position" className="block text-lg font-medium text-gray-800">
                               العنوان
                            </label>
                            <input
                                type="text"
                                id="position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company" className="block text-lg font-medium text-gray-800">
                                اسم الجهة المقدمة
                            </label>
                            <input
                                type="text"
                                id="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-lg font-medium text-gray-800">
                                الموقع
                            </label>
                            <input
                                type="text"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-lg font-medium text-gray-800">
                                تاريخ التقديم
                            </label>
                            <DatePicker
                                id="date"
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                dateFormat="dd/MM/yyyy"
                                placeholderText="اختر تاريخًا"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="website" className="block text-lg font-medium text-gray-800">
                                رابط للتسجيل
                            </label>
                            <input
                                type="text"
                                id="website"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                إضافة الفرصة
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInternshipPage;
