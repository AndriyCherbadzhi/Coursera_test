(function(window) {

    const speakWord = "Hello";

    function helloSpeaker(name) {
        console.log(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;

})(window);
