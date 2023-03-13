import ACTION_TYPES from "../constants/actionTypes";
import projectImages from "../constants/images";

const initialState = {
  themeName: "",
  name: "Abhishek Valavakkadu Vanajakshan Kartha",
  designation: "Test Engineer",
  profileSummary: `I am a self directed and motivated software developer,
working eﬀectively in dynamic environment, where I can
apply my knowledge and skills for continuous improvement.`,
  linkedin: "https://www.linkedin.com/in/eldhose-m-peter-48867411a/",
  github: "https://github.com/eldhosempeter07",
  emailId: "abhishekvkartha98@gmail.com",
  educationDetails: [
    {
      educationName: "Diploma in Electronics and Communication",
      collegeName: "Government Polytechnic College Perumbavoor",
      year: "2016-2019",
      location: "Ernakulam, Kerala",
      details: `Graduated with a 8.5 GPA from state board of technical education, Kerala`,
    },
    {
      educationName: "Higher Secondary Education",
      collegeName: " Stmary's Higher Secondary School Morakkala",
      year: "2014-2016",
      location: "Ernakulam, Kerala",
      details: `Passed with a 75 % from Board of Higher Secondary Education, Kerala`,
    },
    {
      educationName: "High School Education",
      collegeName: " Stmary's Higher Secondary School Morakkala",
      year: "2013-2014",
      location: "Ernakulam, Kerala",
      details: `Passed with a 96% from Board of Public Examination, Kerala`,
    },
  ],
  workExperience: [
    {
      designation: "Test Engineer",
      companyName: " Sfo Technologies Digital Pvt. Ltd.",
      year: "09/2022-present",
      location: "Kochi, India",
      details: `• Expert in Test Automation & Functional Circuit Testing.
        • Test system Design (Requirement based testing) and development.
        • Exposure in test software development using Python and C.
        • Spectrum analyzer, Power sensor, Signal generator etc 
        • DIT-MCO tester programming and validation, Boundary scan testing, Machine communication using RS232 interface etc.
        • Hands on experience with RF equipments such as Network analyzers, 
        `,
    },
    {
      designation: "Rolling stock technician",
      companyName: " Asa Bhanu Technical Services Limited ",
      year: "08/2019-01/2022",
      location: "Kochi, India",
      details: `
        • Worked for Kochi Metro Rail Limited under " Asa Bhanu Technical Services Limited and have a vast knowledge about systems and sub systems of Metro trains .
        • Debugging faulty printed circuit boards and troubleshooting faulty equipment used in Metro trains.
        `,
    },
  ],
  projects: [
    {
      projectName: "DME Test Fixture",
      imageUrl: projectImages.one,
      // visitLink: "https://www.pawwalker.in/",
      description:
        "I designed and implemented a test fixture for the DME 500 printed circuit board for Thales Company. Additionally, I programmed the DITMCO tester to check the continuity and insulation between the required points on the PCB",
    },
    {
      projectName: "HLA Power Module Test Fixture",
      imageUrl: projectImages.two,
      // visitLink: "https://techclub.neoito.com/",
      description:
        "I designed and implemented test fixtures to check the smooth functioning of the Auxiliary Power Supply, CFD, AMC, RPA modules of the HLA amplifier. This amplifier is used for defense purposes and was developed by THALES company. The purpose of these fixtures was to ensure the proper functionality of the Printed Circuit Boards.",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.THEME_CHANGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
