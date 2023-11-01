export const contactForm = [
  {
    label: 'Full Name',
    type: 'text',
    id: 'fullName',
    placeholder: 'Enter your full name',
  },
  {
    label: 'Phone',
    type: 'number',
    span: 'two',
    id: 'PhoneNumber',
    placeholder: 'Enter your mobile number',
  },
  {
    label: 'Email(Optional)',
    type: 'email',
    span: 'two',
    id: 'email',
    placeholder: 'Enter your email id',
  },
  {
    label: 'Subject',
    type: 'text',
    id: 'Subject',
    placeholder: 'Write Something...',
  },
  {
    label: 'Message',
    type: 'textarea',
    id: 'message',
    placeholder: 'Write Something...',
  },
];


export const offerForm = [
  {id:'brand',
    label: 'Brand',
    type: 'select',
    span:'one',
    placeholder: 'select brand',
    options: [
      { label: 'Select Brand', value: '' },
      { label: 'Maruti', value: 'Maruti' },
      { label: 'Toyota', value: 'Toyota' },
    ],
  },
  {id:'Modal',
    label: 'Modal',
    type: 'select', span:'one',
    placeholder: 'select modal',
    options: [
      { label: 'Select Brand', value: '' },
      { label: 'brezza', value: 'Brezza' },
      { label: 'blenza', value: 'blenza' },
    ],
  },
  {id:'Engine',
    label: 'Engine',  span:'one',
    type: 'select',placeholder: 'select engine',
    options: [
      { label: 'Select Enginen Type', value: '' },
      { label: '1500cc', value: '1500cc' },
      { label: '2000cc', value: '2000cc' },
    ],
  },
];
export const homeForm=[
  {
    id: 'budget',
    label: 'Select Budget (in Lakhs)',
    type: 'select',
    placeholder: 'Ex: 1-5 lakhs',
    options: [
      {label: 'Select Budget',value:''},
      {label: '1-3 Lakh',value:'1-3'},
      {label: '4-6 Lakh',value:'4-6'},
      {label: '7-9 Lakh',value:'7-9'},
      {label: 'Above 10 Lakh',value:'above_10'}
    ]
  },
  {
    id:'vehicles',
    label:'Select Vehicle',
    type:'select', placeholder:'Ex: Sedan',
    options:[
      {label: 'Select Vehicle', value:''},
      {label: 'Sedan', value:'Sedan'},
      {label: 'Hachback', value:'Hachback'},
    ]
  }
]
export const logInForm=[
  {
    id:'email',
    type:'email',
    label:'Enter Your email address.',
    placeholder:'Type email'
  },
  {
    id:'password',
    type:'password',
    label:'Enter Password',
    placeholder:'Password'
  }
]

export const auctionForm=[
  {
    id:'name',
    type:'text',
    label:'Name',
    placeholder:'Your Name'
  },
{
  id:'contactNumber',
  type:'number',
  label:'Contact Number',
  placeholder:'+91'
  
},
{
  id:'email',
  type:'email',
  label:'Email Id',
  placeholder:'example@gmail.com'
},
{
  id:'message',
  type:'textarea',
  label:'Message',
  placeholder:'Write your message here...'
}
]