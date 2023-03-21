//获取所有小图片下的a标签
var container_small_a_list = document.getElementById('container_small').getElementsByTagName('a')

// 循环遍历所有小图a标签并注册移入事件
for(var i = 0; i < container_small_a_list.length; i++ ){
    // 注册移入事件
    container_small_a_list[i].onmouseenter = function(){
        // 将小图的a标签的href属性赋值给大图的src属性
        document.getElementById('container_big_image').src = this.href;
        //防止跳转页面
        return false;
    }
}