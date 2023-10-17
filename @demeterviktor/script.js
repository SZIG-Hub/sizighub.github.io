import json from '../data.json' assert {type: 'json'};
import exams from '../exams.json' assert {type: 'json'};
import users from '../users.json' assert {type: 'json'};

var userConfig = users['@demeterviktor']

document.querySelector(`span.username`).textContent = userConfig.name
document.querySelector(`title`).textContent = userConfig.name + " | " + "Órarend"
document.querySelector(`img.profilePicture`).src = userConfig.profilepicture

var days = Object.keys(json)
var examDays = Object.keys(exams)

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

// Monday

function monday(day) {
  for (let col = 1; col <= 7; col++) {
    const cellId = "a" + col.toString();
    const cellData = json[day][cellId]

    if (cellData.subjects.multiple === true) {
      if (cellData.subjects.type === 0) {
        let i = userConfig.type0

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 1) {
        let i = userConfig.type1



        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 2) {
        let i = userConfig.type2

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      } else if (cellData.subjects.type === 3) {
        let i = userConfig.type3

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 4) {
        let i = userConfig.type4

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
    } else {

      document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[1].monogram;
      document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[1].subject;
      document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[1].room;

    }

    examDays.forEach(examDay => {
      if (examDay === examMonday.toDateString()) {
        for (let e = 1; e <= 7; e++) {
          const examData = exams[examDay][e]
          if (examData) {
            var examClass = `a${e}`
            var examSubject = examData.subject
            examIcon(examClass, examSubject)
          }
        }
      }
    })

    function examIcon(examClass, examSubject) {
      if (examClass && examSubject) {
        if (cellData.subjects[examSubject]) {
          if (document.querySelector(`span#${examClass}.teacher`).textContent === cellData.subjects[examSubject].monogram) {
            document.querySelector(`img#${examClass}.image`).style.display = "block"
            document.querySelector(`img#${examClass}.hoverImage`).style.display = "block"
          }
        }
      }
    }
  }
}

// Tuesday

function tuesday(day) {
  for (let col = 1; col <= 7; col++) {
    const cellId = "b" + col.toString();
    const cellData = json[day][cellId]



    if (cellData.subjects.multiple === true) {
      if (cellData.subjects.type === 0) {
        let i = userConfig.type0

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 1) {
        let i = userConfig.type1



        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 2) {
        let i = userConfig.type2

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      } else if (cellData.subjects.type === 3) {
        let i = userConfig.type3

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 4) {
        let i = userConfig.type4

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
    } else {

      document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[1].monogram;
      document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[1].subject;
      document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[1].room;

    }

    examDays.forEach(examDay => {
      if (examDay === examTuesday.toDateString()) {
        for (let e = 1; e <= 7; e++) {
          const examData = exams[examDay][e]
          if (examData) {
            var examClass = `b${e}`
            var examSubject = examData.subject
            examIcon(examClass, examSubject)
          }
        }
      }
    })

    function examIcon(examClass, examSubject) {
      if (examClass && examSubject) {
        if (cellData.subjects[examSubject]) {
          if (document.querySelector(`span#${examClass}.teacher`).textContent === cellData.subjects[examSubject].monogram) {
            document.querySelector(`img#${examClass}.image`).style.display = "block"
            document.querySelector(`img#${examClass}.hoverImage`).style.display = "block"
          }
        }
      }
    }
  }
}

// Wednesday

function wednesday(day) {
  for (let col = 1; col <= 7; col++) {
    const cellId = "c" + col.toString();
    const cellData = json[day][cellId]



    if (cellData.subjects.multiple === true) {
      if (cellData.subjects.type === 0) {
        let i = userConfig.type0

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 1) {
        let i = userConfig.type1



        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 2) {
        let i = userConfig.type2

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      } else if (cellData.subjects.type === 3) {
        let i = userConfig.type3

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 4) {
        let i = userConfig.type4

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
    } else {

      document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[1].monogram;
      document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[1].subject;
      document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[1].room;

    }

    examDays.forEach(examDay => {
      if (examDay === examWednesday.toDateString()) {
        for (let e = 1; e <= 7; e++) {
          const examData = exams[examDay][e]
          if (examData) {
            var examClass = `c${e}`
            var examSubject = examData.subject
            examIcon(examClass, examSubject)
          }
        }
      }
    })

    function examIcon(examClass, examSubject) {
      if (examClass && examSubject) {
        if (cellData.subjects[examSubject]) {
          if (document.querySelector(`span#${examClass}.teacher`).textContent === cellData.subjects[examSubject].monogram) {
            document.querySelector(`img#${examClass}.image`).style.display = "block"
            document.querySelector(`img#${examClass}.hoverImage`).style.display = "block"
          }
        }
      }
    }
  }
}

// Thursday

function thursday(day) {
  for (let col = 1; col <= 7; col++) {
    const cellId = "d" + col.toString();
    const cellData = json[day][cellId]



    if (cellData.subjects.multiple === true) {
      if (cellData.subjects.type === 0) {
        let i = userConfig.type0

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 1) {
        let i = userConfig.type1



        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 2) {
        let i = userConfig.type2

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      } else if (cellData.subjects.type === 3) {
        let i = userConfig.type3

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 4) {
        let i = userConfig.type4

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
    } else {

      document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[1].monogram;
      document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[1].subject;
      document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[1].room;

    }

    examDays.forEach(examDay => {
      if (examDay === examThursday.toDateString()) {
        for (let e = 1; e <= 7; e++) {
          const examData = exams[examDay][e]
          if (examData) {
            var examClass = `d${e}`
            var examSubject = examData.subject
            examIcon(examClass, examSubject)
          }
        }
      }
    })

    function examIcon(examClass, examSubject) {
      if (examClass && examSubject) {
        if (cellData.subjects[examSubject]) {
          if (document.querySelector(`span#${examClass}.teacher`).textContent === cellData.subjects[examSubject].monogram) {
            document.querySelector(`img#${examClass}.image`).style.display = "block"
            document.querySelector(`img#${examClass}.hoverImage`).style.display = "block"
          }
        }
      }
    }
  }
}

// Friday

function friday(day) {
  for (let col = 1; col <= 7; col++) {
    const cellId = "e" + col.toString();
    const cellData = json[day][cellId]

    if (cellData.subjects.multiple === true) {
      if (cellData.subjects.type === 0) {
        let i = userConfig.type0

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 1) {
        let i = userConfig.type1



        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 2) {
        let i = userConfig.type2

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      } else if (cellData.subjects.type === 3) {
        let i = userConfig.type3

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
      else if (cellData.subjects.type === 4) {
        let i = userConfig.type4

        if (i === 0) {
          document.querySelector(`span#${cellId}.teacher`).textContent = "";
          document.querySelector(`span#${cellId}.subject`).textContent = "";
          document.querySelector(`span#${cellId}.classroom`).textContent = "";
        } else {
          document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[i].monogram;
          document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[i].subject;
          document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[i].room;
        }
      }
    } else {

      document.querySelector(`span#${cellId}.teacher`).textContent = cellData.subjects[1].monogram;
      document.querySelector(`span#${cellId}.subject`).textContent = cellData.subjects[1].subject;
      document.querySelector(`span#${cellId}.classroom`).textContent = cellData.subjects[1].room;

    }

    examDays.forEach(examDay => {
      if (examDay === examFriday.toDateString()) {
        for (let e = 1; e <= 7; e++) {
          const examData = exams[examDay][e]
          if (examData) {
            var examClass = `e${e}`
            var examSubject = examData.subject
            examIcon(examClass, examSubject)
          }
        }
      }
    })

    function examIcon(examClass, examSubject) {
      if (examClass && examSubject) {
        if (cellData.subjects[examSubject]) {
          if (document.querySelector(`span#${examClass}.teacher`).textContent === cellData.subjects[examSubject].monogram) {
            document.querySelector(`img#${examClass}.image`).style.display = "block"
            document.querySelector(`img#${examClass}.hoverImage`).style.display = "block"
          }
        }
      }
    }
  }
}