import * as yup from 'yup';

export const contactUsSchema = yup
  .object({
    name: yup
      .string()
      .required('Full name is required')
      .min(4, 'Mininum 4 characters')
      .max(40, 'Maximum 30 characters'),

    email: yup.string().email('Kindly provide a valid email').required('Email address is required'),
    // phone: yup
    //   .string()
    //   .required('Phone number is required')
    //   .matches(
    //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //     'Phone number is not valid'
    //   )
    //   .min(11, 'Mininum of 11 numbers '),
    title: yup.string().required('Subject is required').min(4, 'Mininum 4 characters'),
    message: yup.string().required('Message is required').min(10)
  })
  .required();
