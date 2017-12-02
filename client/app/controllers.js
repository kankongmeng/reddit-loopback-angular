function RedditController($scope, $http) {
  // Initializate variable
  $scope.posts = [];
  
  // Function to get all posts
  $scope.getAllPosts = function getAllPosts() {
    // Host come from utility.js
    var url = host+'/api/Posts?access_token=aGNF04XBPW8pbBS31WUb23Gu5B8FqHeTjCZ6Q06mur1RYUddK4eTT5i4Niqiefem';
 
    $http({
      method: 'GET',
      url: url
    }).then(function successCallback(response) {
        $scope.posts = response.data;
      }, function errorCallback(error) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };

  // Get all posts into scope
  $scope.getAllPosts();

  // Don't show the newPostForm initially:
  $scope.showNewPostForm = false;

  // Toggle form as needed:
  $scope.toggleNewPostForm = function toggleNewPostForm() {
    if ($scope.showNewPostForm) {
      $scope.showNewPostForm = false;
    } else {
      $scope.showNewPostForm = true;
    }
  };

  // Add points
  $scope.addPoints = function addPoints(post) {
    post.points += 1;
  };
  
  // Minus points
  $scope.minusPoints = function minusPoints(post) {
    post.points -= 1;
  };

  $scope.createNewPost = function createNewPost() {
    // Create const newPost
    const newPost = {};
    newPost.title = $scope.newPostForm.title;
    newPost.author = $scope.newPostForm.author;
    newPost.imageURL = $scope.newPostForm.imageURL;
    newPost.topic = $scope.newPostForm.topic;
    newPost.timestamp = new Date();
    newPost.points = 0;
    
    // Host come from utility.js
    // Create the new post:
    var url = host+"/api/Posts?access_token=aGNF04XBPW8pbBS31WUb23Gu5B8FqHeTjCZ6Q06mur1RYUddK4eTT5i4Niqiefem";
      
    $http.post(url, newPost)
      .success(function (response) {
        // Update posts
        $scope.getAllPosts();
        
        // Reset the form:
        $scope.newPostForm.title = '';
        $scope.newPostForm.author = '';
        $scope.newPostForm.imageURL = '';
        $scope.newPostForm.topic = '';
        $scope.showNewPostForm = false;
      
        // Reset maxlength JQuery
        $(document).ready(function() {
          $("span").remove();
          $('input[maxlength]').maxlength();
        });
        
        // Show add post success message
        alert("Congratz, you added a post with title ("+response.title+")");
      })
      .error(function (error) {
      });
  };

  $scope.sortBy = '-points';
}
