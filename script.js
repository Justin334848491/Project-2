
function myFunction() {
    let x = axios.get('https://api.themoviedb.org/3/movie/524251', {
    params: {
        api_key: "a59d2813d99007b086e055a41d8a036f",
    }})

.then((data) => {
    console.log (data.data.overview, data.data. original_title);
})}
