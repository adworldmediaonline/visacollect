import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import { useEffect } from 'react';
const MyRadioButtonsField = props => {
  const {
    values: { travelDetails },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  useEffect(() => {
    // set the value of textC, based on textA and textB
    if (travelDetails.travelingWithMinor === 'no') {
      setFieldValue('travelDetails.numberOfMinor', '');
      setFieldValue('travelDetails.minorInformation', []);
    }
  }, [travelDetails.travelingWithMinor, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};
export default MyRadioButtonsField;
