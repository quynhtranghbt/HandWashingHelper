'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('HandsWashingIntent');
    },

    HandsWashingIntent() {

        this.$speech.addText(['Hand-washing can protect you from coronavirus. Let\'s do this right!', 'Hand-washing can protect you from coronavirus. Let\'s wash your hands the right way.'])
        .addText('Are you ready?')

        let title = 'Hand Washing Helper'
        let content = 'Help people wash their hands the right way'
        let imageUrl = 'https://trang102.s3.amazonaws.com/hand-washing-4818792_1920.jpg'
        this.showImageCard(title, content, imageUrl)

        this.ask(this.$speech)
       
    },
    NoIntent(){
        this.$speech.addText("No problem.")
        .addText("Let me know when you're ready or say STOP to close the app.")

        this.ask(this.$speech)
    },

    StopIntent(){
        this.$speech.addText("Goodbye! Stay safe and wear the mask!")
        this.tell(this.$speech)
    },

    YesIntent(){
        let goodbyeMessage = ["Stay safe and wear your mask. Goodbye!", "Congratulations, you got clean hands! And remember not to touch your face.", "Stay homme, stay safe!", "Stay safe and keep social distancing.", "Stay home, save lives!"]
        this.$speech.addBreak("100ms")
        .addText('Wet your hands with water and lather with some good soap.')
        .addBreak("100ms")
        .addAudio('https://trang102.s3.amazonaws.com/part1.mp3')
        .addText('Rub the palms of two hands together.')
        .addBreak("100ms")
        .addAudio('https://trang102.s3.amazonaws.com/part2.mp3')
        .addText('Rub the back of your hands.')
        .addBreak("100ms")
        .addAudio('https://trang102.s3.amazonaws.com/part3.mp3')
        .addText('Rub between your fingers.')
        .addBreak("100ms")
        .addAudio('https://trang102.s3.amazonaws.com/part4.mp3')
        .addText('Now rub your thumbs.')
        .addBreak("100ms")
        .addAudio('https://trang102.s3.amazonaws.com/part5.mp3')
        .addText('Clean under your nails.')
        .addBreak("100ms")
        .addAudio('https://trang102.s3.amazonaws.com/part6.mp3')
        .addText('Rinse your hands under running water.')
        .addBreak("100ms")
        .addAudio('https://trang102.s3.amazonaws.com/part7.mp3')
        .addText('You are done. Now grab a clean towel or paper towel to dry your hands. Thank you for using Hand Washing Helper.')
        .addText(goodbyeMessage)

        let title = 'Hand Washing Helper'
        let content = 'Wet and soap your hands.\n Rub two palms. \n Rub the back of your hands.\n Rub your fingers \n Rub your thumbs. \n Clean your nails. \n Rinse your hands. \n'
        let imageUrl = 'https://trang102.s3.amazonaws.com/wash-hands-4919935_1920.jpg'
        this.showImageCard(title, content, imageUrl)

        this.tell(this.$speech)

        // add image card    
    }

    
});

module.exports.app = app;
