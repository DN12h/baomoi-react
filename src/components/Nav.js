import { useSelector } from 'react-redux';

function Nav() {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <ul className="ul-nav">
                    <li className="btn-square btn-choose">
                        <a className="" href="#">
                            NÓNG
                        </a>
                    </li>
                    <li>
                        <a className="btn-square" href="./newNews.html">
                            MỚI
                        </a>
                    </li>
                    <li>
                        <a className="btn-square" href="./videoPage.html">
                            VIDEO
                        </a>
                    </li>
                    <li>
                        <a className="btn-square" href="./topic.html">
                            CHỦ ĐỀ
                        </a>
                    </li>

                    <li>
                        <a className="btn-radius" href="./positive-energy.html">
                            Năng lượng tích cực
                        </a>
                    </li>
                    <li>
                        <a className="btn-radius" href="./vietnam-discovery.html">
                            Khám phá Việt Nam
                        </a>
                    </li>
                    <li>
                        <a className="btn-radius" href="./world-discovery.html">
                            Khám phá thế giới
                        </a>
                    </li>
                    <li className="icon-dropdown" id="dropdown">
                        <i className="fa fa-block-quote "></i>
                    </li>
                </ul>
            </nav>
            <div className="nav-supper dropsupport">
                <div className="nav-area">
                    <div style={{ overflow: 'hidden' }}>
                        <div className="nav-path display-none">
                            <a href="#" className="header-path other-path ">
                                <i className="fa-light fa-location-dot"></i>
                                Tin quanh ta
                                <select
                                    name="location"
                                    id=""
                                    style={({ float: 'right' }, { border: 'none' }, { backgroundColor: '#f3f3f3' })}
                                >
                                    <option value="">chọn địa phương</option>
                                    <option value="">Hà Nội</option>
                                    <option value="">TP. Hồ Chí Minh</option>
                                    <option value="">Đà Nẵng</option>
                                    <option value="">Hải Phòng</option>
                                </select>
                            </a>
                            <a href="#" className="header-path display-none other-path">
                                BÓNG ĐÁ
                                <i
                                    style={({ display: 'inline-block' }, { float: 'right' })}
                                    className="fa-light fa-futbol"
                                ></i>
                            </a>
                            <a href="#" className="header-path display-none other-path">
                                TIỆN ÍCH
                                <i
                                    style={({ display: 'inline-block' }, { float: 'right' })}
                                    className="fa-light fa-cloud-bolt-sun"
                                ></i>
                            </a>
                            <a href="#" className="header-path display-none other-path">
                                AUDIO
                                <i
                                    style={({ display: 'inline-block' }, { float: 'right' })}
                                    className="fa-light fa-microphone"
                                ></i>
                            </a>
                        </div>
                        <div className="nav-path">
                            <a href="" className="header-path">
                                THẾ GIỚI
                            </a>
                            <ul className="ul-nav-path"></ul>
                        </div>

                        <div className="nav-path">
                            <a href="./social.html" className="header-path">
                                XÃ HỘI
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a href="./social.html" className="a-nav-path">
                                        Thời sự
                                    </a>
                                </li>
                                <li>
                                    <a href="./social.html" className="a-nav-path">
                                        Giao thông
                                    </a>
                                </li>
                                <li>
                                    <a href="./social.html" className="a-nav-path">
                                        Môi trường - Khí hậu
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-path">
                            <a href="#" className="header-path">
                                VĂN HÓA
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">Nghệ thuật</a>
                                </li>
                                <li>
                                    <a className="a-nav-path">Ẩm thực</a>
                                </li>
                                <li>
                                    <a className="a-nav-path">Du lịch</a>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-path">
                            <a href="#" className="header-path">
                                KINH TẾ
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">Lao động - Việc làm</a>
                                </li>
                                <li>
                                    <a className="a-nav-path"></a>Tài chính
                                </li>
                                <li>
                                    <a className="a-nav-path"></a>Chứng khoán
                                </li>
                                <li>
                                    <a className="a-nav-path">Kinh doanh</a>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-path">
                            <a href="#" className="header-path">
                                GIÁO DỤC
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">Học bổng - Du lịch</a>
                                </li>
                                <li>
                                    <a className="a-nav-path">Đào tạo - Thi cử</a>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-path">
                            <a href="#" className="header-path">
                                THỂ THAO
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">Bóng đá quốc tế</a>
                                </li>
                                <li>
                                    <a className="a-nav-path">Bóng đá Việt Nam</a>
                                </li>
                                <li>
                                    <a className="a-nav-path">Quần vợt</a>
                                </li>
                                <li>
                                    <a className="a-nav-path">Lịch thi đấu</a>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-path">
                            <a href="#" className="header-path">
                                GIẢI TRÍ
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">Âm nhạc</a>
                                </li>
                                <li>
                                    <a className="a-nav-path">Thời trang</a>
                                </li>
                                <li>
                                    <a className="a-nav-path">Điện ảnh - Truyền hình</a>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-path">
                            <a href="#" className="header-path">
                                PHÁP LUẬT
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">An ninh trật tự</a>
                                </li>
                                <li>
                                    <a href="#" className="a-nav-path">
                                        Hình sự dân sự
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-path">
                            <a href="#" className="header-path">
                                CÔNG NGHỆ
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">CNTT - viễn thông</a>
                                </li>
                                <li>
                                    <a href="#" className="a-nav-path">
                                        Thiết bị phân cứng
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-path">
                            <a href="#" className="header-path">
                                KHOA HỌC
                            </a>
                            <ul className="ul-nav-path"></ul>
                        </div>
                        <div className="nav-path">
                            <a href="#" className="header-path">
                                ĐỜI SỐNG
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">Dinh dưỡng - làm đẹp</a>
                                </li>
                                <li>
                                    <a href="#" className="a-nav-path">
                                        Tình yêu - hôn nhân
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="a-nav-path">
                                        Sức khỏe - y tế
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-path">
                            <a href="#" className="header-path">
                                XE CỘ
                            </a>
                            <ul className="ul-nav-path"></ul>
                        </div>
                        <div className="nav-path">
                            <a href="#" className="header-path">
                                NHÀ ĐẤT
                            </a>
                            <ul className="ul-nav-path">
                                <li>
                                    <a className="a-nav-path">Quản lí quy hoạch</a>
                                </li>
                                <li>
                                    <a href="#" className="a-nav-path">
                                        Không gian kiến trúc
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-close-drop">ĐÓNG</div>
                    </div>

                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
