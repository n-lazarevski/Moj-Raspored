import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import Navbar from '../Navbar/Navbar'
import "./CalendarStyles.css";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

function generateColor() {
  const list = ["#bf00ff","#6aa84f","#f1c232","#cc4125","#2e78d6"]
  return list[Math.floor(Math.random()*5)]  
}

function generateBlock(name, proffessor) {
  return `<div class='d-flex flex-column align-items-start justify-content-between'>
    <div class='subject-info'>${name}</div>
    <div><i id='like' class="fa fa-thumbs-up"></i> <i id='dislike' class="fa fa-thumbs-down"></i></div>
    </div>`
}

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Enter subject:", "");
        //const modal2 = await DayPilot.Modal.prompt("Enter proffessor:", "");
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: generateBlock(modal.result),
          backColor: generateColor()
        });
        console.log(this.state.events)
      },
      eventDeleteHandling: "Update",
      // onEventClick: async args => {
      //   const dp = this.calendar;
      //   const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
      //   if (!modal.result) { return; }
      //   const e = args.e;
      //   e.data.text = modal.result;
      //   dp.events.update(e);
      // },
    };
  }

  componentDidMount() {

    // load event data
    this.setState({
      startDate: "2022-03-07",
      events: [
        {
          id: 1,
          text: generateBlock("Напредно програмирање", "Маџаров Ѓорѓи"),
          proffessor: "Маџаров Ѓорѓи",
          start: "2022-03-07T10:30:00",
          end: "2022-03-07T13:00:00"
        },
        {
          id: 2,
          text: generateBlock("Дискретна математика", "Спасов Дејан"),
          proffessor: "Спасов Дејан",
          start: "2022-03-08T09:30:00",
          end: "2022-03-08T11:30:00",
          backColor: "#6aa84f"
        },
        {
          id: 3,
          text: generateBlock("Основи на Веб дизајн", "Калајџиски Слободан"),
          proffessor: "Калајџиски Слободан",
          start: "2022-03-08T12:00:00",
          end: "2022-03-08T15:00:00",
          backColor: "#f1c232"
        },
        {
          id: 4,
          text: generateBlock("Бизнис и менаџмент", "Здравески Владимир"),
          proffessor: "Здравески Владимир",
          start: "2022-03-10T11:30:00",
          end: "2022-03-10T14:00:00",
          backColor: "#cc4125"
        },
        {
          id: 5,
          text: generateBlock("Компјутерски мрежи и безбедност", "Мишковски Игор"),
          proffessor: "Мишковски Игор",
          start: "2022-03-10T14:00:00",
          end: "2022-03-10T16:00:00",
          backColor: "#f1c232"
        },
        {
          id: 6,
          text: generateBlock("Алгоритми и податочни структури", "Михајлоска Христина"),
          proffessor: "Михајлоска Христина",
          start: "2022-03-09T11:00:00",
          end: "2022-03-09T14:00:00",
          backColor: "#bf00ff"
        },
        {
          id: 7,
          text: generateBlock("Основи на Веб дизајн", "Мишковски Игор"),
          proffessor: "Мишковски Игор",
          start: "2022-03-11T14:00:00",
          end: "2022-03-11T15:00:00",
          backColor: "#f1c232"
        },
      ]
    });
  }

  render() {
    const {...config} = this.state;

    return (
      <>
      <Navbar/>
      <div style={styles.wrap}>        
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={3}
            skipMonths={3}
            startDate={"2022-03-07"}
            selectionDay={"2022-03-07"}
            onTimeRangeSelected={ args => {
              this.setState({
                startDate: args.day
              });
          }}
          />
        </div>
        <div style={styles.main}>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        </div>
      </div>
      </>
    );
  }
}

export default Calendar;