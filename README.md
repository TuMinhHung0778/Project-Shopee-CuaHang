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

- ESLint : linter (bộ kiểm tra lỗi) chính

- Prettier : code formatter chính

- @typescript-eslint/eslint-plugin : ESLint plugin cung cấp các rule cho Typescript

- @typescript-eslint/parser : Parser cho phép ESLint kiểm tra lỗi Typescript.

- eslint-config-prettier : Bộ config ESLint để vô hiệu hóa các rule của ESLint mà xung đột với Prettier.

- eslint-plugin-import : Để ESLint hiểu về phép `import ...` trong source code.

- eslint-plugin-jsx-a11y : Kiểm tra các vấn đề liên quan đến accessibility (Tình thân thiện website, ví dụ cho thiết bị máy đọc sách).

- eslint-plugin-react : Các rule ESLint cho React.

- eslint-plugin-prettier : Dùng thêm 1 số rule Prettier cho ESLint

Chạy câu lệnh trong terminal

```bash

yarn add eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-ally eslint-plugin-react
eslint-plugin-prettier -D

```

Cấu hình ESLint

Tạo file `.eslintrc` tại thư mục root

```json
{
  "extends": [
    // Chúng ta sẽ dùng các rule mặc định từ các plugin mà chúng ta đã cài.
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    // Disable các rule mà eslint xung đột với prettier.
    // Để cái này ở dưới để nó override các rule phía trên!.
    "eslint-config-prettier",
    "prettier"
  ],
  "plugins": ["prettier"],
  "settings": {
    "react": {
      // Nói eslint-plugin-react tự động biết version của React.
      "version": "detect"
    },
    // Nói ESLint cách xử lý các import
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "env": {
    "node": true
  },
  "rules": {
    // Tắt rule yêu cầu import React trong file jsx
    "react/react-in-jsx-scope": "off",
    // Cảnh báo khi thẻ <a target="_blank"> mà không có rel="noreferrer"
    "react/jsx-no-target-blank": "warn",
    // Tăng cường một số rule prettier (copy từ file .prettierrc qua)
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
      }
    ]
  }
}
```

Tạo file `.eslintignore`

```json
node_modules/
dist/
```

Tạo file `.prettierrc`

```json
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```

Tạo file `.prettierignore`

```json
node_modules/
dist/
```

Thêm script mới vào `package.json`

```json
  "scripts": {
    "lint": "eslint --ext ts,tsx src/",
    "lint:fix": "eslint --fix --ext ts,tsx src/",
    "prettier": "prettier --check \"src/**/*.{ts,tsx,css,scss}\"",
    "prettier:fix": "prettier --write \"src/**/*.{ts,tsx,css,scss}\""
  },
```

### Cài editorconfig

Tạo file `.editorconfig` ở thư mục root

```EditorConfig
[*]
indent_size = 2
indent_style = space
```

### Cấu hình tsconfig.json

Set `"target": "ES2015"` và `"baseUrl": "src"` trong `compilerOptions`

### Cài tailwindcss

Cài các package dưới đây: Tham khảo [https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite)

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Cấu hình file config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Thêm vào file: `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Cấu hình vite config

Cài package `@types/node` để sử dụng node js trong file ts không bị lỗi

```bash
yarn add -D @types/node
```

file vite.config.ts

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    devSorcemap: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
});
```

### Cài extension và setup VS Code

Các Extension nên cài:

- ESLint

- Prettier - Code formatter

- Tailwindcss

- EditorConfig for VS Code

Cấu hình VS Code:

- Bật Format On Save
- Chọn Default Formatter là Prettier

> Có 3 môi trường khi làm việc
>
> 1. Môi trường VS Code, khi chúng ta đưa chuột vào click thì chạy đến đúng file
> 2. Môi trường ES Lint
> 3.Môi trường Terminal\*
