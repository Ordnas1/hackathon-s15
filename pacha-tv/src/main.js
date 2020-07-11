import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data() {
    return {
      videos: null
    }
  },
  created() {
    this.fetchVideos()
  },
  methods: {
    fetchVideos() {
      fetch("http://localhost:3000/videos")
      .then(response => response.json())
      .then(data => this.videos = data)
    }
  },
}).$mount('#app')
