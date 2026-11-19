const controlButtons = document.querySelectorAll('.ctrl-btn');

controlButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const group = btn.closest('.btn-group');
        const siblings = group.querySelectorAll('.ctrl-btn');
        siblings.forEach(function(sibling) {
            sibling.classList.remove('active');
        });
        btn.classList.add('active');
    });
});

const colorCircles = document.querySelectorAll('.color-circle');

colorCircles.forEach(function(circle) {
    circle.addEventListener('click', function() {
        const group = circle.closest('.color-group');
        
        const siblings = group.querySelectorAll('.color-circle');
        siblings.forEach(function(sibling) {
            sibling.classList.remove('active');
        });
        
        circle.classList.add('active');
    });
});


const applyButton = document.getElementById('apply');

applyButton.addEventListener('click', function() {
    
    const org = document.getElementById('org').value;
    const fio = document.getElementById('fio').value;
    const position = document.getElementById('position').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    
    if (org) document.getElementById('card-org').textContent = org;
    if (fio) document.getElementById('card-fio').textContent = fio;
    if (position) document.getElementById('card-position').textContent = position;
    if (phone) document.getElementById('card-phone').textContent = phone;
    if (email) document.getElementById('card-email').textContent = email;
    if (address) document.getElementById('card-address').textContent = address;
    
    const fioAlign = document.querySelector('.align-group[data-target="fio"] .ctrl-btn.active').dataset.value;
    const fioSize = document.querySelector('.size-group[data-target="fio"] .ctrl-btn.active').dataset.value;
    const fioColor = document.querySelector('.color-group[data-target="fio"] .color-circle.active').dataset.value;
    
    const cardFio = document.getElementById('card-fio');
    cardFio.style.textAlign = fioAlign;
    cardFio.style.fontSize = fioSize + 'px';
    cardFio.style.color = fioColor;
    
    const posAlign = document.querySelector('.align-group[data-target="position"] .ctrl-btn.active').dataset.value;
    const posSize = document.querySelector('.size-group[data-target="position"] .ctrl-btn.active').dataset.value;
    const posColor = document.querySelector('.color-group[data-target="position"] .color-circle.active').dataset.value;
    
    const cardPos = document.getElementById('card-position');
    cardPos.style.textAlign = posAlign;
    cardPos.style.fontSize = posSize + 'px';
    cardPos.style.color = posColor;
});
