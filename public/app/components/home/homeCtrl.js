angular.module('myAppHomeCtrl', []).controller('homeCtrl', ['$scope', 'homeContent', function($scope, homeContent){

	// homeContent.getContent().then(function(response){
	// 	$scope.dataset = response;
	// });

	// homeContent.getHeader().then(function(response){
	// 	$scope.header = response;
	// });

	homeContent.getSubheader().then(function(response){
		$scope.subheading = response[0];
	});


	$scope.dataset = homeContent.getContent();
	$scope.header = homeContent.getHeader();
	//$scope.subheading = homeContent.getSubheader();
	//homeContent.getSubheader();

}]);