import * as Yup from "yup";
export const cambodiaSchema = {
  yupSchema: Yup.object().shape({}),
  initialValue: {
    dateOfBirth: "",
    passportDateOfIssue: "",
    personalDetails: {
      surname: "",
      givenName: "",
      motherGivenName: "",
      gender: "",
      countryOfBirth: "",
      placeOfBirth: "",
      countryOfCitizenship: "",
    },
    passportDetails: {
      passportCountry: "",
      passportNumber: "",
      passportExpiryDate: "",
    },
    contactDetails: {
      emailAddress: "",
      confirmEmailAddress: "",
      phoneNumber: "",
    },
    travelDetails: {
      intendedDateOfEntry: "",
      intendedDateOfExit: "",
      accomodationType: "",
      addressOfAccomodation: "",
      provienceOfAccomodation: "",
      travellingWithMinors:"",
      numberOfMinors:"",
      MinorPassportNumber:"",

    },
    termsAndConditions: false,
    declareInformation: false,
  },
};
