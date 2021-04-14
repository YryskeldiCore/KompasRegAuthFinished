import postData from '../services/service';
import formValidate from '../helpers/validate';

const form = (formSelector) => {

    const forms = document.querySelectorAll(formSelector);
    const btnGetData = document.querySelector('.form__getcode .btn');
    const btnPostData = document.querySelector('.form__postdata .btn');

    const messages = {
        success: 'Запрос обработан Успешно!',
        fail: 'В запросе ошибка, что-то произошло не так!'
    }

    const path = {
        register : 'api/signup.php',
        getcode : 'api/checkcode.php'
    };
    
    function showData(data){
        console.log(data)
        const wrap = document.createElement('div');
        wrap.classList.add('wrap');
        if(typeof data === 'string'){
            showText(data, wrap)
            document.querySelector('.wrap').remove();
        } else {
            if(document.querySelector('.wrap')){
                document.querySelector('.wrap').remove();
                showCode(data, wrap)
            } else {
                showCode(data, wrap)
            }
        }
    }

    function showText(data, wrap){
        const formAppend = document.querySelector('.form__getcode')
        wrap.append(data)
        formAppend.append(wrap);
        
    }

    function showCode(data, wrap){
        const formAppend = document.querySelector('.form__getcode')
        data.forEach(({code, login}) => {
            const request = document.createElement('div');
            request.classList.add('stylediv');
            request.innerHTML = `
                <div>
                    <h1>${login}</h1>
                    <div>${code}</div>
                </div>
            `;
            wrap.append(request)
            formAppend.append(wrap);
        });
    }


    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            let error = formValidate(form);

            if(error != 0){
                alert('Заполните поля!');
            } else {
                const formData = new FormData(form);
    
                console.log(formData);

                let api;

                const json = JSON.stringify(Object.fromEntries(formData.entries()));

                form.classList.contains('form__getcode') ? api = path.getcode : api = path.register;

                postData(api , json)
                    .then(res => {
                        console.log(res);
                        showData(res);
                        showThanksModal(btnGetData, messages.success)
                    })
                    .catch((err) => {
                        console.log(err);
                        showThanksModal(form, messages.fail);
                    });
            }
    
        });
    })

    const showThanksModal = (item, messageText) => {
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.insertAdjacentElement('afterend', statusMessage);

        const statusMessageText = document.createElement('div');
        statusMessageText.textContent = messageText;

        statusMessage.append(statusMessageText);

        setTimeout(() => {
            statusMessage.remove();
        }, 2000);
    };

};

export default form;