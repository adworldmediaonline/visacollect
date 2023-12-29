import { ErrorMessage } from 'formik';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendarDate } from 'react-icons/ci';
export default function ReactDatePickerInput({
  setFieldValue,
  name,
  selected,
  minDate = '',
  maxDate = '',
  disabled = false,
}) {
  const years = React.useMemo(
    () =>
      Array.from(
        { length: new Date().getFullYear() + 20 - 1970 },
        (_, index) => 1971 + index
      ),
    []
  );
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <>
      <ReactDatePicker
        disabled={disabled}
        placeholderText="select a date"
        // peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        name={name}
        selected={selected}
        onChange={date => setFieldValue(name, date)}
        className="border"
        showIcon
        icon={<CiCalendarDate />}
        toggleCalendarOnIconClick
        minDate={minDate}
        maxDate={maxDate}
      />
      <ErrorMessage name={name}>
        {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
      </ErrorMessage>
    </>
  );
}
