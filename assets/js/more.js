//More page - dropdown sections
var liItems = document.querySelectorAll('#toggle-menus')
var listGroupToggler = document.querySelector('.list-group-toggler')
for(let i =0;i<liItems.length;i++){

  liItems[i].addEventListener('click',()=>{
    if ( liItems[i].nextElementSibling.tagName=='DIV' && liItems[i].nextElementSibling.classList.value != 'show-toggle') {
      hideToggleAll()
      return;
    }
    hideToggleAll()
    if (liItems[i].nextElementSibling.tagName=='DIV' && liItems[i].nextElementSibling.classList.value == 'show-toggle') {
      liItems[i].nextElementSibling.classList.remove("show-toggle")
    }
  })
}

function hideToggleAll(){
  for(let i =0;i<listGroupToggler.children.length;i++){
    if (listGroupToggler.children[i].tagName=='DIV') {
      listGroupToggler.children[i].classList.add("show-toggle")
    }
  }
}
hideToggleAll()



function submitProfileSetting() {
  let form = $('#useraccount-profile-form');
  let data = form.serializeArray();
  var uncheckedFeatures = $('input[type=checkbox]:not(:checked)').map(function(){return {"name": this.name, "value": "unchecked"}}).get();
  $.each(uncheckedFeatures, function(i, f) { data.push(f) })
  var formatedData = {}
  var features =['moon_phase', 'weather', 'personalised_suggestions', 'motivational_quotes']
  var featuresData = {}
  $.each(data, function(index, item) {
    if(features.includes(item["name"])) {
      featuresData[item["name"]] = item["value"] == 'on' ? 'checked' : 'unchecked'
    } else {
      formatedData[item["name"]] = item["value"]
    }
  })
  formatedData["features"] = featuresData;
  // formatedData["location_permitions"] = 'Enabled' //because it is a button with disabled attribute

  $.ajax({
        url:'',
        type: 'GET',
        data: {'settings_array': JSON.stringify(formatedData)},
        success: function(response){
                  window.location = '#';
                  console.log('ok')
                }
      });

  console.log(formatedData)
  localStorage.setItem('data', JSON.stringify(formatedData))
}

function submitReminder() {
  let form = $('#redminder-settings');
  let data = form.serializeArray();
  let formatedData = {}
  $.each(data, function(i, item) {
    formatedData[item["name"]] = item["value"]
  })
  if(!formatedData["notification"]) formatedData["notification"] = "off"
  console.log(formatedData)
}
