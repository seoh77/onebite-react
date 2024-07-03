/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind의 class 이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가
  // src 경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

