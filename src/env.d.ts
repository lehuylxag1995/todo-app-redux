interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
  // thêm biến khác ở đây
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
