
const course = [{
    path: '/course',
    component: () => import('@/views/Course/Course_HDK'),
},
{ path: '/title', component: () => import('@/views/Course/Title_HDK') },
{path:'/defalt',component:()=>import('@/views/Course/Defalt')}
]



export default course
