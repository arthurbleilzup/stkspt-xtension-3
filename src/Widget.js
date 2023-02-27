import React from 'react';

export default function Widget() {
  React.useEffect(() => {
    console.log('hooks');
  }, []);
  return (
    <div
      style={{
        borderRadius: '4px',
        padding: '2em',
        backgroundColor: 'orange',
        color: 'black',
      }}
      data-e2e="APP_4__WIDGET"
    >
      <h2>App 4 Widget</h2>
      <p>
        Hello Arthur, Latini and Tarcísio
      </p>
    </div>
  );
}
