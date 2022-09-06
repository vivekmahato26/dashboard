
export const getSectionQuery = `
query Query {
  sections {
    _id
    video
    videoId
    image
    title
    sourceCode {
      type
      code
    }
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
`

export const addSectionMutation = `
mutation addSection($input: SectionInput) {
    addSection (input:$input){
     __typename ... on res {
      msg
    }
     __typename ... on err {
      err
    }
  }
}
`

export const getSectionBySectionTitle = `query GetSectionBySectionTitle($sectionTitleId: String) {
  getSectionBySectionTitle(sectionTitleId: $sectionTitleId) {
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
}`;