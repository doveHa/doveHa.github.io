export const homeScene = {
    name: "HomeScene",
    type: "Scene",
    description: "게임 시작 화면 Scene",
    children: [
        {
            name: "ConstController",
            type: "GameObject",
            description: "스텟의 수치를 실시간으로 조정하며 테스트하는 Object",
            children: [
                {
                    name: "ConstControllerScript",
                    type: "Script",
                    function: "캐릭터의 이동속도, 체공 지속 시간, 투사체 속도 등의 상수 스텟을 설정할 때 실시간으로 수치를 조정하며 테스트"
                }
            ]
        },
        {
            name: "Canvas",
            type: "GameObject.Canvas",
            children: [
                {
                    name: "Home",
                    type: "GameObject.Canvas",
                    description: "게임의 타이틀, 로그인 버튼 등을 나타내는 Canvas",
                    children: [
                        {
                            name: "Title",
                            type: "GameObject.Canvas.TextMeshPro(UI)",
                            description: "게임의 제목 「지구 침략 공생의 서막」",
                            imageHighlight: {x: 0.144, y: 0.1, width: 0.37, height: 0.33}
                        },
                        {
                            name: "Click",
                            type: "GameObject.Canvas.TextMeshPro(UI)",
                            description: "클릭 시 Login으로 전환",
                            related: ["Home", "Login"],
                            function: "Click이 Active 되어 있을 때만 실행 → 첫 클릭에만 반응, Click을 SetActive(false), Login을 SetActive(true)",
                            imageHighlight: {x: 0.169, y: 0.795, width: 0.32, height: 0.08}

                        }
                    ]
                },
                {
                    name: "Login",
                    type: "GameObject.Canvas",
                    description: "게임을 진행하기 위해 로그인을 하는 Canvas",
                    children: [
                        {
                            name: "LoginIdInputField",
                            type: "GameObject.Canvas.InputField",
                            description: "로그인을 위한 Id 입력 필드",
                            imageHighlight: {x: 0.163, y: 0.525, width: 0.345, height: 0.09}
                        },
                        {
                            name: "LoginPwInputField",
                            type: "GameObject.Canvas.InputField",
                            description: "로그인을 위한 Pw 입력 필드",
                            imageHighlight: {x: 0.163, y: 0.629, width: 0.345, height: 0.09}
                        },
                        {
                            name: "TryLogin",
                            type: "GameObject.Canvas.Button",
                            description: "입력받은 Id와 Pw를 서버에 전송해 로그인 시도",
                            related: ["LoginManager", "SceneLoadManager"],
                            function: "정적 클래스의 Authentication login 함수를 호출하여 입력받은 Id와 Pw를 서버에 전송 후 결과를 통해 로그인의 유무를 판단, 로그인 성공 시 플레이어의 로그인 인증 토큰을 LoginManager에 저장 후 SceneLoadManager를 통해 UserMainScene으로 전환",
                            imageHighlight: {x: 0.163, y: 0.7333, width: 0.17, height: 0.08}

                        },
                        {
                            name: "ToRegister",
                            type: "GameObject.Canvas.Button",
                            description: "Login을 Register로 전환하는 Button",
                            related: ["Register", "Login"],
                            function: "Login을 SetActive(false), Register를 SetActive(true)",
                            imageHighlight: {x: 0.338, y: 0.7333, width: 0.17, height: 0.08}

                        }
                    ]
                },
                {
                    name: "Register",
                    type: "GameObject.Canvas",
                    description: "회원가입 Canvas",
                    children: [
                        {
                            name: "RegisterIdInputField",
                            type: "GameObject.Canvas.InputField",
                            description: "회원가입 Id 입력 필드",
                            imageHighlight: {x: 0.163, y: 0.458, width: 0.345, height: 0.09}
                        },
                        {
                            name: "RegisterPwInputField",
                            type: "GameObject.Canvas.InputField",
                            description: "회원가입 Pw 입력 필드",
                            imageHighlight: {x: 0.163, y: 0.562, width: 0.345, height: 0.09}
                        },
                        {
                            name: "CheckPwInputField",
                            type: "GameObject.Canvas.InputField",
                            description: "Pw 확인 필드",
                            imageHighlight: {x: 0.163, y: 0.669, width: 0.345, height: 0.09}
                        },
                        {
                            name: "UserNameInputField",
                            type: "GameObject.Canvas.InputField",
                            description: "회원가입 UserName 입력 필드",
                            imageHighlight: {x: 0.163, y: 0.772, width: 0.345, height: 0.09}
                        },
                        {
                            name: "ToLogin",
                            type: "GameObject.Canvas.Button",
                            related: ["Register", "Login"],
                            function: "Register를 SetActive(false), Login을 SetActive(true)",
                            imageHighlight: {x: 0.163, y: 0.875, width: 0.17, height: 0.08}
                        },
                        {
                            name: "TryRegister",
                            type: "GameObject.Canvas.Button",
                            function: "Pw와 CheckPw가 동일한지 검사 후 동일하면 정적 클래스의 Authentication register 함수를 호출하여 입력받은 Id와 Pw, UserName을 서버에 전송 후 결과를 통해 회원가입",
                            imageHighlight: {x: 0.338, y: 0.875, width: 0.17, height: 0.08}
                        }
                    ]
                }
            ]
        },
        {
            name: "Manager",
            type: "GameObject",
            description: "여러 Manager를 소유하는 Object",
            children: [
                {
                    name: "LoginManager",
                    type: "Script",
                    function: "플레이어 로그인 토큰 소유 및 인증 관리, 토큰 재발급"
                },
                {
                    name: "SceneLoadManager",
                    type: "Script",
                    function: "다른 Scene을 Load하는 Manager"
                },
                {
                    name: "VarManager",
                    type: "Script",
                    function: "플레이어와 상대방 정보(위치, 스킬, 캐릭터 이름 등)를 소유하여 Script에서 접근 가능"
                }
            ]
        }
    ]
};
