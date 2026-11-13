import type { Dictionary } from './fr';

const de: Dictionary = {
  meta: {
    title: '{brand} — Projektsteuerung und Bauleistungen für die Telekommunikation',
    description:
      '{brand} unterstützt Netzbetreiber und Infrastrukturbetreiber: Ingenieurbüro, Infrastruktur- und Funkstandortausbau, Glasfaser, Tiefbau und Wartung.',
  },
  nav: {
    activities: 'Leistungen',
    approach: 'Vorgehen',
    sectors: 'Kunden',
    careers: 'Karriere',
    contact: 'Kontakt',
    quote: 'Anfrage senden',
    language: 'Sprache',
    skip: 'Zum Inhalt springen',
  },
  hero: {
    eyebrow: 'Telekom-Projektsteuerung · Frankreich & Deutschland',
    title: 'Wir planen, bauen und warten Ihre Telekommunikationsnetze.',
    subtitle:
      'Von der Planung über die Inbetriebnahme bis zur Wartung: ein Ansprechpartner für Ihre Funk-, Glasfaser- und Infrastrukturprojekte.',
    ctaPrimary: 'Anfrage senden',
    ctaSecondary: 'Unsere Leistungen',
    badges: ['4G · 5G', 'FTTH · FTTO', 'Masten & Dachstandorte', 'Tiefbau'],
  },
  activities: {
    title: 'Unsere Leistungen',
    intro: 'Sechs sich ergänzende Gewerke für den gesamten Lebenszyklus Ihrer Telekommunikationsinfrastruktur.',
    items: {
      studies: {
        title: 'Ingenieurbüro',
        text: 'Standortbegehungen, Machbarkeitsstudien, Ausführungspläne, Genehmigungsunterlagen sowie Funk- und Glasfaserplanung.',
      },
      infra: {
        title: 'Ausbau der Telekom-Infrastruktur',
        text: 'Standortbau: Masten, Dachstandorte, Shelter, Energie und Anschlüsse, mit vollständiger Bauleitung.',
      },
      radio: {
        title: 'Funkausbau',
        text: 'Installation, Integration und Inbetriebnahme von 2G- bis 5G-Technik, Swaps und Standortmodernisierung.',
      },
      maintenance: {
        title: 'Präventive und korrektive Wartung',
        text: 'Geplante Begehungen, Störungsbeseitigung, Bereitschaftsdienst und Überwachung der Servicelevel.',
      },
      fiber: {
        title: 'Glasfaser',
        text: 'Einzug, Anschluss, Spleißen und Messungen in FTTH-, FTTO- und Backbone-Netzen, oberirdisch und unterirdisch.',
      },
      civil: {
        title: 'Tiefbau',
        text: 'Gräben, Leerrohre, Kabelschächte, Fundamente und Wiederherstellung der Oberflächen.',
      },
    },
  },
  approach: {
    title: 'Unser Vorgehen in der Projektsteuerung',
    intro: 'Eine zentrale Steuerung von der ersten Begehung bis zur Wartung.',
    steps: [
      { title: 'Planen', text: 'Bedarfsanalyse, Begehungen und technische Planung.' },
      { title: 'Bauen', text: 'Koordination der Gewerke, Arbeitssicherheit und Termintreue.' },
      { title: 'In Betrieb nehmen', text: 'Abnahme, Prüfungen, Bestandsdokumentation und Übergabe.' },
      { title: 'Warten', text: 'Präventive und korrektive Wartung für maximale Verfügbarkeit.' },
    ],
  },
  sectors: {
    title: 'Für wen wir arbeiten',
    intro: 'Wir arbeiten an der Seite der Unternehmen, die Netze bauen und betreiben.',
    items: [
      { title: 'Mobilfunk- und Festnetzbetreiber', text: '4G/5G-Verdichtung, Funkmodernisierung und Glasfaseranbindung von Standorten.' },
      { title: 'TowerCos und Standortbetreiber', text: 'Bau und Wartung gemeinsam genutzter Masten und Dachstandorte.' },
      { title: 'Bahn und Verkehr', text: 'Telekommunikationsnetze entlang der Strecke, in Bahnhöfen und an technischen Standorten.' },
      { title: 'Kommunen und Erschließungsträger', text: 'Geförderte Glasfasernetze, Breitbandausbau und zugehöriger Tiefbau.' },
    ],
  },
  commitments: {
    title: 'Unsere Verpflichtungen',
    items: [
      { title: 'Sicherheit zuerst', text: 'Prävention, Schutzausrüstung und Sicherheitskultur auf jeder Baustelle.' },
      { title: 'Reaktionsfähigkeit', text: 'Schnell einsetzbare Teams in Frankreich und Deutschland.' },
      { title: 'Messbare Qualität', text: 'Kontrollen, Reporting und Nachverfolgbarkeit jedes Einsatzes.' },
    ],
  },
  careers: {
    title: 'Werden Sie Teil unseres Teams',
    intro:
      'Techniker, Bauleiter, Projektleiter, Ingenieure: Wir stellen in Frankreich, Deutschland und Osteuropa ein.',
    steps: [
      { title: 'Online bewerben', text: 'Senden Sie Ihren Lebenslauf in 2 Minuten, in der Sprache Ihrer Wahl.' },
      { title: 'Gespräch mit unserem Team', text: 'Ein Gespräch über Ihre Kompetenzen und Wünsche.' },
      { title: 'Start auf der Baustelle', text: 'Einarbeitung, Sicherheitsschulung und Begleitung bei den ersten Einsätzen.' },
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
    domain: 'Fachbereich',
    domainPlaceholder: 'Fachbereich auswählen',
    domains: {
      studies: 'Ingenieurbüro',
      infra: 'Telekom-Infrastruktur',
      radio: 'Funk',
      maintenance: 'Wartung',
      fiber: 'Glasfaser',
      civil: 'Tiefbau',
      management: 'Bauleitung / Projektleitung',
      other: 'Sonstiges',
    },
    languages: 'Sprachkenntnisse',
    languagesHint: 'z. B. Deutsch, Serbisch, Englisch',
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
  contactForm: {
    eyebrow: 'Kontakt',
    title: 'Sprechen wir über Ihr Projekt',
    intro: 'Kunde, Subunternehmer oder Lieferant: Schreiben Sie uns, der richtige Ansprechpartner antwortet innerhalb von 2 Werktagen.',
    typeLabel: 'Sie sind',
    types: {
      client: { label: 'Kunde', hint: 'Netzbetreiber, TowerCo, Infrastrukturbetreiber…' },
      subcontractor: { label: 'Subunternehmer', hint: 'Bau- oder Ingenieurunternehmen' },
      supplier: { label: 'Lieferant', hint: 'Material, Ausrüstung, Dienstleistungen' },
      other: { label: 'Sonstige Anfrage', hint: 'Presse, Partnerschaft…' },
    },
    company: 'Unternehmen',
    fullName: 'Vor- und Nachname',
    jobTitle: 'Funktion',
    email: 'Geschäftliche E-Mail',
    phone: 'Telefon',
    country: 'Land',
    trades: 'Angebotene Gewerke',
    message: 'Ihre Nachricht',
    messagePlaceholder: 'Kontext, Standort, Umfang, Termine…',
    attachment: 'Anhang (optional)',
    attachmentHint: 'Broschüre, Referenzen, Leistungsbeschreibung: PDF, max. 10 MB.',
    consent:
      'Ich willige ein, dass meine Daten zur Beantwortung meiner Anfrage verwendet und 3 Jahre gemäß der Datenschutzerklärung gespeichert werden.',
    submit: 'Anfrage senden',
    success: 'Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.',
    errorFile: 'Der Anhang muss eine PDF-Datei mit max. 10 MB sein.',
    candidate: 'Sie suchen eine Stelle?',
    candidateLink: 'Bewerben Sie sich im Bereich Karriere',
    direct: 'Oder schreiben Sie uns direkt',
  },
  footer: {
    tagline: 'Projektsteuerung und Bauleistungen für die Telekommunikation in Frankreich und Deutschland.',
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
        text: 'Bewerbungen: Identität, Kontaktdaten, Land, Fachbereich, Sprachen, Nachricht und Lebenslauf. Kontaktanfragen: Unternehmen, Identität, Funktion, Kontaktdaten, Land, Nachricht und ggf. Anhang.',
      },
      {
        title: 'Zweck und Rechtsgrundlage',
        text: 'Bearbeitung Ihrer Bewerbung oder Kontaktanfrage auf Grundlage Ihrer Einwilligung.',
      },
      {
        title: 'Hosting und Speicherdauer',
        text: 'Die Daten werden in der Europäischen Union gehostet. Bewerbungen werden 24 Monate, Kontaktanfragen 3 Jahre nach dem letzten Austausch gespeichert und danach gelöscht.',
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
