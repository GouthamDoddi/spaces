import {createStore, createEvent} from 'effector'


import connectLocalStorage from "effector-localstorage/sync";


// export const elements = createStore({})
// export const snapshots = createStore()

// export const analysis = createStore([])

// export const analyzers = createStore([])


// export const elements = createStore()


// elements.on(add, (state, { bucket, id }) => {
//   const data = {}
//   data[bucket] = [...state[bucket], id]
//   return {...state, ...data}
// }).on(remove, (state, { bucket, id }) => {
//   const data = { [bucket]: state[bucket].filter((i) => i != id) }
//   return {...state, ...data}
// }).on(storageUpdated, (state, value) => value)

// elements.watch(counterLocalStorage)


function makeStore(type) {
  const add = createEvent('add')

  const remove = createEvent('remove')

  const storageUpdated = createEvent('storage updated')

  const counterLocalStorage = connectLocalStorage(`gov-${type}-elements`)
    .onError((err) => console.log(err))
    .onChange(storageUpdated)

  const defaultData = counterLocalStorage.init({
    snapshots: [],
    analysis: [],
    analyzers: []
  })

  const store = createStore(defaultData)

  store.watch(counterLocalStorage)

  store.on(add, (state, { bucket, id }) => {
    const data = {}
    data[bucket] = [...state[bucket], id]
    return {...state, ...data}
  }).on(remove, (state, { bucket, id }) => {
    const data = { [bucket]: state[bucket].filter((i) => i !== id) }
    return {...state, ...data}
  }).on(storageUpdated, (state, value) => value)

  return { store, add, remove }
}

export const policyElements = makeStore('policy')

export const landscapeElements = makeStore('landscape')

export const complienceElements = makeStore('compl')

export const caseElements = makeStore('case')

export const objElements =  makeStore('obj')

export const allElements = {
  policy: policyElements,
  landscape: landscapeElements,
  'compl-projects': complienceElements,
  'case-management': caseElements,
  'obj-outcomes': objElements,
}

export const elementOptions = {
  landscape: {
    snapshot: {
      1: {name: 'Policy expiry: 6 months', id: 1},
      2: {name: 'Compliance for business', id: 2},
      3: {name: 'Compliance percentage', id: 3},
      4: {name: 'Next policy to expire', id: 4},
      5: {name: 'Policy refresh: 6 months', id: 5},
      6: {name: 'Irrelevant policies', id: 6},
    },
    analysis: {
      1: { name: 'Policy Expiry Chart', desc: 'Policy count by Expiry', graph: 'bar', id: 1},
      2: { name: 'Policy Impact Area Chart', desc: 'Policy count by Impact Area', graph: 'bar', id: 2},
      3: { name: 'Policy Risk Chart', desc: 'Risk count by Policy Family', graph: 'bar', id: 3 }
    },
    analyzers: {
      1: {
            name: 'Compliance competitive index',  desc: 'Policy parameter count by benificiary',
            graph: 'stacked-bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
        },
      2: {
            name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
            graph: 'stacked-bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 2
        },
    }
  },
  policy:  {
    snapshot: {
      1: {name: 'Backlog count', id: 1},
      2: {name: 'Petitions', id: 2},
      3: {name: 'Expiry Date', id: 3},
      4: {name: 'Policy Stage', id: 4},
      5: {name: 'Budget Consumption', id: 5},
    },

    analysis: {
      1: { name: 'Ageing Chart', desc: 'Propagation  Projects/Tasks* by TAT and Feedback', graph: 'bar', id: 1},
      2: { name: 'Compliance Projects by sections', desc: 'Compliance Projects by sections', graph: 'bar', id: 2},
      3: { name: 'Budget Allocated & Utlized Chart', desc: 'Budget Allocated & Utlized Chart', graph: 'pie', id: 3 },
      4: { name: 'Collaboration Chart', desc: 'Collaboration Chart', graph: 'bar', id: 4 },
    },

    analyzers: {
      1: { name: 'Policy change index', desc: 'Backlog & Petition count by section', graph: 'bar', id: 1,
          filters: [[{name: 'All'}, {name: 'Critical'}]]
        },
      2: { name: 'Policy gap index', desc: 'Exception count by section', graph: 'bar', id: 2,
          filters: [
            [ {name: 'All'}, {name: 'High Impact'}],
            [ {name: 'All'}, {name: 'Mandate Level'}],
            [ {name: 'Policy'}, {name: 'Std'}, {name: 'Guideline'} ]
          ]
        },
    }
  },
  'compl-projects': {
    snapshot: {
      1: {name: 'Open Projects', id: 1},
      2: {name: 'Submited Projects', id: 2},
      3: {name: 'Approved', id: 3},
      4: {name: 'Successfully Audited', id: 4},
      5: {name: 'Failed Project', id: 5},

    },
    analysis: {
      1: { name: 'Compliance aging by TAT', desc: 'Compliance aging by TAT', graph: 'bar', id: 1},
      2: { name: 'Compliance Improvement Chart', desc: 'Compliance Improvement Chart', graph: 'stacked-bar', id: 2},
    },
    analyzers: {
      1: {
            name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
            graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
        },
    }
  },
  'case-management': {
    snapshot: {
      1: {name: 'Clarifications', id: 1},
      2: {name: 'Support', id: 2},
      3: {name: 'Suggestions', id: 3},
      4: {name: 'Exemption', id: 4},
      5: {name: 'Policy Backlog', id: 5},
      6: {name: 'Knowledge Backlog', id: 6}
    },
    analysis: {
      1: { name: 'Case aging by SLA by Type', desc: 'Case aging by SLA by Type', graph: 'stacked-bar', id: 1},
      2: { name: 'Cases Resulting in Backlog', desc: 'Cases Resulting in Backlog by (Policy Backlog/Knowledge Backlog)', graph: 'bar', id: 2},

    },
    analyzers: {
      1: {
            name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
            graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
        },
    }
  },
  'obj-outcomes': {
    snapshot: {
      1: {name: 'Objective Review', id: 1},
      2: {name: 'Impact Review', id: 2},

    },
    analysis: {
      1: { name: 'Objectives Survey participants', desc: 'Objectives Survey participants by beneficiary type', graph: 'bar', id: 1},
      2: { name: 'Impact Survey participants', desc: 'Impact Survey participants by beneficiary type:', graph: 'bar', id: 2},
    },
    analyzers: {
      1: {
            name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
            graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
        },
    }
  }
}

