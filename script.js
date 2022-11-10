function myFunction() {
  document.getElementById('idName').remove()
  document.getElementById('idiframe').remove()

    document.getElementById("idName")

    document.getElementById("descriptions").style.visibility="visible"
  
      let response = axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "a59d2813d99007b086e055a41d8a036f",
      include_adult: "false",
      query: document.getElementById('option').value,
    }
  });
  
  response = response.then((moviesData) => {
    for (let movie of moviesData.data.results) {   
      axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
        params: {
          api_key: "a59d2813d99007b086e055a41d8a036f",
          append_to_response: "videos",
        }
      }).then((get) => {
        const img = document.createElement('img');
        img.id="idName"
        const iframe = document.createElement('iframe');
        iframe.id="idiframe"
        const trailers = get.data.videos.results.filter((trailer) => trailer.type === "Trailer");
        iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        document.body.append(img);
        document.body.append(iframe);
  
    
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
  
      
  
    })}})}
