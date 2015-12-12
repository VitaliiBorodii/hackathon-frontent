import markers from './markers';

export default {
    loadMarkers (cb) {
        cb(markers);
    },
    clickHandler (data) {
        console.log(data)
    }
}