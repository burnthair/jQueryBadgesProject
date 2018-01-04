$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/melyons.json',
    dataType: 'jsonp',
    success: function(response) {
      var badgeArr = response.courses.completed;
      addCourses(badgeArr);
    }
  });

  function addCourses(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        $('#badges').append('<div class="course">' +
          '<h3>' + arr[i].title + '</h3>' +
          '<img src="' + arr[i].badge + '"/>' +
          '<a href="' + arr[i].url + '" target="_blank" class="btn btn-primary">See Course</a>' +
          '</div>');
      }
  }

});
