import type { Dictionary } from './fr';

const en: Dictionary = {
  meta: {
    title: '{brand} — Telecom project management and field works',
    description:
      '{brand} supports operators and infrastructure owners: engineering studies, infrastructure and radio site rollout, fibre optics, civil works and maintenance.',
  },
  nav: {
    activities: 'Services',
    approach: 'Approach',
    sectors: 'Clients',
    careers: 'Careers',
    contact: 'Contact',
    quote: 'Contact us',
    menu: 'Menu',
    home: 'Home',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    eyebrow: 'Telecom project management · France & Germany',
    title: 'We design, build and maintain your telecom networks.',
    subtitle:
      'From survey to commissioning, then maintenance: a single partner for your radio, fibre and infrastructure projects.',
    ctaPrimary: 'Contact us',
    ctaSecondary: 'Our services',
    badges: ['4G · 5G', 'FTTH · FTTO', 'Towers & rooftops', 'Civil works'],
    explore: 'Tap a point to explore our services',
  },
  activities: {
    title: 'Our services',
    intro: 'Six complementary trades covering the full life cycle of your telecom infrastructure.',
    items: {
      studies: {
        title: 'Engineering office',
        text: 'Site surveys, feasibility studies, construction drawings, permit files, and radio and fibre engineering.',
      },
      infra: {
        title: 'Telecom infrastructure rollout',
        text: 'Site construction: towers, rooftops, shelters, power and connections, with full works management.',
      },
      radio: {
        title: 'Radio rollout',
        text: 'Installation, integration and commissioning of 2G to 5G equipment, swaps and site upgrades.',
      },
      maintenance: {
        title: 'Corrective and preventive maintenance',
        text: 'Scheduled visits, incident response, on-call service and service-level monitoring.',
      },
      fiber: {
        title: 'Fibre optics',
        text: 'Cable pulling, connection, splicing and testing on FTTH, FTTO and backbone networks, aerial and underground.',
      },
      civil: {
        title: 'Civil works',
        text: 'Trenching, ducts, draw pits, foundations and road reinstatement.',
      },
    },
  },
  approach: {
    title: 'Our project management approach',
    intro: 'One point of control, from the first survey to maintenance.',
    steps: [
      { title: 'Design', text: 'Needs analysis, surveys and technical design.' },
      { title: 'Build', text: 'Coordination of trades, safety and on-time delivery.' },
      { title: 'Commission', text: 'Acceptance testing, inspections, as-built files and handover.' },
      { title: 'Maintain', text: 'Preventive and corrective maintenance to guarantee availability.' },
    ],
  },
  sectors: {
    title: 'Who we work for',
    intro: 'We work alongside the companies that build and operate networks.',
    items: [
      { title: 'Mobile and fixed operators', text: '4G/5G densification, radio upgrades and fibre connection of sites.' },
      { title: 'TowerCos and hosts', text: 'Construction and maintenance of shared towers and rooftop sites.' },
      { title: 'Rail and transport', text: 'Trackside telecom networks, stations and technical sites.' },
      { title: 'Local authorities and developers', text: 'Public fibre networks, broadband upgrades and related civil works.' },
    ],
  },
  commitments: {
    title: 'Our commitments',
    items: [
      { title: 'Safety first', text: 'Prevention, protective equipment and a safety culture on every site.' },
      { title: 'Responsiveness', text: 'Teams that can be mobilised quickly in France and Germany.' },
      { title: 'Measured quality', text: 'Inspections, reporting and traceability for every job.' },
    ],
  },
  careers: {
    title: 'Join our teams',
    intro:
      'Technicians, site supervisors, project managers, engineers: we are hiring in France, Germany and Eastern Europe.',
    steps: [
      { title: 'Apply online', text: 'Send your CV in 2 minutes, in the language of your choice.' },
      { title: 'Meet our teams', text: 'An interview to understand your skills and expectations.' },
      { title: 'Start in the field', text: 'Onboarding, safety training and support on your first sites.' },
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
    domain: 'Trade',
    domainPlaceholder: 'Select a trade',
    domains: {
      studies: 'Engineering office',
      infra: 'Telecom infrastructure',
      radio: 'Radio',
      maintenance: 'Maintenance',
      fiber: 'Fibre optics',
      civil: 'Civil works',
      management: 'Works supervision / project manager',
      other: 'Other',
    },
    languages: 'Languages spoken',
    languagesHint: 'E.g. French, Serbian, English',
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
  contactForm: {
    eyebrow: 'Contact',
    title: "Let's talk about your project",
    intro: 'Client, subcontractor or supplier: write to us and the right person will reply within 2 business days.',
    typeLabel: 'You are',
    types: {
      client: { label: 'Client', hint: 'Operator, TowerCo, network owner…' },
      subcontractor: { label: 'Subcontractor', hint: 'Works or engineering company' },
      supplier: { label: 'Supplier', hint: 'Materials, equipment, services' },
      other: { label: 'Other request', hint: 'Press, partnership…' },
    },
    company: 'Company',
    fullName: 'Full name',
    jobTitle: 'Job title',
    email: 'Business email',
    phone: 'Phone',
    country: 'Country',
    trades: 'Trades offered',
    message: 'Your message',
    messagePlaceholder: 'Context, location, volumes, timeline…',
    attachment: 'Attachment (optional)',
    attachmentHint: 'Brochure, references, specifications: PDF, 10 MB max.',
    consent:
      'I agree that my data will be used to answer my request and kept for 3 years, in accordance with the privacy policy.',
    submit: 'Send my request',
    success: 'Thank you! Your request has been sent. We will get back to you shortly.',
    errorFile: 'The attachment must be a PDF of 10 MB or less.',
    candidate: 'Looking for a job?',
    candidateLink: 'Apply in the Careers section',
    direct: 'Or email us directly',
  },
  footer: {
    tagline: 'Telecom project management and field works in France and Germany.',
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
        text: 'Applications: identity, contact details, country, trade, languages, message and CV. Contact requests: company, identity, job title, contact details, country, message and any attachment.',
      },
      {
        title: 'Purpose and legal basis',
        text: 'Handling your application or contact request, based on your consent.',
      },
      {
        title: 'Hosting and retention',
        text: 'Data is hosted in the European Union. Applications are kept for 24 months and contact requests for 3 years after the last exchange, then deleted.',
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
