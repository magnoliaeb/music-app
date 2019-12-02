<template>
<div>
    <section class="section">
        <div class="container">
          <my-notification v-show="showNotification" :searchResul="searchResul">
            <p slot="body" v-if="searchResul">No se encontraron resultados</p>
            <p slot="body" v-else>Se encontraron {{ countTracks }} resultados</p>
          </my-notification>
            <input class="input" type="text" placeholder="Buscar canciones..." v-model="searchQuery" @keyup.enter="search()">
            <button class="button is-info" @click="search()">Buscar</button>
            <button class="button is-light">Eliminar</button>
            <p>
              <strong>{{ countTracks }}</strong>
            </p>

        </div>
        <div class="container" style="margin-top: 20px">
          <my-loader v-show="isLoading"></my-loader>
            <div class="columns is-multiline">
                <div v-for="track in tracks" :key="track.id" v-blur="track.preview_url" class="column is-one-quarter">
                  <my-track :class="{ 'is-active': track.id === selectedTrack }" :track="track" @select="onSelect"></my-track>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import { trackService } from '@/services/track.service'

import myTrack from '@/components/Track'
import myLoader from '@/components/shared/Loader'
import myNotification from '@/components/shared/Notification'
export default {
  name: 'app',
  components: {
    myTrack,
    myLoader,
    myNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
      searchResul: null
    }
  },
  watch: {
    showNotification () {
      // si es verdad la cerramos
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  computed: {
    countTracks () {
      return `encontados ${this.tracks.length}`
    }
  },
  methods: {
    onSelect (id) {
      this.selectedTrack = id
    },
    async search () {
      if (!this.searchQuery) {
        return
      }
      try {
        this.isLoading = true
        const tracks = await trackService.searchTrack(this.searchQuery)
        this.searchResul = tracks.data.tracks.total === 0
        this.tracks = tracks.data.tracks.items
        this.isLoading = false
        this.showNotification = true
      } catch (error) {
        console.log(error)
      }
    }
  }

}

</script>

<style lang="scss">
.is-active {
    border: 3px solid #3273DC;
}
</style>
