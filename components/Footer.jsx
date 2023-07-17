import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6" dir="rtl">
            <div className="container mx-auto px-4 flex justify-between items-center">

                <div className="text-center w-1/3">
                    <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
                    <p>
                        العنوان: شارع الرئيسي ١٢٣، المدينة
                    </p>
                    <p>
                        الهاتف: <a href="tel:+966548393340">+966548393340٩</a>
                    </p>
                    <p>
                        البريد الإلكتروني: <a href="mailto:info@Tadarab.com">info@Tadarab.com</a>
                    </p>
                </div>
                <div className="text-center w-1/3">
                    <h4 className="text-lg font-semibold mb-4">استكشف</h4>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="/#aboutUs" className="text-gray-400 hover:text-white">من نحن</a>
                        </li>
                        <li className="mb-2">
                            <a href="/Internship" className="text-gray-400 hover:text-white">فرص تدريبية</a>
                        </li>
                        <li className="mb-2">
                            <a href="/contact" className="text-gray-400 hover:text-white">اتصل بنا</a>
                        </li>
                    </ul>
                </div>
                <div className="text-center w-1/3">
                    <h4 className="text-lg font-semibold mb-4">وسائل التواصل الاجتماعي</h4>
                    <div className="flex justify-center">
                        <a href="#" className="mr-4 text-gray-400 hover:text-white">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="mr-4 text-gray-400 hover:text-white">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="mr-4 text-gray-400 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="mr-4 text-gray-400 hover:text-white">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center py-4">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()}  جميع الحقوق محفوظة لمنصة تَدرّب
                </p>
            </div>
        </footer>
    );
};

export default Footer;
