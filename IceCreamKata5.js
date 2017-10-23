

inarray=false;
var cone= [];
var flavors = ["chocolate","vanilla","banana","rocky road","mint chocolate chip","coffee"];
flavorlist=flavors.length;
alert("Here are the flavors to choose from: "+flavors);

for(scoops=0;scoops < 3;scoops++){
	//Perform this operation until the variable is equal to a specific value
	do{
		var flavor = prompt("What type of ice cream do you want?");
		for(index=0;index < flavorlist;index++){
			if (flavor == flavors[index]){
				inarray = true;
				}
		}	
		if(inarray == false){ 
			alert(flavor+" is not a flavor we offer.")	
		}
	}
	while(inarray == false)
	alert("Here is your "+flavor+" scoop");
	cone[scoops]=flavor;
}
coneString = cone.join(' ');
alert("Enjoy your cone with "+coneString.toString());
