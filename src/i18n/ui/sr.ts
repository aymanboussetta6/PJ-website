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
    menu: 'Meni',
    home: 'Početna',
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
    explore: 'Dodirnite tačku da otkrijete naše delatnosti',
  },
  activities: {
    title: "Naše delatnosti",
    intro: "Devet komplementarnih oblasti koje pokrivaju ceo životni ciklus vaše telekom infrastrukture, od projekta do održavanja.",
    vendors: "Naši timovi rade u okruženjima sa više proizvođača: instaliraju, integrišu i puštaju u rad opremu vodećih proizvođača na tržištu, među kojima su Huawei, Nokia i Cisco.",
    items: {
      studies: {
        title: "Projektni biro",
        text: "Pripremamo svaku lokaciju pre početka radova: snimanje terena, izvodljivost, dimenzionisanje i dokumentacija za dozvole.",
        points: ["Snimanje terena i tehnički obilasci", "Izvođački projekti i proračuni", "Dozvole i projekat izvedenog stanja"],
      },
      civil: {
        title: "Građevinski radovi",
        text: "Gradimo objekte koji nose mrežu, od temelja stubova do rovova za optiku i sanacije kolovoza.",
        points: ["Temelji i ploče", "Rovovi, cevi i okna", "Sanacija kolovoza"],
      },
      infra: {
        title: "Izgradnja telekom infrastrukture",
        text: "Gradimo lokacije po principu ključ u ruke: stubovi, krovne lokacije, tehnički prostori i kablovske trase, uz kompletno vođenje radova.",
        points: ["Stubovi i jarboli", "Krovne lokacije", "Kontejneri i tehnički prostori"],
      },
      energy: {
        title: "Elektroenergetika i napajanje",
        text: "Napajamo i štitimo vaše lokacije: priključak na mrežu, razvodni ormani, sistemi napajanja i baterije, uzemljenje i gromobranska zaštita.",
        points: ["Jaka i slaba struja", "Sistemi napajanja i baterije", "Uzemljenje i prenaponska zaštita"],
      },
      radio: {
        title: "Izgradnja radio mreže",
        text: "Instaliramo i modernizujemo radio opremu od 2G do 5G: antene, radio module, ormane i kabliranje, uključujući zamenu opreme na aktivnim lokacijama.",
        points: ["Antene i radio moduli", "Zamena opreme i novi opsezi", "Ormani i spojni kablovi"],
      },
      microwave: {
        title: "Radio-relejne veze",
        text: "Povezujemo vaše lokacije radio-relejnim vezama: provera optičke vidljivosti, montaža antena, usmeravanje i puštanje veza u rad.",
        points: ["Provera optičke vidljivosti", "Montaža i usmeravanje", "Prenosne veze"],
      },
      fiber: {
        title: "Optička vlakna",
        text: "Polažemo i povezujemo optiku nadzemno, podzemno i u zgradama, uz spajanje vlakana i OTDR merenja.",
        points: ["FTTH, FTTO i transport", "Uvlačenje i spajanje", "Merenja i optički prijem"],
      },
      commissioning: {
        title: "Puštanje u rad",
        text: "Integrišemo opremu u mrežu i proveravamo njen rad pre primopredaje: podešavanje, testovi, prijem i zapisnici.",
        points: ["Integracija i podešavanje", "Testovi i merenja", "Prijem i otklanjanje primedbi"],
      },
      maintenance: {
        title: "Korektivno i preventivno održavanje",
        text: "Održavamo vaše lokacije u radnom stanju: planirani obilasci, otklanjanje kvarova, dežurstvo i praćenje nivoa usluge.",
        points: ["Preventivni obilasci", "Intervencije i dežurstvo", "Praćenje vremena otklanjanja kvara"],
      },
    },
  },
  approach: {
    title: "Naš metod projektnog nadzora",
    intro: "Jedan rukovodilac projekta vodi vaš posao od početka do kraja i koordinira sve izvođače.",
    steps: [
      { title: "Projektovanje", text: "Obilazak lokacije, analiza potreba, tehničko projektovanje i dokumentacija za dozvole." },
      { title: "Izgradnja", text: "Građevinski radovi, infrastruktura, napajanje, radio i optika, bezbedno i u roku." },
      { title: "Puštanje u rad", text: "Integracija, testovi, prijem, dokumentacija izvedenog stanja i primopredaja klijentu." },
      { title: "Održavanje", text: "Preventivno i korektivno održavanje radi dostupnosti vaših lokacija." },
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
      energy: "Elektroenergetika",
      microwave: "Radio-relejne veze",
      commissioning: "Puštanje u rad",
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
