<template>
  <div class="home">
    <VideoGrid v-bind:videos="this.videos"></VideoGrid>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoGrid from '@/components/VideoGrid.vue'


export default {
  name: 'Home',
  components: {
    VideoGrid
  },
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
  }
}
</script>

<style lang="scss">
  
</style>