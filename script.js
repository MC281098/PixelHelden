/* ============================================================
   script.js — PIXELHELDEN  |  Luxury Gold × Black Edition
   ============================================================
   TABLE OF CONTENTS
   1. Translations (DE / EN / AR) — all strings including founders
   2. setLang() — swap text, direction, and font
   3. Language Switcher — click & keyboard
   4. Sticky Header — scroll shadow
   5. Scroll Fade-In — IntersectionObserver
   6. 3D Card Tilt — mouse-tracking depth effect
   7. Init — restore saved language, run tilt
   ============================================================ */


/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const translations = {

  /* ——— GERMAN (default) ——— */
  de: {
    /* Hero */
    hero_headline:   "Websites, die <em>verkaufen</em> —<br>nicht nur schön aussehen.",
    hero_sub:        "Professionelle Webauftritte für Unternehmen, Shops und lokale Businesses — zu Preisen, die kein Mitbewerber schlägt.",
    cta_quote:       "Kostenloses Angebot",
    cta_services:    "Unsere Leistungen",
    badge_speed:     "Blitzschnell",
    badge_mobile:    "100% Mobil",

    /* Services */
    services_title:  "Was wir bauen",
    services_sub:    "Maßgeschneiderte Lösungen für jede Art von Business.",
    s1_title:        "Unternehmenswebsites",
    s1_text:         "Moderne, schnelle Websites für Unternehmen jeder Größe. Cleanes Design, das Vertrauen weckt und Kunden gewinnt — vom ersten Klick an.",
    s2_title:        "Shops &amp; lokale Businesses",
    s2_text:         "Öffnungszeiten, Produkte, Standort, Kontakt — alles, was Ihre Kunden brauchen. Starke Präsenz. Sofort spürbar.",
    s3_title:        "Mobil &amp; mehrsprachig",
    s3_text:         "Jede Website läuft perfekt auf Smartphones und unterstützt mehrere Sprachen — für Kunden überall auf der Welt.",

    /* Process */
    process_title:   "So arbeiten wir",
    process_sub:     "Einfach. Transparent. Ergebnisorientiert.",
    step1_title:     "Gespräch &amp; Idee",
    step1_text:      "Wir hören zu, verstehen Ihr Business und entwickeln gemeinsam die Strategie für Ihren neuen Webauftritt.",
    step2_title:     "Design &amp; Entwicklung",
    step2_text:      "Wir gestalten und programmieren Ihre Website — schnell, sauber und mit Liebe zum Detail.",
    step3_title:     "Launch &amp; Support",
    step3_text:      "Ihr Auftritt geht live — und wir bleiben an Ihrer Seite, damit alles reibungslos läuft.",

    /* Founders */
    founders_title:  "Das Team hinter PIXELHELDEN",
    founders_sub:    "Zwei Entwickler. Eine Leidenschaft. Unzählige erfolgreiche Websites.",
    founder1_name:   "Moufak Chamou",
    founder1_role:   "Co-Founder &amp; Web Developer",
    founder1_desc:   "Fullstack-Entwickler mit einem Auge für Details und einer Leidenschaft für sauberen, performanten Code.",
    founder2_name:   "Ahmad Gold",
    founder2_role:   "Co-Founder &amp; Creative Lead",
    founder2_desc:   "Kreativkopf und Designstratege, der jede Website in ein überzeugendes digitales Erlebnis verwandelt.",

    /* Offers */
    offers_title:    "Unsere Pakete",
    offers_sub:      "Wählen Sie das Paket, das zu Ihrem Business passt.",
    offer_popular:   "Beliebteste Wahl",
    offer_cta:       "Angebot anfragen",
    offer1_subtitle: "Für Einsteiger",
    offer1_tagline:  "Ihr erster professioneller Webauftritt",
    offer1_f1:       "✓ 1-seitige Website (Landingpage)",
    offer1_f2:       "✓ Responsives Design",
    offer1_f3:       "✓ Kontaktformular",
    offer1_f4:       "✓ Google Maps Integration",
    offer1_f5:       "✓ 2 Wochen Support",
    offer1_price:    "",
    offer2_subtitle: "Für wachsende Unternehmen",
    offer2_tagline:  "Mehr Seiten. Mehr Wirkung.",
    offer2_f1:       "✓ Bis zu 5 Seiten",
    offer2_f2:       "✓ Individuelles Design",
    offer2_f3:       "✓ SEO-Grundoptimierung",
    offer2_f4:       "✓ Blog / News-Bereich",
    offer2_f5:       "✓ Animationen &amp; Interaktionen",
    offer2_f6:       "✓ 4 Wochen Support",
    offer2_price:    "ab 499 €",
    offer3_subtitle: "Für Online-Händler",
    offer3_tagline:  "Verkaufen rund um die Uhr",
    offer3_f1:       "✓ WooCommerce / Shopify",
    offer3_f2:       "✓ Produktkatalog",
    offer3_f3:       "✓ Zahlungsintegration",
    offer3_f4:       "✓ Bestellverwaltung",
    offer3_f5:       "✓ 8 Wochen Support",
    offer3_price:    "ab 799 €",
    offer4_subtitle: "Für anspruchsvolle Marken",
    offer4_tagline:  "Kein Kompromiss — nur Exzellenz",
    offer4_f1:       "✓ Unbegrenzte Seiten",
    offer4_f2:       "✓ Luxury-Design &amp; Branding",
    offer4_f3:       "✓ Vollständige SEO-Strategie",
    offer4_f4:       "✓ Mehrsprachigkeit",
    offer4_f5:       "✓ CMS &amp; Dashboard",
    offer4_f6:       "✓ 3 Monate Support",
    offer4_price:    "ab 999 €",
    offer5_subtitle: "Für Restaurants &amp; Cafés",
    offer5_tagline:  "Ihr Menü — ein Scan entfernt",
    offer5_f1:       "✓ Digitales Menü als Webseite",
    offer5_f2:       "✓ Individueller QR-Code",
    offer5_f3:       "✓ Jederzeit aktualisierbar",
    offer5_f4:       "✓ Kein App-Download nötig",
    offer5_f5:       "✓ Perfekt für Tische &amp; Flyer",
    offer5_price:    "Das clevere Upgrade für Ihr Restaurant",

    /* Stats */
    stats_title:  "Unsere Zahlen",
    stats_sub:    "Ergebnisse, die für sich sprechen.",
    stat1_label:  "Websites geliefert",
    stat2_label:  "Kundenzufriedenheit",
    stat3_label:  "Jahre Erfahrung",
    stat4_label:  "Sprachen unterstützt",

    /* Compare */
    compare_title:    "PIXELHELDEN vs. Große Agenturen",
    compare_sub:      "Der direkte Vergleich.",
    compare_col_them: "Große Agenturen",
    compare_r1:       "Direkte Kommunikation",
    compare_r2:       "Schnelle Lieferung",
    compare_r3:       "Faire Preise",
    compare_r4:       "Mehrsprachiger Support",
    compare_r5:       "Persönlicher Support nach Launch",
    compare_r6:       "Individuelles Design",

    /* Reviews */
    reviews_title: "Das sagen unsere Kunden",
    reviews_sub:   "Echte Ergebnisse. Echte Zufriedenheit.",
    r1_text:  "\"Blitzschnelle Lieferung und ein Design, das Kunden begeistert. Absolute Empfehlung!\"",
    r1_name:  "Klaus Richter",
    r1_role:  "Unternehmer, München",
    r2_text:  "\"The price was unbeatable and the quality exceeded all our expectations. Sales doubled after launch.\"",
    r2_name:  "James Mitchell",
    r2_role:  "E-Commerce, London",
    r3_text:  "\"موقع احترافي في وقت قياسي وبسعر لا يُصدق. الفريق محترف جداً ومتجاوب.\"",
    r3_name:  "أحمد الرشيد",
    r3_role:  "صاحب مطعم، دبي",

    /* Calculator */
    calc_title:          "Preisrechner",
    calc_sub:            "Sofort-Schätzung für Ihr Projekt.",
    calc_type:           "Website-Typ",
    calc_type_company:   "Unternehmen",
    calc_type_shop:      "Online-Shop",
    calc_type_restaurant:"Restaurant-Menü",
    calc_pages:          "Seitenanzahl",
    calc_pages_1to5:     "1–5 Seiten",
    calc_pages_6to10:    "6–10 Seiten",
    calc_pages_10plus:   "10+ Seiten",
    calc_langs:          "Sprachen",
    calc_langs_1:        "1 Sprache",
    calc_langs_2:        "2 Sprachen",
    calc_langs_3plus:    "3+ Sprachen",
    calc_shop:           "Online-Shop?",
    calc_shop_yes:       "Ja",
    calc_shop_no:        "Nein",
    calc_result_label:   "Geschätzte Investition",
    calc_result_note:    "* Richtwert – genaues Angebot kostenlos.",
    calc_cta:            "Exaktes Angebot anfragen",

    /* Pricing */
    price_badge:     "Garantiert",
    price_headline:  "Preise, die keiner schlägt.",
    price_text:      "Professionelle Qualität muss nicht teuer sein. Fordern Sie ein kostenloses Angebot an und vergleichen Sie selbst — wir sind sicher, dass wir Ihre Erwartungen übertreffen.",
    price_cta:       "Jetzt Angebot anfordern",

    /* Footer */
    footer_tagline:  "Zwei Entwickler. Eine Mission. Ihr perfekter Webauftritt.",
    footer_email:    "ahmad99dahab@gmail.com",
    footer_phone:    "+49 176 40548859",
    footer_whatsapp: "WhatsApp schreiben",
    footer_copy:     "© 2025 PIXELHELDEN. Alle Rechte vorbehalten.",

    /* FAQ */
    faq_title: "Häufige Fragen",
    faq_sub:   "Alles, was Sie über unsere Arbeit wissen müssen.",
    faq_q1: "Wie lange dauert die Erstellung einer Website?",
    faq_a1: "Je nach Projekt zwischen 3 und 14 Tagen.",
    faq_q2: "Was ist im Preis enthalten?",
    faq_a2: "Design, Entwicklung, mobile Optimierung und Basis-SEO. Alles startklar.",
    faq_q3: "Kann ich die Website später selbst bearbeiten?",
    faq_a3: "Ja — wir können ein einfaches CMS einrichten, damit Sie jederzeit Inhalte selbst bearbeiten können.",
    faq_q4: "Bieten Sie Support nach dem Launch an?",
    faq_a4: "Auf jeden Fall. Wir sind auch nach dem Launch für Sie da.",
    faq_q5: "Können Sie Websites in mehreren Sprachen erstellen?",
    faq_a5: "Ja, wir sind spezialisiert auf mehrsprachige Websites — Arabisch, Deutsch, Englisch und mehr.",
    faq_q6: "Wie kann ich anfangen?",
    faq_a6: "Einfach auf „Kostenloses Angebot“ klicken — wir melden uns innerhalb von 24 Stunden.",

    /* Cookie banner */
    cookie_text:    "Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Durch die weitere Nutzung stimmen Sie der Verwendung von Cookies zu.",
    cookie_accept:  "Akzeptieren",
    cookie_decline: "Ablehnen",

    /* —— Legal pages —— */
    legal_back:     "Zurück zur Startseite",
    impr_h1:        "Impressum",
    impr_subtitle:  "Angaben gemäß § 5 TMG",
    impr_s1_h:      "Anbieter",
    impr_s1_addr:   "PIXELHELDEN<br>Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15<br>44147 Dortmund<br>Deutschland",
    impr_s2_h:      "Kontakt",
    impr_s2_text:   "Telefon: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a><br>E-Mail: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a>",
    impr_s3_h:      "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
    impr_s3_text:   "Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15, 44147 Dortmund",
    impr_s4_h:      "Haftung für Inhalte",
    impr_s4_text:   "Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung bleiben unberührt. Eine Haftung ist erst ab Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden werden wir diese Inhalte umgehend entfernen.",
    impr_s5_h:      "Haftung für Links",
    impr_s5_text:   "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf Rechtsverstöße überprüft. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    impr_s6_h:      "Urheberrecht",
    impr_s6_text:   "Die durch die Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung und Verbreitung außerhalb des Urheberrechtes bedürfen der schriftlichen Zustimmung. Downloads sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
    daten_h1:       "Datenschutzerklärung",
    daten_subtitle: "Gemäß DSGVO (EU) 2016/679 — Stand: 2025",
    daten_s1_h:     "1. Verantwortlicher",
    daten_s1_addr:  "PIXELHELDEN<br>Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15<br>44147 Dortmund<br>Deutschland<br><br>Telefon: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a><br>E-Mail: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a>",
    daten_s2_h:     "2. Welche Daten wir erheben",
    daten_s2_intro: "Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website erforderlich ist. Im Einzelnen erheben wir:",
    daten_s2_list:  "<li><strong>Kontaktanfragen per E-Mail:</strong> Name, E-Mail-Adresse, Telefonnummer (freiwillig), Inhalt der Anfrage.</li><li><strong>Kontaktanfragen per WhatsApp:</strong> Telefonnummer und Nachrichteninhalt (Meta Platforms Ireland Ltd.).</li><li><strong>Technische Daten:</strong> IP-Adresse (anonymisiert), Browsertyp, Betriebssystem, aufgerufene Seiten.</li><li><strong>Cookies:</strong> Technisch notwendige Cookies für Sprachpräferenz und Cookie-Einwilligung.</li>",
    daten_s3_h:     "3. Zweck der Datenverarbeitung",
    daten_s3_intro: "Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:",
    daten_s3_list:  "<li>Bearbeitung von Kontaktanfragen (Art. 6 Abs. 1 lit. b DSGVO).</li><li>Bereitstellung und Optimierung unserer Website (Art. 6 Abs. 1 lit. f DSGVO).</li><li>Speicherung Ihrer Präferenzen (Art. 6 Abs. 1 lit. a DSGVO).</li>",
    daten_s4_h:     "4. Keine Weitergabe an Dritte",
    daten_s4_text:  "Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, es sei denn, dies ist zur Vertragsrfüllung erforderlich oder Sie haben ausdrücklich eingewilligt. WhatsApp ist ein Dienst der Meta Platforms Ireland Ltd. und unterliegt eigenen Datenschutzbestimmungen.",
    daten_s5_h:     "5. Speicherdauer",
    daten_s5_text:  "Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist. Kontaktanfragen werden nach abschließender Bearbeitung gelöscht (in der Regel nach 3 Jahren).",
    daten_s6_h:     "6. Cookies",
    daten_s6_intro: "Wir verwenden folgende Cookies (gespeichert im localStorage Ihres Browsers):",
    daten_s6_list:  "<li><strong>ph-lang:</strong> Speichert Ihre bevorzugte Sprache. Kein Ablaufdatum.</li><li><strong>ph-cookie-consent:</strong> Speichert Ihre Cookie-Einwilligung. Kein Ablaufdatum.</li>",
    daten_s6_outro: "Sie können die Verwendung von Cookies in den Einstellungen Ihres Browsers deaktivieren.",
    daten_s7_h:     "7. Ihre Rechte (Art. 15–22 DSGVO)",
    daten_s7_list:  "<li><strong>Auskunft</strong> (Art. 15): Recht auf Auskunft über verarbeitete Daten.</li><li><strong>Berichtigung</strong> (Art. 16): Recht auf Korrektur unrichtiger Daten.</li><li><strong>Löschung</strong> (Art. 17): Recht auf Löschung Ihrer Daten.</li><li><strong>Einschränkung</strong> (Art. 18): Recht auf Einschränkung der Verarbeitung.</li><li><strong>Datenübertragbarkeit</strong> (Art. 20): Recht auf Übertragung Ihrer Daten.</li><li><strong>Widerspruch</strong> (Art. 21): Recht auf Widerspruch gegen die Verarbeitung.</li><li><strong>Widerruf</strong> (Art. 7 Abs. 3): Einwilligung jederzeit widerrufbar.</li>",
    daten_s7_outro: "Außerdem haben Sie das Recht, sich bei der Landesbeauftragten für Datenschutz NRW zu beschweren.",
    daten_s8_h:     "8. Kontakt für Datenschutzanfragen",
    daten_s8_addr:  "PIXELHELDEN — Moufak Chamou &amp; Ahmad Gold<br>E-Mail: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a><br>Telefon: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a>",
    daten_s8_outro: "Wir bearbeiten Ihre Anfrage innerhalb eines Monats.",
    daten_s9_h:     "9. Aktualität dieser Erklärung",
    daten_s9_text:  "Diese Datenschutzerklärung hat den Stand Juni 2025. Wir behalten uns vor, diese Erklärung bei Änderungen unseres Angebots oder der Rechtslage anzupassen.",
  },

  /* ——— ENGLISH ——— */
  en: {
    /* Hero */
    hero_headline:   "Websites that <em>sell</em> —<br>not just look good.",
    hero_sub:        "Professional websites for companies, shops, and local businesses — at prices no competitor can beat.",
    cta_quote:       "Get a free quote",
    cta_services:    "Our services",
    badge_speed:     "Lightning fast",
    badge_mobile:    "100% Mobile",

    /* Services */
    services_title:  "What we build",
    services_sub:    "Tailored solutions for every type of business.",
    s1_title:        "Company Websites",
    s1_text:         "Modern, fast websites for businesses of every size. Clean design that builds trust and wins customers — from the very first click.",
    s2_title:        "Shops &amp; Local Businesses",
    s2_text:         "Opening hours, products, location, contact — everything your customers need. Strong online presence. Instantly.",
    s3_title:        "Mobile &amp; Multilingual",
    s3_text:         "Every website runs perfectly on smartphones and supports multiple languages — for customers all around the world.",

    /* Process */
    process_title:   "How we work",
    process_sub:     "Simple. Transparent. Results-driven.",
    step1_title:     "Talk &amp; Idea",
    step1_text:      "We listen, understand your business, and develop the perfect strategy for your new web presence together.",
    step2_title:     "Design &amp; Build",
    step2_text:      "We design and develop your website — fast, clean, and with attention to every single detail.",
    step3_title:     "Launch &amp; Support",
    step3_text:      "Your website goes live — and we stay by your side to make sure everything runs smoothly.",

    /* Founders */
    founders_title:  "The Team Behind PIXELHELDEN",
    founders_sub:    "Two developers. One passion. Countless successful websites.",
    founder1_name:   "Moufak Chamou",
    founder1_role:   "Co-Founder &amp; Web Developer",
    founder1_desc:   "Full-stack developer with an eye for detail and a passion for clean, high-performance code.",
    founder2_name:   "Ahmad Gold",
    founder2_role:   "Co-Founder &amp; Creative Lead",
    founder2_desc:   "Creative mind and design strategist who turns every website into a compelling digital experience.",

    /* Offers */
    offers_title:    "Our Packages",
    offers_sub:      "Choose the package that fits your business.",
    offer_popular:   "Most Popular",
    offer_cta:       "Request a quote",
    offer1_subtitle: "For starters",
    offer1_tagline:  "Your first professional web presence",
    offer1_f1:       "✓ 1-page website (landing page)",
    offer1_f2:       "✓ Responsive design",
    offer1_f3:       "✓ Contact form",
    offer1_f4:       "✓ Google Maps integration",
    offer1_f5:       "✓ 2 weeks support",
    offer1_price:    "",
    offer2_subtitle: "For growing businesses",
    offer2_tagline:  "More pages. More impact.",
    offer2_f1:       "✓ Up to 5 pages",
    offer2_f2:       "✓ Custom design",
    offer2_f3:       "✓ Basic SEO optimization",
    offer2_f4:       "✓ Blog / news section",
    offer2_f5:       "✓ Animations &amp; interactions",
    offer2_f6:       "✓ 4 weeks support",
    offer2_price:    "from €499",
    offer3_subtitle: "For online retailers",
    offer3_tagline:  "Sell around the clock",
    offer3_f1:       "✓ WooCommerce / Shopify",
    offer3_f2:       "✓ Product catalogue",
    offer3_f3:       "✓ Payment integration",
    offer3_f4:       "✓ Order management",
    offer3_f5:       "✓ 8 weeks support",
    offer3_price:    "from €799",
    offer4_subtitle: "For ambitious brands",
    offer4_tagline:  "No compromise — only excellence",
    offer4_f1:       "✓ Unlimited pages",
    offer4_f2:       "✓ Luxury design &amp; branding",
    offer4_f3:       "✓ Full SEO strategy",
    offer4_f4:       "✓ Multilingual support",
    offer4_f5:       "✓ CMS &amp; dashboard",
    offer4_f6:       "✓ 3 months support",
    offer4_price:    "from €999",
    offer5_subtitle: "For restaurants &amp; cafés",
    offer5_tagline:  "Your menu — one scan away",
    offer5_f1:       "✓ Digital menu as a webpage",
    offer5_f2:       "✓ Custom QR code",
    offer5_f3:       "✓ Update anytime, instantly",
    offer5_f4:       "✓ No app download needed",
    offer5_f5:       "✓ Perfect for tables &amp; flyers",
    offer5_price:    "The smartest upgrade for your restaurant",

    /* Stats */
    stats_title:  "Our Numbers",
    stats_sub:    "Results that speak for themselves.",
    stat1_label:  "Websites delivered",
    stat2_label:  "Client satisfaction",
    stat3_label:  "Years of experience",
    stat4_label:  "Languages supported",

    /* Compare */
    compare_title:    "Us vs. Big Agencies",
    compare_sub:      "The direct comparison.",
    compare_col_them: "Big Agencies",
    compare_r1:       "Direct communication",
    compare_r2:       "Fast delivery",
    compare_r3:       "Fair pricing",
    compare_r4:       "Multilingual support",
    compare_r5:       "Personal support after launch",
    compare_r6:       "Custom design",

    /* Reviews */
    reviews_title: "What our clients say",
    reviews_sub:   "Real results. Real satisfaction.",
    r1_text:  "\"Lightning-fast delivery and a design that wows customers. Highly recommended!\"",
    r1_name:  "Klaus Richter",
    r1_role:  "Business Owner, Munich",
    r2_text:  "\"The price was unbeatable and the quality exceeded all our expectations. Sales doubled after launch.\"",
    r2_name:  "James Mitchell",
    r2_role:  "E-Commerce, London",
    r3_text:  "\"A professional website in record time at an unbelievable price. The team is very responsive.\"",
    r3_name:  "Ahmed Al-Rashid",
    r3_role:  "Restaurant Owner, Dubai",

    /* Calculator */
    calc_title:          "Price Calculator",
    calc_sub:            "Get an instant estimate for your project.",
    calc_type:           "Website type",
    calc_type_company:   "Company",
    calc_type_shop:      "Online Shop",
    calc_type_restaurant:"Restaurant Menu",
    calc_pages:          "Number of pages",
    calc_pages_1to5:     "1–5 pages",
    calc_pages_6to10:    "6–10 pages",
    calc_pages_10plus:   "10+ pages",
    calc_langs:          "Languages",
    calc_langs_1:        "1 language",
    calc_langs_2:        "2 languages",
    calc_langs_3plus:    "3+ languages",
    calc_shop:           "Online shop?",
    calc_shop_yes:       "Yes",
    calc_shop_no:        "No",
    calc_result_label:   "Estimated investment",
    calc_result_note:    "* Estimate — exact quote is free.",
    calc_cta:            "Request my exact quote",

    /* Pricing */
    price_badge:     "Guaranteed",
    price_headline:  "Prices that beat any competition.",
    price_text:      "Professional quality doesn't have to be expensive. Request a free quote and compare for yourself — we're confident we'll exceed your expectations.",
    price_cta:       "Request a free quote",

    /* Footer */
    footer_tagline:  "Two developers. One mission. Your perfect website.",
    footer_email:    "ahmad99dahab@gmail.com",
    footer_phone:    "+49 176 40548859",
    footer_whatsapp: "Write on WhatsApp",
    footer_copy:     "© 2025 PIXELHELDEN. All rights reserved.",

    /* FAQ */
    faq_title: "FAQ",
    faq_sub:   "Everything you need to know about working with us.",
    faq_q1: "How long does it take to build a website?",
    faq_a1: "Depending on the project, between 3 and 14 days.",
    faq_q2: "What is included in the price?",
    faq_a2: "Design, development, mobile optimization, and basic SEO. Everything ready to launch.",
    faq_q3: "Can I update the website myself later?",
    faq_a3: "Yes — we can add a simple CMS so you can edit content yourself anytime.",
    faq_q4: "Do you offer support after the website goes live?",
    faq_a4: "Absolutely. We stay available for you even after launch.",
    faq_q5: "Can you build websites in multiple languages?",
    faq_a5: "Yes, we specialize in multilingual websites — Arabic, German, English and more.",
    faq_q6: "How do I get started?",
    faq_a6: "Simply click \"Request a free quote\" and we will contact you within 24 hours.",

    /* Cookie banner */
    cookie_text:    "This website uses cookies to give you the best experience. By continuing to use this site, you agree to our use of cookies.",
    cookie_accept:  "Accept",
    cookie_decline: "Decline",

    /* —— Legal pages —— */
    legal_back:     "Back to Home",
    impr_h1:        "Legal Notice",
    impr_subtitle:  "Information pursuant to § 5 TMG (German Telemedia Act)",
    impr_s1_h:      "Provider",
    impr_s1_addr:   "PIXELHELDEN<br>Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15<br>44147 Dortmund<br>Germany",
    impr_s2_h:      "Contact",
    impr_s2_text:   "Phone: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a><br>Email: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a>",
    impr_s3_h:      "Responsible for Content pursuant to § 55 Para. 2 RStV",
    impr_s3_text:   "Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15, 44147 Dortmund",
    impr_s4_h:      "Liability for Content",
    impr_s4_text:   "As a service provider we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information. Obligations to remove or block information under general laws remain unaffected. Liability is only possible from the point at which a concrete infringement becomes known. Upon becoming aware of such violations, we will remove the content immediately.",
    impr_s5_h:      "Liability for Links",
    impr_s5_text:   "Our website contains links to external third-party websites over whose content we have no influence. We therefore cannot accept any liability for this external content. The respective provider or operator is always responsible for the content of linked pages. The linked pages were checked for possible legal violations at the time of linking. Upon becoming aware of legal violations, we will remove such links immediately.",
    impr_s6_h:      "Copyright",
    impr_s6_text:   "The content and works created by the site operators are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside copyright law require the written consent of the respective author. Downloads are only permitted for private, non-commercial use. Upon becoming aware of legal violations, we will remove such content immediately.",
    daten_h1:       "Privacy Policy",
    daten_subtitle: "Pursuant to GDPR (EU) 2016/679 — Last updated: 2025",
    daten_s1_h:     "1. Controller",
    daten_s1_addr:  "PIXELHELDEN<br>Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15<br>44147 Dortmund<br>Germany<br><br>Phone: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a><br>Email: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a>",
    daten_s2_h:     "2. What Data We Collect",
    daten_s2_intro: "We collect and process personal data only to the extent necessary to provide a functioning website and our services. Specifically, we collect:",
    daten_s2_list:  "<li><strong>Contact requests via Email:</strong> Name, email address, phone number (optional), content of the request.</li><li><strong>Contact requests via WhatsApp:</strong> Phone number and message content (Meta Platforms Ireland Ltd.).</li><li><strong>Technical data:</strong> IP address (anonymized), browser type, operating system, pages accessed.</li><li><strong>Cookies:</strong> Technically necessary cookies for language preference and cookie consent.</li>",
    daten_s3_h:     "3. Purpose of Data Processing",
    daten_s3_intro: "We process your personal data for the following purposes:",
    daten_s3_list:  "<li>Processing contact requests (Art. 6(1)(b) GDPR).</li><li>Providing and optimizing our website (Art. 6(1)(f) GDPR).</li><li>Storing your preferences (Art. 6(1)(a) GDPR).</li>",
    daten_s4_h:     "4. No Sharing with Third Parties",
    daten_s4_text:  "We do not share your personal data with third parties unless this is necessary for the performance of a contract or you have expressly consented. Please note that WhatsApp is a service of Meta Platforms Ireland Ltd. and is subject to its own privacy policy.",
    daten_s5_h:     "5. Storage Period",
    daten_s5_text:  "Personal data is only stored for as long as necessary for the respective purpose. Contact requests are deleted after final processing (usually within 3 years).",
    daten_s6_h:     "6. Cookies",
    daten_s6_intro: "We use the following cookies (stored in your browser's localStorage):",
    daten_s6_list:  "<li><strong>ph-lang:</strong> Stores your preferred language. No expiry date.</li><li><strong>ph-cookie-consent:</strong> Stores your cookie consent. No expiry date.</li>",
    daten_s6_outro: "You can disable cookies in your browser settings.",
    daten_s7_h:     "7. Your Rights (Art. 15–22 GDPR)",
    daten_s7_list:  "<li><strong>Access</strong> (Art. 15): Right to information about processed data.</li><li><strong>Rectification</strong> (Art. 16): Right to correction of inaccurate data.</li><li><strong>Erasure</strong> (Art. 17): Right to deletion of your data.</li><li><strong>Restriction</strong> (Art. 18): Right to restrict processing.</li><li><strong>Portability</strong> (Art. 20): Right to transfer your data.</li><li><strong>Objection</strong> (Art. 21): Right to object to processing.</li><li><strong>Withdrawal</strong> (Art. 7(3)): Consent can be withdrawn at any time.</li>",
    daten_s7_outro: "You also have the right to lodge a complaint with the relevant data protection supervisory authority.",
    daten_s8_h:     "8. Contact for Data Protection Requests",
    daten_s8_addr:  "PIXELHELDEN — Moufak Chamou &amp; Ahmad Gold<br>Email: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a><br>Phone: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a>",
    daten_s8_outro: "We will respond to your request within one month.",
    daten_s9_h:     "9. Currency of This Policy",
    daten_s9_text:  "This privacy policy is current as of June 2025. We reserve the right to update this policy when our services or applicable laws change.",
  },

  /* ——— ARABIC ——— */
  ar: {
    /* Hero */
    hero_headline:   "مواقع <em>تبيع</em> —<br>لا مجرد تُبهر.",
    hero_sub:        "مواقع احترافية للشركات، المحلات، والأعمال المحلية — بأسعار لا يستطيع أي منافس التغلب عليها.",
    cta_quote:       "احصل على عرض مجاني",
    cta_services:    "خدماتنا",
    badge_speed:     "سريع جداً",
    badge_mobile:    "١٠٠٪ جوال",

    /* Services */
    services_title:  "ماذا نبني",
    services_sub:    "حلول مخصصة لكل نوع من الأعمال.",
    s1_title:        "مواقع الشركات",
    s1_text:         "مواقع حديثة وسريعة للشركات من جميع الأحجام. تصميم نظيف يبني الثقة ويكسب العملاء — من أول نقرة.",
    s2_title:        "المحلات والأعمال المحلية",
    s2_text:         "أوقات العمل، المنتجات، الموقع، التواصل — كل ما يحتاجه عملاؤك. حضور قوي على الإنترنت. فورًا.",
    s3_title:        "للجوال ومتعدد اللغات",
    s3_text:         "كل موقع يعمل بشكل مثالي على الهواتف الذكية ويدعم لغات متعددة — لعملاء في كل مكان حول العالم.",

    /* Process */
    process_title:   "كيف نعمل",
    process_sub:     "بسيط. شفاف. يُحقق النتائج.",
    step1_title:     "حوار وفكرة",
    step1_text:      "نستمع إليك، نفهم عملك، ونطور معك الاستراتيجية المثالية لحضورك الجديد على الإنترنت.",
    step2_title:     "تصميم وتطوير",
    step2_text:      "نصمم ونبرمج موقعك — بسرعة ونظافة واهتمام بكل تفصيلة.",
    step3_title:     "إطلاق ودعم",
    step3_text:      "موقعك يصبح حيًا — ونبقى بجانبك لضمان سير كل شيء بسلاسة.",

    /* Founders */
    founders_title:  "الفريق خلف PIXELHELDEN",
    founders_sub:    "مطوران. شغف واحد. مواقع ناجحة لا تُحصى.",
    founder1_name:   "موفق شمو",
    founder1_role:   "شريك مؤسس ومطور ويب",
    founder1_desc:   "مطور متكامل بعين للتفاصيل وشغف بالكود النظيف عالي الأداء.",
    founder2_name:   "أحمد غولد",
    founder2_role:   "شريك مؤسس والمدير الإبداعي",
    founder2_desc:   "عقل إبداعي واستراتيجي تصميمي يحوّل كل موقع إلى تجربة رقمية مقنعة.",

    /* Offers */
    offers_title:    "باقاتنا",
    offers_sub:      "اختر الباقة التي تناسب عملك.",
    offer_popular:   "الأكثر طلباً",
    offer_cta:       "اطلب عرضاً",
    offer1_subtitle: "للمبتدئين",
    offer1_tagline:  "أول حضور ويب احترافي لك",
    offer1_f1:       "✓ موقع أحادي الصفحة (لاندينج)",
    offer1_f2:       "✓ تصميم متجاوب",
    offer1_f3:       "✓ نموذج تواصل",
    offer1_f4:       "✓ تكامل خرائط جوجل",
    offer1_f5:       "✓ دعم لأسبوعين",
    offer1_price:    "",
    offer2_subtitle: "للشركات النامية",
    offer2_tagline:  "المزيد من الصفحات. المزيد من التأثير.",
    offer2_f1:       "✓ حتى 5 صفحات",
    offer2_f2:       "✓ تصميم مخصص",
    offer2_f3:       "✓ تحسين SEO الأساسي",
    offer2_f4:       "✓ قسم مدوّنة / أخبار",
    offer2_f5:       "✓ رسوم متحركة وتفاعلات",
    offer2_f6:       "✓ دعم لأربعة أسابيع",
    offer2_price:    "من 499 €",
    offer3_subtitle: "للتجار الإلكترونيين",
    offer3_tagline:  "بع على مدار الساعة",
    offer3_f1:       "✓ WooCommerce / Shopify",
    offer3_f2:       "✓ كتالوج المنتجات",
    offer3_f3:       "✓ تكامل الدفع الإلكتروني",
    offer3_f4:       "✓ إدارة الطلبات",
    offer3_f5:       "✓ دعم لثمانية أسابيع",
    offer3_price:    "من 799 €",
    offer4_subtitle: "للعلامات التجارية الطموحة",
    offer4_tagline:  "لا تسوية — فقط التميّز",
    offer4_f1:       "✓ صفحات غير محدودة",
    offer4_f2:       "✓ تصميم فاخر &amp; هوية بصرية",
    offer4_f3:       "✓ استراتيجية SEO كاملة",
    offer4_f4:       "✓ دعم متعدد اللغات",
    offer4_f5:       "✓ لوحة تحكم CMS",
    offer4_f6:       "✓ دعم لثلاثة أشهر",
    offer4_price:    "من 999 €",
    offer5_subtitle: "للمطاعم والمقاهي",
    offer5_tagline:  "قائمتك — مسح واحد بعيد",
    offer5_f1:       "✓ قائمة رقمية كصفحة ويب",
    offer5_f2:       "✓ رمز QR مخصص",
    offer5_f3:       "✓ تحديث فوري في أي وقت",
    offer5_f4:       "✓ لا حاجة لتحميل تطبيق",
    offer5_f5:       "✓ مثالي للطاولات والمنشورات",
    offer5_price:    "الترقية الأذكى لمطعمك",

    /* Stats */
    stats_title:  "أرقامنا",
    stats_sub:    "نتائج تتحدث عن نفسها.",
    stat1_label:  "موقع تم تسليمه",
    stat2_label:  "رضا العملاء",
    stat3_label:  "سنوات من الخبرة",
    stat4_label:  "لغات مدعومة",

    /* Compare */
    compare_title:    "نحن مقابل الوكالات الكبرى",
    compare_sub:      "المقارنة المباشرة.",
    compare_col_them: "الوكالات الكبرى",
    compare_r1:       "التواصل المباشر",
    compare_r2:       "التسليم السريع",
    compare_r3:       "أسعار عادلة",
    compare_r4:       "دعم متعدد اللغات",
    compare_r5:       "دعم شخصي بعد الإطلاق",
    compare_r6:       "تصميم مخصص",

    /* Reviews */
    reviews_title: "ماذا يقول عملاؤنا",
    reviews_sub:   "نتائج حقيقية. رضا حقيقي.",
    r1_text:  "\"تسليم سريع البرق وتصميم يُبهر العملاء. توصية مطلقة!\"",
    r1_name:  "كلاوس ريشتر",
    r1_role:  "رجل أعمال، ميونخ",
    r2_text:  "\"السعر لا يُضاهى والجودة فاقت كل التوقعات. تضاعفت مبيعاتنا بعد الإطلاق.\"",
    r2_name:  "جيمس ميتشل",
    r2_role:  "تجارة إلكترونية، لندن",
    r3_text:  "\"موقع احترافي في وقت قياسي وبسعر لا يُصدق. الفريق محترف جداً ومتجاوب.\"",
    r3_name:  "أحمد الرشيد",
    r3_role:  "صاحب مطعم، دبي",

    /* Calculator */
    calc_title:          "حاسبة الأسعار",
    calc_sub:            "احصل على تقدير فوري لمشروعك.",
    calc_type:           "نوع الموقع",
    calc_type_company:   "شركة",
    calc_type_shop:      "متجر إلكتروني",
    calc_type_restaurant:"قائمة مطعم",
    calc_pages:          "عدد الصفحات",
    calc_pages_1to5:     "1–5 صفحات",
    calc_pages_6to10:    "6–10 صفحات",
    calc_pages_10plus:   "10+ صفحات",
    calc_langs:          "اللغات",
    calc_langs_1:        "لغة واحدة",
    calc_langs_2:        "لغتان",
    calc_langs_3plus:    "3+ لغات",
    calc_shop:           "متجر إلكتروني؟",
    calc_shop_yes:       "نعم",
    calc_shop_no:        "لا",
    calc_result_label:   "الاستثمار المتوقع",
    calc_result_note:    "* تقدير أولي — العرض الدقيق مجاني.",
    calc_cta:            "اطلب عرضي الدقيق",

    /* Pricing */
    price_badge:     "مضمون",
    price_headline:  "أسعار لا يمكن لأي منافس التغلب عليها.",
    price_text:      "الجودة الاحترافية لا يجب أن تكون باهظة التكلفة. اطلب عرض سعر مجانيًا وقارن بنفسك — نحن واثقون من أننا سنتجاوز توقعاتك.",
    price_cta:       "اطلب عرض سعر مجاني",

    /* Footer */
    footer_tagline:  "مطوران. مهمة واحدة. موقعك المثالي.",
    footer_email:    "ahmad99dahab@gmail.com",
    footer_phone:    "+49 176 40548859",
    footer_whatsapp: "راسلنا على واتساب",
    footer_copy:     "© 2025 PIXELHELDEN. جميع الحقوق محفوظة.",

    /* FAQ */
    faq_title: "الأسئلة الشائعة",
    faq_sub:   "كل ما تحتاج معرفته للبدء معنا.",
    faq_q1: "كم يستغرق بناء موقع ويب؟",
    faq_a1: "حسب المشروع، بين 3 و14 يوماً.",
    faq_q2: "ما الذي يشمله السعر؟",
    faq_a2: "التصميم والتطوير وتحسين الجوال وتهيئة SEO الأساسية. كل شيء جاهز للإطلاق.",
    faq_q3: "هل يمكنني تحديث الموقع بنفسي لاحقاً؟",
    faq_a3: "نعم — يمكننا إضافة نظام إدارة محتوى بسيط حتى تتمكن من تعديل المحتوى بنفسك في أي وقت.",
    faq_q4: "هل تقدمون دعماً بعد إطلاق الموقع؟",
    faq_a4: "بالتأكيد. نحن متاحون لك حتى بعد الإطلاق.",
    faq_q5: "هل يمكنكم بناء مواقع بلغات متعددة؟",
    faq_a5: "نعم، نحن متخصصون في المواقع متعددة اللغات — العربية والألمانية والإنجليزية وأكثر.",
    faq_q6: "كيف أبدأ؟",
    faq_a6: "فقط اضغط على \"احصل على عرض مجاني\" وسنتواصل معك خلال 24 ساعة.",

    /* Cookie banner */
    cookie_text:    "يستخدم هذا الموقع ملفات تعريف الارتباط لمنحك أفضل تجربة. بمواصلة الاستخدام، توافق على ذلك.",
    cookie_accept:  "قبول",
    cookie_decline: "رفض",

    /* —— Legal pages —— */
    legal_back:     "العودة إلى الرئيسية",
    impr_h1:        "الإشعار القانوني",
    impr_subtitle:  "معلومات وفقاً للمادة 5 من قانون TMG الألماني",
    impr_s1_h:      "مقدم الخدمة",
    impr_s1_addr:   "PIXELHELDEN<br>Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15<br>44147 Dortmund<br>ألمانيا",
    impr_s2_h:      "التواصل",
    impr_s2_text:   "الهاتف: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a><br>البريد الإلكتروني: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a>",
    impr_s3_h:      "المسؤول عن المحتوى",
    impr_s3_text:   "Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15, 44147 Dortmund",
    impr_s4_h:      "المسؤولية عن المحتوى",
    impr_s4_text:   "بوصفنا مزوداً للخدمة، نحن مسؤولون عن محتوياتنا الخاصة على هذه الصفحات وفقاً للقوانين العامة. غير أننا لسنا ملزمين بمراقبة المعلومات المنقولة أو المخزنة من طرف ثالث. تظل الالتزامات المتعلقة بإزالة المعلومات سارية. لا تنشأ المسؤولية إلا من لحظة العلم بانتهاك قانوني محدد. عند علمنا بأي انتهاكات، سنقوم بإزالة هذا المحتوى فوراً.",
    impr_s5_h:      "المسؤولية عن الروابط",
    impr_s5_text:   "يحتوي عرضنا على روابط لمواقع خارجية تابعة لجهات ثالثة لا نتحكم في محتواها. لذلك لا نتحمل أي مسؤولية عن هذا المحتوى الخارجي. المسؤول دائماً عن محتوى الصفحات المرتبطة هو مزودها أو مشغلها. عند علمنا بأي انتهاكات قانونية، سنقوم بإزالة هذه الروابط فوراً.",
    impr_s6_h:      "حقوق النشر",
    impr_s6_text:   "المحتوى والأعمال المنشأة من قِبل مشغلي الموقع تخضع لقانون حقوق النشر الألماني. يتطلب النسخ والتعديل والتوزيع خارج حدود قانون حقوق النشر الحصول على موافقة خطية. التنزيلات مسموح بها فقط للاستخدام الخاص غير التجاري. عند علمنا بأي انتهاكات، سنقوم بإزالة هذا المحتوى فوراً.",
    daten_h1:       "سياسة الخصوصية",
    daten_subtitle: "وفقاً للائحة GDPR الأوروبية (EU) 2016/679 — آخر تحديث: 2025",
    daten_s1_h:     "1. المتحكم في البيانات",
    daten_s1_addr:  "PIXELHELDEN<br>Moufak Chamou &amp; Ahmad Gold<br>Thomasstr. 15<br>44147 Dortmund<br>ألمانيا<br><br>الهاتف: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a><br>البريد الإلكتروني: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a>",
    daten_s2_h:     "2. البيانات التي نجمعها",
    daten_s2_intro: "نجمع ونعالج البيانات الشخصية فقط بقدر ما هو ضروري لتوفير موقع يعمل بشكل صحيح وخدماتنا. تحديداً نجمع:",
    daten_s2_list:  "<li><strong>طلبات التواصل عبر البريد الإلكتروني:</strong> الاسم، البريد الإلكتروني، رقم الهاتف (اختياري)، محتوى الطلب.</li><li><strong>طلبات التواصل عبر واتساب:</strong> رقم الهاتف ومحتوى الرسائل (Meta Platforms Ireland Ltd.).</li><li><strong>البيانات التقنية:</strong> عنوان IP (مجهول)، نوع المتصفح، نظام التشغيل، الصفحات التي تمت زيارتها.</li><li><strong>ملفات تعريف الارتباط:</strong> ملفات ضرورية تقنياً لتفضيل اللغة وموافقة ملفات تعريف الارتباط.</li>",
    daten_s3_h:     "3. الغرض من معالجة البيانات",
    daten_s3_intro: "نعالج بياناتك الشخصية للأغراض التالية:",
    daten_s3_list:  "<li>معالجة طلبات التواصل (المادة 6(1)(ب) من اللائحة GDPR).</li><li>توفير وتحسين موقعنا (المادة 6(1)(و) من اللائحة GDPR).</li><li>حفظ تفضيلاتك (المادة 6(1)(أ) من اللائحة GDPR).</li>",
    daten_s4_h:     "4. عدم مشاركة البيانات مع أطراف ثالثة",
    daten_s4_text:  "لا نشارك بياناتك الشخصية مع أطراف ثالثة إلا إذا كان ذلك ضرورياً لتنفيذ عقد أو أعطيت موافقة صريحة. يُرجى ملاحظة أن واتساب خدمة تابعة لـ Meta Platforms Ireland Ltd. وتخضع لسياسة الخصوصية الخاصة بها.",
    daten_s5_h:     "5. مدة التخزين",
    daten_s5_text:  "يتم تخزين البيانات الشخصية فقط طالما كان ذلك ضرورياً للغرض المحدد. يتم حذف طلبات التواصل بعد المعالجة النهائية (عادةً خلال 3 سنوات).",
    daten_s6_h:     "6. ملفات تعريف الارتباط",
    daten_s6_intro: "نستخدم ملفات تعريف الارتباط التالية (المخزنة في localStorage متصفحك):",
    daten_s6_list:  "<li><strong>ph-lang:</strong> يحفظ لغتك المفضلة. بدون تاريخ انتهاء.</li><li><strong>ph-cookie-consent:</strong> يحفظ موافقتك على ملفات تعريف الارتباط. بدون تاريخ انتهاء.</li>",
    daten_s6_outro: "يمكنك تعطيل ملفات تعريف الارتباط في إعدادات متصفحك.",
    daten_s7_h:     "7. حقوقك (المواد 15–22 من اللائحة GDPR)",
    daten_s7_list:  "<li><strong>الوصول</strong> (المادة 15): حق الاطلاع على البيانات المعالجة.</li><li><strong>التصحيح</strong> (المادة 16): حق تصحيح البيانات غير الدقيقة.</li><li><strong>الحذف</strong> (المادة 17): حق حذف بياناتك.</li><li><strong>التقييد</strong> (المادة 18): حق تقييد المعالجة.</li><li><strong>قابلية النقل</strong> (المادة 20): حق نقل بياناتك.</li><li><strong>الاعتراض</strong> (المادة 21): حق الاعتراض على المعالجة.</li><li><strong>السحب</strong> (المادة 7(3)): يمكن سحب الموافقة في أي وقت.</li>",
    daten_s7_outro: "يحق لك أيضاً تقديم شكوى إلى هيئة حماية البيانات المختصة.",
    daten_s8_h:     "8. التواصل بشأن الخصوصية",
    daten_s8_addr:  "PIXELHELDEN — Moufak Chamou &amp; Ahmad Gold<br>البريد الإلكتروني: <a href='mailto:ahmad99dahab@gmail.com' style='color:var(--gold)'>ahmad99dahab@gmail.com</a><br>الهاتف: <a href='tel:+4917640548859' style='color:var(--gold)'>+49 176 40548859</a>",
    daten_s8_outro: "سنرد على طلبك خلال شهر واحد.",
    daten_s9_h:     "9. تحديث هذه السياسة",
    daten_s9_text:  "هذه السياسة محدّثة حتى يونيو 2025. نحتفظ بحق تعديلها عند تغيير خدماتنا أو التشريعات المعمول بها.",
  },
};


/* ============================================================
   2. setLang() — swap all text, direction, and font
   ============================================================ */
var currentLang = 'de';

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  var html = document.documentElement;
  var isRTL = lang === 'ar';

  /* Update <html> lang and dir attributes */
  html.setAttribute('lang', lang);
  html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  /* Tajawal font for Arabic via body class */
  document.body.classList.toggle('lang-ar', isRTL);

  /* Replace every [data-i18n] element's innerHTML */
  var t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (key && t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* Sync language button active + aria-pressed states */
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    var isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  /* Persist choice so the page remembers on next visit */
  try {
    localStorage.setItem('ph-lang', lang);
  } catch (_) { /* storage unavailable — silent fail */ }
}


/* ============================================================
   3. LANGUAGE SWITCHER — click & keyboard events
   ============================================================ */
document.querySelectorAll('.lang-btn').forEach(function (btn) {

  btn.addEventListener('click', function () {
    setLang(btn.getAttribute('data-lang'));
  });

  btn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setLang(btn.getAttribute('data-lang'));
    }
  });
});


/* ============================================================
   4. STICKY HEADER — gold shadow on scroll
   ============================================================ */
var header = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });
}


/* ============================================================
   5. SCROLL FADE-IN — IntersectionObserver
   ============================================================ */
var fadeObserver = null;
if (typeof IntersectionObserver !== 'undefined') {
  fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target); /* fire once */
        }
      });
    },
    { threshold: 0.13, rootMargin: '0px 0px -48px 0px' }
  );
  document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
  });
} else {
  /* Fallback: make all fade-in elements visible immediately */
  document.querySelectorAll('.fade-in').forEach(function (el) {
    el.classList.add('visible');
  });
}


/* ============================================================
   6. 3D CARD TILT — mouse-tracking depth effect
   ============================================================
   Applied to every .tilt-card (service cards + founder cards).
   The JS sets inline transform directly for a responsive feel.
   On mouse leave, the .tilt-reset class triggers a springy CSS
   return transition back to flat.
   ============================================================ */
function initTilt() {
  /* Skip on touch devices — tilt only makes sense with a mouse */
  if (window.matchMedia('(hover: none)').matches) return;
  /* Skip if user prefers reduced motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var PERSPECTIVE = 700;  /* px   — distance to projection plane  */
  var MAX_TILT    = 13;   /* deg  — maximum rotation on each axis */
  var FLOAT_Z     = 18;   /* px   — how far card "lifts" toward viewer */

  document.querySelectorAll('.tilt-card').forEach(function (card) {

    card.addEventListener('mouseenter', function () {
      /* Remove return-spring class so transform is instant during tracking */
      card.classList.remove('tilt-reset');
    });

    card.addEventListener('mousemove', function (e) {
      var rect    = card.getBoundingClientRect();
      /* Normalised position: -1 (left/top) to +1 (right/bottom) */
      var pctX    = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
      var pctY    = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
      /* Clamp to [-1, 1] in case cursor is at the very edge */
      pctX = Math.max(-1, Math.min(1, pctX));
      pctY = Math.max(-1, Math.min(1, pctY));

      var rotY =  pctX * MAX_TILT;   /* tilt left↔right */
      var rotX = -pctY * MAX_TILT;   /* tilt up↕down */

      card.style.transform =
        'perspective(' + PERSPECTIVE + 'px) ' +
        'rotateX(' + rotX + 'deg) ' +
        'rotateY(' + rotY + 'deg) ' +
        'translateZ(' + FLOAT_Z + 'px)';
    });

    card.addEventListener('mouseleave', function () {
      /* Spring back to flat */
      card.classList.add('tilt-reset');
      card.style.transform =
        'perspective(' + PERSPECTIVE + 'px) ' +
        'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}


/* ============================================================
   7. CODE EDITOR — typewriter animation with syntax highlighting
   ============================================================ */

/* Token array: c = CSS class ('' = plain), t = raw text to type */
var CODE_TOKENS = [
  {c:'cc', t:'<!-- PIXELHELDEN.de -->'},
  {c:'',   t:'\n'},
  {c:'ct', t:'<nav'},
  {c:'ca', t:' class'},
  {c:'cp', t:'='},
  {c:'cv', t:'"navbar"'},
  {c:'ct', t:'>'},
  {c:'',   t:'\n  '},
  {c:'ct', t:'<a'},
  {c:'ca', t:' class'},
  {c:'cp', t:'='},
  {c:'cv', t:'"logo"'},
  {c:'ca', t:' href'},
  {c:'cp', t:'='},
  {c:'cv', t:'"/"'},
  {c:'ct', t:'>'},
  {c:'',   t:'\n    PIXELHELDEN\n  '},
  {c:'ct', t:'</a>'},
  {c:'',   t:'\n  '},
  {c:'ct', t:'<ul'},
  {c:'ca', t:' class'},
  {c:'cp', t:'='},
  {c:'cv', t:'"links"'},
  {c:'ct', t:'>'},
  {c:'',   t:'\n    '},
  {c:'ct', t:'<li>'},
  {c:'ct', t:'<a'},
  {c:'ca', t:' href'},
  {c:'cp', t:'='},
  {c:'cv', t:'"#about"'},
  {c:'ct', t:'>'},
  {c:'',   t:'\n      About\n    '},
  {c:'ct', t:'</a>'},
  {c:'ct', t:'</li>'},
  {c:'',   t:'\n    '},
  {c:'ct', t:'<li>'},
  {c:'ct', t:'<a'},
  {c:'ca', t:' href'},
  {c:'cp', t:'='},
  {c:'cv', t:'"#work"'},
  {c:'ct', t:'>'},
  {c:'',   t:'\n      Work\n    '},
  {c:'ct', t:'</a>'},
  {c:'ct', t:'</li>'},
  {c:'',   t:'\n  '},
  {c:'ct', t:'</ul>'},
  {c:'',   t:'\n  '},
  {c:'ct', t:'<a'},
  {c:'ca', t:' class'},
  {c:'cp', t:'='},
  {c:'cv', t:'"cta-btn"'},
  {c:'ca', t:' href'},
  {c:'cp', t:'='},
  {c:'cv', t:'"#contact"'},
  {c:'ct', t:'>'},
  {c:'',   t:'\n    Get a Quote\n  '},
  {c:'ct', t:'</a>'},
  {c:'',   t:'\n'},
  {c:'ct', t:'</nav>'},
];

function initCodeEditor() {
  var codeEl   = document.getElementById('codeOutput');
  var statusEl = document.getElementById('codeStatus');
  var gutterEl = document.getElementById('codeGutter');
  if (!codeEl) return;

  /* HTML-escape raw text for safe innerHTML insertion */
  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* Build highlighted HTML string up to token tIdx, char cIdx */
  function buildHtml(tIdx, cIdx) {
    var html = '';
    for (var i = 0; i < tIdx; i++) {
      var tok = CODE_TOKENS[i];
      var e   = esc(tok.t);
      html   += tok.c ? '<span class="' + tok.c + '">' + e + '</span>' : e;
    }
    if (tIdx < CODE_TOKENS.length) {
      var cur  = CODE_TOKENS[tIdx];
      var part = esc(cur.t.slice(0, cIdx));
      html    += cur.c ? '<span class="' + cur.c + '">' + part + '</span>' : part;
    }
    return html;
  }

  /* Concatenate raw typed chars (no HTML) for position tracking */
  function rawText(tIdx, cIdx) {
    var s = '';
    for (var i = 0; i < tIdx; i++) s += CODE_TOKENS[i].t;
    if (tIdx < CODE_TOKENS.length) s += CODE_TOKENS[tIdx].t.slice(0, cIdx);
    return s;
  }

  /* Static render for reduced-motion users */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    codeEl.innerHTML = buildHtml(CODE_TOKENS.length, 0);
    return;
  }

  var curTok = 0, curCh = 0;

  function paint() {
    /* Render code with trailing cursor span */
    codeEl.innerHTML = buildHtml(curTok, curCh) + '<span class="code-editor__cursor"></span>';

    /* Update line/column counter in status bar */
    var raw   = rawText(curTok, curCh);
    var lines = raw.split('\n');
    var ln    = lines.length;
    var col   = lines[ln - 1].length + 1;
    if (statusEl) statusEl.textContent = 'Ln ' + ln + ', Col ' + col;

    /* Grow gutter line numbers dynamically */
    if (gutterEl) {
      var g = '';
      for (var n = 1; n <= ln; n++) g += '<span>' + n + '</span>';
      gutterEl.innerHTML = g;
    }
  }

  function tick() {
    if (curTok >= CODE_TOKENS.length) {
      /* Finished — pause then loop */
      paint();
      setTimeout(function () { curTok = 0; curCh = 0; tick(); }, 2800);
      return;
    }

    var tok = CODE_TOKENS[curTok];

    if (curCh >= tok.t.length) {
      /* Move to next token instantly */
      curCh = 0;
      curTok++;
      setTimeout(tick, 8);
      return;
    }

    curCh++;
    paint();

    var ch    = tok.t[curCh - 1];
    var delay = ch === '\n' ? 115 : ch === ' ' ? 26 : 50;
    setTimeout(tick, delay);
  }

  tick();
}


/* ============================================================
   8. CTA BUTTONS — wire all .cta-link elements to Gmail compose
   ============================================================ */
var GMAIL_URL = 'https://mail.google.com/mail/?view=cm' +
  '&to=ahmad99dahab@gmail.com' +
  '&su=Anfrage%20Webseite%20%E2%80%93%20PIXELHELDEN' +
  '&body=Hallo%20PIXELHELDEN%20Team%2C%0A%0A' +
  'Ich%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Webseite.' +
  '%20Bitte%20kontaktiert%20mich.%0A%0A' +
  'Mein%20Name%3A%20%0ATelefon%3A%20%0AWunsch%3A%20';

function initCTA() {
  document.querySelectorAll('.cta-link').forEach(function (el) {
    el.href = GMAIL_URL;
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
}


/* ============================================================
   9. PAGE LOADER
   ============================================================ */
function initLoader() {
  var hidden = false;

  function doHide() {
    if (hidden) return;
    hidden = true;
    var loader = document.getElementById('loader');
    if (!loader) { document.body.style.overflow = 'auto'; return; }
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
    setTimeout(function () {
      loader.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 500);
  }

  function scheduleHide() { setTimeout(doHide, 2000); }

  if (document.readyState === 'complete') {
    scheduleHide();
  } else {
    window.addEventListener('load', scheduleHide);
    setTimeout(doHide, 6000); /* absolute failsafe: hide after 6s no matter what */
  }
}


/* ============================================================
   10. SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
  var bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', function () {
    var scrolled  = window.scrollY;
    var total     = document.documentElement.scrollHeight - window.innerHeight;
    var pct       = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}


/* ============================================================
   11. CUSTOM CURSOR
   ============================================================ */
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  var cursor = document.getElementById('customCursor');
  if (!cursor) return;

  document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + (e.clientX - 11) + 'px, ' + (e.clientY - 11) + 'px)';
    cursor.classList.add('visible');
  }, { passive: true });

  document.addEventListener('mouseleave', function () { cursor.classList.remove('visible'); });

  document.addEventListener('mousedown', function () { cursor.classList.add('clicking'); });
  document.addEventListener('mouseup',   function () { cursor.classList.remove('clicking'); });
}


/* ============================================================
   12. STATS COUNTER
   ============================================================ */
function initStats() {
  var counters = document.querySelectorAll('.stat-card__number');
  if (!counters.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el       = entry.target;
      var target   = parseInt(el.getAttribute('data-target'), 10);
      var suffix   = el.getAttribute('data-suffix') || '';
      var duration = 1600;
      var start    = null;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) { observer.observe(el); });
}


/* ============================================================
   13. PRICE CALCULATOR
   ============================================================ */
var calcState = { type: 'company', pages: 'small', langs: '1', shop: 'no' };

var CALC_BASE  = { company: 499, shop: 799, restaurant: 299 };
var CALC_PAGES = { small: 0, medium: 150, large: 300 };
var CALC_LANGS = { '1': 0, '2': 100, '3': 200 };
var CALC_SHOP  = { yes: 200, no: 0 };

function calcUpdateResult() {
  var total = (CALC_BASE[calcState.type]  || 0)
            + (CALC_PAGES[calcState.pages] || 0)
            + (CALC_LANGS[calcState.langs] || 0)
            + (CALC_SHOP[calcState.shop]   || 0);
  var el = document.getElementById('calcResult');
  if (el) el.textContent = 'ab ' + total.toLocaleString('de-DE') + ' €';
}

function initCalculator() {
  var groups    = ['calcType', 'calcPages', 'calcLangs', 'calcShop'];
  var stateKeys = ['type', 'pages', 'langs', 'shop'];

  groups.forEach(function (groupId, i) {
    var group = document.getElementById(groupId);
    if (!group) return;
    group.querySelectorAll('.calc__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        group.querySelectorAll('.calc__btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        calcState[stateKeys[i]] = btn.getAttribute('data-value');
        calcUpdateResult();
      });
    });
  });

  calcUpdateResult();
}


/* ============================================================
   14. SOCIAL PROOF NOTIFICATIONS
   ============================================================ */
var PROOF_PEOPLE = [
  { de: 'Ahmed aus Berlin',      en: 'Ahmed from Berlin',      ar: 'أحمد من برلين'       },
  { de: 'Maria aus Hamburg',     en: 'Maria from Hamburg',     ar: 'ماريا من هامبورغ'     },
  { de: 'Thomas aus München',    en: 'Thomas from Munich',     ar: 'توماس من ميونخ'       },
  { de: 'Layla aus Frankfurt',   en: 'Layla from Frankfurt',   ar: 'ليلى من فرانكفورت'    },
  { de: 'Stefan aus Wien',       en: 'Stefan from Vienna',     ar: 'ستيفان من فيينا'      },
  { de: 'Yasmin aus Dubai',      en: 'Yasmin from Dubai',      ar: 'ياسمين من دبي'        },
  { de: 'Khalid aus Berlin',     en: 'Khalid from Berlin',     ar: 'خالد من برلين'        },
  { de: 'Sophie aus Köln',       en: 'Sophie from Cologne',    ar: 'صوفي من كولونيا'      },
];

var PROOF_SUFFIX = {
  de: ' hat vor {n} Minuten ein Angebot angefragt.',
  en: ' requested a quote {n} minutes ago.',
  ar: ' طلب عرضاً منذ {n} دقائق.',
};

function initSocialProof() {
  var el    = document.getElementById('socialProof');
  var msgEl = document.getElementById('socialProofMsg');
  if (!el || !msgEl) return;

  function showProof() {
    var person = PROOF_PEOPLE[Math.floor(Math.random() * PROOF_PEOPLE.length)];
    var mins   = Math.floor(Math.random() * 14) + 2;
    var lang   = currentLang || 'de';
    var name   = person[lang] || person.de;
    var suf    = (PROOF_SUFFIX[lang] || PROOF_SUFFIX.de).replace('{n}', mins);
    msgEl.innerHTML = '<strong>' + name + '</strong>' + suf;
    el.classList.add('proof-show');
    setTimeout(function () {
      el.classList.remove('proof-show');
    }, 4000);
  }

  /* First popup after 6s, then every 30s */
  setTimeout(function () {
    showProof();
    setInterval(showProof, 30000);
  }, 6000);
}


/* ============================================================
   16. FAQ ACCORDION
   ============================================================ */
function initFAQ() {
  var items = document.querySelectorAll('.faq__item');
  if (!items.length) return;

  items.forEach(function (item) {
    var btn = item.querySelector('.faq__question');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('faq__item--open');

      /* Close all items first */
      items.forEach(function (i) {
        i.classList.remove('faq__item--open');
        var q = i.querySelector('.faq__question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      /* Open the clicked item if it was closed */
      if (!isOpen) {
        item.classList.add('faq__item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}


/* ============================================================
   17. COOKIE CONSENT BANNER
   ============================================================ */
function initCookieBanner() {
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  /* Skip if consent already recorded */
  try {
    if (localStorage.getItem('ph-cookie-consent')) return;
  } catch (_) {}

  /* Show after page loader finishes (2s + buffer) */
  setTimeout(function () {
    banner.classList.add('cookie-show');
  }, 2500);

  function dismissBanner(choice) {
    banner.classList.remove('cookie-show');
    try { localStorage.setItem('ph-cookie-consent', choice); } catch (_) {}
  }

  var acceptBtn  = document.getElementById('cookieAccept');
  var declineBtn = document.getElementById('cookieDecline');
  if (acceptBtn)  acceptBtn.addEventListener('click',  function () { dismissBanner('accepted'); });
  if (declineBtn) declineBtn.addEventListener('click', function () { dismissBanner('declined'); });
}


/* ============================================================
   18. BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  var btn = document.getElementById('backTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('back-top--visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ============================================================
   10. INIT — restore saved language, activate tilt, CTAs & editor
   ============================================================ */
(function init() {
  /* Restore language preference */
  var saved = 'de';
  try {
    saved = localStorage.getItem('ph-lang') || 'de';
  } catch (_) { /* localStorage blocked */ }

  if (!translations[saved]) saved = 'de';
  setLang(saved);

  /* Boot 3D tilt after DOM is ready */
  initTilt();

  /* Wire all CTA buttons to Gmail compose */
  initCTA();

  /* Start code editor typewriter */
  initCodeEditor();

  /* Page loader, scroll bar, cursor */
  initLoader();
  initScrollProgress();
  initCursor();

  /* Stats counter, calculator, social proof */
  initStats();
  initCalculator();
  initSocialProof();

  /* FAQ accordion, cookie banner, back to top */
  initFAQ();
  initCookieBanner();
  initBackToTop();
}());
