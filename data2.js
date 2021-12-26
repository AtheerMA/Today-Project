function getNewss() {
    const newss = fetch(
      'https://inshortsapi.vercel.app/news?category=science'
    ).then(r => r.json())
    return newss
  }
  async function showNewss() {
    const result = await getNewss()
    document.getElementById('data').innerHTML = result.data.map(elament => {
      return  `
      <div class="bg-white border border-top-0 p-3">
      <div class="d-flex align-items-center bg-white mb-3" style="height: 110px;">
          <img class="img-fluid2" src="${elament.imageUrl}" alt="">
          <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
              <div class="mb-2">
              <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">${elament.author}</a>
              <br>
              <a class="text-body"><small>${elament.date}</small></a>
              <br>
                  <a class="badge bg-green text-uppercase font-weight-semi-bold p-1" href="${elament.url}">More</a>
              </div>
          </div>
      </div>
  </div>
        ` 
    })
  }
  showNewss()
