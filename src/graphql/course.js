
export const getCoursesQuery = `
query Courses {
  courses {
    _id
    course_name
    uploadedAt
    batch {
      _id
      name
      start
      end
      price
      offerId
      discount
      currentStatus
      createdAt
      updatedAt
    }
    sections {
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
      createdAt
      updatedAt
    }
    totalVideos
    totalAssignments
    totalProjects
    totalMilestones
    createdAt
    updatedAt
    status
  }
}
`

export const addCourseMutation = `
mutation addCourse($input: CourseInput) {
    addCourse (input:$input){
     __typename ... on res {
      msg
    }
     __typename ... on err {
      err
    }
  }
}
`