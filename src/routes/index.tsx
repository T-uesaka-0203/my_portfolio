import { Route, Routes } from "react-router-dom";
import * as React from 'react';
import { MyPageTop } from 'features/MyPageTop';

export const Router = () => {
  return (
      <Routes>
          <Route path="/" element={<MyPageTop/>}/>

          {/* 階層的なルーティング
          <Route path="/page1" element={<Layout/>}>
              {/* /page1にアクセスすると、indexが指定されたコンポーネントが表示される */}
              {/* <Route index element={<Page1/>}/> */}
              {/* /page1の相対パスを指定 */}
              {/* <Route path="child" element={<Page1Child/>}/> */}
          {/* </Route> */}
      </Routes>
  );
}
