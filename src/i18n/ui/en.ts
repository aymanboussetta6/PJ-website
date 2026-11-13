import type { Dictionary } from './fr';

const en: Dictionary = {
  meta: {
    title: '{brand} — Telecom talent for mobile operators',
    description:
      '{brand} recruits and deploys engineers, technicians and sales teams from Eastern Europe for European mobile operators.',
  },
  nav: {
    services: 'Operators',
    why: 'Why us',
    candidates: 'Candidates',
    apply: 'Apply',
    contact: 'Contact',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    eyebrow: 'Telecom recruitment · Eastern Europe',
    title: 'The right people to keep your networks running.',
    subtitle:
      'We connect mobile operators with qualified talent from Eastern Europe: radio and core network engineers, field technicians, sales and customer care teams.',
    ctaClients: "I'm an operator",
    ctaCandidates: "I'm looking for a job",
    badges: ['5G · LTE · Fibre', 'Multilingual teams', 'GDPR compliant'],
  },
  services: {
    title: 'What we bring to operators',
    intro: 'Ready-to-deploy teams, recruited and supported by telecom specialists.',
    items: [
      {
        title: 'Network rollout & engineering',
        text: 'RF engineers, radio optimisation, core network and transmission for your 4G/5G rollouts.',
      },
      {
        title: 'Field technicians',
        text: 'Site installation and maintenance, fibre connections and interventions across your footprint.',
      },
      {
        title: 'Sales & customer care',
        text: 'Multilingual retail advisors and contact-centre agents, trained on your offers and tools.',
      },
    ],
  },
  why: {
    title: 'Why work with us',
    items: [
      {
        title: 'An Eastern European talent pool',
        text: 'Serbia, the Balkans, Central Europe: direct access to scarce, motivated technical profiles.',
      },
      {
        title: 'Fast staffing',
        text: 'Technical and language pre-screening so you meet relevant candidates quickly.',
      },
      {
        title: 'A secure framework',
        text: 'Contracts, mobility and personal data handled in line with European law.',
      },
    ],
  },
  candidates: {
    title: 'Candidates: join telecom projects across Europe',
    intro:
      "Engineer, technician or sales professional? We support you from your application to your first day on the job.",
    steps: [
      { title: 'Apply online', text: 'Send your CV in 2 minutes, in the language of your choice.' },
      { title: 'Talk to a recruiter', text: 'An interview to understand your skills and expectations.' },
      { title: 'Start your assignment', text: 'We help with the contract, relocation and onboarding.' },
    ],
  },
  form: {
    title: 'Submit your application',
    intro: 'Fields marked * are required.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    country: 'Country of residence',
    countryPlaceholder: 'Select a country',
    otherCountry: 'Other country',
    domain: 'Field',
    domainPlaceholder: 'Select a field',
    domains: {
      rf: 'Radio engineering (RF)',
      core: 'Core network / transmission',
      field: 'Field technician',
      it: 'IT / software',
      sales: 'Sales & retail',
      care: 'Customer care',
      pm: 'Project management',
      other: 'Other',
    },
    languages: 'Languages spoken',
    languagesHint: 'E.g. Serbian, English, German',
    message: 'Message (optional)',
    cv: 'CV',
    cvHint: 'PDF, DOC or DOCX, 5 MB max.',
    consent:
      'I agree that my data will be processed to handle my application and kept for 24 months, in accordance with the privacy policy.',
    privacyLink: 'Read the privacy policy',
    submit: 'Send my application',
    sending: 'Sending…',
    success: 'Thank you! Your application has been received. A confirmation email is on its way.',
    errorGeneric: 'Something went wrong. Please try again or email us at the address below.',
    errorInvalid: 'Some fields are invalid. Please check the form.',
    errorFile: 'Your CV must be a PDF, DOC or DOCX file of 5 MB or less.',
    errorCaptcha: 'The spam check failed. Please reload the page and try again.',
  },
  contact: {
    title: "Let's talk about your needs",
    text: 'Operator, integrator or subcontractor: tell us about your project and we will get back to you within 2 business days.',
    cta: 'Email us',
  },
  footer: {
    tagline: 'Eastern European telecom talent for European operators.',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
  },
  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated: November 2026',
    sections: [
      {
        title: 'Data controller',
        text: '{brand} is the controller of the data collected through this website. Contact: {email}.',
      },
      {
        title: 'Data collected',
        text: 'Identity, contact details, country, field, languages, message and CV submitted through the application form.',
      },
      {
        title: 'Purpose and legal basis',
        text: 'Handling your application and introducing you to our clients, based on your consent.',
      },
      {
        title: 'Hosting and retention',
        text: 'Data is hosted in the European Union and kept for 24 months after the last contact, then deleted.',
      },
      {
        title: 'Your rights',
        text: 'You can access, correct or delete your data, or withdraw your consent, by writing to {email}. You may also lodge a complaint with your national data protection authority.',
      },
    ],
    back: 'Back to home',
  },
};

export default en;
