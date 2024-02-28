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

    // display show all button if there are more than 12 phones

    const showAllContainer = document.getElementById('show-all-container');


    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }




    // display only first 12 phones
    phones = phones.slice(0, 12);


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

    // hide loading spinner

    togolSpinnerLoading(false);


}

// hendel search button...

const hendelSearch = () => {

    // console.log('search hendel');
    const searchFild = document.getElementById('search-fild');
    togolSpinnerLoading(true);
    const searchText = searchFild.value;
    console.log(searchText);
    loadPhone(searchText);
}

const togolSpinnerLoading = (isLoding) => {
    const lodingSpinner = document.getElementById('spinner-loading');
    if (isLoding) {
        lodingSpinner.classList.remove('hidden');
    }
    else {
        lodingSpinner.classList.add('hidden');
    }
}

// loadPhone();