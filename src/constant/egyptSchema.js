export const egyptSchema = {
  yupSchema: {},
  initialValues: {
    typeOfVisa: '',
    numberOfVisa: '',
    processingTime: 'normal',
    covidInsurance: false,
    email: '',
    phoneNumber: '',
    communicationChannel: '',
    communicationChannelNumberOrId: '',
    communicationChannelOther: '',
  },
  yupSchemaVisaDetails: {},
  initialValuesVisaDetails: {
    passportDetails: [
      {
        idFullName: '',
        gender: '',
        dateOfBirth: '',
        nationality: '',
        passportNumber: '',
      },
    ],
    orderDetails: {
      dateOfArrival: '',
      dateOfDeparture: '',
      specialRequest: '',
    },
    termsAndConditions: false,
    confirmation: false,
  },
};
