$(document).ready(function() {
    $('#cssmenu #projects').addClass('active');
    $('#cssmenu #projects a').removeAttr('href');

})

function load_project(project_id) {
    $.get('./get_project/' + project_id, function (data) {
       $('#project-space').slideToggle().html(data).slideToggle();
    });
}