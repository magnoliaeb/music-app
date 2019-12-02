import { HTTP } from './http'

export class TrackService {
  async searchTrack (q) {
    const type = 'track'
    const tracks = await HTTP.get('/search', {
      params: {
        q,
        type
      }
    })
    return tracks
  }
  async getTrackById (id) {
    const track = await HTTP.get(`/tracks/${id}`)
    return track
  }
}

export const trackService = new TrackService()
