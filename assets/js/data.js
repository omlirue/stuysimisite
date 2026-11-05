/* =========================================================
   StuySIMI — SITE CONTENT
   This is the one file to edit when you add a fair, a speaker,
   or a team bio. You don't need to touch any HTML.

   Photos: put image files in assets/img/ and set `image` to the
   file name, e.g. image: "assets/img/harlem-fair.jpg".
   Leave `image: ""` to show the decorative placeholder instead.
   ========================================================= */

const SITE = {
  contactEmail: "amelierhew@gmail.com",

  // MCAssist: once the app is deployed (e.g. at https://mcassist.vercel.app),
  // paste its URL here and it will appear embedded on the MCAssist page.
  mcassistUrl: "",
  mcassistLanguages: ["English", "Español", "中文", "Русский", "বাংলা", "Kreyòl ayisyen", "한국어"],
};

/* ---------- HEALTH FAIRS ----------
   date: "YYYY-MM-DD" for a set date, or "" if TBD.
   Fairs whose date has passed are labeled "Past" automatically. */
const FAIRS = [
  {
    id: "harlem",
    name: "Harlem Community Health Fair",
    date: "",                       // TBD — fill in once confirmed
    dateNote: "Date to be announced",
    location: "Harlem, New York, NY",
    image: "",
    partners: [
      "SUNY College of Optometry",
      "One Hundred Black Men of New York",
      "Healthfirst",
      "More partners to be announced",
    ],
    summary:
      "A community health fair bringing free screenings and preventive care directly into Harlem, where neighbors already live, gather, and feel at home.",
    details: [
      "StuySIMI's first New York partnership, joining a fair led by local organizations. Care comes to the neighborhood, and screenings are provided at no cost to attendees.",
      "StuySIMI students support the fair through community outreach beforehand and follow-up calls afterward, so attendees stay connected to the care they need. Students also help on-site when the fair's timing and location allow.",
    ],
    studentRoles: ["Outreach & resources", "On-site coordination & translation (depending on timing and location)", "Follow-up calls"],
  },
  {
    id: "columbia",
    name: "Columbia Ophthalmology Health Fair",
    date: "",                       // TBD — fill in once confirmed
    dateNote: "Date to be announced",
    location: "Manhattan, New York, NY",
    image: "",
    partners: [
      "Columbia Ophthalmology",
      "More partners to be announced",
    ],
    summary:
      "A community health fair in Manhattan focused on eye health, bringing free vision screenings and preventive care directly to the community.",
    details: [
      "StuySIMI students will support the fair through outreach beforehand and follow-up calls afterward, helping attendees stay connected to care. Students may also help on-site when the fair's timing and location allow.",
    ],
    studentRoles: ["Outreach & resources", "On-site coordination & translation (depending on timing and location)", "Follow-up calls"],
  },
  {
    id: "arcadia",
    name: "The City of Arcadia Health Fair 2026",
    date: "2026-09-12",
    dateNote: "Saturday, September 12, 2026",
    location: "Arcadia, California",
    image: "",
    partners: [
      "Kaiser Permanente",
      "USC Arcadia Hospital",
      "Huntington Health, an affiliate of Cedars-Sinai",
      "Molina Healthcare",
      "SIMI Group Inc.",
    ],
    summary:
      "A community health fair in Arcadia, CA, bringing free preventive care to local residents through SIMI's partners in California.",
    details: [
      "SIMI's fairs in Arcadia are where StuySIMI's roots are. We continue to support them remotely from New York while building our own partnerships at home.",
    ],
    studentRoles: [],
  },
  {
    id: "arcadia-2025",
    name: "The City of Arcadia Health Fair 2025",
    date: "2025-09-20",
    dateNote: "Saturday, September 20, 2025",
    location: "Arcadia, California",
    image: "",
    partners: [
      "Keck Medicine of USC",
      "USC Arcadia Hospital",
      "Huntington Health, an affiliate of Cedars-Sinai",
      "Kaiser Permanente",
    ],
    summary:
      "The 2025 edition of Arcadia's community health fair, bringing free screenings and preventive care to local residents.",
    details: [
      "SIMI's work at the Arcadia fairs is where StuySIMI's roots are, and it continues to inform how we approach community care in New York.",
    ],
    studentRoles: [],
  },
];

/* ---------- HEALTH + TECH SERIES SPEAKERS ----------
   status: "past" or "upcoming"
   date: optional, "YYYY-MM-DD" or "" */
const SPEAKERS = [
  {
    name: "Dr. Gaurav Singal",
    fields: ["Oncology", "Cardiology", "Infectious Disease", "Computer Science"],
    position: "Physician; Mentor at Harvard Medical School",
    status: "past",
    date: "",
    image: "assets/img/speakers/gaurav.jpg",
    blurb: "",   // optional: 1–2 sentences on what the session covered
  },
  {
    name: "Dr. Ernani Sadural",
    fields: ["Gynecology"],
    position: "OB/GYN; Director of Global Health at RWJBarnabas Health",
    status: "past",
    date: "",
    image: "assets/img/speakers/ernani.jpg",
    blurb: "",
  },
  {
    name: "Dr. Alex Morozov",
    fields: ["Hematology", "Oncology"],
    position:
      "Hematology-Oncology Fellow at Memorial Sloan Kettering; CEO of Eviva Partners, a nonprofit closing care gaps in hematology-oncology",
    status: "past",
    date: "",
    image: "assets/img/speakers/alex.jpg",
    blurb: "",
  },
  {
    name: "Dr. Bakul Gupta",
    fields: ["Cell Engineering", "Gene Therapy", "Optometry", "Oncology", "Nanomedicine"],
    position: "Co-founder and CEO of Deliver Biosciences",
    status: "upcoming",
    date: "",
    image: "assets/img/speakers/bakul.jpg",
    blurb: "",
  },
  {
    name: "Dr. James (Jim) Mault",
    fields: ["Biotechnology", "Digital Health", "Internal Medicine"],
    position: "Founder and Executive Chairman of BioIntelliSense",
    status: "upcoming",
    date: "",
    image: "assets/img/speakers/mault.jpg",
    blurb: "",
  },
];

/* ---------- COLLABORATING SCHOOLS ----------
   Logos: put each school's logo in assets/img/schools/ and set `logo`
   to the file path, e.g. logo: "assets/img/schools/stuyvesant.png".
   Leave `logo: ""` to show the school's name instead. */
const SCHOOLS = [
  { name: "Stuyvesant High School", location: "New York, NY", logo: "assets/img/schools/stuyvesant.png" },
  { name: "Dwight-Englewood School", location: "Englewood, NJ", logo: "assets/img/schools/dwight.png" },
  { name: "Harvard-Westlake School", location: "Los Angeles, CA", logo: "assets/img/schools/harvardwest.png" },
];

/* ---------- TEAM ---------- */
const TEAM = [
  { name: "Amelie Rhew", role: "Co-founder & Co-president", image: "assets/img/team/amelie.jpg", bio: "" },
  { name: "Nate Rhew", role: "Co-founder & Co-president", image: "assets/img/team/nate.jpg", bio: "" },
  { name: "Ryan", role: "Vice President", image: "assets/img/team/ryan.jpg", bio: "" },
];
