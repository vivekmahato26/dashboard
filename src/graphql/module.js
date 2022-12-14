
export const getModulesQuery = `
query Query {
  modules {
    _id
    title
    SectionTitle {
      _id
      title
      createdAt
      sectionType
      updatedAt
      description
      data {
        sectionId
        videoProgress
      }
      Section {
        _id
        video
        sourceCode {
          type
          code
        }
        image
        title
        about {
          title
          description
          subDesc
        }
        resources {
          type
          url
        }
        createdAt
        updatedAt
      }
    }
    Challenge {
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
    Project {
      _id
      projectSerialNo
      tasks
      title
      description
      createdAt
      updatedAt
    }
    courseID
    createdAt
    updatedAt
  }
}
`

export const addModulesMutation = `
mutation addModules($input: ModulesInput) {
    addModules (input:$input){
     __typename ... on res {
      msg
    }
     __typename ... on err {
      err
    }
  }
}
`

export const getModuleByCourse = `
query getModulesByCourse($courseId: String) {
  getModulesByCourse(courseId: $courseId) {
    
      _id
      title
      createdAt
      updatedAt
      courseID
      Challenge {
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
      Project {
        _id
        projectSerialNo
        tasks
        title
        description
        createdAt
        updatedAt
     
    }
    SectionTitle {
      _id
      title
    }
  }
}`;