# Lưu ý trước khi chạy chương trình:
1. Chuẩn bị môi trường:
- NodeJS
- VueJS (Nếu dùng VueJS làm FE)
- AngularJS (Nếu dùng AngularJS làm FE)
- ReactJS (Nếu dùng ReactJS làm FE)
- MySQL
- Postman (Để test API)
2. Vào folder BackEnd:
- Chạy lệnh console trong VSC: npm i
- Tạo 1 file .env khai báo các trường sau: DB_NAME, DB_ROOT_USER, DB_ROOT_PASSWORD, DB_DIALECT, DB_HOST, DB_PORT, secret_key (secret_key là bất kỳ)
- Mở MySQL
- npm start để khởi động
3. Vào folder FrontEnd (Cd vào Framework muốn dùng để chạy câu lệnh):
 a. Nếu chọn VueJS làm FE:
    - Kiểm tra xem đã cài đặt VueJS chưa: vue --version (nếu chưa cài đặt thì mở CMD máy và chạy lệnh: npm install --global vue-cli)
    - Chạy lệnh console trong VSC: npm i
    - npm run serve để khởi động
 b. Nếu chọn AngularJS làm FE:
    - Kiểm tra xem đã cài đặt AngularJS chưa: ng --version (nếu chưa cài đặt thì mở CMD máy và chạy lệnh: npm install -g @angular/cli)
    - Chạy lệnh console trong VSC: npm i
    - ng serve để khởi động
 c. Nếu chọn ReactJS làm FE:
    - Kiểm tra xem đã cài đặt ReactJS chưa: react --version (nếu chưa cài đặt thì mở CMD máy và chạy lệnh: npm install -g create-react-app)
    - Chạy lệnh console trong VSC: npm i
    - npm start để khởi động

# Đường dẫn API khi chạy chương trình:
- http://localhost:8080/api/v1/ (chi tiết xem trong folder routes trong folder BackEnd)

