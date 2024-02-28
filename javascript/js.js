const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    displayPhone(phones);
}

const displayPhone = phones => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container');

    // clear phone container cards efore adding new cards
    phoneContainer.textContent = '';


    phones.forEach(phones => {
        console.log(phones);
        // 2.creat a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl`;
        // 3.set innerHTML

        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
                <img src="${phones.image}" alt="Shoes"
                    class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phones.phone_name}</h2>
                <p>${phones.brand}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;

        // 4.append child

        phoneContainer.appendChild(phoneCard);
    })


}

// hendel search button...

const hendelSearch = () => {
    // console.log('search hendel');
    const searchFild = document.getElementById('search-fild');
    const searchText = searchFild.value;
    console.log(searchText);
    loadPhone(searchText);
}
// loadPhone();