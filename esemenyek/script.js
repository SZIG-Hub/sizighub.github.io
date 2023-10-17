import json from '../events.json' assert {type: 'json'};

let divContainer = document.getElementById('div-container');

var events = Object.keys(json)

events.forEach(event => {
  const eventDiv = document.createElement('div');
  eventDiv.className = 'block';

  const spanContainer = document.createElement('div');
  spanContainer.className = 'inner';

  const linkRow = document.createElement('a')
  linkRow.className = 'eventLink'
  linkRow.href = json[event].link

  const nameSpan = document.createElement('span');
  nameSpan.className = 'eventName';
  nameSpan.textContent = json[event].name

  const dateSpan = document.createElement('span');
  dateSpan.className = 'eventDate';
  dateSpan.textContent = json[event].date

  const placeSpan = document.createElement('span');
  placeSpan.className = 'eventPlace';
  placeSpan.textContent = json[event].place

  eventDiv.appendChild(linkRow);
  linkRow.appendChild(nameSpan)
  spanContainer.appendChild(dateSpan)
  spanContainer.appendChild(placeSpan)

  divContainer.appendChild(eventDiv);
  eventDiv.appendChild(spanContainer)

  var details = json[event].details
  for (let d = 1; d <= 10; d++) {
    if (details[d]) {
      const detailsSpan = document.createElement('span');
      detailsSpan.className = 'eventDetail';
      detailsSpan.textContent = details[d]

      spanContainer.appendChild(detailsSpan)
    }
  }
})
