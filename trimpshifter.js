var _ts_enabled=true,
_ts_gameLoopId,
_ts_gameLoopInterval=2000,
_ts_i=0
;



setTimeout(Startup, 2000);

function Startup() {
    gameLoopId=setInterval(MainLoop,_ts_gameLoopInterval);
}

function MainLoop() {
    if(!_ts_enabled) {
        clearInterval(_ts_gameLoopId);
        return;
    }

console.log(_ts_i++);

}