const openbtn = document.querySelectorAll('.open-modal');

openbtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const modalid = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalid);
        modal.showModal()
    });
});

const closebtn = document.querySelectorAll('.close-modal');

closebtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const modalid = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalid);
        modal.close();
    })
})


