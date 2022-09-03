
export const getBatchesQuery = `
query Query {
  batchs {
    _id
    name
    start
    end
    price
    offerId
    discount
    currentStatus
    course {
      _id
      course_name
      uploadedAt
      totalVideos
      totalAssignments
      totalProjects
      totalMilestones
      createdAt
      updatedAt
      status
    }
    student {
      _id
      firstName
      lastName
      userName
      phone
      image
      email
      password
      gender
      dob
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`

export const addBatchMutation = `
mutation addBatch($input: BatchInput) {
    addBatch (input:$input){
     __typename ... on res {
      msg
    }
     __typename ... on err {
      err
    }
  }
}
`