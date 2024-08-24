import path from 'path';
import { defineConfig, ConfigEnv, UserConfigExport } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default function ({}: ConfigEnv): UserConfigExport {
  return defineConfig({
    test: {
      globals: true,
      fileParallelism: false,
      reporters: 'dot',
      environment: 'happy-dom',
    },
    plugins: [
      TanStackRouterVite({
        generatedRouteTree: 'src/route-tree.generated.ts',
        routesDirectory: 'src/app',
        routeFileIgnorePattern: '.spec.tsx',
      }),
      viteReact(),
      tsconfigPaths(),
      reactRefresh(),
    ],
    resolve: {
      alias: {
        '@/lib/utils': path.resolve(__dirname, './src/utils/index.ts'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      assetsDir: '.',
    },
  });
}
