import { ErrorMessage } from 'formik';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendarDate } from 'react-icons/ci';
export default function ReactDatePickerInput({
  setFieldValue,
  name,
  selected,
}) {
  const years = React.useMemo(
    () =>
      Array.from(
        { length: new Date().getFullYear() - 1989 },
        (_, index) => 1990 + index
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
        name={name}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
            <select
              value={new Date(date).getFullYear()}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[new Date(date).getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
        selected={selected}
        onChange={date => setFieldValue(name, date)}
        className="border"
        showIcon
        icon={<CiCalendarDate />}
        toggleCalendarOnIconClick
      />
      <ErrorMessage name={name}>
        {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
      </ErrorMessage>
    </>
  );
}
