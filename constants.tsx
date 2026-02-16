
import { Project, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Dashboard',
    description: 'A high-performance analytics dashboard featuring real-time data visualization and customizable widget layouts.',
    category: 'Frontend',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT0kOFoD64nLPJRPCzF4R-6bUYCfL_SqOqkJGPGO39btAkKVdwdx4z6NklwQmJg-6ZQ7xKKJiPbvHv9sIETz56Rnb04pKwVzC7El-Y3KzuqJZiX8byajFm8_1xZvCX2bvltJ3a6Xj2hrkXcEQwsh9tBl-3Fs2qK6EG1-d8ajM73QtzLePj9jhZ9Cj83YA-1LHh4IJRrddsxbMOX2D0bd0nk1_8ANXV92g5tRFuV0koeNSBsDm5wjSSqF4YaRW62rhOrELclNFZNSY',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    links: { demo: '#', source: '#' }
  },
  {
    id: '2',
    title: 'NodeCore Engine',
    description: 'Scalable RESTful API architecture implementing JWT authentication and MongoDB aggregation pipelines.',
    category: 'Backend',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2m-gFv2Ln4Un03WY5gvsxlPNuHMgje6eRPuxW6pjLUxbj78z5IMu9wzwAquKb1ooaunpvKcwRV6-k9QAOsjVYTNskt5Uu3_-Z2LUp5bnYZy8rK7BrSj3jENFbNfU5BMQTqWwJAGif6Yg0rGCVOMqzvBY6HFJIDOg3rF29TC-VArB6FmwtPYZWZSR8Uly2jid7jDOwyxGqTkoqF7ozxdINWOKn3XIveFkrUwGV6_v8hSGiLiTU30zz1qCEmV-bhrH7szr8ahu4H4M',
    tags: ['Node.js', 'Express', 'MongoDB'],
    links: { docs: '#', source: '#' }
  },
  {
    id: '3',
    title: 'Nova Store',
    description: 'Complete e-commerce solution with Stripe integration, product management, and user profiles.',
    category: 'Full-stack',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD9JgylhQJPXLnl_d2Yv4Nh09oz76b9vkfCfMdcmkpJnD9omXVc08jP60HKPEYEE7UMbAxciudNuI80JWCZwnTmi4Fq7XpLCcO3KeZge18dneSRtSEb0vcBewed7yVQ63wQTVTNTQCEs-rLb4bhQdxaMIs9CLXOKXSJfYuu3OQBVKj_nmA5AluWxD4UH8PpWP3BLRNkVWSjjvS-GqqmQpY3hidftn8a_bFeNB1hWnI4ZsCx9DLO-Fuw1nwUoFWXqWDnGF_BX1Twqw',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    links: { app: '#', source: '#' }
  },
  {
    id: '4',
    title: 'DevPad Lite',
    description: 'A browser-based code editor with syntax highlighting and live preview for web languages.',
    category: 'Frontend',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiBr3tiA7Vm7yDHL5G7yfk61pZdUP974-fpKvPODPgdNdNFAj9-yo1BW4t2ZgsQTz3UsrRiyoxIf2cgUY2VYRgJ9U4vIoDe1-llGuvot1SpQR9HIzJT6kk8G0fwPwIwH3h-6yqwfsTB3mQpuX5l-jHm12ybXTiEZd0c_PnzwYhrTm_Iv89hDj_2nkUGDysMyhyQHy7zc25G6oq0oT9r7lKVjswqGj2VCuOuXY8jLBBdKt7UicCx4cXRKGy_hQgm4Cik6xlu0LVfhs',
    tags: ['TypeScript', 'Monaco Editor'],
    links: { demo: '#', source: '#' }
  },
  {
    id: '5',
    title: 'MetricFlow API',
    description: 'A data aggregation service that pulls metrics from multiple sources and provides unified JSON endpoints.',
    category: 'Backend',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHyOK1qxErptPqxigJzZNxPTPN1kOdhIkmd8uxOqDdViRygyw3i5ICYklQ79SfoPOJeHfiY2n03Ey4Gl72v7y7gWylkzOzdr8MLcTw9rB3f8LlrIilO-13543UPk8DansOPhGyEILO1e8DHOWbfQ-dw9WeDDSEVi7zfYJtN0_090MijmIbDDW5F0Da5TxG0B3pCaaXLfS-df_e7Kd4OOkhv3sJgYqjE_dNbYu6Z6SWNjUP88d2gs6RniDs167fUZbfmJCTdbR4bgE',
    tags: ['Python', 'FastAPI', 'Redis'],
    links: { docs: '#', source: '#' }
  },
  {
    id: '6',
    title: 'SocialConnect',
    description: 'Real-time social platform featuring instant messaging, image sharing, and dynamic feed updates.',
    category: 'Full-stack',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLG_7mbMQkFlAZk9DcY45NHYcbN_Azm8SChZmU3ncHEvngHZ-BNKLYoRe4gBvJ5c3xhBU0wQsIlK_O74j0dhpXQuSqZ_iapYSMRe1EZS1kWzuAE6Op3SrIzXQZPDePTO8lSaxQ-KKK66x1KDdAiIVJi2oEJv7i8zoBr5jypee5Jlz5vYzrtuxFEdfCZePrxSogf3kMNT5DKEBGjSA2Zqqg7M3OUwM1fD0rLqUpwUueT4bivvcYIVZj0zQBOHM9vl73qO1tj4Leggk',
    tags: ['React Native', 'Firebase', 'Socket.io'],
    links: { app: '#', source: '#' }
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: 'Frontend Development Intern',
    company: 'TechFlow Solutions Inc.',
    period: 'May 2023 — Aug 2023',
    type: 'professional',
    description: [
      'Collaborated with a senior team of 5 to migrate legacy PHP interfaces to React.js, improving page load speed by 40%.',
      'Implemented responsive design systems using Tailwind CSS, ensuring 100% compatibility across mobile and tablet devices.',
      'Assisted in integrating RESTful APIs for real-time data visualization on executive dashboards.'
    ],
    technologies: ['React', 'Tailwind', 'Axios', 'Bitbucket']
  },
  {
    id: 'exp2',
    title: 'Peer Tutor - Programming I & II',
    company: 'PNC Learning Center',
    period: 'Jan 2023 — Present',
    type: 'academic',
    description: [
      'Mentor over 15 students weekly in core Java and C# concepts, data structures, and debugging techniques.',
      'Created supplemental coding workshops focusing on Version Control (Git) best practices for freshmen.'
    ],
    technologies: ['Java', 'C#', 'Git', 'CLI']
  },
  {
    id: 'exp3',
    title: 'Customer Support Associate',
    company: 'RetailHub Logistics',
    period: 'May 2022 — Aug 2022',
    type: 'professional',
    description: [
      'Mastered problem-solving under pressure, resolving 50+ client tickets daily regarding shipment tracking and billing.',
      'Developed exceptional communication skills by translating complex logistics issues into understandable solutions for non-technical users.'
    ],
    technologies: ['Communication', 'Problem Solving', 'Documentation']
  }
];

export const EDUCATION: Education = {
  degree: 'BS in Computer Technology',
  school: 'Purdue University Northwest',
  gpa: '3.8/4.0',
  coursework: [
    'Advanced Web Programming',
    'Data Structures & Algorithms',
    'Database Management Systems'
  ]
};

export const IMAGES = {
  portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkacSkwmK7MJZ6D69oHZoGPwXR_xan3m7zdZtJp6EZO9KUWwsmWU8sVtmg2JbrhAH63TUjiQzcBMPogx2mxdqMPmPmyX6ZETiRU2b9pmYXRAOr3fqgV1Xq8MkM5Gmwn5G0pWPqWZXw4ncXQSRpw4EeOZI9n_Ke8RzzYOP5T11hMJq7EXatjM8pyNU5bmvNVjy248Z2QgjvQUfHfTdRI1Inqxmxr5HNCzN5DNunQaa8j7f6MV5kDzmy-jfvCnXBLifVqR7RDuOmnjU',
  resumePortrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwYmbGgXX_VRQ2rSr97OZrFOLD2PEK4W3qmH4o06iBF_7gydtys2UvW1BCfHJXjEYWQqGj9d-UIt5ULhDmhnsDq9I12vPIZXwsG5NHRvojWOmOoIySdO5QxE-ep01HpN8xo9AVB-Z368Un88q-QTVLvNZVUoJOPUAfxiOkSwoGYW28jZLnh5TYGxIZI9vSNHGXNCfKRS5AD63k0vG8UiQTSZS1g4GrDsPfy0glVW-1Wmk_f0or9bZr7Vaddhyfzw6FFGFqXW7ug4M',
  healthProject: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1eZl3KmnehAdPzxwxk8E9BWbk3lYnV61WQxBM4mBRoU3J2FKeagkpjsUrM5M93EPEytpN5On86ZESCNJCmCDu-MD4CT5oExWG3UGISD9mcpdfvMY5yq6pF1Xt-TNz--55VCOE4tVGSwRESdtEkNoICpUGwoDOW0FFzyOS0MYYODFZjnYtR5h_UXb_qR-J7Ytlt76Ivgtr6a450f7cEVREegdexmOAVFqgiwgv7e4B9zuTfkJn1ebUjq8syl6ilhd6PKs-fB7ttv4'
};
