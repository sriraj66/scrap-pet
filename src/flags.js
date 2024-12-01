export let ignoreFlags = [
    '--allow-pre-commit-input',
    '--disable-client-side-phishing-detection',
    '--disable-component-extensions-with-background-pages',
    '--disable-component-update',
    '--disable-dev-shm-usage',
    '--disable-hang-monitor',
    '--disable-infobars',
    '--disable-ipc-flooding-protection',
    '--disable-popup-blocking',
    '--disable-prompt-on-repost',
    '--disable-renderer-backgrounding',
    '--disable-search-engine-choice-screen',
    '--disable-sync',
    '--enable-automation',
    '--export-tagged-pdf',
    '--generate-pdf-document-outline',
    '--force-color-profile=srgb',
    '--metrics-recording-only',
    '--password-store=basic',
    '--use-mock-keychain',
    '--enable-features=PdfOopif', //no i18n
    // headless
    '--hide-scrollbars', '--mute-audio', //no i18n
]

export let flags = [
    '--no-sandbox', //no i18n
    '--disable-setuid-sandbox', //no i18n

    // Default
    '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', //no i18n
    '--accept-lang=en-GB,en-US,en', //no i18n

    // Anti-Ban Support
    '--disable-blink-features=AutomationControlled', //no i18n
    '--blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4', //no i18n
    '--window-size=1920,1080', //no i18n
    '--ozone-override-screen-size=1920,1200', //no i18n

    // GPU
    '--use-angle=gl', //no i18n
    '--enable-angle-features', //no i18n
    '--use-gl=angle', //no i18n  

    // New Flags
    '--disk-cache-size=0',
    '--disable-breakpad',
    '--disable-chrome-tracing-computation',
    "--disable-logging",
    '--disable-features=PreloadMediaEngagementData,MediaEngagementBypassAutoplayPolicies',
    '--disable-notifications',
    "--disable-default-apps",
    "--disable-auto-reload",
    '--disable-back-forward-cache',


    '--disable-dinosaur-easter-egg',
    '--disable-presentation-api',
    '--disable-remote-playback-api',
    '--disable-search-engine-choice-screen',
    '--disable-smooth-scrolling',
    '--disable-speech-api',
    '--disable-speech-synthesis-api',
    "--disable-touch-drag-drop",

    '--disable-background-networking',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-auto-reload',
    '--disable-audio-input',
    '--disable-audio-output',
    '--deny-permission-prompts',
    '--disable-pull-to-refresh-effect',
    '--ignore-autocomplete-off-autofill',
]