app.controller('NewCardController', function ($scope, ScoreFactory, FlashCardsFactory) {
  $scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
  };

  $scope.sendNewCard = function(card, category) {
    FlashCardsFactory.sendNewCard(card);
    $scope.reset(category);
  };

  $scope.reset = function(category) {
    $scope.newCard = {
      question: null,
      category: null,
      answers: [
          { text: null, correct: false },
          { text: null, correct: false },
          { text: null, correct: false }
      ]
    };

    FlashCardsFactory.getFlashCardsByCategory(category);
  };

});