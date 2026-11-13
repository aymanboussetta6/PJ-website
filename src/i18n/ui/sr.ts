import type { Dictionary } from './fr';

// Srpski (latinica). Ćirilična verzija se generiše automatski (vidi src/i18n/translit.ts).
const sr: Dictionary = {
  meta: {
    title: '{brand} — Nadzor i izvođenje telekomunikacionih radova',
    description:
      '{brand} sarađuje sa operaterima i upraviteljima infrastrukture: projektni biro, izgradnja infrastrukture i radio lokacija, optička vlakna, građevinski radovi i održavanje.',
  },
  nav: {
    activities: 'Delatnosti',
    approach: 'Metod',
    sectors: 'Klijenti',
    careers: 'Karijera',
    contact: 'Kontakt',
    quote: 'Kontaktirajte nas',
    language: 'Jezik',
    skip: 'Preskoči na sadržaj',
  },
  hero: {
    eyebrow: 'Telekom projektni nadzor · Francuska i Nemačka',
    title: 'Projektujemo, gradimo i održavamo vaše telekomunikacione mreže.',
    subtitle:
      'Od projekta do puštanja u rad, a zatim i održavanja: jedan partner za vaše radio, optičke i infrastrukturne projekte.',
    ctaPrimary: 'Kontaktirajte nas',
    ctaSecondary: 'Naše delatnosti',
    badges: ['4G · 5G', 'FTTH · FTTO', 'Stubovi i krovne lokacije', 'Građevinski radovi'],
  },
  activities: {
    title: 'Naše delatnosti',
    intro: 'Šest komplementarnih oblasti koje pokrivaju ceo životni ciklus vaše telekom infrastrukture.',
    items: {
      studies: {
        title: 'Projektni biro',
        text: 'Snimanje terena, studije izvodljivosti, izvođački projekti, dozvole i projektovanje radio i optičkih mreža.',
      },
      infra: {
        title: 'Izgradnja telekom infrastrukture',
        text: 'Izgradnja lokacija: stubovi, krovovi, kontejneri, napajanje i priključci, uz kompletno vođenje radova.',
      },
      radio: {
        title: 'Izgradnja radio mreže',
        text: 'Instalacija, integracija i puštanje u rad opreme od 2G do 5G, zamena i modernizacija lokacija.',
      },
      maintenance: {
        title: 'Korektivno i preventivno održavanje',
        text: 'Planirani obilasci, intervencije pri kvarovima, dežurstvo i praćenje nivoa usluge.',
      },
      fiber: {
        title: 'Optička vlakna',
        text: 'Uvlačenje, povezivanje, spajanje i merenja na FTTH, FTTO i transportnim mrežama, nadzemno i podzemno.',
      },
      civil: {
        title: 'Građevinski radovi',
        text: 'Rovovi, cevi, kablovska okna, temelji i sanacija kolovoza.',
      },
    },
  },
  approach: {
    title: 'Naš metod projektnog nadzora',
    intro: 'Jedinstveno upravljanje, od prvog snimanja terena do održavanja.',
    steps: [
      { title: 'Projektovanje', text: 'Analiza potreba, snimanje terena i tehničko projektovanje.' },
      { title: 'Izgradnja', text: 'Koordinacija izvođača, bezbednost i poštovanje rokova.' },
      { title: 'Puštanje u rad', text: 'Prijem, kontrole, dokumentacija izvedenog stanja i primopredaja.' },
      { title: 'Održavanje', text: 'Preventivno i korektivno održavanje radi pune dostupnosti.' },
    ],
  },
  sectors: {
    title: 'Za koga radimo',
    intro: 'Radimo zajedno sa kompanijama koje grade i upravljaju mrežama.',
    items: [
      { title: 'Mobilni i fiksni operateri', text: 'Zgušnjavanje 4G/5G mreže, modernizacija radio opreme i optičko povezivanje lokacija.' },
      { title: 'TowerCo kompanije', text: 'Izgradnja i održavanje zajedničkih stubova i krovnih lokacija.' },
      { title: 'Železnica i saobraćaj', text: 'Telekom mreže duž pruga, na stanicama i tehničkim lokacijama.' },
      { title: 'Lokalne samouprave i investitori', text: 'Javne optičke mreže, širokopojasni pristup i prateći građevinski radovi.' },
    ],
  },
  commitments: {
    title: 'Naše obaveze',
    items: [
      { title: 'Bezbednost na prvom mestu', text: 'Prevencija, zaštitna oprema i kultura bezbednosti na svakom gradilištu.' },
      { title: 'Brza reakcija', text: 'Timovi spremni za brzo angažovanje u Francuskoj i Nemačkoj.' },
      { title: 'Merljiv kvalitet', text: 'Kontrole, izveštavanje i sledljivost svake intervencije.' },
    ],
  },
  careers: {
    title: 'Pridružite se našim timovima',
    intro:
      'Tehničari, šefovi gradilišta, rukovodioci projekata, inženjeri: zapošljavamo u Francuskoj, Nemačkoj i Istočnoj Evropi.',
    steps: [
      { title: 'Prijavite se onlajn', text: 'Pošaljite CV za 2 minuta, na jeziku po vašem izboru.' },
      { title: 'Razgovor sa našim timom', text: 'Intervju o vašim veštinama i očekivanjima.' },
      { title: 'Počnite na terenu', text: 'Uvodna obuka, obuka iz bezbednosti i podrška na prvim gradilištima.' },
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
    domain: 'Zanimanje',
    domainPlaceholder: 'Izaberite zanimanje',
    domains: {
      studies: 'Projektni biro',
      infra: 'Telekom infrastruktura',
      radio: 'Radio',
      maintenance: 'Održavanje',
      fiber: 'Optička vlakna',
      civil: 'Građevinski radovi',
      management: 'Vođenje radova / rukovodilac projekta',
      other: 'Ostalo',
    },
    languages: 'Jezici koje govorite',
    languagesHint: 'Npr. srpski, francuski, engleski',
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
    title: 'Projekat izgradnje ili održavanja?',
    text: 'Opišite nam vaše potrebe: javićemo vam se u roku od 2 radna dana sa prvim predlogom.',
    cta: 'Pišite nam',
  },
  footer: {
    tagline: 'Nadzor i izvođenje telekomunikacionih radova u Francuskoj i Nemačkoj.',
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
        text: 'Identitet, kontakt podaci, zemlja, zanimanje, jezici, poruka i CV poslati putem formulara za prijavu.',
      },
      {
        title: 'Svrha i pravni osnov',
        text: 'Razmatranje vaše prijave, na osnovu vašeg pristanka.',
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
