## Dự án Shopee Clone Typescript

## Chức năng trong dự án

- [ ] **Authentication module**: Quản lý bằng JWT  
  - [ ] Đăng ký  
  - [ ] Đăng nhập  
  - [ ] Đăng xuất  

- [ ] **Trang danh sách sản phẩm**  
  - [ ] Có phân trang  
  - [ ] Sort (sắp xếp) theo từng thuộc tính sản phẩm  
  - [ ] Filter nâng cao theo từng thuộc tính sản phẩm  
  - [ ] Tìm kiếm sản phẩm  

- [ ] **Trang chi tiết sản phẩm**  
  - [ ] Hiển thị thông tin chi tiết  
  - [ ] Ảnh hiển thị theo slider + hover zoom effect  
  - [ ] Mô tả thì hiển thị rich text dạng WYSIWYG HTML  
  - [ ] Có chức năng mua hàng  

- [ ] **Giỏ hàng**  
  - [ ] Quản lý đơn hàng: Thêm, sửa, xóa sản phẩm  
  - [ ] Mua hàng  

- [ ] **Quản lý Profile khách hàng**  
  - [ ] Update thông tin cá nhân  
  - [ ] Upload Avatar  
  - [ ] Đổi mật khẩu  
  - [ ] Xem tình trạng đơn hàng  


## Công nghệ sử dụng
- UI / CSS Library: Tailwindcss
- State Management: React Query cho async state và React Context cho state thường
- Form Management: React Hook Form
- Router: React Router
- Build tool: Vite
- API: Rest API 
- Hỗ trợ đa ngôn ngữ với react-i18next
- Hỗ trợ SEO với React Helmet
- Mô hình hóa các component với story book
- Unit Test
- Và còn nhiều thứ nữa khi làm nếu phát sinh sẽ áp dụng sau...

### Cài đặt package cho dự án Vite React TS

### Cài các dependency

### Bộ ESLint và Prettier trước

> Chúng ta sẽ cài hỏi nhiều package 1 tí vì chúng ta setup từ đầu, còn Create React App setup sẵn 1 số thứ về ESLint rồi.

Dưới đây là những dependency mà chúng ta cần cài:
- **ESLint**: linter (bộ kiểm tra lỗi) chính
- **Prettier**: code formatter chính
- **@typescript-eslint/eslint-plugin**: ESLint plugin cung cấp các rule cho Typescript
- **@typescript-eslint/parser**: Parser cho phép ESLint kiểm tra lỗi Typescript.
- **eslint-config-prettier**: Bộ config ESLint để vô hiệu hóa các rule của ESLint mà xung đột với Prettier.
- **eslint-plugin-import**: Để ESLint hiểu về phép `import ...` trong source code.
- **eslint-plugin-jsx-a11y**: Kiểm tra các vấn đề liên quan đến accessibility (Tình thân thiện website, ví dụ cho thiết bị máy đọc sách).
- **eslint-plugin-react**: Các rule ESLint cho React.