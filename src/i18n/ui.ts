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
    'site.title': 'MusicallyDown – TikTok Video Downloader Without Watermark TikTok to MP3',
    'site.description': 'Download TikTok videos without watermark in HD with Free MusicallyDown TikTok downloader. Save TikTok video as MP4 or MP3, free, with no app and no sign-up.',
    

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

    // Section 1
    'section1.title': 'Download TikTok Videos Online - ',
    'section1.highlight': 'No Watermark',
    'section1.paragraph': 'MusicallyDown is a free TikTok downloader to save TikTok video as an MP4 without watermark in the high quality. Musical down helps you to download videos from TikTok without watermark by using any browser on iPhone, Android and PC quickly and easily.',
    'section1.paragraph2': 'Musical Down helps you to work with supported TikTok video links in one place. Depending on the formats available for a TikTok video, you can save TikTok video as an MP4 or extract its audio as an MP3.',

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
    'how.description': 'Download a TikTok video in just 3 steps and about ten seconds: paste the link, then choose MP4 in step 3 to save it in HD, or choose MP3 to convert TikTok to audio, depending on the formats available for that video.',
    'how.step1.title': 'Copy the video link',
    'how.step1.text': 'Open the TikTok video, select Share, and choose Copy link. Make sure the video is accessible and you have permission to save it.',
    'how.step2.title': 'Paste it into MusicalDown',
    'how.step2.text': 'Return to this page, paste the URL into the downloader field, and submit it for processing.',
    'how.step3.title': 'Review and save',
    'how.step3.text': "Choose a format that is actually offered for your link, then follow the download prompt and check your device's downloads.",

    // Features grid (LogoCloud.astro)
    'features.eyebrow': 'Made for your workflow',
    'features.title': 'A practical TikTok video downloader',
    'features.description': 'Find the right option for the task at hand, without assuming every video supports every format or resolution.',
    'features.item1.title': 'TikTok downloader HD',
    'features.item1.text': 'Check which video resolutions are returned for a supported link. HD, 1080p and 4K are not guaranteed for every clip.',
    'features.item2.title': 'MP4 video options',
    'features.item2.text': 'When MP4 is offered, it provides a widely supported format for playback on many phones, tablets and computers.',
    'features.item3.title': 'TikTok sound downloader',
    'features.item3.text': 'If audio extraction is supported for your link, review the available audio or MP3 option before saving.',
    'features.item4.title': 'Watermark-free options',
    'features.item4.text': 'Check the results for a watermark-free option where available. Availability can vary by video and service behavior.',
    'features.item5.title': 'Works in your browser',
    'features.item5.text': 'Open the website in a compatible browser on iPhone, Android, Windows or Mac. File locations depend on your device.',
    'features.item6.title': 'No TikTok password needed',
    'features.item6.text': 'Never share your TikTok login credentials with a downloader. Use only the public link you intend to submit.',

    // Intro text (LogoCloud.astro)
    'intro.paragraph1': 'MusicalDown is a free online TikTok video downloader for people who want the video, not a pile of extra steps. The name goes back to the Musical.ly app, which later merged into TikTok, so many visitors still type “musically download online” or “musical down”. Under any spelling the idea is the same: take a public TikTok link and turn it into a file on your own device.',
    'intro.paragraph2': 'The page stays light, so it loads quickly even on a slow mobile connection.',

    // Bento Grid
    'bento.title': 'Everything you get with Musical Down ',
    'bento.highlight': 'TikTok Video Downloader',
    'bento.paragraph': 'MusicallyDown is the fastest TikTok Video Download tool that lets you download TikTok videos without watermark in HD quality. Save TikTok videos online in an MP4 format on any device.',
    'bento.paragraph1': 'If you search for MusicallyDown, Musically Down or musicallydown.com, you will find a free online TikTok downloader that is simple to use: copy the video link, paste it and save the file. The same page also includes a TikTok to MP3 converter for extracting audio from any video.',

    // ── Bento: TikTok video quality ──────────────────────────────
    'bento.quality.eyebrow': 'Know what to expect from MusicallyDown',
    'bento.quality.title': 'HD TikTok downloader: Save Tiktok videos up to 4K',
    'bento.quality.p1': 'The quality you can save Tiktok videos depends on the original video and the formats the Tiktok downloader returns. Select a resolution only when it is explicitly available; a downloader cannot create genuine detail that was not present in the source.',
    'bento.quality.p2': 'For large files, use a stable connection and make sure your device has enough free storage before starting the download.',
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
    'bento.quality.disclaimer': 'Illustrative guide only — these bars do not represent measured performance or a promise of availability.',
    // ── Bento: Use on mobile or desktop ──────────────────────────
    'bento.devices.eyebrow': 'One familiar process',
    'bento.devices.title': 'Use MusicalDown on mobile or desktop',
    'bento.devices.paragraph': 'Open the website in a current compatible browser and follow the same copy-link and paste-link workflow.',
    'bento.devices.iphone.title': 'iPhone',
    'bento.devices.iphone.desc': 'Check Safari’s downloads or the Files app.',
    'bento.devices.android.title': 'Android',
    'bento.devices.android.desc': 'Check your browser’s download list or Downloads folder.',
    'bento.devices.desktop.title': 'Desktop',
    'bento.devices.desktop.desc': 'Use your browser’s download manager or Downloads folder.',

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
    'about.title': 'About Musicallydown – Free TikTok Video & MP3 Downloader', // meta title
    'about.metaDescription': 'Learn what Musicallydown is, how our free TikTok downloader works, what we do with your data, and how we encourage responsible, permission-based downloading.',
    'about.titleStart': 'About ',
    'about.titleHighlight': 'Musicallydown',

    'about.intro1': 'Musicallydown is a free, browser-based tool that helps you save TikTok videos as MP4 files and extract the audio as MP3, when those formats are available. There is nothing to install and no account to create. You copy a video link, paste it into the box on our homepage and choose the file you want.',
    'about.intro2': "We built Musicallydown because saving a TikTok you made or a clip you have permission to keep, should not require an app, a login or a pile of pop-ups. Our goal is simple: a fast, clear tool that works on iPhone, Android and desktop browsers.",

    'about.doesTitle': 'What Musicallydown does',
    'about.does1.title': 'Downloads TikTok videos as MP4.',
    'about.does1.text': ' Where the source offers it, you can choose a clean version without the TikTok watermark in SD or HD.',
    'about.does2.title': 'Converts TikTok to MP3.',
    'about.does2.text': ' Extract the sound from a supported video and save it as an audio file.',
    'about.does3.title': 'Works in your browser.',
    'about.does3.text': ' Chrome, Safari, Firefox, Edge and other modern browsers on phones, tablets and computers.',
    'about.does4.title': 'Needs no sign-up.',
    'about.does4.text': ' We never ask for your TikTok username or password.',
    'about.does5.title': 'Speaks your language.',
    'about.does5.text': ' The site is available in English, <a href="/es">Spanish</a>, <a href="/id">Indonesian</a> and <a href="/vi">Vietnamese</a>, with more planned.',

    'about.howTitle': 'How it works',
    'about.how1': 'Open TikTok, find the video and tap Share, then Copy Link.',
    'about.how2': 'Paste the link into the Musicallydown box.',
    'about.how3': 'Choose an available format or quality.',
    'about.how4': 'Save the file to your device.',
    'about.howNote': 'Results depend on the original video. Private, deleted, age-restricted or region-limited videos cannot be downloaded, and not every video offers every format. We save audio the way TikTok stores it, so we do not offer a 320 kbps option; a higher label would not add real quality.',

    'about.principlesTitle': 'Our principles',
    'about.principle1.title': 'Free and simple.',
    'about.principle1.text': ' The tool is free to use and supported by advertising. We keep the interface as uncluttered as we can.',
    'about.principle2.title': 'Privacy first.',
    'about.principle2.text': ' We do not ask you to register, and we do not need your TikTok credentials. Read our <a href="/privacy">Privacy Policy</a> for exactly what is processed.',
    'about.principle3.title': 'Respect for creators.',
    'about.principle3.text': 'Videos and music on TikTok belong to their creators. Please download only your own content or content you have permission to save and do not repost other peoples work as your own. See our <a href="/privacy">Privacy Policy</a>.',
    'about.principle4.title': 'Honest expectations.',
    'about.principle4.text': ' TikTok changes often. When something stops working we would rather say so than overpromise. If a download fails, check the <a href="/faq">FAQ</a> or contact us.',

    'about.independentTitle': 'Independent service',
    'about.independentText': 'Musicaldown is an independent tool. It is not affiliated with, endorsed by or sponsored by TikTok or ByteDance Ltd. TikTok is a trademark of its respective owner and is used only to describe the content our tool works with.',

    'about.contactTitle': 'Contact',
    'about.contactText': 'Questions, bug reports, removal requests or business enquiries: <a href="mailto:support@Musicaldown.com">support@Musicaldown.com</a>. We read every message and aim to reply within 2–3 business days.',
    
        // ───────────── Privacy Page ─────────────
    'privacy.metaTitle': 'Privacy Policy – Musicaldown',
    'privacy.metaDescription': 'How Musicaldown handles TikTok links, device data, cookies and advertising. No account needed and no TikTok login requested.',
    'privacy.title': 'Privacy Policy',
    'privacy.effective': 'Effective date: October 20, 2026',
    'privacy.updated': 'Last updated: October 20, 2026',
    'privacy.intro': 'This Privacy Policy explains what information Musicaldown (“we”, “us”, “our”) collects when you use Musicaldown.com and its language versions (the “Site”), how we use it and what choices you have. By using the Site you agree to this policy.',

    'privacy.s1.title': '1. Information we collect',
    'privacy.s1.provided.title': 'Information you provide.',
    'privacy.s1.provided.text': ' When you use the downloader you paste a TikTok video URL. We use that URL only to fetch the public video or audio information you asked for. You do not need to create an account, and we never ask for your TikTok username or password. If you contact us by email, we receive your email address and the contents of your message.',
    'privacy.s1.auto.title': 'Information collected automatically.',
    'privacy.s1.auto.text': ' Like most websites, our servers and service providers may collect technical data such as:',
    'privacy.s1.auto1': 'IP address and approximate location (country or region)',
    'privacy.s1.auto2': 'Browser type and version, device type and operating system',
    'privacy.s1.auto3': 'Pages visited, referring page, date and time of visit and language settings',
    'privacy.s1.auto4': 'Error logs and performance data',
    'privacy.s1.cookies.title': 'Cookies and similar technologies.',
    'privacy.s1.cookies.text': ' We and our partners use cookies, local storage and similar technologies to remember your language choice, measure traffic and show advertising. See section 4.',

    'privacy.s2.title': '2. How we use information',
    'privacy.s2.item1': 'To provide the downloader and return the files you request',
    'privacy.s2.item2': 'To detect abuse, prevent automated misuse and keep the Site secure',
    'privacy.s2.item3': 'To understand which pages and features are used, and to improve speed and reliability',
    'privacy.s2.item4': 'To show advertising that supports a free service',
    'privacy.s2.item5': 'To respond to messages and legal requests',
    'privacy.s2.item6': 'To comply with applicable law',
    'privacy.s2.note': 'We do not sell your personal information for money.',

    'privacy.s3.title': '3. Downloaded files and submitted links',
    'privacy.s3.text': 'Video and audio files are delivered to your browser from the original source or through our processing service. We do not intentionally keep copies of the videos you download, and we do not build user profiles from the links you submit. Technical logs that include the submitted URL may be kept for a limited time for security and debugging, as described in section 7.',

    'privacy.s4.title': '4. Advertising and third-party services',
    'privacy.s4.p1': 'The Site is supported by advertising. Advertising partners such as Google AdSense may use cookies and identifiers to show and measure ads, including personalised ads where permitted by law. These partners have their own privacy policies and we do not control their practices.',
    'privacy.s4.p2': 'We may also use analytics tools such as Google Analytics and hosting and infrastructure providers such as Vercel and Cloudflare to run and measure the Site.',
    'privacy.s4.choicesIntro': 'You can manage advertising choices through:',
    'privacy.s4.choice1': 'Your browser settings, to block or delete cookies',
    'privacy.s4.choice2': 'Google Ads Settings (<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>) to control personalised ads',
    'privacy.s4.choice3': 'The Digital Advertising Alliance (<a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a>) and the Your Online Choices site (<a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a>) for EU users',
    'privacy.s4.note': 'Blocking cookies may affect how some parts of the Site work.',

    'privacy.s5.title': '5. Legal bases (EEA, UK and similar regions)',
    'privacy.s5.text': 'Where data protection law such as the GDPR applies, we process personal data on these bases: our legitimate interests in operating, securing and improving the Site; your consent for non-essential cookies and personalised advertising, which you can withdraw at any time; and compliance with legal obligations.',

    'privacy.s6.title': '6. Sharing of information',
    'privacy.s6.text': 'We share information only with service providers that help us run the Site (hosting, analytics, advertising, security), when required by law or to protect our rights and users, and in connection with a business transfer such as a merger or sale. These providers may process data only for the purposes described here.',

    'privacy.s7.title': '7. Data retention',
    'privacy.s7.text': 'We keep technical logs for as long as needed for security and troubleshooting, generally no more than 90 days, unless a longer period is required by law. Emails you send us are kept as long as needed to handle your request. Third-party partners follow their own retention periods.',

    'privacy.s8.title': '8. International transfers',
    'privacy.s8.text': 'Our providers may process data in countries other than your own, including the United States. Where required, we rely on appropriate safeguards for those transfers.',

    'privacy.s9.title': '9. Your rights',
    'privacy.s9.text': 'Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal data, to object to processing, to withdraw consent and to complain to your local data protection authority. California residents may also have the right to know what is collected and to opt out of the “sale” or “sharing” of personal information for cross-context advertising. To make a request, email <a href="mailto:support@Musicaldown.com">support@Musicaldown.com</a>. We may need to verify your identity first.',

    'privacy.s10.title': "10. Children's privacy",
    'privacy.s10.text': 'The Site is not directed to children under 13 (or under 16 where local law requires). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.',

    'privacy.s11.title': '11. Security',
    'privacy.s11.text': 'We use reasonable technical and organisational measures, including HTTPS, to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',

    'privacy.s12.title': '12. External links',
    'privacy.s12.text': 'The Site may link to other websites. We are not responsible for their content or privacy practices.',

    'privacy.s13.title': '13. Changes to this policy',
    'privacy.s13.text': 'We may update this policy from time to time. The “Last updated” date at the top shows the latest version. Continued use of the Site after changes means you accept the updated policy.',

    'privacy.s14.title': '14. Contact',
    'privacy.s14.name': 'Musicaldown',
    'privacy.s14.emailLabel': 'Email:',
    'privacy.s14.websiteLabel': 'Website:',

    // ───────────── Terms Page ─────────────
    'terms.metaTitle': 'Terms of Service – Musicaldown',
    'terms.metaDescription': "The rules for using Musicaldown's free TikTok video and MP3 downloader, including permitted use, copyright, disclaimers and liability.",
    'terms.title': 'Terms of Service',
    'terms.effective': 'Effective date: October 20, 2026',
    'terms.intro': 'These Terms of Service (“Terms”) govern your use of Musicaldown.com and its language versions (the “Site”) and the TikTok downloader and related tools we provide (the “Service”). By using the Service you agree to these Terms. If you do not agree, please do not use it.',

    'terms.s1.title': '1. The Service',
    'terms.s1.text': 'Musicaldown lets you submit a link to a public TikTok video and, where available, receive the video as an MP4 file or the audio as an MP3 file. The Service is provided free of charge and is supported by advertising. Availability, quality and formats depend on the original content and on third-party platforms, and may change or stop at any time.',

    'terms.s2.title': '2. Eligibility',
    'terms.s2.text': 'You must be old enough to form a binding contract in your country, or have permission from a parent or guardian, and you must not be barred from using the Service under applicable law.',

    'terms.s3.title': '3. Permitted use',
    'terms.s3.intro': 'You may use the Service for personal, non-commercial purposes only to save:',
    'terms.s3.item1': 'content that you created and own, or',
    'terms.s3.item2': 'content that you have permission from the rights holder to download, or',
    'terms.s3.item3': 'content that you are otherwise legally allowed to save.',

    'terms.s4.title': '4. Prohibited use',
    'terms.s4.intro': 'You agree not to:',
    'terms.s4.item1': 'Download, copy, republish or distribute content in a way that infringes copyright, trademark, privacy or other rights',
    'terms.s4.item2': "Repost another creator's content as your own or remove credit from it",
    'terms.s4.item3': 'Use the Service for any unlawful, harmful, harassing or deceptive purpose',
    'terms.s4.item4': 'Download content depicting minors in a harmful way, or private content you are not authorised to access',
    'terms.s4.item5': 'Use bots, scrapers or automated scripts to overload, test or abuse the Service, or attempt to bypass rate limits or security measures',
    'terms.s4.item6': 'Reverse engineer, resell or provide the Service to others as your own',
    'terms.s4.item7': 'Interfere with ads, disrupt the Site or attempt to gain unauthorised access to our systems',

    'terms.s5.title': '5. Your responsibility for content',
    'terms.s5.text': "You are solely responsible for the content you download and how you use it. We do not host the videos on TikTok, we do not review them, and we do not verify that you have the right to download them. Saving content may also be restricted by TikTok's own terms of service, which you are responsible for reading.",

    'terms.s6.title': '6. No affiliation',
    'terms.s6.text': 'Musicaldown is an independent service. It is not affiliated with, endorsed or sponsored by TikTok or ByteDance Ltd. All trademarks, logos and content belong to their respective owners.',

    'terms.s7.title': '7. Intellectual property',
    'terms.s7.text': "The Site's design, text, code and branding (excluding third-party content) belong to Musicaldown or its licensors and are protected by law. You may not copy or reuse them without permission. Content downloaded through the Service remains the property of its respective creators and rights holders.",

    'terms.s8.title': '8. Copyright complaints (DMCA)',
    'terms.s8.text': 'We respect intellectual property rights. If you believe content processed through the Service infringes your copyright, email <a href="mailto:support@Musicaldown.com">support@Musicaldown.com</a> with: your name and contact details; a description of the copyrighted work; the URL of the material; a statement that you have a good-faith belief the use is unauthorised; and a statement, under penalty of perjury, that your notice is accurate and that you are the owner or authorised to act for the owner. We will review valid notices and take appropriate action, which may include blocking the specific link and restricting repeat infringers. Because we do not host the original videos, the original platform is the best place to request removal of the video itself.',

    'terms.s9.title': '9. Advertising and third-party links',
    'terms.s9.text': 'The Site displays advertisements and may link to third-party websites. We are not responsible for third-party ads, sites, products or services, and your dealings with them are your own responsibility. Please be careful with downloads or offers that appear outside our tool.',

    'terms.s10.title': '10. Disclaimer of warranties',
    'terms.s10.text': 'The Service is provided “as is” and “as available” without warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, non-infringement or uninterrupted or error-free operation. We do not guarantee that any video or audio will be available, that any specific quality or format will be offered, or that files will be free of errors.',

    'terms.s11.title': '11. Limitation of liability',
    'terms.s11.text': 'To the fullest extent permitted by law, Musicaldown and its owners and affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, profits or goodwill, arising from your use of or inability to use the Service. Our total liability for any claim relating to the Service will not exceed USD 100. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.',

    'terms.s12.title': '12. Indemnification',
    'terms.s12.text': "You agree to indemnify and hold harmless Musicaldown and its owners from claims, losses and expenses (including reasonable legal fees) arising from your misuse of the Service, your violation of these Terms or your infringement of any third party's rights.",

    'terms.s13.title': '13. Suspension and termination',
    'terms.s13.text': 'We may limit, suspend or block access to the Service at any time, without notice, for any reason, including suspected abuse or violation of these Terms.',

    'terms.s14.title': '14. Changes to the Service and Terms',
    'terms.s14.text': 'We may modify or discontinue the Service and update these Terms at any time. The effective date above shows the latest version. Continued use after changes means you accept them.',

    'terms.s15.title': '15. Governing law',
    'terms.s15.text': 'These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict-of-law rules. Disputes will be resolved in the courts of [city, jurisdiction], unless mandatory consumer law in your country says otherwise.',

    'terms.s16.title': '16. Contact',
    'terms.s16.text': 'Questions about these Terms: <a href="mailto:support@Musicaldown.com">support@Musicaldown.com</a>.',


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
    'hero.badge1': 'Sin marca de agua',
    'hero.badge2': 'Calidad HD',
    'hero.badge3': 'MP4 y MP3',
    'hero.badge4': 'Gratis, sin registro',
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
    'hero.badge1': 'Tanpa Watermark',
    'hero.badge2': 'Kualitas HD',
    'hero.badge3': 'MP4 & MP3',
    'hero.badge4': 'Gratis, Tanpa Daftar',
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
    'hero.badge1': 'Không logo',
    'hero.badge2': 'Chất lượng HD',
    'hero.badge3': 'MP4 & MP3',
    'hero.badge4': 'Miễn phí, không cần đăng ký',
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