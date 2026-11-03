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
      "StuySIMI's first New York health fair, bringing free screenings and preventive care directly to the Harlem community.",
    details: [
      "This fair marks the start of SIMI's community health fairs in New York City. Care comes to the neighborhood, and screenings are provided with no fees to attendees.",
      "StuySIMI students support the fair through community outreach beforehand and follow-up calls afterward, so attendees are connected to the care they need. Students also help on-site when the schedule allows.",
    ],
    studentRoles: ["Community outreach", "Follow-up calls & messages", "Day-of support (when schedules allow)"],
  },
  {
    id: "arcadia",
    name: "The City of Arcadia Health Fair",
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
      "A community health fair in Arcadia, CA, part of SIMI's established network of fairs in California.",
    details: [
      "SIMI's fairs in Arcadia are where this work began. StuySIMI builds on these fairs remotely from New York while growing new partnerships at home.",
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
    image: "",
    blurb: "",   // optional: 1–2 sentences on what the session covered
  },
  {
    name: "Dr. Ernani Sadural",
    fields: ["Gynecology"],
    position: "OB/GYN; Director of Global Health at RWJBarnabas Health",
    status: "past",
    date: "",
    image: "",
    blurb: "",
  },
  {
    name: "Dr. Alex Morozov",
    fields: ["Hematology", "Oncology"],
    position:
      "Hematology-Oncology Fellow at Memorial Sloan Kettering; CEO of Eviva Partners, a nonprofit closing care gaps in hematology-oncology",
    status: "past",
    date: "",
    image: "",
    blurb: "",
  },
  {
    name: "Dr. Bakul Gupta",
    fields: ["Cell Engineering", "Gene Therapy", "Optometry", "Oncology", "Nanomedicine"],
    position: "Co-founder and CEO of Deliver Biosciences",
    status: "upcoming",
    date: "",
    image: "",
    blurb: "",
  },
  {
    name: "Dr. James (Jim) Mault",
    fields: ["Biotechnology", "Digital Health", "Internal Medicine"],
    position: "Founder and Executive Chairman of BioIntelliSense",
    status: "upcoming",
    date: "",
    image: "",
    blurb: "",
  },
];

/* ---------- TEAM ---------- */
const TEAM = [
  { name: "Amelie Rhew", role: "Co-founder & Co-president", image: "", bio: "Add a short bio here." },
  { name: "Nathaniel Rhew", role: "Co-founder & Co-president", image: "", bio: "Add a short bio here." },
  { name: "Ryan", role: "Vice President", image: "", bio: "Add a short bio here." },
];
