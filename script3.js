const url_image = 'https://cdn.appanimeplus.tk/img/'



const urlParams = new URLSearchParams(window.location.search)

const param = urlParams.get('a')

async function anime_info() {
    const url = `https://appanimeplus.tk/play-api.php?info=${param}`

    const resp = await fetch(url)

    const data = await resp.json()

    console.log(data)

    data.map((info) => {
        const body = document.getElementById('info')

        const div = document.createElement('div')

        const name = document.createElement('h1')
        
        name.innerText = info.category_name

        div.append(name)

        const img = document.createElement('img')

        img.src = url_image + info.category_image

        div.append(img)

        const infos = document.createElement('p')

        infos.innerText = `ano: ${info.ano} categoria: ${info.category_genres}`

        div.append(infos)

        const desc = document.createElement('div')

        desc.innerHTML = `<p>${info.category_description}</p>`

        
        div.append(desc)
        

        body.append(div)
    })
}

anime_info()

async function pegar_eps() {
    const url = `https://appanimeplus.tk/play-api.php?cat_id=${param}`

    const resp = await fetch(url)

    const data = await resp.json()

    console.log(data)

    data.map((ep) => {

        const body = document.getElementById('eps')

        const div = document.createElement('div')

        const name = document.createElement('h1')

        name.innerText = ep.title

        div.append(name)

        const but = document.createElement('button')

        but.innerText = 'Ver'

        function clicou() {
            window.location.href = `vid.html?ep=${ep.video_id}`
        }

        but.addEventListener('click', clicou)

        div.append(but)

        body.append(div)
    })
}

pegar_eps()