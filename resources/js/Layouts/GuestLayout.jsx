export default function Guest({ children }) {
    return (
        <div id="wrapper" className="theme-cyan">
            <div className="vertical-align-wrap">
                <div className="vertical-align-middle auth-main">
                    <div className="auth-box">
                        <div className="top">
                            <img src={'../assets/images/logo-white.svg'} alt="Iconic" />
                        </div>
                        {children}
                        
                    </div>
                </div>
            </div>
        </div>

    );
}
