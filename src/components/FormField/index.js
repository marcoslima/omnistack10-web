import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FormField = props => {
  const { label, type='text', name, value, onChange, required=false } = props;

  return (
    <div className="input-block">
      <label htmlFor="longitude">{label}</label>
      <input type={type} name={name} id={name} value={value} required={required} onChange={onChange}/>
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default FormField;