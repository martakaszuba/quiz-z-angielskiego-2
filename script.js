
var count = 0;
var ansArr = [];
var questions = [
      ["He went on boasting about his achievements, _____ annoyed everybody at the party", "what", "that", "which", "who"],
      ["_____ clever he was, he couldn't figure out the answer to this question", "Although", "However", "Despite","Much as"],
      ["This is the first time they _____ to India", "have been", "had been", "were", "are"],
      ["The spokesman said that the change of plans was _____ financial considerations", "because", "since", "due to", "resulting"],
      ["Congratulations _____ passing your driving test. Good job!", "of", "with", "on", "for"],
      ["I'd rather you _____ so fast", "don't drive", "didn't drive", "won't drive", "not driving"],
      ["I' ll call you as soon as I _____ his decision", "will know", "have known", "know", "will have known"],
      ["I prefer quiet evenings at home _____ wild parties at my friends' place", "to", "than", "from", "over"],
      ["I read two magazines _____ the flight to London", "across", "while", "in", "during"],
      ["That _____ be Tom at the door - he is at school now.", "can't", "couldn't", "mustn't", "needn't"]
      ];

var questHTML = document.querySelector("#questions");
Create(0);

function Create(num){
        questHTML.innerHTML =`<div class="pr">
        <h4><span class="col">${count+1}.</span> ${questions[num][0]}</h4>
        <div class="inner">
        <label class="container"><span class="ans">${questions[num][1]}</span>
          <input type="radio" name="radio" value="1">
          <span class="checkmark"></span>
        </label>
        <label class="container"><span class="ans">${questions[num][2]}</span>
          <input type="radio" name="radio" value="2">
          <span class="checkmark"></span>
        </label>
        <label class="container"><span class="ans">${questions[num][3]}</span>
          <input type="radio" name="radio" value="3">
          <span class="checkmark"></span>
        </label>
        <label class="container"><span class="ans">${questions[num][4]}</span>
          <input type="radio" name="radio" value="4">
          <span class="checkmark"></span>
        </label>
        </div>
        <div class="btm">
        <button class="btn btn-info">Dalej</button>
        </div>
        </div>
        `  

    document.querySelector(".btn").addEventListener("click", function(){
    var checked = document.querySelector('input[type="radio"]:checked');
    if (!checked){
        checked = null;
    }
    else {
        checked = checked.value;
    }
    if (count<9){
       ansArr.push(checked);
       count++;
       Create(count);   
    }
    else if (count === 9){
     ansArr.push(checked);
     count = undefined;
     ansArr = ansArr.map(function(val){
         return Number(val);
     })
     ansArr = JSON.stringify(ansArr);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","answers.php?q="+ansArr, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
   if (this.readyState == 4 && this.status == 200) {
       results(this.responseText);
    }
}
    }
})
}

function results(str){
    var txt="";
    switch (Number(str)){
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            txt ="pytań";
            break;
        case 1:
            txt ="pytanie";
            break;
        case 2:
        case 3:
        case 4:
            txt ="pytania";
            break;
    }
    questHTML.innerHTML =`<div class="results">
    <h4>Odpowiedziałeś poprawnie na ${str} ${txt}</h4>
    </div>`
}