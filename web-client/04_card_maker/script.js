const applyButton = document.getElementById('apply');

applyButton.addEventListener('click', function() {
    const org = document.getElementById('org').value;
    const fio = document.getElementById('fio').value;
    const position = document.getElementById('position').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    document.getElementById('card-org').textContent = org;
    document.getElementById('card-fio').textContent = fio;
    document.getElementById('card-position').textContent = position;
    document.getElementById('card-phone').textContent = phone;
    document.getElementById('card-email').textContent = email;
    document.getElementById('card-address').textContent = address;
});

