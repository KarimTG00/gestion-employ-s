
const nom = document.getElementById('name')
const email = document.getElementById('email')
const poste = document.getElementById('poste')
const montant = document.getElementById('number')
const btn = document.getElementById('submit')

console.log('dans le js')

btn.addEventListener('click', async (e) =>{
    e.preventDefault()

    console.log('entrer dans le form.js')
    console.log(nom.value, email.value, poste.value, montant.value)
    try{
        const res = await fetch('http://localhost:4000/api/employer/new', {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                name: nom.value,
                email: email.value,
                poste: poste.value,
                montant: montant.value})
        })

        if(!res.ok){
            const data = await res.text()
            return console.error('Une erreur : ', data)
        }

        console.log('data envoyé')

        window.location.href = '/index.html'

    }catch(err){
        console.error(`Une erreur lors de l'envoie des données ${err}`)
    }
})



