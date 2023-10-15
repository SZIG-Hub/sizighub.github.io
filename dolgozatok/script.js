import json from '../data.json' assert {type: 'json'};
import data from '../exams.json' assert {type: 'json'};

let divContainer = document.getElementById('div-container');

var days = Object.keys(json)
var examDays = Object.keys(data)

var curr = new Date((new Date).setDate((new Date).getDate() - (new Date).getDay()));
var examMonday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
var examTuesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
var examWednesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
var examThursday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
var examFriday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));

days.forEach(day => {
  if (day === "Monday") { monday(day) }
  if (day === "Tuesday") { tuesday(day) }
  if (day === "Wednesday") { wednesday(day) }
  if (day === "Thursday") { thursday(day) }
  if (day === "Friday") { friday(day) }
})

function monday(day) {

  examDays.forEach(examDay => {
    if (examDay === examMonday.toDateString()) {
      for (let e = 1; e <= 7; e++) {
        var examData = data[examDay][e]
        if (examData) {
          var number = examData.subject
          var examClass = `a${e}`

          const subjectName = json[day][examClass].subjects[number].subject
          const teacherName = json[day][examClass].subjects[number].teacher

          console.log(subjectName)
          console.log(teacherName)


          const rowData = data[examDay][e]


          const eventDiv = document.createElement('div');
          eventDiv.className = 'event';

          const spanContainer = document.createElement('div');
          spanContainer.className = 'block';

          const dateSpan = document.createElement('span');
          dateSpan.className = 'date';
          dateSpan.textContent = examDay;

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

          eventDiv.appendChild(classSpan);
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
    if (examDay === examTuesday.toDateString()) {
      for (let e = 1; e <= 7; e++) {
        var examData = data[examDay][e]
        if (examData) {
          var number = examData.subject
          var examClass = `b${e}`

          const subjectName = json[day][examClass].subjects[number].subject
          const teacherName = json[day][examClass].subjects[number].teacher

          console.log(subjectName)
          console.log(teacherName)


          const rowData = data[examDay][e]


          const eventDiv = document.createElement('div');
          eventDiv.className = 'event';

          const spanContainer = document.createElement('div');
          spanContainer.className = 'block';

          const dateSpan = document.createElement('span');
          dateSpan.className = 'date';
          dateSpan.textContent = examDay;

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

          eventDiv.appendChild(classSpan);
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
    if (examDay === examWednesday.toDateString()) {
      for (let e = 1; e <= 7; e++) {
        var examData = data[examDay][e]
        if (examData) {
          var number = examData.subject
          var examClass = `c${e}`

          const subjectName = json[day][examClass].subjects[number].subject
          const teacherName = json[day][examClass].subjects[number].teacher

          console.log(subjectName)
          console.log(teacherName)


          const rowData = data[examDay][e]


          const eventDiv = document.createElement('div');
          eventDiv.className = 'event';

          const spanContainer = document.createElement('div');
          spanContainer.className = 'block';

          const dateSpan = document.createElement('span');
          dateSpan.className = 'date';
          dateSpan.textContent = examDay;

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

          eventDiv.appendChild(classSpan);
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
    if (examDay === examThursday.toDateString()) {
      for (let e = 1; e <= 7; e++) {
        var examData = data[examDay][e]
        if (examData) {
          var number = examData.subject
          var examClass = `d${e}`

          const subjectName = json[day][examClass].subjects[number].subject
          const teacherName = json[day][examClass].subjects[number].teacher

          console.log(subjectName)
          console.log(teacherName)


          const rowData = data[examDay][e]


          const eventDiv = document.createElement('div');
          eventDiv.className = 'event';

          const spanContainer = document.createElement('div');
          spanContainer.className = 'block';

          const dateSpan = document.createElement('span');
          dateSpan.className = 'date';
          dateSpan.textContent = examDay;

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

          eventDiv.appendChild(classSpan);
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
    if (examDay === examFriday.toDateString()) {
      for (let e = 1; e <= 7; e++) {
        var examData = data[examDay][e]
        if (examData) {
          var number = examData.subject
          var examClass = `e${e}`

          const subjectName = json[day][examClass].subjects[number].subject
          const teacherName = json[day][examClass].subjects[number].teacher

          console.log(subjectName)
          console.log(teacherName)


          const rowData = data[examDay][e]


          const eventDiv = document.createElement('div');
          eventDiv.className = 'event';

          const spanContainer = document.createElement('div');
          spanContainer.className = 'block';

          const dateSpan = document.createElement('span');
          dateSpan.className = 'date';
          dateSpan.textContent = examDay;

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

          eventDiv.appendChild(classSpan);
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
