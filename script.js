
function myFunction() {

var x = document.getElementById('option').value;
document.getElementById('list').style.visibility = "visible"

if (x == "Avengers Endgame") {
    let x = axios.get('https://api.themoviedb.org/3/movie/299534', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "I see you") {
    let x = axios.get('https://api.themoviedb.org/3/movie/524251', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "Spider-Man No Way Home") {
    let x = axios.get('https://api.themoviedb.org/3/movie/634649', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "Spider-Man Into the Spider-Verse") {
    let x = axios.get('https://api.themoviedb.org/3/movie/324857', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "Star Wars The Force Awakens") {
    let x = axios.get('https://api.themoviedb.org/3/movie/140607', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "Star Wars The Empire Strikes Back") {
    let x = axios.get('https://api.themoviedb.org/3/movie/1891', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "The Fast and the Furious Tokyo Drift") {
    let x = axios.get('https://api.themoviedb.org/3/movie/9615', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "The Fast and the Furious The Fate of the Furious") {
    let x = axios.get('https://api.themoviedb.org/3/movie/337339', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "Shang-Chi and the Legend of the Ten Rings") {
    let x = axios.get('https://api.themoviedb.org/3/movie/566525', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}

if (x == "Doctor Strange in the Multiverse of Madness") {
    let x = axios.get('https://api.themoviedb.org/3/movie/453395', {
params: {
    api_key: "a59d2813d99007b086e055a41d8a036f",
}})

.then((get) => {
    document.getElementById('title').innerHTML = get.data.original_title
    document.getElementById('a').innerHTML = get.data.overview
    document.getElementById('b').innerHTML = get.data.budget
    document.getElementById('c').innerHTML = get.data.popularity
    document.getElementById('d').innerHTML = get.data.vote_average
    document.getElementById('e').innerHTML = get.data.vote_count
    document.getElementById('f').innerHTML = get.data.original_language
    document.getElementById('g').innerHTML = get.data.adult
    document.getElementById('h').innerHTML = get.data.release_date
    document.getElementById('i').innerHTML = get.data.revenue
    document.getElementById('j').innerHTML = get.data.runtime
})}}
