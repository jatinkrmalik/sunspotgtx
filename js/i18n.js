/**
 * Sunspot site EN/HI i18n
 * Toggle via .lang-toggle; preference stored in localStorage.
 */
(function() {
  'use strict';

  var STORAGE_KEY = 'sunspot-lang';

  var STRINGS = {
    en: {
      // chrome
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.products': 'Products',
      'nav.contact': 'Contact',
      'nav.aria': 'Main navigation',
      'lang.btn': 'हिंदी',
      'lang.aria': 'Switch to Hindi',
      'menu.toggle': 'Toggle menu',
      'footer.company_blurb': 'Electrical appliance manufacturer since 1986. Brand: <strong>Sunspot</strong>.',
      'footer.quick': 'Quick Links',
      'footer.products': 'Products',
      'footer.contact': 'Contact Us',
      'footer.rights': '© 2026 Deepak Electrical Industries (India). All rights reserved.',
      'footer.brand_line': 'Brand: Sunspot | Manufacturer & Supplier',
      'footer.room_heaters': 'Room Heaters',
      'footer.exhaust_fans': 'Exhaust Fans',
      'footer.table_fans': 'Table Fans',
      'footer.cooler_fans': 'Cooler Fans',
      'footer.heating_elements': 'Heating Elements',
      'isi.badge': 'ISI MARKED',
      'cta.details': 'Details',
      'cta.enquire': 'Enquire',
      'cta.quote': 'Get a quote',
      'cta.enquiry': 'Send enquiry',
      'cta.contact_arrow': 'Contact Us →',
      'cta.all_products': 'All products',
      'cta.view_products': 'View products',
      'cta.call': 'Call: +91 92687 08058',
      'breadcrumb.home': 'Home',

      // index
      'home.badge': 'Delhi, India',
      'home.h1': 'Electrical appliance manufacturers <span class="hero-since">Since 1986</span>',
      'home.lead': 'Deepak Electrical Industries (India) makes ISI-marked fans, heaters, pumps, and heating elements for homes and industry across India.',
      'home.stat.years': 'Years',
      'home.stat.products': 'Products',
      'home.stat.certified': 'Certified',
      'home.products.h2': 'Our Products',
      'home.products.sub': 'ISI-marked fans, heaters, pumps, and related appliances from our unit in Bawana, Delhi.',
      'home.card.heaters.h': 'Electric Room Heaters',
      'home.card.heaters.p': 'Heat convectors and fan heaters for rooms of different sizes.',
      'home.card.exhaust.h': 'Exhaust Fans',
      'home.card.exhaust.p': 'Axial, fresh air, and trans air fans for kitchens, baths, and light commercial spaces.',
      'home.card.table.h': 'Table & Wall Fans',
      'home.card.table.p': 'Table and wall fans for homes and offices.',
      'home.card.cooler.h': 'Cooler Fans & Pumps',
      'home.card.cooler.p': 'Climatizer fans, cooler pumps, and fountain pumps for summer use.',
      'home.card.industrial.h': 'Industrial Exhaust Fans',
      'home.card.industrial.p': 'Heavy-duty exhaust fans for factories, warehouses & commercial spaces.',
      'home.card.elements.h': 'Heating Elements',
      'home.card.elements.p': 'Strip heaters, cartridge heaters, band heaters & finned air heaters.',
      'home.why.h2': 'Why Sunspot',
      'home.why.sub': 'Facts about how we work.',
      'home.why.1.h': 'Since 1986',
      'home.why.1.p': 'We have made electrical appliances in Delhi since 1986.',
      'home.why.2.h': 'ISI Certified Products',
      'home.why.2.p': 'Our room heaters and exhaust fans carry the ISI mark for safety and performance standards.',
      'home.why.3.h': 'Own Manufacturing Unit',
      'home.why.3.p': 'Factory in DSIIDC Industrial Area, Bawana. We handle production in-house from raw material to finished goods.',
      'home.why.4.h': 'Competitive Pricing',
      'home.why.4.p': 'Sold factory-direct to wholesalers and retailers.',
      'home.why.5.h': 'Trade supply',
      'home.why.5.p': 'We supply dealers and businesses across India.',
      'home.why.6.h': 'Wide Product Range',
      'home.why.6.p': 'More than 12 product lines: fans, heaters, pumps, and heating elements.',
      'home.reviews.h2': 'Customer reviews',
      'home.cta.h2': 'Need stock or a quote?',
      'home.cta.p': 'Call or write for bulk orders, dealership, or made-to-order work.',

      // about
      'about.h1': 'About Deepak Electrical Industries',
      'about.lead': 'Delhi manufacturer of electrical appliances since 1986.',
      'about.story.h2': 'Our Story',
      'about.story.p1': 'Founded in <strong>1986</strong> by <strong>Mr. Deepak Kumar Malik</strong>, Deepak Electrical Industries (India) started making electrical appliances in Delhi. The business is still based in Delhi and supplies trade buyers across India.',
      'about.story.p2': 'Operating under the brand name <strong>Sunspot</strong>, we specialize in producing ISI-certified electric room heaters, exhaust fans, table fans, cooler fans, immersion water heaters, pumps, and industrial heating elements. Sunspot products are made under the same factory process the company has used for years: in-house assembly and checks before dispatch.',
      'about.story.p3': 'Today the factory is in the <strong>DSIIDC Industrial Area, Bawana, North West Delhi</strong>. We supply wholesalers, retailers, and other businesses with fans, heaters, pumps, and related parts.',
      'about.journey.h2': 'Our Journey',
      'about.t1.h': 'Company founded',
      'about.t1.p': 'Mr. Deepak Kumar Malik starts Deepak Electrical Industries in Delhi.',
      'about.t2.h': 'Sunspot brand',
      'about.t2.p': 'The Sunspot brand is used on room heaters and exhaust fans sold across North India.',
      'about.t3.h': 'ISI Certification',
      'about.t3.p': 'Key products receive ISI marking.',
      'about.t4.h': 'Product Expansion',
      'about.t4.p': 'Range expands to industrial fans, heating elements, pumps, and cooler parts.',
      'about.t5.h': 'Today',
      'about.t5.p': 'More than 12 product categories, still based in Bawana, Delhi.',
      'about.values.h2': 'Our Values',
      'about.values.sub': 'How we run the factory.',
      'about.v1.h': 'Quality First',
      'about.v1.p': 'Finished goods are checked before dispatch. Room heaters and exhaust fans carry ISI marks where listed.',
      'about.v2.h': 'Customer Trust',
      'about.v2.p': 'We work mainly with repeat trade buyers and dealers.',
      'about.v3.h': 'Continuous Improvement',
      'about.v3.p': 'We update models and processes when buyer demand shifts.',
      'about.v4.h': 'Made in India',
      'about.v4.p': 'All production runs at the Bawana unit in Delhi.',
      'about.infra.h2': 'Our Infrastructure',
      'about.infra.unit': 'Manufacturing Unit',
      'about.infra.team': 'Dedicated Team',
      'about.infra.team.p': 'Skilled workforce of up to 10 experienced professionals',
      'about.infra.capacity': 'Production Capacity',
      'about.infra.capacity.p': '₹40 Lakh - ₹1.5 Crore annual turnover',
      'about.infra.p1': 'The Bawana unit handles sheet metal work, motor winding, assembly, and testing on site.',
      'about.infra.p2': 'Materials come from regular suppliers. Finished products are tested before dispatch, which is how we keep ISI-marked lines consistent.',
      'about.lead.h2': 'Leadership',
      'about.lead.role': 'Proprietor & Founder',
      'about.lead.p': 'Mr. Deepak Kumar Malik is the proprietor and still runs day-to-day decisions at the factory.',
      'about.cta.h2': 'Trade enquiries',
      'about.cta.p': 'Wholesalers, retailers, and buyers who need custom specs can reach us by phone or form.',

      // products
      'products.h1': 'Our Products',
      'products.lead': 'ISI-marked electrical appliances made at our Bawana factory.',
      'products.crumb': 'Products',
      'products.filter.all': 'All Products',
      'products.filter.heaters': 'Heaters',
      'products.filter.fans': 'Fans',
      'products.filter.coolers': 'Coolers & Pumps',
      'products.filter.industrial': 'Industrial',
      'products.filter.heating': 'Heating Elements',
      'products.cta.h2': 'Bulk or custom orders',
      'products.cta.p': 'Ask for wholesale rates or a custom specification.',

      // contact
      'contact.h1': 'Contact Us',
      'contact.lead': 'Questions, quotes, and dealership enquiries.',
      'contact.get': 'Get In Touch',
      'contact.address': 'Factory Address',
      'contact.phones': 'Phone Numbers',
      'contact.mobile': '(Mobile)',
      'contact.landline': '(Landline)',
      'contact.email': 'Email',
      'contact.whatsapp': 'WhatsApp',
      'contact.whatsapp.link': 'Chat with us on WhatsApp',
      'contact.hours': 'Business Hours',
      'contact.hours.p': 'Monday – Saturday: 9:00 AM – 6:00 PM<br>Sunday: Closed',
      'contact.company': 'Company Details',
      'contact.proprietor': 'Proprietor:',
      'contact.gst': 'GST:',
      'contact.est': 'Established:',
      'contact.form.h': 'Send Us an Enquiry',
      'contact.form.name': 'Full Name *',
      'contact.form.phone': 'Phone Number *',
      'contact.form.email': 'Email Address',
      'contact.form.city': 'City / State',
      'contact.form.product': 'Product Interest',
      'contact.form.product.placeholder': 'Select a product category',
      'contact.form.message': 'Your Message *',
      'contact.form.submit': 'Continue on WhatsApp',
      'contact.map': 'Open in Google Maps',
      'contact.name.ph': 'Your full name',
      'contact.phone.ph': '+91-XXXXXXXXXX',
      'contact.email.ph': 'your@email.com',
      'contact.city.ph': 'e.g., Delhi, Maharashtra',
      'contact.message.ph': 'Tell us about your requirements — quantity, specifications, delivery location, etc.',
      'contact.required': 'This field is required',
      'contact.email.invalid': 'Please enter a valid email address',
      'contact.phone.invalid': 'Please enter a valid 10-digit phone number',
      'contact.wa.prefill': 'Hello, I would like to enquire about your products.',

      // 404
      'err.h2': 'Page Not Found',
      'err.p': "That page is not here. It may have been moved or removed.",
      'err.home': '← Back to Home',
      'err.products': 'View Products',
      'err.help': 'Need help finding a product?',
      'err.contact': 'Contact us',
      'err.or_call': 'or call'
    },

    hi: {
      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.products': 'उत्पाद',
      'nav.contact': 'संपर्क',
      'nav.aria': 'मुख्य नेविगेशन',
      'lang.btn': 'English',
      'lang.aria': 'अंग्रेज़ी में बदलें',
      'menu.toggle': 'मेनू खोलें/बंद करें',
      'footer.company_blurb': '१९८६ से विद्युत उपकरण निर्माता। ब्रांड: <strong>Sunspot</strong>।',
      'footer.quick': 'त्वरित लिंक',
      'footer.products': 'उत्पाद',
      'footer.contact': 'संपर्क करें',
      'footer.rights': '© 2026 दीपक इलेक्ट्रिकल इंडस्ट्रीज़ (इंडिया)। सर्वाधिकार सुरक्षित।',
      'footer.brand_line': 'ब्रांड: Sunspot | निर्माता एवं आपूर्तिकर्ता',
      'footer.room_heaters': 'रूम हीटर',
      'footer.exhaust_fans': 'एग्ज़ॉस्ट फैन',
      'footer.table_fans': 'टेबल फैन',
      'footer.cooler_fans': 'कूलर फैन',
      'footer.heating_elements': 'हीटिंग एलिमेंट',
      'isi.badge': 'ISI मार्क',
      'cta.details': 'विवरण',
      'cta.enquire': 'पूछताछ',
      'cta.quote': 'कोटेशन लें',
      'cta.enquiry': 'Enquiry भेजें',
      'cta.contact_arrow': 'संपर्क करें →',
      'cta.all_products': 'सभी उत्पाद',
      'cta.view_products': 'उत्पाद देखें',
      'cta.call': 'कॉल: +91 92687 08058',
      'breadcrumb.home': 'होम',

      'home.badge': 'दिल्ली, भारत',
      'home.h1': 'विद्युत उपकरण निर्माता <span class="hero-since">१९८६ से</span>',
      'home.lead': 'दीपक इलेक्ट्रिकल इंडस्ट्रीज़ (इंडिया) घरों और उद्योग के लिए ISI मार्क वाले फैन, हीटर, पंप और हीटिंग एलिमेंट बनाती है।',
      'home.stat.years': 'वर्ष',
      'home.stat.products': 'उत्पाद',
      'home.stat.certified': 'प्रमाणित',
      'home.products.h2': 'हमारे उत्पाद',
      'home.products.sub': 'बावना, दिल्ली की यूनिट से ISI मार्क वाले फैन, हीटर, पंप और संबंधित उपकरण।',
      'home.card.heaters.h': 'इलेक्ट्रिक रूम हीटर',
      'home.card.heaters.p': 'अलग-अलग कमरों के लिए हीट कन्वेक्टर और फैन हीटर।',
      'home.card.exhaust.h': 'एग्ज़ॉस्ट फैन',
      'home.card.exhaust.p': 'रसोई, बाथरूम और हल्के व्यावसायिक स्थानों के लिए अक्षीय, फ्रेश एयर और ट्रांस एयर फैन।',
      'home.card.table.h': 'टेबल और वॉल फैन',
      'home.card.table.p': 'घरों और ऑफिस के लिए टेबल व दीवार पर लगने वाले फैन।',
      'home.card.cooler.h': 'कूलर फैन और पंप',
      'home.card.cooler.p': 'गर्मी के मौसम के लिए क्लाइमेटाइज़र फैन, कूलर पंप और फाउंटेन पंप।',
      'home.card.industrial.h': 'औद्योगिक एग्ज़ॉस्ट फैन',
      'home.card.industrial.p': 'कारखानों, गोदामों और बड़े व्यावसायिक स्थानों के लिए हेवी-ड्यूटी एग्ज़ॉस्ट फैन।',
      'home.card.elements.h': 'हीटिंग एलिमेंट',
      'home.card.elements.p': 'स्ट्रिप, कार्ट्रिज, बैंड और फिन्ड एयर हीटर।',
      'home.why.h2': 'Sunspot क्यों',
      'home.why.sub': 'हम कैसे काम करते हैं।',
      'home.why.1.h': '१९८६ से',
      'home.why.1.p': 'हम १९८६ से दिल्ली में विद्युत उपकरण बना रहे हैं।',
      'home.why.2.h': 'ISI प्रमाणित उत्पाद',
      'home.why.2.p': 'हमारे रूम हीटर और एग्ज़ॉस्ट फैन पर सुरक्षा व प्रदर्शन के लिए ISI मार्क है।',
      'home.why.3.h': 'स्वयं की मैन्युफैक्चरिंग यूनिट',
      'home.why.3.p': 'डीएसआईआईडीसी औद्योगिक क्षेत्र, बावना में फैक्ट्री। कच्चे माल से तैयार माल तक इन-हाउस उत्पादन।',
      'home.why.4.h': 'प्रतिस्पर्धी कीमत',
      'home.why.4.p': 'थोक विक्रेताओं और रिटेलरों को सीधे फैक्ट्री से बिक्री।',
      'home.why.5.h': 'व्यापार आपूर्ति',
      'home.why.5.p': 'हम पूरे भारत में डीलरों और व्यवसायों को आपूर्ति करते हैं।',
      'home.why.6.h': 'विस्तृत उत्पाद श्रृंखला',
      'home.why.6.p': '१२ से अधिक उत्पाद लाइनें: फैन, हीटर, पंप और हीटिंग एलिमेंट।',
      'home.reviews.h2': 'ग्राहक समीक्षाएँ',
      'home.cta.h2': 'स्टॉक या कोटेशन चाहिए?',
      'home.cta.p': 'थोक ऑर्डर, डीलरशिप या कस्टम निर्माण के लिए कॉल या लिखें।',

      'about.h1': 'दीपक इलेक्ट्रिकल इंडस्ट्रीज़ के बारे में',
      'about.lead': '१९८६ से दिल्ली में विद्युत उपकरण निर्माता।',
      'about.story.h2': 'हमारी कहानी',
      'about.story.p1': '<strong>१९८६</strong> में <strong>श्री दीपक कुमार मलिक</strong> द्वारा स्थापित, दीपक इलेक्ट्रिकल इंडस्ट्रीज़ (इंडिया) ने दिल्ली में विद्युत उपकरण बनाना शुरू किया। व्यवसाय अभी भी दिल्ली में है और व्यापार खरीदारों को आपूर्ति करता है।',
      'about.story.p2': '<strong>Sunspot</strong> ब्रांड के तहत हम ISI प्रमाणित रूम हीटर, एग्ज़ॉस्ट फैन, टेबल फैन, कूलर फैन, इमर्शन हीटर, पंप और औद्योगिक हीटिंग एलिमेंट बनाते हैं। असेंबली और डिस्पैच से पहले जाँच इन-हाउस होती है।',
      'about.story.p3': 'आज फैक्ट्री <strong>डीएसआईआईडीसी औद्योगिक क्षेत्र, बावना, उत्तर पश्चिम दिल्ली</strong> में है। हम थोक विक्रेताओं, रिटेलरों और अन्य व्यवसायों को फैन, हीटर, पंप व संबंधित पार्ट्स की आपूर्ति करते हैं।',
      'about.journey.h2': 'हमारी यात्रा',
      'about.t1.h': 'कंपनी की स्थापना',
      'about.t1.p': 'श्री दीपक कुमार मलिक ने दिल्ली में दीपक इलेक्ट्रिकल इंडस्ट्रीज़ शुरू की।',
      'about.t2.h': 'Sunspot ब्रांड',
      'about.t2.p': 'उत्तर भारत में रूम हीटर और एग्ज़ॉस्ट फैन पर Sunspot ब्रांड का उपयोग।',
      'about.t3.h': 'ISI प्रमाणन',
      'about.t3.p': 'मुख्य उत्पादों को ISI मार्क मिला।',
      'about.t4.h': 'उत्पाद विस्तार',
      'about.t4.p': 'औद्योगिक फैन, हीटिंग एलिमेंट, पंप और कूलर पार्ट्स तक श्रृंखला बढ़ी।',
      'about.t5.h': 'आज',
      'about.t5.p': '१२ से अधिक उत्पाद श्रेणियाँ, अभी भी बावना, दिल्ली में।',
      'about.values.h2': 'हमारे मूल्य',
      'about.values.sub': 'हम फैक्ट्री कैसे चलाते हैं।',
      'about.v1.h': 'गुणवत्ता पहले',
      'about.v1.p': 'डिस्पैच से पहले तैयार माल की जाँच। रूम हीटर और एग्ज़ॉस्ट फैन जहाँ सूचीबद्ध हैं वहाँ ISI मार्क।',
      'about.v2.h': 'ग्राहक विश्वास',
      'about.v2.p': 'हम मुख्य रूप से दोबारा खरीदने वाले व्यापार खरीदारों और डीलरों के साथ काम करते हैं।',
      'about.v3.h': 'निरंतर सुधार',
      'about.v3.p': 'खरीदार की माँग बदलने पर मॉडल और प्रक्रियाएँ अपडेट करते हैं।',
      'about.v4.h': 'मेड इन इंडिया',
      'about.v4.p': 'सारा उत्पादन दिल्ली की बावना यूनिट में होता है।',
      'about.infra.h2': 'हमारा इंफ्रास्ट्रक्चर',
      'about.infra.unit': 'मैन्युफैक्चरिंग यूनिट',
      'about.infra.team': 'समर्पित टीम',
      'about.infra.team.p': 'लगभग १० अनुभवी पेशेवरों की कुशल टीम',
      'about.infra.capacity': 'उत्पादन क्षमता',
      'about.infra.capacity.p': 'वार्षिक टर्नओवर ₹४० लाख – ₹१.५ करोड़',
      'about.infra.p1': 'बावना यूनिट में शीट मेटल, मोटर वाइंडिंग, असेंबली और टेस्टिंग ऑन साइट।',
      'about.infra.p2': 'सामग्री नियमित आपूर्तिकर्ताओं से आती है। डिस्पैच से पहले टेस्टिंग से ISI मार्क वाली लाइनें स्थिर रहती हैं।',
      'about.lead.h2': 'नेतृत्व',
      'about.lead.role': 'प्रोपराइटर एवं संस्थापक',
      'about.lead.p': 'श्री दीपक कुमार मलिक प्रोपराइटर हैं और फैक्ट्री के दैनिक निर्णय अभी भी स्वयं देखते हैं।',
      'about.cta.h2': 'व्यापार पूछताछ',
      'about.cta.p': 'थोक विक्रेता, रिटेलर और कस्टम स्पेक वाले खरीदार फोन या फ़ॉर्म से संपर्क कर सकते हैं।',

      'products.h1': 'हमारे उत्पाद',
      'products.lead': 'बावना फैक्ट्री में बने ISI मार्क वाले विद्युत उपकरण।',
      'products.crumb': 'उत्पाद',
      'products.filter.all': 'सभी उत्पाद',
      'products.filter.heaters': 'हीटर',
      'products.filter.fans': 'फैन',
      'products.filter.coolers': 'कूलर और पंप',
      'products.filter.industrial': 'औद्योगिक',
      'products.filter.heating': 'हीटिंग एलिमेंट',
      'products.cta.h2': 'थोक या कस्टम ऑर्डर',
      'products.cta.p': 'थोक दर या कस्टम स्पेसिफिकेशन के लिए पूछें।',

      'contact.h1': 'संपर्क करें',
      'contact.lead': 'प्रश्न, कोटेशन और डीलरशिप पूछताछ।',
      'contact.get': 'संपर्क में रहें',
      'contact.address': 'फैक्ट्री पता',
      'contact.phones': 'फ़ोन नंबर',
      'contact.mobile': '(मोबाइल)',
      'contact.landline': '(लैंडलाइन)',
      'contact.email': 'ईमेल',
      'contact.whatsapp': 'व्हाट्सऐप',
      'contact.whatsapp.link': 'व्हाट्सऐप पर चैट करें',
      'contact.hours': 'कार्य समय',
      'contact.hours.p': 'सोमवार – शनिवार: सुबह ९:०० – शाम ६:००<br>रविवार: बंद',
      'contact.company': 'कंपनी विवरण',
      'contact.proprietor': 'प्रोपराइटर:',
      'contact.gst': 'जीएसटी:',
      'contact.est': 'स्थापना:',
      'contact.form.h': 'Enquiry भेजें',
      'contact.form.name': 'पूरा नाम *',
      'contact.form.phone': 'फ़ोन नंबर *',
      'contact.form.email': 'ईमेल पता',
      'contact.form.city': 'शहर / राज्य',
      'contact.form.product': 'उत्पाद रुचि',
      'contact.form.product.placeholder': 'उत्पाद श्रेणी चुनें',
      'contact.form.message': 'आपका संदेश *',
      'contact.form.submit': 'व्हाट्सऐप पर जारी रखें',
      'contact.map': 'Google Maps में खोलें',
      'contact.name.ph': 'आपका पूरा नाम',
      'contact.phone.ph': '+91-XXXXXXXXXX',
      'contact.email.ph': 'your@email.com',
      'contact.city.ph': 'जैसे दिल्ली, महाराष्ट्र',
      'contact.message.ph': 'अपनी आवश्यकता लिखें — मात्रा, स्पेसिफिकेशन, डिलीवरी स्थान आदि।',
      'contact.required': 'यह फ़ील्ड आवश्यक है',
      'contact.email.invalid': 'कृपया मान्य ईमेल दर्ज करें',
      'contact.phone.invalid': 'कृपया मान्य १० अंकों का फ़ोन नंबर दर्ज करें',
      'contact.wa.prefill': 'नमस्ते, मैं आपके उत्पादों के बारे में जानना चाहता/चाहती हूँ।',

      'err.h2': 'पेज नहीं मिला',
      'err.p': 'यह पेज यहाँ नहीं है। शायद हटा दिया गया या स्थानांतरित हो गया हो।',
      'err.home': '← होम पर वापस',
      'err.products': 'उत्पाद देखें',
      'err.help': 'कोई उत्पाद ढूँढना है?',
      'err.contact': 'संपर्क करें',
      'err.or_call': 'या कॉल करें'
    }
  };

  // Product blurbs on products page (optional — keep English product names, translate descriptions via data-i18n if present)
  var productHi = {
    'p.room': 'थर्मोस्टैट नियंत्रण और ओवरहीट कट-ऑफ के साथ संवहन रूम हीटिंग। सर्दियों के उपयोग के लिए।',
    'p.fan_heater': 'समायोज्य थर्मोस्टैट और दो हीट सेटिंग वाला फैन-असिस्टेड हीटर। छोटे कमरों के लिए कॉम्पैक्ट।',
    'p.axial': 'रसोई, बाथरूम और हल्के व्यावसायिक कमरों के लिए अक्षीय एग्ज़ॉस्ट फैन। कुशल मोटर, स्थिर वायु प्रवाह।',
    'p.fresh_hs': 'मजबूत मोटर और संतुलित ब्लेड वाला हाई-स्पीड फ्रेश एयर फैन।',
    'p.fresh_3': 'स्थिर कमरे के वेंटिलेशन के लिए तीन ब्लेड वाला फ्रेश एयर फैन।',
    'p.trans': 'घर, ऑफिस और हल्के व्यावसायिक उपयोग के लिए एयर सर्कुलेशन फैन।',
    'p.table': 'ऑसिलेशन और स्पीड नियंत्रण वाले टेबल फैन। डेस्क और छोटे कमरों के कई आकार।',
    'p.wall': 'कमरे और हॉल के लिए दीवार पर लगने वाले फैन। जगह बचाते हैं; ऑसिलेशन मॉडल उपलब्ध।',
    'p.cooler': 'सामान्य कूलर ब्रांडों के लिए रिप्लेसमेंट कूलर/क्लाइमेटाइज़र फैन। गर्मी में उच्च एयरफ्लो।',
    'p.ind': 'कारखानों, वर्कशॉप और बड़े स्थानों के लिए हेवी-ड्यूटी एग्ज़ॉस्ट फैन। लंबे समय चलाने के लिए।',
    'p.hd': 'अधिक निकासी और सरल रखरखाव वाले अतिरिक्त भारी औद्योगिक एग्ज़ॉस्ट फैन।',
    'p.imm': 'बाल्टी/टैंक में पानी गर्म करने के इमर्शन रॉड। ऑटो कट-ऑफ और शॉक-प्रूफ विकल्प; कई वॉटेज।',
    'p.fount': 'सजावटी फव्वारों और छोटे जल सुविधाओं के लिए सबमर्सिबल पंप।',
    'p.cpump': 'रेगिस्तानी और रूम कूलर के लिए रिप्लेसमेंट पंप। सामान्य ब्रांडों में फिट।',
    'p.flexi': 'डेस्क या काम की जगह पर मोड़ सकने वाले फ्लेक्सी-नेक फैन। कॉम्पैक्ट बॉडी।',
    'p.heat_el': 'स्ट्रिप, कार्ट्रिज, सिरेमिक/माइका बैंड और फिन्ड एयर हीटर। अनुरोध पर कस्टम स्पेक।',
    'li.isi': 'सुरक्षा के लिए ISI प्रमाणित',
    'li.watt': 'कई वॉटेज विकल्प',
    'li.thermal': 'थर्मल कट-ऑफ सुरक्षा',
    'li.quick': 'तेज़ गर्मी वितरण',
    'li.fanw': 'फैन-असिस्टेड वार्मिंग',
    'li.compact': 'कॉम्पैक्ट और पोर्टेबल',
    'li.isi_q': 'ISI मार्क',
    'li.low': 'कम शोर',
    'li.sizes': 'कई आकार विकल्प',
    'li.rpm': 'उच्च RPM मोटर',
    'li.bal': 'संतुलित ब्लेड',
    'li.life': 'लंबी मोटर लाइफ',
    'li.blade3': '३-ब्लेड दक्षता',
    'li.aesth': 'सुंदर डिज़ाइन',
    'li.easy': 'आसान स्थापना',
    'li.vers': 'बहुउपयोगी',
    'li.dur': 'टिकाऊ निर्माण',
    'li.cost': 'किफायती',
    'li.air': 'मजबूत एयर डिलीवरी',
    'li.osc': 'ऑसिलेशन',
    'li.speed': 'स्पीड नियंत्रण',
    'li.wall': 'वॉल-माउंट डिज़ाइन',
    'li.sweep': 'चौड़ा एयर स्वीप',
    'li.energy': 'ऊर्जा कुशल',
    'li.uni': 'यूनिवर्सल संगतता',
    'li.highair': 'उच्च एयरफ्लो',
    'li.motor': 'टिकाऊ मोटर',
    'li.indm': 'औद्योगिक ग्रेड मोटर',
    'li.vol': 'उच्च वॉल्यूम एग्ज़ॉस्ट',
    'li.rug': 'मजबूत निर्माण',
    'li.maxd': 'अधिकतम टिकाऊपन',
    'li.cap': 'उच्च क्षमता मोटर',
    'li.maint': 'कम रखरखाव',
    'li.rapid': 'तेज़ हीटिंग',
    'li.auto': 'ऑटो सेफ्टी कट-ऑफ',
    'li.shock': 'शॉक-प्रूफ डिज़ाइन',
    'li.sub': 'सबमर्सिबल डिज़ाइन',
    'li.silent': 'शांत संचालन',
    'li.ufit': 'यूनिवर्सल फिट',
    'li.flow': 'कुशल जल प्रवाह',
    'li.adj': 'समायोज्य दिशा',
    'li.flex': 'लचीला गर्दन',
    'li.comp2': 'कॉम्पैक्ट डिज़ाइन',
    'li.strip': 'स्ट्रिप हीटर',
    'li.cart': 'कार्ट्रिज हीटर',
    'li.band': 'सिरेमिक/माइका बैंड हीटर',
    'li.finned': 'फिन्ड एयर हीटर'
  };

  Object.keys(productHi).forEach(function(k) {
    STRINGS.en[k] = STRINGS.en[k] || null; // filled from DOM on first run if needed
    STRINGS.hi[k] = productHi[k];
  });

  function getLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'hi' || stored === 'en') return stored;
    } catch (e) {}
    return 'en';
  }

  function setLang(lang) {
    if (lang !== 'hi' && lang !== 'en') lang = 'en';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function t(key, lang) {
    lang = lang || getLang();
    var pack = STRINGS[lang] || STRINGS.en;
    if (pack[key] != null) return pack[key];
    if (STRINGS.en[key] != null) return STRINGS.en[key];
    return null;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var val = t(key, lang);
      if (val == null) return;
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key, lang);
      if (val != null) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria');
      var val = t(key, lang);
      if (val != null) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-value');
      var val = t(key, lang);
      if (val != null && el.tagName === 'OPTION' && el.value === '') {
        el.textContent = val;
      } else if (val != null && el.tagName === 'OPTION') {
        // keep value attr, only label text
        el.textContent = val;
      }
    });

    // Toggle button label shows the *other* language
    document.querySelectorAll('.lang-toggle').forEach(function(btn) {
      btn.textContent = t('lang.btn', lang);
      btn.setAttribute('aria-label', t('lang.aria', lang));
      btn.setAttribute('aria-pressed', lang === 'hi' ? 'true' : 'false');
    });

    // Mobile menu aria
    document.querySelectorAll('.nav-menu').forEach(function(nav) {
      nav.setAttribute('aria-label', t('nav.aria', lang));
    });
    document.querySelectorAll('.mobile-toggle').forEach(function(btn) {
      if (!btn.getAttribute('data-i18n-aria')) {
        btn.setAttribute('aria-label', t('menu.toggle', lang));
      }
    });

    // Notify form validation strings
    window.SUNSPOT_I18N = { lang: lang, t: t };
  }

  function init() {
    // Capture English product description defaults from DOM once if missing in en pack
    document.querySelectorAll('[data-i18n^="p."], [data-i18n^="li."]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (STRINGS.en[key] == null || STRINGS.en[key] === '') {
        STRINGS.en[key] = el.getAttribute('data-i18n-html') === 'true' ? el.innerHTML : el.textContent.trim();
      }
    });

    var lang = getLang();
    applyLang(lang);

    document.querySelectorAll('.lang-toggle').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var next = (getLang() === 'hi') ? 'en' : 'hi';
        setLang(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.SUNSPOT_I18N = { setLang: setLang, getLang: getLang, t: t, applyLang: applyLang };
})();
