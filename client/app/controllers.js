function RedditController($scope, Post) {
  $scope.posts = [];
  
  // Function to get all posts
  $scope.getAllPosts = function getAllPosts() {
    Post
      .find()
      .$promise
      .then(function(posts) {
        $scope.posts = posts;
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
    
    // Create the new post:
    Post
      .create(newPost)
      .$promise
      .then(function() {
        // Update posts
        $scope.getAllPosts();
        
        // Reset the form:
        $scope.newPostForm.title = '';
        $scope.newPostForm.author = '';
        $scope.newPostForm.imageURL = '';
        $scope.newPostForm.topic = '';
        $scope.showNewPostForm = false;
      
        $(document).ready(function() {
          $("span").remove();
          $('input[maxlength]').maxlength();
        });
      });
  };

  $scope.sortBy = '-points';
}
