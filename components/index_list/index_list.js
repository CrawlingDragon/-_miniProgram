// components/index-list/index_list.js
import list from "./data";
Component({
  options: {
    addGlobalClass: true,
    pureDataPattern: /^_/,
  },
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    list: list,
    show2: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChoose(e) {
      console.log(e);
    },
  },
});
