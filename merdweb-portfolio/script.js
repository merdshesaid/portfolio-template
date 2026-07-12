const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const languageButtons = document.querySelectorAll('.language-option');

const translations = {
  en: {
    'page.homeTitle': 'Merdology | Website Design',
    'page.aboutTitle': 'About | Merdology',
    'page.servicesTitle': 'Services | Merdology',
    'page.contactTitle': 'Contact | Merdology',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.tagline': 'Custom website design made for your business',
    'hero.heading': 'Modern. Professional. Affordable.',
    'hero.description': 'I build responsive websites for companies, freelancers, portfolios, online business cards, and projects. Every site is optimized for phones, tablets, and desktops.',
    'hero.cta': 'Send a message',
    'hero.badge': 'Everything included',
    'hero.cardTitle': 'Everything you need for a website',
    'hero.feature1': 'Professional website design',
    'hero.feature2': 'Responsive layout for all devices',
    'hero.feature3': 'Domain registration and setup',
    'hero.feature4': 'Hosting and SSL certificate',
    'hero.feature5': 'Contact form integration',
    'hero.feature6': 'Basic SEO optimization',
    'hero.feature7': 'Performance tuning',
    'hero.feature8': 'Publishing support and technical help',
    'hero.priceNote': 'Estimated price:',
    'hero.price': '€150–200',
    'hero.ctaNoteStrong': 'Send a message.',
    'hero.ctaNote': 'We’ll create a website that represents you or your business professionally.',
    'about.tagline': 'About me',
    'about.heading': "I'm Merd, a 19-year-old student at FERI Maribor.",
    'about.description': 'In my free time I drink coffee and create websites that look professional, load fast, and are easy to use. I help companies, tradespeople, and individuals build a strong online presence.',
    'about.price': '€150–200',
    'about.priceSubtitle': 'Price varies based on project complexity',
    'about.included': 'Included',
    'about.includedSubtitle': 'domain, hosting, SSL, and contact form',
    'about.support': 'Support',
    'about.supportSubtitle': 'help with publishing and technical support after completion',
    'services.tagline': 'Services',
    'services.heading': 'Three levels of web solutions for your next step.',
    'services.level1': 'Level 1',
    'services.title1': 'Landing page',
    'services.desc1': 'Perfect for freelancers and small businesses that need a clean, professional online presence.',
    'services.s1_1': '1-3 pages',
    'services.s1_2': 'Professional design',
    'services.s1_3': 'Responsive layout',
    'services.s1_4': 'Contact form',
    'services.s1_5': 'Basic SEO setup',
    'services.s1_6': 'Hosting and domain',
    'services.price1': '~€150',
    'services.button1': 'Get in touch',
    'services.badge2': 'MOST POPULAR',
    'services.level2': 'Level 2',
    'services.title2': 'Business website',
    'services.desc2': 'A complete online presence for companies and contractors with extra features and SEO support.',
    'services.s2_1': '4-8 pages',
    'services.s2_2': 'Custom professional design',
    'services.s2_3': 'Full SEO optimization',
    'services.s2_4': 'Enhanced contact features',
    'services.s2_5': 'Mobile-focused performance',
    'services.s2_6': 'Technical support and updates',
    'services.price2': '~€175',
    'services.button2': 'Request a quote',
    'services.level3': 'Level 3',
    'services.title3': 'Premium solution',
    'services.desc3': 'A complete web solution with e-commerce, CMS, and advanced integrations.',
    'services.s3_1': '8+ pages with CMS',
    'services.s3_2': 'E-commerce or booking system',
    'services.s3_3': 'Analytics and reporting',
    'services.s3_4': 'Advanced SEO strategy',
    'services.s3_5': 'Integrations and APIs',
    'services.s3_6': 'Ongoing support and updates',
    'services.price3': '~€200+',
    'services.button3': 'Request a quote',
    'contact.tagline': 'Contact',
    'contact.heading': 'Send me a message for more information.',
    'contact.description': 'We’ll create a website that represents you or your business in a professional way.',
    'contact.email': 'Email: merdshesaid@gmail.com',
    'contact.phone': 'Phone: +386 51 428 883',
    'contact.social': 'Instagram: @gottalovemerdd',
    'contact.note': 'Transparent pricing with no hidden fees, depending on project requirements.',
    'contact.labelName': 'Name',
    'contact.labelEmail': 'Email',
    'contact.labelMessage': 'Message',
    'contact.placeholderName': 'Your name',
    'contact.placeholderEmail': 'Your email',
    'contact.placeholderMessage': 'Tell me about your project',
    'contact.button': 'Send message',
    'footer.copyright': '(c) 2026 Merdology - All Rights Reserved | Designed by Merd',
    'footer.backToTop': 'Back to top'
  },
  sl: {
    'page.homeTitle': 'Merdology | Izdelava spletnih strani',
    'page.aboutTitle': 'O meni | Merdology',
    'page.servicesTitle': 'Storitev | Merdology',
    'page.contactTitle': 'Kontakt | Merdology',
    'nav.home': 'Domov',
    'nav.services': 'Storitev',
    'nav.about': 'O meni',
    'nav.contact': 'Kontakt',
    'hero.tagline': 'Izdelava spletnih strani po naročilu',
    'hero.heading': 'Moderno. Profesionalno. Ugodno.',
    'hero.description': 'Izdelam spletne strani po vaših željah za podjetja, obrtnike, portfolio, spletne vizitke ali projekte. Vse strani so prilagojene za telefone, tablice in računalnike.',
    'hero.cta': 'Pišite mi v zasebno sporočilo',
    'hero.badge': 'V ceno je vključeno vse!',
    'hero.cardTitle': 'Vse, kar potrebujete za spletno stran',
    'hero.feature1': 'Profesionalen dizajn spletne strani',
    'hero.feature2': 'Prilagoditev za vse naprave',
    'hero.feature3': 'Registracija in nastavitev domene',
    'hero.feature4': 'Hosting in SSL certifikat',
    'hero.feature5': 'Kontaktni obrazec',
    'hero.feature6': 'Osnovna SEO optimizacija',
    'hero.feature7': 'Optimizacija hitrosti',
    'hero.feature8': 'Pomoč pri objavi in tehnična podpora',
    'hero.priceNote': 'Približna cena:',
    'hero.price': '150–200 €',
    'hero.ctaNoteStrong': 'Pišite mi v zasebno sporočilo.',
    'hero.ctaNote': 'Skupaj bomo ustvarili spletno stran, ki bo predstavljala vas ali vaše podjetje na profesionalen način.',
    'about.tagline': 'O meni',
    'about.heading': 'Sem Merd, 19-letni študent na FERI Maribor.',
    'about.description': 'V prostem času pijem veliko kave in ustvarjam spletne strani, ki izgledajo profesionalno, so hitre in enostavne za uporabo. Pomagam podjetjem, obrtnikom in posameznikom do odlične spletne prisotnosti.',
    'about.price': '150–200 €',
    'about.priceSubtitle': 'Cena glede na zahtevnost projekta',
    'about.included': 'Vključeno',
    'about.includedSubtitle': 'domena, hosting, SSL in kontaktni obrazec',
    'about.support': 'Podpora',
    'about.supportSubtitle': 'pomoč pri objavi in tehnična podpora po zaključku',
    'services.tagline': 'Storitev',
    'services.heading': 'Tri nivojih spletnih rešitev za vašo naslednjo stopnjo.',
    'services.level1': 'Nivo 1',
    'services.title1': 'Spletna vizitka',
    'services.desc1': 'Idealna za samostojne podjetnike in male dejavnosti, ki potrebujejo osnovno spletno prisotnost.',
    'services.s1_1': '1-3 strani',
    'services.s1_2': 'Profesionalen dizajn',
    'services.s1_3': 'Prilagodljivo za vse naprave',
    'services.s1_4': 'Kontaktni obrazec',
    'services.s1_5': 'Osnovna SEO optimizacija',
    'services.s1_6': 'Hosting in domena',
    'services.price1': '~150 €',
    'services.button1': 'Povprašaj',
    'services.badge2': 'NAJPOPULARNEJŠI',
    'services.level2': 'Nivo 2',
    'services.title2': 'Poslovna spletna stran',
    'services.desc2': 'Celovita spletna prisotnost za podjetja in obrtnika z dodatnimi funkcijami in SEO.',
    'services.s2_1': '4-8 strani',
    'services.s2_2': 'Profesionalen, prilagojen dizajn',
    'services.s2_3': 'Polna SEO optimizacija',
    'services.s2_4': 'Napredneni kontaktni obrazci',
    'services.s2_5': 'Optimizacija za mobilne naprave',
    'services.s2_6': 'Tehnična podpora in posodobitve',
    'services.price2': '~175 €',
    'services.button2': 'Povprašaj',
    'services.level3': 'Nivo 3',
    'services.title3': 'Premium rešitev',
    'services.desc3': 'Popolna spletna rešitev z e-commerce, CMS sistemom in naprednimi funkcijami.',
    'services.s3_1': '8+ strani s CMS',
    'services.s3_2': 'E-commerce ali booking sistem',
    'services.s3_3': 'Analitika in poročila',
    'services.s3_4': 'Napredna SEO strategija',
    'services.s3_5': 'Integracije in API-ji',
    'services.s3_6': 'Dolgotrajni support in posodobitve',
    'services.price3': '~200 €+',
    'services.button3': 'Povprašaj',
    'contact.tagline': 'Kontakt',
    'contact.heading': 'Pišite mi v zasebno sporočilo za več informacij.',
    'contact.description': 'Skupaj bomo ustvarili spletno stran, ki bo predstavljala vas ali vaše podjetje na profesionalen način.',
    'contact.email': 'Email: merdshesaid@gmail.com',
    'contact.phone': 'Telefon: +386 51 428 883',
    'contact.social': 'Instagram: @gottalovemerdd',
    'contact.note': 'Cena brez skritih stroškov, odvisna od zahtevnosti projekta.',
    'contact.labelName': 'Ime',
    'contact.labelEmail': 'Email',
    'contact.labelMessage': 'Sporočilo',
    'contact.placeholderName': 'Vaše ime',
    'contact.placeholderEmail': 'Vaš email',
    'contact.placeholderMessage': 'Povejte mi o vašem projektu',
    'contact.button': 'Pošlji sporočilo',
    'footer.copyright': '(c) 2026 Merdology - All Rights Reserved | Designed by Merd',
    'footer.backToTop': 'Nazaj na vrh'
  },
  sk: {
    'page.homeTitle': 'Merdology | Tvorba webových stránok',
    'page.aboutTitle': 'O mne | Merdology',
    'page.servicesTitle': 'Služby | Merdology',
    'page.contactTitle': 'Kontakt | Merdology',
    'nav.home': 'Domov',
    'nav.services': 'Služby',
    'nav.about': 'O mne',
    'nav.contact': 'Kontakt',
    'hero.tagline': 'Tvorba webových stránok presne podľa vašich predstáv',
    'hero.heading': 'Moderné. Profesionálne. Dostupné.',
    'hero.description': 'Tvorím weby pre firmy, freelancerov, portfóliá, online vizitky a projekty. Každá stránka je optimalizovaná pre mobily, tablety a počítače.',
    'hero.cta': 'Pošlite správu',
    'hero.badge': 'Všetko v cene',
    'hero.cardTitle': 'Všetko, čo potrebujete pre web',
    'hero.feature1': 'Profesionálny dizajn webu',
    'hero.feature2': 'Responzívne zobrazenie na všetkých zariadeniach',
    'hero.feature3': 'Registrácia a nastavenie domény',
    'hero.feature4': 'Hosting a SSL certifikát',
    'hero.feature5': 'Integrácia kontaktného formulára',
    'hero.feature6': 'Základná SEO optimalizácia',
    'hero.feature7': 'Optimalizácia rýchlosti',
    'hero.feature8': 'Podpora pri publikovaní a technická pomoc',
    'hero.priceNote': 'Odhadovaná cena:',
    'hero.price': '150–200 €',
    'hero.ctaNoteStrong': 'Pošlite správu.',
    'hero.ctaNote': 'Spolu vytvoríme web, ktorý bude profesionálne reprezentovať vás alebo vašu firmu.',
    'about.tagline': 'O mne',
    'about.heading': 'Som Merd, 19-ročný študent na FERI Maribor.',
    'about.description': 'Vo voľnom čase pijem veľa kávy a tvorím weby, ktoré vyzerajú profesionálne, sú rýchle a jednoduché na používanie. Pomáham firmám, remeselníkom a jednotlivcom získať silnú online prítomnosť.',
    'about.price': '150–200 €',
    'about.priceSubtitle': 'Cena sa líši podľa náročnosti projektu',
    'about.included': 'V cene',
    'about.includedSubtitle': 'doména, hosting, SSL a kontaktný formulár',
    'about.support': 'Podpora',
    'about.supportSubtitle': 'pomoc pri publikovaní a technická podpora po dokončení',
    'services.tagline': 'Služby',
    'services.heading': 'Tri úrovne webových riešení pre vašu ďalšiu fázu.',
    'services.level1': 'Úroveň 1',
    'services.title1': 'Landing page',
    'services.desc1': 'Perfektné pre freelancrov a malé podniky, ktoré potrebujú čistú a profesionálnu online prezentáciu.',
    'services.s1_1': '1-3 stránky',
    'services.s1_2': 'Profesionálny dizajn',
    'services.s1_3': 'Responzívny layout',
    'services.s1_4': 'Kontaktný formulár',
    'services.s1_5': 'Základné SEO',
    'services.s1_6': 'Hosting a doména',
    'services.price1': '~150 €',
    'services.button1': 'Kontaktovať',
    'services.badge2': 'NAJPOPULÁRNEJŠIE',
    'services.level2': 'Úroveň 2',
    'services.title2': 'Firemná webová stránka',
    'services.desc2': 'Komplexná online prezentácia pre firmy a remeselníkov s extra funkciami a SEO podporou.',
    'services.s2_1': '4-8 stránok',
    'services.s2_2': 'Prispôsobený profesionálny dizajn',
    'services.s2_3': 'Plná SEO optimalizácia',
    'services.s2_4': 'Rozšírené kontaktné funkcie',
    'services.s2_5': 'Výkon pre mobilné zariadenia',
    'services.s2_6': 'Technická podpora a aktualizácie',
    'services.price2': '~175 €',
    'services.button2': 'Požiadať o ponuku',
    'services.level3': 'Úroveň 3',
    'services.title3': 'Prémiové riešenie',
    'services.desc3': 'Kompletné webové riešenie s e-commerce, CMS a pokročilými integráciami.',
    'services.s3_1': '8+ stránok s CMS',
    'services.s3_2': 'E-commerce alebo rezervačný systém',
    'services.s3_3': 'Analytika a reporty',
    'services.s3_4': 'Pokročilá SEO stratégia',
    'services.s3_5': 'Integrácie a API',
    'services.s3_6': 'Trvalá podpora a aktualizácie',
    'services.price3': '~200 €+',
    'services.button3': 'Požiadať o ponuku',
    'contact.tagline': 'Kontakt',
    'contact.heading': 'Pošlite mi správu pre viac informácií.',
    'contact.description': 'Spolu vytvoríme web, ktorý bude profesionálne reprezentovať vás alebo vašu firmu.',
    'contact.email': 'Email: merdshesaid@gmail.com',
    'contact.phone': 'Telefón: +386 51 428 883',
    'contact.social': 'Instagram: @gottalovemerdd',
    'contact.note': 'Transparentné ceny bez skrytých poplatkov, podľa požiadaviek projektu.',
    'contact.labelName': 'Meno',
    'contact.labelEmail': 'Email',
    'contact.labelMessage': 'Správa',
    'contact.placeholderName': 'Vaše meno',
    'contact.placeholderEmail': 'Váš email',
    'contact.placeholderMessage': 'Povedzte mi o vašom projekte',
    'contact.button': 'Odoslať správu',
    'footer.copyright': '(c) 2026 Merdology - All Rights Reserved | Designed by Merd',
    'footer.backToTop': 'Späť na vrch'
  },
  tr: {
    'page.homeTitle': 'Merdology | Web Tasarımı',
    'page.aboutTitle': 'Hakkında | Merdology',
    'page.servicesTitle': 'Hizmetler | Merdology',
    'page.contactTitle': 'İletişim | Merdology',
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.about': 'Hakkında',
    'nav.contact': 'İletişim',
    'hero.tagline': 'İşiniz için özel web sitesi tasarımı',
    'hero.heading': 'Modern. Profesyonel. Uygun fiyatlı.',
    'hero.description': 'Şirketler, serbest çalışanlar, portföyler, online kartvizitler ve projeler için duyarlı web siteleri tasarlıyorum. Tüm siteler telefonlar, tabletler ve bilgisayarlar için optimize edilmiştir.',
    'hero.cta': 'Mesaj Gönder',
    'hero.badge': 'Her şey dahil',
    'hero.cardTitle': 'Bir web sitesi için ihtiyacınız olan her şey',
    'hero.feature1': 'Profesyonel web tasarımı',
    'hero.feature2': 'Tüm cihazlar için duyarlı düzen',
    'hero.feature3': 'Alan adı kaydı ve kurulumu',
    'hero.feature4': 'Hosting ve SSL sertifikası',
    'hero.feature5': 'İletişim formu entegrasyonu',
    'hero.feature6': 'Temel SEO optimizasyonu',
    'hero.feature7': 'Performans optimizasyonu',
    'hero.feature8': 'Yayınlama desteği ve teknik yardım',
    'hero.priceNote': 'Tahmini fiyat:',
    'hero.price': '150–200 €',
    'hero.ctaNoteStrong': 'Mesaj gönderin.',
    'hero.ctaNote': 'Sizi veya işinizi profesyonel şekilde temsil edecek bir web sitesi oluşturacağız.',
    'about.tagline': 'Hakkımda',
    'about.heading': 'Ben Merd, FERI Maribor’da 19 yaşında bir öğrenciyim.',
    'about.description': 'Boş zamanlarımda çok kahve içip profesyonel görünen, hızlı ve kullanımı kolay web siteleri tasarlıyorum. Şirketlere, zanaatkarlara ve bireylere güçlü bir çevrimiçi varlık oluşturmalarında yardımcı oluyorum.',
    'about.price': '150–200 €',
    'about.priceSubtitle': 'Fiyat proje karmaşıklığına göre değişir',
    'about.included': 'Dahil',
    'about.includedSubtitle': 'alan adı, hosting, SSL ve iletişim formu',
    'about.support': 'Destek',
    'about.supportSubtitle': 'yayınlama desteği ve tamamlandıktan sonra teknik destek',
    'services.tagline': 'Hizmetler',
    'services.heading': 'Bir sonraki adımınız için üç düzey web çözümü.',
    'services.level1': 'Seviye 1',
    'services.title1': 'Açılış sayfası',
    'services.desc1': 'Temiz ve profesyonel bir çevrimiçi varlık arayan serbest çalışanlar ve küçük işletmeler için idealdir.',
    'services.s1_1': '1-3 sayfa',
    'services.s1_2': 'Profesyonel tasarım',
    'services.s1_3': 'Duyarlı düzen',
    'services.s1_4': 'İletişim formu',
    'services.s1_5': 'Temel SEO kurulumu',
    'services.s1_6': 'Hosting ve alan adı',
    'services.price1': '~150 €',
    'services.button1': 'İletişime geç',
    'services.badge2': 'EN POPÜLER',
    'services.level2': 'Seviye 2',
    'services.title2': 'İş web sitesi',
    'services.desc2': 'Ek özellikler ve SEO desteği ile şirketler ve yükleniciler için eksiksiz çevrimiçi varlık.',
    'services.s2_1': '4-8 sayfa',
    'services.s2_2': 'Özel profesyonel tasarım',
    'services.s2_3': 'Tam SEO optimizasyonu',
    'services.s2_4': 'Gelişmiş iletişim özellikleri',
    'services.s2_5': 'Mobil odaklı performans',
    'services.s2_6': 'Teknik destek ve güncellemeler',
    'services.price2': '~175 €',
    'services.button2': 'Teklif iste',
    'services.level3': 'Seviye 3',
    'services.title3': 'Premium çözüm',
    'services.desc3': 'E-ticaret, CMS ve gelişmiş entegrasyonlar ile eksiksiz web çözümü.',
    'services.s3_1': 'CMS ile 8+ sayfa',
    'services.s3_2': 'E-ticaret veya rezervasyon sistemi',
    'services.s3_3': 'Analitik ve raporlar',
    'services.s3_4': 'Gelişmiş SEO stratejisi',
    'services.s3_5': 'Entegrasyonlar ve API’ler',
    'services.s3_6': 'Sürekli destek ve güncellemeler',
    'services.price3': '~200 €+',
    'services.button3': 'Teklif iste',
    'contact.tagline': 'İletişim',
    'contact.heading': 'Daha fazla bilgi için bana mesaj gönderin.',
    'contact.description': 'Sizi veya işinizi profesyonel bir şekilde temsil edecek bir web sitesi oluşturacağız.',
    'contact.email': 'Email: merdshesaid@gmail.com',
    'contact.phone': 'Telefon: +386 51 428 883',
    'contact.social': 'Instagram: @gottalovemerdd',
    'contact.note': 'Proje gereksinimlerine bağlı olarak gizli ücret olmadan şeffaf fiyatlandırma.',
    'contact.labelName': 'Ad',
    'contact.labelEmail': 'Email',
    'contact.labelMessage': 'Mesaj',
    'contact.placeholderName': 'Adınız',
    'contact.placeholderEmail': 'Emailiniz',
    'contact.placeholderMessage': 'Projeniz hakkında bana bilgi verin',
    'contact.button': 'Mesaj göndermek',
    'footer.copyright': '(c) 2026 Merdology - All Rights Reserved | Designed by Merd',
    'footer.backToTop': 'Başa dön'
  }
};

function getCurrentLanguage() {
  return localStorage.getItem('preferredLanguage') || 'en';
}

function applyTranslation(lang) {
  const locale = translations[lang] ? lang : 'en';
  const keys = document.querySelectorAll('[data-i18n]');

  keys.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translated = translations[locale][key];
    if (translated) {
      element.textContent = translated;
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    const translated = translations[locale][key];
    if (translated) {
      element.placeholder = translated;
    }
  });

  const pageTitle = document.querySelector('title');
  const pageTitleKey = pageTitle.getAttribute('data-i18n');
  if (pageTitleKey && translations[locale][pageTitleKey]) {
    pageTitle.textContent = translations[locale][pageTitleKey];
  }
}

function updateLanguageButtons(lang) {
  languageButtons.forEach((button) => {
    const buttonLang = button.getAttribute('data-lang');
    button.classList.toggle('active', buttonLang === lang);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLang = button.getAttribute('data-lang');
    if (!selectedLang) return;
    localStorage.setItem('preferredLanguage', selectedLang);
    applyTranslation(selectedLang);
    updateLanguageButtons(selectedLang);
  });
});

const initialLang = getCurrentLanguage();
updateLanguageButtons(initialLang);
applyTranslation(initialLang);

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! I will contact you soon.');
    contactForm.reset();
  });
}
