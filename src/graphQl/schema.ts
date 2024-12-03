export const typeDefs = `#graphql

  type LocalizedName {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
  }
  input LocalizedNameI {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
  }

  type NationalId {
    idNumber: String
    expiryDate: String
  }
  input NationalIdI {
    idNumber: String
    expiryDate: String
  }

  type Country {
    id: String
    name: String
  }
  input CountryI {
    id: String
    name: String
  }

  type Nationality {
    country: Country
    countryId: Int
  }
  input NationalityI {
    country: CountryI
    countryId: Int
  }

  type MaritalStatus {
    id: String
    name: String
  }
  input MaritalStatusI {
    id: String
    name: String
  }

  type User {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
    localizedName: LocalizedName
    nationalId: NationalId
    nationalities: [Nationality]
    maritalStatus: MaritalStatus
    dependants: Int
  }

  type Query {
    user(id: Int!): User
  }

  type Mutation {
    updateUser(id: Int!, edit: EditUser): User
  }

  input EditUser {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
    localizedName: LocalizedNameI
    nationalId: NationalIdI
    nationalities: [NationalityI]
    maritalStatus: MaritalStatusI
    dependants: Int
  }
`;

