'use strict';

var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

  // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    // What do when the request is successfull
    var eventsFromAPI = JSON.parse(xhr.response).events;
    renderHTML(eventsFromAPI);
  } else {
    // What do when the request fails
    console.log('The request failed!');
  }

  // Code that should run regardless of the request status
  // console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://www.eventbriteapi.com/v3/organizations/279297880702/events/?status=live');
xhr.setRequestHeader('Authorization', 'Bearer 77KACN6YZ5KRLPE6NCPF');
xhr.send();


function renderHTML(events) {
  console.log('EVENTS', events);
  events.forEach(event => eventTemplate(event));
}

function eventTemplate(event) {
  let div = document.getElementById('event-list');

  // let article = document.createElement('article');

  let h3 = document.createElement('h3');
  h3.innerText = event.name.text;

  div.append(h3);
}
