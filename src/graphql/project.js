
export const getProjectQuery = `
query Query {
    projects {
      _id
      projectSerialNo
      tasks
      title
      description
      createdAt
      updatedAt
    }
}
`

export const addProjectMutation = `
mutation Mutation($input: ProjectInput) {
    addProject(input: $input) {
     __typename ... on res {
      msg
    }
     __typename ... on err {
      err
    }
  }
}
`