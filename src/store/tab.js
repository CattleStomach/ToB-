export default {
    state: {
        isCollapse: false //控制菜单状态
    },
    mutations: {
        //修改菜单状态
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}