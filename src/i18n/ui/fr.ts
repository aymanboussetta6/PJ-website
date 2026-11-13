// Dictionnaire de référence : les autres langues doivent avoir exactement la même structure.
// {brand} est remplacé par le nom de la société (voir src/i18n/site.ts).
const fr = {
  meta: {
    title: "{brand} — Maîtrise d'œuvre et travaux télécoms",
    description:
      "{brand} accompagne opérateurs et gestionnaires d'infrastructures : bureau d'études, déploiement d'infrastructures et de sites radio, fibre optique, génie civil et maintenance.",
  },
  nav: {
    activities: 'Activités',
    approach: 'Méthode',
    sectors: 'Clients',
    careers: 'Carrières',
    contact: 'Contact',
    quote: 'Nous consulter',
    menu: 'Menu',
    home: 'Accueil',
    language: 'Langue',
    skip: 'Aller au contenu',
  },
  hero: {
    eyebrow: "Maîtrise d'œuvre télécom · France & Allemagne",
    title: 'Nous concevons, déployons et maintenons vos réseaux télécoms.',
    subtitle:
      "De l'étude à la mise en service, puis en maintenance : un interlocuteur unique pour vos projets radio, fibre et infrastructures.",
    ctaPrimary: 'Nous consulter',
    ctaSecondary: 'Nos activités',
    badges: ['4G · 5G', 'FTTH · FTTO', 'Pylônes & points hauts', 'Génie civil'],
  },
  activities: {
    title: 'Nos activités',
    intro:
      "Six métiers complémentaires pour couvrir l'ensemble du cycle de vie de vos infrastructures télécoms.",
    items: {
      studies: {
        title: "Bureau d'études",
        text: "Relevés terrain, études de faisabilité, plans d'exécution, dossiers réglementaires et ingénierie radio et fibre.",
      },
      infra: {
        title: 'Déploiement infrastructure télécom',
        text: 'Construction de sites : pylônes, toits-terrasses, shelters, énergie et raccordements, en conduite de travaux complète.',
      },
      radio: {
        title: 'Déploiement radio',
        text: 'Installation, intégration et mise en service des équipements 2G à 5G, swaps et modernisation des sites.',
      },
      maintenance: {
        title: 'Maintenance curative et préventive',
        text: "Visites programmées, interventions sur incident, astreinte et suivi des engagements de qualité de service.",
      },
      fiber: {
        title: 'Fibre optique',
        text: 'Tirage, raccordement, soudure et mesures sur réseaux FTTH, FTTO et transport, en aérien comme en souterrain.',
      },
      civil: {
        title: 'Génie civil',
        text: 'Tranchées, fourreaux, chambres de tirage, massifs de fondation et remise en état de la voirie.',
      },
    },
  },
  approach: {
    title: "Notre méthode de maîtrise d'œuvre",
    intro: 'Un pilotage unique, du premier relevé à la maintenance.',
    steps: [
      { title: 'Étudier', text: 'Analyse du besoin, relevés et conception technique.' },
      { title: 'Construire', text: 'Coordination des corps de métier, sécurité et respect des délais.' },
      { title: 'Mettre en service', text: 'Recette, contrôles, dossiers des ouvrages exécutés et livraison.' },
      { title: 'Maintenir', text: 'Maintenance préventive et curative pour garantir la disponibilité.' },
    ],
  },
  sectors: {
    title: 'Pour qui nous intervenons',
    intro: "Nous travaillons aux côtés des acteurs qui construisent et exploitent les réseaux.",
    items: [
      { title: 'Opérateurs mobiles et fixes', text: 'Densification 4G/5G, modernisation radio et raccordement fibre des sites.' },
      { title: 'TowerCos et hébergeurs', text: 'Construction et maintenance de pylônes et de points hauts mutualisés.' },
      { title: 'Ferroviaire et transport', text: "Réseaux télécoms le long des voies, en gares et sur les sites techniques." },
      { title: 'Collectivités et aménageurs', text: "Réseaux d'initiative publique, montée en débit et génie civil associé." },
    ],
  },
  commitments: {
    title: 'Nos engagements',
    items: [
      { title: 'Sécurité avant tout', text: 'Prévention, équipements de protection et culture sécurité sur chaque chantier.' },
      { title: 'Réactivité', text: 'Des équipes mobilisables rapidement en France et en Allemagne.' },
      { title: 'Qualité mesurée', text: 'Contrôles, reporting et traçabilité de chaque intervention.' },
    ],
  },
  careers: {
    title: 'Rejoignez nos équipes',
    intro:
      "Techniciens, chefs de chantier, chargés d'affaires, ingénieurs : nous recrutons en France, en Allemagne et en Europe de l'Est.",
    steps: [
      { title: 'Postulez en ligne', text: 'Envoyez votre CV en 2 minutes, dans la langue de votre choix.' },
      { title: 'Échange avec nos équipes', text: 'Un entretien pour comprendre vos compétences et vos souhaits.' },
      { title: 'Démarrez sur le terrain', text: 'Accueil, formation sécurité et accompagnement sur vos premiers chantiers.' },
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
    domain: 'Métier',
    domainPlaceholder: 'Sélectionnez un métier',
    domains: {
      studies: "Bureau d'études",
      infra: 'Infrastructure télécom',
      radio: 'Radio',
      maintenance: 'Maintenance',
      fiber: 'Fibre optique',
      civil: 'Génie civil',
      management: "Conduite de travaux / chargé d'affaires",
      other: 'Autre',
    },
    languages: 'Langues parlées',
    languagesHint: 'Ex. : français, serbe, anglais',
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
  contactForm: {
    eyebrow: 'Contact',
    title: 'Parlons de votre projet',
    intro: 'Client, sous-traitant ou fournisseur : écrivez-nous, la bonne personne vous répond sous 48 h ouvrées.',
    typeLabel: 'Vous êtes',
    types: {
      client: { label: 'Client', hint: 'Opérateur, TowerCo, gestionnaire de réseau…' },
      subcontractor: { label: 'Sous-traitant', hint: 'Entreprise de travaux ou d’études' },
      supplier: { label: 'Fournisseur', hint: 'Matériel, équipements, services' },
      other: { label: 'Autre demande', hint: 'Presse, partenariat…' },
    },
    company: 'Société',
    fullName: 'Nom et prénom',
    jobTitle: 'Fonction',
    email: 'E-mail professionnel',
    phone: 'Téléphone',
    country: 'Pays',
    trades: 'Métiers proposés',
    message: 'Votre message',
    messagePlaceholder: 'Contexte, localisation, volumes, délais…',
    attachment: 'Pièce jointe (facultatif)',
    attachmentHint: 'Plaquette, références, cahier des charges : PDF, 10 Mo maximum.',
    consent:
      "J'accepte que mes données soient utilisées pour répondre à ma demande et conservées 3 ans, conformément à la politique de confidentialité.",
    submit: 'Envoyer ma demande',
    success: 'Merci ! Votre demande a bien été envoyée. Nous revenons vers vous rapidement.',
    errorFile: 'La pièce jointe doit être un PDF de 10 Mo maximum.',
    candidate: 'Vous êtes candidat ?',
    candidateLink: 'Postulez dans la rubrique Carrières',
    direct: 'Ou écrivez-nous directement',
  },
  footer: {
    tagline: "Maîtrise d'œuvre et travaux télécoms en France et en Allemagne.",
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
        text: 'Candidatures : identité, coordonnées, pays, métier, langues, message et CV. Demandes de contact : société, identité, fonction, coordonnées, pays, message et pièce jointe éventuelle.',
      },
      {
        title: 'Finalité et base légale',
        text: 'Traitement de votre candidature ou de votre demande de contact, sur la base de votre consentement.',
      },
      {
        title: 'Hébergement et durée de conservation',
        text: "Les données sont hébergées dans l'Union européenne. Les candidatures sont conservées 24 mois et les demandes de contact 3 ans après le dernier échange, puis supprimées.",
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
