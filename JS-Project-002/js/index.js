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

for ( k = 0; k < btn_tab_nav_li.length; i++) {
    
}