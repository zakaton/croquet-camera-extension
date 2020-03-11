class View extends Croquet.View {
    constructor(model) {
        super(model);
        window.view = this;
        view.model = model;

        this.joined = Date.now();
        this.client = new WebTorrent();

        this.subscribe(this.sessionId, "receive-torrent", this.torrent);
    }

    torrent({magnetURI, timestamp}) {
        if(this.joined < timestamp) {
            console.log(`received torrent ${magnetURI}`);
            this.client.add(magnetURI, torrent => {
                console.log(torrent);
                const file = torrent.files[0];
                console.log(file);
                file.appendTo("body");
            });
        }
    }
}

Croquet.App.root = false;
Croquet.startSession("croquet-camera", Model, View);