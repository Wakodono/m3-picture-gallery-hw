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
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

}

window.onload = function () {

}

       