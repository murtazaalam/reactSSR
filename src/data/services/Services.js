import OneToOneIcon from "../../assets/images/servicesIcon/management system.png";
import ResumeIcon from "../../assets/Svgs/ServicesIcon/resume.svg";
import Workshop from "../../assets/Svgs/ServicesIcon/workshop.svg";
import English from "../../assets/images/servicesIcon/English.png";
import CpIcon from "../../assets/Svgs/ServicesIcon/cp.svg";
import IpIcon from "../../assets/Svgs/ServicesIcon/IP.svg";
import labIcon from "../../assets/images/servicesIcon/Lab.png";
import hireFromUs from "../../assets/images/servicesIcon/Hire from us.png";
import sendStudentForInternships from "../../assets/images/servicesIcon/Send student for internship.png";
import advertiseAmongStudents from "../../assets/images/servicesIcon/Adverties among students.png";
import trainStaff from "../../assets/images/servicesIcon/Train staff.png";
import conductDrive from "../../assets/images/servicesIcon/Lab.png";
import stackTraining from "../../assets/images/servicesIcon/stack training.png";
import softSkills from "../../assets/images/servicesIcon/Soft skill.png";
import placementTraining from "../../assets/images/servicesIcon/Placement Training.png";
import jobOpportunities from "../../assets/images/servicesIcon/job-opportunity.png";
import internships from "../../assets/images/servicesIcon/Internship.png";
import capstoneAssistance from "../../assets/images/servicesIcon/Capstone assistance.png";
import counselling from "../../assets/images/servicesIcon/counselling.png";
import iit from "../../assets/images/servicesIcon/IIT.png";
import ncert from "../../assets/images/servicesIcon/NCERT.png";
import getCompanies from "../../assets/images/servicesIcon/Get companies.png";
import getTraining from "../../assets/images/servicesIcon/Get training proof.png";
import connectWith from "../../assets/images/servicesIcon/people.png";
import managementSystem from "../../assets/images/servicesIcon/management system.png";
import logical from "../../assets/images/servicesIcon/Logical.png";
import reasoning from "../../assets/images/servicesIcon/Reasoning.png";
import tution from "../../assets/images/servicesIcon/Tuition for school.png";

const Services = [
  {
    id: "1",
    tab: "School",
    text: "Hands-on Lab Training",
    link: "/service/class-projects/",
    icon: labIcon,
    description:
      "Compete with students from better-equipped schools when it comes to lab experiments while bridging the digital divide.",
  },
  {
    id: "2",
    tab: "School",
    text: "New Era of Online Tutoring",
    link: "/services/workshop",
    icon: tution,
    description:
      "Supplement your academic curricula with tutoring of important subjects and reach your academic goals.",
  },
  {
    id: "3",
    tab: "School",
    text: "Make Yourself IIT-Ready",
    link: "/services/webinar",
    icon: iit,
    description:
      "Experience a new era of smart coaching to secure a seat at your dream IIT.",
  },
  {
    id: "4",
    tab: "School",
    text: "Communication-English Language",
    link: "/service/techvanto-training-program/",
    icon: English,
    description:
      "Willing to overcome your fear of English? You are at the right place. Conquer the challenges of feeling shy or making mistakes by building your English vocabulary and speaking skills the real way. We guide you from Day 1 until you learn effective communication for lasting and effective business relations and achieving your professional goals.",
  },
  {
    id: "5",
    tab: "School",
    text: "Logical and Reasoning Training",
    link: "/service/interview-preprations/",
    icon: reasoning,
    description:
      "Logical and Reasoning-based questions form the core of many aptitude and competitive examinations. Techvanto Academy’s reasoning training allows you to discover your critical and computational thinking abilities and logic through the lens of practical problems from the beginner level.",
  },
  {
    id: "6",
    tab: "School",
    text: "Reasoning (General)- Boost Your Reasoning Score",
    link: "/services/webinar",
    icon: logical,
    description:
      "Your journey towards getting that perfect score in the reasoning section starts here. Prepare for competitive exams like never before.",
  },
  // {
  //   id: "7",
  //   tab: "School",
  //   text: "Management System",
  //   link: "/service/one-to-one/",
  //   icon: managementSystem,
  //   description:
  //     "Intro: Decipher the massive endeavour of online classrooms easily with personalised one on one training sessions. We understand that for career advancement, you need personal attention and coaching from an experienced industry professional and individual feedback. So sit back and comfortably achieve all that you desire",
  // },
  {
    id: "8",
    tab: "Intermediate",
    text: "Career Counselling",
    link: "/service/counselling/",
    icon: counselling,
    description:
      "Making an informed choice about your career reaps job satisfaction and success in the long run. Worry no more about being clueless as to your career and the road ahead. Carve your own niche with expert counselling and develop the confidence to overcome career hurdles.",
  },
  {
    id: "8",
    tab: "Intermediate",
    text: "Test Preparation",
    link: "/service/iit-preparation/",
    icon: iit,
    description:
      "Do you dream of securing a seat at your dream college? The first step towards it is to crack the entrance examination. Let the cutthroat competition not hinder you from getting closer to your goals with our test preparation training. Receive hands-on tips, test material, mock papers and much more.",
  },
  {
    id: "8",
    tab: "Intermediate",
    text: "Prepare for State/NCERT The Smart Way",
    link: "/service/state-ncert/",
    icon: ncert,
    description:
      "From setting a preparation strategy to last-minute tips, Techvanto's ultimate preparation programme empowers you to prepare well and score higher in the state/NCERT examinations.",
  },
  {
    id: "8",
    tab: "Intermediate",
    text: "Stack Training",
    link: "/service/stack-training/",
    icon: stackTraining,
    description:
      "Get adapted to the latest technologies including programming languages and database systems in our one-of-a-kind stack training programme.",
  },
  {
    id: "8",
    tab: "Intermediate",
    text: "Soft Skills",
    link: "/service/soft-skills/",
    icon: softSkills,
    description:
      "Gain a competitive advantage over your peers and vest yourself with strong communication, leadership and interpersonal skills in an industry-oriented and competency-based learning paradigm.",
  },
  {
    id: "8",
    tab: "Intermediate",
    text: "Organise Better with a Management System",
    link: "/service/management-system/",
    icon: managementSystem,
    description:
      "We equip you with a state-of-art web-based solution to manage workflow, store documents and avail necessary information from anywhere.",
  },
  {
    id: "9",
    tab: "Undergrads",
    text: "Stack training",
    link: "/service/one-to-one/",
    icon: stackTraining,
    description:
      "Hone your technical skills and make your way steadily in your career with start-to-finish stack training.",
  },
  {
    id: "9",
    tab: "Undergrads",
    text: "Soft Skills Training",
    link: "/service/one-to-one/",
    icon: softSkills,
    description:
      "Around 67% of HR professionals prefer to hire an applicant with strong soft skills. Soft skills instruction in this training enables students to delve deeper into the ability to work in a team, ace organizational communication, diplomacy and problem-solving skills.",
  },
  {
    id: "9",
    tab: "Undergrads",
    text: "Placement Training",
    link: "/service/one-to-one/",
    icon: placementTraining,
    description:
      "Explore one of the most advanced placement training programmes where you shall get access to preparation material, interview sessions, one on one counselling and feedback and relevant video resources to hone your personality.",
  },
  {
    id: "9",
    tab: "Undergrads",
    text: "Find a Job You Love",
    link: "/service/one-to-one/",
    icon: jobOpportunities,
    description:
      "Connect with employers and apply to jobs that fit your requirements through our dedicated job search platform.",
  },
  {
    id: "9",
    tab: "Undergrads",
    text: "Internship Training",
    link: "/service/one-to-one/",
    icon: internships,
    description:
      "Securing the right internship is more important than merely landing up at one. Not only does it provide you with the relevant experience but also highlights your profile before recruiters who rely on profiles with a relevant internship history. Techvanto Academy’ Internship Training links you with top companies that will harness your existing abilities to prepare you for future challenges.",
  },
  {
    id: "9",
    tab: "Undergrads",
    text: "Capstone Assistance",
    link: "/service/one-to-one/",
    icon: capstoneAssistance,
    description:
      "Becoming proficient in Capstone projects shall not be a botheration anymore. From developing a research plan to finalising your project, you shall be assisted with intricate nuances to make your project stand out from that of others.",
  },
  {
    id: "10",
    tab: "Companies",
    text: "Hire From Us",
    link: "/service/one-to-one/",
    icon: hireFromUs,
    description:
      "Ours is a market-leading technical platform to spot a vast army of able developers, data scientists, coders and machine learning professionals with optimum hard skills and soft skills. Techvanto Academy is a crowdsourcing innovative solution where companies meet fresh and budding talents.",
  },
  {
    id: "10",
    tab: "Companies",
    text: "Sending Students for Internships",
    link: "/service/one-to-one/",
    icon: sendStudentForInternships,
    description:
      "Broaden the potential of your company and bring fresh perspectives on board by hiring candidates with verified and relevant skills. We are trusted by a diverse range of companies to seek a larger and quality workforce.",
  },
  {
    id: "10",
    tab: "Companies",
    text: "Boost Your Business Among Students",
    link: "/service/one-to-one/",
    icon: advertiseAmongStudents,
    description:
      "Leverage our expertise in advertising and marketing to reach more college students and develop branding.",
  },
  {
    id: "10",
    tab: "Companies",
    text: "Training Staff",
    link: "/service/one-to-one/",
    icon: trainStaff,
    description:
      "We believe that employees should have a rewarding and impactful role in their organisation. We indulge in effective collaborations with companies to offer intensive staff training programs. This helps them pioneer and lead their company with their role.",
  },
  {
    id: "10",
    tab: "Companies",
    text: "Conduct Drives in Colleges",
    link: "/service/one-to-one/",
    icon: conductDrive,
    description:
      "Get connected to various colleges pan-India to pick fresh and budding talent for your workforce through college recruitment drives.",
  },
  {
    id: "11",
    tab: "Colleges",
    text: "Get Companies",
    link: "/service/one-to-one/",
    icon: getCompanies,
    description:
      "Intro: Decipher the massive endeavour of online classrooms easily with personalised one on one training sessions. We understand that for career advancement, you need personal attention and coaching from an experienced industry professional and individual feedback. So sit back and comfortably achieve all that you desire",
  },
  {
    id: "11",
    tab: "Colleges",
    text: "Get Training Professionals",
    link: "/service/one-to-one/",
    icon: getTraining,
    description:
      "It’s always better to receive personalised feedback from those who are a part of the industry. Techvanto Academy connects you with training professionals who will address your career-related issues and provide you with appropriate guidance.",
  },
  {
    id: "11",
    tab: "Colleges",
    text: "Admission Counselling (Connect with Students)",
    link: "/service/one-to-one/",
    icon: connectWith,
    description:
      "Get relieved of feeling intimidated by college applications, our customised and highly specialised admission counselling links you to experienced advisors to secure your seat at the best possible institutions.",
  },
  {
    id: "11",
    tab: "Colleges",
    text: "Management System",
    link: "/service/one-to-one/",
    icon: managementSystem,
    description:
      "Get access to a next-generation smart management system to manage academic and administrative tasks apart from accessing features.",
  },
];

export default Services;
