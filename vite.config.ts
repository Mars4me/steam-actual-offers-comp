import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: 'https://mars4me.github.io/steam-actual-offers-comp/',
});
