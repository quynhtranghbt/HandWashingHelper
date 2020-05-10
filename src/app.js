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
        this.$speech.addText(['Hand-washing can protect you from coronavirus. Let\'s do this right!', 'Let\'s wash your hands the right way']).addBreak("200ms")
       
        //.addAudio[link]
        .addText('Wet your hands with water and lather with some good soap')
        .addBreak("2000ms")
        //.addAudio[link]
        .addText('Scrub the front of your hands')
        .addBreak("2000ms")
        //.addAudio[link]
        .addText('Scrub the back of your hands')
        .addBreak("2000ms")
        //.addAudio[link]
        .addText('Now rub your thumbs.')
        .addBreak("2000ms")
        //.addAudio[link]
        .addText('Don\'t forget to clean under your nails')
        .addBreak("2000ms")
        //.addAudio[link]
        .addText('Scrub the front of your hands')
        .addBreak("2000ms")
        //.addAudio[link]
        .addText('Now you are done. Let’s grab a clean towel or paper towel to dry your hands')
        
        
        
        this.tell(this.$speech);
    },

    
});

module.exports.app = app;
