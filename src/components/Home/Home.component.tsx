import { Link } from 'react-router-dom';
import logo from './react-logo.svg';

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-2">
      <div className="col-span-2 mt-2">
        <div className="mt-10 max-w-20 place-self-center w-full flex justify-center mx-auto">
          <img src={logo} alt="Codante" />
        </div>
        <div className="flex flex-col gap-4 max-w-md mx-auto p-4 rounded-lg mt-5">
          <h1 className="text-2xl font-bold text-center">React Hook Form</h1>
          <p className="text-center">
            Neste workshop, você vai aprender como usar o React Hook Form para
            formulários em React.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-md mx-auto p-4 mt-3 grid grid-cols-2 text-center font-bold text-md">
          <Link to="/simple-form">Simple Form</Link>
          <Link to="/validation-form">Validation Form</Link>
          <Link to="/custom-validation-form">Custom Validation Form</Link>
          <Link to="/controlled-component-form">Controlled Component Form</Link>
          <Link to="/form-state-management">Form State Management</Link>
          <Link to="/field-array">Field Array</Link>
          <Link to="/nested-form">Nested Form</Link>
          <Link to="/form-provider">FormProvider</Link>
          <Link to="/external-ui-component">External UI Component</Link>
          <Link to="/async-submission">Async Submission</Link>
        </div>
      </div>
    </div>
  );
}
