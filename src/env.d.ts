// <reference types="astro/client-image" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
	readonly PUBLIC_MAP_API_KEY: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
