const accordion = (triggers) => {

    const btns = document.querySelectorAll(triggers);

    let activeBtn;
    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            this.classList.toggle('active-style');
            this.parentNode.nextElementSibling.classList.toggle('active-content');
            this.parentNode.parentNode.lastElementChild.classList.toggle('more-active');

            if(activeBtn){  
                activeBtn.classList.remove('active-style'); 
                activeBtn.parentNode.nextElementSibling.classList.remove('active-content');
                activeBtn.parentNode.nextElementSibling.style.maxHeight = '0px';
            }

            activeBtn = (activeBtn === this) ? 0 : this;

            if(this.classList.contains('active-style')){
                this.parentNode.nextElementSibling.style.maxHeight =  this.parentNode.nextElementSibling.scrollHeight + 145 + 'px';
                this.parentNode.parentNode.style.maxHeight = this.parentNode.nextElementSibling.scrollHeight + 145 + 'px';
                if(btn.textContent === 'Раскрыть'){
                    btn.textContent = 'Закрыть';
                } 
            } else {
                this.parentNode.nextElementSibling.style.maxHeight = '0px';
                this.parentNode.parentNode.style.maxHeight = '0px';
                if(btn.textContent === 'Закрыть'){
                    btn.textContent = 'Раскрыть';
                } 
            }
        });
    });
};

export default accordion;