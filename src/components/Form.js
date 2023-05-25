import React, { useState } from 'react';
import './form.scss';

const initialValues = { url: '', name: '', description: '' };

export default function Form({ fn }) {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    fn.addUrl(values);
    setValues(initialValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='url'
        name='url'
        value={values.url}
        onChange={handleChange}
        placeholder='https://someurl.com'
        autoComplete='off'
      />
      <input
        type='text'
        name='name'
        value={values.name}
        onChange={handleChange}
        placeholder='Website name'
        autoComplete='off'
      />
      <textarea
        name='description'
        value={values.description}
        onChange={handleChange}
        rows='3'
        placeholder='Write a description'
        autoComplete='off'
      ></textarea>
      <button>Save</button>
    </form>
  );
}
