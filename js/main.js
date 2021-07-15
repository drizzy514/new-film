const form = document.querySelector("form");
const filmWrapper = document.querySelector(".film-wrapper");
const input = form.querySelector("input");



form.addEventListener("submit", function(evt){
    evt.preventDefault();
    var searchInput = input.value
    filmWrapper.innerHTML = "";
    fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=5258cdcd&type`).then(function (res) {
        console.log(res)
        if (res.status === 200) {
    
            return res.json();
        }
    }).then(function (data) {
        console.log(data)
        
        data.Search.forEach(function (filmObg){
            console.log(filmObg)
            var filmItem = document.createElement("li");
            filmItem.className = "p-4"
            var filmTitle = document.createElement("h2")
            var filmImg = document.createElement("img");
            var filmDate = document.createElement("p");
            filmImg.src = filmObg.Poster
            filmTitle.textContent = filmObg.Title;
            filmDate.textContent = filmObg.Year
            filmItem.append(filmImg);
            filmItem.append(filmTitle)
            filmItem.append(filmDate)
            filmWrapper.append(filmItem)


        })
      





        
    })
})
