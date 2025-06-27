export default function HomeScene({ onLogin }) {
    return (
        <>
            <h1>HomeScene</h1>
            <p>지금 로그인하고 게임을 시작해보세요!</p>
            <button onClick={onLogin}>로그인</button>
        </>
    );
}
