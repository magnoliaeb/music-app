<template>
    <div v-if="track.album">
        <div class="content">
            <figure class="image is-128x128">
                <img :src="track.album.images[0].url" alt="" class="is-rounded">
            </figure>
            <p class="has-text-white-bis">
                <strong>{{ track.name }} </strong>
                <small>{{ track.duration_ms | ms-to-mm }}</small>
            </p>
            <p>
                <audio :src="track.preview_url" controls></audio>
            </p>
        </div>

    </div>
</template>

<script>
export default {
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  },
  data () {
    return {
      track: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
