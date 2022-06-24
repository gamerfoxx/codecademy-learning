const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
}

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
}

const removeAll = {
  type: 'songs/removeAll',
}