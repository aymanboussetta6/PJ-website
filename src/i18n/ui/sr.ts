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
  contactForm: {
    eyebrow: 'Kontakt',
    title: 'Razgovarajmo o vašem projektu',
    intro: 'Klijent, podizvođač ili dobavljač: pišite nam, prava osoba će vam odgovoriti u roku od 2 radna dana.',
    typeLabel: 'Vi ste',
    types: {
      client: { label: 'Klijent', hint: 'Operater, TowerCo, upravitelj mreže…' },
      subcontractor: { label: 'Podizvođač', hint: 'Izvođačka ili projektantska firma' },
      supplier: { label: 'Dobavljač', hint: 'Materijal, oprema, usluge' },
      other: { label: 'Drugi zahtev', hint: 'Mediji, partnerstvo…' },
    },
    company: 'Kompanija',
    fullName: 'Ime i prezime',
    jobTitle: 'Funkcija',
    email: 'Poslovni imejl',
    phone: 'Telefon',
    country: 'Zemlja',
    trades: 'Oblasti koje nudite',
    message: 'Vaša poruka',
    messagePlaceholder: 'Kontekst, lokacija, obim, rokovi…',
    attachment: 'Prilog (opciono)',
    attachmentHint: 'Brošura, reference, projektni zadatak: PDF, najviše 10 MB.',
    consent:
      'Saglasan/saglasna sam da se moji podaci koriste za odgovor na zahtev i čuvaju 3 godine, u skladu sa politikom privatnosti.',
    submit: 'Pošalji zahtev',
    success: 'Hvala! Vaš zahtev je poslat. Javićemo vam se uskoro.',
    errorFile: 'Prilog mora biti PDF fajl do 10 MB.',
    candidate: 'Tražite posao?',
    candidateLink: 'Prijavite se u odeljku Karijera',
    direct: 'Ili nam pišite direktno',
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
        text: 'Prijave za posao: identitet, kontakt podaci, zemlja, zanimanje, jezici, poruka i CV. Zahtevi za kontakt: kompanija, identitet, funkcija, kontakt podaci, zemlja, poruka i eventualni prilog.',
      },
      {
        title: 'Svrha i pravni osnov',
        text: 'Razmatranje vaše prijave ili zahteva za kontakt, na osnovu vašeg pristanka.',
      },
      {
        title: 'Smeštaj i rok čuvanja',
        text: 'Podaci se čuvaju u Evropskoj uniji. Prijave za posao se čuvaju 24 meseca, a zahtevi za kontakt 3 godine nakon poslednje komunikacije, a zatim se brišu.',
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
