const adaptScreen = (firstBlockCardsSelector, SecondBlockCardsSelector, firstPushBlockSelector, secondPushBlockSelector, delBlockSelector) => {
    const cards1 = document.querySelectorAll(firstBlockCardsSelector);
    const cards2 = document.querySelectorAll(SecondBlockCardsSelector);
    const block1 = document.querySelector(firstPushBlockSelector);
    const block2 = document.querySelector(secondPushBlockSelector);
    const delBlock = document.querySelector(delBlockSelector);

    try {
        if(window.screen.availWidth < 991 && window.screen.availWidth > 767){
        cards1.forEach(card => {
            block1.appendChild(card);
        });
        cards2.forEach(card => {
            block2.appendChild(card);
        });
        delBlock.remove();
    }
    } catch (error) {
        
    }
};

export default adaptScreen;