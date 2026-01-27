import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Suggestions from './components/Suggestions';
import Footer from './components/Footer';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { useMaxScrollTracker } from './hooks/useMaxScrollTracker';
import { useAnalytics } from './hooks/useAnalytics'; // ✅ 新增
import { getFinalUUIDInfo } from './utils/uuidResolver'; // ✅ 同步決定 UUID

function App() {
  // ✅ App 初始化時立即同步決定 FINAL_UUID（在任何 hook 之前）
  getFinalUUIDInfo();

  const analytics = useAnalytics(); // ✅ 內部自動取得全局 FINAL_UUID
  useMaxScrollTracker(); // ✅ 內部自動取得全局 FINAL_UUID

  // ✅ UUID 現在在 App 開頭同步決定，無需 useEffect


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-screen-lg mx-auto pt-16 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          {/* Main content */}
          <div className="w-full lg:flex-1">
            <Stories />
            {/* ✅ 傳入 analytics props */}
            <Feed analytics={analytics} />
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-[320px] pt-4 sticky top-20">
            <Profile 
              username="beautynala.ai"
              name="Nala Lumiere"
              imageUrl="https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg"
            />
            <Suggestions />
            <Footer />
          </div>
        </div>
      </main>

      {/* 隱藏 analytics 組件，但仍會發送 API 請求 */}
      <div style={{ display: 'none' }}>
        <AnalyticsDashboard />
      </div>
    </div>
  );
}

export default App;
