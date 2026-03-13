'use client'

import dynamic from "next/dynamic";

const StarCanvas = dynamic(() => import("./StarBackground"), {
    ssr: false,
});

export default StarCanvas;
