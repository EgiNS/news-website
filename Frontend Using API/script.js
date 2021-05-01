function fetchData() {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2i68F2V0vgRGT9Wy8hk4dQnt4f9nFtfk')
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        // console.log(data.results);
        const html = data.results
        .map(article => {
            if (article.multimedia != null) {
                return `
                <a href="${article.url}"><div class="news">
                    <img src="${article.multimedia[0].url}" alt="${article.multimedia[0].caption}" />
                    <h3> ${article.title} </h3>
                    <span id="name">
                        <p> ${article.byline} <br> ${article.updated_date} </p>
                    </span>
                    <p> ${article.abstract} </p>
                </div></a>
                `;
            }
        })
        .join("");
        // console.log(html);
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

function fetchDataHealth() {
    fetch('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=2i68F2V0vgRGT9Wy8hk4dQnt4f9nFtfk')
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        // console.log(data.results);
        const html = data.results
        .map(article => {
            if (article.multimedia != null) {
                return `
                <a href="${article.url}"><div class="news">
                    <img src="${article.multimedia[0].url}" alt="${article.multimedia[0].caption}" />
                    <h3> ${article.title} </h3>
                    <span id="name">
                        <p> ${article.byline} <br> ${article.updated_date} </p>
                    </span>
                    <p> ${article.abstract} </p>
                </div></a>
                `;
            }
        })
        .join("");
        // console.log(html);
        document.querySelector("#health").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

function fetchDataPolitics() {
    fetch('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=2i68F2V0vgRGT9Wy8hk4dQnt4f9nFtfk')
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        // console.log(data.results);
        const html = data.results
        .map(article => {
            if (article.multimedia != null) {
                return `
                <a href="${article.url}"><div class="news">
                    <img src="${article.multimedia[0].url}" alt="${article.multimedia[0].caption}" />
                    <h3> ${article.title} </h3>
                    <span id="name">
                        <p> ${article.byline} <br> ${article.updated_date} </p>
                    </span>
                    <p> ${article.abstract} </p>
                </div></a>
                `;
            }
        })
        .join("");
        // console.log(html);
        document.querySelector("#politics").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

function fetchDataSports() {
    fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=2i68F2V0vgRGT9Wy8hk4dQnt4f9nFtfk')
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        // console.log(data.results);
        const html = data.results
        .map(article => {
            if (article.multimedia != null) {
                return `
                <a href="${article.url}"><div class="news">
                    <img src="${article.multimedia[0].url}" alt="${article.multimedia[0].caption}" />
                    <h3> ${article.title} </h3>
                    <span id="name">
                        <p> ${article.byline} <br> ${article.updated_date} </p>
                    </span>
                    <p> ${article.abstract} </p>
                </div></a>
                `;
            }
        })
        .join("");
        // console.log(html);
        document.querySelector("#sports").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

function fetchDataTech() {
    fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=2i68F2V0vgRGT9Wy8hk4dQnt4f9nFtfk')
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        // console.log(data.results);
        const html = data.results
        .map(article => {
            if (article.multimedia != null) {
                return `
                <a href="${article.url}"><div class="news">
                    <img src="${article.multimedia[0].url}" alt="${article.multimedia[0].caption}" />
                    <h3> ${article.title} </h3>
                    <span id="name">
                        <p> ${article.byline} <br> ${article.updated_date} </p>
                    </span>
                    <p> ${article.abstract} </p>
                </div></a>
                `;
            }
        })
        .join("");
        // console.log(html);
        document.querySelector("#tech").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

function fetchMostViewed() {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=2i68F2V0vgRGT9Wy8hk4dQnt4f9nFtfk')
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        // console.log(data.results);
        const html = data.results
        .map(article => {
            // console.log(article.media[0])
            if (typeof article.media[0] != "undefined"){
                return `
                <div class="news">
                    <img src="${article.media[0]["media-metadata"][2].url}"/>
                    <a href="${article.url}"><h3> ${article.title} </h3></a>
                    <span id="name">
                        <p> Published on : ${article.published_date} </p>
                    </span>
                    <p> ${article.abstract} </p>
                </div>
                `;
            }
        })
        .join("");
        // console.log(html);
        document.querySelector("#most").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

fetchData();
fetchDataHealth();
fetchDataPolitics();
fetchDataSports();
fetchDataTech();
fetchMostViewed();