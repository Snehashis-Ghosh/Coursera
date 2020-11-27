const ajax = new XMLHttpRequest();
ajax.open("GET", "data.json", true);

ajax.onprogress = function(){
  console.log("loading");
}

ajax.onload = function(){
  if(this.status === 200){
    console.log("123");
    var dataArray = JSON.parse(this.responseText);
    count = 1;
    htmlstring = "";
    for(data in dataArray){
      htmlstring += '<div class="renderdiv"><h3>Question ' +count+ '</h3><p>' + data.question + '</p><table><tr><td><input type="radio" name="' + data.question_name + '" value="'+ data.option1 + '">'+ data.option1 + '</input></td><td><input type="radio" name="' + data.question_name + '" value="' + data.option2 + '">' + data.option2 + '</input></td></tr><tr><td><input type="radio" name="' + data.question_name + '" value="' + data.option3 + '">' + data.option3 + '</input></td><td><input type="radio" name="' + data.question_name + '" value="' + data.option4 + '">' + data.option4 + '</input></td></tr></table></div>';
      count++;
    }
    document.getElementById("question").innerHTML = htmlstring;
  }
  else{
    alert("Somthing went wrong!");
  }
}

ajax.send();
