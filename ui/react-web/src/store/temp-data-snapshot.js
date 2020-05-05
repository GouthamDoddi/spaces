
export default {
  landscape: {
    1: {
      title: 'Policy renewal backlog',
      subtitle: 'Policies to expire in next 6 months',
      space: 'fs',
      type: 'value',
      progress: 14,
      max: 101
    },
    2: {
      title: 'Business compliance index',
      subtitle: 'Business compliance competitive index',
      space: 'cps',
      type: 'value',
      progress: 42,
      max: 55
    },
    3: {
      title: 'Overall compliance',
      subtitle: 'Overall compliance percentage',
      space: 'cps',
      type: 'percentage',
      progress: 35,
      max: 100
    },
    4: {
      title: 'Next Policy to expire',
      subtitle: 'National Information Assurance 2.0',
      space: 'as',
      type: 'date',
      progress: 170,
      max: 180,
      date: '18 May 2020'
    },
    5: {
      title: 'Policy refresh',
      subtitle: 'Policies renewed in last 6 months',
      space: 'fs',
      type: 'value',
      progress: 19,
      max: 101,
    },
    6: {
      title: 'Dead policies',
      subtitle: 'Policies with Zero compliance in last 12 months',
      space: 'as',
      type: 'percentage',
      progress: 5,
      max: 100,
    }
  },
  policy: {
    1: {
      title: 'Backlog count',
      subtitle: 'Count of qualfied Policy backlog entries',
      space: 'fs',
      type: 'value',
      progress: 9,
      max: 100,
    },
    2: {
      title: 'Petitions',
      subtitle: 'Count of qualfied Policy Petition ',
      space: 'fs',
      type: 'value',
      progress: 5,
      max: 100,

    },
    3: {
      title: 'Backlog count',
      subtitle: 'Count of qualfied Knowledge backlog entries',
      space: 'fs',
      type: 'percentage',
      progress: 10,
      max: 30,

    },
    4: {
      title: 'Policy Stage',
      subtitle: 'Current Stage of Policy and days to next milestone',
      space: 'gs',
      type: 'date',
      progress: 60,
      max: 80,
	    date:'18 May 2020'

    },
    5: {
      title: 'Budget Consumption',
      subtitle: 'Budget Utilized by Complaince Projects',
      space: 'fs',
      type: 'value',
      progress: 30,
      max: 100,
    }
  },
  'case-management': {
    1: {
      title: 'Clarification',
	    subtitle: 'Count of clarification cases attended',
      space: 'cps',
      type: 'value',
      progress: 14,
      max: 16,
    },
    2: {
      title: 'Support',
	    subtitle: 'Count of clarification cases attended',
      space: 'cps',
      type: 'value',
      progress: 13,
      max: 18,
    },
    3: {
  	  title: 'Suggestion',
	    subtitle: 'Count of clarification cases attended',
      space: 'cps',
      type: 'value',
      progress: 10,
      max: 20,
    },
    4: {
      title: 'Exemption',
	    subtitle: 'Count of clarification cases attended',
      space: 'Compliance',
      type: 'value',
      progress: 8,
      max: 14,
    },
    5: {
	    title: 'Policy Backlog',
	    subtitle: 'Count of cases converted into policy backlog',
      space: 'Compliance',
      type: 'value',
      progress: 5,
      max: 20,
    },
    6: {
	    title: 'Knowledge Backlog',
	    subtitle: 'Count of cases converted into knowledge backlog',
      space: 'Compliance',
      type: 'value',
      progress: 8,
      max: 34,
    }
  },
  'compl-projects': {
    1: {
      title: 'Open Projects',
      subtitle: 'Compliance Projects Started',
      space: 'cps',
      type: 'value',
      progress: 75,
      max: 100,
    },
    2: {
	    title: 'Submited Projects',
	    subtitle: 'Compliance Projects Started',
      space: 'cps',
      type: 'value',
      progress: 30,
      max: 75,
    },
    3: {

	    title: 'Approved',
	    subtitle: 'Compliance Projects Approved by Committee',
      space: 'cps',
      type: 'value',
      progress: 18,
      max: 75,
    },
    4: {
	    title: 'Successful Audited',
	    subtitle: 'Compliance Projects Audited by Auditors',
      space: 'cps',
      type: 'value',
      progress: 9,
      max: 45
    },
    5: {
	    title: 'Failed Project',
	    subtitle: 'Compliance Projects that did not meet minimum compliance requirements',
      space: 'cps',
      type: 'value',
      progress: 0,
      max: 75
    }
  },
  'obj-outcomes': {
    1: {
      title: 'Objective Review',
      subtitle: 'Objective reviews done for completed Compliance Projects',
      space: 'gs',
      type: 'value',
      progress: 9,
      max: 18,
    },
    2: {
      title: 'Impact Review',
      subtitle: 'Impact reviews done for completed Compliance Projects',
      space: 'gs',
      type: 'value',
      progress: 3,
      max: 9,
    }
  },
  'compl-records': {
    1: {
      title: 'Mandatory',
      subtitle: 'Mandate Level M1: Mandatory without exception',
      space: 'fs',
      type: 'percentage',
      progress: 100,
      max: 100
    },
    2: {
      title: 'Mandatory(Exceptions allowed)',
      subtitle: 'Mandate Level M2: Mandatory with exception',
      space: 'fs',
      type: 'percentage',
      progress: 91,
      max: 100
    },

    3: {
      title: 'Guidelines',
      subtitle: 'Mandate Level M3: Optional compliance',
      space: 'fs',
      type: 'percentage',
      progress: 45,
      max: 100
    },

    4: {
      title: 'Next compliance date',
      subtitle: 'Due date for next compliance record submission',
      space: 'as',
      type: 'date',
      progress: 300,
      max: 375,
      date: '18 May 2021'
    },
    5: {
      title: 'Approved',
      subtitle: 'Policy compliance approved and audited',
      space: 'fs',
      type: 'value',
      progress: 7,
      max: 13,
    },
  }
}