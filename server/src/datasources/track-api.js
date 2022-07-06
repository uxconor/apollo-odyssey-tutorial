import { RESTDataSource } from 'apollo-datasource-rest';

export class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorid) {
    return this.get(`author/${authorid}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }
  getModules(moduleId) {
    return this.get(`track/${trackId}/modules`);
  }
}
