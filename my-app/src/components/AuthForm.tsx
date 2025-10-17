"use client";
import { Formik, Form, Field } from "formik";
import Image from "next/image";

type AuthMode  = "login" | "signup";

interface AuthFormProps {
  mode: AuthMode;
}

export default function AuthForm({mode}:AuthFormProps){
  const isSignUp = mode === 'signup';

  const initialValues ={
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  };

  interface AuthValues {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }

  const config ={
    title: isSignUp ? "Welcome to DUN." : "Welcome Back",
    subtitle: isSignUp ? "Lets Create your account" : "Get Your things DUN.",
    buttonText: isSignUp ? "Sign Up" : "Log In",
    buttonColor: isSignUp ? "#C7FFB0" : "#A2DAFF",
    linkText: isSignUp ? "Log In" : "Sign Up",
    // point to existing images in /public (jpg files)
    linkHref: isSignUp ? "/login": "/signup",
    imageSrc : isSignUp? "/signup-image.jpg" : "/login-image.jpg",
    imageAlt : isSignUp ? "Sign Up Illustration" : "Login Illustration"
  };

  const handleSubmit = (values: AuthValues, actions: { setSubmitting: (v: boolean) => void }) => {
    console.log(`${config.buttonText} Attempt:`, values);
    setTimeout(() => {
      alert(`${config.buttonText} successful!`);
      actions.setSubmitting(false);
    }, 1000);
  };

  return(
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl justify-center space-between">
         <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-extrabold mb-2 tracking-tighter">DUN.</h1>
            <p className="text-xl font-medium mb-1 text-gray-700 ">{config.title}</p>
            <p className="text-sm text-gray-500 mb-8">{config.subtitle}</p>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="w-full max-w-xs space-y-4">
                    <Field
                      type= "text"
                      name= "name"
                      placeholder="Enter your name"
                      className="w-full p-4 text-lg text-gray-800 bg-gray-200 rounded-full  focus:border-blue-400 focus:outline-none text-center"
                      />

                    <Field
                      type= "email"
                      name= "email"
                      placeholder ="Enter your email"
                      className="w-full p-4 text-lg text-gray-800 bg-gray-200 rounded-full  focus:border-blue-400 focus:outline-none text-center"
                      />

                    <Field
                      type ="password"
                      name ="password"
                      placeholder="Enter your password"
                      className="w-full p-4 text-lg text-gray-800 bg-gray-200 rounded-full focus:border-blue-400 focus:outline-none text-center"
                      />

                    {isSignUp && (
                      <Field
                         type ="password"
                         name ="confirmPassword"
                         placeholder="Confirm your password"
                         className="w-full p-4 text-lg text-gray-800 bg-gray-200 rounded-full  focus:border-blue-400 focus:outline-none text-center"
                      />
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style ={{backgroundColor: config.buttonColor}}
                      className="w-full p-4 text-lg font-semibold text-gray-800 rounded-full hover:shadow-md transition-all mt-6"
                    >
                      {isSubmitting ? "Submitting..." : config.buttonText}
                    </button>
                </Form>
                )}
            </Formik>

            <p className="mt-8 text-sm text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <a href ={config.linkHref} className="text-blue-500 font-semibold hover:underline ml-2">{config.linkText}</a>
            </p>
         </div>

         {/* Image column */}
         <div className="hidden md:block md:w-1/2 relative">
           <div className="absolute inset-0">
             <Image
               src={config.imageSrc}
               alt={config.imageAlt}
               fill
               className="object-cover"
               priority
             />
           </div>
         </div>
      </div>
    </div>
  )
} 