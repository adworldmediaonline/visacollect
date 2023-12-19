import * as Yup from "yup";

export const registrationSchema = {
  yupSchema: Yup.object().shape({
    emailAddress: Yup.string()
      .email("Invalid email format")
      .required("This Field is required"),
    whenArriveDestination: Yup.string().required("This Field is required"),
    whenDepartDestination: Yup.string().required("This Field is required"),
    destinationCountry: Yup.string().required("This Field is required"),
    emergencyContactEmail: Yup.string()
      .email("Invalid email format")
      .required("This Field is required"),
    emergencyContactFullName: Yup.string().required("This Field is required"),
    EmergencyContactCountryCodeAndPhoneNumber: Yup.string().required(
      "This Field is required"
    ),
    // mobileGroupTourist: Yup.string()
    //   .matches(/^[0-9]{10}$/, "Mobile number must be a valid 10-digit number")
    //   .required("Mobile is required"),
  }),
  initialValues: {
    emailAddress: "",
    whenArriveDestination: "",
    whenDepartDestination: "",
    destinationCountry: "",

    emergencyContactEmail: "",
    emergencyContactFullName: "",
    EmergencyContactCountryCodeAndPhoneNumber: "",
  },
};

export const applicantInformationSchema = {
  yupSchema: Yup.object().shape({
    firstName: Yup.string().required("This Field is required"),
    lastName: Yup.string().required("This Field is required"),
    nationality: Yup.string().required("This Field is required"),
    gender: Yup.string().required("This Field is required"),
    dateOfBirth: Yup.string().required("This Field is required"),
    countryOfBirth: Yup.string().required("This Field is required"),
    countryOfResidence: Yup.string().required("This Field is required"),
    passportNumber: Yup.string().required("This Field is required"),
    passportIssueDate: Yup.string().required("This Field is required"),
    passportExpirationDate: Yup.string().required("This Field is required"),
  }),
  initialValues: {
    firstName: "",
    lastName: "",
    nationality: "",
    gender: "",
    dateOfBirth: "",
    countryOfBirth: "",
    countryOfResidence: "",
    passportNumber: "",
    passportIssueDate: "",
    passportExpirationDate: "",
  },
};
