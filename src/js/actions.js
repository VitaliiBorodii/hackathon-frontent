import markers from './videos';

export default {
    loadMarkers (cb) {
        cb(markers);
    },
    clickHandler (data) {
        console.log(data)
    }
}