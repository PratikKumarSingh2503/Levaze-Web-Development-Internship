let breakingImg = document.querySelector('#breakingImg')
let breakingNews_title = document.querySelector('#breakingNews .title')
let breakingNews_desc = document.querySelector('#breakingNews .description')
let topNews = document.querySelector('.topNews')
let sportsNews = document.querySelector('#sportsNews .newsBox')

// fetching news data from a website providing api

const apiKey = "35774b6ef5cf4c50a38a1d9332761028"

const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles

}
// fetchData('general',5)

// adding breaking news

const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`
    breakingNews_title.innerHTML = `<a href=${data[0].url}
    target="_blank"><h2>${data[0].tittle}</h2></a>`
    breakingNews_desc.innerHTML = `${data[0].description}`
}
// fetchData('general', 5).then(add_breakingNews)
fetchData('sports', 5).then(add_breakingNews)

const add_topNews = (data) => {
    let html = ''
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `<div class="news">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    topNews.innerHTML = html
}
// fetchData('general', 20).then(add_topNews)
fetchData('sports', 5).then(add_topNews)

const add_sportsNews = (data) => {
    let html = ''
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    sportsNews.innerHTML = html
}
fetchData('sports', 30).then(add_sportsNews)

