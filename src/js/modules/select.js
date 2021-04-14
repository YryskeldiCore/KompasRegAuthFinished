const select = (yearSelector, monthSelector, daySelector) => {
    const yearSelect = document.querySelector(yearSelector);
    const monthSelect = document.querySelector(monthSelector);
    const daySelect = document.querySelector(daySelector);

    const date = new Date();
    const currentYear = date.getFullYear();

    fillSelect(yearSelect, range(currentYear - 50, currentYear + 30))
    fillSelect(monthSelect, range(1, 12))
    fillSelect(daySelect, range(1, 31))

    yearSelect.value = currentYear;

    monthSelect.addEventListener('change', chooseRightMonth)

    function chooseRightMonth(){
        switch(this.value){
            case '2':
                while(daySelect.firstChild){
                    daySelect.removeChild(daySelect.lastChild)
                }
                fillSelect(daySelect, range(1, 28))
                break;
            case '4':
                while(daySelect.firstChild){
                    daySelect.removeChild(daySelect.lastChild)
                }
                fillSelect(daySelect, range(1, 30))
                break;
            case '6':
                while(daySelect.firstChild){
                    daySelect.removeChild(daySelect.lastChild)
                }
                fillSelect(daySelect, range(1, 30))
                break;
            case '9':
                while(daySelect.firstChild){
                    daySelect.removeChild(daySelect.lastChild)
                }
                fillSelect(daySelect, range(1, 30))
                break;
            case '11': 
                while(daySelect.firstChild){
                    daySelect.removeChild(daySelect.lastChild)
                }
                fillSelect(daySelect, range(1, 30))
                break;
            default:
                while(daySelect.firstChild){
                    daySelect.removeChild(daySelect.lastChild)
                }
                fillSelect(daySelect, range(1, 31))
        }
    }

    function fillSelect(select, arr){
        arr.forEach((item) => {
            select.add(new Option(item))
        })
    }

    function range(from, to){
        const arr = [];
        for (let i = from; i <= to; i++) {
            arr.push(i);
        }
        return arr 
    }

}

export default select;