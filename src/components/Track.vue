<template>
  <div v-if="track.album && track">
    <div class="card">
      <div class="card-image">
        <figure class="image is-1by1">
          <img :src="track.album.images[0].url" alt="" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="track.album.images[0].url" alt="" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-6">
              <strong>{{ track.name }}</strong>
            </p>
            <p class="subtitle is-6">
              {{ track.artists[0].name }}
            </p>
          </div>
        </div>
        <div class="content">
          <small>{{ track.duration_ms | ms - to - mm }}</small>
          <nav class="level">
            <div class="level-left">
              <a class="level-item" @click="selectTrack()">
                <span class="icon is-small">play</span>
              </a>
              <a class="level-item" @click="goToTrack(track.id)">
                <span class="icon is-small">Ver</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object
    }
  },
  methods: {
    selectTrack () {
      if (!this.track.preview_url) {
        return
      }
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    },
    goToTrack (id) {
      if (!this.track.preview_url) {
        return
      }
      this.$router.push({
        name: 'track',
        params: { id }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
