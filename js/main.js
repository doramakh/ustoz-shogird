var $_ = (selector, node = document) => {
  return node.querySelector(selector);
};

var $$_ = (selector, node = document) => {
  return node.querySelectorAll(selector);
};

var createElement = (element, elementClass, text) => {
  var newElement = document.createElement(element);
  
  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  };
  
  if (text) {
    newElement.textContent = text;
  };
};

var elNewAnnouncementBtn = $_('.new-announcement-btn');
var elAnnouncementForm = $_('.announcement-form');
if (elAnnouncementForm) {
  var elCloseBtn = $_('.close-btn', elAnnouncementForm);
  var elTitleInput = $_('.title-input', elAnnouncementForm);
  var elCompanyInput = $_('.company-input', elAnnouncementForm);
  var elTechInput = $_('.tech-input', elAnnouncementForm);
  var elTelegramInput = $_('.telegram-input', elAnnouncementForm);
  var elPhoneNumberInput = $_('.phone-number-input', elAnnouncementForm);
  var elNameInput = $_('.name-input', elAnnouncementForm);
  var elLocationSelect = $_('.location-select', elAnnouncementForm);
  var elWorktimeSelect = $_('.worktime-select', elAnnouncementForm);
  var elSalaryInput = $_('.salary-input', elAnnouncementForm);
  var elInfoTextarea = $_('.info-textarea', elAnnouncementForm);
};
var elAnnouncementList = $_('.announcement-list');
var elAnnouncementTemplate = $_('.announcement-template').content;

elNewAnnouncementBtn.addEventListener('click', () => {
  elAnnouncementForm.classList.add('announcement-form--open')
});

elCloseBtn.addEventListener('click', () => {
  elAnnouncementForm.classList.remove('announcement-form--open')
});

locations = ['Tashkent', 'Samarqand', 'Namangan', 'Bukhara', 'Andijan', 'Fergana', 'Surkhandarya', 'Khashkhadarya'];

worktimes = ['8am-6pm', '8am-2pm', '2pm-10pm', '2pm-6pm'];

var elLocationFragment = document.createDocumentFragment();

locations.forEach(location => {
  var locationOption = document.createElement('option');
  locationOption.textContent = location;
  locationOption.value = location;
  
  elLocationFragment.appendChild(locationOption);
});

elLocationSelect.appendChild(elLocationFragment);

var elWorktimeFragment = document.createDocumentFragment();

worktimes.forEach(worktime => {
  var worktimeOption = document.createElement('option');
  worktimeOption.textContent = worktime;
  worktimeOption.value = worktime;
  
  elWorktimeFragment.appendChild(worktimeOption);
});

elWorktimeSelect.appendChild(elWorktimeFragment);

// ADDING NEW ANNOUNCEMENTS

var addCard = array => {
  elAnnouncementList.innerHTML = '';
  elAnnouncementFragment = document.createDocumentFragment(); 

  array.forEach(announcement => {
     var elAnnouncement = elAnnouncementTemplate.cloneNode(true);
    
    elAnnouncement.querySelector('.announcement-title').textContent = announcement.title;
    
    var elTechnologiesFragment = document.createDocumentFragment();
    
    var technologies = [];
    for (var announcement of announcements) {
      for (var technology of announcement.technologies) {
        technologies.push(technology);
      };
    };
    technologies.forEach(item => {
      var technologyItem = document.createElement('li');
      technologyItem.textContent = item;
      
      elTechnologiesFragment.appendChild(technologyItem)
    });
    
    elAnnouncement.querySelector('.announcement-technologies').appendChild(elTechnologiesFragment);
    
    elAnnouncement.querySelector('.announcement-phone-link').textContent = announcement.phoneNumber;
    elAnnouncement.querySelector('.announcement-location').textContent = announcement.location;
    elAnnouncement.querySelector('.announcement-worktime').textContent = announcement.worktime;
    
    elAnnouncementFragment.appendChild(elAnnouncement);
  });

  elAnnouncementList.appendChild(elAnnouncementFragment)
};

var announcements =  JSON.parse(localStorage.getItem('savedAns')) || [];
addCard(announcements);

elAnnouncementForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  var title = elTitleInput.value;
  var company = elCompanyInput.value;
  var technology = elTechInput.value.split(',');
  var telegram = elTelegramInput.value;
  var phoneNumber = elPhoneNumberInput.value;
  var name = elNameInput.value;
  var location = elLocationSelect.value;
  var worktime = elWorktimeSelect.value;
  var salary = elSalaryInput.value;
  var info = elInfoTextarea.value;
  
  announcements.push({
    title: title,
    company: company,
    technologies: technology,
    telegram: telegram, 
    phoneNumber: phoneNumber, 
    name: name,
    location: location,
    worktime: worktime, 
    salary: salary,
    info: info 
  });

  elAnnouncementForm.reset();
  localStorage.setItem('savedAns', JSON.stringify(announcements));

  addCard(announcements);
});

