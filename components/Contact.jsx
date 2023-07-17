import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!fullName || !email || !subject || !message) {
      setError('يرجى تعبئة جميع الحقول');
      return;
    }

    // Reset form fields and show thank you message
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setError('');
    setSubmitted(true);
  };

  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen' dir='rtl'>
      <h1 className='text-2xl font-bold text-center p-4'>اتصل بنـا</h1>
      {!submitted ? (
        <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-2'>
            <input
              className='border shadow-lg p-3'
              type="text"
              placeholder='الأسم الكامل'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className='border shadow-lg p-3'
              type="email"
              placeholder='الإيميل'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input
            className='border shadow-lg p-3 w-full my-2'
            type="text"
            placeholder='العنوان'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className='border shadow-lg p-3 w-full'
            cols="30"
            rows="10"
            placeholder='الرسالة'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {error && <p className='text-red-500'>{error}</p>}
          <button className='border shadow-lg p-3 w-full mt-2'>إرسـال</button>
        </form>
      ) : (
        <div className='text-center'>
          <p>شكرًا لك! تم استلام رسالتك بنجاح.</p>
          <p>سنتواصل معك في أقرب وقت ممكن.</p>
        </div>
      )}
    </div>
  );
};

export default Contact; 