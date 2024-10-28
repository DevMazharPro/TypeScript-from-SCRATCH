function addME(){
    const result = document.getElementById('button');
    if (result){
        (result as HTMLElement).innerHTML = 'Hello, World!';
    }else {
        console.error('Element with id "button" not found');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('button');
    if (button) {
        button.addEventListener('click', addME);
    } else {
        console.error('Element with id "button" not found');
    }
});
