let stopwatch={}
stopwatch.size="4cm"
stopwatch.color= "black"
stopwatch.brand= "casio"
stopwatch.price= 50

stopwatch.howBig=function(s){
    alert(`it's ${s} big`)
}
stopwatch.colorIs=function(c){
    alert(`it's ${c}`)
}
stopwatch.costs=function(p){
    alert(`it costs ${p} euros`)
}
stopwatch.start=function(){
    alert("it's started")
}
stopwatch.howBig(stopwatch.size)
stopwatch.colorIs(stopwatch.color)
stopwatch.costs(stopwatch.price)
stopwatch.start()
