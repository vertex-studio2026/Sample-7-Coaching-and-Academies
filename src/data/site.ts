import classroomImg from '../assets/classroom.jpg';
import studyHallImg from '../assets/study-hall.jpg';
import labImg from '../assets/lab.jpg';
import mentoringImg from '../assets/mentoring.jpg';

/**
 * Single source of truth for every number and contact detail on the site.
 * Change it here once and the whole page updates.
 *
 * House rule for this template: nothing on this page may claim something the
 * academy cannot show a parent on request. No "students trained" totals, no
 * selection percentages, no awards, no "only 2 seats left" timers. Everything
 * below is either an operating policy (checkable on a visit) or clearly marked
 * sample content (see the demo note in the footer).
 */
export const site = {
  name: 'EduVantage Academy',
  shortName: 'EduVantage',
  tagline: 'Small-batch coaching for Class 8–12 in Kothrud, Pune.',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsappNumber: '919876543210',
  email: 'admissions@eduvantage.in',
  emailHref: 'mailto:admissions@eduvantage.in',
  addressLines: ['2nd Floor, Shivsagar Plaza, Paud Road', 'Kothrud, Pune 411038'],
  locality: 'Kothrud, Pune',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=Kothrud%2C%20Pune',
  admissionLine: 'Admissions open · 2026–27 batches',
  nextBatch: 'Next batches start 12 January and 8 June 2027',
  replyPromise: 'We reply within one working day, Monday to Saturday.',
  demoPromise: 'Your first two classes are free. No card, no deposit.',
  studioCredit: { label: 'Site by Vertex Studio', href: 'https://vertex-studio-coral.vercel.app/' },
  hours: [
    { days: 'Monday – Friday', time: '8:00 am – 9:00 pm' },
    { days: 'Saturday', time: '8:00 am – 6:00 pm' },
    { days: 'Sunday', time: 'Closed (self-study hall open 9 am – 1 pm)' },
  ],
};

export const whatsappLink = (message = "Hi, I'd like details about the 2026–27 batches.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: 'Courses & fees', href: '#courses' },
  { label: 'How we teach', href: '#how-we-teach' },
  { label: 'Results', href: '#results' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'The centre', href: '#centre' },
  { label: 'FAQ', href: '#faq' },
];

export const heroFacts = [
  { value: '20', label: 'students per batch, capped' },
  { value: '2', label: 'free demo classes' },
  { value: 'Monthly', label: 'written progress report' },
  { value: '7 days', label: 'full fee refund window' },
];

export const commitments = [
  {
    title: 'Twenty seats, never more',
    body: 'Every batch is capped at 20 students. When a batch fills, we open a new one and publish the waiting list — we do not squeeze in two extra chairs.',
  },
  {
    title: 'One teacher, all year',
    body: 'Your subject teacher stays with the batch for the full academic year. If a teacher has to leave, parents are told in writing and the replacement takes at least four classes before you commit.',
  },
  {
    title: 'Every test, error logged',
    body: 'After each weekly test, students rewrite every wrong answer in an error-log notebook. The teacher signs it. That notebook — not a rank list — is what we revise from before the exam.',
  },
  {
    title: 'A written report every month',
    body: 'On the first Saturday we email parents a one-page report: test scores, attendance, and the chapters still pending. No login, no app, no dashboard to forget.',
  },
  {
    title: 'Doubt desk, no appointment',
    body: 'Walk in with doubts between 6:00 and 8:30 pm, Monday to Saturday. It is included in the fee and we do not cap it at five questions a day.',
  },
  {
    title: 'Missed a class? Watch it',
    body: 'Classes are recorded at the centre. If your child is absent or unwell, the recording is available for 30 days so the batch never moves on without them.',
  },
];

export const noList = [
  'No "guaranteed rank" or "100% selection" claims.',
  'No fake urgency — no "only 2 seats left" countdowns.',
  'No calls after 8 pm, and no repeated follow-ups.',
  'No selling or sharing your phone number with anyone.',
];

export const courses = [
  {
    id: 'jee',
    name: 'JEE Main & Advanced',
    who: 'Class 11–12 · Physics, Chemistry, Maths',
    duration: '2 years (Class 11 and 12)',
    batch: '20 students',
    fee: '₹48,000',
    feeUnit: 'per year',
    highlight: 'Most enquiries',
    summary:
      'Full PCM coaching for JEE Main and Advanced, built around weekly tests and an error log rather than a pile of extra worksheets.',
    includes: [
      'Physics, Chemistry & Maths — six classes a week',
      'Weekly test plus a signed error log',
      'NCERT, previous-year papers and printed material',
      'Doubt desk and class recordings included',
    ],
  },
  {
    id: 'neet',
    name: 'NEET (UG)',
    who: 'Class 11–12 · Physics, Chemistry, Biology',
    duration: '2 years (Class 11 and 12)',
    batch: '20 students',
    fee: '₹45,000',
    feeUnit: 'per year',
    highlight: 'Biology-heavy',
    summary:
      'NCERT-first NEET preparation with weekly biology recall tests, diagram practice and full-syllabus mocks from Class 12 term one.',
    includes: [
      'Physics, Chemistry & Biology — six classes a week',
      'Weekly NCERT recall test and diagram work',
      'Full-syllabus mock every month from term two',
      'Doubt desk and class recordings included',
    ],
  },
  {
    id: 'boards',
    name: 'Board classes (11 & 12)',
    who: 'Class 11–12 · CBSE and State board',
    duration: '1 year',
    batch: '20 students',
    fee: '₹26,000',
    feeUnit: 'per year',
    summary:
      'Board-only coaching for students who want strong marks without an entrance-exam workload. Answer-writing and previous papers are the core.',
    includes: [
      'All subjects of your stream',
      'Answer-writing practice every fortnight',
      'Previous 10 years of board papers',
      'Parent report and doubt desk included',
    ],
  },
  {
    id: 'foundation',
    name: 'Foundation (Class 8–10)',
    who: 'Class 8, 9 and 10',
    duration: '1 year',
    batch: '20 students',
    fee: '₹18,000',
    feeUnit: 'per year',
    highlight: 'Best value',
    summary:
      'Maths and science foundations for school exams, plus the reasoning and aptitude work that makes Class 11 entrance topics feel familiar.',
    includes: [
      'Maths and Science — four classes a week',
      'Weekly school-syllabus test',
      'Olympiad and NTSE practice sets',
      'Monthly parent report',
    ],
  },
  {
    id: 'crash',
    name: 'Crash course (January)',
    who: 'Class 12 · JEE or NEET',
    duration: '8 weeks (January–February)',
    batch: '20 students',
    fee: '₹22,000',
    feeUnit: 'one-time',
    highlight: 'Starts in Jan',
    summary:
      'Eight weeks of revision, previous-year papers and test analysis for students who have finished the syllabus and need structure, not new content.',
    includes: [
      'Full revision across three subjects',
      'Twelve previous-year papers, corrected in class',
      'Daily doubt hour in the last three weeks',
      'Recordings until the exam',
    ],
  },
  {
    id: 'test-series',
    name: 'Test series only',
    who: 'Class 11–12 · external students',
    duration: '1 year',
    batch: 'Open',
    fee: '₹6,000',
    feeUnit: 'per year',
    summary:
      'For students already enrolled elsewhere who want exam-pattern tests, corrected papers and an error log reviewed by our faculty.',
    includes: [
      'Weekly chapter tests, online or at the centre',
      'Corrected papers with written remarks',
      'Monthly full-syllabus mock',
      'One doubt session a month',
    ],
  },
];

export const feeNotes = [
  'Fees are per year and include printed material, test series, doubt desk and recordings.',
  'Pay in three instalments — April, August and December. No interest or processing fee.',
  'A 7% sibling discount applies to the second child, for the full duration of the course.',
  'Full refund if you withdraw within 7 days of the first class. After that, the unused months are refunded pro-rata.',
  'Not included: transport, board or entrance exam fees, and optional study tours.',
];

export const resultRules = [
  {
    title: 'We publish the denominator',
    body: 'Every result sheet states the batch strength and how many students actually wrote the exam. A rank with no batch size next to it is a slogan, not a result.',
  },
  {
    title: 'Names need written consent',
    body: 'We publish a student\u2019s name and score only after a parent signs a consent form. Until then, the row appears as a roll number.',
  },
  {
    title: 'We include the misses',
    body: 'Students who did not clear the cut-off are listed too. A sheet that only shows toppers tells you nothing about how the batch was taught.',
  },
];

export const sampleResultSheet = {
  batch: 'JEE 2024–26 · sample sheet',
  strength: 'Batch strength 20',
  sat: 'Wrote the exam 19',
  consent: 'Consent to publish 17 of 19',
  rows: [
    { roll: 'Roll 01', board: '88%', testAvg: '79%', change: '+14' },
    { roll: 'Roll 02', board: '84%', testAvg: '76%', change: '+11' },
    { roll: 'Roll 03', board: '79%', testAvg: '71%', change: '+9' },
    { roll: 'Roll 04', board: '74%', testAvg: '68%', change: '+6' },
    { roll: 'Roll 05', board: '71%', testAvg: '62%', change: '+3' },
    { roll: 'Roll 06', board: '68%', testAvg: '58%', change: '−1' },
  ],
};

export const faculty = [
  {
    name: 'Rohit Deshpande',
    initials: 'RD',
    role: 'Physics lead',
    qualification: 'M.Sc. Physics, Savitribai Phule Pune University',
    years: '14 years teaching Class 11–12',
    teaches: 'JEE, NEET and board physics',
    note: 'Known for mechanics and rotation problem sets.',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'Meera Joshi',
    initials: 'MJ',
    role: 'Mathematics lead',
    qualification: 'M.Sc. Mathematics, Fergusson College, Pune',
    years: '11 years teaching Class 11–12',
    teaches: 'JEE Main & Advanced, board maths',
    note: 'Runs the fortnightly calculus clinic for Class 12.',
    color: 'from-purple-600 to-purple-800',
  },
  {
    name: 'Aniket Kulkarni',
    initials: 'AK',
    role: 'Chemistry lead',
    qualification: 'M.Sc. Chemistry, University of Pune',
    years: '16 years teaching Class 11–12',
    teaches: 'JEE and NEET chemistry',
    note: 'Organic chemistry, with weekly reaction-mechanism drills.',
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    name: 'Sneha Patil',
    initials: 'SP',
    role: 'Biology lead',
    qualification: 'M.Sc. Zoology, University of Pune',
    years: '9 years teaching Class 11–12',
    teaches: 'NEET biology and board science',
    note: 'NCERT line-by-line revisions and diagram practice.',
    color: 'from-rose-600 to-rose-800',
  },
  {
    name: 'Vikram Shinde',
    initials: 'VS',
    role: 'Physics faculty',
    qualification: 'M.Sc. Physics, University of Pune',
    years: '8 years teaching Class 11–12',
    teaches: 'NEET and board physics',
    note: 'Handles the evening doubt desk on Tuesdays and Thursdays.',
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: 'Anjali Gokhale',
    initials: 'AG',
    role: 'Foundation faculty',
    qualification: 'B.Ed., M.Sc. Mathematics',
    years: '12 years teaching Class 8–10',
    teaches: 'Foundation maths and science',
    note: 'Builds the Class 8–10 Olympiad practice sets.',
    color: 'from-cyan-600 to-cyan-800',
  },
];

export const reviews = [
  {
    quote:
      'We switched in Class 11 because we wanted to know how our son was actually doing, not just whether he was attending. The one-page report every month is what we stay for.',
    attribution: 'Parent · Class 11, JEE batch',
    initials: 'PK',
    color: 'from-blue-500 to-blue-700',
  },
  {
    quote:
      'The error log felt like extra work for the first month. By the prelims I could revise my own mistakes instead of re-reading everything, and that changed how I studied.',
    attribution: 'Student · Class 12, NEET batch',
    initials: 'AS',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    quote:
      'They told us on the phone that a smaller batch would suit our daughter better and that we should try the demo before paying. Nobody has turned down a fee before, so we trusted that.',
    attribution: 'Parent · Class 9, Foundation batch',
    initials: 'MD',
    color: 'from-amber-500 to-amber-700',
  },
];

export const steps = [
  {
    step: '01',
    title: 'Visit or call — 15 minutes',
    body: 'Tell us the class, board and target exam. We will say plainly if a batch is a poor fit for your child, including when the answer is "not us".',
  },
  {
    step: '02',
    title: 'Two free demo classes',
    body: 'The student sits in a real class — not a special demo lecture. After two classes, the student decides. No deposit, no registration form.',
  },
  {
    step: '03',
    title: 'Diagnostic test and a written fee sheet',
    body: 'A short test places the student in the right batch. You get the fee, the batch schedule, the refund terms and the teacher-change policy in writing before you pay.',
  },
  {
    step: '04',
    title: 'Reports, doubt desk and exit',
    body: 'Monthly reports and parent calls through the year. If the student wants to leave, the refund is processed on the terms in that sheet — no conversation required.',
  },
];

export const includedInWriting = [
  'Fee receipt with the full amount and instalment dates',
  'Batch schedule and the name of every subject teacher',
  'Refund and batch-transfer terms',
  'What happens if a teacher changes mid-year',
];

export const facilities = [
  {
    image: classroomImg,
    title: 'Classrooms',
    caption: '20 desks per room, whiteboard and projector. No batch is allowed to add a 21st chair.',
    tag: 'Classrooms',
  },
  {
    image: studyHallImg,
    title: 'Self-study hall',
    caption: 'Eight carrels with lamps, open 8 am – 9 pm on class days and 9 am – 1 pm on Sundays.',
    tag: 'Study spaces',
  },
  {
    image: labImg,
    title: 'Practical benches',
    caption: 'Physics and chemistry benches for Class 11–12 practicals, shared with the school syllabus.',
    tag: 'Study spaces',
  },
  {
    image: mentoringImg,
    title: 'Parent meeting room',
    caption: 'Where the first-Saturday parent meetings happen — reports on the table, not on a screen.',
    tag: 'Parents',
  },
];

export const faqs = [
  {
    question: 'What does a year of coaching actually cost?',
    answer:
      'Fees run from ₹18,000 a year for the Class 8–10 foundation batch to ₹48,000 a year for two-year JEE coaching. Board-only classes are ₹26,000, NEET is ₹45,000, the January crash course is ₹22,000 for eight weeks, and test-series-only access is ₹6,000.\n\nEvery fee includes printed material, the test series, the doubt desk and class recordings. It does not include transport or exam fees. You can pay in three instalments with no extra charge, and there is a 7% sibling discount.',
  },
  {
    question: 'Can we try before paying?',
    answer:
      'Yes — two full classes, free, in the batch your child would actually join. We do not run a separate "demo lecture". After the second class you can walk away without a deposit or a registration form, and we will not call you repeatedly afterwards.',
  },
  {
    question: 'How big are the batches, really?',
    answer:
      'Twenty students, capped. We publish the batch list on the noticeboard, so you can count. When a batch is full we open another one and put names on a waiting list rather than adding chairs to an existing room.',
  },
  {
    question: 'What are the batch timings?',
    answer:
      'Weekday batches run 7:00–10:00 am or 4:00–7:00 pm. Saturday is 8:00 am–1:00 pm. Foundation batches run 5:00–7:00 pm on weekdays.\n\nThe doubt desk is open 6:00–8:30 pm, Monday to Saturday, and is included in the fee — no appointment needed.',
  },
  {
    question: 'What if my child misses classes?',
    answer:
      'Every class is recorded at the centre and stays available for 30 days. If a student misses more than a week — illness, exams, travel — the subject teacher sets a catch-up plan and signs it off. There is no extra charge for catch-up classes within the batch schedule.',
  },
  {
    question: 'Do you publish results?',
    answer:
      'Yes, and the sheet includes the batch strength, how many students wrote the exam, and the students who did not clear the cut-off. Names appear only with a parent\u2019s written consent; until then the row shows a roll number.\n\nYou can ask for the last cycle\u2019s sheet at the front desk or on WhatsApp and we will email the PDF the same day.',
  },
  {
    question: 'Who teaches, and what if a teacher leaves?',
    answer:
      'Every batch has one subject teacher for the academic year, named on your fee sheet. If a teacher leaves, parents get a written note, the replacement takes at least four classes before you have to commit, and you can switch batches or exit under the refund terms.',
  },
  {
    question: 'Is there online or hybrid teaching?',
    answer:
      'Only for the test series, which can be written online or at the centre. Regular classes are in person at Kothrud — we found that hybrid batches quietly become two different classes, so we do not offer them. Recordings cover absences.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'Cancel within 7 days of the first class and you get a full refund. After that, the unused full months are refunded pro-rata, minus the material already issued. The terms are on the fee sheet you sign before paying, and refunds are processed within 10 working days.',
  },
];

export const contactCourses = [
  'JEE Main & Advanced',
  'NEET (UG)',
  'Board classes (11 & 12)',
  'Foundation (Class 8–10)',
  'Crash course (January)',
  'Test series only',
  'Not sure yet — please advise',
];

export const demoNote =
  'Demo site — EduVantage is a fictional academy built as a portfolio sample. Fees, faculty profiles, reviews and contact details are illustrative and are replaced with verified information before launch.';
