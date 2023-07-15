function sameDate(a, b){
    if(new Date(a).getDate()==new Date(b).getDate()){
        if(new Date(a).getMonth()==new Date(b).getMonth()){
            return true;
        }
    }
    return false;
}

function sameDateAndYear(a, b){
    if(new Date(a).getDate()==new Date(b).getDate()){
        if(new Date(a).getMonth()==new Date(b).getMonth()){
            if(new Date(a).getFullYear()==new Date(b).getFullYear()){
                return true;
            }
        }
    }
    return false;
}

function sameTimeOfDay(a,b){
    if(new Date(a).getHours()==new Date(b).getHours()){
        if(new Date(a).getMinutes()==new Date(b).getMinutes()){
            return true;
        }
    }
    return false;
}
function sameExactTimeOfDay(a,b){
    if(new Date(a).getHours()==new Date(b).getHours()){
        if(new Date(a).getMinutes()==new Date(b).getMinutes()){
            if(new Date(a).getMilliseconds()==new Date(b).getMilliseconds()){
                return true;
            }
        }
    }
    return false;
}
