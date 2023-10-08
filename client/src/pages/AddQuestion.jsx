import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { BACKEND_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


const questionTypeOptions = [
  'html',
  'css',
  'javascript',
  'react',
  'nodejs',
  'nextjs',
];

const registerSchema = yup.object().shape({
  question: yup.string().required('required'),
  option1: yup.string().required('required'),
  option2: yup.string().required('required'),
  option3: yup.string().required('required'),
  option4: yup.string().required('required'),
  questionType: yup.string().required('required'),
  correctOption: yup.string().required('required'),
});

const initialValuesRegister = {
  question: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  questionType: '',
  correctOption: '',
};

const AddQuestion = () => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.token);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setLoading(true);
      console.log(values);
      try {
        const savedQuestion = await axios.post(
          `${BACKEND_URL}/add-question`,
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLoading(false);
        toast.success('Question Added Successfully', {
          position: 'top-center',
          pauseOnHover: true,
        });
        resetForm();
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-200 px-8 py-4 rounded-lg max-w-3xl w-full   space-y-8">
          <div className="text-center">
            <h2 className="mt-3 text-center text-3xl font-extrabold">
              Add Question Here
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="question" className="block text-sm font-medium">
                  Question
                </label>
                <div className="mt-1">
                  <input
                    id="question"
                    name="question"
                    type="text"
                    autoComplete="off"
                    value={values.question}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.question && errors.question
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                </div>
                {touched.question && errors.question && (
                  <p className="mt-2 text-sm text-red-600">{errors.question}</p>
                )}
              </div>
              <div>
                <label htmlFor="option1" className="block text-sm font-medium">
                  Option 1
                </label>
                <div className="mt-1">
                  <input
                    id="option1"
                    name="option1"
                    type="text"
                    autoComplete="off"
                    value={values.option1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.option1 && errors.option1
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                </div>
                {touched.option1 && errors.option1 && (
                  <p className="mt-2 text-sm text-red-600">{errors.option1}</p>
                )}
              </div>
              <div>
                <label htmlFor="option2" className="block text-sm font-medium">
                  Option 2
                </label>
                <div className="mt-1">
                  <input
                    id="option2"
                    name="option2"
                    type="text"
                    autoComplete="off"
                    value={values.option2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.option2 && errors.option2
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                </div>
                {touched.option2 && errors.option2 && (
                  <p className="mt-2 text-sm text-red-600">{errors.option2}</p>
                )}
              </div>
              <div>
                <label htmlFor="option3" className="block text-sm font-medium">
                  Option 3
                </label>
                <div className="mt-1">
                  <input
                    id="option3"
                    name="option3"
                    type="text"
                    autoComplete="off"
                    value={values.option3}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.option3 && errors.option3
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                </div>
                {touched.option3 && errors.option3 && (
                  <p className="mt-2 text-sm text-red-600">{errors.option3}</p>
                )}
              </div>
              <div>
                <label htmlFor="option4" className="block text-sm font-medium">
                  Option 4
                </label>
                <div className="mt-1">
                  <input
                    id="option4"
                    name="option4"
                    type="text"
                    autoComplete="off"
                    value={values.option4}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.option4 && errors.option4
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                </div>
                {touched.option4 && errors.option4 && (
                  <p className="mt-2 text-sm text-red-600">{errors.option4}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="correctOption"
                  className="block text-sm font-medium"
                >
                  Select Correct Option
                </label>
                <div className="mt-1">
                  <select
                    id="correctOption"
                    name="correctOption"
                    value={values.correctOption}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.correctOption && errors.correctOption
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  >
                    <option value="">Select </option>
                    {[1, 2, 3, 4].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                {touched.correctOption && errors.correctOption && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.correctOption}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="questionType"
                  className="block text-sm font-medium"
                >
                  Select Question Type
                </label>
                <div className="mt-1">
                  <select
                    id="questionType"
                    name="questionType"
                    value={values.questionType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.questionType && errors.questionType
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  >
                    <option value="">Select </option>
                    {questionTypeOptions.map((questionType) => (
                      <option key={questionType} value={questionType}>
                        {questionType.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
                {touched.questionType && errors.questionType && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.questionType}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default AddQuestion;
