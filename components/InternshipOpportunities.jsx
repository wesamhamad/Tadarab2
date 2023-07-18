import React, { useState, useEffect } from 'react';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AddInternshipPage from '../components/AddInternshipPage';

const InternshipOpportunities = ({ internships }) => {
    const [expandedCardId, setExpandedCardId] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showAddInternshipForm, setShowAddInternshipForm] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const controls = useAnimation();
    const router = useRouter();

    const handleCardClick = (id) => {
        setExpandedCardId((prevId) => (prevId === id ? null : id));
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };



    const filteredInternships = internships.filter((internship) => {
        // Filter based on the selected date
        if (selectedDate) {
            const internshipDate = new Date(internship.date.split('/').reverse().join('-'));
            const selectedDateFormatted = new Date(selectedDate);
            return (
                internshipDate.getDate() === selectedDateFormatted.getDate() &&
                internshipDate.getMonth() === selectedDateFormatted.getMonth() &&
                internshipDate.getFullYear() === selectedDateFormatted.getFullYear()
            );
        }
        return true;
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const handleInternshipSelect = (internshipId) => {
        router.push(`/comments?id=${internshipId}`);
    };

    const handleAddInternshipClick = () => {
        setShowAddInternshipForm(true);
    };

    const handleAddInternshipClose = () => {
        setShowAddInternshipForm(false);
    };

    return (
        <div>
            <div className="flex justify-center mb-4" dir="rtl">
                {/* Remove DatePicker and search button */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredInternships.map((internship) => (
                    <div
                        key={internship.id}
                        className={`bg-gray-50 text-black rounded-lg shadow-lg p-4 transition duration-300 transform hover:scale-105 ${expandedCardId === internship.id ? 'h-auto' : 'h-40'
                            }`}
                        style={{ margin: '3rem' }}
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-center">{internship.position}</h3>
                        <div className="flex items-center justify-center mb-2">
                            <FiMapPin className="mr-2" />
                            <p className="text-2xl text-gray-300 mx-10">{internship.company}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center mx-10">
                                <FiMapPin className="mr-2" />
                                <p className="text-xl">{internship.location}</p>
                            </div>
                            <div className="flex items-center mx-10">
                                <FiCalendar className="mr-2" />
                                <p className="text-xl text-right">{internship.date}</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <a href={internship.website} target="_blank" rel="noopener noreferrer">
                                <button className="text-xl bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
                                    سجل الآن
                                </button>
                            </a>
                        </div>
                        <div
                            className={`absolute bottom-4 right-4 cursor-pointer opacity-0 transition-opacity duration-300 ${expandedCardId === internship.id ? 'opacity-100' : ''
                                }`}
                            onClick={() => handleCardClick(internship.id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            <motion.div
                className="flex flex-col items-left"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0 }}
            >
                <motion.img
                    ref={ref}
                    src="/KSA.png"
                    alt="ksa"
                    className="w-full md:w-1/3 h-1/4 md:mt-20 md:mr-60 mb-4"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0 }}
                />
                {/* Rest of your code */}
            </motion.div>


            {/* <div className="flex flex-col md:flex-row justify-center">
                <motion.img
                    ref={ref}
                    src="/KSA.png"
                    alt="Your Image"
                    className="w-full md:w-1/3 h-1/4 md:mt-20 md:mr-60 md:mb-4"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0 }}
                />
                <motion.div
                    ref={ref}
                    className="flex flex-col items-center mt-6 md:mt-0 md:ml-4"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >

                    <div className="mr-80 flex items-start mx-auto sm:mr-4 sm:ml-auto md:mr-8 md:ml-20 lg:mr-80">
                        <p className=" mt-20 text-3xl font-bold mb-0 text-gray-900">
                            يمكنك مشاهدة التعليقات
                        </p>
                    </div>
                    <div className="flex justify-center mx-auto sm:mr-4 sm:ml-auto md:mr-8 md:ml-20 lg:mr-80">
                        <Link href="/Comments">
                            <a>
                                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-3">
                                    <div className="absolute inset-0 w-3 bg-gray-400 bg-opacity-50 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <span className="relative text-black group-hover:text-white">التعليقات</span>
                                </button>
                            </a>
                        </Link>
                    </div>
                </motion.div>
            </div> */}

            {showAddInternshipForm && (
                <AddInternshipPage onClose={handleAddInternshipClose} />
            )}
        </div>
    );
};

export default InternshipOpportunities;
