import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Lccqo4oAAAAANhGma5l8_cDEFDeXgy1l-k1F3lS',
    });
});