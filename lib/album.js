"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;
// /* global fetch */
//
// import {API_URL, HEADERS} from './config';
// import toJSON from './utils';
//
// export const getAlbum = id =>
//   fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);
//
// export const getAlbums = ids =>
//   fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS).then(toJSON);
//
// export const getAlbumTracks = id =>
//   fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);


function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request(_this.apiURL + "/albums/" + id);
    },
    getAlbums: function getAlbums(ids) {
      return _this.request(_this.apiURL + "/albums/?ids=" + ids);
    },
    getTracks: function getTracks(id) {
      return _this.request(_this.apiURL + "/albums/" + id + "/tracks");
    }
  };
}