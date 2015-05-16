var projectsBar = document.getElementById('projects-bar').innerHTML;
var projectsTab = document.getElementById('projects');

if (projectsTab.mouseover)
{
	projectsBar.setAttribute('id', 'projects-bar-show');   
}