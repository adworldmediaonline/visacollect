import 'react-phone-number-input/style.css';

import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input';
import { useState } from 'react';

export default function CustomReactPhoneNumberInput({
  setFieldValue,
  setFieldTouched,
  errors,
  touched,
  name,
  defaultValue,
  ...props
}) {
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const handleChange = value => {
    if (value && isValidPhoneNumber(value)) {
      setFieldValue(name, formatPhoneNumberIntl(value));
      setFieldTouched(name, true);
      setError('');
    } else {
      setValue(value);
      setFieldTouched(name, false);
      setError('Phone number is invalid');
    }
  };

  return (
    <>
      <PhoneInput
        {...props}
        placeholder="Enter phone number"
        value={value}
        onChange={handleChange}
        error={touched[name] && errors[name] ? errors[name] : undefined}
      />
      {error ? <div className="text-red-500">{error}</div> : ''}
    </>
  );
}
