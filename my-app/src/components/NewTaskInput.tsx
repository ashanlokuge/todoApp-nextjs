'use client';
import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from './icons/CalenderIcon';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../app/features/todo/todoSlice';

export type TaskFormValues = { title: string; dueDate: Date; };

export default function TaskInput({ onAdd }: { onAdd?: (v: TaskFormValues) => void }) {
  const initialValues: TaskFormValues = {
    title: '',
    dueDate: new Date(),
  };
  const dispatch = useDispatch();
  const handleSubmit = async (values: TaskFormValues, { resetForm, setSubmitting }: FormikHelpers<TaskFormValues>) => {

    // todoSlice expects payload.name — map title -> name
    dispatch(todoAdded({ name: values.title }));    
    // call optional parent callback with typed values
    onAdd?.(values);
    resetForm({ values: { title: '', dueDate: values.dueDate } });
    setSubmitting(false);
  };

  // Control whether the datepicker is open
  const [openPicker, setOpenPicker] = useState(false);
  const pickerRef = useRef<DatePicker>(null);

  
  return (
    <div className='mt-8'>
        <Formik 
          initialValues={initialValues} 
          onSubmit={handleSubmit}
        >
          {({values,setFieldValue, isSubmitting }) => (
            <Form className="w-full">
            <div className="relative flex items-center gap-3">
                <div className="flex-1">
                <Field
                    type="text"
                    name="title"
                    placeholder="Enter new task"
                    className="w-full rounded-full bg-neutral-200 px-6 py-3"
                />
                </div>

                <button
                type="button"
                onClick={() => setOpenPicker((o) => !o)}
                className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-sm cursor-pointer"
                >
                <CalenderIcon/> {values.dueDate.toLocaleDateString()}
                </button>

                <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-green-200 px-5 py-2 text-sm cursor-pointer"
                >
                Add Task
                </button>

                {openPicker && (
                <div className="absolute right-0 top-full mt-2 z-50">
                    <DatePicker
                    ref={pickerRef}
                    inline
                    selected={values.dueDate}
                    onChange={(date: Date | null) => {
                        // react-datepicker may pass null in some cases, guard against it
                        if (date) {
                        setFieldValue('dueDate', date);
                        }
                        setOpenPicker(false);
                    }}
                    />
                </div>
                )}
            </div>
          </Form>
          )}
        </Formik>
    </div>
  );
}
