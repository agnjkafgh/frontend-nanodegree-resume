var bio = {
	"name": "Ashvin Panicker",
	"age": 22,
	"skills": ["Programmer", "Guitarist", "Audio Producer", "Pro Gamer"],
	"contact":{
		"mobile": "+91 9448094531",
		"email": "ashvin@dsquaresolutions.com",
		"github": "agnjkafgh",
		"facebook": "ashvin.panicker",
		"location": "Bangalore"
	},
	"photo": "images/ashvin.jpg"
};

var education = {
	"schools": [
	{
		"name": "Sishu Griha",
		"degree": "Primary School",
		"years": "1998-2004",
		"location": "Thippasandra",
		"city": "Bangalore",
		"majors": "Kindergarten - 3rd Grade",
		"url": "http://www.sishugriha.in/"
	},
	{
		"name": "National Public School",
		"degree": "Secondary School",
		"years": "2004-2008",
		"location": "Koramangala",
		"city": "Bangalore",
		"majors": "4th Grade - 8th Grade",
		"url": "http://http://www.npskrm.com/"
	},
	{
		"name": "The Lawrence School",
		"degree": "Pre University",
		"years": "2008-2012",
		"location": "Lovedale, Ooty",
		"city": "Ooty",
		"majors": "8th Grade - 12th Grade(Science)",
		"url": "http://www.thelawrenceschool.org/"
	},
	{
		"name": "Vellore Institute of Technology",
		"location": "Vellore",
		"degree": "Bachelor of Engineering",
		"majors": ["Computer Science"],
		"years": "2012-2016",
		"url": "http://vit.ac.in"
	}
	],
	"onlineCourses": [
	{
		"title": "HTML, CSS Bootstrap",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]
};

var work = {
	"jobs": [
	{
	"title": "Intern",
	"employer": "Dsquare Solutions",
	"dates": "August 2016 - Present",
	"description": "Revison of basic Web design: HTML5, CSS, Bootstrap with Java as backend. Working in the data analytics field.",
	"url": "http://smarterfaster.biz",
	"location": "Doddanekundi, Bangalore"
	},
	{
	"title": "Intern",
	"employer": "Celtycs",
	"dates": "December 2014 - January 2015",
	"description": "Learnt basic Web design: HTML, CSS, Bootstrap, PHP.<br>Worked with asterisk to generate tables populated with call centre data.",
	"url": "http://celtycs.com",
	"location": "Victoria Layout, Bangalore"
	}]
};

var projects = {
	"projects": [
	{
		"name": "Machine Learning Predictions Project",
		"description": "A Novel Unified Diagnostics Model for Predicting Risk Levels in Coronary Heart Disease Using Machine Learning Methods",
		"dates": 2016,
		"url": "https://drive.google.com/open?id=0B3E2TCh8OcdGSW1ubjhQVWZ1Z3Bka29OM1VIUWx2RGlJR1Iw",
		"images": ["images/flowchart.png", "images/graph.png"]
	},
	{
		"name": "Sample Project",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"dates": 2016,
		"url": "https://en.wikipedia.org/wiki/Lorem_ipsum",
		"images": ["http://cdn8.openculture.com/wp-content/uploads/2015/03/17231820/Lorem-Ipsum.jpg", "http://blog.dominictrumfio.com/wp-content/uploads/2015/08/Lorem-Ipsum-2.jpg"]
		
	}
	]
};

bio.display = function(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", work.jobs[work.jobs.length-1].title);

$("#header").prepend(formattedRole).prepend(formattedName);
var ProfilePic = HTMLbioPic.replace("%data%", bio.photo);
$("#header").prepend(ProfilePic);

$("#header").append(HTMLskillsStart);
var i = 0;
while(i<bio.skills.length)							//while loop practice
{
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#header").append(formattedSkill);
	i+=1;
}

var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedFB = HTMLfacebook.replace("%data%",bio.contact.facebook);
$("#footerContacts").append(formattedMobile,formattedEmail,formattedFB);
}


work.display = function(){
for(job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%link%", work.jobs[job].url);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDesc);
}
}

projects.display = function() {
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
	
		var formattedProjectTitle = HTMLprojectTitle.replace(/%data%/g, projects.projects[project].name).replace(/%link%/g, projects.projects[project].url);
		$(".project-entry:last").append(formattedProjectTitle);	
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		if(projects.projects[project].images.length > 0 ){
			for(image in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}	
	}
}

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("%link%",education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].years);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").prepend(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLonlineClasses);
	for(course in education.onlineCourses){
	
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace(/%link%/g, education.onlineCourses[course].url);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
	
	$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates);
	}
};



bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);


/* Udacity Quiz Stuff

$(document).click(function(loc) {
 logClicks(loc.pageX, loc.pageY);
 
});

$("#main").append(internationalizeButton);

function inName(name)
{
	var nameArr = name.split(' ');
	var fName = nameArr[0].toLowerCase();
	fName = fName[0].toUpperCase() + fName.slice(1);
	var lName = nameArr[1].toUpperCase();
	var intFullName = fName + " " + lName;
	return (intFullName);
}

inName(bio.name);
*/

