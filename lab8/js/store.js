let categories = new Map();
let allProducts;

    // Fetch fake store data 
    axios.get('/products')
    .then(response => { allProducts = response.data; loadProducts(response.data); loadFilterOptions(); })
    
    //loads products 
    function loadProducts(products) {
        document.querySelector('#product-list').innerHTML = '';

        products.forEach(product => { 
            let categorySlug = product.category.replaceAll(' ', '_').replaceAll("'", '');
            categories.set(product.category, categorySlug);

            addProduct(product); 
        })

    }
    if(products.length == 0) document.querySelector('#product-list').innerHTML = '<p>No matching products.</p';

    function addProduct(item) {
        const template = document.getElementById('card-template').content.cloneNode(true);
        template.querySelector('.card-title').innerText = product.title;
        template.querySelector('.card-header').innerHTML = getcategoryIcon(item.category) + ' ' + item.category;
        template.querySelector('.card-subtitle').innerText =  '$' + item.price;
        template.querySelector('.card-img-top').src = item.image;
        template.querySelector('.card-img-top').alt = product.title;
        template.querySelector('.card-text').innerText = item.description.substring(0, 50) + '...';
        template.querySelector('.card').className = 'card '+categories.get(item.category);
        template.querySelector('.card').id = 'product' + item.id;
        template.querySelector('.btn').addEventListener('click', (e) => expandText(e, item.id, item.description));
        document.querySelector('#product-list').appendChild(template);
    }
    //add icons to each product category 
    function getCategoryIcon(cat) {
        switch(cat.toLowerCase()){
            case "men's clothing": return '<i class="fa-solid fa-shirt"></i>';
            case "women's clothing": return '<i class="fa-solid fa-person-dress"></i>'
            case "jewelery": return '<i class="fa-regular fa-gem"></i>';
            case "electronics": return '<i class="fa-solid fa-tv"></i>'   
        }
        return '<i class="fa-brands fa-shirtsinbulk"></i>' ;
    }
    
    //populate the categories to display in drop-down
    function loadFilterOptions(){
        let filterSelect = document.getElementById('category_filter')
        categories.forEach((slug, cat) => {
            filter.Select.innerHTML += `option value=${cat}">${cat}</option>`;
        });

    //filter list of products by category from drop-down
    function filterproducts(e) 
        let selectedCategory = e.target.value;
        let filteredProducts = allProducts.filter(product => product.category == selectedCategory);

        loadProducts(filteredProducts)
    
    }
    function chooseCategory(e){
        
        let selectedCategory = e.target.value;
        let filteredProduct = allProducts.filter(product => product.category == selectedCategory);
        if (selectedCategory == 'default') filteredProduct =allProducts;
        loadFilteredProducts(filteredProduct);
    }

    //sort the product based on price or title
    function sortProducts(e){
        let selectedOrder = e.target.value;
        let sortedProducts = [...allProducts];

        switch(selectedOrder) {
            case 'price_lowhi': sortedProducts.sort((p1,p2) => p1.price - p2.price); break;
            case 'price_hilow': sortedProducts.sort((p1,p2) => p2.price - p1.price); break;
            case 'title_atoz' : sortedProducts.sort((p1,p2) => p1.title == p2.title ? 0 : (p1.title > p2.title ? 1 : -1)); break;
            case 'title_ztoa' : sortedProducts.sort((p1,p2) => p2.title == p1.title ? 0 : (p2.title > p1.title ? 1 : -1)); break;
        }
        loadProducts(sortedProducts);
    }

    //search for products
    function searchProducts(){
        let searchText = document.getElementById('searchText').value.toLowerCase();
        let filteredProducts = allProducts.filter(product => product.title.toLowerCase().indexOf(searchText) >= 0 ||
        product.description.toLowerCase().indexOf(searchText)>= 0 || product.category.toLowerCase().indexOf(searchText) >= 0); 
    
        loadFilteredProducts(filteredProducts);
    }

    //expand the description
    function expandText(e, productID, fullDescription) {
        e.preventDefault();
        document.querySelector('$product' + productID + ' .card-text').innerText = fullDescription
    }
