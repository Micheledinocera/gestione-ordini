import QRCodeVue3 from 'qrcode-vue3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('qrcode', QRCodeVue3)
})