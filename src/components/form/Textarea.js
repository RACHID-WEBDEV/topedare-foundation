import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';
// import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';
// import classNames from 'classnames';
import Label from './Label';
// import { showError, showSuccess } from '@/utils/form-helpers';
// import ToolTip from '@/components/form/Tooltip';
// import { HelpIcon, SuccessIcon } from '@/public/assets/dashboard/navBarIcon';

const Textarea = ({ className, name, label, placeholder, rows }) => {
  const {
    register,
    formState: { dirtyFields, errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      <Label text={label} />
      <textarea
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className={classNames("contact-form-input placeholder:text-gray-500 border-2 border-gray-200 hover:ring-gray-200 focus:ring-gray-200 outline-none w-full rounded-lg py-3 px-2 hover:ring-2",
          { 'border-red-400': hasErrors },
          { 'border-green-400': isValid })}
        rows={rows} />
      <ErrorMessage name={name} />
    </>
  );
};


Textarea.defaultProps = {
  className: null,
  label: null,
  rows: '5',

};
export default Textarea;
