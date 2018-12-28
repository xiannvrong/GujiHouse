$(function(){ 
    $('.search_radio_getVal').children().click(function(e){ 
        $('.search_frame_val').text($(this)[0].innerText)
    })

     /*
     * 定义回掉函数
     * @param  number:跳转页
     * */
    function pageChange(i) {
        console.log("index is :" + i);
        Pagination.Page($(".ht-page"), i, 10000, 10);
    }
 
    /*
     * 初始化插件
     * @param  object:翻页容器对象
     * @param  function:回调函数
     * */
    Pagination.init($(".ht-page"), pageChange);
 
    /*
    * 首次调用
    * @param  object:翻页容器对象
    * @param  number:当前页
    * @param  number:总页数
    * @param  number:每页数据条数
    * */
    Pagination.Page($(".ht-page"), 3, 10000, 10);



    //樹形菜單
    

}) 