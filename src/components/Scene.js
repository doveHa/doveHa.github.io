import React, { useEffect, useState, forwardRef } from 'react';
import './Scene.css';

const Scene = forwardRef(({ id, children }, ref) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // 컴포넌트가 마운트될 때 애니메이션 트리거
        setTimeout(() => setVisible(true), 50);
    }, []);

    return (
        <section id={id} className={`scene ${visible ? 'fade-in' : ''}`} ref={ref}>
            <div className="scene-box">{children}</div>
        </section>
    );
});

export default Scene;
