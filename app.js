function Stopwatch() {
    let startTime = 0
    let endTime = 0
    let pauseStart = 0
    let pauseEnd = 0
    let state = 'stopped'
    let temp = 0
    let totalTimePaused = 0
    this.start = function () {
        if (state === 'running') {
            console.log("Stopwatch already Started");
            return
        }
        if (state === 'paused') {
            console.log("Stopwatch was Paused and now started");
            state = 'running'
            pauseEnd = Date.now()
            temp = pauseEnd - pauseStart
            totalTimePaused = totalTimePaused + temp
            return
        }
        if (state === 'stopped') {
            this.reset()
            console.log("Stopwatch is Started")
            startTime = Date.now()
            state = 'running'
            return
        }
    }

    this.end = function () {
        if (state === 'running') {
            endTime = Date.now()
            console.log(`time Escaped: ${((endTime - startTime) - totalTimePaused) / 1000} Seconds`);
            this.reset()
            state = 'stopped'
            return
        }
        if (state === 'paused') {
            pauseEnd = Date.now()
            endTime = Date.now()
            temp = pauseEnd - pauseStart
            totalTimePaused = totalTimePaused + temp
            console.log("Stopwatch was Paused and now stopped");
            console.log(`time Escaped: ${((endTime - startTime) - totalTimePaused) / 1000} Seconds`);
            state = 'stopped'
            return
        }
        if (state === 'stopped') {
            console.log('Stopwatch is not Started');
            return
        }
    }

    this.pause = function () {
        if (state === 'stopped') {
            console.log('Stopwatch is already stopped...start stopwatch first');
            return
        }
        if (state === 'running') {
            state = 'paused'
            console.log('Stopwatch is paused now');
            pauseStart = Date.now()
            return
        }
        if (state === 'paused') {
            console.log('Stopwatch is alredy paused');
            return
        }
    }

    this.reset = function () {
        starTime = 0
        endTime = 0
        pauseStart = 0
        pauseEnd = 0
        state = 'stopped'
        return
    }

}