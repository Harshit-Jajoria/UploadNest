import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { BACKEND_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { setLogin } from '../state';
import { auth, provider } from '../firebase/config';
import { signInWithPopup } from 'firebase/auth';

const registerSchema = yup.object().shape({
  email: yup.string().required('required'),
  password: yup.string().min(6).required('required'),
});

const initialValuesRegister = {
  email: '',
  password: '',
};

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleSign = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const obj = {
        name: data.user.displayName,
        email: data.user.email,
      };
      const user = await axios.post(`${BACKEND_URL}/login-user-gmail`, obj);
      dispatch(
        setLogin({
          user: user.data.user,
          token: user.data.token,
        })
      );

      toast.success('Logged in successfully', {
        position: 'top-center',
        pauseOnHover: true,
      });
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error('Error signing in with Google', {
        position: 'top-center',
        pauseOnHover: true,
      });
    }
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValuesRegister,
      validationSchema: registerSchema,
      onSubmit: async (values) => {
        setLoading(true);
        try {
          const savedUser = await axios.post(
            `${BACKEND_URL}/login-user`,
            values,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          dispatch(
            setLogin({
              user: savedUser.data.user,
              token: savedUser.data.token,
            })
          );

          setLoading(false);
          toast.success('Logged In Successfully', {
            position: 'top-center',
            pauseOnHover: true,
          });

          setTimeout(() => {
            navigate('/');
          }, 2000);
        } catch (err) {
          setLoading(false);
          toast.error(err.response.data.msg, {
            position: 'top-center',
            pauseOnHover: true,
          });
        }
      },
    });

  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-200 px-8 py-4 rounded-lg max-w-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3 space-y-8">
        <div className="text-center">
          <h2 className="mt-3 text-center text-3xl font-extrabold ">Sign IN</h2>
          <p className="mt-2 text-center text-sm">
            Enter your details to sign in
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    touched.email && errors.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              {touched.email && errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium ">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    touched.password && errors.password
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              {touched.password && errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={handleGoogleSign}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {/* Google logo SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 262"
              id="google"
              className="h-5 w-5 mr-2"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              />
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
            Sign In with Google
          </button>
        </form>
        <div className="text-center">
          <p
            className="mt-2 text-sm text-blue-500 cursor-pointer underline"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Don't have an account , Create here
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
