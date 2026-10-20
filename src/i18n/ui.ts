/**
 * Translation dictionaries for UI strings.
 *
 * Usage:
 *   import { getLangFromUrl, useTranslations } from '../i18n/utils';
 *   const lang = getLangFromUrl(Astro.url);
 *   const t = useTranslations(lang);
 *   t('nav.features') // => "Features" or "Características"
 */

export const languages = {
  en: 'English',
  es: 'Español',
  id: 'Bahasa Indonesia',
  vi: 'Tiếng Việt',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Main Site
    'site.name': 'MusicallyDown',
    'site.title': 'MusicallyDown – TikTok Video Downloader Without Watermark',
    'site.description': 'Download TikTok videos without watermark in HD with MusicallyDown. Save TikTok as MP4 or MP3, free, with no app and no sign-up. Paste the link and go.',
    

    // Navigation
    'nav.product': 'Tiktok Downloader',
    'nav.features': 'Save TikTok Video',
    'nav.blog': 'Blog',
    'nav.about': 'How to Use',
    'nav.contact': 'FAQ',

    // Hero
    'hero.titleStart': 'TikTok video downloader',
    'hero.titleHighlight': ' without watermark',
    'hero.description': 'Download TikTok videos without watermark and Convert TikTok to MP3 free',

    // Section 1
    'section1.title': 'Download TikTok Videos Online - ',
    'section1.highlight': 'No Watermark',
    'section1.paragraph': 'MusicallyDown is a free TikTok downloader to save TikTok video as an MP4 without watermark in the high quality. Musical down helps you to download videos from TikTok without watermark by using any browser on iPhone, Android and PC quickly and easily.',
    'section1.paragraph2': 'Musical Down helps you to work with supported TikTok video links in one place. Depending on the formats available for a TikTok video, you can save TikTok video as an MP4 or extract its audio as an MP3.',

    // Bento Grid
    'bento.title': 'Everything you get with Musical Down ',
    'bento.highlight': 'TikTok Video Downloader',
    'bento.paragraph': 'MusicallyDown is the fastest TikTok Video Download tool that lets you download TikTok videos without watermark in HD quality. Save TikTok videos online in an MP4 format on any device.',
    'bento.paragraph1': 'If you search for MusicallyDown, Musically Down or musicallydown.com, you will find a free online TikTok downloader that is simple to use: copy the video link, paste it and save the file. The same page also includes a TikTok to MP3 converter for extracting audio from any video.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Find quick answers to the most common questions about downloading TikTok videos and audio. Learn how our tool works, which formats are supported and how to fix common issues, so you can save your favorite content easily, safely and responsibly on any device.',
    'faq.question1': 'Is Musicallydown free?',
    'faq.answer1': 'Yes. Downloading is free, the site is supported by ads and you do not need to register or install anything.',
    'faq.question2': 'How do I download a TikTok video without a watermark?',
    'faq.answer2': 'Copy the link from TikTok Share menu, paste it into the box on this page, press Download and choose SD or HD (no watermark). No account or app is needed.',
    'faq.question3': 'How do I convert TikTok to MP3?',
    'faq.answer3': 'Paste the TikTok link, press Download and choose Download Audio Only. The sound saves as an MP3 on iPhone, Android or PC.',
    'faq.question4': 'Can I save a TikTok as an MP4 file?',
    'faq.answer4': 'Yes. The SD and HD options save the video as a regular MP4 that plays in any player on your phone or computer.',
    'faq.question5': 'Is there a TikTok to MP3 320 kbps option?',
    'faq.answer5': 'No. We save audio the way TikTok stores it, so a 320 kbps label would not add real detail. Expect a normal listening-quality MP3.',
    'faq.question6': 'Can I download YouTube videos here?',
    'faq.answer6': 'No. Musicallydown only accepts TikTok links. YouTube downloaders and converters are separate services.',
    'faq.question7': 'Why is my TikTok link not working?',
    'faq.answer7': 'Most failures come from private or deleted videos or a link with extra text around it. Use a public video, copy only the link and try again.',
    'faq.question8': 'Is Musicallydown safe to use?',
    'faq.answer8': 'You never enter your TikTok password or install anything. Only paste a video link, and do not share personal login details with any downloader. Read our Privacy Policy for how data is handled.',
    'faq.question9': 'Is it legal to download TikTok videos?',
    'faq.answer9': 'It depends on what you do with the file. Saving your own videos or clips you have permission to use is generally fine; reposting others videos as your own is not. This is general information, not legal advice.',
    'faq.question10': 'Can I use a TikTok downloader on an iPhone? or Android?',
    'faq.answer10': 'Yes. Musicallydown works in any browser on iPhone, Android or PC. No app is needed.',
    
    
    
    
    
    // Footer
    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
    'footer.documentation': 'Documentation',
    'footer.rssFeed': 'RSS Feed',
    'footer.license': 'License (MIT)',
    'footer.copyright':
    'Astro SEO Theme Crafted by <a href="https://davidrueda.vercel.app/" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors">druedaro</a>.',
    'footer.builtWith': 'Built with',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',

    // Contact Page
    'contact.title': "Let's talk about your project",
    'contact.description':
      'Whether you need a custom implementation, have questions about our open-source offering, or just want to say hi, our team is ready to help.',
    'contact.formTitle': 'Send us a message',
    'contact.firstName': 'First name',
    'contact.lastName': 'Last name',
    'contact.email': 'Company email',
    'contact.message': 'How can we help?',
    'contact.submit': 'Send Message',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.hqLabel': 'Headquarters',

    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'Building the ultimate open-source SEO theme for Astro.',
    'about.missionTitle': 'Our Mission',
    'about.missionText':
      "We believe that technical SEO shouldn't be an afterthought. It should be baked into the foundation of every marketing website. That's why we created Astro SEO Theme—to provide a robust, lightning-fast starting point for B2B SaaS companies.",
    'about.openSourceTitle': 'Open Source',
    'about.openSourceText':
      'This project is 100% open-source and free to use under the MIT license. We encourage contributions from the community to help make this the best SEO template available.',

    // Misc
    skipToContent: 'Skip to main content',
    lastUpdated: 'Last updated',
  },
  es: {
    // Navigation
    'nav.product': 'Descargador de TikTok',
    'nav.resources': 'Recursos',
    'nav.features': 'Guardar videos de TikTok',
    'nav.featuresDesc': 'Descubre nuestras funciones principales.',
    'nav.pricing': 'Descargar historias de TikTok',
    'nav.pricingDesc': 'Planes simples y transparentes.',
    'nav.blog': 'Blog',
    'nav.blogDesc': 'Últimas noticias y artículos.',
    'nav.caseStudies': 'Descargar MP3 de TikTok',
    'nav.caseStudiesDesc': 'Mira cómo otras empresas tienen éxito.',
    'nav.docs': 'Documentación',
    'nav.docsDesc': 'Guías, tutoriales y referencia.',
    'nav.about': 'Cómo usar',
    'nav.contact': 'Preguntas frecuentes',

    // Hero
    'hero.badge': 'v1.0 disponible',
    'hero.titleStart': 'Descargador de videos de TikTok',
    'hero.titleHighlight': 'sin marca de agua',
    'hero.description': 'Descarga videos de TikTok sin marca de agua en PC, iPhone y Android',
    'hero.primaryCta': 'Empezar en GitHub',
    'hero.secondaryCta': 'Leer la Documentación',

    // Bento Grid
    'bento.title': 'Todo lo que necesitas para posicionar mejor',
    'bento.subtitle': 'Construido desde cero para SEO técnico y motores de búsqueda con IA.',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.description': 'Todo lo que necesitas saber sobre el producto y la facturación.',

    // Footer
    'footer.product': 'Producto',
    'footer.resources': 'Recursos',
    'footer.company': 'Empresa',
    'footer.documentation': 'Documentación',
    'footer.rssFeed': 'Feed RSS',
    'footer.license': 'Licencia (MIT)',
    'footer.copyright':
      'Astro SEO Theme Creado por <a href="https://davidrueda.vercel.app/" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors">druedaro</a>.',
    'footer.builtWith': 'Hecho con',
    'footer.privacyPolicy': 'Política de Privacidad',
    'footer.termsOfService': 'Términos de Servicio',

    // Contact Page
    'contact.title': 'Hablemos de tu proyecto',
    'contact.description':
      'Ya sea que necesites una implementación personalizada, tengas preguntas sobre nuestra oferta open-source o simplemente quieras saludar, nuestro equipo está listo para ayudarte.',
    'contact.formTitle': 'Envíanos un mensaje',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellidos',
    'contact.email': 'Email corporativo',
    'contact.message': '¿Cómo podemos ayudarte?',
    'contact.submit': 'Enviar Mensaje',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Teléfono',
    'contact.hqLabel': 'Sede Central',

    // About Page
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Creando el tema SEO open-source definitivo para Astro.',
    'about.missionTitle': 'Nuestra Misión',
    'about.missionText':
      'Creemos que el SEO técnico no debería ser una ocurrencia tardía. Debería estar integrado en los cimientos de cada sitio web de marketing. Por eso creamos Astro SEO Theme: para proporcionar un punto de partida robusto y ultrarrápido para empresas B2B SaaS.',
    'about.openSourceTitle': 'Código Abierto',
    'about.openSourceText':
      'Este proyecto es 100% open-source y de uso gratuito bajo la licencia MIT. Fomentamos las contribuciones de la comunidad para ayudar a convertir esto en la mejor plantilla SEO disponible.',

    // Misc
    skipToContent: 'Saltar al contenido principal',
    lastUpdated: 'Última actualización',
  },
  id: {
    // Navigation
    'nav.product': 'Pengunduh TikTok',
    'nav.features': 'Simpan Video TikTok',
    'nav.pricing': 'Unduh Cerita TikTok',
    'nav.blog': 'Blog',
    'nav.caseStudies': 'Unduh MP3 TikTok',
    'nav.about': 'Cara Penggunaan',
    'nav.contact': 'FAQ',

    // Hero
    'hero.titleStart': 'Pengunduh video TikTok',
    'hero.titleHighlight': 'tanpa watermark',
    'hero.description': 'Unduh video TikTok tanpa watermark ke PC, iPhone, dan Android',

    // Footer
    'footer.privacyPolicy': 'Kebijakan Privasi',
    'footer.termsOfService': 'Ketentuan Layanan',

    // Misc
    skipToContent: 'Lewati ke konten utama',
    lastUpdated: 'Terakhir diperbarui',
  },
  vi: {
    // Navigation
    'nav.product': 'Trình tải TikTok',
    'nav.features': 'Lưu video TikTok',
    'nav.pricing': 'Tải story TikTok',
    'nav.blog': 'Blog',
    'nav.caseStudies': 'Tải MP3 TikTok',
    'nav.about': 'Hướng dẫn sử dụng',
    'nav.contact': 'Câu hỏi thường gặp',

    // Hero
    'hero.titleStart': 'Tải video TikTok',
    'hero.titleHighlight': 'không logo',
    'hero.description': 'Tải video TikTok không có watermark về máy tính, iPhone và Android',

    // Footer
    'footer.privacyPolicy': 'Chính sách bảo mật',
    'footer.termsOfService': 'Điều khoản dịch vụ',

    // Misc
    skipToContent: 'Chuyển đến nội dung chính',
    lastUpdated: 'Cập nhật lần cuối',
  },
} as const;
