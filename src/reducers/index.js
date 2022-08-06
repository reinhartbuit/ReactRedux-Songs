import { combineReducers } from 'redux';

export const songsReducer = () => {
  return [
    {
      title: 'No Scrubs',
      duration: '4:05',
    },
    {
      title: 'All Start',
      duration: '3:05',
    },
    {
      title: 'Macarena',
      duration: '3:25',
    },
    {
      title: 'I want it that way',
      duration: '7:05',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
