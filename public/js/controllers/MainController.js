app.controller('MainController', function (FlashCardsFactory, $scope) {

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.currentCategory = null;

    $scope.flashCards = [];

    $scope.loading;

    $scope.getCategoryCards = function (theCategory) {
        $scope.currentCategory = theCategory;
        $scope.loading = true;

        if (theCategory === null) {
            $scope.getAllCards();
        } else {
            FlashCardsFactory.getFlashCardsByCategory(theCategory).then(function (cards) {
                $scope.flashCards = cards;
                $scope.loading = false;
            });
        }
    };

    $scope.getAllCards = function () {
        $scope.currentCategory = null;
        $scope.loading = true;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
            $scope.loading = false;
        });
    };

    $scope.getAllCards();

});