export default function UserMainScene({ onStartGame }) {
    return (
        <>
            <h1>유저 메인 화면</h1>
            <p>원하는 작업을 선택하세요.</p>
            <button onClick={onStartGame}>게임 시작</button>
        </>
    );
}
