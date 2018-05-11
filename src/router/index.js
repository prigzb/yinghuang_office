import Vue from 'vue'
import Router from 'vue-router'
import gzbfdc from '@/components/gzbfdc'
import bangonggaikuang from '@/components/bangonggaikuang'
import zhoubianpeitao from '@/components/zhoubianpeitao'
import xieyijiudian from '@/components/xieyijiudian'
import kongjianbuju from '@/components/kongjianbuju'
import shitangcanyin from '@/components/shitangcanyin'
import zhedie from '@/components/zhedie'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'gzbfdc',
      component: gzbfdc
    },
    {
      path: '/bangonggaikuang',
      name: 'bangonggaikuang',
      component: bangonggaikuang
    },
    {
      path: '/xieyijiudian',
      name: 'xieyijiudian',
      component: xieyijiudian
    },
    {
      path: '/zhoubianpeitao',
      name: 'zhoubianpeitao',
      component: zhoubianpeitao
    },
    {
      path: '/kongjianbuju',
      name: 'kongjianbuju',
      component: kongjianbuju
    }, {
      path: '/shitangcanyin',
      name: 'shitangcanyin',
      component: shitangcanyin
    }, {
      path: '/zhedie',
      name: 'zhedie',
      component: zhedie
    }
  ]
})
