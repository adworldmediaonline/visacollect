import * as Yup from 'yup';

export const thailandSchema = {
  yupSchema: Yup.object().shape({
    emailAddress: Yup.string()
      .email('Invalid email format')
      .required('This Field is required'),
    whenArriveDestination: Yup.date().required('This Field is required'),
    whenDepartDestination: Yup.date().required('This Field is required'),
    destinationCountry: Yup.string().required('This Field is required'),
    emergencyContactEmail: Yup.string()
      .email('Invalid email format')
      .required('This Field is required'),
    emergencyContactFullName: Yup.string().required('This Field is required'),
    emergencyContactCountryCodeAndPhoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be a valid 10-digit number')
      .required('Phone is required'),
  }),
  initialValues: {
    emailAddress: '',
    whenArriveDestination: '',
    whenDepartDestination: '',
    destinationCountry: '',

    emergencyContactEmail: '',
    emergencyContactFullName: '',
    emergencyContactCountryCodeAndPhoneNumber: '',
  },

  personYupSchema: Yup.object().shape({
    firstName: Yup.string().required('This Field is required'),
    lastName: Yup.string().required('This Field is required'),
    nationality: Yup.string().required('This Field is required'),
    gender: Yup.string().required('This Field is required'),
    dateOfBirth: Yup.date().required('This Field is required'),
    countryOfBirth: Yup.string().required('This Field is required'),
    countryOfResidence: Yup.string().required('This Field is required'),
    passportNumber: Yup.string().required('This Field is required'),
    passportIssueDate: Yup.date().required('This Field is required'),
    passportExpirationDate: Yup.date().required('This Field is required'),
  }),
  personInitialValues: {
    firstName: '',
    lastName: '',
    nationality: '',
    gender: '',
    dateOfBirth: '',
    countryOfBirth: '',
    countryOfResidence: '',
    passportNumber: '',
    passportIssueDate: '',
    passportExpirationDate: '',
  },
};
