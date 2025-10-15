
    
window.onload = () => {
    const params = new URLSearchParams(window.location.search);

    document.querySelector('#name').value = params.get('name') || '';
    document.querySelector('#email').value = params.get('email') || '';
    document.querySelector('#poste').value = params.get('poste') || '';
    document.querySelector('#number').value = params.get('montant') || '';

    const submit = document.getElementById('submit')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const poste = document.getElementById('poste')
    const montant = document.getElementById('number')
    const identifiant = params.get('id') || ''

    submit.addEventListener('click', async () => {

        const res = await fetch('http://localhost:4000/api/employer/update', {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                id: identifiant,
                name: name.value,
                email: email.value,
                poste: poste.value,
                montant: montant.value
            })
        })
        if(!res.ok){
            return console.error('Une erreur est survenu')
        }
        const data = await res.text()
        console.log(data)

        window.location.href = '/index.html'
    })

};
