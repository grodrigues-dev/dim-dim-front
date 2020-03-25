import moment from 'moment'

function BusinessDay (days){
    const dates = []
    let n = 0;
    let day = moment().add(n, 'days').format('dddd')

    while(dates.length<days){
      if(day!='Saturday' && day!="Sunday"){
        dates.push(moment().add(n, 'days').format('DD/MM/YYYY'))
        n++
        day = moment().add(n, 'days').format('dddd')
      } 
      else {
        n++;
        day = moment().add(n, 'days').format('dddd')
      }
    }
    return dates;
}

export default BusinessDay;