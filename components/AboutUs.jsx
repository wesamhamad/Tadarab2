import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
            controls.start('visible');
        }
    }, [inView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id='aboutUs' className='py-10 max-w-[1240px] mx-auto'>
            <h2 className="text-3xl font-bold text-center mt-20 mb-10">مـن نـحـن؟</h2>
            <div className='container mx-auto px-4 text-right'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <motion.div
                        ref={ref}
                        className='bg-white rounded-lg shadow-md p-6'
                        initial='hidden'
                        animate={controls}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className='text-2xl font-bold mb-4'>قصتنا</h2>
                        <p className='text-gray-600'>
                            تأسست منصة تدرب في عام 2023 برؤية تمكين الطلاب وتوفير فرص التدريب
                            التعاوني لهم. نحن نؤمن بأهمية تطوير مهارات الطلاب ومساعدتهم في
                            الاندماج في سوق العمل.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className='bg-white rounded-lg shadow-md p-6'
                        initial='hidden'
                        animate={controls}
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className='text-2xl font-bold mb-4'>رسالتنا</h2>
                        <p className='text-gray-600'>
                            تهدف منصة تدرب إلى توفير فرص تدريب عالية الجودة للطلاب وتمكينهم
                            من تطوير مهاراتهم العملية واكتساب الخبرات القيمة. نحن نسعى لبناء
                            مجتمع تعليمي متعاون وملهم يدعم نجاح الطلاب في حياتهم المهنية.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className='bg-white rounded-lg shadow-md p-6'
                        initial='hidden'
                        animate={controls}
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className='text-2xl font-bold mb-4'>منصة تَدرّب</h2>
                        <p className='text-gray-600'>
                            توفر منصة تدرب فرص التدريب التعاوني للطلاب. نحن نسعى لتمكين
                            الطلاب وتطوير مهاراتهم العملية من خلال جمع فرص التدريب المتاحة في مكان واحد.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
