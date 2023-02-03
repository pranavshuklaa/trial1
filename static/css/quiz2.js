// questionnaire for anxiety
const questionnaire=[
    {

        question:"1. I felt fearful",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        e:"5"
    },
    {
        question:"2. I felt anxious",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        e:"5"
    },
    {

        question:"3. I felt worried",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        e:"5"
    },
    {

        question:"4. I felt that it is hard to focus on anything than my anxiety.",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        e:"5"
    },
    {

        question:"5. I felt nervous",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        e:"5"
    },
    {

        question:"6. I felt uneasy",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        e:"5"
    },
    {

        question:"7. I felt tense",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        e:"5"
    },
];

const question= document.querySelector('.question');
const option1=document.querySelector('#option1')
const option2=document.querySelector('#option2')
const option3=document.querySelector('#option3')
const option4=document.querySelector('#option4')
const option5=document.querySelector('#option5')
const next=document.querySelector('#next')
const answers=document.querySelectorAll('.answer')
const showScore=document.querySelector('#showScore')
const showProblem=document.querySelector('#showProblem')
const mainq=document.querySelector('#mainq')
const optionId=document.querySelector('#optionId')
const submit=document.querySelector('#submit')
const greet=document.querySelector('#greet')
const note=document.querySelector('#note')

let quesCount=0;
var score=0;
const loadQuestion=()=>{
    const questionList= questionnaire[quesCount]
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
    option5.innerHTML=questionList.e;
}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((currAnsElem)=>{
        if(currAnsElem.checked){
            answer=currAnsElem.id;
        }
    });
    return answer;
};

const deSelectAll=()=>{
    answers.forEach((currAnsElem)=>currAnsElem.checked=false)
}
submit.disabled=true

next.addEventListener('click',()=>{
    // greet.innerHTML=``;
    // note.innerHTML=``;
    const checkedAnswer=getCheckAnswer();
    const result=console.log(checkedAnswer);

    if(checkedAnswer==1){
        score+=1
    }
    else if(checkedAnswer==2){
        score+=2
    }
    else if(checkedAnswer==3){
        score+=3
    }
    else if(checkedAnswer==4){
        score+=4
    }
    else if(checkedAnswer==5){
        score+=5
    }
    // else{
    //     score=score
    // }
    
    else{
        a=confirm('Do you want to skip this question?')
        if(a){
            loadQuestion();
        }
        else{
            quesCount-=1;
            loadQuestion();
            deSelectAll();
        }
    }

    score=score;
    quesCount++;
    deSelectAll();
    
    // else{
    //     a=confirm('Do you want to skip this question')
    //     if(a){
    //         alert('Question Skipped')
    //     }
    //     else{
    //         quesCount-=1;
    //         loadQuestion();
    //         deSelectAll();
    //     }
    // }
    
    if(quesCount<questionnaire.length-1){
        loadQuestion();
    }
    else if(quesCount<questionnaire.length){
        next.innerHTML=`<h3>Submit</h3>`
        loadQuestion();
        submit.disabled=false;
        next.disabled=true;
        next.innerHTML=`<h3>End of Questions</h3>`
    }

}),

submit.addEventListener('click',()=>{
    // submit.addEventListener("hover",disable1);
    let confirmation=confirm('Do you want to submit?')
    if(confirmation){
    const checkedAnswer=getCheckAnswer();
    const result=console.log(checkedAnswer);

   if(checkedAnswer==1){
        score+=1
    }
    else if(checkedAnswer==2){
        score+=2
    }
    else if(checkedAnswer==3){
        score+=3
    }
    else if(checkedAnswer==4){
        score+=4
    }
    else if(checkedAnswer==5){
        score+=5
    }
    else{
        score=score
    }
        //for blanking
        optionId.innerHTML=``
        mainq.innerHTML=``  
        quesId.innerHTML=``
        submit.disabled=true
        submit.innerHTML=`<h3>Test Submitted</h3>`
        next.disabled=true
        next.innerHTML=`
        <h3>End of Test</h3>
        `
        console.log("You scored ${score}/35")
        showScore.innerHTML=`
         Description
        `;
        showScore.classList.remove('scoreArea')
        const val=score
        console.log(val)
        if(val>=0 && val<=4){
            submit.innerHTML=`<h4>Minimal Depression</h4>`
        }
        else if(val>5 && val<=9){
            submit.innerHTML=`<h4>Mild Depression</h4>`
        }
        else if(val>10 && val<=14){
            submit.innerHTML=`<h4>Moderate Depression</h4>`
        }
        else if(val>15 && val<=19){
            submit.innerHTML=`<h4>Moderately Severe Depression</h4>`
        }
        else{
            submit.innerHTML=`<h4>Severe Depression</h4>`;
        }
        showProblem.innerHTML=`<button class="btn" onclick="location.reload()">Give Test Again </button> <br><button class="btn" onclick="window.location.href='/solution2'">See Solutions</button> <br>`
        showProblem.classList.remove('problemArea')
    }
    else{
        alert('Quiz was not submitted')
    }

    }

);