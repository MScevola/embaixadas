import { EMBAIXADAS } from '../actions/actionTypes';
import ListaEmbaixadas from '../lists/listaEmbaixadas.json'

export const Embaixadas = (state = ListaEmbaixadas, action) => {
    switch(action.type) {
        case EMBAIXADAS:
            return [action.payload.data, ...state];
        default:
            return state;
    }
}