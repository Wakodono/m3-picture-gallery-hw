const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 563492ad6f917000010000012f1b813dabd7488292203054d60e72e8");
// myHeaders.append("Cookie", "__cf_bm=_uSxo.SdeUL4vVL0KZTNBHnHOPrWVAu_2Zb64coi.Go-1631712049-0-Aa+4hlSBWcNRVolE0Il5uf3kLLLHvqG57o06fZaI7NU1h/jcWXL+AlfJGKkUULxcc4AAZFx3SMjwrZAU/dEFvZ0=");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

const primaryButton = document.querySelector("load-images")

const loadImages = (query) => {
    fetch("https://api.pexels.com/v1/search?query=" + query, requestOptions)
      .then(response => response.json())
      .then(result => {
          const row = document.querySelector("main .row")
          row.innerHTML = ""

          console.log(row)

        
           for (let photo of result.photos) {
               console.log(photo)
           
              row.innerHTML += `
              <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img src=${photo.src.small} width = 287 height = 225 ">
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>`
          }
      })
      .catch(error => console.log('error', error));

}

const deleteCard = () => {
    // this.closest(.col-md-4)
}



       