const validate = (formSelector) => {
    let err = 0;
    const inputReq = document.querySelectorAll('.req');
    const inputGetCodeReq = document.querySelectorAll('.getcode_req');

    if(!formSelector.classList.contains('form__getcode')){
        inputReq.forEach(input => {
            inputRemoveErr(input);
    
            if(input.classList.contains('email')){
                if(emailCheck(input)){
                    inputAddErr(input);
                    err++;
                }
            } else if (input.getAttribute('type') === 'radio' && input.checked === false){
                const inputsRadio = document.querySelector('[type=radio]');
                if(!(inputsRadio.checked === true)){
                    err++;
                    inputAddErr(input);
                }
            } else {
                if (input.value == ''){
                    err++;
                    inputAddErr(input);
                }
            }
        })
    } else {
        inputGetCodeReq.forEach(input => {
            inputRemoveErr(input);
            if(input.value == ''){
                inputAddErr(input);
                err++;
            }
        })
    }

    function inputAddErr(input){
        input.classList.add('error');
    }

    function inputRemoveErr(input){
        input.classList.remove('error');
    }

    function emailCheck(email){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value);
    }

    return err;
}

export default validate;