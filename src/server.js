class Server {
	constructor({ app, port }) {
		this.app = app;
		this.port = port;
	}

	start() {
		this.app.listen(
			this.port,
			function () {
				console.log('App is started on ' + this.port);
			}.bind(this)
		);
	}
}

export default Server;
