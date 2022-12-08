import React, {useState, useEffect, useRef } from 'react';
// import logo from './logo.svg'
// import './App.css'
// import BlockMap from './components/BlockMap/BlockMap.jsx'
// import { Grid, Row, Col } from 'react-grid-system';

function GridBackground() {
  // ...
  const [selected, setSelected] = useState(() => {
    const rows = Array(20).fill(false);
    return Array(20).fill(rows);
  });

  const canvasRef = useRef(null);
  const cellDimensions = useRef({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 计算网状格子的行数和列数
    const rows = 20;
    const cols = 20;

    // 计算每个格子的宽度和高度
    cellDimensions.current.width = canvas.width / cols;
    cellDimensions.current.height = canvas.height / rows;

    // 绘制网状格子
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cellDimensions.current.width;
        const y = r * cellDimensions.current.height;

        // 如果格子被选中，则填充颜色
        if (selected[r][c]) {
          ctx.fillRect(x, y, cellDimensions.current.width, cellDimensions.current.height);
        } else {
          // 否则，不填充颜色
          ctx.clearRect(x, y, cellDimensions.current.width, cellDimensions.current.height);
          ctx.strokeRect(x, y, cellDimensions.current.width, cellDimensions.current.height);
        }
      }
    }

    // 添加鼠标点击事件监听器
    canvas.addEventListener('click', handleClick);

    // 在组件卸载时移除事件监听器
    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, [selected]);

  function handleClick(event) {
    // 获取鼠标点击的位置
    const x = event.offsetX;
    const y = event.offsetY;

    const row = Math.floor(y / cellDimensions.current.height);
    const col = Math.floor(x / cellDimensions.current.width);

    // 更新选中状态
    setSelected((prevSelected) => {
      const newSelected = prevSelected.map((row) => [...row]);
      newSelected[row][col] = !newSelected[row][col];
      return newSelected;
    });
  }

  return (
    <canvas ref={canvasRef} width={400} height={400} />
  );
}

function App() {
// const [count, setCount] = useState(0)
return (
<div>
  <GridBackground>
  </GridBackground>
</div>
);
}

export default App;