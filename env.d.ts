/// <reference types="vite/client" />

// 扩展 ImportMetaEnv 接口，声明自定义环境变量
interface ImportMetaEnv {

  // 自定义环境变量（需以 VITE_ 开头，Vite 才会暴露到客户端）
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_TIMEOUT: number;

  // 可根据项目需求添加更多变量
}

// 确保 ImportMeta 包含扩展后的 env 类型
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
