// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return distance>42? distance-42:42-distance
}

function distanceFromHqInFeet(distance){
    const block =264
    return distanceFromHqInBlocks(distance)*block

}
function distanceTravelledInFeet(start, destination){


    
    return start<destination? (destination-start)*264:(start-destination)*264
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<=400) {
        return 0
    } 
    else if(distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<2000){
        return ((distanceTravelledInFeet(start, destination)-400)*0.02) 
        
    }

    else if(distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<2500){
        return 25

    }
    else{
        return 'cannot travel that far'
    }
}