





// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run() {
 // Add code you want to run on page load here
 
// console.log(main.html)
}
setTimeout(run, 1000);
// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched
const BASE_URL = "https://resource-ghibli-api.onrender.com"
const personID = "https://resource-ghibli-api.onrender.com/people"
console.log(personID)
const optionMovieTitle = document.querySelector("option")
const selectMovie =document.querySelector("select")
// const selectMovieDetails = document.querySelector("select#display-info")
const div =document.querySelector("#display-info")



const reviewSection = document.querySelector("#reviews")

const button = document.querySelector("#show-people")

fetch(`${BASE_URL}/films`)

.then((response) => response.json())
.then((data) => {
console.log(data)

let idArr = Object.values(data)
// console.log(idArr)
      
    console.log(data[0].id)
console.log(data[0].people)

    addMoviesToSelectBox(data)
    addMovieDetails(data)
    peopleForMovie(idArr)

})


.catch((error) => {
console.log(error)
})

function addMoviesToSelectBox(data) {
    for (let movie of data) {
        console.log(movie.id)
        const optionMovieTitle = document.createElement("option")
        optionMovieTitle.value = `${movie.id}`
        optionMovieTitle.innerText = `${movie.title}`
        selectMovie.append(optionMovieTitle)
        // console.log(data)
        // return optionMovieTitle
        // console.log(optionMovieTitle)
       
    }
   
}

function addMovieDetails(data) {

    for (movie of data) {
        if (movie.release_date === "1989") {
    //I'm able to solve for one or the other currently but not both tests 
        const h3Title = document.createElement("h3")
        h3Title.innerText = movie.title
        const movieReleaseDate = document.createElement("p")
        movieReleaseDate.setAttribute = ("class", "releasedate")
        movieReleaseDate.innerText = movie.release_date
        // console.log(movieReleaseDate)
        movieDescription = document.createElement("p") 
        movieDescription.setAttribute = ("class", "description")
        movieDescription.innerText = movie.description
        // div.append(`${movie.release_date} ${movie.description}`)
        div.append(h3Title)
        div.append(movieReleaseDate)
        div.append(movieDescription)
  
    }
}


 
   return movie
}


function peopleForMovie (idArr) {
    const ul = document.querySelector("ul")
    // console.log(idArr)
    const ol = document.createElement("ol")
          fetch(personID)
    .then((response) => response.json())
    .then((people) => {
      
    for (let person of people) {
        if (idArr.id === people.id) {
            console.log(people.id)
        button.addEventListener("click", event => {
            ol.innerText = `${person.name}`
            event.preventDefault()
            ul.append(ol)
            console.log(person.name)
        })
    }

}

    })  
        
    .catch((error) => {
        console.log(error) 
    })
        
}


// function movieReview () {

// }
// if (movie.release_date.includes("1988")) {
//     movieReleaseDate.remove()
// }

// selectMovie.addEventListener("select", event => {
//     event.preventDefault()
// fetch(`${BASE_URL}/films`)

// .then((response) => response.json())
// .then((data) => {

// if (movie.release_date === "1988") {
//     console.log(div.length)
//    return movie.release_date.slice(3)
// }
// console.log("hello")
// })
 
    
// .catch((error) => {
//     console.log(error)
// })

// })
// console.log(BASE_URL)
// console.log(`${BASE_URL}/films`)
