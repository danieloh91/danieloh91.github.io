$(document).ready(function() {
  $('.parallax').parallax();

  $('.homeroom').on('click', function(){
    toggleSelections();
    this.classList.add('selected');
    $('#projectPic').html('<img src="assets/homeroompic.png" class="demo" />');
    $('#projectTitle').html('<h4>Munilol</h4>');
    $('#projectLinks').html('<h5><a href="https://homeroom-app.herokuapp.com" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i> Site</a>  | <a href="https://github.com/danieloh91/homeroom" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a></h5>');
    $('#projectDesc').html('HomeRoom is an app that allows instructors to broadcast assignment updates to their students while students are able see a chronological feed of all the broadcasts made by the different instructors that they\'re able to follow. Creating this application was a challenging yet fun experience, learning about self-referential polymorphic associations and how to create the chronological feeds. Developing this portfolio piece made me a more resourceful and knowledgeable developer on the front and back end.');
    $('#projectTech').html('<p>HTML5 / CSS3 / Javascript / Bootstrap / jQuery / Ruby on Rails / Postgresql / RESTful APIs / HasFriendship / BCrypt / Heroku</p>');
  });

  $('.munilol').on('click', function(){
    toggleSelections();
    this.classList.add('selected');
    $('#projectPic').html('<img src="assets/munilol.png" class="demo" />');
    $('#projectTitle').html('<h4>Munilol</h4>');
    $('#projectLinks').html('<h5><a href="https://munilol.herokuapp.com" target="_blank"><i class="fa fa-laptop" aria-hidden="true"></i> Site</a>  | <a href="https://github.com/billhimmelsbach/munilol" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a></h5>');
    $('#projectDesc').html('Munilol is a web application with a mobile interface that allows for muni riders to document and share their daily muni experiences with other users. It also taps into the 511 API to notify users if there are disturbances on the muni lines. This was my first Ruby on Rails application developed alongside my classmates Bill Himmelsbach and David Kim. Through this project, I had extensive experiences of pair programming, reviewing one another\'s code, and utilizing a greater extent of Git as a version control tool.');
    $('#projectTech').html('<p>HTML5 / CSS3 / Javascript / Bootstrap / jQuery / Ruby on Rails / Postgresql / RESTful APIs / UploadCare / BCrypt / FFaker / Heroku</p>');
  });

  function toggleSelections() {
    var allProjects = document.getElementsByClassName('toggleproject');
    for (var i=0; i<allProjects.length; i++) {
      allProjects[i].classList.remove('selected');
    }
  }

});
