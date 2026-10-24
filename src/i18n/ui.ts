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
    'site.title': 'MusicallyDown – TikTok Downloader Without Watermark & MP3',
    'site.description':
      'Download TikTok videos without watermark in HD with Free MusicallyDown TikTok downloader. Save TikTok video as MP4 or MP3, free, with no app and no sign-up.',

    // Navigation
    'nav.home': 'Home',
    'nav.stories': 'Download TikTok Stories',
    'nav.mp3': 'Download TikTok MP3',
    'nav.blog': 'Blog',
    'nav.how': 'How to Use',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    // Hero
    'hero.badge1': 'No Watermark',
    'hero.badge2': 'HD Quality',
    'hero.badge3': 'MP4 & MP3',
    'hero.badge4': 'Free, No Sign-up',
    'hero.titleStart': 'TikTok Downloader HD Free,',
    'hero.titleHighlight': ' No Watermark',
    'hero.description': 'Download TikTok videos without watermark and Convert TikTok to MP3 free',
    'hero.subtitle':
      'Also searched as MusicallyDown, Musically Down or Musical Down. You are in the right place.',

    // Section 1
    'section1.title': 'Download TikTok Videos Online - ',
    'section1.highlight': 'No Watermark',
    'section1.paragraph':
      'MusicallyDown is a free TikTok downloader to save TikTok video as an MP4 without watermark in the high quality. Musical down helps you to download videos from TikTok without watermark by using any browser on iPhone, Android and PC quickly and easily.',
    'section1.paragraph2':
      'Musical Down helps you to work with supported TikTok video links in one place. Depending on the formats available for a TikTok video, you can save TikTok video as an MP4 or extract its audio as an MP3.',

    // Highlights bar (LogoCloud.astro)
    'highlights.ariaLabel': 'Service highlights',
    'highlights.item1.title': 'Browser-based',
    'highlights.item1.text': 'No dedicated app',
    'highlights.item2.title': 'Video formats',
    'highlights.item2.text': 'Options vary by link',
    'highlights.item3.title': 'Audio options',
    'highlights.item3.text': 'When available',
    'highlights.item4.title': 'Easy workflow',
    'highlights.item4.text': 'Copy, paste, review',

    // How it works (LogoCloud.astro)
    'how.eyebrow': 'Three simple steps',
    'how.title': 'How to download TikTok videos in HD',
    'how.description':
      'Download a TikTok video in just 3 steps and about ten seconds: paste the link, then choose MP4 in step 3 to save it in HD, or choose MP3 to convert TikTok to audio, depending on the formats available for that video.',
    'how.step1.title': 'Copy the video link',
    'how.step1.text':
      'Open the TikTok video, select Share, and choose Copy link. Make sure the video is accessible and you have permission to save it.',
    'how.step2.title': 'Paste it into MusicalDown',
    'how.step2.text':
      'Return to this page, paste the URL into the musical down TikTok downloader field and submit it for processing.',
    'how.step3.title': 'Review and save',
    'how.step3.text':
      "Choose a format that is actually offered for your link, then follow the download prompt and check your device's downloads.",

    // Features grid (LogoCloud.astro)
    'features.eyebrow': 'Made for your workflow',
    'features.title': 'A practical TikTok video downloader',
    'features.description':
      'Find the right option for the task at hand, without assuming every video supports every format or resolution.',
    'features.item1.title': 'TikTok downloader HD',
    'features.item1.text':
      'Check which video resolutions are returned for a supported link. HD, 1080p and 4K are not guaranteed for every clip.',
    'features.item2.title': 'MP4 video options',
    'features.item2.text':
      'When MP4 is offered, it provides a widely supported format for playback on many phones, tablets and computers.',
    'features.item3.title': 'TikTok sound downloader',
    'features.item3.text':
      'If audio extraction is supported for your link, review the available audio or MP3 option before saving.',
    'features.item4.title': 'Watermark-free options',
    'features.item4.text':
      'Check the results for a watermark-free option where available. Availability can vary by video and service behavior.',
    'features.item5.title': 'Works in your browser',
    'features.item5.text':
      'Open the website in a compatible browser on iPhone, Android, Windows or Mac. File locations depend on your device.',
    'features.item6.title': 'No TikTok password needed',
    'features.item6.text':
      'Never share your TikTok login credentials with a downloader. Use only the public link you intend to submit.',

    // Intro text (LogoCloud.astro)
    'intro.paragraph1':
      'MusicalDown is a free online TikTok video downloader for people who want the video, not a pile of extra steps. The name goes back to the Musical.ly app, which later merged into TikTok, so many visitors still type “musically download online” or “musical down”. Under any spelling the idea is the same: take a public TikTok link and turn it into a file on your own device.',
    'intro.paragraph2':
      'The page stays light, so it loads quickly even on a slow mobile connection.',

    // Bento Grid
    'bento.title': 'Everything you get with Musical Down ',
    'bento.highlight': 'TikTok Video Downloader',
    'bento.paragraph':
      'MusicallyDown is the fastest TikTok Video Download tool that lets you download TikTok videos without watermark in HD quality. Save TikTok videos online in an MP4 format on any device.',
    'bento.paragraph1':
      'If you search for MusicallyDown, Musically Down or musicallydown, you will find a free online TikTok downloader that is simple to use: copy the video link, paste it and save the file. The same page also includes a TikTok to MP3 converter for extracting audio from any video.',

    // ── Bento: TikTok video quality ──────────────────────────────
    'bento.quality.eyebrow': 'Know what to expect from MusicallyDown',
    'bento.quality.title': 'HD TikTok downloader: Save Tiktok videos up to 4K',
    'bento.quality.p1':
      'The quality you can save Tiktok videos depends on the original video and the formats the Tiktok downloader returns. Select a resolution only when it is explicitly available; a downloader cannot create genuine detail that was not present in the source.',
    'bento.quality.p2':
      'For large files, use a stable connection and make sure your device has enough free storage before starting the download.',
    'bento.quality.cta': 'Check available options',
    'bento.quality.guide.label': 'Resolution guide',
    'bento.quality.guide.heading': 'Choose what’s available',
    'bento.quality.guide.badge': 'Source-dependent',
    'bento.quality.sd': 'Standard definition',
    'bento.quality.sd.note': 'May be available',
    'bento.quality.hd': 'HD / 1080p',
    'bento.quality.hd.note': 'When offered',
    'bento.quality.4k': '4K',
    'bento.quality.4k.note': 'Only if offered',
    'bento.quality.disclaimer':
      'Illustrative guide only — these bars do not represent measured performance or a promise of availability.',
    // ── Bento: Use on mobile or desktop ──────────────────────────
    'bento.devices.eyebrow': 'One familiar process',
    'bento.devices.title': 'Use MusicalDown on mobile or desktop',
    'bento.devices.paragraph':
      'Open the website in a current compatible browser and follow the same copy-link and paste-link workflow.',
    'bento.devices.iphone.title': 'iPhone',
    'bento.devices.iphone.desc': 'Check Safari’s downloads or the Files app.',
    'bento.devices.android.title': 'Android',
    'bento.devices.android.desc': 'Check your browser’s download list or Downloads folder.',
    'bento.devices.desktop.title': 'Desktop',
    'bento.devices.desktop.desc': 'Use your browser’s download manager or Downloads folder.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description':
      'Find quick answers to the most common questions about downloading TikTok videos and audio. Learn how our tool works, which formats are supported and how to fix common issues, so you can save your favorite content easily, safely and responsibly on any device.',
    'faq.question1': 'Is Musicallydown free?',
    'faq.answer1':
      'Yes. Downloading is free, the site is supported by ads and you do not need to register or install anything.',
    'faq.question2': 'How do I download a TikTok video without a watermark?',
    'faq.answer2':
      'Copy the link from TikTok Share menu, paste it into the box on this page, press Download and choose SD or HD (no watermark). No account or app is needed.',
    'faq.question3': 'How do I convert TikTok to MP3?',
    'faq.answer3':
      'Paste the TikTok link, press Download and choose Download Audio Only. The sound saves as an MP3 on iPhone, Android or PC.',
    'faq.question4': 'Can I save a TikTok as an MP4 file?',
    'faq.answer4':
      'Yes. The SD and HD options save the video as a regular MP4 that plays in any player on your phone or computer.',
    'faq.question5': 'Is there a TikTok to MP3 320 kbps option?',
    'faq.answer5':
      'No. We save audio the way TikTok stores it, so a 320 kbps label would not add real detail. Expect a normal listening-quality MP3.',
    'faq.question6': 'Can I download YouTube videos here?',
    'faq.answer6':
      'No. Musicallydown only accepts TikTok links. YouTube downloaders and converters are separate services.',
    'faq.question7': 'Why is my TikTok link not working?',
    'faq.answer7':
      'Most failures come from private or deleted videos or a link with extra text around it. Use a public video, copy only the link and try again.',
    'faq.question8': 'Is Musicallydown safe to use?',
    'faq.answer8':
      'You never enter your TikTok password or install anything. Only paste a video link, and do not share personal login details with any downloader. Read our Privacy Policy for how data is handled.',
    'faq.question9': 'Is it legal to download TikTok videos?',
    'faq.answer9':
      'It depends on what you do with the file. Saving your own videos or clips you have permission to use is generally fine; reposting others videos as your own is not. This is general information, not legal advice.',
    'faq.question10': 'Can I use a TikTok downloader on an iPhone? or Android?',
    'faq.answer10':
      'Yes. Musicallydown works in any browser on iPhone, Android or PC. No app is needed.',

    // Footer
    'footer.product': 'Tools',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
    'footer.documentation': 'Documentation',
    'footer.rssFeed': 'RSS Feed',
    'footer.license': 'License (MIT)',
    'footer.copyright': 'MusicalDown. All rights reserved.',
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
    'about.title': 'About MusicallyDown – Free TikTok Video & MP3 Downloader', // meta title
    'about.metaDescription':
      'Learn what Musicallydown is, how our free TikTok downloader works, what we do with your data, and how we encourage responsible, permission-based downloading.',
    'about.titleStart': 'About ',
    'about.titleHighlight': 'Musicallydown',

    'about.intro1':
      'Musicallydown is a free, browser-based tool that helps you save TikTok videos as MP4 files and extract the audio as MP3, when those formats are available. There is nothing to install and no account to create. You copy a video link, paste it into the box on our homepage and choose the file you want.',
    'about.intro2':
      'We built Musicallydown because saving a TikTok you made or a clip you have permission to keep, should not require an app, a login or a pile of pop-ups. Our goal is simple: a fast, clear tool that works on iPhone, Android and desktop browsers.',

    'about.doesTitle': 'What Musicallydown does',
    'about.does1.title': 'Downloads TikTok videos as MP4.',
    'about.does1.text':
      ' Where the source offers it, you can choose a clean version without the TikTok watermark in SD or HD.',
    'about.does2.title': 'Converts TikTok to MP3.',
    'about.does2.text': ' Extract the sound from a supported video and save it as an audio file.',
    'about.does3.title': 'Works in your browser.',
    'about.does3.text':
      ' Chrome, Safari, Firefox, Edge and other modern browsers on phones, tablets and computers.',
    'about.does4.title': 'Needs no sign-up.',
    'about.does4.text': ' We never ask for your TikTok username or password.',
    'about.does5.title': 'Speaks your language.',
    'about.does5.text':
      ' The site is available in English, <a href="/es">Spanish</a>, <a href="/id">Indonesian</a> and <a href="/vi">Vietnamese</a>, with more planned.',

    'about.howTitle': 'How it works',
    'about.how1': 'Open TikTok, find the video and tap Share, then Copy Link.',
    'about.how2': 'Paste the link into the Musicallydown box.',
    'about.how3': 'Choose an available format or quality.',
    'about.how4': 'Save the file to your device.',
    'about.howNote':
      'Results depend on the original video. Private, deleted, age-restricted or region-limited videos cannot be downloaded, and not every video offers every format. We save audio the way TikTok stores it, so we do not offer a 320 kbps option; a higher label would not add real quality.',

    'about.principlesTitle': 'Our principles',
    'about.principle1.title': 'Free and simple.',
    'about.principle1.text':
      ' The tool is free to use and supported by advertising. We keep the interface as uncluttered as we can.',
    'about.principle2.title': 'Privacy first.',
    'about.principle2.text':
      ' We do not ask you to register, and we do not need your TikTok credentials. Read our <a href="/privacy">Privacy Policy</a> for exactly what is processed.',
    'about.principle3.title': 'Respect for creators.',
    'about.principle3.text':
      'Videos and music on TikTok belong to their creators. Please download only your own content or content you have permission to save and do not repost other peoples work as your own. See our <a href="/privacy">Privacy Policy</a>.',
    'about.principle4.title': 'Honest expectations.',
    'about.principle4.text':
      ' TikTok changes often. When something stops working we would rather say so than overpromise. If a download fails, check the <a href="/faq">FAQ</a> or contact us.',

    'about.independentTitle': 'Independent service',
    'about.independentText':
      'Musicaldown is an independent tool. It is not affiliated with, endorsed by or sponsored by TikTok or ByteDance Ltd. TikTok is a trademark of its respective owner and is used only to describe the content our tool works with.',

    'about.contactTitle': 'Contact',
    'about.contactText':
      'Questions, bug reports, removal requests or business enquiries: <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>. We read every message and aim to reply within 2–3 business days.',

    // ───────────── Privacy Page ─────────────
    'privacy.metaTitle': 'Privacy Policy – Musicaldown',
    'privacy.metaDescription':
      'How Musicaldown handles TikTok links, device data, cookies and advertising. No account needed and no TikTok login requested.',
    'privacy.title': 'Privacy Policy',
    'privacy.effective': 'Effective date: October 20, 2026',
    'privacy.updated': 'Last updated: October 20, 2026',
    'privacy.intro':
      'This Privacy Policy explains what information Musicaldown (“we”, “us”, “our”) collects when you use Musicaldown.se and its language versions (the “Site”), how we use it and what choices you have. By using the Site you agree to this policy.',

    'privacy.s1.title': '1. Information we collect',
    'privacy.s1.provided.title': 'Information you provide.',
    'privacy.s1.provided.text':
      ' When you use the downloader you paste a TikTok video URL. We use that URL only to fetch the public video or audio information you asked for. You do not need to create an account, and we never ask for your TikTok username or password. If you contact us by email, we receive your email address and the contents of your message.',
    'privacy.s1.auto.title': 'Information collected automatically.',
    'privacy.s1.auto.text':
      ' Like most websites, our servers and service providers may collect technical data such as:',
    'privacy.s1.auto1': 'IP address and approximate location (country or region)',
    'privacy.s1.auto2': 'Browser type and version, device type and operating system',
    'privacy.s1.auto3':
      'Pages visited, referring page, date and time of visit and language settings',
    'privacy.s1.auto4': 'Error logs and performance data',
    'privacy.s1.cookies.title': 'Cookies and similar technologies.',
    'privacy.s1.cookies.text':
      ' We and our partners use cookies, local storage and similar technologies to remember your language choice, measure traffic and show advertising. See section 4.',

    'privacy.s2.title': '2. How we use information',
    'privacy.s2.item1': 'To provide the downloader and return the files you request',
    'privacy.s2.item2': 'To detect abuse, prevent automated misuse and keep the Site secure',
    'privacy.s2.item3':
      'To understand which pages and features are used, and to improve speed and reliability',
    'privacy.s2.item4': 'To show advertising that supports a free service',
    'privacy.s2.item5': 'To respond to messages and legal requests',
    'privacy.s2.item6': 'To comply with applicable law',
    'privacy.s2.note': 'We do not sell your personal information for money.',

    'privacy.s3.title': '3. Downloaded files and submitted links',
    'privacy.s3.text':
      'Video and audio files are delivered to your browser from the original source or through our processing service. We do not intentionally keep copies of the videos you download, and we do not build user profiles from the links you submit. Technical logs that include the submitted URL may be kept for a limited time for security and debugging, as described in section 7.',

    'privacy.s4.title': '4. Advertising and third-party services',
    'privacy.s4.p1':
      'The Site is supported by advertising. Advertising partners such as Google AdSense may use cookies and identifiers to show and measure ads, including personalised ads where permitted by law. These partners have their own privacy policies and we do not control their practices.',
    'privacy.s4.p2':
      'We may also use analytics tools such as Google Analytics and hosting and infrastructure providers such as Vercel and Cloudflare to run and measure the Site.',
    'privacy.s4.choicesIntro': 'You can manage advertising choices through:',
    'privacy.s4.choice1': 'Your browser settings, to block or delete cookies',
    'privacy.s4.choice2':
      'Google Ads Settings (<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>) to control personalised ads',
    'privacy.s4.choice3':
      'The Digital Advertising Alliance (<a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a>) and the Your Online Choices site (<a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a>) for EU users',
    'privacy.s4.note': 'Blocking cookies may affect how some parts of the Site work.',

    'privacy.s5.title': '5. Legal bases (EEA, UK and similar regions)',
    'privacy.s5.text':
      'Where data protection law such as the GDPR applies, we process personal data on these bases: our legitimate interests in operating, securing and improving the Site; your consent for non-essential cookies and personalised advertising, which you can withdraw at any time; and compliance with legal obligations.',

    'privacy.s6.title': '6. Sharing of information',
    'privacy.s6.text':
      'We share information only with service providers that help us run the Site (hosting, analytics, advertising, security), when required by law or to protect our rights and users, and in connection with a business transfer such as a merger or sale. These providers may process data only for the purposes described here.',

    'privacy.s7.title': '7. Data retention',
    'privacy.s7.text':
      'We keep technical logs for as long as needed for security and troubleshooting, generally no more than 90 days, unless a longer period is required by law. Emails you send us are kept as long as needed to handle your request. Third-party partners follow their own retention periods.',

    'privacy.s8.title': '8. International transfers',
    'privacy.s8.text':
      'Our providers may process data in countries other than your own, including the United States. Where required, we rely on appropriate safeguards for those transfers.',

    'privacy.s9.title': '9. Your rights',
    'privacy.s9.text':
      'Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal data, to object to processing, to withdraw consent and to complain to your local data protection authority. California residents may also have the right to know what is collected and to opt out of the “sale” or “sharing” of personal information for cross-context advertising. To make a request, email <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>. We may need to verify your identity first.',

    'privacy.s10.title': "10. Children's privacy",
    'privacy.s10.text':
      'The Site is not directed to children under 13 (or under 16 where local law requires). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.',

    'privacy.s11.title': '11. Security',
    'privacy.s11.text':
      'We use reasonable technical and organisational measures, including HTTPS, to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',

    'privacy.s12.title': '12. External links',
    'privacy.s12.text':
      'The Site may link to other websites. We are not responsible for their content or privacy practices.',

    'privacy.s13.title': '13. Changes to this policy',
    'privacy.s13.text':
      'We may update this policy from time to time. The “Last updated” date at the top shows the latest version. Continued use of the Site after changes means you accept the updated policy.',

    'privacy.s14.title': '14. Contact',
    'privacy.s14.name': 'Musicaldown',
    'privacy.s14.emailLabel': 'Email:',
    'privacy.s14.websiteLabel': 'Website:',

    // ───────────── Terms Page ─────────────
    'terms.metaTitle': 'Terms of Service – Musicaldown',
    'terms.metaDescription':
      "The rules for using Musicaldown's free TikTok video and MP3 downloader, including permitted use, copyright, disclaimers and liability.",
    'terms.title': 'Terms of Service',
    'terms.effective': 'Effective date: October 20, 2026',
    'terms.intro':
      'These Terms of Service (“Terms”) govern your use of Musicaldown.se and its language versions (the “Site”) and the TikTok downloader and related tools we provide (the “Service”). By using the Service you agree to these Terms. If you do not agree, please do not use it.',

    'terms.s1.title': '1. The Service',
    'terms.s1.text':
      'Musicaldown lets you submit a link to a public TikTok video and, where available, receive the video as an MP4 file or the audio as an MP3 file. The Service is provided free of charge and is supported by advertising. Availability, quality and formats depend on the original content and on third-party platforms, and may change or stop at any time.',

    'terms.s2.title': '2. Eligibility',
    'terms.s2.text':
      'You must be old enough to form a binding contract in your country, or have permission from a parent or guardian, and you must not be barred from using the Service under applicable law.',

    'terms.s3.title': '3. Permitted use',
    'terms.s3.intro': 'You may use the Service for personal, non-commercial purposes only to save:',
    'terms.s3.item1': 'content that you created and own, or',
    'terms.s3.item2': 'content that you have permission from the rights holder to download, or',
    'terms.s3.item3': 'content that you are otherwise legally allowed to save.',

    'terms.s4.title': '4. Prohibited use',
    'terms.s4.intro': 'You agree not to:',
    'terms.s4.item1':
      'Download, copy, republish or distribute content in a way that infringes copyright, trademark, privacy or other rights',
    'terms.s4.item2': "Repost another creator's content as your own or remove credit from it",
    'terms.s4.item3': 'Use the Service for any unlawful, harmful, harassing or deceptive purpose',
    'terms.s4.item4':
      'Download content depicting minors in a harmful way, or private content you are not authorised to access',
    'terms.s4.item5':
      'Use bots, scrapers or automated scripts to overload, test or abuse the Service, or attempt to bypass rate limits or security measures',
    'terms.s4.item6': 'Reverse engineer, resell or provide the Service to others as your own',
    'terms.s4.item7':
      'Interfere with ads, disrupt the Site or attempt to gain unauthorised access to our systems',

    'terms.s5.title': '5. Your responsibility for content',
    'terms.s5.text':
      "You are solely responsible for the content you download and how you use it. We do not host the videos on TikTok, we do not review them, and we do not verify that you have the right to download them. Saving content may also be restricted by TikTok's own terms of service, which you are responsible for reading.",

    'terms.s6.title': '6. No affiliation',
    'terms.s6.text':
      'Musicaldown is an independent service. It is not affiliated with, endorsed or sponsored by TikTok or ByteDance Ltd. All trademarks, logos and content belong to their respective owners.',

    'terms.s7.title': '7. Intellectual property',
    'terms.s7.text':
      "The Site's design, text, code and branding (excluding third-party content) belong to Musicaldown or its licensors and are protected by law. You may not copy or reuse them without permission. Content downloaded through the Service remains the property of its respective creators and rights holders.",

    'terms.s8.title': '8. Copyright complaints (DMCA)',
    'terms.s8.text':
      'We respect intellectual property rights. If you believe content processed through the Service infringes your copyright, email <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a> with: your name and contact details; a description of the copyrighted work; the URL of the material; a statement that you have a good-faith belief the use is unauthorised; and a statement, under penalty of perjury, that your notice is accurate and that you are the owner or authorised to act for the owner. We will review valid notices and take appropriate action, which may include blocking the specific link and restricting repeat infringers. Because we do not host the original videos, the original platform is the best place to request removal of the video itself.',

    'terms.s9.title': '9. Advertising and third-party links',
    'terms.s9.text':
      'The Site displays advertisements and may link to third-party websites. We are not responsible for third-party ads, sites, products or services, and your dealings with them are your own responsibility. Please be careful with downloads or offers that appear outside our tool.',

    'terms.s10.title': '10. Disclaimer of warranties',
    'terms.s10.text':
      'The Service is provided “as is” and “as available” without warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, non-infringement or uninterrupted or error-free operation. We do not guarantee that any video or audio will be available, that any specific quality or format will be offered, or that files will be free of errors.',

    'terms.s11.title': '11. Limitation of liability',
    'terms.s11.text':
      'To the fullest extent permitted by law, Musicaldown and its owners and affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, profits or goodwill, arising from your use of or inability to use the Service. Our total liability for any claim relating to the Service will not exceed USD 100. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.',

    'terms.s12.title': '12. Indemnification',
    'terms.s12.text':
      "You agree to indemnify and hold harmless Musicaldown and its owners from claims, losses and expenses (including reasonable legal fees) arising from your misuse of the Service, your violation of these Terms or your infringement of any third party's rights.",

    'terms.s13.title': '13. Suspension and termination',
    'terms.s13.text':
      'We may limit, suspend or block access to the Service at any time, without notice, for any reason, including suspected abuse or violation of these Terms.',

    'terms.s14.title': '14. Changes to the Service and Terms',
    'terms.s14.text':
      'We may modify or discontinue the Service and update these Terms at any time. The effective date above shows the latest version. Continued use after changes means you accept them.',

    'terms.s15.title': '15. Governing law',
    'terms.s15.text':
      'These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict-of-law rules. Disputes will be resolved in the courts of [city, jurisdiction], unless mandatory consumer law in your country says otherwise.',

    'terms.s16.title': '16. Contact',
    'terms.s16.text':
      'Questions about these Terms: <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>.',

    // Misc
    skipToContent: 'Skip to main content',
    lastUpdated: 'Last updated',
  },
  es: {
    'site.name': 'MusicallyDown',
    'site.title': 'MusicallyDown – Descargar TikTok Sin Marca de Agua y MP3',
    'site.description':
      'Descarga videos públicos de TikTok sin marca de agua cuando esté disponible. Guarda videos en MP4 o extrae audio en MP3 gratis, sin instalar aplicaciones.',
    'nav.home': 'Inicio',
    'nav.stories': 'Descargar historias de TikTok',
    'nav.mp3': 'Descargar TikTok en MP3',
    'nav.blog': 'Blog',
    'nav.how': 'Cómo usar',
    'nav.contact': 'Contacto',
    'nav.faq': 'Preguntas frecuentes',
    'hero.badge1': 'Sin marca de agua',
    'hero.badge2': 'Calidad HD',
    'hero.badge3': 'MP4 y MP3',
    'hero.badge4': 'Gratis, sin registro',
    'hero.titleStart': 'Descargador de videos de TikTok',
    'hero.titleHighlight': ' sin marca de agua',
    'hero.description':
      'Descarga videos públicos de TikTok y guarda MP4 o audio MP3 cuando esas opciones estén disponibles.',
    'section1.title': 'Descarga videos de TikTok en línea - ',
    'section1.highlight': 'sin marca de agua',
    'section1.paragraph':
      'MusicallyDown es una herramienta gratuita para guardar videos públicos de TikTok como MP4 cuando el formato está disponible. Funciona desde el navegador en móviles y computadoras.',
    'section1.paragraph2':
      'Pega un enlace compatible y revisa las opciones de video o audio que se ofrezcan para ese contenido.',
    'how.eyebrow': 'Tres pasos sencillos',
    'how.title': 'Cómo descargar videos de TikTok en HD',
    'how.step1.title': 'Copia el enlace del video',
    'how.step1.text':
      'Abre el video de TikTok, pulsa Compartir y selecciona Copiar enlace. Comprueba que el video sea accesible y que tengas permiso para guardarlo.',
    'how.step2.title': 'Pega el enlace en MusicallyDown',
    'how.step2.text':
      'Vuelve a esta página, pega la URL en el campo de MusicallyDown y envíala para procesarla.',
    'how.step3.title': 'Revisa y guarda',
    'how.step3.text':
      'Elige un formato disponible para tu enlace, sigue las instrucciones de descarga y revisa la carpeta de descargas de tu dispositivo.',
    'faq.title': 'Preguntas frecuentes',
    'footer.product': 'Herramientas',
    'footer.resources': 'Recursos',
    'footer.company': 'Información',
    'footer.privacyPolicy': 'Política de privacidad',
    'footer.termsOfService': 'Términos del servicio',
    'footer.documentation': 'Guía de uso',
    'footer.rssFeed': 'RSS',
    'footer.license': 'Aviso legal',
    skipToContent: 'Saltar al contenido principal',
    lastUpdated: 'Última actualización',

    // Complete locale key coverage; untranslated legal-page strings use English fallback text.
    'bento.title': 'Todo lo que obtienes con Musical Down ',
    'bento.highlight': 'Descargador de videos de TikTok',
    'bento.paragraph':
      'MusicallyDown es una herramienta rápida para guardar videos públicos de TikTok en formato MP4 cuando está disponible.',
    'bento.paragraph1':
      'Busca MusicallyDown, Musically Down o musicallydown para usar una herramienta gratuita y sencilla: copia el enlace, pégalo y guarda el archivo. También puedes extraer audio como MP3 cuando esté disponible.',
    'bento.quality.4k': '4K',
    'bento.devices.iphone.title': 'iPhone',
    'bento.devices.android.title': 'Android',
    'bento.devices.desktop.title': 'Desktop',
    'faq.question1': '¿MusicallyDown es gratis?',
    'faq.answer1':
      'Sí. La descarga es gratuita, el sitio se financia con anuncios y no necesitas registrarte ni instalar nada.',
    'faq.question2': '¿Cómo descargo un video de TikTok sin marca de agua?',
    'faq.answer2':
      'Copia el enlace desde el menú Compartir de TikTok, pégalo aquí, pulsa Descargar y elige una opción sin marca de agua si está disponible.',
    'faq.question3': '¿Cómo convierto TikTok a MP3?',
    'faq.answer3':
      'Pega el enlace de TikTok, pulsa Descargar y selecciona la opción de audio si está disponible.',
    'faq.question4': '¿Puedo guardar un TikTok como archivo MP4?',
    'faq.answer4':
      'Sí. Si se ofrece la opción de video, puedes guardarlo como MP4 compatible con muchos teléfonos y computadoras.',
    'faq.question5': '¿Hay una opción TikTok a MP3 de 320 kbps?',
    'faq.answer5':
      'No. Guardamos el audio según lo proporciona TikTok; indicar 320 kbps no añadiría calidad real.',
    'faq.question6': '¿Puedo descargar videos de YouTube aquí?',
    'faq.answer6':
      'No. MusicallyDown procesa enlaces de TikTok; los servicios para YouTube son independientes.',
    'faq.question7': '¿Por qué no funciona mi enlace de TikTok?',
    'faq.answer7':
      'Puede que el video sea privado, se haya eliminado o que el enlace incluya texto adicional. Prueba con un video público y copia solo el enlace.',
    'faq.question8': '¿Es seguro usar MusicallyDown?',
    'faq.answer8':
      'No compartas tu contraseña de TikTok. Envía únicamente el enlace público que deseas procesar y evita anuncios o páginas externas sospechosas.',
    'faq.question9': '¿Necesito instalar una aplicación?',
    'faq.answer9':
      'No. Puedes usar el sitio desde un navegador compatible en tu teléfono o computadora.',
    'faq.question10': '¿Puedo descargar cualquier video de TikTok?',
    'faq.answer10':
      'No siempre. Los videos privados, eliminados o restringidos pueden no estar disponibles. Descarga contenido propio o que tengas permiso para guardar.',
    'footer.copyright': 'MusicalDown. Todos los derechos reservados.',
    'footer.builtWith': 'Built with',
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
    'about.title': 'About Musicallydown – Free TikTok Video Downloader',
    'about.metaDescription':
      'Learn what Musicallydown is, how our free TikTok downloader works, what we do with your data, and how we encourage responsible, permission-based downloading.',
    'about.titleStart': 'About ',
    'about.titleHighlight': 'Musicallydown',
    'about.intro1':
      'Musicallydown is a free, browser-based tool that helps you save TikTok videos as MP4 files and extract the audio as MP3, when those formats are available. There is nothing to install and no account to create. You copy a video link, paste it into the box on our homepage and choose the file you want.',
    'about.intro2':
      'We built Musicallydown because saving a TikTok you made or a clip you have permission to keep, should not require an app, a login or a pile of pop-ups. Our goal is simple: a fast, clear tool that works on iPhone, Android and desktop browsers.',
    'about.doesTitle': 'What Musicallydown does',
    'about.does1.title': 'Downloads TikTok videos as MP4.',
    'about.does1.text':
      ' Where the source offers it, you can choose a clean version without the TikTok watermark in SD or HD.',
    'about.does2.title': 'Converts TikTok to MP3.',
    'about.does2.text': ' Extract the sound from a supported video and save it as an audio file.',
    'about.does3.title': 'Works in your browser.',
    'about.does3.text':
      ' Chrome, Safari, Firefox, Edge and other modern browsers on phones, tablets and computers.',
    'about.does4.title': 'Needs no sign-up.',
    'about.does4.text': ' We never ask for your TikTok username or password.',
    'about.does5.title': 'Speaks your language.',
    'about.does5.text':
      ' The site is available in English, <a href="/es">Spanish</a>, <a href="/id">Indonesian</a> and <a href="/vi">Vietnamese</a>, with more planned.',
    'about.howTitle': 'How it works',
    'about.how1': 'Open TikTok, find the video and tap Share, then Copy Link.',
    'about.how2': 'Paste the link into the Musicallydown box.',
    'about.how3': 'Choose an available format or quality.',
    'about.how4': 'Save the file to your device.',
    'about.howNote':
      'Results depend on the original video. Private, deleted, age-restricted or region-limited videos cannot be downloaded, and not every video offers every format. We save audio the way TikTok stores it, so we do not offer a 320 kbps option; a higher label would not add real quality.',
    'about.principlesTitle': 'Our principles',
    'about.principle1.title': 'Free and simple.',
    'about.principle1.text':
      ' The tool is free to use and supported by advertising. We keep the interface as uncluttered as we can.',
    'about.principle2.title': 'Privacy first.',
    'about.principle2.text':
      ' We do not ask you to register, and we do not need your TikTok credentials. Read our <a href="/privacy">Privacy Policy</a> for exactly what is processed.',
    'about.principle3.title': 'Respect for creators.',
    'about.principle3.text':
      'Videos and music on TikTok belong to their creators. Please download only your own content or content you have permission to save and do not repost other peoples work as your own. See our <a href="/privacy">Privacy Policy</a>.',
    'about.principle4.title': 'Honest expectations.',
    'about.principle4.text':
      ' TikTok changes often. When something stops working we would rather say so than overpromise. If a download fails, check the <a href="/faq">FAQ</a> or contact us.',
    'about.independentTitle': 'Independent service',
    'about.independentText':
      'Musicaldown is an independent tool. It is not affiliated with, endorsed by or sponsored by TikTok or ByteDance Ltd. TikTok is a trademark of its respective owner and is used only to describe the content our tool works with.',
    'about.contactTitle': 'Contact',
    'about.contactText':
      'Questions, bug reports, removal requests or business enquiries: <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>. We read every message and aim to reply within 2–3 business days.',
    'privacy.metaTitle': 'Privacy Policy – Musicaldown',
    'privacy.metaDescription':
      'How Musicaldown handles TikTok links, device data, cookies and advertising. No account needed and no TikTok login requested.',
    'privacy.title': 'Privacy Policy',
    'privacy.effective': 'Effective date: October 20, 2026',
    'privacy.updated': 'Last updated: October 20, 2026',
    'privacy.intro':
      'This Privacy Policy explains what information Musicaldown (“we”, “us”, “our”) collects when you use Musicaldown.se and its language versions (the “Site”), how we use it and what choices you have. By using the Site you agree to this policy.',
    'privacy.s1.title': '1. Information we collect',
    'privacy.s1.provided.title': 'Information you provide.',
    'privacy.s1.provided.text':
      ' When you use the downloader you paste a TikTok video URL. We use that URL only to fetch the public video or audio information you asked for. You do not need to create an account, and we never ask for your TikTok username or password. If you contact us by email, we receive your email address and the contents of your message.',
    'privacy.s1.auto.title': 'Information collected automatically.',
    'privacy.s1.auto.text':
      ' Like most websites, our servers and service providers may collect technical data such as:',
    'privacy.s1.auto1': 'IP address and approximate location (country or region)',
    'privacy.s1.auto2': 'Browser type and version, device type and operating system',
    'privacy.s1.auto3':
      'Pages visited, referring page, date and time of visit and language settings',
    'privacy.s1.auto4': 'Error logs and performance data',
    'privacy.s1.cookies.title': 'Cookies and similar technologies.',
    'privacy.s1.cookies.text':
      ' We and our partners use cookies, local storage and similar technologies to remember your language choice, measure traffic and show advertising. See section 4.',
    'privacy.s2.title': '2. How we use information',
    'privacy.s2.item1': 'To provide the downloader and return the files you request',
    'privacy.s2.item2': 'To detect abuse, prevent automated misuse and keep the Site secure',
    'privacy.s2.item3':
      'To understand which pages and features are used, and to improve speed and reliability',
    'privacy.s2.item4': 'To show advertising that supports a free service',
    'privacy.s2.item5': 'To respond to messages and legal requests',
    'privacy.s2.item6': 'To comply with applicable law',
    'privacy.s2.note': 'We do not sell your personal information for money.',
    'privacy.s3.title': '3. Downloaded files and submitted links',
    'privacy.s3.text':
      'Video and audio files are delivered to your browser from the original source or through our processing service. We do not intentionally keep copies of the videos you download, and we do not build user profiles from the links you submit. Technical logs that include the submitted URL may be kept for a limited time for security and debugging, as described in section 7.',
    'privacy.s4.title': '4. Advertising and third-party services',
    'privacy.s4.p1':
      'The Site is supported by advertising. Advertising partners such as Google AdSense may use cookies and identifiers to show and measure ads, including personalised ads where permitted by law. These partners have their own privacy policies and we do not control their practices.',
    'privacy.s4.p2':
      'We may also use analytics tools such as Google Analytics and hosting and infrastructure providers such as Vercel and Cloudflare to run and measure the Site.',
    'privacy.s4.choicesIntro': 'You can manage advertising choices through:',
    'privacy.s4.choice1': 'Your browser settings, to block or delete cookies',
    'privacy.s4.choice2':
      'Google Ads Settings (<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>) to control personalised ads',
    'privacy.s4.choice3':
      'The Digital Advertising Alliance (<a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a>) and the Your Online Choices site (<a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a>) for EU users',
    'privacy.s4.note': 'Blocking cookies may affect how some parts of the Site work.',
    'privacy.s5.title': '5. Legal bases (EEA, UK and similar regions)',
    'privacy.s5.text':
      'Where data protection law such as the GDPR applies, we process personal data on these bases: our legitimate interests in operating, securing and improving the Site; your consent for non-essential cookies and personalised advertising, which you can withdraw at any time; and compliance with legal obligations.',
    'privacy.s6.title': '6. Sharing of information',
    'privacy.s6.text':
      'We share information only with service providers that help us run the Site (hosting, analytics, advertising, security), when required by law or to protect our rights and users, and in connection with a business transfer such as a merger or sale. These providers may process data only for the purposes described here.',
    'privacy.s7.title': '7. Data retention',
    'privacy.s7.text':
      'We keep technical logs for as long as needed for security and troubleshooting, generally no more than 90 days, unless a longer period is required by law. Emails you send us are kept as long as needed to handle your request. Third-party partners follow their own retention periods.',
    'privacy.s8.title': '8. International transfers',
    'privacy.s8.text':
      'Our providers may process data in countries other than your own, including the United States. Where required, we rely on appropriate safeguards for those transfers.',
    'privacy.s9.title': '9. Your rights',
    'privacy.s9.text':
      'Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal data, to object to processing, to withdraw consent and to complain to your local data protection authority. California residents may also have the right to know what is collected and to opt out of the “sale” or “sharing” of personal information for cross-context advertising. To make a request, email <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>. We may need to verify your identity first.',
    'privacy.s10.title': "10. Children's privacy",
    'privacy.s10.text':
      'The Site is not directed to children under 13 (or under 16 where local law requires). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.',
    'privacy.s11.title': '11. Security',
    'privacy.s11.text':
      'We use reasonable technical and organisational measures, including HTTPS, to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    'privacy.s12.title': '12. External links',
    'privacy.s12.text':
      'The Site may link to other websites. We are not responsible for their content or privacy practices.',
    'privacy.s13.title': '13. Changes to this policy',
    'privacy.s13.text':
      'We may update this policy from time to time. The “Last updated” date at the top shows the latest version. Continued use of the Site after changes means you accept the updated policy.',
    'privacy.s14.title': '14. Contact',
    'privacy.s14.name': 'Musicaldown',
    'privacy.s14.emailLabel': 'Email:',
    'privacy.s14.websiteLabel': 'Website:',
    'terms.metaTitle': 'Terms of Service – Musicaldown',
    'terms.metaDescription':
      "The rules for using Musicaldown's free TikTok video and MP3 downloader, including permitted use, copyright, disclaimers and liability.",
    'terms.title': 'Terms of Service',
    'terms.effective': 'Effective date: October 20, 2026',
    'terms.intro':
      'These Terms of Service (“Terms”) govern your use of Musicaldown.se and its language versions (the “Site”) and the TikTok downloader and related tools we provide (the “Service”). By using the Service you agree to these Terms. If you do not agree, please do not use it.',
    'terms.s1.title': '1. The Service',
    'terms.s1.text':
      'Musicaldown lets you submit a link to a public TikTok video and, where available, receive the video as an MP4 file or the audio as an MP3 file. The Service is provided free of charge and is supported by advertising. Availability, quality and formats depend on the original content and on third-party platforms, and may change or stop at any time.',
    'terms.s2.title': '2. Eligibility',
    'terms.s2.text':
      'You must be old enough to form a binding contract in your country, or have permission from a parent or guardian, and you must not be barred from using the Service under applicable law.',
    'terms.s3.title': '3. Permitted use',
    'terms.s3.intro': 'You may use the Service for personal, non-commercial purposes only to save:',
    'terms.s3.item1': 'content that you created and own, or',
    'terms.s3.item2': 'content that you have permission from the rights holder to download, or',
    'terms.s3.item3': 'content that you are otherwise legally allowed to save.',
    'terms.s4.title': '4. Prohibited use',
    'terms.s4.intro': 'You agree not to:',
    'terms.s4.item1':
      'Download, copy, republish or distribute content in a way that infringes copyright, trademark, privacy or other rights',
    'terms.s4.item2': "Repost another creator's content as your own or remove credit from it",
    'terms.s4.item3': 'Use the Service for any unlawful, harmful, harassing or deceptive purpose',
    'terms.s4.item4':
      'Download content depicting minors in a harmful way, or private content you are not authorised to access',
    'terms.s4.item5':
      'Use bots, scrapers or automated scripts to overload, test or abuse the Service, or attempt to bypass rate limits or security measures',
    'terms.s4.item6': 'Reverse engineer, resell or provide the Service to others as your own',
    'terms.s4.item7':
      'Interfere with ads, disrupt the Site or attempt to gain unauthorised access to our systems',
    'terms.s5.title': '5. Your responsibility for content',
    'terms.s5.text':
      "You are solely responsible for the content you download and how you use it. We do not host the videos on TikTok, we do not review them, and we do not verify that you have the right to download them. Saving content may also be restricted by TikTok's own terms of service, which you are responsible for reading.",
    'terms.s6.title': '6. No affiliation',
    'terms.s6.text':
      'Musicaldown is an independent service. It is not affiliated with, endorsed or sponsored by TikTok or ByteDance Ltd. All trademarks, logos and content belong to their respective owners.',
    'terms.s7.title': '7. Intellectual property',
    'terms.s7.text':
      "The Site's design, text, code and branding (excluding third-party content) belong to Musicaldown or its licensors and are protected by law. You may not copy or reuse them without permission. Content downloaded through the Service remains the property of its respective creators and rights holders.",
    'terms.s8.title': '8. Copyright complaints (DMCA)',
    'terms.s8.text':
      'We respect intellectual property rights. If you believe content processed through the Service infringes your copyright, email <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a> with: your name and contact details; a description of the copyrighted work; the URL of the material; a statement that you have a good-faith belief the use is unauthorised; and a statement, under penalty of perjury, that your notice is accurate and that you are the owner or authorised to act for the owner. We will review valid notices and take appropriate action, which may include blocking the specific link and restricting repeat infringers. Because we do not host the original videos, the original platform is the best place to request removal of the video itself.',
    'terms.s9.title': '9. Advertising and third-party links',
    'terms.s9.text':
      'The Site displays advertisements and may link to third-party websites. We are not responsible for third-party ads, sites, products or services, and your dealings with them are your own responsibility. Please be careful with downloads or offers that appear outside our tool.',
    'terms.s10.title': '10. Disclaimer of warranties',
    'terms.s10.text':
      'The Service is provided “as is” and “as available” without warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, non-infringement or uninterrupted or error-free operation. We do not guarantee that any video or audio will be available, that any specific quality or format will be offered, or that files will be free of errors.',
    'terms.s11.title': '11. Limitation of liability',
    'terms.s11.text':
      'To the fullest extent permitted by law, Musicaldown and its owners and affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, profits or goodwill, arising from your use of or inability to use the Service. Our total liability for any claim relating to the Service will not exceed USD 100. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.',
    'terms.s12.title': '12. Indemnification',
    'terms.s12.text':
      "You agree to indemnify and hold harmless Musicaldown and its owners from claims, losses and expenses (including reasonable legal fees) arising from your misuse of the Service, your violation of these Terms or your infringement of any third party's rights.",
    'terms.s13.title': '13. Suspension and termination',
    'terms.s13.text':
      'We may limit, suspend or block access to the Service at any time, without notice, for any reason, including suspected abuse or violation of these Terms.',
    'terms.s14.title': '14. Changes to the Service and Terms',
    'terms.s14.text':
      'We may modify or discontinue the Service and update these Terms at any time. The effective date above shows the latest version. Continued use after changes means you accept them.',
    'terms.s15.title': '15. Governing law',
    'terms.s15.text':
      'These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict-of-law rules. Disputes will be resolved in the courts of [city, jurisdiction], unless mandatory consumer law in your country says otherwise.',
    'terms.s16.title': '16. Contact',
    'terms.s16.text':
      'Questions about these Terms: <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>.',
    'highlights.ariaLabel': 'Ventajas del servicio',
    'highlights.item1.title': 'En el navegador',
    'highlights.item1.text': 'Sin aplicación dedicada',
    'highlights.item2.title': 'Formatos de video',
    'highlights.item2.text': 'Las opciones dependen del enlace',
    'highlights.item3.title': 'Opciones de audio',
    'highlights.item3.text': 'Cuando estén disponibles',
    'highlights.item4.title': 'Proceso sencillo',
    'highlights.item4.text': 'Copiar, pegar y revisar',
    'how.description':
      'Descarga un video de TikTok en tres pasos: pega el enlace y elige MP4 para guardar el video o MP3 para extraer el audio, según las opciones disponibles.',
    'features.eyebrow': 'Diseñado para tu flujo de trabajo',
    'features.title': 'Un descargador práctico de videos de TikTok',
    'features.description':
      'Elige la opción adecuada sin dar por hecho que todos los videos admiten todos los formatos o resoluciones.',
    'features.item1.title': 'Descargador TikTok HD',
    'features.item1.text':
      'Comprueba las resoluciones disponibles para el enlace. HD, 1080p y 4K no están garantizados para todos los videos.',
    'features.item2.title': 'Opciones de video MP4',
    'features.item2.text':
      'Cuando esté disponible, MP4 ofrece un formato compatible con muchos teléfonos, tabletas y computadoras.',
    'features.item3.title': 'Descargador de audio TikTok',
    'features.item3.text':
      'Si se admite la extracción de audio, revisa las opciones de audio o MP3 antes de guardar.',
    'features.item4.title': 'Opciones sin marca de agua',
    'features.item4.text':
      'Comprueba si hay una versión sin marca de agua. La disponibilidad depende del video y del servicio.',
    'features.item5.title': 'Funciona en el navegador',
    'features.item5.text':
      'Abre el sitio en un navegador compatible en iPhone, Android, Windows o Mac.',
    'features.item6.title': 'No necesitas contraseña',
    'features.item6.text':
      'Nunca compartas tus credenciales de TikTok con un descargador. Usa solo el enlace público que quieras procesar.',
    'intro.paragraph1':
      'MusicallyDown es un descargador de videos de TikTok en línea para quienes quieren guardar un video sin pasos innecesarios. El nombre recuerda a Musical.ly, que más tarde se integró en TikTok; por eso algunas personas buscan «musically download online» o «musical down». Copia un enlace público de TikTok y guarda el archivo en tu dispositivo.',
    'intro.paragraph2':
      'La página es ligera para cargar rápidamente incluso con una conexión móvil lenta.',
    'bento.quality.eyebrow': 'Qué puedes esperar de MusicallyDown',
    'bento.quality.title': 'Descargador TikTok HD: guarda videos hasta 4K',
    'bento.quality.p1':
      'La calidad depende del video original y de los formatos que devuelva el descargador. Elige una resolución solo si aparece disponible; una herramienta no puede crear detalles que no existen en la fuente.',
    'bento.quality.p2':
      'Para archivos grandes, usa una conexión estable y comprueba que tienes suficiente espacio libre.',
    'bento.quality.cta': 'Ver opciones disponibles',
    'bento.quality.guide.label': 'Guía de resolución',
    'bento.quality.guide.heading': 'Elige una opción disponible',
    'bento.quality.guide.badge': 'Depende de la fuente',
    'bento.quality.sd': 'Definición estándar',
    'bento.quality.sd.note': 'Puede estar disponible',
    'bento.quality.hd': 'HD / 1080p',
    'bento.quality.hd.note': 'Cuando se ofrezca',
    'bento.quality.4k.note': 'Solo si se ofrece',
    'bento.quality.disclaimer':
      'Guía ilustrativa: las barras no representan mediciones ni garantizan disponibilidad.',
    'bento.devices.eyebrow': 'Un proceso familiar',
    'bento.devices.title': 'Usa MusicalDown en móvil o computadora',
    'bento.devices.paragraph':
      'Abre el sitio en un navegador compatible y sigue el mismo proceso de copiar y pegar el enlace.',
    'bento.devices.iphone.desc': 'Revisa las descargas de Safari o la app Archivos.',
    'bento.devices.android.desc': 'Revisa las descargas del navegador o la carpeta Descargas.',
    'bento.devices.desktop.desc':
      'Usa el gestor de descargas del navegador o la carpeta Descargas.',
    'faq.description':
      'Respuestas rápidas sobre cómo descargar videos y audio de TikTok, los formatos compatibles y la solución de problemas comunes.',

    'hero.subtitle':
      'También puedes buscar MusicallyDown, Musically Down o Musical Down. Estás en el lugar correcto.',
  },
  id: {
    'site.name': 'MusicallyDown',
    'site.title': 'MusicallyDown – Unduh Video TikTok Tanpa Watermark & MP3',
    'site.description':
      'Unduh video TikTok publik tanpa watermark jika tersedia. Simpan video sebagai MP4 atau ekstrak audio MP3 secara gratis melalui browser tanpa memasang aplikasi.',
    'nav.home': 'Beranda',
    'nav.stories': 'Unduh TikTok Stories',
    'nav.mp3': 'Unduh TikTok ke MP3',
    'nav.blog': 'Blog',
    'nav.how': 'Cara Menggunakan',
    'nav.contact': 'Kontak',
    'nav.faq': 'FAQ',
    'hero.badge1': 'Tanpa Watermark',
    'hero.badge2': 'Kualitas HD',
    'hero.badge3': 'MP4 & MP3',
    'hero.badge4': 'Gratis, Tanpa Daftar',
    'hero.titleStart': 'Pengunduh Video TikTok',
    'hero.titleHighlight': ' Tanpa Watermark',
    'hero.description': 'Unduh video TikTok dan simpan sebagai MP4 atau audio MP3 jika tersedia.',
    'section1.title': 'Unduh Video TikTok Online - ',
    'section1.highlight': 'Tanpa Watermark',
    'section1.paragraph':
      'MusicallyDown adalah alat gratis berbasis browser untuk menyimpan video TikTok publik sebagai MP4 jika format tersebut tersedia. Gunakan di ponsel atau komputer tanpa memasang aplikasi.',
    'section1.paragraph2':
      'Tempel tautan yang didukung lalu periksa pilihan video atau audio yang tersedia untuk konten tersebut.',
    'how.eyebrow': 'Tiga langkah mudah',
    'how.title': 'Cara mengunduh video TikTok',
    'how.step1.title': 'Salin tautan video',
    'how.step1.text':
      'Buka video TikTok, pilih Bagikan, lalu Salin tautan. Pastikan video dapat diakses dan Anda memiliki izin untuk menyimpannya.',
    'how.step2.title': 'Tempel tautan di MusicallyDown',
    'how.step2.text':
      'Kembali ke halaman ini, tempel URL pada kolom MusicallyDown, lalu kirim untuk diproses.',
    'how.step3.title': 'Periksa dan simpan',
    'how.step3.text':
      'Pilih format yang tersedia untuk tautan Anda, ikuti petunjuk unduhan, lalu periksa folder unduhan perangkat.',
    'faq.title': 'Pertanyaan yang Sering Diajukan',
    'footer.product': 'Produk',
    'footer.resources': 'Sumber Daya',
    'footer.company': 'Informasi',
    'footer.privacyPolicy': 'Kebijakan Privasi',
    'footer.termsOfService': 'Ketentuan Layanan',
    'footer.documentation': 'Panduan Penggunaan',
    'footer.rssFeed': 'RSS',
    'footer.license': 'Informasi Hukum',
    skipToContent: 'Lewati ke konten utama',
    lastUpdated: 'Terakhir diperbarui',

    // Complete locale key coverage; untranslated legal-page strings use English fallback text.
    'bento.title': 'Semua yang Anda dapatkan dengan Musical Down ',
    'bento.highlight': 'Pengunduh Video TikTok',
    'bento.paragraph':
      'MusicallyDown adalah alat praktis untuk menyimpan video TikTok publik sebagai MP4 jika format tersedia.',
    'bento.paragraph1':
      'Cari MusicallyDown, Musically Down, atau musicallydown untuk menggunakan alat gratis yang mudah: salin tautan, tempel, lalu simpan file. Audio juga dapat diekstrak sebagai MP3 jika tersedia.',
    'bento.quality.4k': '4K',
    'bento.devices.iphone.title': 'iPhone',
    'bento.devices.android.title': 'Android',
    'bento.devices.desktop.title': 'Desktop',
    'faq.question1': 'Apakah MusicallyDown gratis?',
    'faq.answer1':
      'Ya. Pengunduhan gratis, situs didukung iklan, dan Anda tidak perlu mendaftar atau memasang aplikasi.',
    'faq.question2': 'Bagaimana cara mengunduh video TikTok tanpa watermark?',
    'faq.answer2':
      'Salin tautan dari menu Bagikan TikTok, tempel di sini, tekan Unduh, lalu pilih opsi tanpa watermark jika tersedia.',
    'faq.question3': 'Bagaimana cara mengubah TikTok menjadi MP3?',
    'faq.answer3': 'Tempel tautan TikTok, tekan Unduh, lalu pilih opsi audio jika tersedia.',
    'faq.question4': 'Bisakah saya menyimpan TikTok sebagai file MP4?',
    'faq.answer4':
      'Bisa. Jika opsi video tersedia, Anda dapat menyimpannya sebagai MP4 yang kompatibel dengan banyak ponsel dan komputer.',
    'faq.question5': 'Apakah tersedia TikTok ke MP3 320 kbps?',
    'faq.answer5':
      'Tidak. Audio disimpan sesuai sumber TikTok; label 320 kbps tidak akan menambah kualitas sebenarnya.',
    'faq.question6': 'Bisakah saya mengunduh video YouTube di sini?',
    'faq.answer6': 'Tidak. MusicallyDown memproses tautan TikTok; layanan untuk YouTube terpisah.',
    'faq.question7': 'Mengapa tautan TikTok saya tidak berfungsi?',
    'faq.answer7':
      'Video mungkin bersifat privat, telah dihapus, atau tautan berisi teks tambahan. Coba video publik dan salin tautannya saja.',
    'faq.question8': 'Apakah MusicallyDown aman digunakan?',
    'faq.answer8':
      'Jangan bagikan kata sandi TikTok. Kirim hanya tautan publik yang ingin diproses dan hindari iklan atau situs eksternal yang mencurigakan.',
    'faq.question9': 'Apakah saya perlu memasang aplikasi?',
    'faq.answer9': 'Tidak. Gunakan situs melalui browser yang kompatibel di ponsel atau komputer.',
    'faq.question10': 'Bisakah saya mengunduh semua video TikTok?',
    'faq.answer10':
      'Tidak selalu. Video privat, dihapus, atau dibatasi mungkin tidak tersedia. Unduh konten milik Anda atau yang boleh Anda simpan.',
    'footer.copyright': 'MusicalDown. Hak cipta dilindungi.',
    'footer.builtWith': 'Built with',
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
    'about.title': 'About Musicallydown – Free TikTok Video & MP3 Downloader',
    'about.metaDescription':
      'Learn what Musicallydown is, how our free TikTok downloader works, what we do with your data, and how we encourage responsible, permission-based downloading.',
    'about.titleStart': 'About ',
    'about.titleHighlight': 'Musicallydown',
    'about.intro1':
      'Musicallydown is a free, browser-based tool that helps you save TikTok videos as MP4 files and extract the audio as MP3, when those formats are available. There is nothing to install and no account to create. You copy a video link, paste it into the box on our homepage and choose the file you want.',
    'about.intro2':
      'We built Musicallydown because saving a TikTok you made or a clip you have permission to keep, should not require an app, a login or a pile of pop-ups. Our goal is simple: a fast, clear tool that works on iPhone, Android and desktop browsers.',
    'about.doesTitle': 'What Musicallydown does',
    'about.does1.title': 'Downloads TikTok videos as MP4.',
    'about.does1.text':
      ' Where the source offers it, you can choose a clean version without the TikTok watermark in SD or HD.',
    'about.does2.title': 'Converts TikTok to MP3.',
    'about.does2.text': ' Extract the sound from a supported video and save it as an audio file.',
    'about.does3.title': 'Works in your browser.',
    'about.does3.text':
      ' Chrome, Safari, Firefox, Edge and other modern browsers on phones, tablets and computers.',
    'about.does4.title': 'Needs no sign-up.',
    'about.does4.text': ' We never ask for your TikTok username or password.',
    'about.does5.title': 'Speaks your language.',
    'about.does5.text':
      ' The site is available in English, <a href="/es">Spanish</a>, <a href="/id">Indonesian</a> and <a href="/vi">Vietnamese</a>, with more planned.',
    'about.howTitle': 'How it works',
    'about.how1': 'Open TikTok, find the video and tap Share, then Copy Link.',
    'about.how2': 'Paste the link into the Musicallydown box.',
    'about.how3': 'Choose an available format or quality.',
    'about.how4': 'Save the file to your device.',
    'about.howNote':
      'Results depend on the original video. Private, deleted, age-restricted or region-limited videos cannot be downloaded, and not every video offers every format. We save audio the way TikTok stores it, so we do not offer a 320 kbps option; a higher label would not add real quality.',
    'about.principlesTitle': 'Our principles',
    'about.principle1.title': 'Free and simple.',
    'about.principle1.text':
      ' The tool is free to use and supported by advertising. We keep the interface as uncluttered as we can.',
    'about.principle2.title': 'Privacy first.',
    'about.principle2.text':
      ' We do not ask you to register, and we do not need your TikTok credentials. Read our <a href="/privacy">Privacy Policy</a> for exactly what is processed.',
    'about.principle3.title': 'Respect for creators.',
    'about.principle3.text':
      'Videos and music on TikTok belong to their creators. Please download only your own content or content you have permission to save and do not repost other peoples work as your own. See our <a href="/privacy">Privacy Policy</a>.',
    'about.principle4.title': 'Honest expectations.',
    'about.principle4.text':
      ' TikTok changes often. When something stops working we would rather say so than overpromise. If a download fails, check the <a href="/faq">FAQ</a> or contact us.',
    'about.independentTitle': 'Independent service',
    'about.independentText':
      'Musicaldown is an independent tool. It is not affiliated with, endorsed by or sponsored by TikTok or ByteDance Ltd. TikTok is a trademark of its respective owner and is used only to describe the content our tool works with.',
    'about.contactTitle': 'Contact',
    'about.contactText':
      'Questions, bug reports, removal requests or business enquiries: <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>. We read every message and aim to reply within 2–3 business days.',
    'privacy.metaTitle': 'Privacy Policy – Musicaldown',
    'privacy.metaDescription':
      'How Musicaldown handles TikTok links, device data, cookies and advertising. No account needed and no TikTok login requested.',
    'privacy.title': 'Privacy Policy',
    'privacy.effective': 'Effective date: October 20, 2026',
    'privacy.updated': 'Last updated: October 20, 2026',
    'privacy.intro':
      'This Privacy Policy explains what information Musicaldown (“we”, “us”, “our”) collects when you use Musicaldown.se and its language versions (the “Site”), how we use it and what choices you have. By using the Site you agree to this policy.',
    'privacy.s1.title': '1. Information we collect',
    'privacy.s1.provided.title': 'Information you provide.',
    'privacy.s1.provided.text':
      ' When you use the downloader you paste a TikTok video URL. We use that URL only to fetch the public video or audio information you asked for. You do not need to create an account, and we never ask for your TikTok username or password. If you contact us by email, we receive your email address and the contents of your message.',
    'privacy.s1.auto.title': 'Information collected automatically.',
    'privacy.s1.auto.text':
      ' Like most websites, our servers and service providers may collect technical data such as:',
    'privacy.s1.auto1': 'IP address and approximate location (country or region)',
    'privacy.s1.auto2': 'Browser type and version, device type and operating system',
    'privacy.s1.auto3':
      'Pages visited, referring page, date and time of visit and language settings',
    'privacy.s1.auto4': 'Error logs and performance data',
    'privacy.s1.cookies.title': 'Cookies and similar technologies.',
    'privacy.s1.cookies.text':
      ' We and our partners use cookies, local storage and similar technologies to remember your language choice, measure traffic and show advertising. See section 4.',
    'privacy.s2.title': '2. How we use information',
    'privacy.s2.item1': 'To provide the downloader and return the files you request',
    'privacy.s2.item2': 'To detect abuse, prevent automated misuse and keep the Site secure',
    'privacy.s2.item3':
      'To understand which pages and features are used, and to improve speed and reliability',
    'privacy.s2.item4': 'To show advertising that supports a free service',
    'privacy.s2.item5': 'To respond to messages and legal requests',
    'privacy.s2.item6': 'To comply with applicable law',
    'privacy.s2.note': 'We do not sell your personal information for money.',
    'privacy.s3.title': '3. Downloaded files and submitted links',
    'privacy.s3.text':
      'Video and audio files are delivered to your browser from the original source or through our processing service. We do not intentionally keep copies of the videos you download, and we do not build user profiles from the links you submit. Technical logs that include the submitted URL may be kept for a limited time for security and debugging, as described in section 7.',
    'privacy.s4.title': '4. Advertising and third-party services',
    'privacy.s4.p1':
      'The Site is supported by advertising. Advertising partners such as Google AdSense may use cookies and identifiers to show and measure ads, including personalised ads where permitted by law. These partners have their own privacy policies and we do not control their practices.',
    'privacy.s4.p2':
      'We may also use analytics tools such as Google Analytics and hosting and infrastructure providers such as Vercel and Cloudflare to run and measure the Site.',
    'privacy.s4.choicesIntro': 'You can manage advertising choices through:',
    'privacy.s4.choice1': 'Your browser settings, to block or delete cookies',
    'privacy.s4.choice2':
      'Google Ads Settings (<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>) to control personalised ads',
    'privacy.s4.choice3':
      'The Digital Advertising Alliance (<a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a>) and the Your Online Choices site (<a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a>) for EU users',
    'privacy.s4.note': 'Blocking cookies may affect how some parts of the Site work.',
    'privacy.s5.title': '5. Legal bases (EEA, UK and similar regions)',
    'privacy.s5.text':
      'Where data protection law such as the GDPR applies, we process personal data on these bases: our legitimate interests in operating, securing and improving the Site; your consent for non-essential cookies and personalised advertising, which you can withdraw at any time; and compliance with legal obligations.',
    'privacy.s6.title': '6. Sharing of information',
    'privacy.s6.text':
      'We share information only with service providers that help us run the Site (hosting, analytics, advertising, security), when required by law or to protect our rights and users, and in connection with a business transfer such as a merger or sale. These providers may process data only for the purposes described here.',
    'privacy.s7.title': '7. Data retention',
    'privacy.s7.text':
      'We keep technical logs for as long as needed for security and troubleshooting, generally no more than 90 days, unless a longer period is required by law. Emails you send us are kept as long as needed to handle your request. Third-party partners follow their own retention periods.',
    'privacy.s8.title': '8. International transfers',
    'privacy.s8.text':
      'Our providers may process data in countries other than your own, including the United States. Where required, we rely on appropriate safeguards for those transfers.',
    'privacy.s9.title': '9. Your rights',
    'privacy.s9.text':
      'Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal data, to object to processing, to withdraw consent and to complain to your local data protection authority. California residents may also have the right to know what is collected and to opt out of the “sale” or “sharing” of personal information for cross-context advertising. To make a request, email <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>. We may need to verify your identity first.',
    'privacy.s10.title': "10. Children's privacy",
    'privacy.s10.text':
      'The Site is not directed to children under 13 (or under 16 where local law requires). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.',
    'privacy.s11.title': '11. Security',
    'privacy.s11.text':
      'We use reasonable technical and organisational measures, including HTTPS, to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    'privacy.s12.title': '12. External links',
    'privacy.s12.text':
      'The Site may link to other websites. We are not responsible for their content or privacy practices.',
    'privacy.s13.title': '13. Changes to this policy',
    'privacy.s13.text':
      'We may update this policy from time to time. The “Last updated” date at the top shows the latest version. Continued use of the Site after changes means you accept the updated policy.',
    'privacy.s14.title': '14. Contact',
    'privacy.s14.name': 'Musicaldown',
    'privacy.s14.emailLabel': 'Email:',
    'privacy.s14.websiteLabel': 'Website:',
    'terms.metaTitle': 'Terms of Service – Musicaldown',
    'terms.metaDescription':
      "The rules for using Musicaldown's free TikTok video and MP3 downloader, including permitted use, copyright, disclaimers and liability.",
    'terms.title': 'Terms of Service',
    'terms.effective': 'Effective date: October 20, 2026',
    'terms.intro':
      'These Terms of Service (“Terms”) govern your use of Musicaldown.se and its language versions (the “Site”) and the TikTok downloader and related tools we provide (the “Service”). By using the Service you agree to these Terms. If you do not agree, please do not use it.',
    'terms.s1.title': '1. The Service',
    'terms.s1.text':
      'Musicaldown lets you submit a link to a public TikTok video and, where available, receive the video as an MP4 file or the audio as an MP3 file. The Service is provided free of charge and is supported by advertising. Availability, quality and formats depend on the original content and on third-party platforms, and may change or stop at any time.',
    'terms.s2.title': '2. Eligibility',
    'terms.s2.text':
      'You must be old enough to form a binding contract in your country, or have permission from a parent or guardian, and you must not be barred from using the Service under applicable law.',
    'terms.s3.title': '3. Permitted use',
    'terms.s3.intro': 'You may use the Service for personal, non-commercial purposes only to save:',
    'terms.s3.item1': 'content that you created and own, or',
    'terms.s3.item2': 'content that you have permission from the rights holder to download, or',
    'terms.s3.item3': 'content that you are otherwise legally allowed to save.',
    'terms.s4.title': '4. Prohibited use',
    'terms.s4.intro': 'You agree not to:',
    'terms.s4.item1':
      'Download, copy, republish or distribute content in a way that infringes copyright, trademark, privacy or other rights',
    'terms.s4.item2': "Repost another creator's content as your own or remove credit from it",
    'terms.s4.item3': 'Use the Service for any unlawful, harmful, harassing or deceptive purpose',
    'terms.s4.item4':
      'Download content depicting minors in a harmful way, or private content you are not authorised to access',
    'terms.s4.item5':
      'Use bots, scrapers or automated scripts to overload, test or abuse the Service, or attempt to bypass rate limits or security measures',
    'terms.s4.item6': 'Reverse engineer, resell or provide the Service to others as your own',
    'terms.s4.item7':
      'Interfere with ads, disrupt the Site or attempt to gain unauthorised access to our systems',
    'terms.s5.title': '5. Your responsibility for content',
    'terms.s5.text':
      "You are solely responsible for the content you download and how you use it. We do not host the videos on TikTok, we do not review them, and we do not verify that you have the right to download them. Saving content may also be restricted by TikTok's own terms of service, which you are responsible for reading.",
    'terms.s6.title': '6. No affiliation',
    'terms.s6.text':
      'Musicaldown is an independent service. It is not affiliated with, endorsed or sponsored by TikTok or ByteDance Ltd. All trademarks, logos and content belong to their respective owners.',
    'terms.s7.title': '7. Intellectual property',
    'terms.s7.text':
      "The Site's design, text, code and branding (excluding third-party content) belong to Musicaldown or its licensors and are protected by law. You may not copy or reuse them without permission. Content downloaded through the Service remains the property of its respective creators and rights holders.",
    'terms.s8.title': '8. Copyright complaints (DMCA)',
    'terms.s8.text':
      'We respect intellectual property rights. If you believe content processed through the Service infringes your copyright, email <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a> with: your name and contact details; a description of the copyrighted work; the URL of the material; a statement that you have a good-faith belief the use is unauthorised; and a statement, under penalty of perjury, that your notice is accurate and that you are the owner or authorised to act for the owner. We will review valid notices and take appropriate action, which may include blocking the specific link and restricting repeat infringers. Because we do not host the original videos, the original platform is the best place to request removal of the video itself.',
    'terms.s9.title': '9. Advertising and third-party links',
    'terms.s9.text':
      'The Site displays advertisements and may link to third-party websites. We are not responsible for third-party ads, sites, products or services, and your dealings with them are your own responsibility. Please be careful with downloads or offers that appear outside our tool.',
    'terms.s10.title': '10. Disclaimer of warranties',
    'terms.s10.text':
      'The Service is provided “as is” and “as available” without warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, non-infringement or uninterrupted or error-free operation. We do not guarantee that any video or audio will be available, that any specific quality or format will be offered, or that files will be free of errors.',
    'terms.s11.title': '11. Limitation of liability',
    'terms.s11.text':
      'To the fullest extent permitted by law, Musicaldown and its owners and affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, profits or goodwill, arising from your use of or inability to use the Service. Our total liability for any claim relating to the Service will not exceed USD 100. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.',
    'terms.s12.title': '12. Indemnification',
    'terms.s12.text':
      "You agree to indemnify and hold harmless Musicaldown and its owners from claims, losses and expenses (including reasonable legal fees) arising from your misuse of the Service, your violation of these Terms or your infringement of any third party's rights.",
    'terms.s13.title': '13. Suspension and termination',
    'terms.s13.text':
      'We may limit, suspend or block access to the Service at any time, without notice, for any reason, including suspected abuse or violation of these Terms.',
    'terms.s14.title': '14. Changes to the Service and Terms',
    'terms.s14.text':
      'We may modify or discontinue the Service and update these Terms at any time. The effective date above shows the latest version. Continued use after changes means you accept them.',
    'terms.s15.title': '15. Governing law',
    'terms.s15.text':
      'These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict-of-law rules. Disputes will be resolved in the courts of [city, jurisdiction], unless mandatory consumer law in your country says otherwise.',
    'terms.s16.title': '16. Contact',
    'terms.s16.text':
      'Questions about these Terms: <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>.',
    'highlights.ariaLabel': 'Keunggulan layanan',
    'highlights.item1.title': 'Berbasis browser',
    'highlights.item1.text': 'Tanpa aplikasi khusus',
    'highlights.item2.title': 'Format video',
    'highlights.item2.text': 'Pilihan bergantung pada tautan',
    'highlights.item3.title': 'Pilihan audio',
    'highlights.item3.text': 'Jika tersedia',
    'highlights.item4.title': 'Alur mudah',
    'highlights.item4.text': 'Salin, tempel, periksa',
    'how.description':
      'Unduh video TikTok dalam tiga langkah: tempel tautan, lalu pilih MP4 untuk menyimpan video atau MP3 untuk mengambil audio, sesuai format yang tersedia.',
    'features.eyebrow': 'Dirancang untuk alur kerja Anda',
    'features.title': 'Pengunduh video TikTok yang praktis',
    'features.description':
      'Pilih opsi yang sesuai tanpa menganggap setiap video mendukung semua format atau resolusi.',
    'features.item1.title': 'Pengunduh TikTok HD',
    'features.item1.text':
      'Periksa resolusi yang tersedia untuk tautan. HD, 1080p, dan 4K tidak dijamin untuk setiap video.',
    'features.item2.title': 'Pilihan video MP4',
    'features.item2.text':
      'Jika tersedia, MP4 merupakan format yang didukung banyak ponsel, tablet, dan komputer.',
    'features.item3.title': 'Pengunduh audio TikTok',
    'features.item3.text':
      'Jika ekstraksi audio didukung, periksa opsi audio atau MP3 sebelum menyimpan.',
    'features.item4.title': 'Pilihan tanpa watermark',
    'features.item4.text':
      'Periksa apakah versi tanpa watermark tersedia. Ketersediaannya bergantung pada video dan layanan.',
    'features.item5.title': 'Berfungsi di browser',
    'features.item5.text':
      'Buka situs melalui browser yang kompatibel di iPhone, Android, Windows, atau Mac.',
    'features.item6.title': 'Tidak perlu kata sandi TikTok',
    'features.item6.text':
      'Jangan pernah membagikan kredensial TikTok kepada layanan pengunduh. Gunakan hanya tautan publik yang ingin diproses.',
    'intro.paragraph1':
      'MusicallyDown adalah pengunduh video TikTok online untuk orang yang ingin menyimpan video tanpa langkah tambahan. Namanya merujuk pada aplikasi Musical.ly yang kemudian bergabung dengan TikTok; karena itu orang masih mencari “musically download online” atau “musical down”. Tempel tautan TikTok publik dan simpan file ke perangkat Anda.',
    'intro.paragraph2':
      'Halaman ini dibuat ringan agar cepat dimuat, bahkan dengan koneksi seluler yang lambat.',
    'bento.quality.eyebrow': 'Ketahui apa yang bisa diharapkan dari MusicallyDown',
    'bento.quality.title': 'Pengunduh TikTok HD: simpan video hingga 4K',
    'bento.quality.p1':
      'Kualitas bergantung pada video asli dan format yang dikembalikan pengunduh. Pilih resolusi hanya jika tersedia; alat pengunduh tidak dapat menciptakan detail yang tidak ada pada sumber.',
    'bento.quality.p2':
      'Untuk file besar, gunakan koneksi stabil dan pastikan ruang penyimpanan cukup.',
    'bento.quality.cta': 'Periksa pilihan yang tersedia',
    'bento.quality.guide.label': 'Panduan resolusi',
    'bento.quality.guide.heading': 'Pilih yang tersedia',
    'bento.quality.guide.badge': 'Bergantung sumber',
    'bento.quality.sd': 'Definisi standar',
    'bento.quality.sd.note': 'Mungkin tersedia',
    'bento.quality.hd': 'HD / 1080p',
    'bento.quality.hd.note': 'Jika ditawarkan',
    'bento.quality.4k.note': 'Hanya jika tersedia',
    'bento.quality.disclaimer':
      'Panduan ilustratif saja—batang ini bukan hasil pengukuran atau jaminan ketersediaan.',
    'bento.devices.eyebrow': 'Proses yang sama dan mudah',
    'bento.devices.title': 'Gunakan MusicalDown di ponsel atau komputer',
    'bento.devices.paragraph':
      'Buka situs melalui browser yang kompatibel dan ikuti proses salin-tempel tautan.',
    'bento.devices.iphone.desc': 'Periksa unduhan Safari atau aplikasi Files.',
    'bento.devices.android.desc': 'Periksa daftar unduhan browser atau folder Downloads.',
    'bento.devices.desktop.desc': 'Gunakan pengelola unduhan browser atau folder Downloads.',
    'faq.description':
      'Jawaban singkat tentang mengunduh video dan audio TikTok, format yang didukung, serta cara mengatasi masalah umum.',

    'hero.subtitle':
      'Anda juga dapat mencari MusicallyDown, Musically Down, atau Musical Down. Anda berada di tempat yang tepat.',
  },
  vi: {
    'site.name': 'MusicallyDown',
    'site.title': 'MusicallyDown – Tải Video TikTok Không Logo & MP3 Miễn Phí',
    'site.description':
      'Tải video TikTok công khai không watermark khi có tùy chọn. Lưu video MP4 hoặc trích xuất âm thanh MP3 miễn phí ngay trên trình duyệt, không cần cài ứng dụng.',
    'nav.home': 'Trang chủ',
    'nav.stories': 'Tải TikTok Stories',
    'nav.mp3': 'Tải TikTok sang MP3',
    'nav.blog': 'Blog',
    'nav.how': 'Cách sử dụng',
    'nav.contact': 'Liên hệ',
    'nav.faq': 'Câu hỏi thường gặp',
    'hero.badge1': 'Không watermark',
    'hero.badge2': 'Chất lượng HD',
    'hero.badge3': 'MP4 & MP3',
    'hero.badge4': 'Miễn phí, không đăng ký',
    'hero.titleStart': 'Tải video TikTok',
    'hero.titleHighlight': ' không logo',
    'hero.description': 'Tải video TikTok và lưu MP4 hoặc âm thanh MP3 nếu có tùy chọn phù hợp.',
    'section1.title': 'Tải video TikTok trực tuyến - ',
    'section1.highlight': 'Không watermark',
    'section1.paragraph':
      'MusicallyDown là công cụ miễn phí trên trình duyệt giúp lưu video TikTok công khai dưới dạng MP4 khi định dạng này được hỗ trợ. Sử dụng trên điện thoại hoặc máy tính mà không cần cài ứng dụng.',
    'section1.paragraph2':
      'Dán liên kết tương thích và kiểm tra các tùy chọn video hoặc âm thanh được cung cấp cho nội dung đó.',
    'how.eyebrow': 'Ba bước đơn giản',
    'how.title': 'Cách tải video TikTok',
    'how.step1.title': 'Sao chép liên kết video',
    'how.step1.text':
      'Mở video TikTok, chọn Chia sẻ rồi Sao chép liên kết. Đảm bảo video có thể truy cập và bạn được phép lưu video đó.',
    'how.step2.title': 'Dán liên kết vào MusicallyDown',
    'how.step2.text': 'Quay lại trang này, dán URL vào ô MusicallyDown rồi gửi để xử lý.',
    'how.step3.title': 'Kiểm tra và lưu',
    'how.step3.text':
      'Chọn định dạng có sẵn cho liên kết, làm theo hướng dẫn tải xuống và kiểm tra thư mục tải xuống trên thiết bị.',
    'faq.title': 'Câu hỏi thường gặp',
    'footer.product': 'Công cụ',
    'footer.resources': 'Tài nguyên',
    'footer.company': 'Thông tin',
    'footer.privacyPolicy': 'Chính sách bảo mật',
    'footer.termsOfService': 'Điều khoản dịch vụ',
    'footer.documentation': 'Hướng dẫn sử dụng',
    'footer.rssFeed': 'RSS',
    'footer.license': 'Thông tin pháp lý',
    skipToContent: 'Chuyển đến nội dung chính',
    lastUpdated: 'Cập nhật lần cuối',

    // Complete locale key coverage; untranslated legal-page strings use English fallback text.
    'bento.title': 'Tất cả tiện ích từ Musical Down ',
    'bento.highlight': 'Công cụ tải video TikTok',
    'bento.paragraph':
      'MusicallyDown là công cụ tiện lợi giúp lưu video TikTok công khai dưới dạng MP4 khi định dạng này được hỗ trợ.',
    'bento.paragraph1':
      'Tìm MusicallyDown, Musically Down hoặc musicallydown để dùng công cụ miễn phí, dễ thao tác: sao chép liên kết, dán và lưu tệp. Bạn cũng có thể trích xuất MP3 khi được hỗ trợ.',
    'bento.quality.4k': '4K',
    'bento.devices.iphone.title': 'iPhone',
    'bento.devices.android.title': 'Android',
    'bento.devices.desktop.title': 'Desktop',
    'faq.question1': 'MusicallyDown có miễn phí không?',
    'faq.answer1':
      'Có. Công cụ miễn phí, trang web được hỗ trợ bởi quảng cáo và bạn không cần đăng ký hay cài ứng dụng.',
    'faq.question2': 'Làm cách nào tải video TikTok không watermark?',
    'faq.answer2':
      'Sao chép liên kết từ menu Chia sẻ của TikTok, dán vào đây, nhấn Tải xuống và chọn tùy chọn không watermark nếu có.',
    'faq.question3': 'Làm cách nào chuyển TikTok sang MP3?',
    'faq.answer3': 'Dán liên kết TikTok, nhấn Tải xuống và chọn tùy chọn âm thanh nếu có.',
    'faq.question4': 'Tôi có thể lưu TikTok dưới dạng MP4 không?',
    'faq.answer4':
      'Có. Nếu có tùy chọn video, bạn có thể lưu dưới dạng MP4 tương thích với nhiều điện thoại và máy tính.',
    'faq.question5': 'Có tùy chọn TikTok sang MP3 320 kbps không?',
    'faq.answer5':
      'Không. Âm thanh được lưu theo nguồn TikTok; nhãn 320 kbps không làm tăng chất lượng thực tế.',
    'faq.question6': 'Tôi có thể tải video YouTube ở đây không?',
    'faq.answer6':
      'Không. MusicallyDown xử lý liên kết TikTok; dịch vụ tải YouTube là dịch vụ riêng.',
    'faq.question7': 'Tại sao liên kết TikTok của tôi không hoạt động?',
    'faq.answer7':
      'Video có thể ở chế độ riêng tư, đã bị xóa hoặc liên kết có thêm văn bản. Hãy thử video công khai và chỉ sao chép liên kết.',
    'faq.question8': 'MusicallyDown có an toàn không?',
    'faq.answer8':
      'Không chia sẻ mật khẩu TikTok. Chỉ gửi liên kết công khai bạn muốn xử lý và tránh quảng cáo hoặc trang ngoài đáng ngờ.',
    'faq.question9': 'Tôi có cần cài ứng dụng không?',
    'faq.answer9':
      'Không. Bạn có thể dùng trang web bằng trình duyệt tương thích trên điện thoại hoặc máy tính.',
    'faq.question10': 'Tôi có thể tải mọi video TikTok không?',
    'faq.answer10':
      'Không phải lúc nào cũng được. Video riêng tư, đã xóa hoặc bị hạn chế có thể không khả dụng. Chỉ tải nội dung của bạn hoặc nội dung bạn được phép lưu.',
    'footer.copyright': 'MusicalDown. Bảo lưu mọi quyền.',
    'footer.builtWith': 'Built with',
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
    'about.title': 'About Musicallydown – Free TikTok Video & MP3 Downloader',
    'about.metaDescription':
      'Learn what Musicallydown is, how our free TikTok downloader works, what we do with your data, and how we encourage responsible, permission-based downloading.',
    'about.titleStart': 'About ',
    'about.titleHighlight': 'Musicallydown',
    'about.intro1':
      'Musicallydown is a free, browser-based tool that helps you save TikTok videos as MP4 files and extract the audio as MP3, when those formats are available. There is nothing to install and no account to create. You copy a video link, paste it into the box on our homepage and choose the file you want.',
    'about.intro2':
      'We built Musicallydown because saving a TikTok you made or a clip you have permission to keep, should not require an app, a login or a pile of pop-ups. Our goal is simple: a fast, clear tool that works on iPhone, Android and desktop browsers.',
    'about.doesTitle': 'What Musicallydown does',
    'about.does1.title': 'Downloads TikTok videos as MP4.',
    'about.does1.text':
      ' Where the source offers it, you can choose a clean version without the TikTok watermark in SD or HD.',
    'about.does2.title': 'Converts TikTok to MP3.',
    'about.does2.text': ' Extract the sound from a supported video and save it as an audio file.',
    'about.does3.title': 'Works in your browser.',
    'about.does3.text':
      ' Chrome, Safari, Firefox, Edge and other modern browsers on phones, tablets and computers.',
    'about.does4.title': 'Needs no sign-up.',
    'about.does4.text': ' We never ask for your TikTok username or password.',
    'about.does5.title': 'Speaks your language.',
    'about.does5.text':
      ' The site is available in English, <a href="/es">Spanish</a>, <a href="/id">Indonesian</a> and <a href="/vi">Vietnamese</a>, with more planned.',
    'about.howTitle': 'How it works',
    'about.how1': 'Open TikTok, find the video and tap Share, then Copy Link.',
    'about.how2': 'Paste the link into the Musicallydown box.',
    'about.how3': 'Choose an available format or quality.',
    'about.how4': 'Save the file to your device.',
    'about.howNote':
      'Results depend on the original video. Private, deleted, age-restricted or region-limited videos cannot be downloaded, and not every video offers every format. We save audio the way TikTok stores it, so we do not offer a 320 kbps option; a higher label would not add real quality.',
    'about.principlesTitle': 'Our principles',
    'about.principle1.title': 'Free and simple.',
    'about.principle1.text':
      ' The tool is free to use and supported by advertising. We keep the interface as uncluttered as we can.',
    'about.principle2.title': 'Privacy first.',
    'about.principle2.text':
      ' We do not ask you to register, and we do not need your TikTok credentials. Read our <a href="/privacy">Privacy Policy</a> for exactly what is processed.',
    'about.principle3.title': 'Respect for creators.',
    'about.principle3.text':
      'Videos and music on TikTok belong to their creators. Please download only your own content or content you have permission to save and do not repost other peoples work as your own. See our <a href="/privacy">Privacy Policy</a>.',
    'about.principle4.title': 'Honest expectations.',
    'about.principle4.text':
      ' TikTok changes often. When something stops working we would rather say so than overpromise. If a download fails, check the <a href="/faq">FAQ</a> or contact us.',
    'about.independentTitle': 'Independent service',
    'about.independentText':
      'Musicaldown is an independent tool. It is not affiliated with, endorsed by or sponsored by TikTok or ByteDance Ltd. TikTok is a trademark of its respective owner and is used only to describe the content our tool works with.',
    'about.contactTitle': 'Contact',
    'about.contactText':
      'Questions, bug reports, removal requests or business enquiries: <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>. We read every message and aim to reply within 2–3 business days.',
    'privacy.metaTitle': 'Privacy Policy – Musicaldown',
    'privacy.metaDescription':
      'How Musicaldown handles TikTok links, device data, cookies and advertising. No account needed and no TikTok login requested.',
    'privacy.title': 'Privacy Policy',
    'privacy.effective': 'Effective date: October 20, 2026',
    'privacy.updated': 'Last updated: October 20, 2026',
    'privacy.intro':
      'This Privacy Policy explains what information Musicaldown (“we”, “us”, “our”) collects when you use Musicaldown.se and its language versions (the “Site”), how we use it and what choices you have. By using the Site you agree to this policy.',
    'privacy.s1.title': '1. Information we collect',
    'privacy.s1.provided.title': 'Information you provide.',
    'privacy.s1.provided.text':
      ' When you use the downloader you paste a TikTok video URL. We use that URL only to fetch the public video or audio information you asked for. You do not need to create an account, and we never ask for your TikTok username or password. If you contact us by email, we receive your email address and the contents of your message.',
    'privacy.s1.auto.title': 'Information collected automatically.',
    'privacy.s1.auto.text':
      ' Like most websites, our servers and service providers may collect technical data such as:',
    'privacy.s1.auto1': 'IP address and approximate location (country or region)',
    'privacy.s1.auto2': 'Browser type and version, device type and operating system',
    'privacy.s1.auto3':
      'Pages visited, referring page, date and time of visit and language settings',
    'privacy.s1.auto4': 'Error logs and performance data',
    'privacy.s1.cookies.title': 'Cookies and similar technologies.',
    'privacy.s1.cookies.text':
      ' We and our partners use cookies, local storage and similar technologies to remember your language choice, measure traffic and show advertising. See section 4.',
    'privacy.s2.title': '2. How we use information',
    'privacy.s2.item1': 'To provide the downloader and return the files you request',
    'privacy.s2.item2': 'To detect abuse, prevent automated misuse and keep the Site secure',
    'privacy.s2.item3':
      'To understand which pages and features are used, and to improve speed and reliability',
    'privacy.s2.item4': 'To show advertising that supports a free service',
    'privacy.s2.item5': 'To respond to messages and legal requests',
    'privacy.s2.item6': 'To comply with applicable law',
    'privacy.s2.note': 'We do not sell your personal information for money.',
    'privacy.s3.title': '3. Downloaded files and submitted links',
    'privacy.s3.text':
      'Video and audio files are delivered to your browser from the original source or through our processing service. We do not intentionally keep copies of the videos you download, and we do not build user profiles from the links you submit. Technical logs that include the submitted URL may be kept for a limited time for security and debugging, as described in section 7.',
    'privacy.s4.title': '4. Advertising and third-party services',
    'privacy.s4.p1':
      'The Site is supported by advertising. Advertising partners such as Google AdSense may use cookies and identifiers to show and measure ads, including personalised ads where permitted by law. These partners have their own privacy policies and we do not control their practices.',
    'privacy.s4.p2':
      'We may also use analytics tools such as Google Analytics and hosting and infrastructure providers such as Vercel and Cloudflare to run and measure the Site.',
    'privacy.s4.choicesIntro': 'You can manage advertising choices through:',
    'privacy.s4.choice1': 'Your browser settings, to block or delete cookies',
    'privacy.s4.choice2':
      'Google Ads Settings (<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>) to control personalised ads',
    'privacy.s4.choice3':
      'The Digital Advertising Alliance (<a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a>) and the Your Online Choices site (<a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a>) for EU users',
    'privacy.s4.note': 'Blocking cookies may affect how some parts of the Site work.',
    'privacy.s5.title': '5. Legal bases (EEA, UK and similar regions)',
    'privacy.s5.text':
      'Where data protection law such as the GDPR applies, we process personal data on these bases: our legitimate interests in operating, securing and improving the Site; your consent for non-essential cookies and personalised advertising, which you can withdraw at any time; and compliance with legal obligations.',
    'privacy.s6.title': '6. Sharing of information',
    'privacy.s6.text':
      'We share information only with service providers that help us run the Site (hosting, analytics, advertising, security), when required by law or to protect our rights and users, and in connection with a business transfer such as a merger or sale. These providers may process data only for the purposes described here.',
    'privacy.s7.title': '7. Data retention',
    'privacy.s7.text':
      'We keep technical logs for as long as needed for security and troubleshooting, generally no more than 90 days, unless a longer period is required by law. Emails you send us are kept as long as needed to handle your request. Third-party partners follow their own retention periods.',
    'privacy.s8.title': '8. International transfers',
    'privacy.s8.text':
      'Our providers may process data in countries other than your own, including the United States. Where required, we rely on appropriate safeguards for those transfers.',
    'privacy.s9.title': '9. Your rights',
    'privacy.s9.text':
      'Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal data, to object to processing, to withdraw consent and to complain to your local data protection authority. California residents may also have the right to know what is collected and to opt out of the “sale” or “sharing” of personal information for cross-context advertising. To make a request, email <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>. We may need to verify your identity first.',
    'privacy.s10.title': "10. Children's privacy",
    'privacy.s10.text':
      'The Site is not directed to children under 13 (or under 16 where local law requires). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.',
    'privacy.s11.title': '11. Security',
    'privacy.s11.text':
      'We use reasonable technical and organisational measures, including HTTPS, to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    'privacy.s12.title': '12. External links',
    'privacy.s12.text':
      'The Site may link to other websites. We are not responsible for their content or privacy practices.',
    'privacy.s13.title': '13. Changes to this policy',
    'privacy.s13.text':
      'We may update this policy from time to time. The “Last updated” date at the top shows the latest version. Continued use of the Site after changes means you accept the updated policy.',
    'privacy.s14.title': '14. Contact',
    'privacy.s14.name': 'Musicaldown',
    'privacy.s14.emailLabel': 'Email:',
    'privacy.s14.websiteLabel': 'Website:',
    'terms.metaTitle': 'Terms of Service – Musicaldown',
    'terms.metaDescription':
      "The rules for using Musicaldown's free TikTok video and MP3 downloader, including permitted use, copyright, disclaimers and liability.",
    'terms.title': 'Terms of Service',
    'terms.effective': 'Effective date: October 20, 2026',
    'terms.intro':
      'These Terms of Service (“Terms”) govern your use of Musicaldown.se and its language versions (the “Site”) and the TikTok downloader and related tools we provide (the “Service”). By using the Service you agree to these Terms. If you do not agree, please do not use it.',
    'terms.s1.title': '1. The Service',
    'terms.s1.text':
      'Musicaldown lets you submit a link to a public TikTok video and, where available, receive the video as an MP4 file or the audio as an MP3 file. The Service is provided free of charge and is supported by advertising. Availability, quality and formats depend on the original content and on third-party platforms, and may change or stop at any time.',
    'terms.s2.title': '2. Eligibility',
    'terms.s2.text':
      'You must be old enough to form a binding contract in your country, or have permission from a parent or guardian, and you must not be barred from using the Service under applicable law.',
    'terms.s3.title': '3. Permitted use',
    'terms.s3.intro': 'You may use the Service for personal, non-commercial purposes only to save:',
    'terms.s3.item1': 'content that you created and own, or',
    'terms.s3.item2': 'content that you have permission from the rights holder to download, or',
    'terms.s3.item3': 'content that you are otherwise legally allowed to save.',
    'terms.s4.title': '4. Prohibited use',
    'terms.s4.intro': 'You agree not to:',
    'terms.s4.item1':
      'Download, copy, republish or distribute content in a way that infringes copyright, trademark, privacy or other rights',
    'terms.s4.item2': "Repost another creator's content as your own or remove credit from it",
    'terms.s4.item3': 'Use the Service for any unlawful, harmful, harassing or deceptive purpose',
    'terms.s4.item4':
      'Download content depicting minors in a harmful way, or private content you are not authorised to access',
    'terms.s4.item5':
      'Use bots, scrapers or automated scripts to overload, test or abuse the Service, or attempt to bypass rate limits or security measures',
    'terms.s4.item6': 'Reverse engineer, resell or provide the Service to others as your own',
    'terms.s4.item7':
      'Interfere with ads, disrupt the Site or attempt to gain unauthorised access to our systems',
    'terms.s5.title': '5. Your responsibility for content',
    'terms.s5.text':
      "You are solely responsible for the content you download and how you use it. We do not host the videos on TikTok, we do not review them, and we do not verify that you have the right to download them. Saving content may also be restricted by TikTok's own terms of service, which you are responsible for reading.",
    'terms.s6.title': '6. No affiliation',
    'terms.s6.text':
      'Musicaldown is an independent service. It is not affiliated with, endorsed or sponsored by TikTok or ByteDance Ltd. All trademarks, logos and content belong to their respective owners.',
    'terms.s7.title': '7. Intellectual property',
    'terms.s7.text':
      "The Site's design, text, code and branding (excluding third-party content) belong to Musicaldown or its licensors and are protected by law. You may not copy or reuse them without permission. Content downloaded through the Service remains the property of its respective creators and rights holders.",
    'terms.s8.title': '8. Copyright complaints (DMCA)',
    'terms.s8.text':
      'We respect intellectual property rights. If you believe content processed through the Service infringes your copyright, email <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a> with: your name and contact details; a description of the copyrighted work; the URL of the material; a statement that you have a good-faith belief the use is unauthorised; and a statement, under penalty of perjury, that your notice is accurate and that you are the owner or authorised to act for the owner. We will review valid notices and take appropriate action, which may include blocking the specific link and restricting repeat infringers. Because we do not host the original videos, the original platform is the best place to request removal of the video itself.',
    'terms.s9.title': '9. Advertising and third-party links',
    'terms.s9.text':
      'The Site displays advertisements and may link to third-party websites. We are not responsible for third-party ads, sites, products or services, and your dealings with them are your own responsibility. Please be careful with downloads or offers that appear outside our tool.',
    'terms.s10.title': '10. Disclaimer of warranties',
    'terms.s10.text':
      'The Service is provided “as is” and “as available” without warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, non-infringement or uninterrupted or error-free operation. We do not guarantee that any video or audio will be available, that any specific quality or format will be offered, or that files will be free of errors.',
    'terms.s11.title': '11. Limitation of liability',
    'terms.s11.text':
      'To the fullest extent permitted by law, Musicaldown and its owners and affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, profits or goodwill, arising from your use of or inability to use the Service. Our total liability for any claim relating to the Service will not exceed USD 100. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.',
    'terms.s12.title': '12. Indemnification',
    'terms.s12.text':
      "You agree to indemnify and hold harmless Musicaldown and its owners from claims, losses and expenses (including reasonable legal fees) arising from your misuse of the Service, your violation of these Terms or your infringement of any third party's rights.",
    'terms.s13.title': '13. Suspension and termination',
    'terms.s13.text':
      'We may limit, suspend or block access to the Service at any time, without notice, for any reason, including suspected abuse or violation of these Terms.',
    'terms.s14.title': '14. Changes to the Service and Terms',
    'terms.s14.text':
      'We may modify or discontinue the Service and update these Terms at any time. The effective date above shows the latest version. Continued use after changes means you accept them.',
    'terms.s15.title': '15. Governing law',
    'terms.s15.text':
      'These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict-of-law rules. Disputes will be resolved in the courts of [city, jurisdiction], unless mandatory consumer law in your country says otherwise.',
    'terms.s16.title': '16. Contact',
    'terms.s16.text':
      'Questions about these Terms: <a href="mailto:support@Musicaldown.se">support@Musicaldown.se</a>.',
    'highlights.ariaLabel': 'Điểm nổi bật của dịch vụ',
    'highlights.item1.title': 'Dùng trên trình duyệt',
    'highlights.item1.text': 'Không cần ứng dụng riêng',
    'highlights.item2.title': 'Định dạng video',
    'highlights.item2.text': 'Tùy chọn tùy thuộc liên kết',
    'highlights.item3.title': 'Tùy chọn âm thanh',
    'highlights.item3.text': 'Khi có sẵn',
    'highlights.item4.title': 'Quy trình đơn giản',
    'highlights.item4.text': 'Sao chép, dán, kiểm tra',
    'how.description':
      'Tải video TikTok qua ba bước: dán liên kết, chọn MP4 để lưu video hoặc MP3 để trích xuất âm thanh, tùy theo định dạng có sẵn.',
    'features.eyebrow': 'Phù hợp với quy trình của bạn',
    'features.title': 'Công cụ tải video TikTok thiết thực',
    'features.description':
      'Chọn tùy chọn phù hợp mà không mặc định mọi video đều hỗ trợ tất cả định dạng hoặc độ phân giải.',
    'features.item1.title': 'Tải TikTok HD',
    'features.item1.text':
      'Kiểm tra độ phân giải được trả về cho liên kết. HD, 1080p và 4K không được đảm bảo cho mọi video.',
    'features.item2.title': 'Tùy chọn video MP4',
    'features.item2.text':
      'Khi có sẵn, MP4 là định dạng tương thích với nhiều điện thoại, máy tính bảng và máy tính.',
    'features.item3.title': 'Tải âm thanh TikTok',
    'features.item3.text':
      'Nếu hỗ trợ trích xuất âm thanh, hãy kiểm tra tùy chọn âm thanh hoặc MP3 trước khi lưu.',
    'features.item4.title': 'Tùy chọn không watermark',
    'features.item4.text':
      'Kiểm tra xem có phiên bản không watermark hay không. Tính khả dụng tùy thuộc video và dịch vụ.',
    'features.item5.title': 'Hoạt động trên trình duyệt',
    'features.item5.text':
      'Mở trang web bằng trình duyệt tương thích trên iPhone, Android, Windows hoặc Mac.',
    'features.item6.title': 'Không cần mật khẩu TikTok',
    'features.item6.text':
      'Không chia sẻ thông tin đăng nhập TikTok với công cụ tải xuống. Chỉ gửi liên kết công khai mà bạn muốn xử lý.',
    'intro.paragraph1':
      'MusicallyDown là công cụ tải video TikTok trực tuyến dành cho những người muốn lưu video mà không cần nhiều bước phụ. Tên gọi gợi nhớ ứng dụng Musical.ly, sau này sáp nhập vào TikTok; vì vậy nhiều người vẫn tìm “musically download online” hoặc “musical down”. Hãy dán liên kết TikTok công khai và lưu tệp vào thiết bị.',
    'intro.paragraph2':
      'Trang được thiết kế gọn nhẹ để tải nhanh ngay cả khi kết nối di động chậm.',
    'bento.quality.eyebrow': 'Tìm hiểu những gì MusicallyDown cung cấp',
    'bento.quality.title': 'Tải TikTok HD: lưu video lên đến 4K',
    'bento.quality.p1':
      'Chất lượng phụ thuộc video gốc và định dạng mà công cụ trả về. Chỉ chọn độ phân giải khi tùy chọn đó xuất hiện; công cụ không thể tạo thêm chi tiết không có trong nguồn.',
    'bento.quality.p2':
      'Với tệp lớn, hãy dùng kết nối ổn định và đảm bảo thiết bị còn đủ dung lượng trống.',
    'bento.quality.cta': 'Kiểm tra tùy chọn có sẵn',
    'bento.quality.guide.label': 'Hướng dẫn độ phân giải',
    'bento.quality.guide.heading': 'Chọn tùy chọn có sẵn',
    'bento.quality.guide.badge': 'Phụ thuộc nguồn',
    'bento.quality.sd': 'Độ phân giải tiêu chuẩn',
    'bento.quality.sd.note': 'Có thể khả dụng',
    'bento.quality.hd': 'HD / 1080p',
    'bento.quality.hd.note': 'Khi được cung cấp',
    'bento.quality.4k.note': 'Chỉ khi có tùy chọn',
    'bento.quality.disclaimer':
      'Chỉ mang tính minh họa — các thanh này không thể hiện phép đo hoặc cam kết về tính khả dụng.',
    'bento.devices.eyebrow': 'Quy trình quen thuộc',
    'bento.devices.title': 'Dùng MusicalDown trên điện thoại hoặc máy tính',
    'bento.devices.paragraph':
      'Mở trang web bằng trình duyệt tương thích và thực hiện các bước sao chép, dán liên kết.',
    'bento.devices.iphone.desc': 'Kiểm tra mục tải xuống của Safari hoặc ứng dụng Tệp.',
    'bento.devices.android.desc':
      'Kiểm tra danh sách tải xuống của trình duyệt hoặc thư mục Downloads.',
    'bento.devices.desktop.desc':
      'Dùng trình quản lý tải xuống của trình duyệt hoặc thư mục Downloads.',
    'faq.description':
      'Giải đáp nhanh về cách tải video và âm thanh TikTok, định dạng được hỗ trợ và cách khắc phục sự cố thường gặp.',

    'hero.subtitle':
      'Bạn cũng có thể tìm MusicallyDown, Musically Down hoặc Musical Down. Bạn đã đến đúng nơi.',
  },
} as const;

/* =============================================================================
 * "Download TikTok Stories" page content (one entry per enabled locale)
 *
 * Rendered by src/components/marketing/StoriesArticle.astro and used by:
 *   src/pages/download-tiktok-stories.astro        (en)
 *   src/pages/es/download-tiktok-stories.astro     (es)
 *   src/pages/id/download-tiktok-stories.astro     (id)
 *   src/pages/vi/download-tiktok-stories.astro     (vi)
 *
 * Inline markup allowed inside any text string:
 *   **bold**   [label](/privacy)  -> internal link, localized automatically
 *   [label](https://...)          -> external link (opens in a new tab)
 * The record is typed with Lang, so TypeScript errors if a language is added to
 * `languages` above without adding its entry here.
 * ========================================================================== */

export type StoriesBlock =
  | { t: 'p'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'steps'; items: { title: string; text: string }[] }
  | { t: 'ol'; items: { title: string; text: string }[] }
  | { t: 'cards'; cols: 2 | 3; items: { title: string; text: string }[] }
  | { t: 'callout'; text: string };

export interface StoriesPageContent {
  metaTitle: string;
  metaDescription: string;
  heroTitleStart: string;
  heroTitleHighlight: string;
  heroDescription: string;
  byline: string;
  intro: string[];
  tocTitle: string;
  sections: { id: string; title: string; blocks: StoriesBlock[] }[];
  faqTitle: string;
  faq: { question: string; answer: string }[];
  finalTitle: string;
  finalText: string;
  ctaLabel: string;
  moreText: string;
}

const p = (text: string): StoriesBlock => ({ t: 'p', text });
const h3 = (text: string): StoriesBlock => ({ t: 'h3', text });
const ul = (...items: string[]): StoriesBlock => ({ t: 'ul', items });
const steps = (...items: [string, string][]): StoriesBlock => ({
  t: 'steps',
  items: items.map(([title, text]) => ({ title, text })),
});
const ol = (...items: [string, string][]): StoriesBlock => ({
  t: 'ol',
  items: items.map(([title, text]) => ({ title, text })),
});
const cards = (cols: 2 | 3, ...items: [string, string][]): StoriesBlock => ({
  t: 'cards',
  cols,
  items: items.map(([title, text]) => ({ title, text })),
});
const callout = (text: string): StoriesBlock => ({ t: 'callout', text });

export const STORIES_PAGE: Record<Lang, StoriesPageContent> = {
  /* ------------------------------------------------------------------ EN */
  en: {
    metaTitle: 'TikTok Story Viewer & Downloader – Free, No Watermark',
    metaDescription:
      'View public TikTok stories anonymously and download TikTok Story in HD with no watermark. No login, no app. Paste a story link and save it.',
    heroTitleStart: 'TikTok Story Viewer &',
    heroTitleHighlight: 'Downloader',
    heroDescription:
      'Paste a public TikTok story link download TikTok Story in HD without a watermark. No app, no login, Free.',
    byline: 'Oct 24, 2026 · @Baloch · Last updated: Oct 24, 2026',
    intro: [
      'An online TikTok story viewer and downloader gets around all three annoyances from an ordinary browser tab. You paste a story link, the public story loads, and you either watch it there or save it as an MP4, JPG or PNG file. There’s no app to install, no login and no fee.',
      'A TikTok story disappears after 24 hours, and the app gives you very little control over what happens in that window. You can watch it, but only inside TikTok. If you’re logged in, the creator may see your name on the viewer list. And if you hit save, the clip comes out with a TikTok logo and a username stamped across it.',
      
    ],
    tocTitle: 'In this guide',
    sections: [
      {
        id: 'what-is',
        title: 'What Is a TikTok Story Viewer and Downloader?',
        blocks: [
          p('It’s a web tool that fetches a public TikTok story and lets you watch or save it outside the app. It only reads what any visitor could already see on a public account, which is also why it can’t open private profiles.'),
          p('People look for one for a handful of very ordinary reasons:'),
          ul(
            'Stories expire after 24 hours, so anything worth keeping has to be saved quickly.',
            'Watching inside the app while signed in can put your name on the creator’s viewer list.',
            'TikTok’s own save option adds a logo and a username to the video.',
            'Plenty of people don’t have a TikTok account, or don’t want one just to look at a story.',
          ),
          p('MusicallyDown was built around exactly those problems.'),
        ],
      },
      {
        id: 'how-to',
        title: 'How to Download TikTok Stories in Three Steps',
        blocks: [
          p('The whole process takes under a minute, and it’s the same on every device.'),
          steps(
            ['Copy the story link.', 'In TikTok, open the story and copy its link. Make sure the account is public and that you copy the story itself, not a regular video.'],
            ['Paste it and press Download.', 'Paste the link into the box at the top of this page and submit. Wait a few seconds. If nothing appears, see the troubleshooting section below.'],
            ['Watch or save.', 'Play the story in your browser, or use the download button. Videos arrive as MP4 and photos as JPG or PNG, and you can pick the no-watermark option.'],
          ),
        ],
      },
      {
        id: 'why',
        title: 'Why Use an Online TikTok Story Viewer and Downloader?',
        blocks: [
          h3('View TikTok stories anonymously'),
          p('TikTok can show a creator who has watched their story, so watching while logged in may put your name on that list. This tool loads public story content outside the TikTok app, so your own account isn’t used to view it and shouldn’t appear as a viewer. You can also check TikTok’s own [support center](https://support.tiktok.com) for its current rules on story views.'),
          h3('Download TikTok stories without a watermark'),
          p('The in-app save button burns the TikTok logo and the creator’s username into the file. This tool fetches the story file from the source instead, so when you choose the no-watermark option, nothing is added on top.'),
          h3('Save stories in HD, in their original quality'),
          p('The tool aims to hand over the file without extra compression or re-encoding. The result still depends on the upload: a story shot in HD saves in HD, while a low-resolution one can’t be improved after the fact.'),
          h3('Use it online, with no account and no installation'),
          p('A TikTok story viewer online needs nothing but a browser. Open the site, paste a link, and start. It works on Android, iPhone, Windows, Mac and tablets.'),
          h3('Searches stay private'),
          p('Check the [privacy policy](/privacy) for exactly what is and isn’t logged. As with any online tool, read it yourself before relying on it.'),
        ],
      },
      {
        id: 'uses',
        title: 'What You Can Do With It',
        blocks: [
          ul(
            'Watch any public TikTok story in your browser, no sign-in needed.',
            'Save stories you like before the 24-hour clock runs out.',
            'Back up your own stories as standard MP4 files.',
            'Check a creator’s stories without opening TikTok.',
          ),
        ],
      },
      {
        id: 'who',
        title: 'Who Uses a TikTok Story Viewer?',
        blocks: [
          cards(
            3,
            ['Creators & social managers', 'Keep an eye on what rivals, brands and influencers in your niche are posting, without your own account showing up as a viewer.'],
            ['Marketers & brand teams', 'Track public accounts for competitor analysis or campaign research without a spare TikTok account just for that job.'],
            ['Everyday viewers', 'Spot a tutorial, product drop or post from a favourite creator and save it in seconds, long before it expires.'],
          ),
        ],
      },
      {
        id: 'devices',
        title: 'TikTok Story Viewer and Downloader for iPhone, Android, PC and Mac',
        blocks: [
          p('A browser is all you need. There’s no APK to hunt down, no extension to add and no app to keep updated.'),
          cards(
            2,
            ['iPhone', 'Open the site in Safari, paste the story link, and it loads on the page. Saved files usually land in the Files app or your Downloads list, depending on your iOS version and browser settings.'],
            ['Android', 'Use Chrome, Firefox or whichever browser you already have. No APK and no side-loading. After downloading, look in your browser’s Downloads section or your file manager.'],
            ['PC (Windows)', 'Open the site in Chrome or Edge. Viewing and downloading happen on the same page, and files go to your Downloads folder unless you’ve chosen another location.'],
            ['Mac', 'Safari and Chrome both work. Paste the link, open the story and save it straight to your Mac. The process is identical to Windows.'],
          ),
          p('Whatever the device, you need an internet connection to fetch a story; downloaded files can then be opened offline in any media or image app.'),
        ],
      },
      {
        id: 'troubleshooting',
        title: 'TikTok Story Not Loading? Troubleshooting',
        blocks: [
          p('No downloader is magic. If a result comes back empty or a download fails, work through these causes in order:'),
          ol(
            ['The link is wrong.', 'Check for missing characters. Copying it straight from the app is the safest fix.'],
            ['The account is private.', 'Only public stories are reachable. No tool can legitimately get around TikTok’s private-account restrictions.'],
            ['The story has expired.', 'Stories vanish after 24 hours, and once one is gone it can’t be fetched.'],
            ['You pasted the wrong kind of link.', 'A regular TikTok video URL isn’t a story link and may not be recognised. Copy the link to the story itself.'],
            ['The connection is unstable.', 'Refresh the page, check your internet, wait a moment and try again.'],
            ['The browser blocked the download.', 'Check your browser’s download permissions and your Downloads folder. Don’t disable security protections or install unknown files to force a download.'],
          ),
          p('If it still fails, try a different browser, or confirm the story is still visible on the original profile.'),
        ],
      },
      {
        id: 'responsible',
        title: 'Limits and Responsible Use',
        blocks: [
          ul(
            '**Private accounts stay private.** Public stories only.',
            '**Quality is capped by the upload.** The tool doesn’t upscale anything.',
            '**Availability can change.** The tool depends on TikTok, so results can vary if TikTok changes how stories are served.',
          ),
          callout('Stories belong to the people who made them. Saving a clip for personal reference, a backup of your own posts or competitor research is one thing; reposting someone else’s content without asking is another. Never enter your TikTok password or verification codes into any downloader, and avoid suspicious pop-ups or unexpected downloads. Read the [terms of service](/terms), and keep in mind that this site isn’t affiliated with TikTok or ByteDance.'),
        ],
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { question: 'Will the account owner know I viewed their story?', answer: 'No, it shouldn’t. The tool reads public story content outside the TikTok app, so your account isn’t used to view the story and shouldn’t appear on the creator’s viewer list.' },
      { question: 'Can I download TikTok stories without a watermark?', answer: 'Yes. The story file is fetched at the source rather than through TikTok’s save button, so no logo is added when you choose the no-watermark option. A watermark-free file still doesn’t give you the right to repost it.' },
      { question: 'What file formats do the downloads use?', answer: 'Video stories save as MP4, which plays on practically any phone, tablet or computer. Photo stories save as JPG or PNG, depending on the original.' },
      { question: 'Can I view stories from a private account?', answer: 'No. Private accounts share content with approved followers only, and this tool works with public accounts alone.' },
      { question: 'Do I need a TikTok account?', answer: 'No. Paste a story link and it loads without any login.' },
      { question: 'Is it free?', answer: 'Yes, it’s free with no sign-up. Check the site for any changes.' },
      { question: 'Why is nothing loading after I paste a link?', answer: 'Most often the link is wrong, the account is private, or the story has expired. The troubleshooting section above lists every common cause.' },
      { question: 'Does it work on mobile browsers?', answer: 'Yes. It runs in any standard browser on Android and iPhone and behaves the same as on a laptop or desktop.' },
      { question: 'Can I save someone else’s TikTok story?', answer: 'Technically you may be able to, but being able to and being allowed to are different things. Keep saved clips for personal reference, and ask the creator before reposting or using their content elsewhere.' },
      { question: 'Can I download my own TikTok stories?', answer: 'Yes, as long as the story is still live and public. For anything important, also keep the original files or use the save options in your own TikTok account, rather than relying on a single third-party site as your only backup.' },
      { question: 'Is it safe to use an online TikTok story downloader?', answer: 'It’s safe when you use common sense. Never share passwords or codes, read the privacy policy, and ignore any prompt to install an app or extension. No online service can promise perfect anonymity, so stick to public content.' },
    ],
    finalTitle: 'Final Thoughts',
    finalText:
      'Stories are built to be temporary, but your need to watch or keep them often isn’t. A browser-based viewer and downloader lets you check public stories without logging in, keeps your account off the viewer list, and saves clean files without a logo on top. Just remember its limits: public accounts only, and quality that depends on the original upload.',
    ctaLabel: 'Paste a story link and try it',
    moreText: 'Need more than stories? Try the [TikTok video downloader](/) or [TikTok to MP3](/tiktok-mp3).',
  },

  /* ------------------------------------------------------------------ ES */
  es: {
    metaTitle: 'Descargar Historias de TikTok – Gratis | MusicallyDown',
    metaDescription:
      'Mira historias públicas de TikTok de forma anónima y descárgalas en HD sin marca de agua. Sin registro ni app. Pega el enlace de la historia y guárdala.',
    heroTitleStart: 'Visor de historias de TikTok y',
    heroTitleHighlight: 'descargador',
    heroDescription:
      'Pega el enlace de una historia pública, míralo en tu navegador y guárdalo sin marca de agua. Sin app, sin registro y sin coste.',
    byline: '24 oct 2026 · @Baloch · Última actualización: 24 oct 2026',
    intro: [
      'Una historia de TikTok desaparece a las 24 horas y la app te da muy poco control sobre lo que pasa en ese tiempo. Puedes verla, pero solo dentro de TikTok. Si has iniciado sesión, el creador puede ver tu nombre en la lista de espectadores. Y si pulsas guardar, el clip sale con el logo de TikTok y un nombre de usuario encima.',
      'Un visor y descargador de historias de TikTok online resuelve las tres molestias desde una pestaña normal del navegador. Pegas el enlace de una historia, se carga la historia pública y puedes verla allí mismo o guardarla como archivo MP4, JPG o PNG. No hay que instalar nada, ni iniciar sesión, ni pagar.',
      'Esta guía explica cómo funciona la herramienta, los pasos exactos, quién la usa, cómo solucionar una historia que no carga y cuáles son sus límites.',
    ],
    tocTitle: 'En esta guía',
    sections: [
      {
        id: 'que-es',
        title: '¿Qué es un visor y descargador de historias de TikTok?',
        blocks: [
          p('Es una herramienta web que obtiene una historia pública de TikTok y te permite verla o guardarla fuera de la app. Solo lee lo que cualquier visitante ya podría ver en una cuenta pública, y por eso no puede abrir perfiles privados.'),
          p('La gente la busca por motivos muy corrientes:'),
          ul(
            'Las historias caducan a las 24 horas, así que lo que merece la pena conservar hay que guardarlo rápido.',
            'Verlas dentro de la app con la sesión iniciada puede poner tu nombre en la lista de espectadores del creador.',
            'La opción de guardar de TikTok añade un logo y un nombre de usuario al vídeo.',
            'Mucha gente no tiene cuenta de TikTok, o no quiere crear una solo para ver una historia.',
          ),
          p('MusicallyDown nació precisamente para resolver esos problemas.'),
        ],
      },
      {
        id: 'como-descargar',
        title: 'Cómo descargar historias de TikTok en tres pasos',
        blocks: [
          p('Todo el proceso lleva menos de un minuto y es igual en cualquier dispositivo.'),
          steps(
            ['Copia el enlace de la historia.', 'En TikTok, abre la historia y copia su enlace. Comprueba que la cuenta sea pública y que copias la historia en sí, no un vídeo normal.'],
            ['Pégalo y pulsa Descargar.', 'Pega el enlace en el cuadro de la parte superior de esta página y envíalo. Espera unos segundos. Si no aparece nada, consulta la sección de solución de problemas.'],
            ['Mírala o guárdala.', 'Reproduce la historia en el navegador o usa el botón de descarga. Los vídeos llegan como MP4 y las fotos como JPG o PNG, y puedes elegir la opción sin marca de agua.'],
          ),
        ],
      },
      {
        id: 'por-que',
        title: '¿Por qué usar un visor y descargador de historias de TikTok online?',
        blocks: [
          h3('Ver historias de TikTok de forma anónima'),
          p('TikTok puede mostrar al creador quién ha visto su historia, así que verla con la sesión iniciada puede poner tu nombre en esa lista. Esta herramienta carga el contenido público fuera de la app de TikTok, por lo que tu cuenta no se usa para verlo y no debería aparecer como espectador. También puedes consultar el [centro de ayuda](https://support.tiktok.com) de TikTok para ver sus normas actuales sobre las visualizaciones de historias.'),
          h3('Descargar historias de TikTok sin marca de agua'),
          p('El botón de guardar de la app incrusta el logo de TikTok y el nombre del creador en el archivo. Esta herramienta obtiene el archivo de la historia desde el origen, así que al elegir la opción sin marca de agua no se añade nada encima.'),
          h3('Guardar historias en HD y en su calidad original'),
          p('La herramienta intenta entregar el archivo sin compresión ni recodificación adicionales. El resultado depende igualmente de la subida: una historia grabada en HD se guarda en HD, y una de baja resolución no se puede mejorar después.'),
          h3('Úsalo online, sin cuenta y sin instalar nada'),
          p('Un visor de historias de TikTok online solo necesita un navegador. Abre el sitio, pega un enlace y empieza. Funciona en Android, iPhone, Windows, Mac y tabletas.'),
          h3('Tus búsquedas siguen siendo privadas'),
          p('Consulta la [política de privacidad](/privacy) para saber exactamente qué se registra y qué no. Como con cualquier herramienta online, léela tú mismo antes de fiarte.'),
        ],
      },
      {
        id: 'que-puedes-hacer',
        title: 'Qué puedes hacer con ella',
        blocks: [
          ul(
            'Ver cualquier historia pública de TikTok en el navegador, sin iniciar sesión.',
            'Guardar las historias que te gusten antes de que se acabe el plazo de 24 horas.',
            'Hacer copia de tus propias historias como archivos MP4 estándar.',
            'Consultar las historias de un creador sin abrir TikTok.',
          ),
        ],
      },
      {
        id: 'quien-lo-usa',
        title: '¿Quién usa un visor de historias de TikTok?',
        blocks: [
          cards(
            3,
            ['Creadores y community managers', 'Siguen lo que publican competidores, marcas e influencers de su nicho sin que su propia cuenta aparezca como espectador.'],
            ['Marketing y equipos de marca', 'Vigilan cuentas públicas para analizar a la competencia o investigar campañas sin necesitar una cuenta de TikTok de repuesto.'],
            ['Usuarios habituales', 'Ven un tutorial, un lanzamiento de producto o una publicación de su creador favorito y lo guardan en segundos, mucho antes de que caduque.'],
          ),
        ],
      },
      {
        id: 'dispositivos',
        title: 'Visor y descargador de historias de TikTok para iPhone, Android, PC y Mac',
        blocks: [
          p('Solo necesitas un navegador. No hay que buscar ningún APK, ni añadir extensiones, ni mantener una app actualizada.'),
          cards(
            2,
            ['iPhone', 'Abre el sitio en Safari, pega el enlace de la historia y se carga en la página. Los archivos guardados suelen ir a la app Archivos o a la lista de descargas, según tu versión de iOS y los ajustes del navegador.'],
            ['Android', 'Usa Chrome, Firefox o el navegador que ya tengas. Sin APK ni instalaciones externas. Tras descargar, mira en la sección de descargas del navegador o en tu gestor de archivos.'],
            ['PC (Windows)', 'Abre el sitio en Chrome o Edge. Ver y descargar se hace en la misma página, y los archivos van a la carpeta Descargas salvo que elijas otra ubicación.'],
            ['Mac', 'Safari y Chrome funcionan bien. Pega el enlace, abre la historia y guárdala directamente en tu Mac. El proceso es idéntico al de Windows.'],
          ),
          p('Sea cual sea el dispositivo, necesitas conexión a internet para obtener una historia; después, los archivos descargados se pueden abrir sin conexión en cualquier app de vídeo o imagen.'),
        ],
      },
      {
        id: 'solucion-de-problemas',
        title: '¿La historia de TikTok no carga? Solución de problemas',
        blocks: [
          p('Ningún descargador hace magia. Si el resultado sale vacío o falla la descarga, repasa estas causas en orden:'),
          ol(
            ['El enlace es incorrecto.', 'Comprueba que no falten caracteres. Copiarlo directamente desde la app es la solución más segura.'],
            ['La cuenta es privada.', 'Solo se puede acceder a historias públicas. Ninguna herramienta puede saltarse legítimamente las restricciones de las cuentas privadas de TikTok.'],
            ['La historia ha caducado.', 'Las historias desaparecen a las 24 horas y, una vez eliminadas, no se pueden obtener.'],
            ['Has pegado el tipo de enlace equivocado.', 'La URL de un vídeo normal de TikTok no es un enlace de historia y puede que no se reconozca. Copia el enlace de la propia historia.'],
            ['La conexión es inestable.', 'Actualiza la página, revisa tu conexión a internet, espera un momento y vuelve a intentarlo.'],
            ['El navegador bloqueó la descarga.', 'Revisa los permisos de descarga del navegador y tu carpeta de Descargas. No desactives protecciones de seguridad ni instales archivos desconocidos para forzar una descarga.'],
          ),
          p('Si sigue fallando, prueba con otro navegador o confirma que la historia sigue visible en el perfil original.'),
        ],
      },
      {
        id: 'limites',
        title: 'Límites y uso responsable',
        blocks: [
          ul(
            '**Las cuentas privadas siguen siendo privadas.** Solo historias públicas.',
            '**La calidad depende de la subida.** La herramienta no aumenta la resolución de nada.',
            '**La disponibilidad puede cambiar.** La herramienta depende de TikTok, así que los resultados pueden variar si TikTok cambia la forma de servir las historias.',
          ),
          callout('Las historias pertenecen a quienes las crearon. Guardar un clip como referencia personal, como copia de tus propias publicaciones o para investigar a la competencia es una cosa; volver a publicar contenido ajeno sin permiso es otra. Nunca introduzcas tu contraseña de TikTok ni códigos de verificación en ningún descargador, y evita ventanas emergentes sospechosas o descargas inesperadas. Lee las [condiciones del servicio](/terms) y ten en cuenta que este sitio no está afiliado a TikTok ni a ByteDance.'),
        ],
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { question: '¿Sabrá el dueño de la cuenta que he visto su historia?', answer: 'No, no debería. La herramienta lee el contenido público fuera de la app de TikTok, así que tu cuenta no se usa para ver la historia y no debería aparecer en la lista de espectadores del creador.' },
      { question: '¿Puedo descargar historias de TikTok sin marca de agua?', answer: 'Sí. El archivo de la historia se obtiene en el origen y no mediante el botón de guardar de TikTok, así que no se añade ningún logo al elegir la opción sin marca de agua. Un archivo sin marca de agua tampoco te da derecho a volver a publicarlo.' },
      { question: '¿Qué formatos de archivo usan las descargas?', answer: 'Las historias en vídeo se guardan como MP4, que se reproduce en prácticamente cualquier móvil, tableta u ordenador. Las historias de foto se guardan como JPG o PNG, según el original.' },
      { question: '¿Puedo ver historias de una cuenta privada?', answer: 'No. Las cuentas privadas comparten su contenido solo con seguidores aprobados, y esta herramienta funciona únicamente con cuentas públicas.' },
      { question: '¿Necesito una cuenta de TikTok?', answer: 'No. Pega el enlace de una historia y se carga sin iniciar sesión.' },
      { question: '¿Es gratis?', answer: 'Sí, es gratis y sin registro. Consulta el sitio por si hubiera cambios.' },
      { question: '¿Por qué no carga nada después de pegar un enlace?', answer: 'Lo más habitual es que el enlace sea incorrecto, la cuenta sea privada o la historia haya caducado. La sección de solución de problemas de arriba recoge todas las causas habituales.' },
      { question: '¿Funciona en navegadores móviles?', answer: 'Sí. Funciona en cualquier navegador estándar de Android e iPhone y se comporta igual que en un portátil o un ordenador de sobremesa.' },
      { question: '¿Puedo guardar la historia de TikTok de otra persona?', answer: 'Técnicamente quizá puedas, pero poder y tener permiso son cosas distintas. Usa los clips guardados como referencia personal y pregunta al creador antes de volver a publicar o usar su contenido en otro sitio.' },
      { question: '¿Puedo descargar mis propias historias de TikTok?', answer: 'Sí, siempre que la historia siga activa y sea pública. Para lo importante, conserva también los archivos originales o usa las opciones de guardado de tu propia cuenta de TikTok, en lugar de depender de un único sitio de terceros como copia de seguridad.' },
      { question: '¿Es seguro usar un descargador de historias de TikTok online?', answer: 'Lo es si usas el sentido común. No compartas contraseñas ni códigos, lee la política de privacidad e ignora cualquier petición de instalar una app o extensión. Ningún servicio online puede prometer un anonimato perfecto, así que limítate a contenido público.' },
    ],
    finalTitle: 'Reflexión final',
    finalText:
      'Las historias están hechas para ser temporales, pero tu necesidad de verlas o conservarlas muchas veces no lo es. Un visor y descargador en el navegador te permite consultar historias públicas sin iniciar sesión, mantiene tu cuenta fuera de la lista de espectadores y guarda archivos limpios sin logo encima. Solo recuerda sus límites: únicamente cuentas públicas y una calidad que depende de la subida original.',
    ctaLabel: 'Pega un enlace de historia y pruébalo',
    moreText: '¿Necesitas algo más que historias? Prueba el [descargador de vídeos de TikTok](/) o [TikTok a MP3](/tiktok-mp3).',
  },

  /* ------------------------------------------------------------------ ID */
  id: {
    metaTitle: 'Pengunduh Story TikTok Tanpa Watermark | MusicallyDown',
    metaDescription:
      'Lihat story TikTok publik secara anonim dan unduh dalam HD tanpa watermark. Tanpa login, tanpa aplikasi. Tempel tautan story lalu simpan.',
    heroTitleStart: 'Penampil Story TikTok &',
    heroTitleHighlight: 'Pengunduh',
    heroDescription:
      'Tempel tautan story publik, tonton di browser dan simpan tanpa watermark. Tanpa aplikasi, tanpa login, tanpa biaya.',
    byline: '24 Okt 2026 · @Baloch · Terakhir diperbarui: 24 Okt 2026',
    intro: [
      'Story TikTok menghilang setelah 24 jam, dan aplikasinya hanya memberi sedikit kendali selama waktu itu. Anda bisa menontonnya, tetapi hanya di dalam TikTok. Jika Anda login, kreator mungkin melihat nama Anda di daftar penonton. Dan jika Anda menekan simpan, klipnya keluar dengan logo TikTok dan nama pengguna di atasnya.',
      'Penampil dan pengunduh story TikTok online mengatasi ketiga masalah itu dari tab browser biasa. Anda menempel tautan story, story publik dimuat, lalu Anda bisa menontonnya di sana atau menyimpannya sebagai file MP4, JPG, atau PNG. Tidak perlu memasang aplikasi, tidak perlu login, dan tidak ada biaya.',
      'Panduan ini membahas cara kerja alat ini, langkah-langkah yang tepat, siapa yang menggunakannya, cara memperbaiki story yang tidak termuat, dan di mana batasannya.',
    ],
    tocTitle: 'Dalam panduan ini',
    sections: [
      {
        id: 'apa-itu',
        title: 'Apa Itu Penampil dan Pengunduh Story TikTok?',
        blocks: [
          p('Ini adalah alat web yang mengambil story TikTok publik dan memungkinkan Anda menonton atau menyimpannya di luar aplikasi. Alat ini hanya membaca apa yang bisa dilihat pengunjung mana pun di akun publik, itulah sebabnya alat ini tidak bisa membuka profil privat.'),
          p('Orang mencarinya karena beberapa alasan yang sangat umum:'),
          ul(
            'Story kedaluwarsa setelah 24 jam, jadi apa pun yang layak disimpan harus disimpan dengan cepat.',
            'Menonton di dalam aplikasi saat login bisa menempatkan nama Anda di daftar penonton kreator.',
            'Opsi simpan bawaan TikTok menambahkan logo dan nama pengguna ke video.',
            'Banyak orang tidak punya akun TikTok, atau tidak mau membuatnya hanya untuk melihat sebuah story.',
          ),
          p('MusicallyDown dibuat tepat untuk mengatasi masalah-masalah tersebut.'),
        ],
      },
      {
        id: 'cara-unduh',
        title: 'Cara Mengunduh Story TikTok dalam Tiga Langkah',
        blocks: [
          p('Seluruh prosesnya kurang dari satu menit dan sama di setiap perangkat.'),
          steps(
            ['Salin tautan story.', 'Di TikTok, buka story lalu salin tautannya. Pastikan akunnya publik dan Anda menyalin story itu sendiri, bukan video biasa.'],
            ['Tempel lalu tekan Unduh.', 'Tempel tautan ke kotak di bagian atas halaman ini lalu kirim. Tunggu beberapa detik. Jika tidak ada yang muncul, lihat bagian pemecahan masalah di bawah.'],
            ['Tonton atau simpan.', 'Putar story di browser, atau gunakan tombol unduh. Video diterima sebagai MP4 dan foto sebagai JPG atau PNG, dan Anda bisa memilih opsi tanpa watermark.'],
          ),
        ],
      },
      {
        id: 'mengapa',
        title: 'Mengapa Menggunakan Penampil dan Pengunduh Story TikTok Online?',
        blocks: [
          h3('Lihat story TikTok secara anonim'),
          p('TikTok bisa menunjukkan kepada kreator siapa yang menonton story mereka, jadi menonton saat login bisa menempatkan nama Anda di daftar itu. Alat ini memuat konten story publik di luar aplikasi TikTok, sehingga akun Anda tidak digunakan untuk melihatnya dan seharusnya tidak muncul sebagai penonton. Anda juga bisa memeriksa [pusat bantuan](https://support.tiktok.com) TikTok untuk aturan terbaru tentang tayangan story.'),
          h3('Unduh story TikTok tanpa watermark'),
          p('Tombol simpan di aplikasi menanamkan logo TikTok dan nama pengguna kreator ke dalam file. Alat ini mengambil file story dari sumbernya, jadi saat Anda memilih opsi tanpa watermark, tidak ada yang ditambahkan di atasnya.'),
          h3('Simpan story dalam HD, dengan kualitas aslinya'),
          p('Alat ini berusaha memberikan file tanpa kompresi atau encode ulang tambahan. Hasilnya tetap bergantung pada unggahan: story yang direkam dalam HD tersimpan dalam HD, sedangkan yang beresolusi rendah tidak bisa ditingkatkan setelahnya.'),
          h3('Gunakan online, tanpa akun dan tanpa instalasi'),
          p('Penampil story TikTok online hanya butuh browser. Buka situs, tempel tautan, dan mulai. Berfungsi di Android, iPhone, Windows, Mac, dan tablet.'),
          h3('Pencarian tetap privat'),
          p('Periksa [kebijakan privasi](/privacy) untuk mengetahui persis apa yang dicatat dan tidak dicatat. Seperti alat online lainnya, baca sendiri sebelum mengandalkannya.'),
        ],
      },
      {
        id: 'kegunaan',
        title: 'Yang Bisa Anda Lakukan',
        blocks: [
          ul(
            'Tonton story TikTok publik mana pun di browser, tanpa perlu login.',
            'Simpan story yang Anda suka sebelum batas 24 jam habis.',
            'Cadangkan story Anda sendiri sebagai file MP4 standar.',
            'Lihat story kreator tanpa membuka TikTok.',
          ),
        ],
      },
      {
        id: 'siapa-pengguna',
        title: 'Siapa yang Menggunakan Penampil Story TikTok?',
        blocks: [
          cards(
            3,
            ['Kreator & pengelola media sosial', 'Memantau apa yang diposting pesaing, merek, dan influencer di niche Anda, tanpa akun Anda sendiri muncul sebagai penonton.'],
            ['Pemasar & tim merek', 'Melacak akun publik untuk analisis pesaing atau riset kampanye tanpa perlu akun TikTok cadangan khusus untuk pekerjaan itu.'],
            ['Penonton sehari-hari', 'Menemukan tutorial, peluncuran produk, atau postingan kreator favorit lalu menyimpannya dalam hitungan detik, jauh sebelum kedaluwarsa.'],
          ),
        ],
      },
      {
        id: 'perangkat',
        title: 'Penampil dan Pengunduh Story TikTok untuk iPhone, Android, PC, dan Mac',
        blocks: [
          p('Anda hanya butuh browser. Tidak perlu mencari APK, menambah ekstensi, atau memperbarui aplikasi.'),
          cards(
            2,
            ['iPhone', 'Buka situs di Safari, tempel tautan story, dan story termuat di halaman. File yang disimpan biasanya masuk ke aplikasi File atau daftar Unduhan, tergantung versi iOS dan pengaturan browser Anda.'],
            ['Android', 'Gunakan Chrome, Firefox, atau browser apa pun yang sudah ada. Tanpa APK dan tanpa side-loading. Setelah mengunduh, cek bagian Unduhan di browser atau pengelola file Anda.'],
            ['PC (Windows)', 'Buka situs di Chrome atau Edge. Menonton dan mengunduh dilakukan di halaman yang sama, dan file masuk ke folder Unduhan kecuali Anda memilih lokasi lain.'],
            ['Mac', 'Safari dan Chrome sama-sama berfungsi. Tempel tautan, buka story, dan simpan langsung ke Mac Anda. Prosesnya sama dengan Windows.'],
          ),
          p('Di perangkat apa pun, Anda butuh koneksi internet untuk mengambil story; file yang sudah diunduh kemudian bisa dibuka offline di aplikasi media atau gambar mana pun.'),
        ],
      },
      {
        id: 'pemecahan-masalah',
        title: 'Story TikTok Tidak Termuat? Pemecahan Masalah',
        blocks: [
          p('Tidak ada pengunduh yang ajaib. Jika hasil kosong atau unduhan gagal, periksa penyebab berikut secara berurutan:'),
          ol(
            ['Tautannya salah.', 'Periksa karakter yang hilang. Menyalinnya langsung dari aplikasi adalah perbaikan paling aman.'],
            ['Akunnya privat.', 'Hanya story publik yang bisa dijangkau. Tidak ada alat yang secara sah bisa menembus pembatasan akun privat TikTok.'],
            ['Story sudah kedaluwarsa.', 'Story hilang setelah 24 jam, dan setelah hilang tidak bisa diambil lagi.'],
            ['Anda menempel jenis tautan yang salah.', 'URL video TikTok biasa bukan tautan story dan mungkin tidak dikenali. Salin tautan story itu sendiri.'],
            ['Koneksi tidak stabil.', 'Muat ulang halaman, periksa internet, tunggu sebentar, lalu coba lagi.'],
            ['Browser memblokir unduhan.', 'Periksa izin unduhan browser dan folder Unduhan Anda. Jangan menonaktifkan perlindungan keamanan atau memasang file tidak dikenal untuk memaksa unduhan.'],
          ),
          p('Jika masih gagal, coba browser lain, atau pastikan story masih terlihat di profil aslinya.'),
        ],
      },
      {
        id: 'batasan',
        title: 'Batasan dan Penggunaan yang Bertanggung Jawab',
        blocks: [
          ul(
            '**Akun privat tetap privat.** Hanya story publik.',
            '**Kualitas dibatasi oleh unggahan.** Alat ini tidak meningkatkan resolusi apa pun.',
            '**Ketersediaan bisa berubah.** Alat ini bergantung pada TikTok, jadi hasil bisa bervariasi jika TikTok mengubah cara menyajikan story.',
          ),
          callout('Story adalah milik orang yang membuatnya. Menyimpan klip untuk referensi pribadi, cadangan postingan Anda sendiri, atau riset pesaing adalah satu hal; memposting ulang konten orang lain tanpa izin adalah hal lain. Jangan pernah memasukkan kata sandi TikTok atau kode verifikasi ke pengunduh mana pun, dan hindari pop-up mencurigakan atau unduhan tak terduga. Baca [ketentuan layanan](/terms), dan ingat bahwa situs ini tidak berafiliasi dengan TikTok atau ByteDance.'),
        ],
      },
    ],
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faq: [
      { question: 'Apakah pemilik akun akan tahu saya melihat story mereka?', answer: 'Seharusnya tidak. Alat ini membaca konten story publik di luar aplikasi TikTok, jadi akun Anda tidak digunakan untuk melihat story dan seharusnya tidak muncul di daftar penonton kreator.' },
      { question: 'Bisakah saya mengunduh story TikTok tanpa watermark?', answer: 'Bisa. File story diambil dari sumbernya, bukan lewat tombol simpan TikTok, jadi tidak ada logo yang ditambahkan saat Anda memilih opsi tanpa watermark. File tanpa watermark tetap tidak memberi Anda hak untuk memposting ulang.' },
      { question: 'Format file apa yang digunakan untuk unduhan?', answer: 'Story video disimpan sebagai MP4, yang bisa diputar di hampir semua ponsel, tablet, atau komputer. Story foto disimpan sebagai JPG atau PNG, tergantung aslinya.' },
      { question: 'Bisakah saya melihat story dari akun privat?', answer: 'Tidak. Akun privat hanya membagikan konten kepada pengikut yang disetujui, dan alat ini hanya bekerja dengan akun publik.' },
      { question: 'Apakah saya perlu akun TikTok?', answer: 'Tidak. Tempel tautan story dan story termuat tanpa login apa pun.' },
      { question: 'Apakah gratis?', answer: 'Ya, gratis tanpa pendaftaran. Periksa situs jika ada perubahan.' },
      { question: 'Mengapa tidak ada yang termuat setelah saya menempel tautan?', answer: 'Paling sering tautannya salah, akunnya privat, atau story sudah kedaluwarsa. Bagian pemecahan masalah di atas memuat semua penyebab umum.' },
      { question: 'Apakah berfungsi di browser ponsel?', answer: 'Ya. Berjalan di browser standar mana pun di Android dan iPhone dan berperilaku sama seperti di laptop atau desktop.' },
      { question: 'Bisakah saya menyimpan story TikTok milik orang lain?', answer: 'Secara teknis mungkin bisa, tetapi bisa dan diizinkan adalah dua hal berbeda. Gunakan klip yang disimpan untuk referensi pribadi, dan minta izin kreator sebelum memposting ulang atau menggunakan kontennya di tempat lain.' },
      { question: 'Bisakah saya mengunduh story TikTok saya sendiri?', answer: 'Bisa, selama story masih aktif dan publik. Untuk hal penting, simpan juga file aslinya atau gunakan opsi simpan di akun TikTok Anda sendiri, daripada mengandalkan satu situs pihak ketiga sebagai satu-satunya cadangan.' },
      { question: 'Apakah aman menggunakan pengunduh story TikTok online?', answer: 'Aman jika Anda menggunakan akal sehat. Jangan bagikan kata sandi atau kode, baca kebijakan privasi, dan abaikan permintaan untuk memasang aplikasi atau ekstensi. Tidak ada layanan online yang bisa menjanjikan anonimitas sempurna, jadi tetaplah pada konten publik.' },
    ],
    finalTitle: 'Penutup',
    finalText:
      'Story dibuat untuk bersifat sementara, tetapi kebutuhan Anda untuk menonton atau menyimpannya sering kali tidak. Penampil dan pengunduh berbasis browser memungkinkan Anda melihat story publik tanpa login, menjaga akun Anda tetap di luar daftar penonton, dan menyimpan file bersih tanpa logo di atasnya. Ingat saja batasannya: hanya akun publik, dan kualitas yang bergantung pada unggahan asli.',
    ctaLabel: 'Tempel tautan story dan coba',
    moreText: 'Butuh lebih dari sekadar story? Coba [pengunduh video TikTok](/) atau [TikTok ke MP3](/tiktok-mp3).',
  },

  /* ------------------------------------------------------------------ VI */
  vi: {
    metaTitle: 'Xem & Tải TikTok Story – Miễn phí, không watermark',
    metaDescription:
      'Xem TikTok story công khai ẩn danh và tải về chất lượng HD không watermark. Không cần đăng nhập, không cần ứng dụng. Dán liên kết story rồi lưu.',
    heroTitleStart: 'Xem & Tải TikTok Story,',
    heroTitleHighlight: 'không watermark',
    heroDescription:
      'Dán liên kết story công khai, xem ngay trên trình duyệt và lưu về không watermark. Không ứng dụng, không đăng nhập, không mất phí.',
    byline: '24/10/2026 · @Baloch · Cập nhật lần cuối: 24/10/2026',
    intro: [
      'TikTok story biến mất sau 24 giờ, và ứng dụng cho bạn rất ít quyền kiểm soát trong khoảng thời gian đó. Bạn có thể xem, nhưng chỉ trong TikTok. Nếu đã đăng nhập, người tạo có thể thấy tên bạn trong danh sách người xem. Và nếu bấm lưu, đoạn clip sẽ có logo TikTok và tên người dùng đè lên.',
      'Công cụ xem và tải TikTok story trực tuyến giải quyết cả ba phiền toái đó ngay từ một tab trình duyệt bình thường. Bạn dán liên kết story, story công khai được tải lên, rồi xem ngay tại đó hoặc lưu thành tệp MP4, JPG hoặc PNG. Không cần cài ứng dụng, không cần đăng nhập và không mất phí.',
      'Hướng dẫn này giải thích cách công cụ hoạt động, các bước cụ thể, ai thường dùng, cách xử lý khi story không tải được và những giới hạn của nó.',
    ],
    tocTitle: 'Trong hướng dẫn này',
    sections: [
      {
        id: 'la-gi',
        title: 'Công cụ xem và tải TikTok story là gì?',
        blocks: [
          p('Đây là công cụ web lấy TikTok story công khai và cho phép bạn xem hoặc lưu ngoài ứng dụng. Nó chỉ đọc những gì bất kỳ khách truy cập nào cũng đã có thể thấy trên tài khoản công khai, đó cũng là lý do nó không thể mở hồ sơ riêng tư.'),
          p('Mọi người tìm đến công cụ này vì vài lý do rất bình thường:'),
          ul(
            'Story hết hạn sau 24 giờ, nên bất cứ thứ gì đáng giữ lại đều phải lưu nhanh.',
            'Xem trong ứng dụng khi đã đăng nhập có thể khiến tên bạn xuất hiện trong danh sách người xem của người tạo.',
            'Tùy chọn lưu của TikTok thêm logo và tên người dùng vào video.',
            'Nhiều người không có tài khoản TikTok, hoặc không muốn tạo chỉ để xem một story.',
          ),
          p('MusicallyDown được tạo ra để giải quyết đúng những vấn đề đó.'),
        ],
      },
      {
        id: 'cach-tai',
        title: 'Cách tải TikTok story trong ba bước',
        blocks: [
          p('Toàn bộ quá trình mất chưa đến một phút và giống nhau trên mọi thiết bị.'),
          steps(
            ['Sao chép liên kết story.', 'Trong TikTok, mở story rồi sao chép liên kết. Hãy chắc chắn tài khoản ở chế độ công khai và bạn sao chép chính story, không phải video thông thường.'],
            ['Dán rồi bấm Tải xuống.', 'Dán liên kết vào ô ở đầu trang này rồi gửi. Chờ vài giây. Nếu không có gì hiện ra, xem phần khắc phục sự cố bên dưới.'],
            ['Xem hoặc lưu.', 'Phát story ngay trên trình duyệt, hoặc dùng nút tải xuống. Video được tải về dạng MP4 và ảnh dạng JPG hoặc PNG, và bạn có thể chọn tùy chọn không watermark.'],
          ),
        ],
      },
      {
        id: 'tai-sao',
        title: 'Vì sao nên dùng công cụ xem và tải TikTok story trực tuyến?',
        blocks: [
          h3('Xem TikTok story ẩn danh'),
          p('TikTok có thể cho người tạo biết ai đã xem story của họ, nên xem khi đã đăng nhập có thể đưa tên bạn vào danh sách đó. Công cụ này tải nội dung story công khai bên ngoài ứng dụng TikTok, nên tài khoản của bạn không được dùng để xem và không nên xuất hiện như một người xem. Bạn cũng có thể xem [trung tâm trợ giúp](https://support.tiktok.com) của TikTok để biết quy định hiện hành về lượt xem story.'),
          h3('Tải TikTok story không watermark'),
          p('Nút lưu trong ứng dụng gắn cứng logo TikTok và tên người tạo vào tệp. Công cụ này lấy tệp story từ nguồn, nên khi bạn chọn tùy chọn không watermark, sẽ không có gì được thêm lên trên.'),
          h3('Lưu story chất lượng HD, giữ nguyên bản gốc'),
          p('Công cụ cố gắng trả tệp mà không nén hay mã hóa lại thêm. Kết quả vẫn phụ thuộc vào bản tải lên: story quay bằng HD sẽ lưu ở HD, còn story độ phân giải thấp thì không thể cải thiện sau đó.'),
          h3('Dùng trực tuyến, không cần tài khoản, không cần cài đặt'),
          p('Công cụ xem TikTok story trực tuyến chỉ cần trình duyệt. Mở trang web, dán liên kết và bắt đầu. Hoạt động trên Android, iPhone, Windows, Mac và máy tính bảng.'),
          h3('Tìm kiếm của bạn vẫn riêng tư'),
          p('Hãy xem [chính sách quyền riêng tư](/privacy) để biết chính xác điều gì được và không được ghi lại. Như với mọi công cụ trực tuyến, hãy tự đọc trước khi tin tưởng.'),
        ],
      },
      {
        id: 'lam-duoc-gi',
        title: 'Bạn có thể làm gì với nó',
        blocks: [
          ul(
            'Xem bất kỳ TikTok story công khai nào trên trình duyệt, không cần đăng nhập.',
            'Lưu những story bạn thích trước khi hết 24 giờ.',
            'Sao lưu story của chính bạn thành tệp MP4 chuẩn.',
            'Xem story của một người tạo nội dung mà không cần mở TikTok.',
          ),
        ],
      },
      {
        id: 'ai-dung',
        title: 'Ai dùng công cụ xem TikTok story?',
        blocks: [
          cards(
            3,
            ['Người sáng tạo & quản lý mạng xã hội', 'Theo dõi đối thủ, thương hiệu và influencer trong lĩnh vực của bạn đăng gì mà tài khoản của bạn không hiện là người xem.'],
            ['Marketer & đội ngũ thương hiệu', 'Theo dõi tài khoản công khai để phân tích đối thủ hoặc nghiên cứu chiến dịch mà không cần tài khoản TikTok phụ chỉ cho việc đó.'],
            ['Người xem thông thường', 'Gặp một video hướng dẫn, đợt ra mắt sản phẩm hoặc bài đăng của người tạo yêu thích và lưu lại trong vài giây, rất lâu trước khi hết hạn.'],
          ),
        ],
      },
      {
        id: 'thiet-bi',
        title: 'Xem và tải TikTok story trên iPhone, Android, PC và Mac',
        blocks: [
          p('Bạn chỉ cần một trình duyệt. Không phải tìm APK, không cần thêm tiện ích mở rộng và không cần cập nhật ứng dụng.'),
          cards(
            2,
            ['iPhone', 'Mở trang web bằng Safari, dán liên kết story và story sẽ tải ngay trên trang. Tệp đã lưu thường nằm trong ứng dụng Tệp hoặc danh sách Tải xuống, tùy phiên bản iOS và cài đặt trình duyệt.'],
            ['Android', 'Dùng Chrome, Firefox hoặc trình duyệt bạn đang có. Không cần APK, không cần cài đặt ngoài. Sau khi tải, hãy xem mục Tải xuống của trình duyệt hoặc trình quản lý tệp.'],
            ['PC (Windows)', 'Mở trang web bằng Chrome hoặc Edge. Xem và tải đều thực hiện trên cùng một trang, tệp được lưu vào thư mục Downloads trừ khi bạn chọn vị trí khác.'],
            ['Mac', 'Safari và Chrome đều dùng được. Dán liên kết, mở story và lưu thẳng vào máy Mac. Quy trình giống hệt Windows.'],
          ),
          p('Dù dùng thiết bị nào, bạn cũng cần kết nối internet để lấy story; sau đó các tệp đã tải có thể mở ngoại tuyến bằng bất kỳ ứng dụng video hoặc ảnh nào.'),
        ],
      },
      {
        id: 'khac-phuc-su-co',
        title: 'TikTok story không tải được? Khắc phục sự cố',
        blocks: [
          p('Không có công cụ tải nào là phép màu. Nếu kết quả trống hoặc tải thất bại, hãy kiểm tra lần lượt các nguyên nhân sau:'),
          ol(
            ['Liên kết bị sai.', 'Kiểm tra xem có thiếu ký tự không. Sao chép thẳng từ ứng dụng là cách khắc phục an toàn nhất.'],
            ['Tài khoản ở chế độ riêng tư.', 'Chỉ truy cập được story công khai. Không công cụ nào có thể vượt qua hợp pháp các giới hạn của tài khoản riêng tư trên TikTok.'],
            ['Story đã hết hạn.', 'Story biến mất sau 24 giờ, và một khi đã biến mất thì không thể lấy lại.'],
            ['Bạn dán nhầm loại liên kết.', 'URL video TikTok thông thường không phải liên kết story và có thể không được nhận dạng. Hãy sao chép liên kết của chính story.'],
            ['Kết nối không ổn định.', 'Tải lại trang, kiểm tra internet, đợi một lát rồi thử lại.'],
            ['Trình duyệt chặn tải xuống.', 'Kiểm tra quyền tải xuống của trình duyệt và thư mục Tải xuống. Đừng tắt các biện pháp bảo mật hay cài tệp lạ để ép tải xuống.'],
          ),
          p('Nếu vẫn lỗi, hãy thử trình duyệt khác, hoặc xác nhận story vẫn hiển thị trên hồ sơ gốc.'),
        ],
      },
      {
        id: 'gioi-han',
        title: 'Giới hạn và sử dụng có trách nhiệm',
        blocks: [
          ul(
            '**Tài khoản riêng tư vẫn là riêng tư.** Chỉ story công khai.',
            '**Chất lượng bị giới hạn bởi bản tải lên.** Công cụ không nâng độ phân giải của bất cứ thứ gì.',
            '**Tình trạng hoạt động có thể thay đổi.** Công cụ phụ thuộc vào TikTok, nên kết quả có thể khác nếu TikTok thay đổi cách phân phối story.',
          ),
          callout('Story thuộc về những người đã tạo ra chúng. Lưu clip để tham khảo cá nhân, sao lưu bài đăng của chính bạn hoặc nghiên cứu đối thủ là một chuyện; đăng lại nội dung của người khác mà không xin phép là chuyện khác. Không bao giờ nhập mật khẩu TikTok hay mã xác minh vào bất kỳ công cụ tải nào, và tránh cửa sổ bật lên đáng ngờ hay tệp tải xuống bất ngờ. Hãy đọc [điều khoản dịch vụ](/terms), và lưu ý rằng trang này không liên kết với TikTok hay ByteDance.'),
        ],
      },
    ],
    faqTitle: 'Câu hỏi thường gặp',
    faq: [
      { question: 'Chủ tài khoản có biết tôi đã xem story của họ không?', answer: 'Không, không nên. Công cụ đọc nội dung story công khai bên ngoài ứng dụng TikTok, nên tài khoản của bạn không được dùng để xem story và không nên xuất hiện trong danh sách người xem của người tạo.' },
      { question: 'Tôi có thể tải TikTok story không watermark không?', answer: 'Có. Tệp story được lấy từ nguồn thay vì qua nút lưu của TikTok, nên không có logo nào được thêm khi bạn chọn tùy chọn không watermark. Tệp không watermark vẫn không cho bạn quyền đăng lại.' },
      { question: 'Các bản tải xuống dùng định dạng tệp nào?', answer: 'Story video được lưu dạng MP4, phát được trên hầu hết điện thoại, máy tính bảng hoặc máy tính. Story ảnh được lưu dạng JPG hoặc PNG, tùy bản gốc.' },
      { question: 'Tôi có thể xem story từ tài khoản riêng tư không?', answer: 'Không. Tài khoản riêng tư chỉ chia sẻ nội dung với người theo dõi đã được duyệt, và công cụ này chỉ hoạt động với tài khoản công khai.' },
      { question: 'Tôi có cần tài khoản TikTok không?', answer: 'Không. Dán liên kết story và story sẽ tải mà không cần đăng nhập.' },
      { question: 'Có miễn phí không?', answer: 'Có, miễn phí và không cần đăng ký. Hãy kiểm tra trang web nếu có thay đổi.' },
      { question: 'Tại sao không có gì tải lên sau khi tôi dán liên kết?', answer: 'Thường là do liên kết sai, tài khoản riêng tư hoặc story đã hết hạn. Phần khắc phục sự cố ở trên liệt kê mọi nguyên nhân phổ biến.' },
      { question: 'Có hoạt động trên trình duyệt di động không?', answer: 'Có. Công cụ chạy trên mọi trình duyệt tiêu chuẩn trên Android và iPhone, và hoạt động giống như trên laptop hoặc máy tính để bàn.' },
      { question: 'Tôi có thể lưu TikTok story của người khác không?', answer: 'Về mặt kỹ thuật có thể được, nhưng có thể làm và được phép làm là hai chuyện khác nhau. Hãy giữ clip đã lưu để tham khảo cá nhân, và xin phép người tạo trước khi đăng lại hoặc dùng nội dung của họ ở nơi khác.' },
      { question: 'Tôi có thể tải TikTok story của chính mình không?', answer: 'Có, miễn là story còn hiển thị và ở chế độ công khai. Với những thứ quan trọng, hãy giữ thêm tệp gốc hoặc dùng các tùy chọn lưu trong tài khoản TikTok của bạn, thay vì chỉ dựa vào một trang bên thứ ba làm bản sao lưu duy nhất.' },
      { question: 'Dùng công cụ tải TikTok story trực tuyến có an toàn không?', answer: 'An toàn nếu bạn dùng theo lẽ thường. Không chia sẻ mật khẩu hay mã, hãy đọc chính sách quyền riêng tư và bỏ qua mọi yêu cầu cài ứng dụng hoặc tiện ích mở rộng. Không dịch vụ trực tuyến nào có thể đảm bảo ẩn danh tuyệt đối, vì vậy hãy chỉ dùng nội dung công khai.' },
    ],
    finalTitle: 'Lời kết',
    finalText:
      'Story được tạo ra để tồn tại ngắn hạn, nhưng nhu cầu xem hoặc giữ lại chúng của bạn thì thường không. Công cụ xem và tải trên trình duyệt cho phép bạn xem story công khai mà không cần đăng nhập, giữ tài khoản của bạn ngoài danh sách người xem và lưu tệp sạch không logo. Chỉ cần nhớ giới hạn của nó: chỉ tài khoản công khai, và chất lượng phụ thuộc vào bản tải lên gốc.',
    ctaLabel: 'Dán liên kết story và thử ngay',
    moreText: 'Cần nhiều hơn story? Hãy thử [công cụ tải video TikTok](/) hoặc [TikTok sang MP3](/tiktok-mp3).',
  },
};

/** Content for the "Download TikTok stories" page in the given language (falls back to English). */
export function getStoriesContent(lang: string): StoriesPageContent {
  return STORIES_PAGE[(lang in STORIES_PAGE ? lang : defaultLang) as Lang];
}

/* =============================================================================
 * "TikTok to MP3" page content (one entry per language)
 *
 * Rendered by src/components/marketing/ArticleBody.astro and used by:
 *   src/pages/tiktok-mp3.astro        (en)
 *   src/pages/es/tiktok-mp3.astro
 *   src/pages/id/tiktok-mp3.astro
 *   src/pages/vi/tiktok-mp3.astro
 *
 * Same block format and inline markup as STORIES_PAGE above
 * (**bold**, [label](/internal-path), [label](https://external)).
 * ========================================================================== */

/** Generic article content (same shape as StoriesPageContent, byline optional). */
export type ArticleContent = Omit<StoriesPageContent, 'byline'> & { byline?: string };

export const MP3_PAGE: Record<Lang, ArticleContent> = {
  /* ------------------------------------------------------------------ EN */
  en: {
    metaTitle: 'TikTok to MP3 Converter – Free, Save TikTok Sounds',
    metaDescription:
      'Convert public TikTok videos to MP3 and save the sound as a standalone audio file. Free, no sign-up. Works on iPhone, Android, Windows and Mac.',
    heroTitleStart: 'TikTok to MP3 Converter:',
    heroTitleHighlight: 'Save TikTok Sounds as MP3',
    heroDescription:
      'Paste a public TikTok video link and save the sound as a standalone MP3 file. Free, no sign-up, no video file attached.',
    intro: [
      'You hear a few seconds of a track in a TikTok, it gets stuck in your head, and then it’s gone. The video scrolls past, the sound has no obvious name, and the app doesn’t exactly make it easy to keep the audio on its own.',
      'That’s the gap a TikTok to MP3 converter fills. Paste the link of a public video, pick the audio option if one is offered, and save the sound as a standalone file you can play in any music app, drop into an editing project or use as a ringtone. No video file comes along for the ride.',
      
    ],
    tocTitle: 'In this guide',
    sections: [
      {
        id: 'what-is',
        title: 'What Is a TikTok to MP3 Converter?',
        blocks: [
          p('A TikTok to MP3 converter takes the link of a public TikTok video and checks whether the audio can be saved separately. When it can, you get a plain audio file instead of a video. People also call it a TikTok sound downloader, a TikTok music downloader or a TikTok audio saver. It’s all the same idea.'),
          p('Two honest caveats first. The converter works with public videos only, since private, deleted or region-restricted posts may not load. And converting a file never improves it: the audio quality you get is whatever the original post carried.'),
          p('Within those limits, it solves a simple problem. TikTok keeps sounds tied to videos, and a converter lets you pull the sound out and keep it.'),
        ],
      },
      {
        id: 'how-to',
        title: 'How to Save TikTok Audio as MP3 in Three Steps',
        blocks: [
          p('You don’t need an account, and you never have to enter your TikTok password anywhere.'),
          steps(
            ['Copy the video link.', 'In the TikTok app, open the video, tap Share, then Copy link. Use the full link to the individual post, not a profile link. A cut-off or mangled link is the most common reason a download fails, and the video’s account has to be public.'],
            ['Paste it into the converter.', 'Drop the link into the box at the top of this page and submit. The page takes a few seconds to read the video.'],
            ['Choose the audio option and save.', 'If an MP3 or audio button appears, tap it and the file goes to your phone or computer. If no audio option is shown, that video may not offer one.'],
          ),
          p('The saved file is only the sound, so it’s ready for a playlist or an editor as soon as it lands. Looking for stories instead of sounds? The same site covers that too, from the [MusicalDown homepage](/).'),
        ],
      },
      {
        id: 'expect',
        title: 'What to Expect From a TikTok MP3 Download',
        blocks: [
          h3('Just the sound, no video'),
          p('The whole point is separation. You keep the audio and skip the video file, which saves storage and spares you from trimming a clip before you can use it.'),
          h3('A standard MP3 file'),
          p('MP3 plays on nearly every phone, laptop and music app, and editing software accepts it without fuss. There’s no special player to hunt for and no extra conversion step.'),
          h3('Quality that matches the source'),
          p('A converter can’t add detail that was never there. A clean upload gives you clean audio, and a muffled one stays muffled. That’s true of every tool, so be wary of any page that promises to make audio sound better than the original.'),
          h3('Often a clip, not the full song'),
          p('A TikTok sound is frequently a short excerpt, an edited segment or a remix, so the file you save may be only that portion. If you want the complete track, use the saved clip to identify the song, then look for the full version through a licensed music service.'),
          h3('A quick way to identify a sound'),
          p('If you’ve been trying to track down a song you heard in a video, saving the audio is often the quickest route. Once the file is on your device you can play it back as many times as you need.'),
          h3('No sign-up and no software'),
          p('It runs in the browser you already have open. There’s nothing to install, no extension to add and no registration form to fill in.'),
        ],
      },
      {
        id: 'uses',
        title: 'Practical Ways to Use Saved TikTok Sounds',
        blocks: [
          ul(
            'Listen offline on a commute or flight, with no app or connection needed.',
            'Keep a sound you may want to reference for your own content later.',
            'Turn a short clip into a ringtone or notification tone.',
            'Store a voiceover or spoken snippet separately from its video.',
            'Build a personal collection of tracks, remixes and snippets that are hard to find elsewhere.',
          ),
        ],
      },
      {
        id: 'who',
        title: 'Who Saves TikTok Audio?',
        blocks: [
          p('On TikTok the sound often matters more than the picture, and the people who save it tend to know exactly what they want it for.'),
          cards(
            3,
            ['Creators & video editors', 'Want a ready-to-use track they can drop straight onto a timeline, instead of ripping the audio out of a finished video first.'],
            ['Music fans', 'Find a song, remix or snippet in the app and want to keep it in their own library rather than depend on finding that video again.'],
            ['Everyday users', 'Have smaller jobs in mind: a ringtone, a funny voice clip, a sound for the walk to work. What they share is a wish to have the audio on their own terms.'],
          ),
        ],
      },
      {
        id: 'devices',
        title: 'TikTok to MP3 on iPhone, Android, PC and Mac',
        blocks: [
          p('Because everything happens in a web page, the device matters far less than the browser, and any current one will do.'),
          cards(
            2,
            ['iPhone', 'Open the converter in Safari, paste the link and submit. After the download, look in the Files app, usually in the Downloads folder tied to your browser. The exact save location can vary with your iOS version and browser settings, and you don’t need the App Store at any point.'],
            ['Android', 'Use Chrome or whichever browser you already have. Paste the link, tap the audio option, and check your browser’s Downloads list or your file manager once it finishes. No APK and no side-loading are involved.'],
            ['Windows PC', 'Open the page in Chrome or Edge, paste the video URL and choose the MP3 option. The file is saved to your Downloads folder unless you’ve set another location, and you can then play it in any media player or move it into your music library.'],
            ['Mac', 'Safari and Chrome both work, and the steps match the Windows ones. Check your Downloads folder or the browser’s download history, then add the file to your audio library or editing project if you have the rights to use it.'],
          ),
        ],
      },
      {
        id: 'troubleshooting',
        title: 'TikTok MP3 Download Not Working? Troubleshooting',
        blocks: [
          p('A failed download usually has a simple cause. Work through these in order before trying another site or installing anything:'),
          ol(
            ['The link is incomplete.', 'Go back to the post and copy the full link again. It should be the individual video, not a profile or an edited link.'],
            ['The video is unavailable.', 'Private, deleted and region-restricted videos may not load at all. Try a different public post you have permission to save.'],
            ['No audio option appears.', 'Not every video offers a separate audio download. If the page shows no MP3 button for that link, it may simply not be available for that post.'],
            ['The page is slow or stuck.', 'Check your connection, refresh and paste the link again. A different browser can also help.'],
            ['The download was blocked or interrupted.', 'Check your browser’s download history, free storage space and any security prompt. Don’t disable security features to force a download.'],
            ['The file won’t play.', 'Confirm the download finished and the extension is .mp3. If the file looks incomplete, delete it and download it again.'],
            ['You can’t find the file.', 'Check the Downloads folder or the browser’s download list. On iPhone, open the Files app first.'],
          ),
          p('If the problem continues, the source may be temporarily unavailable or unsupported.'),
        ],
      },
      {
        id: 'copyright',
        title: 'Copyright, Permission and Safe Use',
        blocks: [
          h3('Copyright and permission'),
          p('A lot of the music on TikTok is copyrighted. Saving a track for private listening is a different matter from publishing it in your own video or using it commercially. Save content you own or have permission to use, and check the usage rights, along with TikTok’s own rules in its [support center](https://support.tiktok.com), before the sound goes into anything public.'),
          h3('Keep your account and device safe'),
          p('A downloader only needs a public video link. For safer use:'),
          ul(
            'Never enter your TikTok password or verification codes into any downloader. If a site asks for them, close it.',
            'Ignore unexpected software installs, suspicious redirects and extensions that ask for unnecessary permissions.',
            'Read the site’s [privacy policy](/privacy) to see how it handles submitted links.',
            'Keep personal or sensitive recordings private.',
          ),
        ],
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { question: 'Can I download only the music from a TikTok video?', answer: 'Yes, when the video offers an audio option. You save the sound as an MP3 and skip the video file entirely.' },
      { question: 'How do I convert TikTok to MP3?', answer: 'Copy the link of a public TikTok video, paste it into the converter, submit it and tap the MP3 or audio button. Then save the file to your device.' },
      { question: 'What format does the audio come in?', answer: 'MP3, which plays on virtually every phone, computer and music app.' },
      { question: 'Will the MP3 sound better than the TikTok?', answer: 'No. Converting doesn’t improve quality, so the file reflects the source audio of the original post.' },
      { question: 'Can I download a full song from a TikTok video?', answer: 'Not necessarily. Many TikTok sounds are short excerpts, edits or remixes, so you may get only that portion. Use it to identify the song, then find the full track on a licensed music service.' },
      { question: 'Can I convert audio from a private account?', answer: 'No. The converter works with public videos only.' },
      { question: 'Do I need a TikTok account or an app?', answer: 'Neither. Copy a public video link, paste it into the page and save the file from your browser.' },
      { question: 'Is it free?', answer: 'Yes. At the time of writing the converter is free and requires no sign-up. Check the page for any changes.' },
      { question: 'Can I use a saved sound in my own videos?', answer: 'For personal listening, generally yes. For anything you publish, especially commercially, check the usage rights first, because many tracks are copyrighted.' },
      { question: 'Where are downloaded MP3 files saved?', answer: 'In your browser’s Downloads folder, or the Files app on an iPhone. The exact location depends on your device and browser settings.' },
      { question: 'Is it safe to use a TikTok to MP3 converter?', answer: 'It’s safe when you use common sense: never share passwords or codes, skip unexpected installs, and read the privacy policy. No tool can promise perfect safety, so stick to public content.' },
      { question: 'Why isn’t my link working?', answer: 'The usual suspects are an incomplete link, a private or deleted video, or a region restriction. Copy the full link again from the app and retry. The troubleshooting section above lists every common cause.' },
    ],
    finalTitle: 'Final Thoughts',
    finalText:
      'Sounds on TikTok are easy to lose and hard to name. Saving one as an MP3 takes a public link, a browser and a few seconds, and you end up with a clean audio file for your playlist, your editor or your ringtone list. Keep expectations realistic: the quality is the original’s, the file may be only part of a song, private videos are off limits, and anything you publish still needs the right permissions.',
    ctaLabel: 'Paste a link and convert to MP3',
    moreText: 'When you’re ready, paste a link into the converter above and see whether the video offers an audio download.',
  },

  /* ------------------------------------------------------------------ ES */
  es: {
    metaTitle: 'Convertidor de TikTok a MP3 – Gratis | MusicallyDown',
    metaDescription:
      'Convierte vídeos públicos de TikTok a MP3 y guarda el sonido como archivo de audio. Gratis y sin registro. Funciona en iPhone, Android, Windows y Mac.',
    heroTitleStart: 'Convertidor de TikTok a MP3:',
    heroTitleHighlight: 'guarda sonidos de TikTok en MP3',
    heroDescription:
      'Pega el enlace de un vídeo público de TikTok y guarda el sonido como archivo MP3 independiente. Gratis, sin registro y sin archivo de vídeo.',
    intro: [
      'Oyes unos segundos de una canción en un TikTok, se te queda en la cabeza y, de pronto, ya no está. El vídeo pasa, el sonido no tiene un nombre evidente y la app no te lo pone precisamente fácil para guardar el audio por separado.',
      'Ese es el hueco que cubre un convertidor de TikTok a MP3. Pegas el enlace de un vídeo público, eliges la opción de audio si se ofrece y guardas el sonido como un archivo independiente que puedes reproducir en cualquier app de música, usar en un proyecto de edición o poner como tono de llamada. No se descarga ningún vídeo.',
      'Esta guía explica cómo funciona el proceso, qué esperar de los resultados, quién le saca más partido, cómo solucionar una descarga que falla y los límites que conviene conocer antes de empezar. Si solo quieres probarlo, el [convertidor de TikTok a MP3](/tiktok-mp3) es gratis y no requiere registro.',
    ],
    tocTitle: 'En esta guía',
    sections: [
      {
        id: 'que-es',
        title: '¿Qué es un convertidor de TikTok a MP3?',
        blocks: [
          p('Un convertidor de TikTok a MP3 toma el enlace de un vídeo público de TikTok y comprueba si el audio se puede guardar por separado. Cuando se puede, obtienes un archivo de audio normal en lugar de un vídeo. La gente también lo llama descargador de sonidos de TikTok, descargador de música de TikTok o guardador de audio de TikTok. Es la misma idea.'),
          p('Antes, dos advertencias honestas. El convertidor funciona solo con vídeos públicos, ya que las publicaciones privadas, eliminadas o con restricción regional pueden no cargarse. Y convertir un archivo nunca lo mejora: la calidad del audio es la que tuviera la publicación original.'),
          p('Dentro de esos límites, resuelve un problema sencillo. TikTok mantiene los sonidos ligados a los vídeos y un convertidor te permite extraer el sonido y conservarlo.'),
        ],
      },
      {
        id: 'como-guardar',
        title: 'Cómo guardar audio de TikTok como MP3 en tres pasos',
        blocks: [
          p('No necesitas cuenta y nunca tienes que introducir tu contraseña de TikTok en ningún sitio.'),
          steps(
            ['Copia el enlace del vídeo.', 'En la app de TikTok, abre el vídeo, toca Compartir y después Copiar enlace. Usa el enlace completo de la publicación concreta, no el de un perfil. Un enlace cortado o alterado es la causa más común de que falle una descarga, y la cuenta del vídeo debe ser pública.'],
            ['Pégalo en el convertidor.', 'Pega el enlace en el cuadro de la parte superior de esta página y envíalo. La página tarda unos segundos en leer el vídeo.'],
            ['Elige la opción de audio y guarda.', 'Si aparece un botón de MP3 o de audio, púlsalo y el archivo se guardará en tu móvil u ordenador. Si no se muestra ninguna opción de audio, es posible que ese vídeo no la ofrezca.'],
          ),
          p('El archivo guardado es solo el sonido, así que está listo para una lista de reproducción o un editor en cuanto llega. ¿Buscas historias en vez de sonidos? El mismo sitio también cubre eso, desde la [página de inicio de MusicalDown](/).'),
        ],
      },
      {
        id: 'que-esperar',
        title: 'Qué esperar de una descarga de TikTok en MP3',
        blocks: [
          h3('Solo el sonido, sin vídeo'),
          p('Todo el sentido está en separar. Te quedas con el audio y te ahorras el archivo de vídeo, lo que ahorra almacenamiento y evita tener que recortar un clip antes de poder usarlo.'),
          h3('Un archivo MP3 estándar'),
          p('El MP3 se reproduce en casi cualquier móvil, portátil y app de música, y el software de edición lo acepta sin problemas. No hay que buscar un reproductor especial ni hacer una conversión adicional.'),
          h3('Una calidad que coincide con el origen'),
          p('Un convertidor no puede añadir detalle que nunca existió. Una subida limpia da un audio limpio y una apagada sigue apagada. Esto es así con todas las herramientas, así que desconfía de cualquier página que prometa que el audio sonará mejor que el original.'),
          h3('Muchas veces un fragmento, no la canción completa'),
          p('Un sonido de TikTok suele ser un extracto corto, un segmento editado o un remix, así que el archivo que guardes puede ser solo esa parte. Si quieres la canción completa, usa el fragmento guardado para identificarla y busca después la versión completa en un servicio de música con licencia.'),
          h3('Una forma rápida de identificar un sonido'),
          p('Si has estado intentando localizar una canción que oíste en un vídeo, guardar el audio suele ser el camino más rápido. Cuando el archivo está en tu dispositivo puedes reproducirlo tantas veces como necesites.'),
          h3('Sin registro y sin software'),
          p('Funciona en el navegador que ya tienes abierto. No hay nada que instalar, ninguna extensión que añadir y ningún formulario de registro que rellenar.'),
        ],
      },
      {
        id: 'usos',
        title: 'Formas prácticas de usar los sonidos de TikTok guardados',
        blocks: [
          ul(
            'Escuchar sin conexión en un trayecto o un vuelo, sin necesidad de app ni de internet.',
            'Guardar un sonido que quizá quieras usar como referencia en tu propio contenido.',
            'Convertir un clip corto en tono de llamada o de notificación.',
            'Guardar una locución o un fragmento hablado por separado de su vídeo.',
            'Crear una colección personal de temas, remixes y fragmentos difíciles de encontrar en otro sitio.',
          ),
        ],
      },
      {
        id: 'quien',
        title: '¿Quién guarda audio de TikTok?',
        blocks: [
          p('En TikTok el sonido a menudo importa más que la imagen, y quienes lo guardan suelen saber exactamente para qué lo quieren.'),
          cards(
            3,
            ['Creadores y editores de vídeo', 'Quieren una pista lista para arrastrar directamente a la línea de tiempo, en lugar de extraer antes el audio de un vídeo terminado.'],
            ['Aficionados a la música', 'Encuentran una canción, un remix o un fragmento en la app y quieren conservarlo en su propia biblioteca en vez de depender de volver a encontrar ese vídeo.'],
            ['Usuarios habituales', 'Tienen tareas más pequeñas en mente: un tono de llamada, un clip de voz divertido, un sonido para el camino al trabajo. Lo que comparten es el deseo de tener el audio en sus propios términos.'],
          ),
        ],
      },
      {
        id: 'dispositivos',
        title: 'TikTok a MP3 en iPhone, Android, PC y Mac',
        blocks: [
          p('Como todo ocurre en una página web, el dispositivo importa mucho menos que el navegador, y cualquiera actual sirve.'),
          cards(
            2,
            ['iPhone', 'Abre el convertidor en Safari, pega el enlace y envíalo. Tras la descarga, mira en la app Archivos, normalmente en la carpeta Descargas vinculada a tu navegador. La ubicación exacta puede variar según tu versión de iOS y los ajustes del navegador, y no necesitas la App Store en ningún momento.'],
            ['Android', 'Usa Chrome o el navegador que ya tengas. Pega el enlace, toca la opción de audio y revisa la lista de descargas del navegador o tu gestor de archivos cuando termine. No hay APK ni instalaciones externas.'],
            ['PC con Windows', 'Abre la página en Chrome o Edge, pega la URL del vídeo y elige la opción MP3. El archivo se guarda en tu carpeta Descargas salvo que hayas fijado otra ubicación, y luego puedes reproducirlo en cualquier reproductor o moverlo a tu biblioteca de música.'],
            ['Mac', 'Safari y Chrome funcionan, y los pasos son los mismos que en Windows. Revisa tu carpeta Descargas o el historial de descargas del navegador y añade después el archivo a tu biblioteca de audio o proyecto de edición si tienes derecho a usarlo.'],
          ),
        ],
      },
      {
        id: 'solucion-de-problemas',
        title: '¿No funciona la descarga de TikTok en MP3? Solución de problemas',
        blocks: [
          p('Una descarga fallida suele tener una causa sencilla. Repasa estos puntos en orden antes de probar otro sitio o instalar nada:'),
          ol(
            ['El enlace está incompleto.', 'Vuelve a la publicación y copia de nuevo el enlace completo. Debe ser el del vídeo concreto, no el de un perfil ni un enlace modificado.'],
            ['El vídeo no está disponible.', 'Los vídeos privados, eliminados o con restricción regional pueden no cargarse en absoluto. Prueba con otra publicación pública que tengas permiso para guardar.'],
            ['No aparece ninguna opción de audio.', 'No todos los vídeos ofrecen una descarga de audio por separado. Si la página no muestra botón de MP3 para ese enlace, puede que simplemente no esté disponible para esa publicación.'],
            ['La página va lenta o se queda bloqueada.', 'Revisa tu conexión, actualiza y vuelve a pegar el enlace. Cambiar de navegador también puede ayudar.'],
            ['La descarga se bloqueó o se interrumpió.', 'Revisa el historial de descargas del navegador, el espacio libre y cualquier aviso de seguridad. No desactives funciones de seguridad para forzar una descarga.'],
            ['El archivo no se reproduce.', 'Confirma que la descarga terminó y que la extensión es .mp3. Si el archivo parece incompleto, bórralo y vuelve a descargarlo.'],
            ['No encuentras el archivo.', 'Revisa la carpeta Descargas o la lista de descargas del navegador. En iPhone, abre primero la app Archivos.'],
          ),
          p('Si el problema continúa, puede que el origen no esté disponible temporalmente o no sea compatible.'),
        ],
      },
      {
        id: 'derechos',
        title: 'Derechos de autor, permiso y uso seguro',
        blocks: [
          h3('Derechos de autor y permiso'),
          p('Mucha de la música de TikTok tiene derechos de autor. Guardar una pista para escucharla en privado es distinto de publicarla en tu propio vídeo o usarla comercialmente. Guarda contenido que sea tuyo o que tengas permiso para usar, y comprueba los derechos de uso, junto con las normas de TikTok en su [centro de ayuda](https://support.tiktok.com), antes de que el sonido acabe en algo público.'),
          h3('Mantén seguros tu cuenta y tu dispositivo'),
          p('Un descargador solo necesita el enlace de un vídeo público. Para usarlo con más seguridad:'),
          ul(
            'Nunca introduzcas tu contraseña de TikTok ni códigos de verificación en ningún descargador. Si un sitio te los pide, ciérralo.',
            'Ignora las instalaciones de software inesperadas, las redirecciones sospechosas y las extensiones que piden permisos innecesarios.',
            'Lee la [política de privacidad](/privacy) del sitio para saber cómo trata los enlaces enviados.',
            'Mantén en privado las grabaciones personales o sensibles.',
          ),
        ],
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { question: '¿Puedo descargar solo la música de un vídeo de TikTok?', answer: 'Sí, cuando el vídeo ofrece una opción de audio. Guardas el sonido como MP3 y te saltas por completo el archivo de vídeo.' },
      { question: '¿Cómo convierto TikTok a MP3?', answer: 'Copia el enlace de un vídeo público de TikTok, pégalo en el convertidor, envíalo y pulsa el botón de MP3 o audio. Después guarda el archivo en tu dispositivo.' },
      { question: '¿En qué formato llega el audio?', answer: 'MP3, que se reproduce en prácticamente cualquier móvil, ordenador y app de música.' },
      { question: '¿Sonará mejor el MP3 que el TikTok?', answer: 'No. Convertir no mejora la calidad, así que el archivo refleja el audio de origen de la publicación original.' },
      { question: '¿Puedo descargar una canción completa de un vídeo de TikTok?', answer: 'No necesariamente. Muchos sonidos de TikTok son extractos cortos, ediciones o remixes, así que puede que obtengas solo esa parte. Úsalo para identificar la canción y busca después la pista completa en un servicio de música con licencia.' },
      { question: '¿Puedo convertir audio de una cuenta privada?', answer: 'No. El convertidor funciona solo con vídeos públicos.' },
      { question: '¿Necesito una cuenta de TikTok o una app?', answer: 'Ninguna de las dos. Copia el enlace de un vídeo público, pégalo en la página y guarda el archivo desde tu navegador.' },
      { question: '¿Es gratis?', answer: 'Sí. En el momento de escribir esto, el convertidor es gratuito y no requiere registro. Consulta la página por si hubiera cambios.' },
      { question: '¿Puedo usar un sonido guardado en mis propios vídeos?', answer: 'Para escucharlo en privado, por lo general sí. Para cualquier cosa que publiques, sobre todo con fines comerciales, comprueba antes los derechos de uso, porque muchas pistas tienen derechos de autor.' },
      { question: '¿Dónde se guardan los archivos MP3 descargados?', answer: 'En la carpeta Descargas de tu navegador, o en la app Archivos en un iPhone. La ubicación exacta depende de tu dispositivo y de los ajustes del navegador.' },
      { question: '¿Es seguro usar un convertidor de TikTok a MP3?', answer: 'Lo es si usas el sentido común: no compartas contraseñas ni códigos, evita instalaciones inesperadas y lee la política de privacidad. Ninguna herramienta puede prometer una seguridad perfecta, así que limítate a contenido público.' },
      { question: '¿Por qué no funciona mi enlace?', answer: 'Los sospechosos habituales son un enlace incompleto, un vídeo privado o eliminado, o una restricción regional. Copia de nuevo el enlace completo desde la app y reinténtalo. La sección de solución de problemas de arriba recoge todas las causas habituales.' },
    ],
    finalTitle: 'Reflexión final',
    finalText:
      'Los sonidos de TikTok son fáciles de perder y difíciles de nombrar. Guardar uno como MP3 requiere un enlace público, un navegador y unos segundos, y acabas con un archivo de audio limpio para tu lista de reproducción, tu editor o tu lista de tonos de llamada. Mantén expectativas realistas: la calidad es la del original, el archivo puede ser solo parte de una canción, los vídeos privados están fuera de alcance y todo lo que publiques sigue necesitando los permisos adecuados.',
    ctaLabel: 'Pega un enlace y convierte a MP3',
    moreText: 'Cuando estés listo, pega un enlace en el convertidor de arriba y comprueba si el vídeo ofrece una descarga de audio.',
  },

  /* ------------------------------------------------------------------ ID */
  id: {
    metaTitle: 'Konverter TikTok ke MP3 – Gratis, Simpan Suara TikTok',
    metaDescription:
      'Konversi video TikTok publik ke MP3 dan simpan suaranya sebagai file audio. Gratis, tanpa daftar. Berfungsi di iPhone, Android, Windows, dan Mac.',
    heroTitleStart: 'Konverter TikTok ke MP3:',
    heroTitleHighlight: 'Simpan Suara TikTok sebagai MP3',
    heroDescription:
      'Tempel tautan video TikTok publik dan simpan suaranya sebagai file MP3 tersendiri. Gratis, tanpa pendaftaran, tanpa file video.',
    intro: [
      'Anda mendengar beberapa detik sebuah lagu di TikTok, lagu itu terus terngiang di kepala, lalu hilang. Videonya terus bergulir, suaranya tidak punya nama yang jelas, dan aplikasinya tidak benar-benar memudahkan Anda menyimpan audionya saja.',
      'Itulah celah yang diisi oleh konverter TikTok ke MP3. Tempel tautan video publik, pilih opsi audio jika tersedia, dan simpan suaranya sebagai file tersendiri yang bisa diputar di aplikasi musik mana pun, dimasukkan ke proyek editing, atau dijadikan nada dering. Tidak ada file video yang ikut terunduh.',
      'Panduan ini membahas cara kerja prosesnya, apa yang bisa diharapkan dari hasilnya, siapa yang paling terbantu, cara memperbaiki unduhan yang gagal, dan batasan yang perlu diketahui sebelum memulai. Jika ingin langsung mencoba, [konverter TikTok ke MP3](/tiktok-mp3) ini gratis dan tidak perlu mendaftar.',
    ],
    tocTitle: 'Dalam panduan ini',
    sections: [
      {
        id: 'apa-itu',
        title: 'Apa Itu Konverter TikTok ke MP3?',
        blocks: [
          p('Konverter TikTok ke MP3 mengambil tautan video TikTok publik dan memeriksa apakah audionya bisa disimpan terpisah. Jika bisa, Anda mendapatkan file audio biasa, bukan video. Orang juga menyebutnya pengunduh suara TikTok, pengunduh musik TikTok, atau penyimpan audio TikTok. Semuanya ide yang sama.'),
          p('Dua catatan jujur lebih dulu. Konverter hanya bekerja dengan video publik, karena postingan privat, yang dihapus, atau dibatasi wilayah mungkin tidak termuat. Dan mengonversi file tidak pernah memperbaikinya: kualitas audio yang Anda dapat sama dengan yang dimiliki postingan aslinya.'),
          p('Dalam batasan itu, alat ini menyelesaikan masalah sederhana. TikTok mengikat suara pada video, dan konverter memungkinkan Anda mengambil suaranya dan menyimpannya.'),
        ],
      },
      {
        id: 'cara-simpan',
        title: 'Cara Menyimpan Audio TikTok sebagai MP3 dalam Tiga Langkah',
        blocks: [
          p('Anda tidak perlu akun, dan tidak pernah perlu memasukkan kata sandi TikTok di mana pun.'),
          steps(
            ['Salin tautan video.', 'Di aplikasi TikTok, buka video, ketuk Bagikan, lalu Salin tautan. Gunakan tautan lengkap ke postingan tertentu, bukan tautan profil. Tautan yang terpotong atau rusak adalah penyebab paling umum unduhan gagal, dan akun pemilik video harus publik.'],
            ['Tempel ke konverter.', 'Masukkan tautan ke kotak di bagian atas halaman ini lalu kirim. Halaman butuh beberapa detik untuk membaca video.'],
            ['Pilih opsi audio dan simpan.', 'Jika tombol MP3 atau audio muncul, ketuk dan file akan masuk ke ponsel atau komputer Anda. Jika tidak ada opsi audio yang ditampilkan, video itu mungkin tidak menyediakannya.'],
          ),
          p('File yang disimpan hanya berisi suara, jadi siap untuk playlist atau editor begitu masuk. Mencari story, bukan suara? Situs yang sama juga mencakup itu, dari [beranda MusicalDown](/).'),
        ],
      },
      {
        id: 'harapan',
        title: 'Yang Bisa Diharapkan dari Unduhan MP3 TikTok',
        blocks: [
          h3('Hanya suara, tanpa video'),
          p('Inti dari semuanya adalah pemisahan. Anda menyimpan audio dan melewati file video, yang menghemat penyimpanan dan membebaskan Anda dari memotong klip sebelum bisa menggunakannya.'),
          h3('File MP3 standar'),
          p('MP3 diputar di hampir semua ponsel, laptop, dan aplikasi musik, dan perangkat lunak editing menerimanya tanpa masalah. Tidak perlu mencari pemutar khusus dan tidak ada langkah konversi tambahan.'),
          h3('Kualitas sesuai sumbernya'),
          p('Konverter tidak bisa menambah detail yang memang tidak pernah ada. Unggahan yang bersih menghasilkan audio bersih, dan yang pengap tetap pengap. Ini berlaku untuk semua alat, jadi waspadalah terhadap halaman mana pun yang menjanjikan audio terdengar lebih baik dari aslinya.'),
          h3('Sering hanya klip, bukan lagu penuh'),
          p('Suara TikTok sering kali berupa potongan pendek, segmen yang diedit, atau remix, jadi file yang Anda simpan mungkin hanya bagian itu. Jika ingin lagu lengkap, gunakan klip yang disimpan untuk mengenali lagunya, lalu cari versi lengkapnya lewat layanan musik berlisensi.'),
          h3('Cara cepat mengenali sebuah suara'),
          p('Jika Anda sedang berusaha melacak lagu yang didengar di video, menyimpan audionya sering menjadi jalan tercepat. Setelah file ada di perangkat, Anda bisa memutarnya berulang kali sesuka Anda.'),
          h3('Tanpa pendaftaran dan tanpa perangkat lunak'),
          p('Berjalan di browser yang sudah Anda buka. Tidak ada yang perlu dipasang, tidak ada ekstensi yang ditambahkan, dan tidak ada formulir pendaftaran yang diisi.'),
        ],
      },
      {
        id: 'kegunaan',
        title: 'Cara Praktis Menggunakan Suara TikTok yang Disimpan',
        blocks: [
          ul(
            'Mendengarkan secara offline saat perjalanan atau penerbangan, tanpa aplikasi atau koneksi.',
            'Menyimpan suara yang mungkin ingin dijadikan referensi untuk konten Anda nanti.',
            'Mengubah klip pendek menjadi nada dering atau nada notifikasi.',
            'Menyimpan voiceover atau potongan ucapan terpisah dari videonya.',
            'Membangun koleksi pribadi berisi lagu, remix, dan potongan yang sulit ditemukan di tempat lain.',
          ),
        ],
      },
      {
        id: 'siapa',
        title: 'Siapa yang Menyimpan Audio TikTok?',
        blocks: [
          p('Di TikTok, suara sering lebih penting daripada gambarnya, dan orang yang menyimpannya biasanya tahu persis untuk apa mereka membutuhkannya.'),
          cards(
            3,
            ['Kreator & editor video', 'Menginginkan lagu siap pakai yang bisa langsung dijatuhkan ke timeline, alih-alih mengekstrak audio dari video jadi terlebih dahulu.'],
            ['Penggemar musik', 'Menemukan lagu, remix, atau potongan di aplikasi dan ingin menyimpannya di pustaka sendiri daripada bergantung pada menemukan video itu lagi.'],
            ['Pengguna sehari-hari', 'Punya keperluan yang lebih kecil: nada dering, klip suara lucu, suara untuk perjalanan ke tempat kerja. Kesamaan mereka adalah keinginan memiliki audio dengan cara mereka sendiri.'],
          ),
        ],
      },
      {
        id: 'perangkat',
        title: 'TikTok ke MP3 di iPhone, Android, PC, dan Mac',
        blocks: [
          p('Karena semuanya terjadi di halaman web, perangkat jauh lebih tidak penting daripada browser, dan browser terkini mana pun bisa dipakai.'),
          cards(
            2,
            ['iPhone', 'Buka konverter di Safari, tempel tautan lalu kirim. Setelah diunduh, lihat di aplikasi File, biasanya di folder Unduhan yang terkait browser Anda. Lokasi simpan yang tepat bisa berbeda tergantung versi iOS dan pengaturan browser, dan Anda tidak membutuhkan App Store sama sekali.'],
            ['Android', 'Gunakan Chrome atau browser apa pun yang sudah ada. Tempel tautan, ketuk opsi audio, lalu cek daftar Unduhan browser atau pengelola file setelah selesai. Tanpa APK dan tanpa side-loading.'],
            ['PC Windows', 'Buka halaman di Chrome atau Edge, tempel URL video dan pilih opsi MP3. File disimpan di folder Unduhan kecuali Anda menetapkan lokasi lain, lalu bisa diputar di pemutar media mana pun atau dipindahkan ke pustaka musik Anda.'],
            ['Mac', 'Safari dan Chrome sama-sama berfungsi, dan langkahnya sama dengan Windows. Cek folder Unduhan atau riwayat unduhan browser, lalu tambahkan file ke pustaka audio atau proyek editing jika Anda berhak menggunakannya.'],
          ),
        ],
      },
      {
        id: 'pemecahan-masalah',
        title: 'Unduhan MP3 TikTok Tidak Berfungsi? Pemecahan Masalah',
        blocks: [
          p('Unduhan yang gagal biasanya punya penyebab sederhana. Periksa berurutan sebelum mencoba situs lain atau memasang apa pun:'),
          ol(
            ['Tautannya tidak lengkap.', 'Kembali ke postingan dan salin tautan lengkapnya lagi. Harus tautan video tertentu, bukan profil atau tautan yang telah diedit.'],
            ['Videonya tidak tersedia.', 'Video privat, yang dihapus, dan yang dibatasi wilayah mungkin tidak termuat sama sekali. Coba postingan publik lain yang Anda punya izin untuk menyimpannya.'],
            ['Tidak ada opsi audio yang muncul.', 'Tidak semua video menyediakan unduhan audio terpisah. Jika halaman tidak menampilkan tombol MP3 untuk tautan itu, mungkin memang tidak tersedia untuk postingan tersebut.'],
            ['Halaman lambat atau macet.', 'Periksa koneksi, muat ulang, lalu tempel tautan lagi. Browser lain juga bisa membantu.'],
            ['Unduhan diblokir atau terputus.', 'Periksa riwayat unduhan browser, ruang penyimpanan kosong, dan prompt keamanan apa pun. Jangan menonaktifkan fitur keamanan untuk memaksa unduhan.'],
            ['File tidak bisa diputar.', 'Pastikan unduhan selesai dan ekstensinya .mp3. Jika file tampak tidak lengkap, hapus dan unduh ulang.'],
            ['Anda tidak menemukan file.', 'Cek folder Unduhan atau daftar unduhan browser. Di iPhone, buka aplikasi File lebih dulu.'],
          ),
          p('Jika masalah berlanjut, sumbernya mungkin sementara tidak tersedia atau tidak didukung.'),
        ],
      },
      {
        id: 'hak-cipta',
        title: 'Hak Cipta, Izin, dan Penggunaan yang Aman',
        blocks: [
          h3('Hak cipta dan izin'),
          p('Banyak musik di TikTok berhak cipta. Menyimpan lagu untuk didengarkan pribadi berbeda dengan memublikasikannya di video Anda sendiri atau menggunakannya secara komersial. Simpan konten yang Anda miliki atau punya izin untuk menggunakannya, dan periksa hak penggunaan, beserta aturan TikTok di [pusat bantuan](https://support.tiktok.com)-nya, sebelum suara dipakai di sesuatu yang publik.'),
          h3('Jaga akun dan perangkat Anda tetap aman'),
          p('Pengunduh hanya membutuhkan tautan video publik. Untuk penggunaan yang lebih aman:'),
          ul(
            'Jangan pernah memasukkan kata sandi TikTok atau kode verifikasi ke pengunduh mana pun. Jika situs memintanya, tutup.',
            'Abaikan pemasangan perangkat lunak yang tak terduga, pengalihan mencurigakan, dan ekstensi yang meminta izin tidak perlu.',
            'Baca [kebijakan privasi](/privacy) situs untuk melihat bagaimana tautan yang dikirim ditangani.',
            'Jaga kerahasiaan rekaman pribadi atau sensitif.',
          ),
        ],
      },
    ],
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faq: [
      { question: 'Bisakah saya mengunduh hanya musik dari video TikTok?', answer: 'Bisa, jika video menyediakan opsi audio. Anda menyimpan suaranya sebagai MP3 dan melewati file video sepenuhnya.' },
      { question: 'Bagaimana cara mengonversi TikTok ke MP3?', answer: 'Salin tautan video TikTok publik, tempel ke konverter, kirim, lalu ketuk tombol MP3 atau audio. Kemudian simpan file ke perangkat Anda.' },
      { question: 'Audio tersedia dalam format apa?', answer: 'MP3, yang bisa diputar di hampir semua ponsel, komputer, dan aplikasi musik.' },
      { question: 'Apakah MP3-nya akan terdengar lebih baik daripada TikTok-nya?', answer: 'Tidak. Konversi tidak meningkatkan kualitas, jadi file mencerminkan audio sumber dari postingan aslinya.' },
      { question: 'Bisakah saya mengunduh lagu penuh dari video TikTok?', answer: 'Belum tentu. Banyak suara TikTok berupa potongan pendek, hasil edit, atau remix, jadi Anda mungkin hanya mendapat bagian itu. Gunakan untuk mengenali lagunya, lalu cari lagu lengkapnya di layanan musik berlisensi.' },
      { question: 'Bisakah saya mengonversi audio dari akun privat?', answer: 'Tidak. Konverter hanya bekerja dengan video publik.' },
      { question: 'Apakah saya perlu akun TikTok atau aplikasi?', answer: 'Tidak keduanya. Salin tautan video publik, tempel ke halaman, dan simpan file dari browser Anda.' },
      { question: 'Apakah gratis?', answer: 'Ya. Saat artikel ini ditulis, konverter gratis dan tidak memerlukan pendaftaran. Periksa halaman jika ada perubahan.' },
      { question: 'Bisakah saya menggunakan suara yang disimpan di video saya sendiri?', answer: 'Untuk didengarkan pribadi, umumnya bisa. Untuk apa pun yang Anda publikasikan, terutama secara komersial, periksa hak penggunaan terlebih dahulu, karena banyak lagu berhak cipta.' },
      { question: 'Di mana file MP3 yang diunduh disimpan?', answer: 'Di folder Unduhan browser Anda, atau aplikasi File di iPhone. Lokasi pastinya bergantung pada perangkat dan pengaturan browser Anda.' },
      { question: 'Apakah aman menggunakan konverter TikTok ke MP3?', answer: 'Aman jika Anda menggunakan akal sehat: jangan bagikan kata sandi atau kode, lewati pemasangan tak terduga, dan baca kebijakan privasi. Tidak ada alat yang bisa menjanjikan keamanan sempurna, jadi tetaplah pada konten publik.' },
      { question: 'Mengapa tautan saya tidak berfungsi?', answer: 'Penyebab yang biasa adalah tautan tidak lengkap, video privat atau dihapus, atau pembatasan wilayah. Salin ulang tautan lengkap dari aplikasi lalu coba lagi. Bagian pemecahan masalah di atas memuat semua penyebab umum.' },
    ],
    finalTitle: 'Penutup',
    finalText:
      'Suara di TikTok mudah hilang dan sulit dinamai. Menyimpannya sebagai MP3 hanya butuh tautan publik, browser, dan beberapa detik, dan Anda mendapat file audio bersih untuk playlist, editor, atau daftar nada dering. Tetap realistis: kualitasnya sama dengan aslinya, file mungkin hanya sebagian lagu, video privat tidak bisa diakses, dan apa pun yang Anda publikasikan tetap memerlukan izin yang tepat.',
    ctaLabel: 'Tempel tautan dan konversi ke MP3',
    moreText: 'Jika sudah siap, tempel tautan ke konverter di atas dan lihat apakah video menyediakan unduhan audio.',
  },

  /* ------------------------------------------------------------------ VI */
  vi: {
    metaTitle: 'Chuyển TikTok sang MP3 – Miễn phí, lưu âm thanh TikTok',
    metaDescription:
      'Chuyển video TikTok công khai sang MP3 và lưu âm thanh thành tệp riêng. Miễn phí, không cần đăng ký. Dùng được trên iPhone, Android, Windows và Mac.',
    heroTitleStart: 'Chuyển TikTok sang MP3:',
    heroTitleHighlight: 'lưu âm thanh TikTok thành MP3',
    heroDescription:
      'Dán liên kết video TikTok công khai và lưu âm thanh thành tệp MP3 riêng. Miễn phí, không đăng ký, không kèm tệp video.',
    intro: [
      'Bạn nghe vài giây một bản nhạc trong TikTok, nó cứ quanh quẩn trong đầu, rồi biến mất. Video trôi qua, âm thanh không có tên rõ ràng, và ứng dụng không giúp bạn dễ dàng giữ riêng phần âm thanh.',
      'Đó chính là khoảng trống mà công cụ chuyển TikTok sang MP3 lấp đầy. Dán liên kết video công khai, chọn tùy chọn âm thanh nếu có, rồi lưu âm thanh thành tệp riêng để phát trong bất kỳ ứng dụng nhạc nào, đưa vào dự án biên tập hoặc dùng làm nhạc chuông. Không có tệp video nào đi kèm.',
      'Hướng dẫn này giải thích cách quy trình hoạt động, điều nên mong đợi ở kết quả, ai hưởng lợi nhiều nhất, cách xử lý khi tải xuống thất bại và những giới hạn cần biết trước khi bắt đầu. Nếu chỉ muốn thử, [công cụ chuyển TikTok sang MP3](/tiktok-mp3) này miễn phí và không cần đăng ký.',
    ],
    tocTitle: 'Trong hướng dẫn này',
    sections: [
      {
        id: 'la-gi',
        title: 'Công cụ chuyển TikTok sang MP3 là gì?',
        blocks: [
          p('Công cụ chuyển TikTok sang MP3 nhận liên kết của một video TikTok công khai và kiểm tra xem âm thanh có thể lưu riêng hay không. Khi có thể, bạn nhận được tệp âm thanh thuần thay vì video. Người ta cũng gọi nó là công cụ tải âm thanh TikTok, tải nhạc TikTok hoặc lưu audio TikTok. Tất cả đều cùng một ý tưởng.'),
          p('Trước hết là hai lưu ý thẳng thắn. Công cụ chỉ hoạt động với video công khai, vì bài đăng riêng tư, đã xóa hoặc bị hạn chế theo khu vực có thể không tải được. Và chuyển đổi tệp không bao giờ làm nó tốt hơn: chất lượng âm thanh bạn nhận được chính là chất lượng của bài đăng gốc.'),
          p('Trong những giới hạn đó, nó giải quyết một vấn đề đơn giản. TikTok gắn âm thanh với video, còn công cụ chuyển đổi cho phép bạn tách âm thanh ra và giữ lại.'),
        ],
      },
      {
        id: 'cach-luu',
        title: 'Cách lưu âm thanh TikTok thành MP3 trong ba bước',
        blocks: [
          p('Bạn không cần tài khoản, và không bao giờ phải nhập mật khẩu TikTok ở bất cứ đâu.'),
          steps(
            ['Sao chép liên kết video.', 'Trong ứng dụng TikTok, mở video, nhấn Chia sẻ, rồi Sao chép liên kết. Hãy dùng liên kết đầy đủ của bài đăng cụ thể, không phải liên kết trang cá nhân. Liên kết bị cắt hoặc sai là lý do phổ biến nhất khiến tải xuống thất bại, và tài khoản đăng video phải ở chế độ công khai.'],
            ['Dán vào công cụ chuyển đổi.', 'Dán liên kết vào ô ở đầu trang này rồi gửi. Trang cần vài giây để đọc video.'],
            ['Chọn tùy chọn âm thanh và lưu.', 'Nếu có nút MP3 hoặc âm thanh, hãy nhấn vào và tệp sẽ được lưu vào điện thoại hoặc máy tính của bạn. Nếu không hiển thị tùy chọn âm thanh nào, video đó có thể không hỗ trợ.'],
          ),
          p('Tệp đã lưu chỉ có âm thanh, nên sẵn sàng cho danh sách phát hoặc trình biên tập ngay khi tải xong. Muốn tìm story thay vì âm thanh? Cùng trang web này cũng hỗ trợ, từ [trang chủ MusicalDown](/).'),
        ],
      },
      {
        id: 'ky-vong',
        title: 'Nên mong đợi gì từ bản tải MP3 TikTok',
        blocks: [
          h3('Chỉ có âm thanh, không có video'),
          p('Toàn bộ mục đích là tách riêng. Bạn giữ phần âm thanh và bỏ qua tệp video, giúp tiết kiệm dung lượng và không phải cắt clip trước khi dùng.'),
          h3('Tệp MP3 tiêu chuẩn'),
          p('MP3 phát được trên hầu hết điện thoại, laptop và ứng dụng nhạc, và phần mềm biên tập chấp nhận nó mà không rắc rối. Không cần tìm trình phát đặc biệt và không có bước chuyển đổi thêm.'),
          h3('Chất lượng tương ứng với nguồn'),
          p('Công cụ chuyển đổi không thể thêm chi tiết vốn không tồn tại. Bản tải lên sạch cho âm thanh sạch, còn bản bị rè vẫn bị rè. Điều này đúng với mọi công cụ, vì vậy hãy cảnh giác với bất kỳ trang nào hứa hẹn âm thanh hay hơn bản gốc.'),
          h3('Thường là một đoạn clip, không phải cả bài hát'),
          p('Âm thanh TikTok thường là đoạn trích ngắn, đoạn đã chỉnh sửa hoặc bản phối lại, nên tệp bạn lưu có thể chỉ là phần đó. Nếu muốn bản đầy đủ, hãy dùng clip đã lưu để nhận biết bài hát, rồi tìm bản đầy đủ qua dịch vụ nhạc có bản quyền.'),
          h3('Cách nhanh để nhận biết một âm thanh'),
          p('Nếu bạn đang cố tìm một bài hát nghe được trong video, lưu âm thanh thường là cách nhanh nhất. Khi tệp đã có trên thiết bị, bạn có thể phát lại bao nhiêu lần tùy ý.'),
          h3('Không đăng ký và không cần phần mềm'),
          p('Chạy ngay trong trình duyệt bạn đang mở. Không có gì để cài, không phải thêm tiện ích mở rộng và không có biểu mẫu đăng ký nào để điền.'),
        ],
      },
      {
        id: 'cach-dung',
        title: 'Những cách thực tế để dùng âm thanh TikTok đã lưu',
        blocks: [
          ul(
            'Nghe ngoại tuyến khi đi làm hoặc đi máy bay, không cần ứng dụng hay kết nối.',
            'Giữ lại một âm thanh bạn có thể muốn tham khảo cho nội dung của mình sau này.',
            'Biến một clip ngắn thành nhạc chuông hoặc âm báo thông báo.',
            'Lưu riêng phần lồng tiếng hoặc đoạn nói tách khỏi video của nó.',
            'Xây dựng bộ sưu tập cá nhân gồm nhạc, bản phối và đoạn trích khó tìm ở nơi khác.',
          ),
        ],
      },
      {
        id: 'ai-luu',
        title: 'Ai lưu âm thanh TikTok?',
        blocks: [
          p('Trên TikTok, âm thanh thường quan trọng hơn hình ảnh, và những người lưu nó thường biết chính xác mình cần nó để làm gì.'),
          cards(
            3,
            ['Người sáng tạo & biên tập video', 'Muốn có bản nhạc dùng ngay, kéo thẳng vào timeline, thay vì phải tách âm thanh từ video đã hoàn chỉnh trước.'],
            ['Người yêu nhạc', 'Tìm thấy một bài hát, bản phối hoặc đoạn trích trong ứng dụng và muốn giữ trong thư viện riêng thay vì phụ thuộc vào việc tìm lại video đó.'],
            ['Người dùng thông thường', 'Có những mục đích nhỏ hơn: nhạc chuông, clip giọng nói vui, một âm thanh cho đoạn đường đi làm. Điểm chung là mong muốn có âm thanh theo cách của riêng mình.'],
          ),
        ],
      },
      {
        id: 'thiet-bi',
        title: 'TikTok sang MP3 trên iPhone, Android, PC và Mac',
        blocks: [
          p('Vì mọi thứ diễn ra trong một trang web, thiết bị quan trọng ít hơn nhiều so với trình duyệt, và bất kỳ trình duyệt hiện đại nào cũng được.'),
          cards(
            2,
            ['iPhone', 'Mở công cụ trong Safari, dán liên kết rồi gửi. Sau khi tải, hãy xem trong ứng dụng Tệp, thường ở thư mục Tải xuống gắn với trình duyệt. Vị trí lưu chính xác có thể khác tùy phiên bản iOS và cài đặt trình duyệt, và bạn không cần App Store ở bất kỳ bước nào.'],
            ['Android', 'Dùng Chrome hoặc trình duyệt bạn đang có. Dán liên kết, nhấn tùy chọn âm thanh, rồi kiểm tra danh sách Tải xuống của trình duyệt hoặc trình quản lý tệp khi xong. Không cần APK và không cần cài đặt ngoài.'],
            ['PC Windows', 'Mở trang bằng Chrome hoặc Edge, dán URL video và chọn tùy chọn MP3. Tệp được lưu vào thư mục Downloads trừ khi bạn đặt vị trí khác, sau đó bạn có thể phát bằng bất kỳ trình phát nào hoặc chuyển vào thư viện nhạc.'],
            ['Mac', 'Safari và Chrome đều dùng được, và các bước giống như trên Windows. Kiểm tra thư mục Downloads hoặc lịch sử tải xuống của trình duyệt, rồi thêm tệp vào thư viện âm thanh hoặc dự án biên tập nếu bạn có quyền sử dụng.'],
          ),
        ],
      },
      {
        id: 'khac-phuc-su-co',
        title: 'Tải MP3 TikTok không được? Khắc phục sự cố',
        blocks: [
          p('Tải xuống thất bại thường có nguyên nhân đơn giản. Hãy kiểm tra lần lượt trước khi thử trang khác hoặc cài đặt bất cứ thứ gì:'),
          ol(
            ['Liên kết không đầy đủ.', 'Quay lại bài đăng và sao chép lại liên kết đầy đủ. Đó phải là video cụ thể, không phải trang cá nhân hay liên kết đã bị chỉnh sửa.'],
            ['Video không khả dụng.', 'Video riêng tư, đã xóa và bị hạn chế theo khu vực có thể không tải được. Hãy thử bài đăng công khai khác mà bạn có quyền lưu.'],
            ['Không có tùy chọn âm thanh nào xuất hiện.', 'Không phải video nào cũng cho tải âm thanh riêng. Nếu trang không hiện nút MP3 cho liên kết đó, có thể bài đăng đó không hỗ trợ.'],
            ['Trang chậm hoặc bị treo.', 'Kiểm tra kết nối, làm mới và dán lại liên kết. Dùng trình duyệt khác cũng có thể giúp ích.'],
            ['Tải xuống bị chặn hoặc bị gián đoạn.', 'Kiểm tra lịch sử tải xuống của trình duyệt, dung lượng trống và mọi cảnh báo bảo mật. Đừng tắt tính năng bảo mật để ép tải xuống.'],
            ['Tệp không phát được.', 'Xác nhận quá trình tải đã hoàn tất và phần mở rộng là .mp3. Nếu tệp có vẻ chưa đầy đủ, hãy xóa và tải lại.'],
            ['Bạn không tìm thấy tệp.', 'Kiểm tra thư mục Downloads hoặc danh sách tải xuống của trình duyệt. Trên iPhone, hãy mở ứng dụng Tệp trước.'],
          ),
          p('Nếu sự cố vẫn tiếp diễn, nguồn có thể tạm thời không khả dụng hoặc không được hỗ trợ.'),
        ],
      },
      {
        id: 'ban-quyen',
        title: 'Bản quyền, sự cho phép và sử dụng an toàn',
        blocks: [
          h3('Bản quyền và sự cho phép'),
          p('Rất nhiều nhạc trên TikTok có bản quyền. Lưu một bản nhạc để nghe riêng khác với việc đăng nó trong video của bạn hoặc dùng cho mục đích thương mại. Hãy lưu nội dung bạn sở hữu hoặc có quyền sử dụng, và kiểm tra quyền sử dụng, cùng với quy định của TikTok tại [trung tâm trợ giúp](https://support.tiktok.com), trước khi đưa âm thanh vào bất cứ thứ gì công khai.'),
          h3('Giữ an toàn cho tài khoản và thiết bị'),
          p('Công cụ tải chỉ cần liên kết video công khai. Để dùng an toàn hơn:'),
          ul(
            'Không bao giờ nhập mật khẩu TikTok hoặc mã xác minh vào bất kỳ công cụ tải nào. Nếu trang yêu cầu, hãy đóng lại.',
            'Bỏ qua các yêu cầu cài phần mềm bất ngờ, chuyển hướng đáng ngờ và tiện ích mở rộng đòi quyền không cần thiết.',
            'Đọc [chính sách quyền riêng tư](/privacy) của trang để biết cách xử lý các liên kết đã gửi.',
            'Giữ riêng tư các bản ghi âm cá nhân hoặc nhạy cảm.',
          ),
        ],
      },
    ],
    faqTitle: 'Câu hỏi thường gặp',
    faq: [
      { question: 'Tôi có thể chỉ tải nhạc từ video TikTok không?', answer: 'Có, khi video có tùy chọn âm thanh. Bạn lưu âm thanh thành MP3 và bỏ qua hoàn toàn tệp video.' },
      { question: 'Làm thế nào để chuyển TikTok sang MP3?', answer: 'Sao chép liên kết video TikTok công khai, dán vào công cụ, gửi và nhấn nút MP3 hoặc âm thanh. Sau đó lưu tệp vào thiết bị của bạn.' },
      { question: 'Âm thanh có định dạng gì?', answer: 'MP3, phát được trên hầu hết điện thoại, máy tính và ứng dụng nhạc.' },
      { question: 'MP3 có nghe hay hơn TikTok không?', answer: 'Không. Chuyển đổi không cải thiện chất lượng, nên tệp phản ánh âm thanh nguồn của bài đăng gốc.' },
      { question: 'Tôi có thể tải cả bài hát từ video TikTok không?', answer: 'Không nhất thiết. Nhiều âm thanh TikTok là đoạn trích ngắn, bản chỉnh sửa hoặc bản phối lại, nên bạn có thể chỉ nhận được phần đó. Hãy dùng nó để nhận biết bài hát, rồi tìm bản đầy đủ trên dịch vụ nhạc có bản quyền.' },
      { question: 'Tôi có thể chuyển âm thanh từ tài khoản riêng tư không?', answer: 'Không. Công cụ chỉ hoạt động với video công khai.' },
      { question: 'Tôi có cần tài khoản TikTok hoặc ứng dụng không?', answer: 'Không cần cả hai. Sao chép liên kết video công khai, dán vào trang và lưu tệp từ trình duyệt của bạn.' },
      { question: 'Có miễn phí không?', answer: 'Có. Tại thời điểm viết bài, công cụ miễn phí và không cần đăng ký. Hãy kiểm tra trang nếu có thay đổi.' },
      { question: 'Tôi có thể dùng âm thanh đã lưu trong video của mình không?', answer: 'Để nghe cá nhân thì nhìn chung là được. Với bất cứ thứ gì bạn đăng tải, đặc biệt là thương mại, hãy kiểm tra quyền sử dụng trước, vì nhiều bản nhạc có bản quyền.' },
      { question: 'Tệp MP3 đã tải được lưu ở đâu?', answer: 'Trong thư mục Tải xuống của trình duyệt, hoặc ứng dụng Tệp trên iPhone. Vị trí chính xác phụ thuộc vào thiết bị và cài đặt trình duyệt.' },
      { question: 'Dùng công cụ chuyển TikTok sang MP3 có an toàn không?', answer: 'An toàn nếu bạn dùng theo lẽ thường: không chia sẻ mật khẩu hay mã, bỏ qua các yêu cầu cài đặt bất ngờ và đọc chính sách quyền riêng tư. Không công cụ nào có thể hứa hẹn an toàn tuyệt đối, vì vậy hãy chỉ dùng nội dung công khai.' },
      { question: 'Vì sao liên kết của tôi không hoạt động?', answer: 'Nguyên nhân thường gặp là liên kết không đầy đủ, video riêng tư hoặc đã xóa, hoặc hạn chế theo khu vực. Hãy sao chép lại liên kết đầy đủ từ ứng dụng rồi thử lại. Phần khắc phục sự cố ở trên liệt kê mọi nguyên nhân phổ biến.' },
    ],
    finalTitle: 'Lời kết',
    finalText:
      'Âm thanh trên TikTok dễ mất và khó gọi tên. Lưu một âm thanh thành MP3 chỉ cần một liên kết công khai, một trình duyệt và vài giây, và bạn có tệp âm thanh sạch cho danh sách phát, trình biên tập hoặc danh sách nhạc chuông. Hãy giữ kỳ vọng thực tế: chất lượng là của bản gốc, tệp có thể chỉ là một phần bài hát, video riêng tư nằm ngoài giới hạn, và mọi thứ bạn đăng vẫn cần có quyền phù hợp.',
    ctaLabel: 'Dán liên kết và chuyển sang MP3',
    moreText: 'Khi đã sẵn sàng, hãy dán liên kết vào công cụ ở trên và xem video có cho tải âm thanh hay không.',
  },
};

/** Content for the "TikTok to MP3" page in the given language (falls back to English). */
export function getMp3Content(lang: string): ArticleContent {
  return MP3_PAGE[(lang in MP3_PAGE ? lang : defaultLang) as Lang];
}
