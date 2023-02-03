export default {
    state: {
        isCollapse: false, //控制菜单状态
        //面包屑数据
        tabsList: [{
            path: "/",
            name: "home",
            label: "首页",
            icon: "s-home",
            url: "Home/Home",
        }, ]
    },
    mutations: {
        //菜单收缩展开
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state, val) {
            console.log(val)
            // if (val.name !== 'home') { // 判断添加数据是否为首页
            //     const index = state.tabsList.findIndex(item => item.name === val.name)
            //     console.log(index)
            //     if (index === -1) { //不存在
            //         state.tabList.push(val)
            //     }
            // }
        }
    }
}