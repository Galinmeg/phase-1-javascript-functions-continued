function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
    }
    saturdayFun()

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.` 
    }
    mondayWork()

    function wrapAdjective (style="*") {
        return function(stringOne="special"){
          return `You are ${style}${stringOne}${style}!`
        }
      }

