import type { Dictionary } from './fr';

// Srpski (latinica). Ćirilična verzija se generiše automatski (vidi src/i18n/translit.ts).
const sr: Dictionary = {
  meta: {
    title: '{brand} — Telekom stručnjaci za mobilne operatere',
    description:
      '{brand} zapošljava inženjere, tehničare i prodajne timove iz Istočne Evrope za evropske mobilne operatere.',
  },
  nav: {
    services: 'Operateri',
    why: 'Zašto mi',
    candidates: 'Kandidati',
    apply: 'Prijava',
    contact: 'Kontakt',
    language: 'Jezik',
    skip: 'Preskoči na sadržaj',
  },
  hero: {
    eyebrow: 'Telekom zapošljavanje · Istočna Evropa',
    title: 'Pravi ljudi za mreže koje rade bez prekida.',
    subtitle:
      'Povezujemo mobilne operatere sa kvalifikovanim stručnjacima iz Istočne Evrope: inženjerima za radio i jezgro mreže, terenskim tehničarima, timovima prodaje i korisničke podrške.',
    ctaClients: 'Ja sam operater',
    ctaCandidates: 'Tražim posao',
    badges: ['5G · LTE · Optika', 'Višejezični timovi', 'Usklađeno sa GDPR'],
  },
  services: {
    title: 'Šta nudimo operaterima',
    intro: 'Timove spremne za rad, koje zapošljavaju i prate stručnjaci za telekomunikacije.',
    items: [
      {
        title: 'Izgradnja i inženjering mreže',
        text: 'RF inženjeri, optimizacija radio mreže, jezgro mreže i transmisija za vaše 4G/5G projekte.',
      },
      {
        title: 'Terenski tehničari',
        text: 'Instalacija i održavanje baznih stanica, optički priključci i intervencije na celoj teritoriji.',
      },
      {
        title: 'Prodaja i korisnička podrška',
        text: 'Višejezični savetnici u prodavnicama i agenti kontakt centra, obučeni za vaše ponude i alate.',
      },
    ],
  },
  why: {
    title: 'Zašto raditi sa nama',
    items: [
      {
        title: 'Baza talenata u Istočnoj Evropi',
        text: 'Srbija, Balkan, Centralna Evropa: direktan pristup retkim i motivisanim tehničkim profilima.',
      },
      {
        title: 'Brzo popunjavanje pozicija',
        text: 'Tehnička i jezička preselekcija kako biste brzo upoznali odgovarajuće kandidate.',
      },
      {
        title: 'Siguran okvir',
        text: 'Ugovori, mobilnost i lični podaci u skladu sa evropskim propisima.',
      },
    ],
  },
  candidates: {
    title: 'Kandidati: radite na telekom projektima širom Evrope',
    intro:
      'Inženjer, tehničar ili prodavac? Pratimo vas od prijave do prvog radnog dana.',
    steps: [
      { title: 'Prijavite se onlajn', text: 'Pošaljite CV za 2 minuta, na jeziku po vašem izboru.' },
      { title: 'Razgovor sa regruterom', text: 'Intervju o vašim veštinama i očekivanjima.' },
      { title: 'Počnite sa radom', text: 'Pomažemo oko ugovora, preseljenja i uvođenja u posao.' },
    ],
  },
  form: {
    title: 'Pošaljite prijavu',
    intro: 'Polja označena sa * su obavezna.',
    firstName: 'Ime',
    lastName: 'Prezime',
    email: 'Imejl',
    phone: 'Telefon',
    country: 'Zemlja boravka',
    countryPlaceholder: 'Izaberite zemlju',
    otherCountry: 'Druga zemlja',
    domain: 'Oblast',
    domainPlaceholder: 'Izaberite oblast',
    domains: {
      rf: 'Radio inženjering (RF)',
      core: 'Jezgro mreže / transmisija',
      field: 'Terenski tehničar',
      it: 'IT / softver',
      sales: 'Prodaja i maloprodaja',
      care: 'Korisnička podrška',
      pm: 'Upravljanje projektima',
      other: 'Ostalo',
    },
    languages: 'Jezici koje govorite',
    languagesHint: 'Npr. srpski, engleski, nemački',
    message: 'Poruka (opciono)',
    cv: 'CV',
    cvHint: 'PDF, DOC ili DOCX, najviše 5 MB.',
    consent:
      'Saglasan/saglasna sam da se moji podaci obrađuju radi razmatranja prijave i čuvaju 24 meseca, u skladu sa politikom privatnosti.',
    privacyLink: 'Pročitajte politiku privatnosti',
    submit: 'Pošalji prijavu',
    sending: 'Slanje…',
    success: 'Hvala! Vaša prijava je primljena. Poslali smo vam potvrdu imejlom.',
    errorGeneric: 'Došlo je do greške. Pokušajte ponovo ili nam pišite na adresu ispod.',
    errorInvalid: 'Neka polja nisu ispravna. Proverite formular.',
    errorFile: 'CV mora biti PDF, DOC ili DOCX fajl do 5 MB.',
    errorCaptcha: 'Provera protiv spama nije uspela. Osvežite stranicu i pokušajte ponovo.',
  },
  contact: {
    title: 'Razgovarajmo o vašim potrebama',
    text: 'Operater, integrator ili podizvođač: opišite nam projekat, javićemo vam se u roku od 2 radna dana.',
    cta: 'Pišite nam',
  },
  footer: {
    tagline: 'Telekom stručnjaci iz Istočne Evrope za evropske operatere.',
    privacy: 'Privatnost',
    rights: 'Sva prava zadržana.',
  },
  privacy: {
    title: 'Politika privatnosti',
    updated: 'Poslednje ažuriranje: novembar 2026.',
    sections: [
      {
        title: 'Rukovalac podacima',
        text: '{brand} je rukovalac podacima prikupljenim putem ovog sajta. Kontakt: {email}.',
      },
      {
        title: 'Prikupljeni podaci',
        text: 'Identitet, kontakt podaci, zemlja, oblast, jezici, poruka i CV poslati putem formulara za prijavu.',
      },
      {
        title: 'Svrha i pravni osnov',
        text: 'Razmatranje vaše prijave i predstavljanje našim klijentima, na osnovu vašeg pristanka.',
      },
      {
        title: 'Smeštaj i rok čuvanja',
        text: 'Podaci se čuvaju u Evropskoj uniji 24 meseca nakon poslednjeg kontakta, a zatim se brišu.',
      },
      {
        title: 'Vaša prava',
        text: 'Možete zatražiti pristup, ispravku ili brisanje podataka, ili povući pristanak, pisanjem na {email}. Možete se obratiti i nadležnom organu za zaštitu podataka.',
      },
    ],
    back: 'Nazad na početnu',
  },
};

export default sr;
