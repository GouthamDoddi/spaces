export default {
  section1: [
    {
      q: 'Is it advised to invest in Content analysis tools like sentiment analysis, NLP tools, fact checker etc. ?',
      ans: 'It depends on the volume of user generated content per day. If the internal moderation team is able to handle this load then these tools are not required'
    },
    {
      q: 'Why is it mandatory to integrate with MOTC factchecker and asset checker service ?',
      ans: 'MOTC has a centralized content respository of all government generated and approved content and any information that is contrary to it is automatically flagged'
    },
    {
      q: 'Can we use other third party factchecker and asset checker service ?',
      ans: 'Yes you can integrate with other MOTC approved third party chekers but it should be done as an additional governance step and not a replacement for MOTC service'
    }
  ],

  section2: [
    {
      q: 'Can my system store payment information to make easy payments ?',
      ans: 'Only payment tokens can be stored and actual payment instrument details storage is not allowed'
    },
    {
      q: 'Can I generate multiple payment receipts against a single payment request ?',
      ans: 'Yes the payment gateway allows for array payment request and each array element is used to generate a seperate payment receipt'
    }
  ],

  section3: [
    {
      q: 'Do we have to comply with the new E-Service coding and data standard for existing eservices also ?',
      ans: 'Yes All existing and new services will be indexed with the coding and also need to comply with common data dictationary '
    }
  ]
}