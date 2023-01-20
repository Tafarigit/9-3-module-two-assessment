





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
const personID = "https://resource-ghibli-api.onrender.com/films"
console.log(personID)

const form = document.querySelector("form")
const selectMovie =document.querySelector("select")
const selectMovieDetails = document.querySelector("select#display-info")
const div =document.querySelector("#display-info")
const ul = document.querySelector("ul")
const ol = document.createElement("ol")
ol.setAttribute ("show-people", "name")
const resetReviewButton = document.querySelector("#reset-reviews")
let optionMovieTitle = document.createElement("option")

const reviewSection = document.querySelector("#reviews")

const button = document.querySelector("#show-people")



const formInputReview = document.querySelector("#review")
fetch(`${BASE_URL}/films`)

.then((response) => response.json())
.then((data) => {
console.log(data)

   
// I don't believe this code is doing anything.

button.addEventListener("#show-people", (event) => {

    event.preventDefault()
    const ol = document.querySelector("ol")

   
    // if (optionMovieTitle === " ") {
    //    alert("Please select a movie first")
//     const textInput = document.querySelector("input")
//     const text = textInput.value
//     if (form.review.value === "") {
//         textInput.innerText = li

// 
// }

    // form.append(ol)
    ul.append(ol.innerText)
    form.reset()
})


    // button.addEventListener("click", event => {
    // // const reviewUl = document.querySelector("#reviews")
    // //     writeReview()
    // //     event.preventDefault()
    //     // ul.append(ol)
    // })
   





       




ul.append(ol)

    addMoviesToSelectBox(data)
    addMovieDetails(data)
 // getPeopleNames(data)
    writeReview()
    movieId()
    // form.reset()

})


.catch((error) => {
console.log(error)
})


// This function adds movies to the select box

function addMoviesToSelectBox(data) {
    
    for (let movie of data) {
        // console.log(movie.id)
        optionMovieTitle = document.createElement("option")
        optionMovieTitle.value = `${movie.id}`
        optionMovieTitle.innerText = `${movie.title}`
        selectMovie.append(optionMovieTitle)
        // console.log(data)
        // return optionMovieTitle
        // console.log(optionMovieTitle)
       
    }
    
}

// This fucntion get the movie details and appends to proper tags. However, it only passes two out of three test otherwise one out of three


function addMovieDetails(data) {

    for (let movie of data) {
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
        // return movie
    }
}


 
//    return movie
}





//This function gets the movie ID's which also corresponds to the url property on the people endpoint. However,the 

// name property value populates in my console but I was not able to get it to appear for morre than one name on the page.

function movieId () {
  
    fetch(`${BASE_URL}/people`)
    .then((response) => response.json())
    .then((members) => {
        console.log("members", typeof(members))
        console.log(members)
        let personList = []
    let movieIdResult = []
    // let peopleList = {}
    for (let i = 0; i < members.length; i++) {
      let movie = members[i]
       if (movie) {
        console.log(movie.id)
        movieIdResult.push(movie.films)
        

    
       
    }
    for (let person of members) {
        let movieFilmsID = movie.id

        
    const ol = document.querySelectorAll("ol")

        if (person.url.includes(movie.id)) {
         
            personList.push(person.name)
            console.log(personList)
            console.log(person.name)
           
        }
      
        ol.innerText = person.name
   
        // return person.name
    }
}



     
 


// return person.name  


    
})
    .catch((error) => {
        console.log(error)
        })

        
       
    }
        



// I dont think this function is doing anything, it is definitely not doing what ios required to pass the test.
function writeReview() {
    const li = document.querySelectorAll("li")

   

    form.addEventListener("submit", (event) => {
    const li = document.createElement("li")
      const formInputReview = document.querySelector("#review")
      formInputReview.value = "text"
        event.preventDefault()
        
             
    //     const textInput = document.querySelector("input")
    //     const text = textInput.value
    //     if (form.review.value === "") {
    //         textInput.innerText = li
    // 
    
    
    //     form.append(li)
        form.reset()
    })

}
    
    



// function matchingID (data, movieIdResult, peopleIDResult) {
//     console.log(movieIdResult)
//     let movieID = ''
//     let peopleList = []
//     for (let movie of movieIdResult) {
//         console.log(movieID)
//         return movie.id = movieID
//     }
//       for (let id of data) {
//             if (peopleIDResult.includes(movieID)) {
                
//         console.log("person: ", person.name) 
//         peopleList.push(person.name)
//         return person.name
      
//     }
//     console.log("person: ", person.name) 

// }
// console.log("people :", peopleList)
// return peopleList
// }
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

// function peopleForMovie (idArr) {
//     const ul = document.querySelector("ul")
//     // console.log(idArr)
//     const ol = document.createElement("ol")
//           fetch(personID)
//     .then((response) => response.json())
//     .then((people) => {
      
//     for (let person of people) {
//         if (idArr.id === people.id) {
//             console.log(movie.people.name)
//         button.addEventListener("click", event => {
//             ol.innerText = `${person.name}`
//             event.preventDefault()
//             ul.append(ol)
//             // console.log(person.name)
//         })
//     }

// }

//     })  
        
//     .catch((error) => {
//         console.log(error) 
//     })
        
// }


