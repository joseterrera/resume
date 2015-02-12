//JSON
// javascript object notation for storing and transferring nested and hierarchical data.

//BIO

var bio = {
  "name": "Josefina Terrera",
  "role": "Front-End Developer",
  "contacts": {
    "mobile": "239-464-1808",
    "email": "joseterrera@yahoo.com",
    "github": "joseterrera",
    "twitter":"@joseterrera", 
    "location": "Chicago"
  },
  "skills": ["<br>","HTML","CSS", "Saas", "JavaScript","JQuery","JSON", "Github", "<br>"], 
  "image": "images/me.jpg",
  "welcomeMessage": "<br><br><br>I'm a self-taught programmer, currently living in Chicago and looking for new opportunities in Front-End Web Development. When I'm not coding, I'm often either walking around, reading some book, or goofing around with a guitar.<br><br>"
};


//Education Section
var education = {
    "schools" : [
    {
        "name" : "Florida Gulf Coast University",
        "location" : "Fort Myers, Florida",
        "degree" : "Bachelor's Degree in Legal Studies",
        "dates" : "Aug. 2008 - July 2009",
        "description" : "Graduated summa cum laude(Dean's List) 3.92 GPA."
    },
    {
        "name" : "Edison State College",
        "location" : "Fort Myers, Florida",
        "degree" : "Associate's Degree in, Major Business",
        "dates" : "July 2006 - May 2008",
        "description" : ["Graduated with high honors(Dean's List) 4.0 GPA", "Member of Phi Theta Kappa Honor Society"]
    },
    {
    "name" : "University of Buenos Aires",
    "degree": "Bachelor in Law",
        "location" : "Buenos Aires, Argentina",
        "dates" : "March 2001 - Dec. 2004",
        "description": "Three full years of legal coursework."
    }


  ],
    "onlineCourses" : [
    {
        "title" : "JavaScript Coursework",
        "school" : "Treehouse",
        "dates" : "2014",
        "website" : "http://teamtreehouse.com/library/topic:learn-javascript"
    },
    {
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2014-2015",
        "website" : "https://www.udacity.com/course/nd001"
    },
    {
    "title" : "Saas, Css, JavaScript",
        "school" : "Code School",
        "dates" : "2014-2015",
        "website" : "https://www.codeschool.com/"
      }
  ]
}

//WORK

var work = {
  "jobs": [
  {
  "title": "Paralegal, Translator",
  "employer": "Law Office of Susan Shatz, William P. Murphy, Julie B. Aimen, et. al",
  "dates": "July 2010 - Present",
  "location": "Chicago, IL",
  "description": [ "Rendered legal interpretations in criminal, civil, employment, discrimination and immigration matters.",
"Translated legal and medical documents.",
"Assisted 14 private practitioners with discovery and research.",
"Carried out a wide variety of procedural filings on a daily basis."]

},
{
  "title": "Researcher, Editor, Translator",
  "employer": "Marine Sciences for Society",
  "dates": "June 2005 - Present",
  "location" : "Brest, France",
  "description": [ "Organized different projects, both virtually and onsite.",
"Translated documents and presentations."]
},

{
  "title": "Intern, Legal Assistant",
  "employer": "Sterling Bay Companies",
  "dates": "April 2010 = August 2010",
  "location": "Chicago, IL",
  "description": [ "Assisted the legal department with filings and closings."]
}

]
}


//PROJECTS
var projects = {
  "projects": [
  {
    "title": "Clarisimo, a restaurant and catering business in Buenos Aires",
    "dates": "2014",
    "description": "Design, HTML/CSS/JavaScript", 
    "link": " http://clarisimocatering.com/",
    "images":"images/clarisimo.png"
  },
  {
  "title": "Mock Website for an attorney who wanted a basic site",
  "dates": "2014",
  "description": "Design, HTML/CSS",
   "link" : "http://joseterrera.github.io/Law/index.html",
   "images": "images/lawyerSite.png"
}

  ]
};



//Display bio 
bio.display = function(){

  //var for formatted name and role
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  //display 
  $("#header").prepend(formattedName + formattedRole);

  //var for contact info

  var contacts = bio["contacts"];

  var formattedMobile = HTMLmobile.replace("%data%", contacts["mobile"]);
  var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
  var formattedGithub = HTMLgithub.replace("%data%",contacts["github"]);
  var formattedLocation = HTMLlocation.replace("%data%",contacts["location"]);
  var cont = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
  $(cont).appendTo("#topContacts, #footerContacts");

  //image and message

  var formattedImage = HTMLbioPic.replace("%data%", bio["image"]);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);

  $("#header").append(formattedImage + formattedMessage);


  //display skills

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";
    for (var i = 0; i < bio.skills.length; i++){
      formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    };
  };
};

work.display = function(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var j = work.jobs[job];
    var formattedTitle = HTMLworkTitle.replace("%data%", j["title"]);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", j["employer"]);
    var formattedDates = HTMLworkDates.replace("%data%", j["dates"]);
    var formattedLocation = HTMLworkLocation.replace("%data%", j["location"]);
    var formattedDescription = HTMLworkDescription.replace("%data%", j["description"]);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);

  }

};


education.display = function(){
  for(school in education["schools"]) {
    $("#education").append(HTMLschoolStart);
    var educ = education["schools"][school];
    var educName = HTMLschoolName.replace("%data%", educ["name"]);
    var educDegree = HTMLschoolDegree.replace("%data%", educ["degree"]);
    var educDates = HTMLschoolDates.replace("%data%", educ["dates"]);
    var educLocation = HTMLschoolLocation.replace("%data%", educ["location"]);
    var educDescription = HTMLschoolDescription.replace("%data%", educ["description"]);
$(".education-entry:last").append(educName + educDegree + educDates + educLocation + educDescription);

  }



if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

var onlineEduc = education.onlineCourses[course];

        var onlineTitle = HTMLonlineTitle.replace("%data%", onlineEduc["title"]);
        var onlineName = HTMLonlineSchool.replace("%data%", onlineEduc["school"]);
        var onlineDates = HTMLonlineDates.replace("%data%", onlineEduc["dates"]);
        var onlineURL = HTMLonlineURL.replace("%data%", onlineEduc["website"]);
       
    $(".education-entry:last").append(onlineTitle + onlineName + onlineDates + onlineURL);

  } 
}
};

//Projects

projects.display = function(){
 // var proj = projects.projects[project];
  
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var displayTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(displayTitle);
    var displayDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(displayDates);
    var displayDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(displayDescription);
    

    if(projects.projects[project].images.length > 0) {
      var displayImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
      $(".project-entry:last").append(displayImage);
    }
  }
}












bio.display();
work.display();
education.display(); 
projects.display();

// log clicks
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//locationizer

function locationizer(work_obj) {
  locationArray = [];
  for(job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}

console.log(locationizer(work));

//internationalize

function inName (name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];

}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

