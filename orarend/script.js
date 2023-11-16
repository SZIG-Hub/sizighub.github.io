fetch('https://api.npoint.io/6101e39b776848c51548')
  .then((response) => response.json())
  .then((json) => {

    fetch('https://api.npoint.io/143ce780811e0b13f03a')
      .then((response) => response.json())
      .then((users) => {

        fetch('https://api.npoint.io/1965674b4266bb25a804')
          .then((response) => response.json())
          .then((examinations) => {

            var urlParam = new URLSearchParams(window.location.search)
            var paramUser = urlParam.get('name')
            var paramWeek = urlParam.get('week')
            var user = users[`@${paramUser.toString()}`]

            if (!user) {
              window.location.replace('./no-user.html')
            }

            document.querySelector(`title`).textContent = user.name + " | " + "Órarend"
            document.querySelector(`span.profileName`).textContent = user.name

            var w = 0

            if (paramWeek === 'next') {
              document.querySelector(`a.weekLink`).href = `./?name=${paramUser}`
              document.querySelector(`span.week`).textContent = "Előző hét"
              w = 7
            } else {
              document.querySelector(`a.weekLink`).href = `./?name=${paramUser}&week=next`
              document.querySelector(`span.week`).textContent = "Következő hét"
            }

            var days = Object.keys(json)
            var exams = Object.keys(examinations)

            var s = 0
            var q = 0

            var table = new Array

            days.forEach((day) => {
              for (var x = 1; x <= 5; x++) {
                for (var y = 1; y <= 7; y++) {
                  var z = String.fromCharCode(96 + x)
                  var id = `${z}${y}`

                  exams.forEach((exam) => {
                    if (json[day][id]) {
                      function getMonday(d) {
                        d = new Date(d);
                        var value = x,
                          diff = d.getDate() - d.getDay() + value + w
                        return new Date(d.setDate(diff));
                      }

                      var examDate = getMonday(new Date()).toDateString()

                      var i = 1

                      if (json[day][id].subjects.multiple) {
                        var l = "type" + json[day][id].subjects.type
                        i = user[l]
                      }

                      let cell = document.querySelector(`div#${id}`)

                      const teacher = document.createElement('span');
                      teacher.className = 'teacher';
                      if (i < 1) { teacher.textContent = "" } else { teacher.textContent = json[day][id].subjects[i].monogram.toString(); }

                      const subject = document.createElement('span');
                      subject.className = 'subject';
                      if (i < 1) { subject.textContent = ""; q = q + 1 } else { subject.textContent = json[day][id].subjects[i].subject.toString(); }

                      const classroom = document.createElement('span');
                      classroom.className = 'classroom';
                      if (i < 1) { classroom.textContent = "" } else { classroom.textContent = json[day][id].subjects[i].room.toString(); }

                      cell.appendChild(teacher)
                      cell.appendChild(subject)
                      cell.appendChild(classroom)

                      if (exam === examDate) {
                        var userType
                        if (json[day][id].subjects.multiple === true) {
                          var examGroup = "type" + json[day][id].subjects.type
                          userType = user[examGroup]
                          if (userType === 0) return
                        } else { userType = 1 }

                        var examRow = examinations[exam][y]

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

                          if (!examinations[exam][y][userType]) return

                          var data = {
                            subject: json[day][id].subjects[userType].subject,
                            teacher: json[day][id].subjects[userType].teacher,
                            link: examinations[exam][y][userType].link,
                            type: examinations[exam][y][userType].type,
                            date: newDate,
                            time: y + ". óra"
                          }

                          let cell = document.querySelector(`div#${id}`)
                          let button = cell.parentElement

                          if (data.link !== "./") {

                            const link = document.createElement('a');
                            link.className = 'examLink'
                            link.href = data.link
                            link.target = "_blank"

                            button.style.cursor = "pointer"

                            button.appendChild(link)
                          } else { button.style.cursor = "default" }

                          const image = document.createElement('img');
                          image.className = 'image';
                          image.src = "../assets/icon.png"

                          const hover = document.createElement('img');
                          hover.className = 'hover';
                          hover.src = "../assets/icon-hover.png"

                          cell.appendChild(image)
                          cell.appendChild(hover)



                          table.push(data)
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

            table.sort(function (a, b) {

              var dateA = new Date(a.date);
              var dateB = new Date(b.date);
              return dateA - dateB;
            });

            for (var t = 0; t <= table.length - 1; t++) {
              const container = document.querySelector(`div.ticket`)

              const eventDiv = document.createElement('div');
              eventDiv.className = 'event';

              const leftBlock = document.createElement('div');
              leftBlock.className = 'blockLeft';

              const rightBlock = document.createElement('div')
              rightBlock.className = 'blockRight'

              const block = document.createElement('div')
              block.className = 'blockSpan'

              const dateSpan = document.createElement('span');
              dateSpan.className = 'dateSpan';
              dateSpan.textContent = table[t].date;

              const timeSpan = document.createElement('span');
              timeSpan.className = 'timeSpan';
              timeSpan.textContent = table[t].time;

              const typeSpan = document.createElement('span');
              typeSpan.className = 'typeSpan';
              typeSpan.textContent = table[t].type

              const teacherSpan = document.createElement('span');
              teacherSpan.className = 'teacherSpan';
              teacherSpan.textContent = table[t].teacher

              const classSpan = document.createElement('span');
              classSpan.className = 'subjectSpan';
              classSpan.textContent = table[t].subject

              if (table[t].link !== "./") {
                const downloadButton = document.createElement('button');
                downloadButton.className = 'downloadButton'
                downloadButton.id = 'download'
                downloadButton.type = 'button'
                downloadButton.style.cursor = 'pointer'

                const downloadLink = document.createElement('a')
                downloadLink.href = table[t].link

                const downloadIcon = document.createElement('img')
                downloadIcon.src = '../assets/download.png'
                downloadIcon.className = 'downloadIcon'

                const downloadHover = document.createElement('img')
                downloadHover.src = '../assets/downloadHover.png'
                downloadHover.className = 'downloadHover'

                rightBlock.appendChild(downloadLink)
                downloadLink.appendChild(downloadButton)
                downloadButton.appendChild(downloadIcon)
                downloadButton.appendChild(downloadHover)
              }

              container.appendChild(eventDiv)
              eventDiv.appendChild(leftBlock)
              eventDiv.appendChild(rightBlock)
              leftBlock.appendChild(classSpan)
              leftBlock.appendChild(block)
              block.appendChild(dateSpan)
              block.appendChild(timeSpan)
              block.appendChild(teacherSpan)
              block.appendChild(typeSpan)
            }
          })
      })
  })