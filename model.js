class Model extends Croquet.Model {
    init() {
        super.init();

        this.subscribe(this.sessionId, "send-torrent", this.torrent);
    }

    torrent({magnetURI, timestamp}) {
        this.publish(this.sessionId, "receive-torrent", ...arguments);
    }
}
Model.register();