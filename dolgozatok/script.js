fetch('https://api.jsonbin.io/v3/b/65313b1f54105e766fc45c50')
  .then((response) => response.json())
  .then((json) => {

    fetch('https://api.jsonbin.io/v3/b/65313b5454105e766fc45c63')
      .then((response) => response.json())
      .then((examinations) => {

        var days = Object.keys(json.record)
        var exams = Object.keys(examinations.record)

        exams.forEach((exam) => {
          for (var x = 1; x <= 7; x++) {
            for (var y = 1; y <= 4; y++) {
              if (examinations.record[exam][x]) {

                if (examinations.record[exam][x][y]) {

                  var dateArray = exam.toString().split(" ")
                  var dayText = dateArray[0]
                  var z = ""

                  switch (dayText) {
                    case "Mon":
                      z = "a"
                      break;
                    case "Tue":
                      z = "b"
                      break;
                    case "Wed":
                      z = "c"
                      break;
                    case "Thu":
                      z = "d"
                      break;
                    case "Fri":
                      z = "e"
                      break;
                  }

                  if (z === "") return

                  var data = {
                    a: `${z}${x}`,
                    b: `${y}`
                  }

                  days.forEach((day) => {
                    if (json.record[day][data.a]) {
                      if (json.record[day][data.a].subjects[data.b]) {
                        var dateArray = exam.toString().split(" ")
                        var dayText = dateArray[0]
                        var monthText = dateArray[1]
                        var dateText = dateArray[2]
                        var yearText = dateArray[3]

                        switch (dayText) {
                          case "Mon":
                            dayText = "Hétfő"
                            break;
                          case "Tue":
                            dayText = "Kedd"
                            break;
                          case "Wed":
                            dayText = "Szerda"
                            break;
                          case "Thu":
                            dayText = "Csütörtök"
                            break;
                          case "Fri":
                            dayText = "Péntek"
                            break;
                          case "Sat":
                            dayText = "Szombat"
                            break;
                          case "Sun":
                            dayText = "Vasárnap"
                            break;
                        }

                        switch (monthText) {
                          case "Jan":
                            monthText = "Jan"
                            break;
                          case "Feb":
                            monthText = "Feb"
                            break;
                          case "Mar":
                            monthText = "Már"
                            break;
                          case "Apr":
                            monthText = "Ápr"
                            break;
                          case "May":
                            monthText = "Máj"
                            break;
                          case "Jun":
                            monthText = "Jún"
                            break;
                          case "Jul":
                            monthText = "Júl"
                            break;
                          case "Aug":
                            monthText = "Aug"
                            break;
                          case "Sep":
                            monthText = "Sze"
                            break;
                          case "Oct":
                            monthText = "Okt"
                            break;
                          case "Nov":
                            monthText = "Nov"
                            break;
                          case "Dec":
                            monthText = "Dec"
                            break;
                        }

                        var newDate = `${dayText}, ${monthText} ${dateText} ${yearText}`
                        var examData = {
                          subject: json.record[day][data.a].subjects[data.b].subject,
                          teacher: json.record[day][data.a].subjects[data.b].teacher,
                          date: newDate,
                          type: examinations.record[exam][x][y].type,
                          link: examinations.record[exam][x][y].link
                        }

                        console.log(examData)

                          const container = document.querySelector(`div#div-container`)

                          const eventDiv = document.createElement('div');
                          eventDiv.className = 'event';

                          const spanContainer = document.createElement('div');
                          spanContainer.className = 'block';

                          const dateSpan = document.createElement('span');
                          dateSpan.className = 'date';
                          dateSpan.textContent = examData.date;

                          const linkRow = document.createElement('a')
                          linkRow.className = 'linkSpan'
                          linkRow.href = examData.link

                          const timeSpan = document.createElement('span');
                          timeSpan.className = 'time';
                          timeSpan.textContent = `${x}. óra`;

                          const typeSpan = document.createElement('span');
                          typeSpan.className = 'type';
                          typeSpan.textContent = examData.type

                          const teacherSpan = document.createElement('span');
                          teacherSpan.className = 'teacher';
                          teacherSpan.textContent = examData.teacher

                          const classSpan = document.createElement('span');
                          classSpan.className = 'subject';
                          classSpan.textContent = examData.subject

                          eventDiv.appendChild(linkRow);
                          linkRow.appendChild(classSpan)
                          spanContainer.appendChild(dateSpan);
                          spanContainer.appendChild(teacherSpan);
                          spanContainer.appendChild(timeSpan);
                          spanContainer.appendChild(typeSpan);

                          container.appendChild(eventDiv);
                          eventDiv.appendChild(spanContainer)
                      }
                    }
                  })
                }
              }
            }
          }
        })
      })
  })