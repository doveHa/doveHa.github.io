import React, { useEffect, useState, useRef } from 'react';
import './ClockInteractive.css';

export default function ClockInteractive() {
    const [time, setTime] = useState(new Date());
    const clockRef = useRef(null);

    // 실시간 시간 업데이트
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => new Date(prev.getTime() + 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handlePointerDrag = (e, type) => {
        const rect = clockRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const move = (moveEvent) => {
            const dx = moveEvent.clientX - centerX;
            const dy = moveEvent.clientY - centerY;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
            const normalized = (angle + 360) % 360;

            const newTime = new Date(time);
            if (type === 'second') {
                newTime.setSeconds(Math.round(normalized / 6));
            } else if (type === 'minute') {
                newTime.setMinutes(Math.round(normalized / 6));
            } else if (type === 'hour') {
                newTime.setHours(Math.round(normalized / 30) % 12);
            }
            setTime(newTime);
        };

        const up = () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
    };

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12 + minutes / 60;

    return (
        <div className="clock-container">
            <h2>🕒 현재 시각: {time.toLocaleTimeString()}</h2>
            <div className="clock" ref={clockRef}>
                <div
                    className="hand hour"
                    style={{ transform: `rotate(${hours * 30}deg)` }}
                    onMouseDown={(e) => handlePointerDrag(e, 'hour')}
                />
                <div
                    className="hand minute"
                    style={{ transform: `rotate(${minutes * 6}deg)` }}
                    onMouseDown={(e) => handlePointerDrag(e, 'minute')}
                />
                <div
                    className="hand second"
                    style={{ transform: `rotate(${seconds * 6}deg)` }}
                    onMouseDown={(e) => handlePointerDrag(e, 'second')}
                />
                <div className="center-dot" />
            </div>
        </div>
    );
}
