 
 
 
 
 
 // html()    //修改某一个元素中的内容
        /**
        html of method chang innerhtml of Elements
        options(elemnts|str)
        */
    //    function html(el,str){
    //     el.innerHTML = str;
    //     return el;
    // }
    // var div = document.getElementsByTagName('div')[0]
    // html(div,'真好')





    // html()    //修改某一个元素中的内容
    /**
    html of method chang innerhtml of Elements
    options(elemnts|str)
    */
    // function html(el,str){
    //     el.innerHTML = str;
    //     return el;
    // }
    // var div = document.getElementsByTagName('div')[0]
    // html(div,'真好')



    
    

    function hide(el){
        var val = 1;
        el.style.opacity =1 ;
        var timer = setInterval(function(){
            val -= 0.1;
            if(val<=0){
                el.style.opacity = 0;
                el.style.display = 'none';
                clearInterval(timer);
                return
            }
        el.style.opacity = val;
        },30)
        return el;
    }


    // show(box);
    // show 显得hide 的相反方法
    function show(el){
        el.style.display = 'block'
        var val = 0;
        el.style.opacity = val;

        var timer = setInterval(function(){
            val += 0.1;
            if(val >= 1){
                el.style.opacity = 1;
                // el.style.display = 'none';
                clearInterval(timer);
                return
            }
        el.style.opacity = val;
        },50)
        return el;
    }