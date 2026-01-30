// Translations
const translations = {
    en: {
        'app-title': 'Anki AI',
        'app-subtitle': 'Generate flashcards from PDF or Text',
        'settings-title': 'AI Settings',
        'provider-label': 'Provider:',
        'api-key-label': 'API Key:',
        'get-key-link': 'Get API Key',
        'model-label': 'Model:',
        'view-models-link': 'View Models',
        'input-title': 'Input Source',
        'tab-text': 'Text',
        'tab-pdf': 'PDF',
        'generate-btn': 'Generate Flashcards',
        'output-title': 'Generated Flashcards',
        'download-btn': 'Download for Anki (.csv)',
        'placeholder-text': 'Paste your text here...',
        'placeholder-api-key': 'Enter API Key',
        'placeholder-model': 'gpt-3.5-turbo / gemini-pro / model-name',
        'status-processing': 'Processing {pages} pages...',
        'status-processing-page': 'Processing page {current}/{total}...',
        'status-success': 'PDF text extracted successfully.',
        'btn-generating': 'Generating...',
        'error-select-pdf': 'Please select a PDF file.',
        'error-empty-text': 'Input text is empty.',
        'error-lmstudio-response': 'Unexpected response from LMStudio',
        'lmstudio-url-label': 'LMStudio URL:',
        'placeholder-lmstudio-url': 'http://localhost:1234',
        'placeholder-lmstudio-model': 'model-identifier',
        'impressum-link': 'Impressum',
        'prompt-label': 'Custom Prompt:',
        'placeholder-prompt': 'Enter your custom prompt here...',
        'api-key-warning': 'Security Note: Never share your API token. It is stored only in your browser and is never uploaded. Please monitor your usage.',
        'github-link': 'Source Code on GitHub',
        'report-issue-link': 'Report Issue',
        'feedback-link': 'Feedback or Questions',
        'fetch-models-btn': 'Fetch',
        'card-count-label': 'Number of flashcards:',
        'btn-fetching': 'Fetching...',
        'error-fetch-models': 'Failed to fetch models. Check your API key/URL. If using LM Studio, ensure CORS is enabled.',
        'lmstudio-cors-hint': 'Tip: Enable CORS in LM Studio (Settings > Server > CORS: On)',
        'error-no-api-key': 'Please enter an API key / URL first.',
        'ignore-prompt-label': 'Ignore from input (optional):',
        'placeholder-ignore-prompt': 'e.g. Table of Contents, headers, footers...',
        'default-ignore-text': 'Table of Contents, repeating headers, footers, page numbers',
        'save-settings-btn': 'Save Settings',
        'settings-hint': 'Note: Settings are saved in your browser\'s local storage. They may be lost if you clear your browser data.',
        'settings-saved': 'Settings saved successfully!',
        'pdf-pages-label': 'Pages (e.g., all, 1-5, 8):',
        'placeholder-pdf-pages': 'all / 1-5 / 3, 5-7',
        'error-invalid-pages': 'Invalid page selection.',
        'faq-title': 'Frequently Asked Questions',
        'faq-import-desktop-q': 'How do I import the CSV into Anki on Desktop?',
        'faq-import-desktop-a': '1. Open Anki on your computer.<br>2. Click "File" -> "Import" at the top left.<br>3. Select the downloaded .csv file.<br>4. Select your deck and ensure "Fields separated by" is set to Pipe.<br>5. Map the fields (usually Front and Back) and click "Import".',
        'faq-import-android-q': 'How do I import into AnkiDroid (Android)?',
        'faq-import-android-a': '1. Transfer the .csv file to your phone.<br>2. Open AnkiDroid.<br>3. Tap the three dots (menu) and select "Import".<br>4. Pick the .csv file and follow the mapping instructions.',
        'faq-import-ios-q': 'How do I import into AnkiMobile (iOS)?',
        'faq-import-ios-a': '1. Send the .csv file to your iPhone/iPad (e.g., via iCloud Drive, AirDrop, or Email).<br>2. Open the "Files" app and tap on the file.<br>3. Tap the Share icon and select "Anki".<br>4. AnkiMobile will open and guide you through the import process.',
        'prompt-template': `Create {count} Anki flashcards from the following text. 
The anki flashcards content MUST be english.
{ignore_instruction}
Format each card as "Question | Answer" on a new line. 
Make the questions concise and the answers clear.
Do not include any other text in your response, just the flashcards.

Text: {text}`
    },
    de: {
        'app-title': 'Anki KI',
        'app-subtitle': 'Erstelle Karteikarten aus PDF oder Text',
        'settings-title': 'KI-Einstellungen',
        'provider-label': 'Anbieter:',
        'api-key-label': 'API-Schlüssel:',
        'get-key-link': 'API-Schlüssel holen',
        'model-label': 'Modell:',
        'view-models-link': 'Modelle ansehen',
        'input-title': 'Eingabequelle',
        'tab-text': 'Text',
        'tab-pdf': 'PDF',
        'generate-btn': 'Karteikarten generieren',
        'output-title': 'Generierte Karteikarten',
        'download-btn': 'Download für Anki (.csv)',
        'placeholder-text': 'Text hier einfügen...',
        'placeholder-api-key': 'API-Schlüssel eingeben',
        'placeholder-model': 'gpt-3.5-turbo / gemini-pro / modell-name',
        'status-processing': 'Verarbeite {pages} Seiten...',
        'status-processing-page': 'Verarbeite Seite {current}/{total}...',
        'status-success': 'PDF-Text erfolgreich extrahiert.',
        'btn-generating': 'Generiere...',
        'error-select-pdf': 'Bitte wähle eine PDF-Datei aus.',
        'error-empty-text': 'Eingabetext ist leer.',
        'error-lmstudio-response': 'Unerwartete Antwort von LMStudio',
        'lmstudio-url-label': 'LMStudio URL:',
        'placeholder-lmstudio-url': 'http://localhost:1234',
        'placeholder-lmstudio-model': 'modell-bezeichner',
        'impressum-link': 'Impressum',
        'prompt-label': 'Eigener Prompt:',
        'placeholder-prompt': 'Gib hier deinen eigenen Prompt ein...',
        'api-key-warning': 'Sicherheitshinweis: Gib deinen API-Token niemals weiter. Er wird nur in deinem Browser gespeichert und niemals hochgeladen. Bitte überwache die Nutzung.',
        'github-link': 'Quellcode auf GitHub',
        'report-issue-link': 'Problem melden',
        'feedback-link': 'Feedback oder Fragen',
        'fetch-models-btn': 'Abrufen',
        'card-count-label': 'Anzahl der Karteikarten:',
        'btn-fetching': 'Lädt...',
        'error-fetch-models': 'Modelle konnten nicht geladen werden. Prüfe API-Key/URL. Wenn du LM Studio nutzt, stelle sicher, dass CORS aktiviert ist.',
        'lmstudio-cors-hint': 'Tipp: Aktiviere CORS in LM Studio (Einstellungen > Server > CORS: An)',
        'error-no-api-key': 'Bitte gib zuerst einen API-Schlüssel / eine URL ein.',
        'ignore-prompt-label': 'Ignorieren (optional):',
        'placeholder-ignore-prompt': 'z.B. Inhaltsverzeichnis, Kopfzeilen, Fußzeilen...',
        'default-ignore-text': 'Inhaltsverzeichnis, wiederkehrende Kopfzeilen, Fußzeilen, Seitenzahlen',
        'save-settings-btn': 'Einstellungen speichern',
        'settings-hint': 'Hinweis: Die Einstellungen werden im lokalen Speicher Ihres Browsers gespeichert. Sie können verloren gehen, wenn Sie Ihre Browserdaten löschen.',
        'settings-saved': 'Einstellungen erfolgreich gespeichert!',
        'pdf-pages-label': 'Seiten (z.B. alle, 1-5, 8):',
        'placeholder-pdf-pages': 'alle / 1-5 / 3, 5-7',
        'error-invalid-pages': 'Ungültige Seitenauswahl.',
        'faq-title': 'Häufig gestellte Fragen (FAQ)',
        'faq-import-desktop-q': 'Wie importiere ich die CSV-Datei in Anki am Desktop?',
        'faq-import-desktop-a': '1. Öffne Anki auf deinem Computer.<br>2. Klicke oben links auf "Datei" -> "Importieren".<br>3. Wähle die heruntergeladene .csv-Datei aus.<br>4. Wähle deinen Stapel aus und stelle sicher, dass "Felder getrennt durch" auf Pipe (oder |) steht.<br>5. Ordne die Felder zu (meistens Frage und Antwort) und klicke auf "Importieren".',
        'faq-import-android-q': 'Wie importiere ich in AnkiDroid (Android)?',
        'faq-import-android-a': '1. Übertrage die .csv-Datei auf dein Handy.<br>2. Öffne AnkiDroid.<br>3. Tippe auf die drei Punkte (Menü) und wähle "Importieren".<br>4. Wähle die .csv-Datei aus und folge den Anweisungen.',
        'faq-import-ios-q': 'Wie importiere ich in AnkiMobile (iOS)?',
        'faq-import-ios-a': '1. Sende die .csv-Datei an dein iPhone/iPad (z.B. via iCloud Drive, AirDrop oder E-Mail).<br>2. Öffne die "Dateien"-App und tippe auf die Datei.<br>3. Tippe auf das Teilen-Icon und wähle "Anki".<br>4. AnkiMobile öffnet sich und führt dich durch den Import.',
        'prompt-template': `Erstelle {count} Anki-Karteikarten aus dem folgenden Text.
Der Inhalt der Anki-Karteikarten MUSS auf Deutsch sein.
{ignore_instruction}
Formatiere jede Karte als "Frage | Antwort" in einer neuen Zeile.
Mache die Fragen prägnant und die Antworten klar.
Schreibe nichts anderes in deine Antwort, nur die Karteikarten.

Text: {text}`
    }
};

let currentLang = localStorage.getItem('preferred-lang') || (navigator.language.startsWith('de') ? 'de' : 'en');

function i18n(key, variables = {}) {
    let text = translations[currentLang][key] || translations['en'][key] || key;
    for (const [varKey, varValue] of Object.entries(variables)) {
        text = text.replace(`{${varKey}}`, varValue);
    }
    return text;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = i18n(key);
    });
    
    // Placeholders
    rawText.placeholder = i18n('placeholder-text');
    customPrompt.placeholder = i18n('placeholder-prompt');
    ignorePrompt.placeholder = i18n('placeholder-ignore-prompt');
    if (document.getElementById('pdf-pages')) {
        const pagesEl = document.getElementById('pdf-pages');
        pagesEl.placeholder = i18n('placeholder-pdf-pages');
        if (pagesEl.value === 'all' || pagesEl.value === 'alle') {
            pagesEl.value = currentLang === 'de' ? 'alle' : 'all';
        }
    }

    // Prefill ignore prompt if empty or matches a known default
    const currentIgnore = ignorePrompt.value.trim();
    const enDefaultIgnore = translations['en']['default-ignore-text'];
    const deDefaultIgnore = translations['de']['default-ignore-text'];
    if (!currentIgnore || currentIgnore === enDefaultIgnore || currentIgnore === deDefaultIgnore) {
        ignorePrompt.value = i18n('default-ignore-text');
    }

    // Initialize prompt with template (without the Text: {text} part)
    const promptWithoutText = (tpl) => tpl.split('\n\nText:')[0];
    const currentPromptBase = customPrompt.value;
    const enTemplateBase = promptWithoutText(translations['en']['prompt-template']).replace('{ignore_instruction}', '').trim();
    const deTemplateBase = promptWithoutText(translations['de']['prompt-template']).replace('{ignore_instruction}', '').trim();

    const getIgnoreInstruction = () => {
        const val = ignorePrompt.value.trim();
        if (!val) return '';
        return currentLang === 'de' ? `Ignoriere Folgendes aus dem Text: ${val}` : `Ignore the following from the text: ${val}`;
    };

    if (!currentPromptBase || 
        currentPromptBase.replace(/Ignore the following from the text: .*/, '').trim() === enTemplateBase.replace('{count}', '10') || 
        currentPromptBase.replace(/Ignoriere Folgendes aus dem Text: .*/, '').trim() === deTemplateBase.replace('{count}', '10') ||
        // Check for old templates
        currentPromptBase === "Create Anki flashcards from the following text. \nThe anki flashcards content MUST be english.\nFormat each card as \"Question | Answer\" on a new line. \nMake the questions concise and the answers clear.\nDo not include any other text in your response, just the flashcards." ||
        currentPromptBase === "Erstelle Anki-Karteikarten aus dem folgenden Text.\nDer Inhalt der Anki-Karteikarten MUSS auf Englisch sein.\nFormatiere jede Karte als \"Frage | Answer\" in einer neuen Zeile.\nMache die Fragen prägnant und die Antworten klar.\nSchreibe nichts anderes in deine Antwort, nur die Karteikarten."
    ) {
        customPrompt.value = promptWithoutText(i18n('prompt-template'))
            .replace('{count}', cardCount.value)
            .replace('{ignore_instruction}', getIgnoreInstruction())
            .replace(/\n\n\n/g, '\n\n').trim();
    }
    updateProviderUI(); // This will update labels and placeholders
    updateLangSwitcherUI();
}

function updateProviderUI(clearInputs = true) {
    const provider = aiProvider.value;
    const apiKeyLink = document.getElementById('api-key-link');
    const modelLink = document.getElementById('model-link');
    
    // Clear dynamic model select when provider changes
    const existingSelect = document.getElementById('ai-model-select');
    if (existingSelect) existingSelect.remove();

    // Clear input fields when provider changes (optional)
    if (clearInputs) {
        apiKey.value = '';
        aiModel.value = '';
    }

    if (provider === 'lmstudio') {
        apiKeyLabel.textContent = i18n('lmstudio-url-label');
        apiKey.type = 'text';
        apiKey.placeholder = i18n('placeholder-lmstudio-url');
        aiModel.placeholder = i18n('placeholder-lmstudio-model');
        apiKeyLink.style.display = 'none';
        modelLink.style.display = 'none';

        // Add CORS hint for LM Studio
        let corsHint = document.getElementById('lmstudio-cors-hint-text');
        if (!corsHint) {
            corsHint = document.createElement('p');
            corsHint.id = 'lmstudio-cors-hint-text';
            corsHint.className = 'hint-text';
            corsHint.style.color = '#e67e22';
            apiKey.parentNode.appendChild(corsHint);
        }
        corsHint.textContent = i18n('lmstudio-cors-hint');
        corsHint.style.display = 'block';
    } else {
        apiKeyLabel.textContent = i18n('api-key-label');
        apiKey.type = 'password';
        apiKey.placeholder = i18n('placeholder-api-key');
        aiModel.placeholder = i18n('placeholder-model');
        apiKeyLink.style.display = 'inline';
        modelLink.style.display = 'inline';
        
        const corsHint = document.getElementById('lmstudio-cors-hint-text');
        if (corsHint) corsHint.style.display = 'none';
        
        if (provider === 'openai') {
            apiKeyLink.href = 'https://platform.openai.com/api-keys';
            modelLink.href = 'https://platform.openai.com/docs/models';
        } else if (provider === 'gemini') {
            apiKeyLink.href = 'https://aistudio.google.com/app/apikey';
            modelLink.href = 'https://ai.google.dev/models/gemini';
        }
    }
}

function updateLangSwitcherUI() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// PDF.js worker setup
pdfjsLib.GlobalWorkerOptions.workerSrc = 'vendor/pdf.worker.min.js';

// State
let generatedFlashcards = [];

// DOM Elements
const aiProvider = document.getElementById('ai-provider');
const apiKey = document.getElementById('api-key');
const aiModel = document.getElementById('ai-model');
const fetchModelsBtn = document.getElementById('fetch-models-btn');
const cardCount = document.getElementById('card-count');
const ignorePrompt = document.getElementById('ignore-prompt');
const customPrompt = document.getElementById('custom-prompt');
const rawText = document.getElementById('raw-text');
const pdfFile = document.getElementById('pdf-file');
const pdfPages = document.getElementById('pdf-pages');
const generateBtn = document.getElementById('generate-btn');
const saveSettingsBtn = document.getElementById('save-settings-btn');
const flashcardsList = document.getElementById('flashcards-list');
const loadingSpinner = document.getElementById('loading-spinner');
const downloadCsv = document.getElementById('download-csv');
const pdfStatus = document.getElementById('pdf-status');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

const apiKeyLabel = document.getElementById('api-key-label');

const langBtns = document.querySelectorAll('.lang-btn');

// Settings persistence
function saveSettings() {
    const settings = {
        provider: aiProvider.value,
        apiKey: apiKey.value,
        model: aiModel.value
    };
    localStorage.setItem('anki-ai-settings', JSON.stringify(settings));
    alert(i18n('settings-saved'));
}

function loadSettings() {
    const saved = localStorage.getItem('anki-ai-settings');
    if (saved) {
        try {
            const settings = JSON.parse(saved);
            if (settings.provider) {
                aiProvider.value = settings.provider;
                // Update UI based on provider but DON'T clear fields during initial load
                updateProviderUI(false); 
            }
            if (settings.apiKey) apiKey.value = settings.apiKey;
            if (settings.model) aiModel.value = settings.model;
        } catch (e) {
            console.error('Failed to load settings', e);
        }
    }
}

applyTranslations();
// Set initial value for pdf-pages if not set
if (document.getElementById('pdf-pages')) {
    const pagesEl = document.getElementById('pdf-pages');
    if (!pagesEl.value) {
        pagesEl.value = currentLang === 'de' ? 'alle' : 'all';
    }
}
loadSettings(); // Load saved settings after translations and initial UI setup

// Language Switcher logic
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        localStorage.setItem('preferred-lang', currentLang);
        applyTranslations();
    });
});

// Card count logic
cardCount.addEventListener('change', () => {
    const promptWithoutText = (tpl) => tpl.split('\n\nText:')[0];
    const currentPromptBase = customPrompt.value;
    const enTemplateBase = promptWithoutText(translations['en']['prompt-template']).replace('{ignore_instruction}', '').trim();
    const deTemplateBase = promptWithoutText(translations['de']['prompt-template']).replace('{ignore_instruction}', '').trim();

    // Only update if user hasn't customized it beyond changing count
    const possibleCounts = Array.from({length: 50}, (_, i) => (i + 1).toString());
    const isEnDefault = possibleCounts.some(c => currentPromptBase.replace(/Ignore the following from the text: .*/, '').trim() === enTemplateBase.replace('{count}', c));
    const isDeDefault = possibleCounts.some(c => currentPromptBase.replace(/Ignoriere Folgendes aus dem Text: .*/, '').trim() === deTemplateBase.replace('{count}', c));

    const getIgnoreInstruction = () => {
        const val = ignorePrompt.value.trim();
        if (!val) return '';
        return currentLang === 'de' ? `Ignoriere Folgendes aus dem Text: ${val}` : `Ignore the following from the text: ${val}`;
    };

    if (isEnDefault || isDeDefault) {
        customPrompt.value = promptWithoutText(i18n('prompt-template'))
            .replace('{count}', cardCount.value)
            .replace('{ignore_instruction}', getIgnoreInstruction())
            .replace(/\n\n\n/g, '\n\n').trim();
    }
});

// Ignore prompt logic
ignorePrompt.addEventListener('input', () => {
    const promptWithoutText = (tpl) => tpl.split('\n\nText:')[0];
    const currentPromptBase = customPrompt.value;
    const enTemplateBase = promptWithoutText(translations['en']['prompt-template']).replace('{ignore_instruction}', '').trim();
    const deTemplateBase = promptWithoutText(translations['de']['prompt-template']).replace('{ignore_instruction}', '').trim();

    const getIgnoreInstruction = () => {
        const val = ignorePrompt.value.trim();
        if (!val) return '';
        return currentLang === 'de' ? `Ignoriere Folgendes aus dem Text: ${val}` : `Ignore the following from the text: ${val}`;
    };

    const isEnDefault = currentPromptBase.replace(/Ignore the following from the text: .*/, '').trim() === enTemplateBase.replace('{count}', cardCount.value);
    const isDeDefault = currentPromptBase.replace(/Ignoriere Folgendes aus dem Text: .*/, '').trim() === deTemplateBase.replace('{count}', cardCount.value);

    if (isEnDefault || isDeDefault) {
        customPrompt.value = promptWithoutText(i18n('prompt-template'))
            .replace('{count}', cardCount.value)
            .replace('{ignore_instruction}', getIgnoreInstruction())
            .replace(/\n\n\n/g, '\n\n').trim();
    }
});

// Tab logic
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Provider logic
aiProvider.addEventListener('change', updateProviderUI);

saveSettingsBtn.addEventListener('click', saveSettings);

// Fetch Models Logic
fetchModelsBtn.addEventListener('click', async () => {
    const provider = aiProvider.value;
    const key = apiKey.value;

    if (!key) {
        alert(i18n('error-no-api-key'));
        return;
    }

    fetchModelsBtn.disabled = true;
    fetchModelsBtn.textContent = i18n('btn-fetching');

    try {
        let models = [];
        if (provider === 'openai') {
            models = await fetchOpenAIModels(key);
        } else if (provider === 'gemini') {
            models = await fetchGeminiModels(key);
        } else if (provider === 'lmstudio') {
            models = await fetchLMStudioModels(key);
        }
        
        updateModelDropdown(models);
    } catch (error) {
        console.error(error);
        let errorMsg = i18n('error-fetch-models');
        if (provider === 'lmstudio') {
            errorMsg += '\n\n' + i18n('lmstudio-cors-hint');
        }
        alert(errorMsg + (error.message ? '\n\n' + error.message : ''));
    } finally {
        fetchModelsBtn.disabled = false;
        fetchModelsBtn.textContent = i18n('fetch-models-btn');
    }
});

async function fetchOpenAIModels(key) {
    const response = await fetch('https://api.openai.com/v1/models', {
        headers: { 'Authorization': `Bearer ${key}` }
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.map(m => m.id).sort();
}

async function fetchGeminiModels(key) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Filter for models that support generateContent
    return data.models
        .filter(m => m.supportedGenerationMethods.includes('generateContent'))
        .map(m => m.name.replace('models/', ''))
        .sort();
}

async function fetchLMStudioModels(url) {
    try {
        let baseUrl = url.endsWith('/') ? url : url + '/';
        if (!baseUrl.endsWith('/v1/')) {
            baseUrl += 'v1/';
        }
        const response = await fetch(`${baseUrl}models`);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data.map(m => m.id).sort();
    } catch (error) {
        console.error('LMStudio fetch error:', error);
        throw error;
    }
}

function updateModelDropdown(models) {
    // Remove existing select if any
    const existingSelect = document.getElementById('ai-model-select');
    if (existingSelect) existingSelect.remove();

    if (models.length === 0) return;

    const select = document.createElement('select');
    select.id = 'ai-model-select';
    
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '-- Select a Model --';
    select.appendChild(defaultOption);

    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        select.appendChild(option);
    });

    select.addEventListener('change', () => {
        if (select.value) {
            aiModel.value = select.value;
        }
    });

    aiModel.parentNode.after(select);
}

// PDF Extraction
async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    let fullText = '';
    
    const pageSelection = pdfPages.value.trim().toLowerCase();
    let pagesToExtract = [];

    if (!pageSelection || pageSelection === 'all' || pageSelection === 'alle') {
        for (let i = 1; i <= pdf.numPages; i++) pagesToExtract.push(i);
    } else {
        const parts = pageSelection.split(/[,;]/);
        for (let part of parts) {
            part = part.trim();
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(s => parseInt(s.trim()));
                if (!isNaN(start) && !isNaN(end)) {
                    for (let i = Math.max(1, start); i <= Math.min(pdf.numPages, end); i++) {
                        if (!pagesToExtract.includes(i)) pagesToExtract.push(i);
                    }
                }
            } else {
                const pageNum = parseInt(part);
                if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= pdf.numPages) {
                    if (!pagesToExtract.includes(pageNum)) pagesToExtract.push(pageNum);
                }
            }
        }
    }

    if (pagesToExtract.length === 0) {
        throw new Error(i18n('error-invalid-pages'));
    }

    pagesToExtract.sort((a, b) => a - b);
    
    pdfStatus.textContent = i18n('status-processing', { pages: pagesToExtract.length });
    
    for (let i = 0; i < pagesToExtract.length; i++) {
        const pageNum = pagesToExtract[i];
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n';
        pdfStatus.textContent = i18n('status-processing-page', { current: i + 1, total: pagesToExtract.length });
    }
    
    pdfStatus.textContent = i18n('status-success');
    return fullText;
}

// AI Integration
async function callAI(text) {
    const provider = aiProvider.value;
    const key = apiKey.value;
    const model = aiModel.value || (provider === 'openai' ? 'gpt-3.5-turbo' : provider === 'gemini' ? 'gemini-pro' : 'local-model');
    
    // Use custom prompt from textarea, appending the text
    const promptBase = customPrompt.value;
    const prompt = `${promptBase}\n\nText: ${text.substring(0, 4000)}`;

    if (provider === 'openai') {
        return callOpenAI(key, model, prompt);
    } else if (provider === 'gemini') {
        return callGemini(key, model, prompt);
    } else if (provider === 'lmstudio') {
        return callLMStudio(key, model, prompt);
    }
}

async function callOpenAI(key, model, prompt) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            model: model,
            messages: [{ role: 'user', content: prompt }]
        })
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.choices[0].message.content;
}

async function callGemini(key, model, prompt) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.candidates[0].content.parts[0].text;
}

async function callLMStudio(url, model, prompt) {
    // Assuming LMStudio is running at the provided URL (e.g., http://localhost:1234)
    let baseUrl = url.endsWith('/') ? url : url + '/';
    if (!baseUrl.endsWith('/v1/')) {
        baseUrl += 'v1/';
    }
    const response = await fetch(`${baseUrl}chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: model,
            messages: [{ role: 'user', content: prompt }]
        })
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    if (!data.choices || !data.choices[0]) throw new Error(i18n('error-lmstudio-response'));
    return data.choices[0].message.content;
}

// Generate Action
generateBtn.addEventListener('click', async () => {
    let text = '';
    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
    
    // Clear previous results
    generatedFlashcards = [];
    renderFlashcards();
    
    generateBtn.disabled = true;
    generateBtn.textContent = i18n('btn-generating');
    loadingSpinner.style.display = 'block';
    
    try {
        if (activeTab === 'text-input') {
            text = rawText.value;
        } else {
            if (pdfFile.files.length === 0) throw new Error(i18n('error-select-pdf'));
            text = await extractTextFromPDF(pdfFile.files[0]);
        }
        
        if (!text.trim()) throw new Error(i18n('error-empty-text'));
        
        const aiResponse = await callAI(text);
        parseFlashcards(aiResponse);
        renderFlashcards();
    } catch (error) {
        let errorMsg = error.message || 'Error: ' + error;
        if (aiProvider.value === 'lmstudio' && (errorMsg.includes('fetch') || errorMsg.includes('NetworkError') || errorMsg.includes('Failed to fetch'))) {
            errorMsg += '\n\n' + i18n('lmstudio-cors-hint');
        }
        alert(errorMsg);
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = i18n('generate-btn');
        loadingSpinner.style.display = 'none';
    }
});

function parseFlashcards(responseText) {
    generatedFlashcards = responseText.split('\n')
        .filter(line => line.includes('|'))
        .map(line => {
            const [q, a] = line.split('|').map(s => s.trim());
            return { q, a };
        });
}

function renderFlashcards() {
    flashcardsList.innerHTML = '';
    generatedFlashcards.forEach(card => {
        const div = document.createElement('div');
        div.className = 'flashcard-item';
        div.innerHTML = `<strong>Q: ${card.q}</strong><p>A: ${card.a}</p>`;
        flashcardsList.appendChild(div);
    });
    downloadCsv.disabled = generatedFlashcards.length === 0;
}

// Export CSV
downloadCsv.addEventListener('click', () => {
    const csvContent = generatedFlashcards.map(c => `"${c.q.replace(/"/g, '""')}"|"${c.a.replace(/"/g, '""')}"`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'anki_flashcards.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
