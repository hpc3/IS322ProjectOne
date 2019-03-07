

//To do
// Filter :^(
// fill mockDB with jazz
//style cards

(function () {



    var mockDatabase =
        [

            {_id : 'Greg\'s super phones', color : 'black', style : 'test', bluetooth: true, price: 'test', description: 'testyo', brand: '', photo: 'media/headphone-image-1.jpg'},
            {_id : 'Beat By Beats By Dre', color : 'white', style : 'test1', bluetooth: true, price: 'test1', description: '', brand: '' , photo: 'media/headphone-image-2.jpg'},
            {_id : 'Two Tin Cans', color : 'red', style : 'test2', bluetooth: true, price: 'test2', description: '', brand: '', photo: 'media/headphone-image-3.jpg'},
            {_id : 'Beats by Beat by Beats by Dre', color : 'look its a color', style : 'it’s a style can you believe it', bluetooth: false, price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber' , photo: 'media/headphone-image-4.jpg'},
            {_id : 'Prograde BlackHawks', color : 'look its a color', style : 'it’s a style can you believe it', bluetooth: false, price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber' , photo: 'media/headphone-image-5.jpg'},
            {_id : 'Bose', color : 'look its a color', style : 'it’s a style can you believe it', bluetooth: false, price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber' , photo: 'media/headphone-image-6.jpg'},

            {_id : 'Real Men Wear Pink', color : 'test', style : 'test', bluetooth: true, price: 'test', description: 'testyo', brand: '' , photo: 'media/headphone-image-7.jpg'},
            {_id : 'Industrial Soundphones', color : 'test1', style : 'test1', bluetooth: true, price: 'test1', description: '', brand: '' , photo: 'media/headphone-image-8.jpg'},
            {_id : 'Two Raspberry\'s', color : 'test2', style : 'test2', bluetooth: true, price: 'test2', description: '', brand: '' , photo: 'media/headphone-image-9.jpg'},
            {_id : 'X-Sounds 5000', color : 'look its a color', style : 'it’s a style can you believe it', bluetooth: false, price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber' , photo: 'media/headphone-image-10.jpg'},
            {_id : '*Joke About Camo*', color : 'look its a color', style : 'it’s a style can you believe it', bluetooth: false, price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber' , photo: 'media/headphone-image-11.jpg'},
            {_id : 'Mega Stealth Earmuffs', color : 'look its a color', style : 'it’s a style can you believe it', bluetooth: false, price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber' , photo: 'media/headphone-image-12.jpg'}
            {_id : 'MDRXMIII', color : 'Black', style : 'Around the Ear', wireless: true, price: '$350', description: 'Awesome Noise Cancelling headphones', brand: 'Sony'},
            {_id : 'MDRXMIII', color : 'Gold', style : 'Around the Ear', wireless: true, price: '$350', description: 'Awesome Noise Cancelling headphones', brand: 'Sony'},
            {_id : 'Comfort Quiet 35', color : 'Black', style : 'Around the Ear', wireless: true, price: '$350', description: 'Awesome Noise Cancelling headphones', brand: 'Bose'},
            {_id : 'Comfort Quiet 35', color : 'Silver', style : 'Around the Ear', wireless: true, price: '$350', description: 'Awesome Noise Cancelling headphones', brand: 'Bose'},
            {_id : 'Comfort Quiet 35', color : 'Blue', style : 'Around the Ear', wireless: true, price: '$350', description: 'Awesome Noise Cancelling headphones', brand: 'Bose'},
            {_id : 'Solo3', color : 'Black', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats'},
            {_id : 'Solo3', color : 'Matte Black', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats'},
            {_id : 'Solo3', color : 'Silver', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats'},
            {_id : 'Solo3', color : 'Gold', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats'},
            {_id : 'Solo3', color : 'Rose Gold', style : 'Over the Ear', wireless: false, price:'300', description: 'Awesome Wireless headphones headphones', brand: 'Beats'},
        ];

    //Css '...'

        function renderCards(results){
            var productList = document.querySelector('#testFill');


            productList.innerHTML = '';

            var filler = results.map(function(result){

                return '<div class="col-sm-4 mt-3 pt-3 mb-4 pl-5"><div class="card product-card" style="width: 18rem;"> <img class="card-img-top p-2" src="' + result.photo + '" alt="Card image cap"> <div class="card-body"> <h5 class="card-title pl-4">'
                            + result._id +
                            '</h5>' +
                            '<ul><li>Color: ' + result.color + '</li><li>' + result.description + ' </ul>' +
                             '<a href="#" class="btn btn-primary">More Info</a></div></div></div>';



            });

            filler.forEach(function(row){
                productList.innerHTML += row;
            })


        }

        renderCards(mockDatabase);


    function toggleBluetooth(connection) {
        // If showPublished is TRUE, only display published results
        // Filter will only inclue objects that return TRUE from it's query
        var filteredResults = mockDatabase.filter(function (result) {
            // If showPublished is TRUE, always show.
            // Otherweise only show if published is TRUE
            return connection || results.bluetooth;
        });
        renderCards(filteredResults);
    }
    // Change events trigger after the value of a form input changes
    document.querySelector('#connectionFilter').addEventListener('change', function(event){
        // in this case value is a string that we need to convert to a boolean
        var value = event.target.value === 'false';
        toggleBluetooth(value);
    });



})();




