class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2  = createElement('h4')
    this.option3  = createElement('h4')
    this.option4  = createElement('h4')
    this.input2 = createInput("Enter Correct Option Number");




    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   this.input2.hide();
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What starts and Ends with the letter 'E', but only has one letter");
    this.question.position(150, 50)
    this.input2.position(350,230)
    this.option1.html("1. Envelope");
    this.option2.html("2. Everyone");
    this.option3.html("3. I don't Know");
    this.option4.html("4. Example");
    this.option1.position(150, 100);
    this.option2.position(150, 120);
    this.option3.position(150, 140);
    this.option4.position(150, 160);
    

    


    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Your answer has been submitted");
    this.message.position(150, 300);
        this.message();
    })


  }
}
