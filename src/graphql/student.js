export const getStudentsQuery = `
query Student {

  students{
    _id
    firstName
    userName
    lastName
    phone
    email
    gender
    password
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
    course {
      _id
      courseName
      uploadedAt
      status
      batch {
        _id
      }
      section {
        _id
      }
      challange {
        _id
      }
      totalVideos
      totalAssignments
      totalProjects
      totalMilestones
      createdAt
      updatedAt
    }
    batch {
      _id
      name
      course {
        _id
      }
      student {
        _id
      }
      createdAt
      updatedAt
    }
    subscription {
      _id
      startDate
      endDate
      invoiceId
      order {
        _id
      }
      payment {
        _id
      }
      course {
        _id
      }
      student {
        _id
      }
      batches {
        _id
      }
      createdAt
      updatedAt
    }
    invoice {
      _id
      student {
        _id
      }
      subscriptions {
        _id
      }
      order {
        _id
      }
      createdAt
      updatedAt
    }
    tickets {
      _id
      ticket_type
      topic
      first_message
      status
      service_agent
      chatLogs {
        _id
      }
      files
      student {
        _id
      }
      mentor {
        _id
        name
      }
      createdAt
      updatedAt
    }
    payments {
      _id
      modeOfPay
      status
      amountCharged
      orderId
      details
      transactionId
      invoice {
        _id
      }
      student {
        _id
      }
      createdAt
      updatedAt
    }
    orders {
      _id
      courseId
      couponId
      totalAmount
      discount
      orderDate
      status
      billingAddress
      invoice {
        _id
      }
      batchId
      payment {
        _id
      }
      student {
        _id
      }
      createdAt
      updatedAt
    }
    jobApp {
      _id
      studentId
      job {
        _id
      }
      resume
      status
      createdAt
      updatedAt
      student {
        _id
      }
    }
    challanges {
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

      }
  
`;
// export const getStudentQuery = `
//       query student($id: String) {
//         student(_id: $id) {

//         }
//       }
// `;
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
