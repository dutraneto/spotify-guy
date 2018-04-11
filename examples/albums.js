global.fetch = require('node-fetch');

 import SpotifyWrapper from '../src/index';

 const spotify = new SpotifyWrapper({
   token: 'BQArp8c0UpL244J8TkLti5Qg_JhVt0n1_VpiBhv82fMTAkhpT0EwILSW-nYOPQqKv-fOLk3DuuZNVsD_21rw4xXsieaqCa9UbVecpquyEtLu1mdXyVtrytq7qCvFB6LUUf-4fYFetfPy'
 });

 const albums = spotify.search.albums('the-beatles');

 albums.then(data => data.albums.items.map(item => console.log(item.name)));
