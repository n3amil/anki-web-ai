# Ankiki

A lightweight Progressive Web App (PWA) that uses AI to generate Anki-compatible flashcards from text or PDF files.

[![Star History Chart](https://api.star-history.com/svg?repos=n3amil/anki-web-ai&type=Date)](https://star-history.com/#n3amil/anki-web-ai&Date)

## Features

- **No Build Tools**: Built with pure JavaScript, HTML5, and CSS3. No bundling or npm packages required.
- **AI Integration**: Supports **OpenAI**, **Google Gemini**, and **[LMStudio](https://lmstudio.ai/)** (local models).
- **PDF Support**: Extracts text from PDF files directly in the browser using [PDF.js](https://mozilla.github.io/pdf.js/) (v3.4.120).
- **PWA Capabilities**: Installable on desktop and mobile (iOS/Android) with offline support.
- **Privacy Focused**: API keys are stored only in your browser's local storage and never uploaded to any server.
- **Multilingual UI**: Automatically detects or allows switching between English and German.
- **Customizable Prompts**: Fine-tune the AI instructions and specify what content to ignore.
- **Anki Export**: Generates `.csv` files ready for direct import into Anki.

## How to Use

1. **Configure AI Settings**: Choose your provider (OpenAI, Gemini, or [LMStudio](https://lmstudio.ai/)) and enter your API key or URL.
2. **Select Input**: Paste text or upload a PDF file.
3. **Customize**: (Optional) Adjust the number of cards, specify content to ignore, or edit the AI prompt.
4. **Generate**: Click "Generate Flashcards" and review the results.
5. **Download**: Click "Download for Anki (.csv)".
6. **Import to Anki**:
   - Open Anki.
   - Go to `File` -> `Import`.
   - Select the downloaded `.csv` file.
   - Ensure "Fields separated by" is set to Pipe `|`.
   - Map the fields (usually Question | Answer).

## Installation

As a PWA, you can "install" this app on your device:
- **Desktop (Chrome/Edge)**: Click the "Install" icon in the address bar.
- **iOS**: Open in Safari, tap the Share icon, and select "Add to Home Screen".
- **Android**: Open in Chrome, tap the three dots, and select "Install app" or "Add to Home screen".

## Privacy & Security

- **Local Storage**: Your API keys and settings are stored locally in your browser.
- **Direct API Calls**: The app communicates directly with the AI provider APIs from your browser.
- **No Backend**: There is no backend server collecting your data.

## Credits

- [PDF.js](https://mozilla.github.io/pdf.js/) for PDF processing.
