import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	vite: { ssr: { external: ['svgo'] } },
	experimental: {
		assets: true,
	},
	integrations: [
		react(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
	],
})
