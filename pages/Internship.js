import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Hero from '../components/Hero';
import InternshipOpportunities from '../components/InternshipOpportunities';
import AddInternshipPage from '../components/AddInternshipPage';
import Link from 'next/link';

const Internship = () => {
  const [internships, setInternships] = useState([
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
    // Existing internships...
  ]);

  const [showAddInternshipForm, setShowAddInternshipForm] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();

  const handleAddInternship = (newInternship) => {
    setInternships((prevInternships) => [...prevInternships, newInternship]);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div>
        <Hero heading="فرص تدريبية" message="اكتشف فرص التدريب لتطوير مهاراتك" />
        <InternshipOpportunities internships={internships} />
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div className="flex items-start">
            <p className="ml-80 text-3xl font-bold mb-0 text-gray-900"> يمكنك مشاهدة التعليقات</p>
          </div>
          <div className="ml-80 mt-4 flex justify-center">
            <Link href="/Comments">
              <a>
                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mb-20">
                  <div className="absolute inset-0 w-3 bg-gray-400 bg-opacity-50 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">التعليقات</span>
                </button>
              </a>
            </Link>
          </div>

          <div className="ml-80">
            <p className="mb-3 text-3xl font-bold mb-0 text-gray-900">
              تستطيع إضافة فرصة تدريب
            </p>
          </div>
          <div className="ml-80 flex justify-center mt-2">
            <motion.button
              className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mb-40"
              onClick={() => setShowAddInternshipForm(true)}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 w-3 bg-gray-400 bg-opacity-50 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">إضافة فرصة تدريب</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {showAddInternshipForm && (
        <AddInternshipPage onAddInternship={handleAddInternship} onClose={() => setShowAddInternshipForm(false)} />
      )}
    </>
  );
};

export default Internship;
