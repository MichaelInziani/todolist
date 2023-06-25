//JAVASCRIPT CODE FOR THE DATE

module.exports.getDate = function () {
    const today = new Date();
    // let currentDay = today.getDay();
    // let day = "";

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    return today.toLocaleDateString("en-US", options);

    //USING IF ELSE STATEMENT TO GET THE WEEKDAY/WEEKEND
  //  if (currentDay === 6 || currentDay === 0) {
    //    day = "Weekend";
   // }
   // else {
   //     day = "Weekday";
   // }
   // res.render("list", { kindOfDay: day });

   //USING SWITCH STATEMENT

   // switch (currentDay) {
       // case 0:
        //   day = "Sunday";
          //  break;

       // case 1:
          //  day = "Monday";
          //  break;

       // case 2:
          //  day = "Tuesday";
         //  break;

      //  case 3:
        //    day = "Wednesday";
         //   break;

       // case 4:
        //    day = "Thursday";
        //    break;

       // case 5:
       //     day = "Friday";
       //     break;

      //  case 6:
      //      day = "Saturday";
       //     break;

    //   default:
      //      console.log("Error: the current day is equal to: " + currentDay);
   // }

   //ALTERNATIVE WAY

    //const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   // var day = days[today.getDay()];

   // res.render("list", { listTitle: day });

}

module.exports.getDay = function () {
    const today = new Date();
    // let currentDay = today.getDay();
    // let day = "";

    const options = {
        weekday: "long"
    }

    return today.toLocaleDateString("en-US", options);

}