fetch('https://api.jsonbin.io/v3/b/65313b1f54105e766fc45c50')
  .then((response) => response.json())
  .then((json) => {

    fetch('https://api.jsonbin.io/v3/b/65313b5454105e766fc45c63')
      .then((response) => response.json())
      .then((data) => {

        let divContainer = document.getElementById('div-container');

        var days = Object.keys(json.record)
        var examDays = Object.keys(data.record)

        if (examDays.length <= 1) {
          const eventDiv = document.createElement('div');
                  eventDiv.className = 'event';

                  const nothingSpan = document.createElement('span');
                  nothingSpan.className = 'noExams';
                  nothingSpan.textContent = 'Nincsenek dolgozatok 🎉';

                  divContainer.appendChild(eventDiv);
                  eventDiv.appendChild(nothingSpan)

                  return
        }

        

        var curr = new Date((new Date).setDate((new Date).getDate() - (new Date).getDay()));
        var examMonday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
        var examTuesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
        var examWednesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
        var examThursday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
        var examFriday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));

        var curr1 = new Date((new Date).setDate((new Date).getDate() - (new Date).getDay() + 7));
        var examMonday1 = new Date(curr1.setDate(curr1.getDate() - curr1.getDay() + 1));
        var examTuesday1 = new Date(curr1.setDate(curr1.getDate() - curr1.getDay() + 2));
        var examWednesday1 = new Date(curr1.setDate(curr1.getDate() - curr1.getDay() + 3));
        var examThursday1 = new Date(curr1.setDate(curr1.getDate() - curr1.getDay() + 4));
        var examFriday1 = new Date(curr1.setDate(curr1.getDate() - curr1.getDay() + 5));

        var curr2 = new Date((new Date).setDate((new Date).getDate() - (new Date).getDay() + 14));
        var examMonday2 = new Date(curr2.setDate(curr2.getDate() - curr2.getDay() + 1));
        var examTuesday2 = new Date(curr2.setDate(curr2.getDate() - curr2.getDay() + 2));
        var examWednesday2 = new Date(curr2.setDate(curr2.getDate() - curr2.getDay() + 3));
        var examThursday2 = new Date(curr2.setDate(curr2.getDate() - curr2.getDay() + 4));
        var examFriday2 = new Date(curr2.setDate(curr2.getDate() - curr2.getDay() + 5));

        days.forEach(day => {
          if (day === "Monday") { monday(day) }
          if (day === "Tuesday") { tuesday(day) }
          if (day === "Wednesday") { wednesday(day) }
          if (day === "Thursday") { thursday(day) }
          if (day === "Friday") { friday(day) }
        })

        function monday(day) {

          examDays.forEach(examDay => {
            if (examDay === examMonday.toDateString() || examDay === examMonday1.toDateString() || examDay === examMonday2.toDateString()) {
              for (let e = 1; e <= 7; e++) {
                var examData = data.record[examDay][e]
                if (examData) {
                  var number = examData.subject
                  var examClass = `a${e}`

                  const subjectName = json.record[day][examClass].subjects[number].subject
                  const teacherName = json.record[day][examClass].subjects[number].teacher

                  console.log(subjectName)
                  console.log(teacherName)


                  const rowData = data.record[examDay][e]

                  var dateArray = examDay.toString().split(" ")
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


                  const eventDiv = document.createElement('div');
                  eventDiv.className = 'event';

                  const spanContainer = document.createElement('div');
                  spanContainer.className = 'block';

                  const dateSpan = document.createElement('span');
                  dateSpan.className = 'date';
                  dateSpan.textContent = newDate;

                  const linkRow = document.createElement('a')
                  linkRow.className = 'link'
                  if (rowData.link) {
                    console.log(rowData)
                    linkRow.href = rowData.link
                  } else {
                    linkRow.href = "./"
                  }

                  const timeSpan = document.createElement('span');
                  timeSpan.className = 'time';
                  timeSpan.textContent = `${e}. óra`;

                  const typeSpan = document.createElement('span');
                  typeSpan.className = 'type';
                  typeSpan.textContent = rowData.type;

                  const teacherSpan = document.createElement('span');
                  teacherSpan.className = 'teacher';
                  teacherSpan.textContent = teacherName.toString();

                  const classSpan = document.createElement('span');
                  classSpan.className = 'subject';
                  classSpan.textContent = subjectName.toString();

                  eventDiv.appendChild(linkRow);
                  linkRow.appendChild(classSpan)
                  spanContainer.appendChild(dateSpan);
                  spanContainer.appendChild(teacherSpan);
                  spanContainer.appendChild(timeSpan);
                  spanContainer.appendChild(typeSpan);

                  divContainer.appendChild(eventDiv);
                  eventDiv.appendChild(spanContainer)
                }
              }
            }
          })
        }


        function tuesday(day) {

          examDays.forEach(examDay => {
            if (examDay === examTuesday.toDateString() || examDay === examTuesday1.toDateString() || examDay === examTuesday2.toDateString()) {
              for (let e = 1; e <= 7; e++) {
                var examData = data.record[examDay][e]
                if (examData) {
                  var number = examData.subject
                  var examClass = `b${e}`

                  const subjectName = json.record[day][examClass].subjects[number].subject
                  const teacherName = json.record[day][examClass].subjects[number].teacher

                  console.log(subjectName)
                  console.log(teacherName)


                  const rowData = data.record[examDay][e]

                  var dateArray = examDay.toString().split(" ")
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


                  const eventDiv = document.createElement('div');
                  eventDiv.className = 'event';

                  const spanContainer = document.createElement('div');
                  spanContainer.className = 'block';

                  const dateSpan = document.createElement('span');
                  dateSpan.className = 'date';
                  dateSpan.textContent = newDate;

                  const linkRow = document.createElement('a')
                  linkRow.className = 'link'
                  if (rowData.link) {
                    console.log(rowData)
                    linkRow.href = rowData.link
                  } else {
                    linkRow.href = "./"
                  }

                  const timeSpan = document.createElement('span');
                  timeSpan.className = 'time';
                  timeSpan.textContent = `${e}. óra`;

                  const typeSpan = document.createElement('span');
                  typeSpan.className = 'type';
                  typeSpan.textContent = rowData.type;

                  const teacherSpan = document.createElement('span');
                  teacherSpan.className = 'teacher';
                  teacherSpan.textContent = teacherName.toString();

                  const classSpan = document.createElement('span');
                  classSpan.className = 'subject';
                  classSpan.textContent = subjectName.toString();

                  eventDiv.appendChild(linkRow);
                  linkRow.appendChild(classSpan)
                  spanContainer.appendChild(dateSpan);
                  spanContainer.appendChild(teacherSpan);
                  spanContainer.appendChild(timeSpan);
                  spanContainer.appendChild(typeSpan);

                  divContainer.appendChild(eventDiv);
                  eventDiv.appendChild(spanContainer)
                }
              }
            }
          })
        }


        function wednesday(day) {

          examDays.forEach(examDay => {
            if (examDay === examWednesday.toDateString() || examDay === examWednesday1.toDateString() || examDay === examWednesday2.toDateString()) {
              for (let e = 1; e <= 7; e++) {
                var examData = data.record[examDay][e]
                if (examData) {
                  var number = examData.subject
                  var examClass = `c${e}`

                  const subjectName = json.record[day][examClass].subjects[number].subject
                  const teacherName = json.record[day][examClass].subjects[number].teacher

                  console.log(subjectName)
                  console.log(teacherName)


                  const rowData = data.record[examDay][e]

                  var dateArray = examDay.toString().split(" ")
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


                  const eventDiv = document.createElement('div');
                  eventDiv.className = 'event';

                  const spanContainer = document.createElement('div');
                  spanContainer.className = 'block';

                  const dateSpan = document.createElement('span');
                  dateSpan.className = 'date';
                  dateSpan.textContent = newDate;

                  const linkRow = document.createElement('a')
                  linkRow.className = 'link'
                  if (rowData.link) {
                    console.log(rowData)
                    linkRow.href = rowData.link
                  } else {
                    linkRow.href = "./"
                  }

                  const timeSpan = document.createElement('span');
                  timeSpan.className = 'time';
                  timeSpan.textContent = `${e}. óra`;

                  const typeSpan = document.createElement('span');
                  typeSpan.className = 'type';
                  typeSpan.textContent = rowData.type;

                  const teacherSpan = document.createElement('span');
                  teacherSpan.className = 'teacher';
                  teacherSpan.textContent = teacherName.toString();

                  const classSpan = document.createElement('span');
                  classSpan.className = 'subject';
                  classSpan.textContent = subjectName.toString();

                  eventDiv.appendChild(linkRow);
                  linkRow.appendChild(classSpan)
                  spanContainer.appendChild(dateSpan);
                  spanContainer.appendChild(teacherSpan);
                  spanContainer.appendChild(timeSpan);
                  spanContainer.appendChild(typeSpan);

                  divContainer.appendChild(eventDiv);
                  eventDiv.appendChild(spanContainer)
                }
              }
            }
          })
        }

        function thursday(day) {

          examDays.forEach(examDay => {
            if (examDay === examThursday.toDateString() || examDay === examThursday1.toDateString() || examDay === examThursday2.toDateString()) {
              for (let e = 1; e <= 7; e++) {
                var examData = data.record[examDay][e]
                if (examData) {
                  var number = examData.subject
                  var examClass = `d${e}`

                  const subjectName = json.record[day][examClass].subjects[number].subject
                  const teacherName = json.record[day][examClass].subjects[number].teacher

                  console.log(subjectName)
                  console.log(teacherName)


                  const rowData = data.record[examDay][e]

                  var dateArray = examDay.toString().split(" ")
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


                  const eventDiv = document.createElement('div');
                  eventDiv.className = 'event';

                  const spanContainer = document.createElement('div');
                  spanContainer.className = 'block';

                  const dateSpan = document.createElement('span');
                  dateSpan.className = 'date';
                  dateSpan.textContent = newDate;

                  const linkRow = document.createElement('a')
                  linkRow.className = 'link'
                  if (rowData.link) {
                    console.log(rowData)
                    linkRow.href = rowData.link
                  } else {
                    linkRow.href = "./"
                  }

                  const timeSpan = document.createElement('span');
                  timeSpan.className = 'time';
                  timeSpan.textContent = `${e}. óra`;

                  const typeSpan = document.createElement('span');
                  typeSpan.className = 'type';
                  typeSpan.textContent = rowData.type;

                  const teacherSpan = document.createElement('span');
                  teacherSpan.className = 'teacher';
                  teacherSpan.textContent = teacherName.toString();

                  const classSpan = document.createElement('span');
                  classSpan.className = 'subject';
                  classSpan.textContent = subjectName.toString();

                  eventDiv.appendChild(linkRow);
                  linkRow.appendChild(classSpan)
                  spanContainer.appendChild(dateSpan);
                  spanContainer.appendChild(teacherSpan);
                  spanContainer.appendChild(timeSpan);
                  spanContainer.appendChild(typeSpan);

                  divContainer.appendChild(eventDiv);
                  eventDiv.appendChild(spanContainer)
                }
              }
            }
          })
        }


        function friday(day) {

          examDays.forEach(examDay => {
            if (examDay === examFriday.toDateString() || examDay === examFriday1.toDateString() || examDay === examFriday2.toDateString()) {
              for (let e = 1; e <= 7; e++) {
                var examData = data.record[examDay][e]
                if (examData) {
                  var number = examData.subject
                  var examClass = `e${e}`

                  const subjectName = json.record[day][examClass].subjects[number].subject
                  const teacherName = json.record[day][examClass].subjects[number].teacher

                  console.log(subjectName)
                  console.log(teacherName)


                  const rowData = data.record[examDay][e]

                  var dateArray = examDay.toString().split(" ")
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


                  const eventDiv = document.createElement('div');
                  eventDiv.className = 'event';

                  const spanContainer = document.createElement('div');
                  spanContainer.className = 'block';

                  const dateSpan = document.createElement('span');
                  dateSpan.className = 'date';
                  dateSpan.textContent = newDate;

                  const linkRow = document.createElement('a')
                  linkRow.className = 'link'
                  if (rowData.link) {
                    console.log(rowData)
                    linkRow.href = rowData.link
                  } else {
                    linkRow.href = "./"
                  }

                  const timeSpan = document.createElement('span');
                  timeSpan.className = 'time';
                  timeSpan.textContent = `${e}. óra`;

                  const typeSpan = document.createElement('span');
                  typeSpan.className = 'type';
                  typeSpan.textContent = rowData.type;

                  const teacherSpan = document.createElement('span');
                  teacherSpan.className = 'teacher';
                  teacherSpan.textContent = teacherName.toString();

                  const classSpan = document.createElement('span');
                  classSpan.className = 'subject';
                  classSpan.textContent = subjectName.toString();

                  eventDiv.appendChild(linkRow);
                  linkRow.appendChild(classSpan)
                  spanContainer.appendChild(dateSpan);
                  spanContainer.appendChild(teacherSpan);
                  spanContainer.appendChild(timeSpan);
                  spanContainer.appendChild(typeSpan);

                  divContainer.appendChild(eventDiv);
                  eventDiv.appendChild(spanContainer)
                }
              }
            }
          })
        }
      })
  })
