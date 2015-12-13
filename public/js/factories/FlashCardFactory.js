app.factory('FlashCardsFactory', function ($http) {

    var FlashCardsFactory = {
        getFlashCards: function () {
            return $http.get('/cards').then(function (response) {
                return response.data;
            });
        },
        getFlashCardsByCategory: function (category) {
            if (category === null) {
                FlashCardsFactory.getFlashCards();
            } else {
                var configObj = {
                    params: {
                        category: category
                    }
                };

                return $http.get('/cards', configObj).then(function (response) {
                    return response.data;
                });
            }
        },
        sendNewCard: function(card) {
            return $http.post('/cards', card)
            .then(function(response) {
                console.log(response.data);
                return response.data;
            })
        }
    };

    return FlashCardsFactory;

});