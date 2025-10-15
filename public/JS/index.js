

window.onload = async () => {
    
    const container = document.querySelector('.container')
    let div, div2,h3,a,montant,post,divv,div3,infos,btnSupprimer, btnModifier, divA

    try {
        const res = await fetch('http://localhost:4000/api/employer/employers', {
        method: 'GET',
        headers: {'content-type':'application/json'}
        })

        if(!res.ok){
            return console.error(`Une erreur c'est produite lors de la recupertaion des données fetch : ${err}`)
        }

        const result = await res.json()
        console.log(result)

        result.forEach(element => {
            try{
                console.log('entrer')

                div = document.createElement('div')
                div2 = document.createElement('div')
                div2.classList.add('div2')
                h3 = document.createElement('h3')
                h3.classList.add('nom')
                a = document.createElement('a')
                divA = document.createElement('div')
                divA.classList.add('divA')
                a.classList.add('adresseMail')
                post = document.createElement('p')
                post.classList.add('SpanPost')
                montant = document.createElement('p')
                montant.classList.add('SpanMontant')
                divv = document.createElement('div')
                divv.classList.add('divv')

                div.classList.add('personne')
                div3 = document.createElement('div')
                div3.classList.add('div3')

                btnModifier = document.createElement('button')
                btnModifier.classList.add('btnModifier')
                btnSupprimer = document.createElement('button')
                btnSupprimer.classList.add('btnSupprimer')

                infos = document.createElement('div')
                infos.classList.add('employers')


                h3.innerText = element.name
                a.href = `mailto:${element.email}`;
                a.innerText = element.email
                post.textContent = element.poste
                montant.textContent = element.montant + ' $'
                let id = element.id

                divA.appendChild(a)
                
                div2.appendChild(h3)
                div2.appendChild(divA)
                divv.appendChild(post)
                divv.appendChild(montant)
                div2.appendChild(divv)

                div.appendChild(div2)

                // les boutons
                btnModifier.textContent = 'Modifier'
                btnSupprimer.textContent = 'Supprimer'

                div3.appendChild(btnModifier)
                div3.appendChild(btnSupprimer)

                div.appendChild(div3)
                infos.appendChild(div)
                container.appendChild(infos)


                btnModifier.addEventListener('click', async ()=>{

                    const params = new URLSearchParams({
                        id: element._id,
                        name: element.name,
                        email: element.email,
                        poste: element.poste,
                        montant: element.montant,
                    })
                    window.location.href = `put.html?${params.toString()}`;
                })

                btnSupprimer.addEventListener('click', async ()=>{
                    console.log(element._id)

                    const res = await fetch('http://localhost:4000/api/employer/delete', {
                        method: 'DELETE',
                        headers:{'content-type':'application/json'},
                        body: JSON.stringify({id: element._id})
                    })

                    if(!res.ok){
                        return console.error('Une erreur cote navigateur')
                    }
                    const data = await res.text()
                    console.log(data)

                    window.location.href = '/index.html'
                })
            }catch(err){
                console.error("Une erreur lors de l'affichage ", err)
            }            
        })
    }catch(err){
        console.error('Une erreur ', err)
    }

}
