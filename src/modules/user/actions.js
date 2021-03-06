import { swAPI } from '../swapi';

export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CHARACTER_LOADING = 'SET_CHARACTER_LOADING';

export const setCharacter = character => ({
  type: SET_CHARACTER,
  character,
});

export const setCharacterLoading = loading => ({
  type: SET_CHARACTER_LOADING,
  loading,
});

export const fetchAndSetCharacter = id => dispatch => {
  dispatch(setCharacterLoading(true));
  swAPI
    .getCharacter(id)
    .then(character => {
      dispatch(setCharacterLoading(false));
      dispatch(setCharacter(character));
    })
    .catch(() => dispatch(setCharacterLoading(false)));
};
