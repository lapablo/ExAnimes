const url_image = 'https://cdn.appanimeplus.tk/img/'

function pesquisar() {
    const name = document.getElementById('pesqui')

   window.location.href =  `res.html?a=${name.value}`
}

const pop = async () => {
    const url = 'https://appanimeplus.tk/play-api.php?populares'

    const resp = await fetch(url)

    const data = await resp.json()

    console.log(data)

    data.map((anime) => {

        const body = document.getElementById('row-pop')

        const div = document.createElement('div')

        const cont_tit = document.createElement('div')

        const name = document.createElement('h1')

        name.innerText = anime.category_name
        
        name.classList.add('title')
        
        cont_tit.append(name)

        cont_tit.classList.add('cont-tit')

        div.append(cont_tit)

        const img = document.createElement('img')

        img.src = url_image + anime.category_image

        div.append(img)

        function clicou() {
            window.location.href = `res.html?a=${anime.category_name}`
        }

        div.addEventListener('click', clicou)

        body.append(div)


    })
}

pop()

const lan = async () => {
    const url = 'https://appanimeplus.tk/play-api.php?latest'

    const resp = await fetch(url)

    const data = await resp.json()

    console.log(data)

    data.map((anime) => {

        const body = document.getElementById('row-lan')

        const div = document.createElement('div')

        const cont_tit = document.createElement('div')

        const name = document.createElement('h1')

        name.innerText = anime.title
        
        name.classList.add('title')
        
        cont_tit.append(name)

        cont_tit.classList.add('cont-tit')

        div.append(cont_tit)

        const img = document.createElement('img')

        img.src = url_image + anime.category_image

        div.append(img)

        function clicou() {
            window.location.href = `anime.html?a=${anime.category_id}`
        }

        div.addEventListener('click', clicou)

        body.append(div)


    })
}

lan()