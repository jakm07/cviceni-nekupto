const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product1HTML = `
<img class="card-img-top" src="images/destniklobouk.jpg" alt="Card image cap">
<div class="card-body">
<h2 class="card-title">Deštníklobouk</h2>
<p class="card-text">Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.</p>
`

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

let karta1 = document.querySelector("#product1")
karta1.classList.add("border-primary")

let tlacitko = document.querySelector("#product2 button")
tlacitko.classList.remove("btn-primary")

let posledniProdukt = document.querySelector("#product3 .card-title")
posledniProdukt.classList.toggle("text-center")
