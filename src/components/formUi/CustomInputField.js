'use client';
import { cn } from '@/lib/cn';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import SectionLabel from './SectionLabel';
export default function CustomInputField({
  className,
  name,
  labelName = 'your label',
  tooltipContent = 'your tooltip content',
  selectOptions = [],
  selectOptionsLabel = 'select',
}) {
  const { values, setFieldValue } = useFormikContext();
  console.log(values);
  return (
    <>
      <div className="input-group-new">
        <SectionLabel labelName={labelName} tooltipContent={tooltipContent} />
        <div>
          <Field
            required
            component="select"
            id={name}
            name={name}
            className="new-form-input"
            onChange={e => setFieldValue(name, e.target.value)}
          >
            <option value="">{selectOptionsLabel}</option>
            {selectOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>

          <ErrorMessage name={name}>
            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
}
