
export default function page() {
    return (
        <>            <nav className="NavBar">
                <div className="title">
                    버스 정보 시스템
                </div>
                <div className="Menu">
                    <p>버스선택</p>
                    <p>버스설명</p>
                    <p>사용자 설정</p>
                </div>
                <img className="img" src="image/profile.png"></img>
                <div className="Login">
                    로그인
                </div>
            </nav>
            <div className="Main">

                <div className="search">
                    <input className="font" placeholder="내 주변 버스정류장 찾기"   ></input>
                </div>
                <div>
                    <img className="map" src="image/map.png"></img>
                </div>
                <div className="Bus_Station">
                    <p className="Station1">부산소프트웨어마이스터고<br /><p className="time">도보 5분</p></p>
                    <p className="Station2">죽림 삼거리<br /><p className="time">도보 12분</p></p>
                    <p className="Station3">불암역 사거리<br /><p className="time">도보 17분</p></p>
                </div>
            </div>
            </>

    )
}