var search = document.getElementById("search")
var searchSubmit = document.getElementById("searchSubmit")
var box = document.getElementById("box")
box.style.justifyContent = "center"
box.style.alignItems = 'center'
searchSubmit.addEventListener('click', homePage)
var url = "http://www.omdbapi.com/?apikey=3eb11b4&"

function homePage(event) {
    event.preventDefault()

    var xhr = new XMLHttpRequest()
    xhr.open("GET", url + "s=" + search.value)

    xhr.onload = function () {
        var data = JSON.parse(xhr.response)
        if (xhr.status >= 200 && xhr.status < 400) {
            box.innerHTML = ""
            var row = document.createElement('div')
            row.setAttribute("class", "row justify-content-center align-items-center")
            var deck = document.createElement('div')
            deck.setAttribute("class", "card-deck justify-content-center align-items-center bg-dark")

            data.Search.forEach(function (movie) {

                var col = document.createElement('div')
                col.setAttribute("class", "col-lg-3 col-md-4 mb-md-3 col-sm-6 p-0 ")

                var card = document.createElement('div')
                card.setAttribute("class", "card  m-3 justify-content-center align-items-center bg-secondary")

                var view = document.createElement("div")
                view.setAttribute("class", "view overlay")
                var img = document.createElement('img')
                img.setAttribute("src", movie.Poster)
                img.setAttribute("class", "card-img-top")
                view.append(img)

                var cardbody = document.createElement("div")
                cardbody.setAttribute("class", "card-body")
                var h5 = document.createElement("p")
                h5.textContent = movie.Title
                h5.setAttribute("class", "card-text text-center text-wrap text-light")
                cardbody.append(h5)

                var footer = document.createElement("div")
                footer.setAttribute("class", "card-footer bg-secondary")
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light-blue ")
                button.innerHTML = "Read More"
                button.addEventListener("click", function () {
                    setDetails(movie['imdbID'])
                })
                footer.append(button)


                card.append(view, cardbody, footer)
                col.append(card)
                deck.append(col)

            })
            row.append(deck)
            box.append(row)

        }
        else {
            // box.innerHTML("Error")
            console.log("Error")
        }
    }

    xhr.send()
}

function setDetails(id) {
    sessionStorage.setItem('Id', id)
    window.location = 'index.html'
    return false
}
function getDetails() {
    var id = sessionStorage.getItem('Id')
    // console.log(id)
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url + "i=" + id)

    xhr.onload = function () {
        var data = JSON.parse(xhr.response)
        if (xhr.status >= 200 && xhr.status < 400) {
            var row1 = document.createElement('div')
            row1.setAttribute("class", "row justify-content-center align-items-center")
            
            var card = document.createElement('div')
            card.setAttribute("class", "card bg-secondary ")

            var row2 = document.createElement('div')
            row2.setAttribute("class", "row no-gutters")

            var col1 = document.createElement('div')
            col1.setAttribute("class", "col-md-4")
            var view = document.createElement("div")
            view.setAttribute("class", "view overlay")
            var img = document.createElement('img')
            img.setAttribute("src", data.Poster)
            img.setAttribute("class", "card-img")

            var col2 = document.createElement('div')
            col2.setAttribute("class", "col-md-8")
            var cardbody = document.createElement("div")
            cardbody.setAttribute("class", "card-body")
            var h3 = document.createElement("h3")
            h3.textContent = data.Title+ "  "+ "("+data.Year+")"
            h3.setAttribute("class", "card-text mb-4 text-white")

            var ul = document.createElement("ul")
            var li1 = document.createElement("li")
            li1.innerHTML = "<b>Released:</b>"+" "+ data.Released
            var li2 = document.createElement("li")
            li2.innerHTML = "<b>Ratings:</b>"+" "+ data.imdbRating
            var li3 = document.createElement("li")
            li3.innerHTML = "<b>Director:</b>"+" "+ data.Director
            var li4 = document.createElement("li")
            li4.innerHTML = "<b>Actors:</b>"+" "+ data.Actors
            var li5 = document.createElement("li")
            li5.innerHTML = "<b>Genre:</b>"+" "+ data.Genre
            var li6 = document.createElement("li")
            li6.innerHTML = "<b>Language:</b>"+" "+ data.Language
            var li7 = document.createElement("li")
            li7.innerHTML = "<b>Country:</b>"+" "+ data.Country
            ul.append(li1,li2,li3,li4,li5,li6,li7)
            
            var row3 = document.createElement("div")
            row3.setAttribute("class", "row ")
            var col3 = document.createElement("div")
            col3.setAttribute("class", "col mt-4")
            var h4 = document.createElement("h4")
            h4.innerHTML = "Storyline"
            h4.setAttribute("class", "text-white")
            var line = document.createElement("hr")
            var para = document.createElement("p")
            para.innerHTML = "<i>"+data.Plot+"</i>"
            var link = document.createElement("a")
            link.setAttribute("class", "btn btn-primary")
            link.setAttribute("href", "https://www.imdb.com/title/"+data.imdbID)
            link.setAttribute("role", "button")
            link.setAttribute("target","_blank")
            link.innerHTML = "IMDB Link"
            
            
            col1.append(view)
            view.append(img)
            col3.append(h4,line,para,link)
            row3.append(col3)
            cardbody.append(h3,ul,row3)
            col2.append(cardbody)
            row2.append(col1,col2)
            card.append(row2)
            row1.append(card)
            box.append(row1)
            
        }
        else {
            // box.innerHTML("Error")
            console.log("Error")
        }
    }

    xhr.send()
}

//     
//     

//     
//         
//         

//                 var cardbody = document.createElement("div")
//                 cardbody.setAttribute("class", "card-body")
//                 var h5 = document.createElement("p")
//                 h5.textContent = movie.Title
//                 h5.setAttribute("class","card-text text-center text-wrap")
//                 cardbody.append(h5)

//                 var footer = document.createElement("div")
//                 footer.setAttribute("class", "card-footer ")
//                 var button = document.createElement("button")
//                 button.setAttribute("class","btn btn-light-blue ")
//                 button.innerHTML = "Read More"
//                 button.addEventListener("click", function(){
//                     details(data)
//                 })
//                 footer.append(button)


//                 card.append(view,cardbody,footer)
//                 col.append(card)
//                 deck.append(col)

//             })
//             row.append(deck)
//             box.append(row)

//         }


// }