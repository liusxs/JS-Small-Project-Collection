// 获取选项卡导航菜单所有li并返回一个li列表集合
var btn_tab_nav_li = document.getElementById('tab_nav').getElementsByTagName('li')
// 获取选项卡项目内容所有li并返回一个li列表集合
var btn_tab_item_li = document.getElementById('tab_item').getElementsByTagName('li')

// 初始化选项卡
for (i = 0; i < btn_tab_item_li.length; i++) {
    btn_tab_item_li[i].style.display = 'none';
}
// 默认第一个显示
btn_tab_item_li[0].style.display = 'block';

// 循环遍历选项卡导航菜单li
for (k = 0; k < btn_tab_nav_li.length; k++) {
    // 为所有li设置自定义属性index，用来检索选项卡项目
    btn_tab_nav_li[k].setAttribute('index', k);

    btn_tab_nav_li[k].onclick = function () {
        for (x = 0; x < btn_tab_nav_li.length; x++) {
            btn_tab_nav_li[x].removeAttribute('class');
        }

        // 设置点击样式
        this.className = 'btn-active';
    }
}