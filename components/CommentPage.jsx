import React, { useState, useEffect } from 'react';

const CommentPage = ({ internships }) => {
    const [selectedInternshipId, setSelectedInternshipId] = useState('');
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [filteredComments, setFilteredComments] = useState([]);

    useEffect(() => {
        // Fetch comments from local storage on component mount
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []);

    useEffect(() => {
        // Update local storage whenever comments change
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    useEffect(() => {
        // Filter comments based on selected internship
        if (selectedInternshipId) {
            const filteredComments = comments.filter((comment) => comment.internshipId === selectedInternshipId);
            setFilteredComments(filteredComments);
        } else {
            setFilteredComments(comments);
        }
    }, [selectedInternshipId, comments]);

    const handleAddComment = () => {
        if (newComment.trim() !== '' && name.trim() !== '' && email.trim() !== '' && selectedInternshipId !== '') {
            const comment = {
                id: Date.now(),
                name: name,
                email: email,
                content: newComment,
                internshipId: selectedInternshipId,
            };
            setComments([...comments, comment]);
            setNewComment('');
            setName('');
            setEmail('');
        }
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        setIsFormValid(newComment.trim() !== '' && name.trim() !== '' && email.trim() !== '' && selectedInternshipId !== '');
    }, [newComment, name, email, selectedInternshipId]);

    const selectedInternship = internships.find((internship) => internship.id === selectedInternshipId);

    return (
        <div className="min-h-screen bg-gray-300 py-8 px-4 sm:px-6 lg:px-8" dir="rtl">
            <div className="max-w-3xl mx-auto mt-40">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">اختر فرصة التدريب (للفلترة والإضافة)</h2>
                    <select
                        value={selectedInternshipId}
                        onChange={(e) => setSelectedInternshipId(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">اختر فرصة التدريب</option>
                        {internships.map((internship) => (
                            <option key={internship.id} value={internship.id}>
                                {internship.position}
                            </option>
                        ))}
                    </select>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">التعليقات</h2>
                    {filteredComments.length === 0 ? (
                        <p className="text-gray-500 text-center">لا توجد تعليقات لهذه الفرصة التدريبية</p>
                    ) : (
                        <div className="space-y-4">
                            {filteredComments.map((comment) => (
                                <div key={comment.id} className="bg-white shadow-lg rounded-lg px-6 py-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">{comment.name}</p>
                                            <p className="text-gray-600">{comment.email}</p>
                                            <p className="text-gray-800">
                                                {comment.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {(selectedInternshipId || comments.length === 0) && (
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">أضف تعليقًا</h2>
                        <div>
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="الاسم"
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="البريد الإلكتروني"
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <textarea
                                value={newComment}
                                onChange={handleCommentChange}
                                placeholder="أضف تعليقًا..."
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                            <button
                                onClick={handleAddComment}
                                className={`bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'
                                    }`}
                                disabled={!isFormValid}
                            >
                                إضافة تعليق
                            </button>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default CommentPage;
