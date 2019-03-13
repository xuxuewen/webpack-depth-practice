// import _ from 'lodash';

// function component(){
//   let element = document.createElement('div');
//   element.innerHTML = _.join(['Hello','Webpack'],'');
//   return element
// }

// document.body.appendChild(component());
// document.getElementById('load').addEventListener('click',function(){
//   import(
//     /* webpackPrefetch: true */
//     'lodash'
//   )
//   .then(_=>{
//     console.log(_)
//   })

  // import(
  //   /* webpackPreload: true */
  //   './node_mudles/echarts/dist')
  //   .then((d)=>{
  //     console.log(d)
  //     let local = 'en';
  //     import(
  //       /* webpackPrefetch:true */
  //       /* webpackChunkName:"my-[index]-name-[request]" */
  //       `./data/language.${local}.json`)
  //     .then(_=>{
  //       console.log(_.default.name)
  //     })

  //   })
// })

// document.getElementById('load2').addEventListener('click',function(){

//   import(
//     /* webpackPrefetch:true */
//     'lodash'
//   )
//   .then((_)=>{
//     console.log(_)
//   })
// })
import(
  /* webpackChunkName: 'lodash' */
  /* webpackPrefetch: true */
  'lodash'
)

import(
  /* webpackChunkName: 'echarts' */
  /* webpackPrefetch: true */
  'echarts')

import chart from './chart';

// document.getElementById('load2').addEventListener('click',function(){

//   // import(/* webpackPreload: true */ 'echarts');
//   chart();
// })

document.getElementById('chart').addEventListener('click',function(){
  console.log('sdsd')
  console.log(lodash)
  chart();
})

import home from './home'

console.log(home)
