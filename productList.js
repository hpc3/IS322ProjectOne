

//To do
// Filter :^(
// fill mockDB with jazz
//style cards

(function () {



    var mockDatabase =
        [
            {_id : '1', model: '*Joke About Camo*',color : 'look its a color', style : 'it’s a style can you believe it', wireless: false, price: '4', description: 'its a description', brand: 'Mr. Banana Grabber' , photo: 'media/headphone-image-11.jpg'},
            {_id : '2', model: 'NightHawk 5000\'s', color : 'look its a color', style : 'it’s a style can you believe it', wireless: false, price: '4', description: 'its a description', brand: 'Mr. Banana Grabber' , photo: 'media/headphone-image-12.jpg'},
            {_id : '3', model: 'MDRXMIII', color : 'Black', style : 'Around the Ear', wireless: true, price: '350', description: 'Awesome Noise Cancelling headphones', brand: 'Sony', photo: 'media/headphone-image-1.jpg'},
            {_id : '4',  model: 'MDRXMIII',color : 'Gold', style : 'Around the Ear', wireless: true, price: '350', description: 'Awesome Noise Cancelling headphones', brand: 'Sony', photo: 'media/headphone-image-2.jpg'},
            {_id : '5', model: 'Comfort Quiet 35', color : 'Black', style : 'Around the Ear', wireless: true, price: '350', description: 'Awesome Noise Cancelling headphones', brand: 'Bose', photo: 'media/headphone-image-3.jpg'},
            {_id : '6', model: 'Comfort Quiet 35', color : 'Silver', style : 'Around the Ear', wireless: true, price: '350', description: 'Awesome Noise Cancelling headphones', brand: 'Bose', photo: 'media/headphone-image-4.jpg'},
            {_id : '7',  model: 'Comfort Quiet 35',color : 'Blue', style : 'Around the Ear', wireless: true, price: '350', description: 'Awesome Noise Cancelling headphones', brand: 'Bose', photo: 'media/headphone-image-5.jpg'},
            {_id : '8', model: 'Solo3', color : 'Black', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats', photo: 'media/headphone-image-6.jpg'},
            {_id : '9', model: 'Solo3', color : 'Matte Black', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats', photo: 'media/headphone-image-7.jpg'},
            {_id : '10', model: 'Solo3', color : 'Silver', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats', photo: 'media/headphone-image-8.jpg'},
            {_id : '11', model: 'Solo3', color : 'Gold', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats', photo: 'media/headphone-image-9.jpg'},
            {_id : '12', model: 'Solo3',color : 'Rose Gold', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats', photo: 'media/headphone-image-10.jpg'}
        ];

    //Css '...'

        function renderCards(results){
            var productList = document.querySelector('#testFill');


            productList.innerHTML = '';

            var filler = results.map(function(result){

                return '<div class="col-sm-4 mt-3 pt-3 mb-4 pl-5 headphone-card"><div class="card product-card" style="width: 18rem;"> <img class="card-img-top p-2" src="' + result.photo + '" alt="Card image cap"> <div class="card-body"> <h5 class="card-title pl-4 idTest">'
                            + result.model +
                            '</h5>' +
                            '<ul><li>Brand: ' + result.brand + '</li><li> Price: ' + result.price + ' </ul>' +
                             '<a href="#" class="btn btn-primary">More Info</a></div></div></div>';



            });

            filler.forEach(function(row){
                productList.innerHTML += row;
            });


        }


        renderCards(mockDatabase);


    function toggleBluetooth(connection) {
        // If showPublished is TRUE, only display published results
        // Filter will only inclue objects that return TRUE from it's query
        var filteredResults = mockDatabase.filter(function (result) {
            // If showPublished is TRUE, always show.
            // Otherweise only show if published is TRUE
            return connection || result.wireless;
        });
        renderCards(filteredResults);
    }
    // Change events trigger after the value of a form input changes
    document.querySelector('#connectionFilter').addEventListener('change', function(event){
        // in this case value is a string that we need to convert to a boolean
        var value = event.target.value === 'true';
        toggleBluetooth(value);
    });


    function orderBy(order){


            var orderedArray = (order === 'brand' || order === 'style') ?
                    mockDatabase.sort(function(a,b){
                        if (order === 'brand') {
                            let brandA = a.brand.toUpperCase();
                            let brandB = b.brand.toUpperCase();

                            if (brandA < brandB) {
                                return -1;
                            }
                            if (brandA > brandB) {
                                return 1;
                            }
                        } else if (order === 'style') {
                            let styleA = a.style.toUpperCase();
                            let styleB = b.style.toUpperCase();

                            if (styleA < styleB) {
                                return -1;
                            }
                            if (styleA > styleB) {
                                return 1;
                            }
                        }
                    }) :
                        mockDatabase.sort(function (a,b) {
                            return a._id - b._id;

                        });

            /*
            var orderedArray = mockDatabase.sort(function(a,b) {

                if (order === 'brand') {
                    let brandA = a.brand.toUpperCase();
                    let brandB = b.brand.toUpperCase();

                    if (brandA < brandB) {
                        return -1;
                    }
                    if (brandA > brandB) {
                        return 1;
                    }
                } else if (order === 'style') {
                    let styleA = a.style.toUpperCase();
                    let styleB = b.style.toUpperCase();

                    if (styleA < styleB) {
                        return -1;
                    }
                    if (styleA > styleB) {
                        return 1;
                    }
                }else if(order === 'id'){
                    return a[order] - b[order];
                }

            });*/
            renderCards(orderedArray);

    }


    document.querySelector('#sort').addEventListener('change',function (event){
        orderBy(event.target.value);
    });





    function priceOrder(order){


        var priceSort = mockDatabase.sort(function(a,b){
            if (order === 'h2l'){
                return b.price - a.price;

            }else{
                return a.price - b.price;
            }
        });

        renderCards(priceSort);


    }


    document.querySelector('#priceFilter').addEventListener('change', function(event){

            priceOrder(event.target.value);

    });



})();





