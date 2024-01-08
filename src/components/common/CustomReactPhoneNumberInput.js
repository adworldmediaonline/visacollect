import 'react-phone-number-input/style.css';

import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input';
import { useState } from 'react';
export default function CustomReactPhoneNumberInput({
  setFieldValue,

  name,
  ...props
}) {
  const [value, setValue] = useState();
  console.log(value);
  const handleChange = value => {
    if (value && isValidPhoneNumber(value)) {
      setFieldValue(name, formatPhoneNumberIntl(value));
    } else {
      setValue(value);
    }
  };
  return (
    <>
      <PhoneInput
        {...props}
        placeholder="Enter phone number"
        value={value}
        onChange={handleChange}
        error={
          value
            ? isValidPhoneNumber(value)
              ? undefined
              : 'Invalid phone number'
            : 'Phone number required'
        }
      />
      {/* Is possible: {value && isPossiblePhoneNumber(value) ? 'true' : 'false'}
      Is valid: {value && isValidPhoneNumber(value) ? 'true' : 'false'}
      National: {value && formatPhoneNumber(value)}
      International: {value && formatPhoneNumberIntl(value)} */}
    </>
  );
}
