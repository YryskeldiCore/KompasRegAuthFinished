import accordion from './modules/accordion';
import download from './modules/download';
import adaptScreen from './modules/adaptScreen';
import form from './modules/form';
import select from './modules/select';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const path = 'img/main/bgsphere.jpg';

    accordion('.open');
    try {
        download(path, '.sdpk__download__file');
    } catch (error) {
        
    }
    try {
        adaptScreen('.block1', 
                    '.block2',
                    '.opinion__block__wrapper__col1',
                    '.opinion__block__wrapper__col2', 
                    '.opinion__block__wrapper__col3');
        adaptScreen('.card1', 
                    null ,
                    '.without__opinion__block__wrapper__col1', 
                    null, 
                    '.without__opinion__block__wrapper__col3');
        adaptScreen('.sdpkblock1', 
                    '.sdpkblock2', 
                    '.sdpksphere__wrapper__col1', 
                    '.sdpksphere__wrapper__col2', 
                    '.sdpksphere__wrapper__col3');
        adaptScreen('.sdpksphereblock1', 
                    null, 
                    '.sdpk__sphere__wrapper__col1', 
                    null, 
                    '.sdpk__sphere__wrapper__col3');
    } catch (error) {}
    
    form('form');

    select('#year', '#month', '#day');


});