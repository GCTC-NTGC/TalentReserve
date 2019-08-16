import { defineMessages } from "react-intl";

export const formMessages = defineMessages({
  titleLabel: {
    id: "jobDetails.titleLabel",
    defaultMessage: "What is the job title?",
    description: "The form label displayed on the title input.",
  },
  titlePlaceholder: {
    id: "jobDetails.titlePlaceholder",
    defaultMessage: "e.g. Product Designer",
    description: "The form placeholder displayed on the title input.",
  },
  termLengthLabel: {
    id: "jobDetails.termLengthLabel",
    defaultMessage: "How long is the term (in months)?",
    description: "The form label displayed on the term length input.",
  },
  termLengthPlaceholder: {
    id: "jobDetails.termLengthPlaceholder",
    defaultMessage: "e.g. 3",
    description: "The form placeholder displayed on the term length input.",
  },
  classificationLabel: {
    id: "jobDetails.classificationLabel",
    defaultMessage: "What is the classification?",
    description: "The form label displayed on the classification input.",
  },
  classificationNullSelection: {
    id: "jobDetails.classificationNullSelection",
    defaultMessage: "Select a classification...",
    description:
      "The default selection option displayed on the classification input.",
  },
  levelLabel: {
    id: "jobDetails.levelLabel",
    defaultMessage: "What is the level?",
    description: "The form label displayed on the level input.",
  },
  levelNullSelection: {
    id: "jobDetails.levelNullSelection",
    defaultMessage: "Select a level...",
    description: "The default selection option displayed on the level input.",
  },
  securityLevelLabel: {
    id: "jobDetails.securityLevelLabel",
    defaultMessage: "What is the security level?",
    description: "The form label displayed on the security level input.",
  },
  securityLevelNullSelection: {
    id: "jobDetails.securityLevelNullSelection",
    defaultMessage: "Select a security level...",
    description:
      "The default selection option displayed on the security level input.",
  },
  languageLabel: {
    id: "jobDetails.languageLabel",
    defaultMessage: "What is the language profile?",
    description: "The form label displayed on the language input.",
  },
  languageNullSelection: {
    id: "jobDetails.languageNullSelection",
    defaultMessage: "Select a language profile...",
    description:
      "The default selection option displayed on the language input.",
  },
  cityLabel: {
    id: "jobDetails.cityLabel",
    defaultMessage: "What city is the team located in?",
    description: "The form label displayed on the city input.",
  },
  cityPlaceholder: {
    id: "jobDetails.cityPlaceholder",
    defaultMessage: "e.g. Ottawa",
    description: "The form placeholder displayed on the city input.",
  },
  provinceLabel: {
    id: "jobDetails.provinceLabel",
    defaultMessage: "What province is the team located in?",
    description: "The form label displayed on the province input.",
  },
  provinceNullSelection: {
    id: "jobDetails.provinceNullSelection",
    defaultMessage: "Select a province...",
    description:
      "The default selection option displayed on the province input.",
  },
  remoteWorkGroupLabel: {
    id: "jobDetails.remoteWorkGroupLabel",
    defaultMessage: "Select a remote work option:",
    description: "The form label displayed on the remote work radio group.",
  },
  remoteWorkWorldLabel: {
    id: "jobDetails.remoteWorkWorldLabel",
    defaultMessage:
      "Yes, I’m willing to supervise employees anywhere in the world.",
    description:
      "The form label displayed on the 'world' remote work radio option.",
  },
  remoteWorkCanadaLabel: {
    id: "jobDetails.remoteWorkCanadaLabel",
    defaultMessage:
      "Yes, I’m willing to supervise employees in any province or territory in Canada.",
    description:
      "The form label displayed on the 'canada' remote work radio option.",
  },
  remoteWorkNoneLabel: {
    id: "jobDetails.remoteWorkNoneLabel",
    defaultMessage:
      "No, I require the employee in this position to be in the same geographic location as the office.",
    description:
      "The form label displayed on the 'none' remote work radio option.",
  },
  teleworkGroupLabel: {
    id: "jobDetails.teleworkGroupLabel",
    defaultMessage: "Select a telework option:",
    description: "The form label displayed on the telework radio group.",
  },
  flexHoursGroupLabel: {
    id: "jobDetails.flexHoursGroupLabel",
    defaultMessage: "Select a flexible hours option:",
    description: "The form label displayed on the flex hours radio group.",
  },
  travelGroupLabel: {
    id: "jobDetails.travelGroupLabel",
    defaultMessage: "Select a travel option:",
    description: "The form label displayed on the travel radio group.",
  },
  overtimeGroupLabel: {
    id: "jobDetails.overtimeGroupLabel",
    defaultMessage: "Select a overtime option:",
    description: "The form label displayed on the overtime radio group.",
  },
  educationRequirementsLabel: {
    id: "jobDetails.educationRequirementsLabel",
    defaultMessage: "Customize the Education Requirement:",
    description:
      "The form label displayed above 'customize education requirement' textbox",
  },
  educationRequirementPlaceholder: {
    id: "jobDetails.educationRequirementPlaceholder",
    defaultMessage: "Paste the paragraph here to edit...",
    description:
      "The placeholder displayed in 'customize education requirement' textbox",
  },
});

export const classificationOptionMessages = defineMessages({
  AdministrativeServices: {
    id: "jobDetails.classificationOptions.AS",
    defaultMessage: "AS - Administrative Services",
    description: "Job Classification from list of Classifications",
  },
  BiologicalSciences: {
    id: "jobDetails.classificationOptions.BI",
    defaultMessage: "BI - Biological Sciences",
    description: "Job Classification from list of Classifications",
  },
  Commerce: {
    id: "jobDetails.classificationOptions.CO",
    defaultMessage: "CO - Commerce",
    description: "Job Classification from list of Classifications",
  },
  ClericalRegulatory: {
    id: "jobDetails.classificationOptions.CR",
    defaultMessage: "CR - Clerical and Regulatory",
    description: "Job Classification from list of Classifications",
  },
  ComputerSystems: {
    id: "jobDetails.classificationOptions.CS",
    defaultMessage: "CS - Computer Systems",
    description: "Job Classification from list of Classifications",
  },
  EconomicsSocialSciences: {
    id: "jobDetails.classificationOptions.EC",
    defaultMessage: "EC - Economics and Social Science Services",
    description: "Job Classification from list of Classifications",
  },
  Executive: {
    id: "jobDetails.classificationOptions.EX",
    defaultMessage: "EX - Executive",
    description: "Job Classification from list of Classifications",
  },
  Forestry: {
    id: "jobDetails.classificationOptions.FO",
    defaultMessage: "FO - Forestry",
    description: "Job Classification from list of Classifications",
  },
  InformationServices: {
    id: "jobDetails.classificationOptions.IS",
    defaultMessage: "IS - Information Services",
    description: "Job Classification from list of Classifications",
  },
  PhysicalSciences: {
    id: "jobDetails.classificationOptions.PC",
    defaultMessage: "PC - Physical Sciences",
    description: "Job Classification from list of Classifications",
  },
  PersonnelAdministration: {
    id: "jobDetails.classificationOptions.PE",
    defaultMessage: "PE - Personnel Administration",
    description: "Job Classification from list of Classifications",
  },
  ProgrammeAdministration: {
    id: "jobDetails.classificationOptions.PM",
    defaultMessage: "PM - Programme Administration",
    description: "Job Classification from list of Classifications",
  },
});

export const educationMessages = defineMessages({
  AS: {
    id: "jobDetails.educationMessages.AS",
    defaultMessage: `Secondary school diploma, or equivalent:\nSuccessful completion of a secondary school diploma.\n\nor\n\nEquivalent experience:\nIf you have on-the-job learning or other non-conventional training that you believe is equivalent to the secondary school diploma requirement, put it forward for consideration. The manager may accept a combination of education, training and/or experience in a related field as an alternative to the minimum secondary school diploma stated above.
    `,
    description: "Job Classification message from list of Classifications",
  },
  BI: {
    id: "jobDetails.educationMessages.BI",
    defaultMessage: `Post-secondary degree:\nSuccessful completion of post-secondary degree in a natural, physical or applied science with specialization in a field relevant to the duties of the position.`,
    description: "Job Classification message from list of Classifications",
  },
  CO: {
    id: "jobDetails.educationMessages.CO",
    defaultMessage: `Secondary school diploma, or equivalent:\nSuccessful completion of a secondary school diploma.\n\nor\n\nEquivalent experience:\nIf you have on-the-job learning or other non-conventional training that you believe is equivalent to the secondary school diploma requirement, put it forward for consideration. The manager may accept a combination of education, training and/or experience in a related field as an alternative to the minimum secondary school diploma stated above.`,
    description: "Job Classification message from list of Classifications",
  },
  CR: {
    id: "jobDetails.educationMessages.CR",
    defaultMessage: `2 years of secondary school, or equivalent:\nSuccessful completion of at least two years of secondary school education.\n\nor\n\nEquivalent experience:\nIf you have on-the-job learning or other non-conventional training that you believe is equivalent to the 2 year secondary school requirement, put it forward for consideration. The manager may accept a combination of education, training and/or experience in a related field as an alternative to the minimum secondary school education stated above.`,
    description: "Job Classification message from list of Classifications",
  },
  CS: {
    id: "jobDetails.educationMessages.CS",
    defaultMessage: `2 years post-secondary, or equivalent:\nSuccessful completion of two years of post-secondary education in computer science, information technology, information management or another specialty relevant to this position.\n\nor\n\nEquivalent experience:\nIf you have on-the-job learning or other non-conventional training that you believe is equivalent to the 2 year post-secondary requirement, put it forward for consideration. The manager may accept a combination of education, training and/or experience in a related field as an alternative to the minimum post-secondary education stated above.`,
    description: "Job Classification message from list of Classifications",
  },
  EC: {
    id: "jobDetails.educationMessages.EC",
    defaultMessage: `Post-secondary degree:\nGraduation with a degree from a recognized post-secondary institution with acceptable specialization in economics, sociology or statistics.\n\nCandidates must always have a degree. The courses for the specialization must be acceptable and may have been taken at a recognized post-secondary institution, but not necessarily within a degree program in the required specialization. The specialization may also be obtained through an acceptable combination of education, training and/or experience.`,
    description: "Job Classification message from list of Classifications",
  },
  EX: {
    id: "jobDetails.educationMessages.EX",
    defaultMessage: `Post-secondary degree, or equivalent:\nPost-secondary degree, or eligibility for a recognized professional designation in one of the provinces or territories of Canada.\n\nor\n\nEquivalent experience:\nIf you have on-the-job learning or other non-conventional training that you believe is equivalent to the post-secondary degree requirement, put it forward for consideration. The manager may accept a combination of education, training and/or experience in a related field as an alternative to the minimum post-secondary education stated above.`,
    description: "Job Classification message from list of Classifications",
  },
  FO: {
    id: "jobDetails.educationMessages.FO",
    defaultMessage: `Post-secondary degree:\nGraduation with a degree in forestry or wood science from a recognized post-secondary institution.\n\nor\n\nGraduation with a degree in a related science from a recognized post-secondary institution combined with acceptable experience.`,
    description: "Job Classification message from list of Classifications",
  },
  IS: {
    id: "jobDetails.educationMessages.IS",
    defaultMessage: `Post-secondary degree, or equivalent:\nSuccessful completion of a post-secondary degree.\n\nor\n\nEquivalent experience:\nIf you have on-the-job learning or other non-conventional training that you believe is equivalent to the post-secondary degree requirement, put it forward for consideration. The manager may accept a combination of education, training and/or experience in a related field as an alternative to the minimum post-secondary education stated above.`,
    description: "Job Classification message from list of Classifications",
  },
  PC: {
    id: "jobDetails.educationMessages.PC",
    defaultMessage: `Post-secondary degree:\nSuccessful completion of a post-secondary degree with specialization in physics, geology, chemistry or some other science relevant to the position.`,
    description: "Job Classification message from list of Classifications",
  },
  PE: {
    id: "jobDetails.educationMessages.PE",
    defaultMessage: `Post-secondary degree, or equivalent:\nSuccessful completion of a post-secondary degree with specialization in human resources management, labour or industrial relations, psychology, public or business administration, organizational development, education sciences, social sciences, sociology, or another specialty relevant to this position.\n\nor\n\nEquivalent experience:\nIf you have on-the-job learning or other non-conventional training that you believe is equivalent to the post-secondary degree requirement, put it forward for consideration. The manager may accept a combination of education, training and/or experience in a related field as an alternative to the minimum post-secondary education stated above.`,
    description: "Job Classification message from list of Classifications",
  },
  PM: {
    id: "jobDetails.educationMessages.PM",
    defaultMessage: `Secondary school diploma, or equivalent:\nSuccessful completion of a secondary school diploma.\n\nor\n\nEquivalent experience:\nIf you have on-the-job learning or other non-conventional training that you believe is equivalent to the secondary school diploma requirement, put it forward for consideration. The manager may accept a combination of education, training and/or experience in a related field as an alternative to the minimum secondary school diploma stated above.`,
    description: "Job Classification message from list of Classifications",
  },
});
