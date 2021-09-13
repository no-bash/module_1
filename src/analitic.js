function createAnalitycs(){
    let counter;
    let isDestroyed = false;
    const listener = ()=> {
        counter++
    };
    document.addEventListener('click', listener)

    return {
        destroy(){
            document.removeEventListener('click', listener);
            isDestroyed = true
        },

        getClicks(){
            if(isDestroyed){
                return 'Anal destroy'
            };
            return counter;
        }
    };
};


window.analytics = createAnalitycs();