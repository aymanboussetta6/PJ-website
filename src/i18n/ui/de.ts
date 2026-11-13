import type { Dictionary } from './fr';

const de: Dictionary = {
  meta: {
    title: '{brand} — Telekom-Fachkräfte für Mobilfunkbetreiber',
    description:
      '{brand} rekrutiert Ingenieure, Techniker und Vertriebsteams aus Osteuropa für europäische Mobilfunkbetreiber.',
  },
  nav: {
    services: 'Betreiber',
    why: 'Warum wir',
    candidates: 'Bewerber',
    apply: 'Bewerben',
    contact: 'Kontakt',
    language: 'Sprache',
    skip: 'Zum Inhalt springen',
  },
  hero: {
    eyebrow: 'Telekom-Recruiting · Osteuropa',
    title: 'Die richtigen Fachkräfte für Ihre Netze.',
    subtitle:
      'Wir bringen Mobilfunkbetreiber mit qualifizierten Fachkräften aus Osteuropa zusammen: Funk- und Core-Netz-Ingenieure, Außendiensttechniker, Vertriebs- und Kundenservice-Teams.',
    ctaClients: 'Ich bin Betreiber',
    ctaCandidates: 'Ich suche einen Job',
    badges: ['5G · LTE · Glasfaser', 'Mehrsprachige Teams', 'DSGVO-konform'],
  },
  services: {
    title: 'Was wir Betreibern bieten',
    intro: 'Einsatzbereite Teams, rekrutiert und betreut von Telekom-Spezialisten.',
    items: [
      {
        title: 'Netzausbau & Engineering',
        text: 'RF-Ingenieure, Funkoptimierung, Core-Netz und Übertragungstechnik für Ihren 4G/5G-Ausbau.',
      },
      {
        title: 'Außendiensttechniker',
        text: 'Standortinstallation und -wartung, Glasfaseranschlüsse und Einsätze in Ihrem gesamten Gebiet.',
      },
      {
        title: 'Vertrieb & Kundenservice',
        text: 'Mehrsprachige Shop-Berater und Contact-Center-Agenten, geschult auf Ihre Angebote und Tools.',
      },
    ],
  },
  why: {
    title: 'Warum mit uns arbeiten',
    items: [
      {
        title: 'Ein Talentpool in Osteuropa',
        text: 'Serbien, Balkan, Mitteleuropa: direkter Zugang zu seltenen, motivierten technischen Profilen.',
      },
      {
        title: 'Schnelle Besetzung',
        text: 'Fachliche und sprachliche Vorauswahl, damit Sie schnell passende Kandidaten kennenlernen.',
      },
      {
        title: 'Sicherer Rahmen',
        text: 'Verträge, Mobilität und personenbezogene Daten im Einklang mit europäischem Recht.',
      },
    ],
  },
  candidates: {
    title: 'Bewerber: Arbeiten Sie an Telekom-Projekten in Europa',
    intro:
      'Ingenieur, Techniker oder im Vertrieb? Wir begleiten Sie von der Bewerbung bis zum ersten Arbeitstag.',
    steps: [
      { title: 'Online bewerben', text: 'Senden Sie Ihren Lebenslauf in 2 Minuten, in der Sprache Ihrer Wahl.' },
      { title: 'Gespräch mit einem Recruiter', text: 'Ein Gespräch über Ihre Kompetenzen und Wünsche.' },
      { title: 'Einsatz starten', text: 'Wir unterstützen Sie bei Vertrag, Umzug und Einarbeitung.' },
    ],
  },
  form: {
    title: 'Jetzt bewerben',
    intro: 'Mit * markierte Felder sind Pflichtfelder.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    phone: 'Telefon',
    country: 'Wohnsitzland',
    countryPlaceholder: 'Land auswählen',
    otherCountry: 'Anderes Land',
    domain: 'Bereich',
    domainPlaceholder: 'Bereich auswählen',
    domains: {
      rf: 'Funktechnik (RF)',
      core: 'Core-Netz / Übertragung',
      field: 'Außendiensttechniker',
      it: 'IT / Software',
      sales: 'Vertrieb & Shop',
      care: 'Kundenservice',
      pm: 'Projektmanagement',
      other: 'Sonstiges',
    },
    languages: 'Sprachkenntnisse',
    languagesHint: 'z. B. Serbisch, Englisch, Deutsch',
    message: 'Nachricht (optional)',
    cv: 'Lebenslauf',
    cvHint: 'PDF, DOC oder DOCX, max. 5 MB.',
    consent:
      'Ich willige ein, dass meine Daten zur Bearbeitung meiner Bewerbung verarbeitet und 24 Monate gemäß der Datenschutzerklärung gespeichert werden.',
    privacyLink: 'Datenschutzerklärung lesen',
    submit: 'Bewerbung senden',
    sending: 'Wird gesendet…',
    success: 'Vielen Dank! Ihre Bewerbung ist eingegangen. Sie erhalten eine Bestätigung per E-Mail.',
    errorGeneric: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns an die unten stehende Adresse.',
    errorInvalid: 'Einige Felder sind ungültig. Bitte prüfen Sie das Formular.',
    errorFile: 'Der Lebenslauf muss eine PDF-, DOC- oder DOCX-Datei mit max. 5 MB sein.',
    errorCaptcha: 'Die Spam-Prüfung ist fehlgeschlagen. Bitte laden Sie die Seite neu.',
  },
  contact: {
    title: 'Sprechen wir über Ihren Bedarf',
    text: 'Betreiber, Integrator oder Subunternehmer: Beschreiben Sie Ihr Projekt, wir melden uns innerhalb von 2 Werktagen.',
    cta: 'Schreiben Sie uns',
  },
  footer: {
    tagline: 'Telekom-Fachkräfte aus Osteuropa für europäische Betreiber.',
    privacy: 'Datenschutz',
    rights: 'Alle Rechte vorbehalten.',
  },
  privacy: {
    title: 'Datenschutzerklärung',
    updated: 'Stand: November 2026',
    sections: [
      {
        title: 'Verantwortlicher',
        text: '{brand} ist verantwortlich für die über diese Website erhobenen Daten. Kontakt: {email}.',
      },
      {
        title: 'Erhobene Daten',
        text: 'Identität, Kontaktdaten, Land, Bereich, Sprachen, Nachricht und Lebenslauf aus dem Bewerbungsformular.',
      },
      {
        title: 'Zweck und Rechtsgrundlage',
        text: 'Bearbeitung Ihrer Bewerbung und Vermittlung an unsere Kunden, auf Grundlage Ihrer Einwilligung.',
      },
      {
        title: 'Hosting und Speicherdauer',
        text: 'Die Daten werden in der Europäischen Union gehostet und 24 Monate nach dem letzten Kontakt gelöscht.',
      },
      {
        title: 'Ihre Rechte',
        text: 'Sie können Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen oder Ihre Einwilligung widerrufen: {email}. Sie können sich auch bei Ihrer Datenschutzaufsichtsbehörde beschweren.',
      },
    ],
    back: 'Zurück zur Startseite',
  },
};

export default de;
