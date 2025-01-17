(function(){
    
    const sliders = [...document.querySelectorAll('.services__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentservices = document.querySelector('.services__body--show').dataset.id;
        value = Number(currentservices);
        value+= add;


        sliders[Number(currentservices)-1].classList.remove('services__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('services__body--show');

    }

})();