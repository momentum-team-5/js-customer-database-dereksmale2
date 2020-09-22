let customer = document.querySelector("#customer")
let results = customers.results
let template = ("")
//identify//
console.log(customer)
//run code//
for (let customer of customers) {
    console.log(results)
    //run code//
    template += `
    <div class="container">
    <img src=${customer.picture.large}>
    <h3>${customer.name.first} ${customer.name.last}</h3>
    <p class="email">${customer.email}</p>
    <p class="street">${customer.location.street}</p>
    <p class="address">${customer.location.city} ${customer.location.state} ${customer.location.postcode}</p>
    <p class="dob">${customer.dob}</p>
    <p class="member">${customer.registered}</p>
    </div> `
    console.log(template)
    //run code//
}

customer.innerHTML = template