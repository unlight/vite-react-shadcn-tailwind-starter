/// <reference types="vitest" />
import path from 'path';
import { defineConfig, ConfigEnv, UserConfigExport } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default function ({}: ConfigEnv): UserConfigExport {
  return defineConfig({
    test: {
      globals: true,
      fileParallelism: false,
      reporters: 'dot',
      environment: 'happy-dom',
    },
    plugins: [tsconfigPaths(), reactRefresh()],
    resolve: {
      alias: {
        '@/lib/utils': path.resolve(__dirname, './src/utils/index.ts'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      assetsDir: '.',
      // brotliSize: false,
    },
  });
}
