const download = (path, downloadTrigger) => {

    const downloadBtn = document.querySelector(downloadTrigger);


    function downloadFile(path){
        const a = document.createElement('a');
        a.setAttribute('href', path);
        a.setAttribute('download', 'img');
        a.style.display = 'none';
        document.body.append(a);
        a.click();
        document.body.removeChild(a);
    }

    function handleEvents(e){
        e.preventDefault();
        e.stopPropagation();
    }


    downloadBtn.addEventListener('click', (e) => {
        downloadFile(path);
        handleEvents(e);
    });

};

export default download;