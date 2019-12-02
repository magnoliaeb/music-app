<template>
  <div class="container" style="margin-top: 40px">
    <div class="columns">
      <div class="columns is-three-fifths
is-offset-one-fifth">
        <my-track :track="track"></my-track>
      </div>
    </div>
  </div>
</template>

<script>
import { trackService } from '@/services/track.service'
import myTrack from '@/components/Track'
export default {
  name: 'track-detail',
  components: {
    myTrack
  },
  async created () {
    const { id } = this.$route.params
    const track = await trackService.getTrackById(id)
    this.track = track.data
  },
  data () {
    return {
      track: {}
    }
  },
  async getTrackById () {
    // const id = this.$route.params.id
    // const track = await trackService.getTrackById(id)
    // this.track = track
  }
}
</script>

<style lang="scss" scoped></style>
