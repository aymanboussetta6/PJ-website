// Dictionnaire de référence : les autres langues doivent avoir exactement la même structure.
// {brand} est remplacé par le nom de la société (voir src/i18n/site.ts).
const fr = {
  meta: {
    title: '{brand} — Talents télécoms pour les opérateurs mobiles',
    description:
      "{brand} recrute et met à disposition des ingénieurs, techniciens et équipes commerciales d'Europe de l'Est pour les opérateurs mobiles européens.",
  },
  nav: {
    services: 'Opérateurs',
    why: 'Pourquoi nous',
    candidates: 'Candidats',
    apply: 'Postuler',
    contact: 'Contact',
    language: 'Langue',
    skip: 'Aller au contenu',
  },
  hero: {
    eyebrow: "Recrutement télécom · Europe de l'Est",
    title: 'Les bons talents pour faire tourner vos réseaux.',
    subtitle:
      "Nous connectons les opérateurs mobiles avec des profils qualifiés d'Europe de l'Est : ingénieurs radio et cœur de réseau, techniciens terrain, équipes de vente et de relation client.",
    ctaClients: 'Je suis un opérateur',
    ctaCandidates: 'Je cherche une mission',
    badges: ['5G · LTE · Fibre', 'Équipes multilingues', 'Conforme RGPD'],
  },
  services: {
    title: 'Ce que nous apportons aux opérateurs',
    intro:
      'Des équipes prêtes à intervenir, recrutées et suivies par des spécialistes du secteur télécom.',
    items: [
      {
        title: 'Déploiement & ingénierie réseau',
        text: 'Ingénieurs RF, optimisation radio, cœur de réseau et transmission pour vos déploiements 4G/5G.',
      },
      {
        title: 'Techniciens terrain',
        text: 'Installation et maintenance de sites, raccordements fibre, interventions sur toute la zone couverte.',
      },
      {
        title: 'Vente & relation client',
        text: 'Conseillers en boutique et centres de contact multilingues, formés à vos offres et à vos outils.',
      },
    ],
  },
  why: {
    title: 'Pourquoi travailler avec nous',
    items: [
      {
        title: "Un vivier en Europe de l'Est",
        text: 'Serbie, Balkans, Europe centrale : un accès direct à des profils techniques rares et motivés.',
      },
      {
        title: 'Rapidité de staffing',
        text: 'Une présélection technique et linguistique pour vous présenter des candidats pertinents rapidement.',
      },
      {
        title: 'Cadre sécurisé',
        text: 'Contrats, mobilité et données personnelles gérés dans le respect du droit européen.',
      },
    ],
  },
  candidates: {
    title: 'Candidats : rejoignez des projets télécoms en Europe',
    intro:
      "Vous êtes ingénieur, technicien ou commercial ? Nous vous accompagnons de la candidature jusqu'au premier jour de mission.",
    steps: [
      { title: 'Postulez en ligne', text: 'Envoyez votre CV en 2 minutes, dans la langue de votre choix.' },
      { title: 'Échange avec un recruteur', text: 'Un entretien pour comprendre vos compétences et vos souhaits.' },
      { title: 'Démarrez votre mission', text: 'Nous vous accompagnons sur le contrat, la mobilité et l’intégration.' },
    ],
  },
  form: {
    title: 'Déposez votre candidature',
    intro: 'Les champs marqués * sont obligatoires.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    phone: 'Téléphone',
    country: 'Pays de résidence',
    countryPlaceholder: 'Sélectionnez un pays',
    otherCountry: 'Autre pays',
    domain: 'Domaine',
    domainPlaceholder: 'Sélectionnez un domaine',
    domains: {
      rf: 'Ingénierie radio (RF)',
      core: 'Cœur de réseau / transmission',
      field: 'Technicien terrain',
      it: 'IT / logiciel',
      sales: 'Vente & boutique',
      care: 'Relation client',
      pm: 'Gestion de projet',
      other: 'Autre',
    },
    languages: 'Langues parlées',
    languagesHint: 'Ex. : serbe, anglais, allemand',
    message: 'Message (facultatif)',
    cv: 'CV',
    cvHint: 'PDF, DOC ou DOCX, 5 Mo maximum.',
    consent:
      "J'accepte que mes données soient traitées pour le traitement de ma candidature et conservées 24 mois, conformément à la politique de confidentialité.",
    privacyLink: 'Lire la politique de confidentialité',
    submit: 'Envoyer ma candidature',
    sending: 'Envoi en cours…',
    success: 'Merci ! Votre candidature a bien été reçue. Un e-mail de confirmation vous a été envoyé.',
    errorGeneric: "Une erreur est survenue. Réessayez ou écrivez-nous à l'adresse ci-dessous.",
    errorInvalid: 'Certains champs sont invalides. Vérifiez le formulaire.',
    errorFile: 'Le CV doit être un fichier PDF, DOC ou DOCX de 5 Mo maximum.',
    errorCaptcha: 'La vérification anti-spam a échoué. Rechargez la page et réessayez.',
  },
  contact: {
    title: 'Parlons de vos besoins',
    text: 'Opérateur, intégrateur ou sous-traitant : décrivez-nous votre projet, nous revenons vers vous sous 48 h ouvrées.',
    cta: 'Nous écrire',
  },
  footer: {
    tagline: "Talents télécoms d'Europe de l'Est pour les opérateurs européens.",
    privacy: 'Confidentialité',
    rights: 'Tous droits réservés.',
  },
  privacy: {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : novembre 2026',
    sections: [
      {
        title: 'Responsable du traitement',
        text: '{brand} est responsable du traitement des données collectées via ce site. Contact : {email}.',
      },
      {
        title: 'Données collectées',
        text: 'Identité, coordonnées, pays, domaine, langues, message et CV transmis via le formulaire de candidature.',
      },
      {
        title: 'Finalité et base légale',
        text: 'Gestion de votre candidature et mise en relation avec nos clients, sur la base de votre consentement.',
      },
      {
        title: 'Hébergement et durée de conservation',
        text: "Les données sont hébergées dans l'Union européenne et conservées 24 mois après le dernier contact, puis supprimées.",
      },
      {
        title: 'Vos droits',
        text: "Vous pouvez accéder à vos données, les rectifier, les supprimer ou retirer votre consentement en écrivant à {email}. Vous pouvez aussi saisir l'autorité de protection des données de votre pays.",
      },
    ],
    back: "Retour à l'accueil",
  },
};

export default fr;
export type Dictionary = typeof fr;
