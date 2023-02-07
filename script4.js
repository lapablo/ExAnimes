function abrir_navbar() {
    document.getElementById('navbar').style.width = '250px'
}

function fechar_navbar() {
    document.getElementById('navbar').style.width = '0px'
}

const urlParams = new URLSearchParams(window.location.search)

const param = urlParams.get('ep')

async function pegar_ep() {
    const anime = document.getElementById('anime')

    const url = `https://appanimeplus.tk/play-api.php?episodios=${param}`

    const resp = await fetch(url)

    const data = await resp.json()

    console.log(data)

  

    data.map((ep) => {

    async function voltar() {
            const url = `https://appanimeplus.tk/play-api.php?episodios=${ep.video_id}&catid=${ep.category_id}&previous`

            const resp = await fetch(url)

            const data = await resp.json()

            data.map((epi) => {
                window.location.href = `vid.html?ep=${epi.video_id}`
            })
       }

     document.getElementById('vol').addEventListener('click', voltar)

     async function proximo() {
        const url = `https://appanimeplus.tk/play-api.php?episodios=${ep.video_id}&catid=${ep.category_id}&next`

        const resp = await fetch(url)

        const data = await resp.json()

        data.map((epi) => {
            window.location.href = `vid.html?ep=${epi.video_id}`
        })
   }

    document.getElementById('pro').addEventListener('click', proximo)
    
    async function pegar_nav() {
        const url = `https://appanimeplus.tk/play-api.php?cat_id=${ep.category_id}`

        const resp = await fetch(url)

        const data = await resp.json()

        data.map((epi) => {
            const item =  document.createElement("li")

            item.innerText = epi.title

            function outro_ep() {
                window.location.href = `vid.html?ep=${epi.video_id}`
            }

            item.addEventListener('click', outro_ep)

            const nav = document.getElementById('navbar')
    
            nav.append(item)
        })

      

    }

    pegar_nav()

        anime.href = `anime.html?a=${ep.category_id}`

        const title = document.getElementById('title')

        title.innerText = ep.title

        const vid = document.getElementById('vid')

        vid.src = ep.location


    })

}

pegar_ep()