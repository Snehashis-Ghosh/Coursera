const ajax = new XMLHttpRequest();
ajax.open("GET", "questions.json", true);

ajax.onprogress = function(){
  console.log("loading");
}

ajax.onload = function(){
  if(this.status === 200){
    var dataArray = JSON.parse(ajax.responseText);
    count = 1;
    console.log(dataArray);
    htmlstring = "";
    for(let i = 0; i<dataArray.length; i++){
      htmlstring += '<div class="renderdiv"><h3>Question ' +count+ '</h3><p>' + dataArray[i].question + '</p><table><tr><td><input type="radio" name="' + dataArray[i].question_name + '" value="'+ dataArray[i].option1 + '">'+ dataArray[i].option1 + '</input></td><td><input type="radio" name="' + dataArray[i].question_name + '" value="' + dataArray[i].option2 + '">' + dataArray[i].option2 + '</input></td></tr><tr><td><input type="radio" name="' + dataArray[i].question_name + '" value="' + dataArray[i].option3 + '">' + dataArray[i].option3 + '</input></td><td><input type="radio" name="' + dataArray[i].question_name + '" value="' + dataArray[i].option4 + '">' + dataArray[i].option4 + '</input></td></tr></table></div>';
      count++;
    }

    htmlstring += '<button type="submit" name="submit">Submit</button>';
    document.getElementById("question").innerHTML = htmlstring;
  }
  else{
    alert("Somthing went wrong!");
  }
}

ajax.send();
