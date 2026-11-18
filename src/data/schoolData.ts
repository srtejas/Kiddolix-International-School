export interface SchoolBrand {
  name: string;
  fullName: string;
  establishedYear: string;
  neighborhood: string;
  city: string;
  primaryColor: string;
  brandPalette: {
    blue: string;
    pink: string;
    green: string;
    orange: string;
    yellow: string;
  };
  phone: string;
  phoneHref: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  visitingHours: string;
  schoolHours: string;
  mapsUrl: string;
}

export interface ProgramItem {
  id: string;
  name: string;
  ageGroup: string;
  schedule: string;
  ratio: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  dailyRhythm: { time: string; activity: string }[];
}

export type AnnouncementCategory = 'Admissions' | 'Events' | 'Health & Safety';

export interface AnnouncementItem {
  id: string;
  title: string;
  category: AnnouncementCategory;
  date: string;
  summary: string;
  fullNotice: string[];
  actionLabel?: string;
  actionPage?: 'contact' | 'programs' | 'about';
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface PhilosophyPillar {
  index: string;
  title: string;
  description: string;
}

export interface FacultyProfile {
  id: string;
  name: string;
  initials: string;
  accentColor: string;
  role: string;
  experience: string;
  qualification: string;
  bio: string;
  quote: string;
}

export const SCHOOL_IMAGES = {
  logo: '/assets/aistudio/image_2492799f.png',
  campusEntrance: '/assets/aistudio/image_422984b3.png',
  indianPreschoolClass:
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Indian_Preschool.jpg',
  indianPrePrimary:
    'https://upload.wikimedia.org/wikipedia/commons/7/78/Pre-pimary_school_in_India.jpg',
  indianPlayLearning:
    'https://upload.wikimedia.org/wikipedia/commons/8/80/Anganwadi_pre_school.jpg',
};

export const SCHOOL_BRAND: SchoolBrand = {
  name: 'Kiddolix',
  fullName: 'Kiddolix International Preschool',
  establishedYear: '2010',
  neighborhood: 'Annapoorneshwari Nagar, Nagarabhavi',
  city: 'Bengaluru',
  primaryColor: '#0284C7',
  brandPalette: {
    blue: '#0297DB',
    pink: '#E91E79',
    green: '#65A30D',
    orange: '#EA580C',
    yellow: '#EAB308',
  },
  phone: '90350 77701',
  phoneHref: 'tel:+919035077701',
  email: 'admissions@kiddolix.edu.in',
  addressLine1: '#No. 370/A, 3rd Main Road, RHCS Layout',
  addressLine2: 'Annapoorneshwari Nagar, Nagarabhavi, Bengaluru 560091',
  visitingHours: 'Monday – Saturday · 9:00 AM – 4:30 PM',
  schoolHours: '8:30 AM – 6:00 PM',
  mapsUrl: 'https://share.google/Mnw0c7ogzILrtDtOW',
};

export const HERO_MEDIA = {
  image: SCHOOL_IMAGES.campusEntrance,
  alt: 'Kiddolix International Preschool campus entrance in Annapoorneshwari Nagar, Nagarabhavi, Bengaluru',
};

export const SCHOOL_FACTS = [
  { value: 'Since 2010', label: 'Trusted Early Years Campus' },
  { value: '1:6', label: 'Teacher to Child Ratio' },
  { value: '1.8 – 6 Yrs', label: 'Playgroup through UKG' },
  { value: 'Daycare', label: '& Evening Activity Center' },
];

export const ABOUT_US = {
  headline: 'Nurturing confident, joyful learners in Bengaluru since 2010.',
  lead: 'Situated in RHCS Layout, Annapoorneshwari Nagar, Kiddolix International Preschool offers families in Nagarabhavi and West Bengaluru a warm, structured, play-led environment across Playgroup, Nursery, LKG, UKG, Daycare, and our Activity Center.',
  image: SCHOOL_IMAGES.indianPrePrimary,
  imageAlt: 'Indian pre-primary children engaged in joyful classroom activities',
  mission:
    'To nurture every child’s natural curiosity through play-based inquiry, emotional warmth, and foundational literacy and numeracy—helping children grow into confident, kind, and independent learners.',
  vision:
    'To be Nagarabhavi’s most trusted neighbourhood early-years school, where every parent feels heard, every teacher is mentored, and every child looks forward to each morning.',
  history: [
    {
      year: '2010',
      title: 'Founded in Annapoorneshwari Nagar, Bengaluru',
      description:
        'Opened our doors in RHCS Layout with a promise that every child is unique and deserves to be guided in a joyful, caring environment.',
    },
    {
      year: '2016',
      title: 'Expanded Daycare & Activity Center',
      description:
        'Added structured full-day care and after-school creative activity programs to support working families across Nagarabhavi and West Bengaluru.',
    },
    {
      year: '2022',
      title: 'NEP-Aligned Foundational Curriculum',
      description:
        'Aligned Playgroup, Nursery, LKG, and UKG learning stations with hands-on phonics, numeracy, storytelling, and creative expression.',
    },
    {
      year: '2026',
      title: 'Over 15 Years of Neighbourhood Trust',
      description:
        'Continuing to welcome generations of young learners with small batches, attentive teachers, and strong parent partnerships.',
    },
  ] as HistoryMilestone[],
  philosophy: [
    {
      index: '01.',
      title: 'Play-Led Discovery',
      description:
        'Children learn deepest when their hands and senses are engaged. We replace passive rote worksheets with wooden tactile materials, art stations, and guided discovery.',
    },
    {
      index: '02.',
      title: 'Every Child Is Unique',
      description:
        'Each child settles and grows at their own rhythm. Our gentle settling-in weeks and consistent classroom educators ensure every toddler feels secure and valued.',
    },
    {
      index: '03.',
      title: 'NEP-Aligned Foundations',
      description:
        'Our curriculum blends international early-years play pedagogy with strong foundational literacy, numeracy, and local cultural warmth.',
    },
    {
      index: '04.',
      title: 'Transparent Parent Partnership',
      description:
        'Parents are co-educators. Regular portfolio sharing, open conversations, and clear campus communication keep families connected to every milestone.',
    },
  ] as PhilosophyPillar[],
  faculty: [
    {
      id: 'savitha-narayanan',
      name: 'Mrs. Savitha Narayanan',
      initials: 'SN',
      accentColor: '#0297DB',
      role: 'Principal & Head of Early Years',
      experience: '16+ years in early education',
      qualification: 'M.A. Child Development · Montessori Certified',
      bio: 'Leads school culture, teacher mentoring, and parent settling-in conversations across Bengaluru early-years programs.',
      quote: 'Every child is unique, and we treat them according to their own joyful style.',
    },
    {
      id: 'meghna-kulkarni',
      name: 'Ms. Meghna Kulkarni',
      initials: 'MK',
      accentColor: '#65A30D',
      role: 'Preschool Curriculum Lead',
      experience: '10+ years in preschool pedagogy',
      qualification: 'AMI Montessori Diploma · B.Ed.',
      bio: 'Designs Kiddolix’s phonics, tactile numeracy, and NEP-aligned lesson plans while mentoring classroom educators weekly.',
      quote: 'Curiosity blossoms naturally when classrooms feel safe and unhurried.',
    },
    {
      id: 'karthik-gowda',
      name: 'Mr. Karthik Gowda',
      initials: 'KG',
      accentColor: '#E91E79',
      role: 'Activity Center & Arts Educator',
      experience: '8+ years with young learners',
      qualification: 'B.Ed. Early Childhood · Visual Arts Specialist',
      bio: 'Guides painting workshops, storytelling circles, music movement, and evening Activity Center clubs for young learners.',
      quote: 'Creative play builds focus, balance, and confidence all at once.',
    },
  ] as FacultyProfile[],
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    ageGroup: '1.8 – 2.8 Years',
    schedule: '9:00 AM – 12:00 PM',
    ratio: '1:5 Adult Ratio',
    headline: 'Gentle separation, sensory play, and early language discovery.',
    description:
      'Designed as a warm bridge from home to school. Children explore tactile learning toys, music circles, and unhurried social play at their own pace.',
    image: SCHOOL_IMAGES.indianPlayLearning,
    imageAlt: 'Indian preschool play-based sensory learning classroom',
    highlights: [
      'Gradual parent-assisted settling period during the first two weeks',
      'Bilingual storytelling in English and conversational Kannada',
      'Daily sensory, fine-motor, and color recognition games',
      'Structured mid-morning fruit and hydration breaks',
    ],
    dailyRhythm: [
      { time: '09:00 AM', activity: 'Warm welcome & free tactile shelf work' },
      { time: '09:45 AM', activity: 'Morning song circle & picture book story' },
      { time: '10:30 AM', activity: 'Fruit snack & guided movement play' },
      { time: '11:15 AM', activity: 'Sensory clay, blocks & goodbye rhyme' },
    ],
  },
  {
    id: 'nursery',
    name: 'Nursery',
    ageGroup: '2.8 – 3.8 Years',
    schedule: '9:00 AM – 12:30 PM',
    ratio: '1:6 Adult Ratio',
    headline: 'Curiosity, practical life independence, and joyful expression.',
    description:
      'Children build confidence through practical life activities, phonetic sound games, art and craft, and collaborative block building aligned with NEP foundational goals.',
    image: SCHOOL_IMAGES.indianPrePrimary,
    imageAlt: 'Indian nursery children engaged in early learning and group activities',
    highlights: [
      'Practical life station for pouring, sorting, and self-care',
      'Early phonics, rhythm, and expressive arts studio',
      'Guided nature observation and group storytelling',
      'Termly developmental portfolios shared one-on-one with parents',
    ],
    dailyRhythm: [
      { time: '09:00 AM', activity: 'Morning greeting & practical life work cycle' },
      { time: '10:15 AM', activity: 'Motor-skill games & courtyard play' },
      { time: '11:00 AM', activity: 'Nutritious snack & quiet reading corner' },
      { time: '11:30 AM', activity: 'Painting, crafts & music movement' },
    ],
  },
  {
    id: 'kindergarten',
    name: 'LKG & UKG',
    ageGroup: '3.8 – 6.0 Years',
    schedule: '8:45 AM – 1:15 PM',
    ratio: '1:8 Adult Ratio',
    headline: 'Thoughtful readiness for primary school without rote pressure.',
    description:
      'Strong foundations in early reading, tactile numeracy, environmental science, and collaborative project inquiry—preparing confident learners for primary grades.',
    image: SCHOOL_IMAGES.indianPreschoolClass,
    imageAlt: 'Indian preschool classroom learning session with young children and teachers',
    highlights: [
      'Phonics-led reading corner and hands-on numeracy',
      'Weekly project inquiries around science, seasons, and community',
      'Gentle writing readiness through guided tracing and strokes',
      'Interactive activity sheets with supportive parent guides',
    ],
    dailyRhythm: [
      { time: '08:45 AM', activity: 'Morning prayer, rhymes & warm-up circle' },
      { time: '10:15 AM', activity: 'Numeracy & literacy small-group exploration' },
      { time: '11:15 AM', activity: 'Snack break & cooperative games' },
      { time: '12:00 PM', activity: 'Thematic inquiry, Kannada rhymes & reflection' },
    ],
  },
  {
    id: 'daycare',
    name: 'Daycare & Activity Center',
    ageGroup: '1.8 – 10.0 Years',
    schedule: '12:30 PM – 6:00 PM',
    ratio: '1:6 Adult Ratio',
    headline: 'Homely afternoon daycare and creative after-school activities.',
    description:
      'Flexible daycare with supervised meal routines and quiet rest, alongside our Activity Center offering drawing, abacus, storytelling, and homework support.',
    image: SCHOOL_IMAGES.campusEntrance,
    imageAlt: 'Kiddolix International Preschool and Activity Center entrance in Bengaluru',
    highlights: [
      'Warm, supervised meal routines and clean drinking water stations',
      'Dedicated quiet nap room with clean cotton bedding',
      'Afternoon Activity Center for art, crafts, chess, and reading',
      'Verified campus gate entry and authorized parent-only pickup pass',
    ],
    dailyRhythm: [
      { time: '12:30 PM', activity: 'Lunch routine & quiet storytime' },
      { time: '01:30 PM', activity: 'Afternoon rest & supervised quiet play' },
      { time: '03:30 PM', activity: 'Evening snack & Activity Center workshops' },
      { time: '04:30 PM', activity: 'Games, crafts & parent pickup until 6:00 PM' },
    ],
  },
];

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'admissions-2027',
    title: 'Admissions Open — Playgroup to UKG, Daycare & Activity Center',
    category: 'Admissions',
    date: '18 Nov 2026',
    summary:
      'Enquiries and Saturday campus walkthroughs are now open at our Annapoorneshwari Nagar campus across morning preschool, daycare, and evening activity batches.',
    fullNotice: [
      'Kiddolix International Preschool is welcoming admission enquiries for Playgroup, Nursery, LKG, UKG, Daycare, and our Activity Center.',
      'Parents are invited to schedule an in-person campus visit on weekdays between 9:30 AM and 12:30 PM, or join our Saturday walkthroughs from 10:00 AM to 1:00 PM.',
      'For immediate admission details, please call 90350 77701 or visit our campus in RHCS Layout, Nagarabhavi.',
    ],
    actionLabel: 'Book a Campus Visit',
    actionPage: 'contact',
  },
  {
    id: 'winter-ptm',
    title: 'Term 2 Parent-Teacher Conversations & Portfolio Sharing',
    category: 'Events',
    date: '12 Nov 2026',
    summary:
      'Individual 20-minute parent slots will take place on Saturday, 12 December 2026 to review mid-year learning journals and artwork.',
    fullNotice: [
      'Our Term 2 one-on-one Parent-Teacher Meetings are scheduled for Saturday, 12 December 2026 between 9:00 AM and 2:00 PM.',
      'Teachers will share your child’s observation journal, social-emotional milestones, and classroom work portfolio.',
      'Please contact the admissions desk on 90350 77701 if you need to adjust your scheduled slot.',
    ],
    actionLabel: 'Explore Programs',
    actionPage: 'programs',
  },
  {
    id: 'air-quality-protocol',
    title: 'Winter Morning Care & Campus Hygiene Protocol',
    category: 'Health & Safety',
    date: '04 Nov 2026',
    summary:
      'Updated winter morning routine: classrooms are freshly sanitized daily and indoor/outdoor activities adjust gently to cooler mornings.',
    fullNotice: [
      'With cooler Bengaluru mornings arriving in November, parents are requested to label light cotton sweaters and water bottles clearly.',
      'Daily wellness checks are carried out at arrival alongside clean drinking water stations and strict campus gate supervision.',
    ],
  },
  {
    id: 'rajyotsava-celebration',
    title: 'Kannada Rajyotsava & Neighbourhood Craft Morning',
    category: 'Events',
    date: '29 Oct 2026',
    summary:
      'Thank you to all grandparents and parents who joined our traditional toy showcase and bilingual storytelling circle.',
    fullNotice: [
      'Kiddolix celebrated Karnataka Rajyotsava with Channapatna wooden toys, clay craft, and Kannada folk songs.',
      'Photo albums from the morning have been shared privately with enrolled families.',
    ],
  },
];
