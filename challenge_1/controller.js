class Controller extends App{

    constructor() {
        super();       
    };
    
    listener() {
        document.addEventListener('click', (event) => (event.target.classList[0] === 'restart' ? 
        view.reset(true) : (event.target.classList[0] === 'submit') ? 
        view.setPlayers() : (event.target.classList.length === 3) ? 
        view.addPlay(event.target) : null))
    };
}
