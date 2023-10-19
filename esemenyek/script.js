fetch('https://api.jsonbin.io/v3/b/65313b8f54105e766fc45c7c')
  .then((response) => response.json())
  .then((json) => {

    let divContainer = document.getElementById('div-container');

    var events = Object.keys(json.record)

    events.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.className = 'block';

      const spanContainer = document.createElement('div');
      spanContainer.className = 'inner';

      const linkRow = document.createElement('a')
      linkRow.className = 'eventLink'
      linkRow.href = json.record[event].link

      const nameSpan = document.createElement('span');
      nameSpan.className = 'eventName';
      nameSpan.textContent = json.record[event].name

      const dateSpan = document.createElement('span');
      dateSpan.className = 'eventDate';
      dateSpan.textContent = json.record[event].date

      const placeSpan = document.createElement('span');
      placeSpan.className = 'eventPlace';
      placeSpan.textContent = json.record[event].place

      eventDiv.appendChild(linkRow);
      linkRow.appendChild(nameSpan)
      spanContainer.appendChild(dateSpan)
      spanContainer.appendChild(placeSpan)

      divContainer.appendChild(eventDiv);
      eventDiv.appendChild(spanContainer)

      var details = json.record[event].details
      for (let d = 1; d <= 10; d++) {
        if (details[d]) {
          const detailsSpan = document.createElement('span');
          detailsSpan.className = 'eventDetail';
          detailsSpan.textContent = details[d]

          spanContainer.appendChild(detailsSpan)
        }
      }
    })
  })
