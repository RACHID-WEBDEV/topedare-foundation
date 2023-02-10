import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const HookForm = ({ onSubmit, children, schema, defaultValues }) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema)
  });

  React.useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      console.log('summited?', methods.formState.isSubmitSuccessful)
      methods.reset();
    }
  }, [methods, methods.formState.isSubmitSuccessful]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
export default HookForm;
