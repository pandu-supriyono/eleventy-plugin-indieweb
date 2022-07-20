const hCardPropertyMappings = {
  name: "p-name",
  honorificPrefix: "p-honorific-prefix",
  givenName: "p-given-name",
  additionalName: "p-additional-name",
  familyName: "p-family-name",
  honorificSuffix: "p-honorific-suffix",
  nickname: "p-nickname",
  email: {
    element: "a",
    property: "u-email",
    attrs: {
      href: (email) =>
      typeof email === "string"
        ? email.startsWith("mailto:")
          ? email
          : `mailto:${email}`
        : email,
    }
  },
  logo: {
    element: "img",
    property: "u-logo",
  },
  photo: {
    element: "img",
    property: "u-photo",
  },
  url: {
    element: "a",
    property: "u-url",
  },
  uid: {
    element: "a",
    property: "u-uid",
  },
  category: "p-category",
  adr: "p-adr",
  postOfficeBox: "p-post-office-box",
  extendedAddress: "p-extended-address",
  streetAddress: "p-street-address",
  locality: "p-locality",
  region: "p-region",
  postalCode: "p-postal-code",
  countryName: "p-country-name",
  label: "p-label",
  tel: "p-tel",
  note: "p-note",
  dtBday: {
    element: "time",
    property: "dt-bday",
  },
  org: "p-org",
  jobTitle: "p-job-title",
  role: "p-role",
  sex: "p-sex",
  genderIdentity: "p-gender-identity",
  dtAnniversary: {
    element: "time",
    property: "dt-anniversary",
  },
};


module.exports = hCardPropertyMappings