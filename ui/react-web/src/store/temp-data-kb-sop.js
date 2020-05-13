export default {
  section1: [
    {
      q: 'How do we integrate with MOTC fact and asset checker?',
      ans: 'The MOTC Factcheck <http://MOTC.gov.qa/API/FactCheck.html> and Assetchecker <http://MOTC.gov.qa/API/AssetCheck.html> API details are provided in the links mentioned. The same link has details about the communication matrix that can be used for any clarifications'
    },
    {
      q: 'How do we integrate with MOTC payment gateway?',
      ans: 'Payment gateway integration details are present in <http://MOTC.gov.qa/API/Payments.html> Further the details of payment test data are provided into the same site'
    },
    {
      q: 'How do we integrate with MOTC NAS gateway?',
      ans: 'MOTC NAS gateway integration is mandatory and it has all 3 directories - Employee, Citizen, Business. The integration details of integration as based on which directory you need to link to'
    }
  ],
  section2: [
    {
      q: 'How do we perform a sanity check after integration?',
      ans: 'The sanity checklist scripts are available in Python and Ruby. Based on the source these checklist scripts can be downloaded and included '
    },
    {
      q: 'How can we validate data packets / JSON / XML created by agencies?',
      ans: 'Packet and payload validation service is provided in the API section. Agencies can directly send this as a request and get the report for the same.'
    }
  ],
  section3: [
    {
      q: 'Are test data sets available',
      ans: 'No test data is available but schemas and sample data is available and the same can be used to build internal data sets. Users are free to share these in collaboration space.'
    }
  ]
}