const loadPhone =async (searchText) =>{
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
const data = await res.json();
const phones = data.data;
// console.log(phones);
displayPhones(phones)
}

const displayPhones = phones =>{
console.log(phones);
const phoneContainer = document.getElementById('container');
phoneContainer.textContent = ``;
// display show all button
//  const showAllContainer = document.getElementById('show-all-container');
//  console.log(showAllContainer);
// if(phones.length > 12){
//   showAllContainer.classList.remove('hidden');
// }
// else{
//   showAllContainer.classList.add('hidden');
// }


// displaly first 12 phones
phones = phones.slice(0,12);



phones.forEach(phone =>{
    console.log(phone);

    // create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-white-300 px-2 py-6 shadow-md`;
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>${phone.brand}</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    // appenchild
    phoneContainer.appendChild(phoneCard)
    
})
}


// handle search button
const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);

}

// loadPhone();