import { FormProvider, useForm } from 'react-hook-form';
import { NestedForm } from '../NestedForm/NestedForm.component';

type FormProviderExampleData = {
  nested: { name: string };
};

export const FormProviderExample = () => {
  const methods = useForm<FormProviderExampleData>();
  const onSubmit = (data: FormProviderExampleData) =>
    alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="mb-4">
        <NestedForm />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
