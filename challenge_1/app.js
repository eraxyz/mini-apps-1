
class App {

    constructor() {
        this.controller = new Controller();
    }

    initialize () {
        this.controller.initialize();
    }
}

const app = new App();
app.initialize();

