/*
 * @Author: your name
 * @Date: 2019-11-18 21:47:33
 * @LastEditTime: 2019-11-19 08:26:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-press/docs/.vuepress/config.js
 */
module.exports = {
  title: '宏林的博客', // 设置网站标题
  description: '胸有丘壑 目有山河 脚踏星空 仰望实地',
  base: '/Vblog/',
  themeConfig: {
    nav: [],
    sidebar: [
      {
        title: '面试相关',
        children: [
          {
            title: 'javascript',
            children: [
              ['/javascript/手写API', '手写JavaScript API'],
            ],
            sidebarDepth: 1
          },
          {
            title: 'vue',
            children: [
              ['/vue/常用技巧', '常用技巧'],
            ],
            sidebarDepth: 1
          }
        ]
      }
    ],
    sidebarDepth: 2
  }
}