const ajax = new XMLHttpRequest();
ajax.open("GET", "questions.json", true);

ajax.onload = function(){
  if(this.status === 200){
    var dataArray = JSON.parse(ajax.responseText);
    score = 0;
    total_marks = dataArray.length;
    attempted = 0;

    for(let i = 0; i<dataArray.length; i++){
      if(<?php $_POST[dataArray[i].question_name] != null ?>){
        attempted++;
        if(dataArray[i].answer == <?php $_POST[dataArray[i].question_name] ?>){
          score++;
        }
      }
    }

    <?php header("location: result.html");
    echo "your score is "+score;
    echo "your accuracy score is "+(score*100)/attempted; ?>
  }
  else{
    alert("Somthing went wrong!");
  }
}

ajax.send();
