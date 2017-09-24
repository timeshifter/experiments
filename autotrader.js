var at_trades = [], at_timerid = -1;

setTimeout(Init, 2000);

function Init() {
    console.log('Autotrader starting');
    at_timerid = setInterval(LogTrade, 15 * 1000);
}


function LogTrade() {
    at_trades.push([(new Date()), $('span[data-bind="text: summary.displayLast()"]').html()]);

}