
export default {
  telemetry: false,
  components: true,
  server: {
    host: '0.0.0.0'
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  auth: {
    redirect: {
        login: '/users/login',
        logout: '/',
        callback: false,
        home: '/users/profile',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/v1/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/v1/auth/logout', method: 'post' },
          user: false,
        },
      }
    }
  }
}
