var initData = require('json!./main.json');
export default {
    loadMarkers (cb) {
        cb(initData.videos);
    }
}