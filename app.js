"use strict";

/**
 * NV. SmartAssist V1 — local-only scripted demonstration.
 * No external APIs, no fetch(), no analytics, no persistence, no AI model.
 * All chat and form text is handled in memory and rendered via textContent.
 * Production integrations MUST be implemented server-side, never here.
 */

const ui = {
  en: {
    welcome: "Ayubowan! I'm NV. SmartAssist — a rule-based demonstration of a digital front desk for NV SHARP SOLUTIONS. Ask about website experiences, automation, project planning or security. I'm not connected to a live AI or business inbox.",
    prompt: "Ask a question about our services…",
    hint: "Enter to send · Shift + Enter for a new line",
    privacy: "Scripted demo. No messages are sent to a server or saved.",
    suggestions: { websites: "Tell me about websites", automation: "How does automation work?", pricing: "How can I get a quote?" },
    labels: { websites: "Web experiences", automation: "Automations", chatbot: "Chatbot concept", pricing: "Getting a quote", security: "Security approach", process: "Our process", portfolio: "Portfolio", contact: "Contact", fallback: "No matched rule" },
    promptByTopic: { websites: "Tell me about your web development services", automation: "What is business automation?", chatbot: "How does a business chatbot work?", pricing: "How can I get a project quote?", security: "How do you approach website security?" },
    ready: "Ready for a question", rule: "A local rule will choose a predefined response.", matched: "Matched by local keywords; no AI model was used.", fallback: "No matching keyword rule. Try one of the suggested topics.",
    me: "You", bot: "NV. SmartAssist", toastCopy: "Demo reply copied", toastCopyUnavailable: "Copy isn't available in this browser", toastNoReply: "No demo reply to copy yet", toastEmpty: "Type a question first", toastLimit: "Message limit reached. Reset to start a new demo.",
    responses: {
      websites: "NV SHARP SOLUTIONS develops business websites, landing pages and creative digital web experiences. Each project can be scoped for your brand, content and device requirements. This is a sample answer — a real quote requires a project discussion.",
      automation: "Business automation connects repetitive steps such as form enquiries, approved customer records and notification workflows. For example: website enquiry → secure server endpoint → authorized automation → business inbox. Integrations shown on this page are future possibilities, not active connections.",
      chatbot: "A chatbot can help visitors find information and direct questions to your team. This version uses predefined, keyword-based responses — not generative AI. A future AI edition would need an authenticated backend, approved knowledge sources, privacy rules, rate limits and human handover.",
      pricing: "There isn't a fixed project price in this demo. A responsible estimate depends on scope, pages, integrations, maintenance and security needs. Please use the verified contact options on the official NV SHARP SOLUTIONS website to request a tailored discussion.",
      process: "A typical delivery path is discovery → scope and proposal → design → development → testing → handover. Timelines and deliverables are agreed for each project; this demo does not promise a specific turnaround time.",
      security: "We approach projects with security-by-design: input validation, access controls, safe secret storage and relevant testing. No website or AI system should be described as 100% secure. This static demo sends no chat text to a backend and contains no API credentials.",
      portfolio: "Explore existing public demos and selected work through the official NV SHARP SOLUTIONS portfolio. Follow the link below; the demo does not invent client testimonials or projects.",
      contact: "For a real enquiry, please use the contact channels displayed on the official NV SHARP SOLUTIONS website. This chat and its enquiry preview do not send messages to the business.",
      greeting: "Hello! I'm ready to demonstrate scripted answers about websites, automation, chatbot concepts, project planning and security. Choose a topic or ask a short question.",
      fallback: "I don't have a predefined response for that question yet. This V1 demo is not powered by live AI. Try asking about web development, automation, pricing, chatbot features or security."
    }
  },
  si: {
    welcome: "ආයුබෝවන්! මම NV. SmartAssist. මෙය NV SHARP SOLUTIONS වෙනුවෙන් නිර්මාණය කළ, කලින් සකස් කළ පිළිතුරු ලබාදෙන demo assistant එකකි. Websites, Automation, Project Planning හෝ Security ගැන විමසන්න. මෙය සජීවී AI සේවාවකට සම්බන්ධ නැහැ.",
    prompt: "අපගේ සේවා ගැන ප්‍රශ්නයක් අසන්න…",
    hint: "Enter = යවන්න · Shift + Enter = නව පේළිය",
    privacy: "මෙය scripted demo එකකි. පණිවිඩ server එකකට නොයවයි; save නොකරයි.",
    suggestions: { websites: "Website සේවා ගැන කියන්න", automation: "Automation කියන්නේ මොකක්ද?", pricing: "මිල ගණන් ලබාගන්නේ කොහොමද?" },
    labels: { websites: "වෙබ් අත්දැකීම්", automation: "ස්වයංක්‍රීයකරණය", chatbot: "Chatbot සංකල්පය", pricing: "මිල විමසීම", security: "ආරක්ෂක ක්‍රම", process: "වැඩ ක්‍රියාවලිය", portfolio: "Portfolio", contact: "සම්බන්ධ වීම", fallback: "නොගැළපෙන ප්‍රශ්නය" },
    promptByTopic: { websites: "Website නිර්මාණ සේවා ගැන කියන්න", automation: "Business automation ගැන කියන්න", chatbot: "Chatbot එකක් කොහොමද වැඩ කරන්නේ?", pricing: "Project එකකට මිල ගණන් ලබාගන්නේ කොහොමද?", security: "Website security ගැන ඔබලාගේ ක්‍රමවේදය කුමක්ද?" },
    ready: "ප්‍රශ්නයක් ඇසීමට සූදානම්", rule: "ඔබගේ ප්‍රශ්නයට ගැළපෙන demo පිළිතුරක් local rules මඟින් තෝරයි.", matched: "Local keywords මඟින් තෝරාගත් පිළිතුරකි; AI model භාවිත නොවේ.", fallback: "ගැළපෙන keyword එකක් නැහැ. යෝජිත ප්‍රශ්නයක් තෝරන්න.",
    me: "ඔබ", bot: "NV. SmartAssist", toastCopy: "Demo පිළිතුර copy කළා", toastCopyUnavailable: "මෙම browser එකේ copy පහසුකම නැහැ", toastNoReply: "Copy කිරීමට පිළිතුරක් නැහැ", toastEmpty: "පළමුව ප්‍රශ්නයක් ලියන්න", toastLimit: "Demo සීමාවට ළඟා වුණා. Reset කරන්න.",
    responses: {
      websites: "NV SHARP SOLUTIONS මඟින් business websites, landing pages සහ creative web experiences නිර්මාණය කිරීමේ සේවා සැලසුම් කරයි. නිශ්චිත අවශ්‍යතා අනුව scope එක තීරණය කළ යුතුයි. මෙය demo පිළිතුරක් මිස client quotation එකක් නොවේ.",
      automation: "Business Automation මඟින් website enquiries, අනුමත records සහ notifications වැනි නැවත නැවත සිදුවන වැඩ ස්වයංක්‍රීය කළ හැකියි. උදාහරණයක්: enquiry form → secure backend → automation → business inbox. මේ demo එකේ එම integrations සජීවීව ක්‍රියාත්මක නොවේ.",
      chatbot: "Chatbot එකක් මඟින් පාරිභෝගිකයන්ට සාමාන්‍ය තොරතුරු ලබාදී අවශ්‍ය අවස්ථාවල කාර්ය මණ්ඩලය වෙත යොමු කළ හැකියි. මෙම V1 version එක predefined replies භාවිත කරයි; සජීවී AI භාවිත නොකරයි. අනාගත AI version එකට secure backend, approved knowledge සහ privacy controls අවශ්‍යයි.",
      pricing: "මෙම demo එකේ ස්ථිර මිලක් සඳහන් කර නැහැ. Project scope, integrations, maintenance සහ security අවශ්‍යතා අනුව මිල තීරණය වේ. සැබෑ quotation එකක් සඳහා නිල NV SHARP SOLUTIONS වෙබ් අඩවියේ contact options භාවිත කරන්න.",
      process: "සාමාන්‍ය ක්‍රියාවලිය: අවශ්‍යතා සාකච්ඡා කිරීම → scope සහ proposal → design → development → testing → handover. Project එක අනුව කාලසීමා සහ deliverables වෙනස් වේ.",
      security: "අපගේ ප්‍රවේශය security-first ය: input validation, access controls, secrets ආරක්ෂා කිරීම සහ testing. කිසිදු පද්ධතියක් 100% secure බව තහවුරු කළ නොහැකියි. මෙම demo එක chat data server එකකට නොයවයි.",
      portfolio: "NV SHARP SOLUTIONS නිල Portfolio පිටුවේ පවතින public projects බලන්න. පහත link එක භාවිත කරන්න. මෙහි කල්පිත clients හෝ testimonials නොමැත.",
      contact: "සැබෑ business enquiry එකක් සඳහා NV SHARP SOLUTIONS නිල වෙබ් අඩවියේ contact options භාවිත කරන්න. මෙම demo chat එකෙන් පණිවිඩ යවන්නේ නැහැ.",
      greeting: "ආයුබෝවන්! Websites, Automation, Chatbots, Project Planning සහ Security පිළිබඳ demo ප්‍රශ්න අසන්න.",
      fallback: "මෙම ප්‍රශ්නයට කලින් සකස් කළ පිළිතුරක් නැහැ. මේ V1 demo එක සජීවී AI භාවිත නොකරයි. Website, Automation, Pricing හෝ Security ගැන අසන්න."
    }
  },
  ta: {
    welcome: "வணக்கம்! நான் NV. SmartAssist. NV SHARP SOLUTIONS-க்காக உருவாக்கப்பட்ட, முன்கூட்டியே எழுதப்பட்ட பதில்களை வழங்கும் செயல்விளக்க உதவியாளர். இணையதளங்கள், தானியக்கம், திட்டமிடல், பாதுகாப்பு பற்றி கேளுங்கள். இது நேரடி AI சேவை அல்ல.",
    prompt: "எங்கள் சேவைகள் பற்றி கேளுங்கள்…",
    hint: "Enter = அனுப்பு · Shift + Enter = புதிய வரி",
    privacy: "இது முன்வரையறுக்கப்பட்ட செயல்விளக்கம். தகவல் அனுப்பப்படவோ சேமிக்கப்படவோ இல்லை.",
    suggestions: { websites: "இணையதள சேவைகள்?", automation: "தானியக்கம் என்றால்?", pricing: "விலை மதிப்பீடு பெறுவது எப்படி?" },
    labels: { websites: "இணைய அனுபவங்கள்", automation: "தானியக்கம்", chatbot: "Chatbot மாதிரி", pricing: "விலை விவரம்", security: "பாதுகாப்பு", process: "செயல்முறை", portfolio: "படைப்புகள்", contact: "தொடர்பு", fallback: "பொருந்தாத கேள்வி" },
    promptByTopic: { websites: "இணையதள வடிவமைப்பு சேவைகள் பற்றி சொல்லுங்கள்", automation: "வணிக தானியக்கம் என்றால் என்ன?", chatbot: "Chatbot எப்படி வேலை செய்கிறது?", pricing: "திட்டத்திற்கு விலை மதிப்பீடு பெறுவது எப்படி?", security: "இணையதள பாதுகாப்பை எப்படி கையாளுகிறீர்கள்?" },
    ready: "கேள்விக்குத் தயாராக உள்ளது", rule: "உள்ளூர் விதிகள் முன்வரையறுக்கப்பட்ட பதிலைத் தேர்வு செய்யும்.", matched: "உள்ளூர் முக்கியச் சொற்கள் மூலம் தேர்ந்தெடுக்கப்பட்டது; AI பயன்படுத்தவில்லை.", fallback: "பொருந்தும் விதி இல்லை. பரிந்துரைக்கப்பட்ட தலைப்பைத் தேர்வு செய்யுங்கள்.",
    me: "நீங்கள்", bot: "NV. SmartAssist", toastCopy: "பதில் நகலெடுக்கப்பட்டது", toastCopyUnavailable: "இந்த உலாவியில் நகலெடுக்க முடியவில்லை", toastNoReply: "நகலெடுக்க பதில் இல்லை", toastEmpty: "முதலில் கேள்வியை எழுதுங்கள்", toastLimit: "செயல்விளக்க வரம்பை அடைந்துவிட்டீர்கள். மீட்டமைக்கவும்.",
    responses: {
      websites: "NV SHARP SOLUTIONS வணிக இணையதளங்கள், landing pages மற்றும் படைப்பாற்றல் கொண்ட இணைய அனுபவங்களுக்கான சேவைகளைத் திட்டமிடுகிறது. உண்மையான மதிப்பீடு திட்டத்தின் தேவைகளைப் பொறுத்தது. இது மாதிரிப் பதில் மட்டுமே.",
      automation: "வணிக தானியக்கம் மூலம் enquiry forms, அனுமதிக்கப்பட்ட பதிவுகள் மற்றும் அறிவிப்புகள் போன்ற பணிகளை இணைக்கலாம். உதாரணம்: இணையப் படிவம் → பாதுகாப்பான backend → தானியக்கம் → வணிக மின்னஞ்சல். இந்த இணைப்புகள் தற்போதைய செயல்விளக்கத்தில் இயங்கவில்லை.",
      chatbot: "Chatbot வாடிக்கையாளர்களுக்குத் தகவல் அளிக்கவும் தேவைப்படும்போது மனித ஊழியரிடம் வழிமாற்றவும் உதவும். இந்த V1 முன்வரையறுக்கப்பட்ட பதில்களைப் பயன்படுத்துகிறது; நேரடி AI அல்ல. எதிர்கால AI பதிப்பிற்கு பாதுகாப்பான backend மற்றும் தரவுப் பாதுகாப்பு தேவை.",
      pricing: "இந்த செயல்விளக்கத்தில் நிரந்தர விலை இல்லை. திட்டத்தின் அளவு, இணைப்புகள், பராமரிப்பு மற்றும் பாதுகாப்புத் தேவைகள் அடிப்படையில் மதிப்பீடு செய்ய வேண்டும். உண்மையான விவரங்களுக்கு அதிகாரப்பூர்வ இணையதளத்தின் தொடர்பு முறைகளைப் பயன்படுத்துங்கள்.",
      process: "பொதுவான நடைமுறை: தேவைகளை அறிதல் → திட்ட வரையறை → வடிவமைப்பு → உருவாக்கம் → சோதனை → ஒப்படைப்பு. நேரமும் வழங்கல்களும் திட்டத்திற்கு ஏற்ப மாறும்.",
      security: "பாதுகாப்பை முதன்மைப்படுத்துகிறோம்: உள்ளீட்டு சரிபார்ப்பு, அணுகல் கட்டுப்பாடுகள், ரகசியத் தகவல் பாதுகாப்பு மற்றும் சோதனை. எந்த அமைப்பும் 100% பாதுகாப்பானது என்று கூற முடியாது. இந்த demo தகவலை server-க்கு அனுப்புவதில்லை.",
      portfolio: "NV SHARP SOLUTIONS-இன் அதிகாரப்பூர்வ Portfolio பக்கத்தில் பொதுவில் உள்ள படைப்புகளைப் பார்க்கலாம். கீழேயுள்ள இணைப்பைப் பயன்படுத்துங்கள்; கற்பனையான வாடிக்கையாளர்கள் இங்கு காட்டப்படவில்லை.",
      contact: "உண்மையான வணிக விசாரணைக்கு அதிகாரப்பூர்வ NV SHARP SOLUTIONS இணையதளத்தில் உள்ள தொடர்பு முறைகளைப் பயன்படுத்துங்கள். இந்த செயல்விளக்க அரட்டை செய்திகளை அனுப்பாது.",
      greeting: "வணக்கம்! இணையதளம், தானியக்கம், chatbot, திட்டமிடல் மற்றும் பாதுகாப்பு பற்றி மாதிரி கேள்விகளை கேளுங்கள்.",
      fallback: "இந்தக் கேள்விக்கு முன்வரையறுக்கப்பட்ட பதில் இல்லை. இது நேரடி AI அல்ல. இணையதளம், தானியக்கம், விலை அல்லது பாதுகாப்பு பற்றி கேளுங்கள்."
    }
  }
};

// First matching rule wins. Keep price/security keywords ahead of generic service terms.
const intentRules = [
  { id: "pricing", terms: ["pricing", "price", "cost", "quote", "budget", "charge", "how much", "මිල", "ගාස්තු", "කීය", "quotation", "விலை", "செலவு", "மதிப்பீடு"] },
  { id: "security", terms: ["security", "secure", "privacy", "safe", "data protection", "ආරක්ෂ", "රහස්‍ය", "பாதுகாப்பு", "தனியுரிமை"] },
  { id: "portfolio", terms: ["portfolio", "previous projects", "your work", "demo projects", "ව්‍යාපෘති", "නිර්මාණ", "படைப்புகள்", "திட்டங்கள்"] },
  { id: "process", terms: ["process", "timeline", "steps", "how long", "delivery", "ක්‍රියාවලිය", "කාලය", "සැලැස්ම", "செயல்முறை", "நேரம்", "எவ்வளவு நாள்"] },
  { id: "contact", terms: ["contact", "reach you", "phone", "email address", "whatsapp", "සම්බන්ධ", "අමත", "தொடர்பு", "தொலைபேசி"] },
  { id: "automation", terms: ["automation", "automate", "workflow", "repetitive", "make.com", "n8n", "ස්වයංක්‍රීය", "ஆட்டோமேஷன்", "தானியக்கம்", "தானியங்கி"] },
  { id: "chatbot", terms: ["chatbot", "assistant", "ai bot", "virtual agent", "customer support", "චැට්බොට්", "බොට්", "உதவியாளர்", "சாட்பாட்"] },
  { id: "websites", terms: ["website", "websites", "web development", "web design", "landing page", "web experience", "web", "වෙබ්", "වෙබ්සයිට්", "අඩවිය", "இணையதளம்", "இணைய", "வலைத்தளம்"] },
  { id: "greeting", terms: ["hello", "hey", "hi ", "good morning", "ayubowan", "ආයුබෝවන්", "හෙලෝ", "வணக்கம்"] }
];

const els = {
  chatMessages: document.getElementById("chatMessages"),
  chatForm: document.getElementById("chatForm"),
  chatInput: document.getElementById("chatInput"),
  sendBtn: document.getElementById("sendBtn"),
  resetChat: document.getElementById("resetChat"),
  suggestions: document.getElementById("suggestions"),
  charCount: document.getElementById("charCount"),
  inputHint: document.getElementById("inputHint"),
  privacyMessage: document.getElementById("privacyMessage"),
  detectedTopic: document.getElementById("detectedTopic"),
  detectedReason: document.getElementById("detectedReason"),
  copyReply: document.getElementById("copyReply"),
  toast: document.getElementById("toast"),
  dialog: document.getElementById("leadDialog"),
  leadForm: document.getElementById("leadForm"),
  leadResult: document.getElementById("leadResult")
};

const MAX_EXCHANGES = 18;
const portfolioUrl = "https://nv-sharp-solutions.pages.dev/#portfolio";

const FAQ_PREVIEW_HOST =
  "neon-preview.nv-smartassist.pages.dev";

let approvedFaqs = [];

function normalizeFaqQuestion(value) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("en-US")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

async function loadApprovedFaqs() {
  // Only enable database FAQs on our Preview site.
  if (location.hostname !== FAQ_PREVIEW_HOST) return;

  try {
    const response = await fetch("/api/faqs", {
      method: "GET",
      credentials: "omit",
      cache: "no-store"
    });

    if (!response.ok) return;

    const data = await response.json();

    if (data?.success !== true ||
        !Array.isArray(data.faqs)) return;

    approvedFaqs = data.faqs
      .filter(item =>
        item &&
        typeof item.question === "string" &&
        typeof item.answer === "string" &&
        item.question.length <= 400 &&
        item.answer.length <= 2000
      )
      .slice(0, 50);

  } catch {
    // Keep existing scripted replies if API fails.
  }
}

let currentLang = "en";
let exchangeCount = 0;
let generation = 0;
let waiting = false;
let lastReply = "";
let toastTimeout = null;
let answerTimeout = null;

function createElement(tag, className, textValue) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (typeof textValue === "string") node.textContent = textValue;
  return node;
}

function shortTime() {
  return new Intl.DateTimeFormat(currentLang === "si" ? "si-LK" : currentLang === "ta" ? "ta-LK" : "en-GB", { hour: "2-digit", minute: "2-digit" }).format(new Date());
}

function appendMessage(role, text, addLink = false) {
  const isBot = role === "bot";
  const labels = ui[currentLang];
  const row = createElement("article", `chat-message ${role}`);
  const avatar = createElement("div", `message-avatar${isBot ? "" : " user-avatar"}`, isBot ? "NV." : "U");
  avatar.setAttribute("aria-hidden", "true");
  const main = createElement("div", "message-main");
  const head = createElement("div", "message-header");
  const name = createElement("span", null, isBot ? labels.bot : labels.me);
  const time = createElement("span", "message-time", shortTime());
  head.append(name, time);
  main.append(head, createElement("div", "message-bubble", text));
  if (addLink) {
    const link = createElement("a", "response-link", "View official portfolio ↗");
    link.href = portfolioUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    main.append(link);
  }
  row.append(avatar, main);
  els.chatMessages.append(row);
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function showTyping() {
  const row = createElement("div", "chat-message bot typing-row");
  row.setAttribute("aria-label", "Preparing a demo reply");
  const avatar = createElement("span", "message-avatar", "NV.");
  avatar.setAttribute("aria-hidden", "true");
  const dots = createElement("div", "message-bubble typing-bubble");
  for (let i = 0; i < 3; i += 1) dots.append(createElement("i"));
  row.append(avatar, dots);
  els.chatMessages.append(row);
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
  return row;
}

function findIntent(text) {
  const input = text.normalize("NFKC").toLocaleLowerCase("en-US");
  return intentRules.find(rule => rule.terms.some(term => input.includes(term)))?.id ?? "fallback";
}

function setPending(pending) {
  waiting = pending;
  els.sendBtn.disabled = pending;
  els.chatInput.disabled = pending;
  els.suggestions.querySelectorAll("button").forEach(button => { button.disabled = pending; });
  document.querySelectorAll("[data-topic]").forEach(button => { button.disabled = pending; });
}

function updateInsights(intent) {
  const labels = ui[currentLang];
  els.detectedTopic.textContent = intent ? (labels.labels[intent] || labels.labels.fallback) : labels.ready;
  els.detectedReason.textContent = !intent ? labels.rule : intent === "fallback" ? labels.fallback : labels.matched;
  document.querySelectorAll("[data-topic]").forEach(button => {
    const isSelected = button.dataset.topic === intent;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function sendMessage(rawText, forcedIntent) {
  const text = rawText.trim().slice(0, 400);
  if (waiting) return;
  if (!text) { showToast(ui[currentLang].toastEmpty); return; }
  if (exchangeCount >= MAX_EXCHANGES) { showToast(ui[currentLang].toastLimit); return; }
  exchangeCount += 1;
  const localeAtSend = currentLang;
  const t = ui[localeAtSend];
  const intent = forcedIntent || findIntent(text);
  
const databaseFaq = localeAtSend === "en"
  ? approvedFaqs.find(
      faq => normalizeFaqQuestion(faq.question) ===
             normalizeFaqQuestion(text)
    )
  : undefined;

  appendMessage("user", text);
  els.chatInput.value = "";
  els.charCount.textContent = "0";
  els.chatInput.style.height = "auto";
  updateInsights(intent);
  
if (databaseFaq) {
  els.detectedTopic.textContent = "Neon FAQ";
  els.detectedReason.textContent =
    "Approved database FAQ matched in your browser.";
}

  const typing = showTyping();
  setPending(true);
  const requestGeneration = generation;
  answerTimeout = window.setTimeout(() => {
    if (requestGeneration !== generation) return;
    typing.remove();
    const reply = databaseFaq?.answer ||
  t.responses[intent] ||
  t.responses.fallback;
    lastReply = reply;
    appendMessage("bot", reply, intent === "portfolio" || intent === "contact" || intent === "pricing");
    setPending(false);
    if (exchangeCount >= MAX_EXCHANGES) showToast(t.toastLimit);
  }, 460);
}

function renderSuggestions() {
  els.suggestions.replaceChildren();
  Object.entries(ui[currentLang].suggestions).forEach(([intent, label]) => {
    const button = createElement("button", "prompt-chip", label);
    button.type = "button";
    button.addEventListener("click", () => sendMessage(ui[currentLang].promptByTopic[intent], intent));
    els.suggestions.append(button);
  });
}

function switchLanguage(lang) {
  if (!Object.hasOwn(ui, lang) || currentLang === lang) return;
  generation += 1;
  window.clearTimeout(answerTimeout);
  els.chatMessages.querySelector(".typing-row")?.remove();
  setPending(false);
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach(button => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle("is-current", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll("[data-topic-label]").forEach(label => {
    label.textContent = ui[lang].labels[label.dataset.topicLabel];
  });
  els.chatInput.placeholder = ui[lang].prompt;
  els.inputHint.textContent = ui[lang].hint;
  els.privacyMessage.textContent = ui[lang].privacy;

renderSuggestions();

// Reset old messages when switching languages.
resetConversation();

}

function resetConversation() {
  generation += 1;
  window.clearTimeout(answerTimeout);
  setPending(false);
  els.chatMessages.replaceChildren();
  els.chatInput.value = "";
  els.charCount.textContent = "0";
  exchangeCount = 0;
  lastReply = ui[currentLang].welcome;
  updateInsights(null);
  appendMessage("bot", lastReply);
  els.chatInput.focus();
}

function showToast(message) {
  window.clearTimeout(toastTimeout);
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  toastTimeout = window.setTimeout(() => els.toast.classList.remove("is-visible"), 2700);
}

els.chatForm.addEventListener("submit", event => {
  event.preventDefault();
  sendMessage(els.chatInput.value);
});
els.chatInput.addEventListener("keydown", event => {
  if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
    event.preventDefault();
    els.chatForm.requestSubmit();
  }
});
els.chatInput.addEventListener("input", () => {
  els.charCount.textContent = String(els.chatInput.value.length);
  els.chatInput.style.height = "auto";
  els.chatInput.style.height = `${Math.min(els.chatInput.scrollHeight, 110)}px`;
});
els.resetChat.addEventListener("click", resetConversation);
document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => switchLanguage(button.dataset.lang)));
document.querySelectorAll("[data-topic]").forEach(button => button.addEventListener("click", () => sendMessage(ui[currentLang].promptByTopic[button.dataset.topic], button.dataset.topic)));
els.copyReply.addEventListener("click", async () => {
  if (!lastReply) { showToast(ui[currentLang].toastNoReply); return; }
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard not available");
    await navigator.clipboard.writeText(lastReply);
    showToast(ui[currentLang].toastCopy);
  } catch { showToast(ui[currentLang].toastCopyUnavailable); }
});

// A real lead-submission endpoint is intentionally NOT included.
const leadForm = els.leadForm;
document.getElementById("openLead").addEventListener("click", () => {
  leadForm.hidden = false;
  els.leadResult.hidden = true;
  els.dialog.showModal();
});
function closeLead() {
  els.dialog.close();
  leadForm.reset(); // Discard entered values after preview.
  leadForm.hidden = false;
  els.leadResult.hidden = true;
}
document.getElementById("closeLead").addEventListener("click", closeLead);
document.getElementById("closeResult").addEventListener("click", closeLead);
els.dialog.addEventListener("click", event => { if (event.target === els.dialog) closeLead(); });
els.dialog.addEventListener("close", () => { leadForm.reset(); leadForm.hidden = false; els.leadResult.hidden = true; });
leadForm.addEventListener("submit", event => {
  event.preventDefault();
  // Browser-side validity checks only. No data leaves this form.
  if (!leadForm.reportValidity()) return;
  leadForm.reset();
  leadForm.hidden = true;
  els.leadResult.hidden = false;
});

// Initialize once; no external resources are used.
document.getElementById("currentYear").textContent = String(new Date().getFullYear());
void loadApprovedFaqs();renderSuggestions();
resetConversation();
