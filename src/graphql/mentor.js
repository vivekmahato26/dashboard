export const getMentorssQuery = `
query Users {
 
        getMentors {
          _id
          userID
          firstName
          userName
          lastName
          phone
          email
          password
          student {
            _id
          }
          employee
          mentor {
            _id
          }
          gender
          address {
            _id
            Flat
            HomeNo
            Street
            Town
            Village
            Landmark
            District
            State
            Pin
            Country
            createdAt
            updatedAt
          }
          dob
          createdAt
          updatedAt
          userType
          ticket {
            _id
          }
        }
      }
  
`;

export const addStudentsMutation = `
    mutation addStudent($input:StudentInput){
        addStudent(input:$input){
            __typename ... on res{
                msg
            }
            __typename ... on err{
                err
            }
        }
    }
`;
