angular.module('myAppHomeCtrl', []).controller('homeCtrl', ['$scope', 'homeContent', function($scope, homeContent){

	// homeContent.getContent().then(function(response){
	// 	$scope.dataset = response;
	// });

	homeContent.getHeadings().then(function(response){
		$scope.header = response.data.mainheader;
		$scope.subheading = response.data.subheader;
	});

	$scope.dataset = homeContent.getContent();
	//$scope.header = homeContent.getHeader();
	//$scope.subheading = homeContent.getSubheader();
	//homeContent.getSubheader();

}]);