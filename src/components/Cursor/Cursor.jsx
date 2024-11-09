import React, { useEffect, useState } from 'react';
import './Style.css'; // Make sure Style.css is in the same directory or adjust the path accordingly.

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                className="cursor"
                style={{
                    left: position.x,
                    top: position.y,
                    position: 'fixed',
                    pointerEvents: 'none',
                }}
            ></div>
            <div
                className="cursor2"
                style={{
                    left: position.x,
                    top: position.y,
                    position: 'fixed',
                    pointerEvents: 'none',
                }}
            ></div>
        </>
    );
};

export default Cursor;
