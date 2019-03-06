

(function () {



    var mockDatabase =
        [
            {_id : '', color : 'test', style : 'test', wireless: true, price: 'test', description: 'testyo', brand: ''},
            {_id : 'heretoo', color : 'test1', style : 'test1', wireless: true, price: 'test1', description: '', brand: ''},
            {_id : 'andHere', color : 'test2', style : 'test2', wireless: true, price: 'test2', description: '', brand: ''},
            {_id : 'yo', color : 'look its a color', style : 'it’s a style can you believe it', wired: 'false', price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber'},
            {_id : 'yo', color : 'look its a color', style : 'it’s a style can you believe it', wired: 'false', price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber'},
            {_id : 'yo', color : 'look its a color', style : 'it’s a style can you believe it', wired: 'false', price: '4 dollars', description: 'its a description', brand: 'Mr. Banana Grabber'},

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




