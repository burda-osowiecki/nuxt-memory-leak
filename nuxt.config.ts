const appConfig: {
  baseUrl: string;
  photoId: number;
} = {
  baseUrl: "",
  photoId: 1,
};

export default defineNuxtConfig({
  app: {
    baseURL: appConfig.baseUrl,
  },
  appConfig,
  devServer: {
    host: "localhost",
    https: false,
    port: 3000,
    url: "http://localhost:3000",
  },
  imports: {
    dirs: ["stores"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      origin: "https://localhost",
      apiUrl: "https://jsonplaceholder.typicode.com",
    },
  },
  srcDir: "src/",
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
