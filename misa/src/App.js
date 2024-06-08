import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedBuilding, setSelectedBuilding] = useState('힐스테이트 A동');
  const [selectedFloor, setSelectedFloor] = useState('1F');
  const [showImage, setShowImage] = useState(false);

  const floorLists = {
    '3F': ['Tenant 1', 'Tenant 2', 'Tenant 3'],
    '2F': ['Tenant 4', 'Tenant 5', 'Tenant 6'],
    '1F': ['91 미사', '쥬씨', '용용선생', '바이아연', '오늘은 깨끗', '슈올린 안경', '배민 도화', '킴 공인중개사', '골방이 상회'],
    'B1': ['Tenant 7', 'Tenant 8'],
    'B2': ['Tenant 9', 'Tenant 10']
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold">동별 안내</h1>
        </div>
        <div className="flex justify-center mb-4 space-x-4">
          {['힐스테이트 A동', '힐스테이트 B동', '롯데캐슬'].map((building) => (
            <button
              key={building}
              className={`button ${selectedBuilding === building ? 'button-selected' : 'button-unselected'}`}
              onClick={() => setSelectedBuilding(building)}
            >
              {building}
            </button>
          ))}
        </div>
        <div className="border rounded overflow-hidden relative">
          <div className="flex">
            <div className="floor-container bg-purple-100">
              {['3F', '2F', '1F', 'B1', 'B2'].map((floor) => (
                <div
                  key={floor}
                  className={`floor ${selectedFloor === floor ? 'bg-purple-500 text-white' : 'text-gray-500'}`}
                  onClick={() => setSelectedFloor(floor)}
                >
                  {floor}
                </div>
              ))}
            </div>
            <div className="w-3/4 tenant-container">
              {floorLists[selectedFloor].map((tenant, index) => (
                <div key={index} className="tenant">
                  {tenant}
                </div>
              ))}
            </div>
          </div>
          <button 
            className="absolute top-0 right-0 mt-4 mr-4 floor-button"
            onClick={() => setShowImage(!showImage)}
          >
            <img src={`${process.env.PUBLIC_URL}/mapimage.png`} alt="Icon" width="16" height="16" />
            층별 안내
          </button>
          {showImage && (
            <img 
              src={`${process.env.PUBLIC_URL}/map1.png`} 
              alt="Description" 
              className="centered-image"
              style={{ width: '300px', height: 'auto' }} 
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
