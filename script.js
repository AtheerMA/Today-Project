
  function getNews() {
    const news = fetch(
      'https://inshortsapi.vercel.app/news?category=science'
    ).then(r => r.json())
    return news
  }
  async function showNews() {
    const result = await getNews()
    document.getElementById('data').innerHTML = result.data.map(elament => {
      return  `
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img class="img-fluid w-100" src="${elament.imageUrl}" style="object-fit: cover;">
        <h5 class="card-title">${elament.author}</h5>
        <p class="card-text">${elament.title}.</p>
        <a href="${elament.url}" class="btn bg-green">show more..</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
              <img class="img-fluid w-100" src="${elament.imageUrl}" style="object-fit: cover;">
        <h5 class="card-title">${elament.author}</h5>
        <p class="card-text">${elament.title}.</p>
        <a href="${elament.url}" class="btn bg-green">show more..</a>
      </div>
    </div>
  </div>
</div>

        ` 
    })
  }
  showNews()
