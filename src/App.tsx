import React, { useState } from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Suggestions from './components/Suggestions';
import Footer from './components/Footer';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { useMaxScrollTracker } from './hooks/useMaxScrollTracker';

function App() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  // ✅ 在這裡啟動全頁最大 scroll percentage 追蹤
  useMaxScrollTracker();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-screen-lg mx-auto pt-16 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          {/* Main content */}
          <div className="w-full lg:flex-1">
            <Stories />
            <Feed />
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-[320px] pt-4 sticky top-20">
            <Profile 
              username="beautynala.ai"
              name="Nala Lumiere"
              imageUrl="https://i.ibb.co/ch10PK1F/8.jpg"
            />
            <Suggestions />
            <Footer />
          </div>
        </div>
      </main>

      {/*隱藏 analytics 組件，但仍會發送 API 請求*/}
      <div style={{ display: 'none' }}>
        <AnalyticsDashboard />
      </div>
    </div>
  );
}

export default App;
