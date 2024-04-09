import MainLayout from "./components/layout/MainLayout"
import CreateAmin from "./pages/CreateAdmin/CreateAdmin"
import CreateFaculty from "./pages/CreateFaculty/CreateFaculty"
import CreateStudent from "./pages/CreateStudent/CreateStudent"
import Dashboard from "./pages/Dashboard/Dashboard"
export const paths=[
  {
      path:'/admin',
      element: <App></App>,
      children:[
          {
              path:'dashboard',
              element :<Dashboard></Dashboard>
          },
          {
              path:'create-admin',
              element: <CreateAmin></CreateAmin>
          },
          {
              path:'create-student',
              element:<CreateStudent></CreateStudent>
          },
          {
              path :'create-faculty',
              element:<CreateFaculty></CreateFaculty>
          }
      ]
  },
  
]
function App() {
 

  return (
    <>
      <MainLayout></MainLayout>
    </>
  )
}

export default App
