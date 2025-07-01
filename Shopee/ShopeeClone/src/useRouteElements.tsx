import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'
import Profile from './pages/Profile'

const isAuthenticated = true // Giả sử người dùng đã đăng nhập, bạn có thể thay đổi giá trị này dựa trên trạng thái xác thực thực tế của người dùng
// const isAuthenticated = false // Giả sử người dùng chưa đăng nhập, bạn có thể thay đổi giá trị này dựa trên trạng thái xác thực thực tế của người dùng
function ProtectedRoute() {
  // Route này sẽ được sử dụng cho các route yêu cầu xác thực
  // Ví dụ: trang chủ, trang sản phẩm, trang giỏ hàng, v.v
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  // Route này sẽ được sử dụng cho các route không yêu cầu xác thực
  // Ví dụ: trang đăng nhập và đăng ký
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <>
              <RegisterLayout>
                <Login />
              </RegisterLayout>
            </>
          )
        },
        {
          path: 'register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
