import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
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
function generateColor()
{
  var list = ["bf00ff","#6aa84f","#f1c232","#cc4125","#2e78d6"]
  return list[Math.floor(Math.random()*5)]
  
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
        const modal2 = await DayPilot.Modal.prompt("Enter proffessor:", "");
        dp.clearSelection();
        if (!modal.result || !modal2.result) { return; }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result + "<br>професор: " + modal2.result,
          backColor: generateColor()
        });
        console.log(this.state.events)
      },
      eventDeleteHandling: "Update",
      onEventClick: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
        if (!modal.result) { return; }
        const e = args.e;
        e.data.text = modal.result;
        dp.events.update(e);
      },
    };
  }

  componentDidMount() {

    // load event data
    this.setState({
      startDate: "2022-03-07",
      events: [
        {
          id: 1,
          text: "Напредно програмирање"+ "<br>Професор: Невена",
          proffessor: "Невена",
          start: "2022-03-07T10:30:00",
          end: "2022-03-07T13:00:00"
        },
        {
          id: 2,
          text: "Алгоритми и податочни структури",
          proffessor: "Невена",
          start: "2022-03-08T09:30:00",
          end: "2022-03-08T11:30:00",
          backColor: "#6aa84f"
        },
        {
          id: 3,
          text: "Веројатност и статистика",
          proffessor: "Невена",
          start: "2022-03-08T12:00:00",
          end: "2022-03-08T15:00:00",
          backColor: "#f1c232"
        },
        {
          id: 4,
          text: "Калкулус",
          proffessor: "Невена",
          start: "2022-03-06T11:30:00",
          end: "2022-03-06T14:30:00",
          backColor: "#cc4125"
        }
      ]
    });
  }

  render() {
    const {...config} = this.state;
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={3}
            skipMonths={3}
            startDate={"2022-03-07"}
            selectionDay={"2022-03-07"}
            onTimeRangeSelected={ args => {
              console.log(this.state.events)
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
    );
  }
}

export default Calendar;
