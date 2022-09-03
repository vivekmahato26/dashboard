export const getTicketsQuery = `
    query Tickets{

    tickets {
      _id
      ticket_type
      topic
      first_message
      status
      service_agent
      chatLogs {
        _id
        user
        messages {
          _id
        }
        ticket {
          _id
        }
        createdAt
        updatedAt
      }
      files
      student {
        _id
        firstName
        userName
        lastName
        phone
        gender
        address {
          _id
        }
        dob
        createdAt
        updatedAt
        course {
          _id
        }
        batch {
          _id
        }
        subscription {
          _id
        }
        invoice {
          _id
        }
        tickets {
          _id
        }
        payments {
          _id
        }
        orders {
          _id
        }
        jobApp {
          _id
        }
        challanges {
          _id
        }
      }
      mentor {
        _id
        name
 
        chats {
          _id
        }
        course {
          _id
        }
        batch {
          _id
        }
     
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  
    }
`;
export const addTicketsMutation = `
    mutation addTickets($input:TicketsInput){
        addTickets(input:$input){
            __typename ... on res{
                msg
            }
            __typename ... on err{
                err
            }
        }
    }
`;
