import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css';
import VueEditorWrap from 'vue-ueditor-wrap';

import {Button,CarouselItem,Aside,Input,Row,Carousel,Link,Container,Main,Form,FormItem,Message,Header,Avatar, Menu,
  Submenu,MenuItem,MenuItemGroup,Table, TableColumn,Col,Select,Option,Radio,RadioGroup,Divider,Footer,Card,Pagination,
  DropdownMenu,Tabs,TabPane,Tag,Popover,Dialog,Upload, Breadcrumb,
  BreadcrumbItem} from 'element-ui';

import Axios from 'axios'

Vue.component('ueditor',VueEditorWrap);
Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.$http = Axios;
Vue.prototype.$message = Message;

Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(MenuItemGroup);
Vue.use(DropdownMenu);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Avatar);
Vue.use(Header);
Vue.use(Button);
Vue.use(Col);
Vue.use(Card);
Vue.use(Footer);
Vue.use(Pagination);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Link);
Vue.use(Row);
Vue.use(Aside);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Container);
Vue.use(Main);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Select);
Vue.use(Option);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Divider);
Vue.use(Popover);
Vue.use(Upload);
Vue.use(Dialog);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
