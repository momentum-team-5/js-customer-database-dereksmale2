let customer = document.querySelector("#customer")
let results = customers.results
let template = ("")
//identify//
console.log(customer)
//run code//
for (let i = 0; i < results.length; i++) {
    console.log(results)
    //run code//
    template += `
    <div class="container">
    <img src=${results[i].picture.large}>
    <h3>${results[i].name.first} {results[i].name.last}</h3>
    <hr>
    <p class="email">${results[i].email}</p>
    <p class="street">${results[i].location.street}</p>
    <p class="address">${results[i].location.city}. ${results[i].location.state}. ${results[i].location.postcode}</p>
    <p class="dob">${results[i].dob}</p>
    <p class="member">${results[i].registered}</p>
    </div> `
    console.log(template)
    //run code//
}

customer.innerHTML = template