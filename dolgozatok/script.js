fetch('https://api.npoint.io/6101e39b776848c51548')
  .then((response) => response.json())
  .then((json) => {

    fetch('https://api.npoint.io/1965674b4266bb25a804')
      .then((response) => response.json())
      .then((examinations) => {

        var days = Object.keys(json)
        var exams = Object.keys(examinations)

        var table = new Array

        exams.forEach((exam) => {
          for (var x = 1; x <= 7; x++) {
            for (var y = 1; y <= 4; y++) {
              if (examinations[exam][x]) {

                if (examinations[exam][x][y]) {

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
                    if (json[day][data.a]) {
                      if (json[day][data.a].subjects[data.b]) {
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
                          subject: json[day][data.a].subjects[data.b].subject,
                          teacher: json[day][data.a].subjects[data.b].teacher,
                          date: newDate,
                          type: examinations[exam][x][y].type,
                          link: examinations[exam][x][y].link,
                          time: x + ". óra"
                        }

                        table.push(examData)
                      }
                    }
                  })
                }
              }
            }
          }
        })
        
        table.sort(function (a, b) {

          var dateA = new Date(a.date);
          var dateB = new Date(b.date);
          return dateA - dateB;
        });

        for (var t = 0; t <= table.length - 1; t++) {
          const container = document.querySelector(`div#div-container`)

          const eventDiv = document.createElement('div');
          eventDiv.className = 'event';

          const leftBlock = document.createElement('div');
          leftBlock.className = 'blockLeft';

          const rightBlock = document.createElement('div')
          rightBlock.className = 'blockRight'

          const block = document.createElement('div')
          block.className = 'block'

          const dateSpan = document.createElement('span');
          dateSpan.className = 'date';
          dateSpan.textContent = table[t].date;

          const timeSpan = document.createElement('span');
          timeSpan.className = 'time';
          timeSpan.textContent = table[t].time;

          const typeSpan = document.createElement('span');
          typeSpan.className = 'type';
          typeSpan.textContent = table[t].type

          const teacherSpan = document.createElement('span');
          teacherSpan.className = 'teacher';
          teacherSpan.textContent = table[t].teacher

          const classSpan = document.createElement('span');
          classSpan.className = 'subject';
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