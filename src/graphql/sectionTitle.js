
export const getSectionTitleQuery = `
query Query {
  sectionTitles {
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
}
`

export const addSectionTitleMutation = `
mutation addSectionTitle($input: SectionTitleInput) {
    addSectionTitle (input:$input){
     __typename ... on res {
      msg
    }
     __typename ... on err {
      err
    }
  }
}
`

export const getSectionTitleByModule = `query GetSectionTitleByModule($moduleId: String) {
  getSectionTitleByModule(moduleId: $moduleId) {
    _id
    title
    createdAt
    sectionType
    updatedAt
    description
    moduleID
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
      videoId
      createdAt
      updatedAt
      sectionTitleID
    }
  }
}`;