'use client';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import SectionLabel from './SectionLabel';
export default function CustomSelectField({
  className,
  name,
  labelName = 'your label',
  tooltipContent = 'your tooltip content',
  selectOptions = [],
  selectOptionsLabel = 'select',
}) {
  const { values, setFieldValue } = useFormikContext();
  console.log(values['visaType']);
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
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            s
          </Field>

          <ErrorMessage name={name}>
            {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
}
