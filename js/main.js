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
var elAnnouncementTemplate = $_('.announcement-template');