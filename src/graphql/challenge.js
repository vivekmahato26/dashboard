
export const getChallengeQuery = `
query Query {
  challenges {
    _id
    project
    tasks
    objective
    title
    description
    images
    solution
    hints
    test_cases
    createdAt
    updatedAt
  }
}
`

export const addChallengeMutation = `
mutation AddChallenge($input: ChallengeInput) {
    addChallenge(input: $input){
     __typename ... on res {
      msg
    }
     __typename ... on err {
      err
    }
  }
}
`