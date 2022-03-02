//wait for page to be fully loaded
window.addEventListener("load", async () => {
  try {
    let token = localStorage.getItem("token");
    const movies = await getData("http://localhost:3000/api/movies", { token });
    console.log("movies", movies);
    let htmlData = "";
    for (let movieItem of movies.moviesData) {
      htmlData += `
        <div class="card">
          <img src="${movieItem.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${movieItem.title}</h5>
            <p class="card-text">
              <small class="text-muted">${movieItem.year}</small>
            </p>
          </div>
        </div>
        `;
    }
    document.getElementById("movies-wapper").innerHTML = htmlData;
  } catch (err) {
    console.log("error", err);
  }
});
