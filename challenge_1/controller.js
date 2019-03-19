class Controller {

    constructor() {
        this.view = new View();    
    };
    
    initialize() {
        document.addEventListener('click', (event) => (event.target.classList[0] === 'restart' ? 
        this.view.reset(true) : (event.target.classList[0] === 'submit') ? 
        this.view.setPlayers() : (event.target.classList.length === 3) ? 
        this.view.addPlay(event.target) : null))
    };
}
