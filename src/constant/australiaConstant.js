import * as Yup from 'yup';
export const applicationSchema = {
  yupSchema: Yup.object().shape({
    travelDetails: Yup.object().shape({
      purposeOfStay: Yup.string().required('Purpose of stay is required'),
      plannedDate: Yup.string().required('Planned date is required'),
      passengerNationality: Yup.string().required(
        'Passenger nationality is required'
      ),
      portOfArrival: Yup.string().required('Port of arrival is required'),
    }),
    personalDetails: Yup.object().shape({
      givenName: Yup.string().required('Given name is required'),
      surnameFamilyName: Yup.string().required(
        'Surname/Family name is required'
      ),
      emailAddress: Yup.string()
        .email('Invalid email address')
        .required('Email address is required'),
      confirmEmailAddress: Yup.string()
        .oneOf([Yup.ref('emailAddress'), null], 'Emails must match')
        .required('Confirm email address is required'),
      dateOfBirth: Yup.date().required('Date of birth is required'),
      countryTerritoryOfBirth: Yup.string().required(
        'Country/Territory of birth is required'
      ),
      cityOfBirth: Yup.string().required('City of birth is required'),
      maritalStatus: Yup.string().required('Marital status is required'),
      gender: Yup.string().required('Gender is required'),
    }),
    passportDetails: Yup.object().shape({
      passportNumber: Yup.string().required('Passport number is required'),
      issuingAuthority: Yup.string().required('Issuing authority is required'),
      dateOfIssue: Yup.string().required('Date of issue is required'),
      dateOfExpiry: Yup.string().required('Date of expiry is required'),
      citizen: Yup.boolean().notRequired(),
      additionalCitizenship: Yup.string().when('citizen', {
        is: true,
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      obtainedVisa: Yup.string().notRequired(),
      visaGrantNumber: Yup.string().when('obtainedVisa', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
    }),
    nationalIdentityCard: Yup.object().shape({
      hasNationalIdentityCard: Yup.string().required('required'),
      familyName: Yup.string().when('hasNationalIdentityCard', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      givenName: Yup.string().when('hasNationalIdentityCard', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      countryOfIssue: Yup.string().when('hasNationalIdentityCard', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      identificationNumber: Yup.string().when('hasNationalIdentityCard', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
    }),
    contactDetails: Yup.object().shape({
      address: Yup.string().required('Address is required'),
      houseNumber: Yup.string().required('House number is required'),
      apartmentNumber: Yup.string().required('Apartment number is required'),
      zipPostalCode: Yup.string().required('ZIP/Postal code is required'),
      cityTown: Yup.string().required('City/Town is required'),
      provinceState: Yup.string().required('Province/State is required'),
      countryTerritory: Yup.string().required('Country/Territory is required'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
        .required('Mobile is required'),

      isPostalAddressSameAsResidentialAddress: Yup.string().required(),
      addressPostal: Yup.string().when(
        'isPostalAddressSameAsResidentialAddress',
        {
          is: 'no',
          then: schema => schema.required('Address is required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
      houseNumberPostal: Yup.string().when(
        'isPostalAddressSameAsResidentialAddress',
        {
          is: 'no',
          then: schema => schema.required('House number is required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
      apartmentNumberPostal: Yup.string().when(
        'isPostalAddressSameAsResidentialAddress',
        {
          is: 'no',
          then: schema => schema.required('Apartment number is required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
      zipPostalCodePostal: Yup.string().when(
        'isPostalAddressSameAsResidentialAddress',
        {
          is: 'no',
          then: schema => schema.required('ZIP/Postal code is required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
      cityTownPostal: Yup.string().when(
        'isPostalAddressSameAsResidentialAddress',
        {
          is: 'no',
          then: schema => schema.required('City/Town is required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
      provinceStatePostal: Yup.string().when(
        'isPostalAddressSameAsResidentialAddress',
        {
          is: 'no',
          then: schema => schema.required('Province/State is required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
      countryTerritoryPostal: Yup.string().when(
        'isPostalAddressSameAsResidentialAddress',
        {
          is: 'no',
          then: schema => schema.required('Country/Territory is required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
      phoneNumberPostal: Yup.string().when(
        'isPostalAddressSameAsResidentialAddress',
        {
          is: 'no',
          then: schema =>
            schema
              .matches(
                /^[0-9]{10}$/,
                'Mobile number must be a valid 10-digit number'
              )
              .required('Mobile is required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
    }),
    backgroundQuestions: Yup.object().shape({
      criminalOffence: Yup.string().notRequired(),
      criminalOffenceDetails: Yup.string().when('criminalOffence', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      offenceCharge: Yup.string().notRequired(),
      offenceChargeDetails: Yup.string().when('offenceCharge', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
    }),
    vatInvoice: Yup.object().shape({
      needVatInvoice: Yup.boolean().notRequired(),
      taxIdentificationNumber: Yup.string().when('needVatInvoice', {
        is: true,
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      companyName: Yup.string().when('needVatInvoice', {
        is: true,
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      companyCountry: Yup.string().when('needVatInvoice', {
        is: true,
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      companyCity: Yup.string().when('needVatInvoice', {
        is: true,
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      companyPostal: Yup.string().when('needVatInvoice', {
        is: true,
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      companyStreet: Yup.string().when('needVatInvoice', {
        is: true,
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
    }),
    travelInsurance: Yup.object().shape({
      isTravelInsurance: Yup.string().notRequired(),
      startDate: Yup.date().when('isTravelInsurance', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      returnDate: Yup.date().when('isTravelInsurance', {
        is: 'yes',
        then: schema => schema.required('required'),
        otherwise: schema => schema.notRequired(),
      }),
      insuranceFee: Yup.string().notRequired(),

      // travelInsuranceTermsAndConditions: Yup.boolean().oneOf(
      //   [true],
      //   'Must accept terms and conditions'
      // ),

      travelInsuranceTermsAndConditions: Yup.boolean().when(
        'isTravelInsurance',
        {
          is: 'yes',
          then: schema =>
            schema
              .oneOf([true], 'Must accept terms and conditions')
              .required('required'),
          otherwise: schema => schema.notRequired(),
        }
      ),
    }),

    passportDocuments: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Passport is required'),
    passportSizePhoto: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Passport size photo is required'),
    bankStatementPaySlips: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Bank statement pay slips is required'),
    businessCard: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Business card is required'),
    invitationLetter: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Invitation letter is required'),
    travelAndHealthInsurance: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Travel and health insurance is required'),
    policeCertificate: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Police certificate is required'),
    medicalCertificate: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Medical certificate is required'),
    additionalDocuments: Yup.array()
      .of(Yup.mixed())
      .min(1)
      .required('Additional documents is required'),

    termsAndConditions: Yup.boolean().oneOf(
      [true],
      'Must accept terms and conditions'
    ),
  }),
  initialValues: {
    travelDetails: {
      purposeOfStay: '',
      plannedDate: '',
      passengerNationality: '',
      portOfArrival: '',
    },
    personalDetails: {
      givenName: '',
      surnameFamilyName: '',
      emailAddress: '',
      confirmEmailAddress: '',
      dateOfBirth: '',
      countryTerritoryOfBirth: '',
      cityOfBirth: '',
      maritalStatus: '',
      gender: '',
      isPostalAddressSameAsResidentialAddress: '',
    },
    passportDetails: {
      passportNumber: '',
      issuingAuthority: '',
      dateOfIssue: '',
      dateOfExpiry: '',
      citizen: false,
      additionalCitizenship: '',
      obtainedVisa: 'no',
      visaGrantNumber: '',
    },
    nationalIdentityCard: {
      hasNationalIdentityCard: 'no',
      familyName: '',
      givenName: '',
      countryOfIssue: '',
      identificationNumber: '',
    },
    contactDetails: {
      address: '',
      houseNumber: '',
      apartmentNumber: '',
      zipPostalCode: '',
      cityTown: '',
      provinceState: '',
      countryTerritory: '',
      phoneNumber: '',
      isPostalAddressSameAsResidentialAddress: '',
      addressPostal: '',
      houseNumberPostal: '',
      apartmentNumberPostal: '',
      zipPostalCodePostal: '',
      cityTownPostal: '',
      provinceStatePostal: '',
      countryTerritoryPostal: '',
      phoneNumberPostal: '',
    },
    backgroundQuestions: {
      criminalOffence: 'no',
      criminalOffenceDetails: '',
      offenceCharge: 'no',
      offenceChargeDetails: '',
    },
    vatInvoice: {
      needVatInvoice: false,
      taxIdentificationNumber: '',
      companyName: '',
      companyCountry: '',
      companyCity: '',
      companyPostal: '',
      companyStreet: '',
    },
    travelInsurance: {
      isTravelInsurance: 'no',
      startDate: '',
      returnDate: '',
      insuranceFee: '',
      travelInsuranceTermsAndConditions: false,
    },

    passportDocuments: [],
    passportSizePhoto: [],
    bankStatementPaySlips: [],
    businessCard: [],
    invitationLetter: [],
    travelAndHealthInsurance: [],
    policeCertificate: [],
    medicalCertificate: [],
    additionalDocuments: [],

    termsAndConditions: false,
  },
};
