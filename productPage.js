


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

    var r=Math.floor((Math.random()*12)+1);

    function renderProductTitle(results){
        var productPage = document.querySelector('#productTitle h3#product');
                var filler = results.map(function(result){
            return results[r].model + results[r].photo + '<img src=' +results[r].photo + '/>' ;
        });
        productPage.innerHTML = mockDatabase[r].model +  '<img src=' +results[r].photo + '/>' ;


    }
    function renderProductDescription(results){
        var productPage = document.querySelector('#productDescription div#description');
        var filler = results.map(function(result){
            return results[r].style + results[r].description + '<h1> the price is' + results[r].price + '</h1>';
        });
        productPage.innerHTML = mockDatabase[r].description + '<h1> the price is $' + results[r].price + '</h1>';
    }


    renderProductTitle(mockDatabase);
    renderProductDescription(mockDatabase);
})();





