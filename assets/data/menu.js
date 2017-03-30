/**
 * Created by liuzhichao on 2017/3/15.
 */
const menu = [
  {
    text:'活动管理',
    submenu:[
      {
        text:'活动管理',
        path:'eventManager'
      }
    ]
  },
  {
    text:'图库管理',
    submenu:[
      {
        text:'mask管理',
        path:'maskManager'
      },
      {
        text:'图库管理',
        path:'galleryManager'
      },
      {
        text:'底纹管理',
        path:'textureManager'
      }
    ]
  },
  {
    text:'商品模板管理',
    submenu:[
      {
        text:'品类管理',
        path:'categoryManager'
      }
    ]
  },
  {
    text:'生产订单管理',
    submenu:[
      {
        text:'众筹订单管理',
        path:'cfdOrderManager'
      }
    ]
  },
  {
    text:'权限管理',
    submenu:[
      {
        text:'用户管理',
        path:'userManager'
      },
      {
        text:'资源管理',
        path:'resourceManager'
      },
      {
        text:'角色管理',
        path:'roleManager'
      }
    ]
  }
];

export default menu;
