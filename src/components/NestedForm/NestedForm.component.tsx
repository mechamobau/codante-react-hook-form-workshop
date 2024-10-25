import { FormProvider, useForm, useFormContext } from 'react-hook-form';

// 7. Nested Forms Example
export const NestedFormWrapper = () => {
  return (
    <FormProvider {...useForm()}>
      <NestedForm />
    </FormProvider>
  );
};

export const NestedForm = () => {
  const { register } = useFormContext();
  return (
    <form className="mb-4">
      <input
        {...register('nested.name')}
        placeholder="Nested Name"
        className="p-2 border rounded mb-2"
      />
    </form>
  );
};
