import {useEffect, useRef, useState} from 'react';
import Scene from './components/Scene';
import HomeScene from './pages/scenePages/HomeScene';
import GameScene from './pages/scenePages/GameScene';
import UserMainScene from './pages/scenePages/UserMainScene';
import LoadingScene from './pages/scenePages/LoadingScene';

function App() {
    const sceneRefs = [useRef(), useRef(), useRef(), useRef()];
    const [sceneIndex, setSceneIndex] = useState(0);
    const [previousSceneIndex, setPreviousSceneIndex] = useState(null);

    const scrollToScene = (index) => {
        const clamped = Math.max(0, Math.min(sceneRefs.length - 1, index));
        setPreviousSceneIndex(sceneIndex);   // 이전 Scene 저장
        setSceneIndex(clamped);
        sceneRefs[clamped].current.scrollIntoView({behavior: "smooth"});
    };


    // 마우스 휠 감지 (위/아래 이동)
    useEffect(() => {
        let throttle = false;

        const handleWheel = (e) => {
            if (throttle) return;
            throttle = true;
            setTimeout(() => (throttle = false), 800); // 딜레이 조절

            if (e.deltaY > 0) scrollToScene(sceneIndex + 1); // 아래로
            else scrollToScene(sceneIndex - 1);              // 위로
        };

        window.addEventListener("wheel", handleWheel, {passive: true});
        return () => window.removeEventListener("wheel", handleWheel);
    }, [sceneIndex]);


    return (
        <>
            <Scene id="home" ref={sceneRefs[0]}>
                <HomeScene onLogin={() => scrollToScene(1)}/>
            </Scene>

            <Scene id="loading" ref={sceneRefs[1]}>
                <LoadingScene
                    auto={sceneIndex === 1 && previousSceneIndex === 0}  // Home → Loading 인 경우만 자동
                    onContinue={() => scrollToScene(2)}
                />
            </Scene>


            <Scene id="user" ref={sceneRefs[2]}>
                <UserMainScene onStartGame={() => scrollToScene(3)}/>
            </Scene>

            <Scene id="game" ref={sceneRefs[3]}>
                <GameScene/>
            </Scene>
        </>
    );
}

export default App;