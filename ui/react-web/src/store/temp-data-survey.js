export default {
    1: {
      type: 'survey',
      total: 2,
      data: [
        {
          q: 'Question: Does the portal allow for user generated content like comments, blogs etc.?',
          ans:{
            type: 'radio',
            data: ['Yes', 'No']
          }
        },
        {
          q: 'How is this content moderated',
          ans:{
            type: 'radio',
            data: ['Manually by Content moderator', 'Manually by portal admin', 'Automatically flagged by Text Analysis']
          }
        },
      ]
    },

    2:  {
      type: 'Survey',
      total: 3,
      data: [
        {
          q: 'How is the login mechanism addressed?',
          ans:{
            type: 'radio',
            data: ['Internal LDAP', 'National Authentication', 'Third party LDAP']
          }
        },
        {
          q: 'Do you store sensitive information of the like - user profile, user credentials, payment, behaviour?',
          ans:{
            type: 'radio',
            data: ['Yes', 'No']
          }
        },
        {
          q: 'Does the portal share login / access with other non-government agencies?',
          ans:{
            type: 'radio',
            data: ['Yes', 'No']
          }
        },
      ]
    },
    3:  {
      type: 'survey',
      total: 2,
      data: [
        {
          q: 'Question 1?',
          ans:{
            type: 'radio',
            data: ['ans 1', 'ans 2']
          }
        },
        {
          q: 'Question 2?',
          ans:{
            type: 'radio',
            data: ['ans 1', 'ans 2', 'ans3']
          }
        },
      ]
    },
    4:  {
      type: 'survey',
      total: 2,
      data: [
        {
          q: 'Question 1?',
          ans:{
            type: 'radio',
            data: ['ans 1', 'ans 2']
          }
        },
        {
          q: 'Question 2?',
          ans:{
            type: 'radio',
            data: ['ans 1', 'ans 2', 'ans3']
          }
        },
      ]
    }
  }