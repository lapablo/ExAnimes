const url_image = 'https://cdn.appanimeplus.tk/img/'

const urlParams = new URLSearchParams(window.location.search)

const name_anime = urlParams.get('a')

async function anime() {
    const url = `https://appanimeplus.tk/play-api.php?search=${name_anime}`

    const resp = await fetch(url)

    const data = await resp.json()

    const body = document.getElementById('content-result')

    console.log(data)

    data.map((anime) => {
        const div = document.createElement('div')

        const img = document.createElement('img')

        img.src = url_image + anime.category_image

        div.append(img)

        const name = document.createElement('h1')

        name.innerText = anime.category_name

        div.append(name)

        function clicou() {
            window.location.href = `anime.html?a=${anime.id}`
        }

        div.addEventListener('click', clicou)

        body.append(div)
    })
}

anime()