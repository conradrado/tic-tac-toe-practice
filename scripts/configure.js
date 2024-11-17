function openPlayerConfig(event){
    editedPlayerId = +event.target.dataset.playerid; // 넘버
    
    playerConfigOverlay.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none';
    backDropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error'); 
    errorsOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value = '';
}

function submitPlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredName = formData.get('playername').trim();

    if(!enteredName){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPlayerElement = document.getElementById('player-' + editedPlayerId + '-data' );
    updatedPlayerElement.children[1].textContent = enteredName;

    players[editedPlayerId - 1].name = enteredName;

    closePlayerConfig();
}

