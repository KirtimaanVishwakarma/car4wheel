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
