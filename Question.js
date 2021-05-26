class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput("Enter your name here")
        this.input2 = createInput("Enter your answer here")
        this.button = createButton("Submit")
        this.question = createElement('h2')
        this.o1 = createElement('h3')
        this.o2 = createElement('h3')
        this.o3 = createElement('h3')
        this.o4 = createElement('h3')
    }

    hide(){
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();

}
    display(){
        this.title.html("My Quiz Game")
        this.title.position(350,10)

        this.question.html("Q - I have a neck but no head who am I?")
        this.question.position(200,70)

        this.o1.html("1. A river")
        this.o1.position(200,90)

        this.o2.html("2. A coin")
        this.o2.position(200,110)

        this.o3.html("3. A T-shirt")
        this.o3.position(200,130)

        this.o4.html("4. Pants")
        this.o4.position(200,90)
    }
}