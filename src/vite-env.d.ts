/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GA_LEAD_EVENT_NAME?: string;
	readonly VITE_GOOGLE_ADS_SEND_TO?: string;
	readonly VITE_GTM_LEAD_EVENT_NAME?: string;
	readonly VITE_LEAD_ENDPOINT_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
