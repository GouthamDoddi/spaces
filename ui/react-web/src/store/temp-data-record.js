export default {
  1: {
    name: 'Section 1: Identity and Access Management',
    id: 1,
    user_ids: [1,2],
    description: 'Mandatory standards for NAS ',
    tags: ['BusinessAnalysis', 'IdentityManagement', 'SystemArchitecture'],
    cases: [
      {
        ticket_number: 1711,
        title: 'NAS Integration Request',
        descrition: 'Want to integrate our eServices portal with NAS Citizen directory',
        status: 'Granted'
      },
      {
        ticket_number: 2346,
        title: 'Biometric access',
        descrition: 'Utilizing device tokens to skip login',
        status: 'In Review'
      },
      {
        ticket_number: 2733,
        title: 'Token based Login',
        descrition: 'Retaining NAS tokens for 1-click login',
        status: 'Rejected'
      },            
    ],
    conversation: [
      {name: 'Laquita Elliott', msg: 'Are these mandatory ', updated_at: '15 April 2020'},
      {name: 'LTeng Jiangt', msg: 'No, these are best practices that we highly recommend compliance to it to facilitate future content interoperability', updated_at: '15 April 2020'},
      {name: 'U Elliott', msg: 'Team, Can we comply to these now without any impact on timelines', updated_at: '15 April 2020'}
    ],
  },
  2: {
    name: 'Section 3: Digital Payments',
    id: 2,
    user_ids: [1,2],
    description: 'Manadatory standards for MOTC payment gateway integration',
    tags: ['BusinessAnalysis', 'UserExperience', 'SystemArchitecture'],
    cases: [
      {
        ticket_number: 2345,
        title: 'Access',
        descrition: 'Want to integrate eServices portal with payment gateway',
        status: 'Granted'
      },
      {
        ticket_number: 2346,
        title: 'Token based Payment',
        descrition: 'Want the controller access for token based payment',
        status: 'In Review'
      },
      {
        ticket_number: 2555,
        title: 'Third Party payment',
        descrition: 'Using ApplePay, GooglePay and Amazon Paypal as payment options',
        status: 'Rejected'
      },            
    ],
    conversation: [
      {name: 'Laquita Elliott', msg: 'Are these mandatory ', updated_at: '15 April 2020'},
      {name: 'LTeng Jiangt', msg: 'No, these are best practices that we highly recommend compliance to it to facilitate future content interoperability', updated_at: '15 April 2020'},
      {name: 'U Elliott', msg: 'Team, Can we comply to these now without any impact on timelines', updated_at: '15 April 2020'}
    ],
  },
  3: {
    name: 'Section 4: User Data Management',
    id: 3,
    user_ids: [1,2],
    description: 'Privacy control norms for managing User profile, behaviour and payments',
    tags: ['BusinessAnalysis', 'UserExperience', 'SystemArchitecture'],
    cases: [
      {
        ticket_number: 2345,
        title: 'Title 1',
        descrition: 'The parametric data about the policy to identify, qualify, and manage across the lifecycle',
        status: 'Granted'
      },
      {
        ticket_number: 2346,
        title: 'Title 2',
        descrition: 'The parametric data about the policy to identify, qualify, and manage across the lifecycle',
        status: 'In Review'
      },
      {
        ticket_number: 2347,
        title: 'Title 3',
        descrition: 'The parametric data about the policy to identify, qualify, and manage across the lifecycle',
        status: 'Rejected'
      },            
    ],
    conversation: [
      {name: 'Laquita Elliott', msg: 'Are these mandatory ', updated_at: '15 April 2020'},
      {name: 'LTeng Jiangt', msg: 'No, these are best practices that we highly recommend compliance to it to facilitate future content interoperability', updated_at: '15 April 2020'},
      {name: 'U Elliott', msg: 'Team, Can we comply to these now without any impact on timelines', updated_at: '15 April 2020'}
    ],
  },
  4: {
    name: 'Section 6: Styleguide',
    id: 4,
    user_ids: [1,2],
    description: 'Guidelines for building the page templates',
    tags: ['UIDesign', 'UserExperience'],
    cases: [
      {
        ticket_number: 2345,
        title: 'Title 1',
        descrition: 'The parametric data about the policy to identify, qualify, and manage across the lifecycle',
        status: 'Granted'
      },
      {
        ticket_number: 2346,
        title: 'Title 2',
        descrition: 'The parametric data about the policy to identify, qualify, and manage across the lifecycle',
        status: 'In Review'
      },
      {
        ticket_number: 2347,
        title: 'Title 3',
        descrition: 'The parametric data about the policy to identify, qualify, and manage across the lifecycle',
        status: 'Rejected'
      },            
    ],
    conversation: [
      {name: 'Laquita Elliott', msg: 'Are these mandatory ', updated_at: '15 April 2020'},
      {name: 'LTeng Jiangt', msg: 'No, these are best practices that we highly recommend compliance to it to facilitate future content interoperability', updated_at: '15 April 2020'},
      {name: 'U Elliott', msg: 'Team, Can we comply to these now without any impact on timelines', updated_at: '15 April 2020'}
    ],
  }
}