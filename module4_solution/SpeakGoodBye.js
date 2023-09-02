(function(window) {

    const speakWord = "Good Bye";

    function byeSpeaker(name) {
        console.log(speakWord + " " + name);
    }

    window.byeSpeaker = byeSpeaker;

})(window);
