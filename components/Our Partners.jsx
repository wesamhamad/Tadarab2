import React from 'react';

const PartnersSection = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-7xl rounded-lg mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mt-20 mb-10">شركاؤنا</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Partner 1 */}
                    <div className="flex items-center justify-center  bg-white shadow-md p-4">
                        <img
                            src="https://pbs.twimg.com/profile_images/1631703486436868117/lSNz7emy_400x400.jpg" // Replace with the actual partner logo image
                            alt="Partner 1"
                            className="h-40"
                        />
                    </div>

                    {/* Partner 2 */}
                    <div className="flex items-center justify-center bg-white shadow-md p-4">
                        <img
                            src="https://pbs.twimg.com/profile_images/1631703486436868117/lSNz7emy_400x400.jpg" // Replace with the actual partner logo image
                            alt="Partner 2"
                            className="h-40"
                        />
                    </div>

                    {/* Partner 3 */}
                    <div className="flex items-center justify-center bg-white shadow-md p-4">
                        <img
                            src="https://pbs.twimg.com/profile_images/1631703486436868117/lSNz7emy_400x400.jpg" // Replace with the actual partner logo image
                            alt="Partner 3"
                            className="h-40"
                        />
                    </div>

                    {/* Partner 4 */}
                    <div className="flex items-center justify-center bg-white shadow-md p-4">
                        <img
                            src="https://pbs.twimg.com/profile_images/1631703486436868117/lSNz7emy_400x400.jpg" // Replace with the actual partner logo image
                            alt="Partner 4"
                            className="h-40"
                        />
                    </div>

                    {/* Add more partner cards here */}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
