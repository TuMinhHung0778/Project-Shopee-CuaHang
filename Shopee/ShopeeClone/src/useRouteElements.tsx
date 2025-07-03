import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'
import Profile from './pages/Profile'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

// Component để kiểm tra quyền truy cập cho các route yêu cầu đăng nhập
// Nếu người dùng chưa đăng nhập, sẽ chuyển hướng đến trang đăng nhập
// Nếu đã đăng nhập, sẽ hiển thị phần tử con (Outlet) bên trong
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

// Component để kiểm tra quyền truy cập cho các route không yêu cầu đăng nhập
// Nếu người dùng đã đăng nhập, sẽ chuyển hướng về trang chủ
// Nếu chưa đăng nhập, sẽ hiển thị phần tử con (Outlet) bên trong
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

// Hàm trả về các phần tử định tuyến (route elements) cho ứng dụng
export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '', // Route cha cho các route không yêu cầu đăng nhập
      element: <RejectedRoute />, // Dùng RejectedRoute để kiểm tra
      children: [
        {
          path: 'login', // Đường dẫn /login
          element: (
            // Bọc trang Login bằng RegisterLayout
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: 'register', // Đường dẫn /register
          element: (
            // Bọc trang Register bằng RegisterLayout
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '', // Route cha cho các route yêu cầu đăng nhập
      element: <ProtectedRoute />, // Dùng ProtectedRoute để kiểm tra
      children: [
        {
          path: 'profile', // Đường dẫn /profile
          element: (
            // Bọc trang Profile bằng MainLayout
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '', // Route cho trang chủ
      index: true, // Route mặc định (trang chủ: /)
      element: (
        // Bọc trang ProductList bằng MainLayout
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    }
  ])
  // Trả về các phần tử định tuyến để sử dụng trong App
  return routeElements
}
