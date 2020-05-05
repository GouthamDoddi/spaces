export default {
  landscape: {
    1: {
      data: [
        {key: 'Expired', data: 5, metadata: '#63D4CE'},
        {key: '0-6 Months', data: 14, metadata: '#CEF873'},
        {key: '6-12 Months', data: 21, metadata: '#91DAFD'},
        {key: '12-24 Months', data: 45, metadata: '#FF7F7E'},
        {key: '24-60 Months', data: 16, metadata: '#6C848F'}
      ]
    },
    2: {
      data: [
        {key: 'Project Cost', data: 11, metadata: '#63D4CE'},
        {key: 'Project Timeline', data: 23, metadata: '#CEF873'},
        {key: 'Obselence', data: 8, metadata: '#91DAFD'},
        {key: 'Capex', data: 19, metadata: '#FF7F7E'},
        {key: 'Opex', data: 34, metadata: '#6C848F'}
      ]
    },
    3: {
      data: [
        {key: 'Security', data: 9, metadata: '#63D4CE'},
        {key: 'Digitization', data: 11, metadata: '#CEF873'},
        {key: 'IOT', data: 4, metadata: '#91DAFD'},
        {key: 'Data governance', data: 5, metadata: '#FF7F7E'},
        {key: 'Technology landscape', data: 3, metadata: '#6C848F'},
        {key: 'Process compliance', data: 15, metadata: '#179EFF'}
      ]
    }

  },

  policy: { //SECTION # LANDSCAPE
    1: { //Pending projects by Stage
      data: [
        {key: 'Identification & Planning', data: 5, metadata: '#63D4CE'},
        {key: 'Design & Development', data: 14, metadata: '#CEF873'},
        {key: 'Policy Propagation', data: 21, metadata: '#91DAFD'},
        {key: 'Implementation', data: 45, metadata: '#FF7F7E'},
        {key: 'Adoption & Support', data: 16, metadata: '#6C848F'},
        {key: 'Regulation & Compliance', data: 16, metadata: '#6C848F'},
        {key: 'Review & Maintenance', data: 16, metadata: '#6C848F'}
      ]
    },

    2: { //Pending Learning by Section
      data: [
        {
          key: 'Website & Registration',
          "data": [
            {
              "key": "Courses & Quizes",
              "data": 44,
              matadata: '#63D4CE'
            },
            {
              "key": "Videos & Webcasts",
              "data": 31,
              matadata: '#91DAFD'
            }
          ]
        },
        {
          key: 'Access & Authentication',
          "data":[
            {
              "key": "Courses & Quizes",
              "data": 47,
              matadata: '#63D4CE'
            },
            {
              "key": "Videos & Webcasts",
              "data": 39,
              matadata: '#91DAFD'
            }
          ]
        },
        {
          key: 'Layout',
          "data":[
            {
              "key": "Courses & Quizes",
              "data": 22,
              matadata: '#63D4CE'
            },
            {
              "key": "Videos & Webcasts",
              "data": 31,
              matadata: '#91DAFD'
            }
          ]
        },
        {
          key: 'Stylesheet',
          "data":[
              {
                "key": "Courses & Quizes",
                "data": 39,
                matadata: '#63D4CE'
              },
              {
                "key": "Videos & Webcasts",
                "data": 48,
                matadata: '#91DAFD'
              }
            ]
        },

      ]
    },

  },
  'compl-projects': {
    1: { //Aging Chart for compliance projects
      data: [
        {key: 'Uninitiated', data: 23, metadata: '#63D4CE'},
        {key: 'Work in progress', data: 45, metadata: '#CEF873'},
        {key: 'Completed', data: 7, metadata: '#91DAFD'},
        {key: 'Submitted', data: 11, metadata: '#FF7F7E'},
        {key: 'Verified', data: 6, metadata: '#6C848F'},
        {key: 'Approved', data: 16, metadata: '#6C848F'},
        {key: 'Audited', data: 4, metadata: '#6C848F'}
      ]
    },
    2: { //Aging Chart for compliance projects
      data: [
        {
          key: 'Website & Registration',
          "data": [
            {
              "key": "2018",
              "data": 4.5,
              matadata: '#63D4CE'
            },
            {
              "key": "2019",
              "data": 5,
              matadata: '#91DAFD'
            }
          ]
        },
      ]
    },

  },
  'compl-records': {
    1: { //Compliance Scores
      data: [
        {key: 'Authentication & Authorization ', data: 5, metadata: '#63D4CE'},
        {key: 'Accessibility', data: 14, metadata: '#CEF873'},
        {key: 'Payments', data: 21, metadata: '#91DAFD'},
        {key: 'Styleguide', data: 45, metadata: '#FF7F7E'},
        {key: 'Website & Registration', data: 16, metadata: '#6C848F'}
      ]
    }
  },
  'case-management': {
    1: {
      data: [
        {
          key: 'Clarification Request',
          data: [
            {
              "key": "Actual",
              "data": 4.5,
              matadata: '#63D4CE'
            },
            {
              "key": "SLA",
              "data": 5,
              matadata: '#91DAFD'
            }
          ]
        },
        {
          key: 'Lower cost',
          data: [
            {
              "key": "Exception Request",
              "data": 4.5,
              matadata: '#63D4CE'
            },
            {
              "key": "SLA",
              "data": 5,
              matadata: '#91DAFD'
            }
          ]
        },
        {
          key: 'Relief Request',
          data:  [
            {
              "key": "Actual",
              "data": 4.5,
              matadata: '#63D4CE'
            },
            {
              "key": "SLA",
              "data": 5,
              matadata: '#91DAFD'
            }
          ]
        },
        {
          key: 'Support Request',
          data: [
            {
              "key": "Actual",
              "data": 4.5,
              matadata: '#63D4CE'
            },
            {
              "key": "SLA",
              "data": 5,
              matadata: '#91DAFD'
            }
          ]
        }
      ]
    },

    2: { //Case Backlogs
      data: [
        {key: 'Policy Backlog', data: 4, metadata: '#63D4CE'},
        {key: 'Exception Backlog', data: 3, metadata: '#CEF873'},
        {key: 'Support Backlog', data: 3, metadata: '#91DAFD'},
        {key: 'Knowledge tasks', data: 4, metadata: '#FF7F7E'},
        {key: 'Initiative Backlog', data: 3, metadata: '#6C848F'}
      ]
    }
  },
  'obj-outcomes': {
    1: { //Objectives
      data: [
        {key: 'Standardization', data: 4, metadata: '#63D4CE'},
        {key: 'Interoperability', data: 3, metadata: '#CEF873'},
        {key: 'Reusability', data: 3, metadata: '#91DAFD'},
        {key: 'Quality', data: 4, metadata: '#FF7F7E'},
        {key: 'Collaboration', data: 3, metadata: '#6C848F'}
      ]
    },

    2: { //Outcomes
      data: [
      {key: 'Shorter cycle time', data: [
          {
            "key": "2018",
            "data": 4.5,
            matadata: '#63D4CE'
          },
          {
            "key": "2019",
            "data": 5,
            matadata: '#91DAFD'
          }
        ]
      },
      {key: 'Lower cost', data: [
          {
            "key": "2018",
            "data": 4.5,
            matadata: '#63D4CE'
          },
          {
            "key": "2019",
            "data": 5,
            matadata: '#91DAFD'
          }
        ]
      },
        {key: 'Project failure', data:  [
          {
            "key": "2018",
            "data": 4.5,
            matadata: '#63D4CE'
          },
          {
            "key": "2019",
            "data": 5,
            matadata: '#91DAFD'
          }
        ]
      },
        {key: 'Opex', data: [
          {
            "key": "2018",
            "data": 4.5,
            matadata: '#63D4CE'
          },
          {
            "key": "2019",
            "data": 5,
            matadata: '#91DAFD'
          }
        ]
      }
      ]
    }

  }
}


        // {key: 'Expired', data: 5, color: '#63D4CE'},
        // {key: '0-6 Months', data: 14, color: '#CEF873'},
        // {key: '6-12 Months', data: 21, color: '#91DAFD'},
        // {key: '12-24 Months', data: 45, color: '#FF7F7E'},
        // {key: '24-60 Months', data: 16, color: '#6C848F'}