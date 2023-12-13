import React, { useEffect } from 'react';

const CursorBlob = () => {
    useEffect(() => {
        const blob = document.getElementById('Blob');

        const handleMouseMove = (event: any) => {
            const { clientX, clientY } = event;
            blob && blob.animate({
                top: `${clientY}px`,
                left: `${clientX}px`,

            }, { duration: 3000, fill: "forwards" })
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div id='Blob' className='Blob'></div>;
};

export default CursorBlob;
