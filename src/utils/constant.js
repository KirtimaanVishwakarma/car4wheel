export const contactForm = [
  {
    label: "Full Name",
    type: "text",
    id: "fullName",
    placeholder: "Enter your full name",
  },
  {
    id: "contactNumber",
    span: "two",
    type: "number",
    label: "Phone",
    placeholder: "+91",
  },
  {
    label: "Email(Optional)",
    type: "email",
    span: "two",
    id: "email",
    placeholder: "Enter your email id",
  },
  {
    label: "Subject",
    type: "text",
    id: "subject",
    placeholder: "Write Something...",
  },
  {
    label: "Message",
    type: "textarea",
    id: "message",
    placeholder: "Write Something...",
  },
];

export const offerForm = [
  {
    id: "brand",
    label: "Brand",
    type: "select",
    span: "one",
    placeholder: "select brand",
    options: [
      { label: "Select Brand", value: "" },
      { label: "Maruti", value: "Maruti" },
      { label: "Toyota", value: "Toyota" },
    ],
  },
  {
    id: "Modal",
    label: "Modal",
    type: "select",
    span: "one",
    placeholder: "select modal",
    options: [
      { label: "Select Brand", value: "" },
      { label: "brezza", value: "Brezza" },
      { label: "blenza", value: "blenza" },
    ],
  },
  {
    id: "Engine",
    label: "Engine",
    span: "one",
    type: "select",
    placeholder: "select engine",
    options: [
      { label: "Select Enginen Type", value: "" },
      { label: "1500cc", value: "1500cc" },
      { label: "2000cc", value: "2000cc" },
    ],
  },
];
export const homeForm = [
  {
    id: "budget",
    label: "Select Budget (in Lakhs)",
    type: "select",
    placeholder: "Ex: 1-5 lakhs",
    options: [
      { label: "1-3 Lakh", value: "100000-300000" },
      { label: "4-6 Lakh", value: "400000-600000" },
      { label: "7-9 Lakh", value: "700000-900000" },
      { label: "Above 10 Lakh", value: "1000000" },
    ],
  },
  {
    id: "vehicles",
    label: "Select Vehicle",
    type: "select",
    placeholder: "Ex: Sedan",
    options: [
      { label: "Hatchback", value: "hatchback" },
      { label: "Sedan", value: "sedan" },
      { label: "Wagon", value: "wagon" },
      { label: "SUV", value: "suv" },
      { label: "Compact Car", value: "Compact" },
      { label: "Van", value: "van" },
    ],
  },
];
export const logInForm = [
  {
    id: "email",
    type: "email",
    label: "Enter Your email address.",
    placeholder: "Type email",
  },
  {
    id: "password",
    type: "password",
    label: "Enter Password",
    placeholder: "Password",
  },
];

export const auctionForm = [
  {
    id: "name",
    type: "text",
    label: "Name",
    placeholder: "Your Name",
  },
  {
    id: "contactNumber",
    type: "number",
    label: "Contact Number",
    placeholder: "+91",
  },
  {
    id: "email",
    type: "email",
    label: "Email Id",
    placeholder: "example@gmail.com",
  },
  {
    id: "message",
    type: "textarea",
    label: "Message",
    placeholder: "Write your message here...",
  },
];

export const BrandForm = [
  {
    id: "name",
    type: "text",
    label: "Brand Name",
    placeholder: "Enter Brand Name",
  },
  {
    id: "file",
    type: "file",
    label: "Brand Logo",
  },
];

export const carForm = [
  {
    id: "brand",
    label: "Brand",
    type: "select",
    span: "two",
    placeholder: "Select Brand",
    options: [
      { label: "Maruti", value: "Maruti" },
      { label: "Toyota", value: "Toyota" },
    ],
  },
  {
    id: "model",
    span: "two",
    type: "text",
    label: "Model Name",
    placeholder: "Ex. Maruti Baleno Delta CNG 1.2L 5MT",
  },
  {
    id: "bodyType",
    label: "Body Type",
    type: "select",
    span: "two",
    placeholder: "Select Body",
    options: [
      { label: "Hatchback", value: "hatchback" },
      { label: "Sedan", value: "sedan" },
      { label: "Wagon", value: "wagon" },
      { label: "SUV", value: "suv" },
      { label: "Compact Car", value: "Compact" },
      { label: "Van", value: "van" },
    ],
  },
  {
    id: "modelYear",
    span: "two",
    type: "number",
    label: "Model Year",
    placeholder: "Ex. 2024",
  },
  {
    id: "engineSize",
    type: "number",
    span: "two",
    label: "Engine Size",
    placeholder: "Ex. 3.5 L",
  },
  {
    id: "mileage",
    type: "number",
    span: "two",
    label: "Mileage",
    placeholder: "Ex. 25 kmpl",
  },
  {
    id: "odometer",
    type: "number",
    span: "two",
    label: "Odometer",
    placeholder: "Ex. 12000 km",
  },
  {
    id: "engine",
    type: "number",
    span: "two",
    label: "Engine",
    placeholder: "Ex. 1100 cc",
  },
  {
    id: "color",
    type: "text",
    label: "Color",
    span: "two",
    placeholder: "Ex. sky blue",
  },
  {
    id: "cylinder",
    type: "number",
    label: "Cylinder",
    span: "two",
    placeholder: "Ex. 03",
  },
  {
    id: "price",
    type: "number",
    label: "Price",
    span: "two",
    placeholder: "Ex. 4,50,000 lacs",
  },
  {
    id: "fuelType",
    label: "Fuel Type",
    type: "select",
    span: "two",
    placeholder: "Ex. Petrol+CNG",
    options: [
      { label: "Petrol", value: "petrol" },
      { label: "Diesel", value: "diesel" },
      { label: "Petrol+CNG", value: "Petrol+CNG" },
      { label: "CNG", value: "cng" },
      { label: "Electric", value: "electric" },
    ],
  },
  {
    id: "doors",
    type: "number",
    span: "two",
    label: "Doors",
    placeholder: "Ex. 04",
  },
  {
    id: "condition",
    type: "text",
    span: "two",
    label: "Condition",
    placeholder: "Ex. Used Car",
  },
  {
    id: "repaire",
    label: "Repaired",
    type: "select",
    span: "two",
    placeholder: "Select repaire status",
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
  },
  {
    id: "steering",
    label: "Steering Side",
    type: "select",
    span: "two",
    placeholder: "Select Steering",
    options: [
      { label: "Left", value: "left" },
      { label: "Right", value: "right" },
    ],
  },
  {
    id: "capacity",
    type: "number",
    span: "two",
    label: "Capacity",
    placeholder: "Ex. 04",
  },
  {
    id: "transmission",
    type: "text",
    span: "two",
    label: "Transmission",
    placeholder: "Ex. Manual",
  },
  {
    id: "wheel",
    type: "number",
    span: "one",
    label: "Wheels",
    placeholder: "Ex. 04",
  },
  {
    id: "valveGear",
    type: "text",
    span: "one",
    label: "Valve Gear",
    placeholder: "Ex. DOHC with VVT",
  },
  {
    id: "induction",
    type: "text",
    span: "one",
    label: "Induction",
    placeholder: "Ex. Aspirated",
  },
  {
    id: "fuleInjection",
    type: "text",
    span: "one",
    label: "Fule Injection",
    placeholder: "Ex. Direct Injection",
  },
  {
    id: "engineLocation",
    label: "Engine Location",
    type: "select",
    span: "one",
    placeholder: "select Engine Location",
    options: [
      { label: "front", value: "front" },
      { label: "back", value: "back" },
    ],
  },
  {
    id: "power",
    type: "number",
    span: "one",
    label: "Power",
    placeholder: "Ex. 140 kw 7000 rpm",
  },
  {
    id: "feature",
    type: "multiInput",
    label: "Features",
  },
  {
    id: "file",
    type: "file",
    label: "Car Image",
  },
];
export const ReviewForm = [
  {
    id: "customerName",
    type: "text",
    label: "Customer Name",
    placeholder: "Enter Customer Name",
  },
  {
    id: "brand",
    label: "Brand",
    type: "select",
    span: "two",
    placeholder: "Select Brand",
    options: [
      { label: "Maruti", value: "Maruti" },
      { label: "Toyota", value: "Toyota" },
    ],
  },
  {
    id: "model",
    type: "text",
    span: "two",
    label: "Model Name",
    placeholder: "Enter Model Name",
  },
  {
    label: "Review",
    type: "textarea",
    id: "review",
    placeholder: "Write Something...",
  },
  {
    id: "file",
    type: "file",
    label: "Brand Logo",
  },
];

export const AppyOfferForm = [
  {
    label: "Discount Percentage",
    type: "number",
    id: "discountPercentage",
    placeholder: "Enter discount %",
  },
  {
    label: "Offer Start",
    type: "date",
    id: "offerStartDate",
    placeholder: "Offer Start Date",
  },
  {
    label: "Offer Ends",
    type: "date",
    id: "offerEndDate",
    placeholder: "Offer End Date",
  },
];

export const carStatus = [
  {
    id: "status",
    label: "Select Car Status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Recent Launched", value: "recent" },
      { label: "Top Rated", value: "top-rated" },
      { label: "Most Searched", value: "most-searched" },
    ],
  },
];
