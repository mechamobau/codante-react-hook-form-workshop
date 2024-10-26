import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { SimpleForm } from './components/SimpleForm/SimpleForm.component';
import { ValidationForm } from './components/ValidationForm/ValidationForm.component';
import { CustomValidationForm } from './components/CustomValidationForm/CustomValidationForm.component';
import { ControlledComponentForm } from './components/ControlledComponentForm/ControlledComponentForm.component';
import { FormStateManagement } from './components/FormStateManagement/FormStateManagement.component';
import { FieldArrayForm } from './components/FieldArrayForm/FieldArrayForm.component';
import { NestedFormWrapper } from './components/NestedForm/NestedForm.component';
import { FormProviderExample } from './components/FormProviderExample/FormProviderExample.component';
import { ExternalUIComponentForm } from './components/ExternalUIComponentForm/ExternalUIComponentForm.component';
import { AsyncSubmissionForm } from './components/AsyncSubmissionForm/AsyncSubmissionForm.component';
import Home from './components/Home/Home.component';

const App = () => (
  <div className="dark:bg-slate-700 dark:text-white h-full">
    <Router>
      <nav className="p-4 bg-gray-200 flex align-center justify-center dark:bg-slate-800">
        <ul className="flex gap-4 items-center">
          <li className="text-slate-800 dark:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/simple-form">Simple Form</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/validation-form">Validation Form</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/custom-validation-form">Custom Validation Form</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/controlled-component-form">
              Controlled Component Form
            </Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/form-state-management">Form State Management</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/field-array">Field Array</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/nested-form">Nested Form</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/form-provider">FormProvider</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/external-ui-component">External UI Component</Link>
          </li>
          <li className="text-slate-800 dark:text-white">
            <Link to="/async-submission">Async Submission</Link>
          </li>
        </ul>
      </nav>
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simple-form" element={<SimpleForm />} />
          <Route path="/validation-form" element={<ValidationForm />} />
          <Route
            path="/custom-validation-form"
            element={<CustomValidationForm />}
          />
          <Route
            path="/controlled-component-form"
            element={<ControlledComponentForm />}
          />
          <Route
            path="/form-state-management"
            element={<FormStateManagement />}
          />
          <Route path="/field-array" element={<FieldArrayForm />} />
          <Route path="/nested-form" element={<NestedFormWrapper />} />
          <Route path="/form-provider" element={<FormProviderExample />} />
          <Route
            path="/external-ui-component"
            element={<ExternalUIComponentForm />}
          />
          <Route path="/async-submission" element={<AsyncSubmissionForm />} />
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
