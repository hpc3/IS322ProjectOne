

(function () {



    var mockDatabase =
        [
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



        function renderCards(results){
            var productList = document.querySelector('#testFill');


            productList.innerHTML = '';

            var filler = results.map(function(result,index){

                return '<div class="col-sm-4 mt-3 pt-3"><div class="card product-card " style="width: 18rem;"> <img class="card-img-top" src="..." alt="Card image cap"> <div class="card-body"> <h5 class="card-title">'
                            + index +
                            '</h5><p class="card-text">'
                            + result.description + ' ' + result.brand
                            '</p><a href="#" class="btn btn-primary"></a></div></div></div>';



            });

            filler.forEach(function(row){
                productList.innerHTML += row;
            })


        }

        renderCards(mockDatabase);



})();




