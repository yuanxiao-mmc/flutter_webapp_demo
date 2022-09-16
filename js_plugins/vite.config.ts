import path from 'path'

export default () => {
  return {
    plugins: [],
    build: {
      outDir: '../flutter_pages/web',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '*': path.resolve(''),
      },
    },
    server: {},
  }
}
