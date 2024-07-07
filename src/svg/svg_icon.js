import React, { useState, useEffect } from 'react';

const SvgIcon = ({ name, className }) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await fetch(`/assets/svg/${name}.svg`);
                const svgText = await response.text();

                const parser = new DOMParser();
                const doc = parser.parseFromString(svgText, 'image/svg+xml');
                const svgNode = doc.documentElement;

                // Lấy nội dung của SVG node
                const svgContentOnly = svgNode.innerHTML;

                setSvgContent(svgContentOnly);
            } catch (error) {
                console.error(`Error fetching SVG ${name}:`, error);
                setSvgContent('');
            }
        };

        fetchSvg();
    }, [name]);

    // Trả về nội dung SVG mà không có thẻ bao quanh
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
            className={className}
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

export default SvgIcon;
