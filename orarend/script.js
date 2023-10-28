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

            days.forEach((day) => {
              for (var x = 1; x <= 5; x++) {
                for (var y = 1; y <= 7; y++) {
                  var z = String.fromCharCode(96 + x)
                  var id = `${z}${y}`

                  exams.forEach((exam) => {
                    if (json.record[day][id]) {

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
                      if (i < 1) { subject.textContent = "" } else { subject.textContent = json.record[day][id].subjects[i].subject.toString(); }

                      const classroom = document.createElement('span');
                      classroom.className = 'classroom';
                      if (i < 1) { classroom.textContent = "" } else { classroom.textContent = json.record[day][id].subjects[i].room.toString(); }

                      cell.appendChild(teacher)
                      cell.appendChild(subject)
                      cell.appendChild(classroom)

                      function getMonday(d) {
                        d = new Date(d);
                        var value = x,
                          diff = d.getDate() - d.getDay() + value
                        return new Date(d.setDate(diff));
                      }

                      var examDate = getMonday(new Date()).toDateString()

                      if (examDate === exam) {

                        const examData = examinations.record[exam][y]
                        if (examData) {
                          var a = day
                          var b = id
                          var c = examData.subject

                          if (json.record[a][b].subjects[c]) {
                            if (json.record[a][b].subjects.multiple) {
                              var examClass = "type" + json.record[day][id].subjects.type
                              var userFor = user[examClass]
                              var examFor = examinations.record[exam][y].subject

                              if (userFor === examFor) {

                                var data = {
                                  subject: json.record[a][b].subjects[c].subject,
                                  teacher: json.record[a][b].subjects[c].teacher,
                                  link: examinations.record[examDate][y].link,
                                  date: examDate,
                                  type: examinations.record[examDate][y].type
                                }

                                s = s + 1

                                let cell = document.querySelector(`div#${id}`)
                                let button = cell.parentElement
                                button.style.cursor = "pointer"

                                const link = document.createElement('a');
                                link.className = 'examLink'
                                link.href = examData.link
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
                        }
                      }
                    }
                  })
                }
              }
            })

            console.log(s)

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

          })
      })
  })