fetch('https://api.jsonbin.io/v3/b/65313b1f54105e766fc45c50')
  .then((response) => response.json())
  .then((json) => {

    fetch('https://api.jsonbin.io/v3/b/65313b7554105e766fc45c72')
      .then((response) => response.json())
      .then((users) => {

        fetch('https://api.jsonbin.io/v3/b/65313b5454105e766fc45c63')
          .then((response) => response.json())
          .then((examinations) => {

            
            var urlParam = new URLSearchParams(window.location.search)
            var paramUser = urlParam.get('name')
            var user = users.record[`@${paramUser}`]

            if (!user) {
              window.location.replace("./no-user");
              return
            }

            document.querySelector(`title`).textContent = user.name + " | " + "Órarend"
            document.querySelector(`span.profileName`).textContent = user.name

            var days = Object.keys(json.record)
            var exams = Object.keys(examinations.record)

            var s = 0
            var q = 0

            days.forEach((day) => {
              for (var x = 1; x <= 5; x++) {
                for (var y = 1; y <= 7; y++) {
                  var z = String.fromCharCode(96 + x)
                  var id = `${z}${y}`

                  exams.forEach((exam) => {
                    if (json.record[day][id]) {
                      function getMonday(d) {
                        d = new Date(d);
                        var value = x,
                          diff = d.getDate() - d.getDay() + value
                        return new Date(d.setDate(diff));
                      }

                      var examDate = getMonday(new Date()).toDateString()

                      var i = 1

                      if (json.record[day][id].subjects.multiple) {
                        var l = "type" + json.record[day][id].subjects.type
                        i = user[l]
                      }

                      let cell = document.querySelector(`div#${id}`)

                      const teacher = document.createElement('span');
                      teacher.className = 'teacher';
                      if (i < 1) { teacher.textContent = "" } else { teacher.textContent = json.record[day][id].subjects[i].monogram.toString(); }

                      const subject = document.createElement('span');
                      subject.className = 'subject';
                      if (i < 1) { subject.textContent = ""; q = q + 1 } else { subject.textContent = json.record[day][id].subjects[i].subject.toString(); }

                      const classroom = document.createElement('span');
                      classroom.className = 'classroom';
                      if (i < 1) { classroom.textContent = "" } else { classroom.textContent = json.record[day][id].subjects[i].room.toString(); }

                      cell.appendChild(teacher)
                      cell.appendChild(subject)
                      cell.appendChild(classroom)

                      if (exam === examDate) {
                        var userType
                        if (json.record[day][id].subjects.multiple === true) {
                          var examGroup = "type" + json.record[day][id].subjects.type
                          userType = user[examGroup]
                          if (userType === 0) return
                        } else { userType = 1 }

                        var examRow = examinations.record[exam][y]

                        if (examRow) {

                          s = s + 1

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

                          var data = {
                            subject: json.record[day][id].subjects[userType].subject,
                            teacher: json.record[day][id].subjects[userType].teacher,
                            link: examinations.record[exam][y][userType].link,
                            type: examinations.record[exam][y][userType].type,
                            date: newDate
                          }

                          let cell = document.querySelector(`div#${id}`)
                          let button = cell.parentElement
                          button.style.cursor = "pointer"

                          const link = document.createElement('a');
                          link.className = 'examLink'
                          link.href = data.link
                          link.target = "_blank"

                          const image = document.createElement('img');
                          image.className = 'image';
                          image.src = "../assets/icon.png"

                          const hover = document.createElement('img');
                          hover.className = 'hover';
                          hover.src = "../assets/icon-hover.png"

                          cell.appendChild(image)
                          cell.appendChild(hover)
                          button.appendChild(link)

                          const container = document.querySelector(`div.ticket`)

                          const eventDiv = document.createElement('div');
                          eventDiv.className = 'event';

                          const spanContainer = document.createElement('div');
                          spanContainer.className = 'details';

                          const dateSpan = document.createElement('span');
                          dateSpan.className = 'dateSpan';
                          dateSpan.textContent = data.date;

                          const linkRow = document.createElement('a')
                          linkRow.className = 'linkSpan'
                          linkRow.href = data.link

                          const timeSpan = document.createElement('span');
                          timeSpan.className = 'timeSpan';
                          timeSpan.textContent = `${y}. óra`;

                          const typeSpan = document.createElement('span');
                          typeSpan.className = 'typeSpan';
                          typeSpan.textContent = data.type

                          const teacherSpan = document.createElement('span');
                          teacherSpan.className = 'teacherSpan';
                          teacherSpan.textContent = data.teacher

                          const classSpan = document.createElement('span');
                          classSpan.className = 'subjectSpan';
                          classSpan.textContent = data.subject

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
                    }
                  })
                }
              }
            })

            if (s < 1) {
              const container = document.querySelector(`div.ticket`)

              const eventDiv = document.createElement('div');
              eventDiv.className = 'event';

              const message = document.createElement('span');
              message.className = 'message';
              message.textContent = "Nincsenek dolgozatok ezen a héten"

              container.appendChild(eventDiv);
              eventDiv.appendChild(message)
            }

            if (q > 0) {
              const container = document.querySelector(`div.ticket`)

              const eventDiv = document.createElement('div');
              eventDiv.className = 'alert';

              const image = document.createElement('img');
              image.className = 'alertImage';
              image.src = "../assets/icon-hover.png"

              const message = document.createElement('span');
              message.className = 'alertMessage';
              message.textContent = `${q / 7} ismertlen órád van. Ennek oka az, hogy nem tudjuk milyen órákon veszel részt ilyenkor. Jelezz vissza nekünk és mi frissítjük az óráidat`

              container.appendChild(eventDiv);
              eventDiv.appendChild(image)
              eventDiv.appendChild(message)
            }
          })
      })
  })