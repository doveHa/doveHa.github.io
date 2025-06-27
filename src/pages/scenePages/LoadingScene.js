import { useEffect } from "react";

export default function LoadingScene({ onContinue, auto = false }) {
    useEffect(() => {
        if (!auto) return;

        const timer = setTimeout(() => {
            onContinue();
        }, 1500);

        return () => clearTimeout(timer);
    }, [auto, onContinue]);

    return (
        <>
            <h1>⏳ 로딩 중...</h1>
            <p>{auto ? "자동으로 다음 Scene으로 이동합니다..." : "스크롤하여 이동하세요."}</p>
        </>
    );
}
