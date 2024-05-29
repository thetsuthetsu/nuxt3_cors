# composition api

## setup
1. nuxt init
    ```
    PS C:\work\git\vue3\nuxt3samples> npx nuxi init compsition_api
    Need to install the following packages:
    nuxi@3.5.3
    Ok to proceed? (y) y
    ```

2. install vuetify @mdi/font
    ```
    PS C:\work\git\vue3\nuxt3samples\compsition_api> npm install vuetify @mdi/font
    npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs

    added 867 packages, and audited 868 packages in 35s

    141 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities
    ```

3. nuxt.config.ts
    ```
    export default defineNuxtConfig({
        ・・・
        ssr: false,
        css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    })
    ```

4. plugins/vuetify.ts
    ```
    import { createVuetify } from "vuetify";
    import * as components from "vuetify/components";
    import * as directives from "vuetify/directives";

    export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
    });

    nuxtApp.vueApp.use(vuetify);
    });
    ```

5. npm run dev
    ```
    Nuxi 3.5.3                                                                                                                                              13:51:09
    Nuxt 3.5.3 with Nitro 2.4.1                                                                                                                             13:51:09
                                                                                                                                                            13:51:10
    > Local:    http://localhost:3000/
    > Network:  http://172.20.10.6:3000/
    > Network:  http://[2400:2200:38a:bc53:aff3:9dc3:f7a:3278]:3000/
    > Network:  http://[2400:2200:38a:bc53:b5f0:83b0:4de0:f593]:3000/

    ✔ Nuxt Devtools is enabled v0.5.5 (experimental)                                                                                                        13:51:13
    ℹ Vite client warmed up in 1157ms                                                                                                                       13:51:16
    ✔ Nitro built in 561 ms               
    ```

## レイアウト
* app.vue
    * NuxtLayout, NuxtPageによる基本的なレイアウト
* layouts/default.vue
    * アプリケーションバー、ヘッダ、フッタ等、アプリケーションで共通表示されるエリア
    * <slot />にページ表示部分が展開される。