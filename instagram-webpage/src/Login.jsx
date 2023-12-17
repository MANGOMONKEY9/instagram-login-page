import "C:/Users/Li Xiang/Web Projects/INSTAGRAM/instagram-webpage/src/Login.css"
import React, {useState, useEffect} from 'react';

const imageURLs = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
]

export default function Login() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [usernameInputHasValue, setUsernameInputHasValue] = useState(false);
    const [passwordInputHasValue, setPasswordInputHasValue] = useState(false);
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    function passwordStater(x) {
        setPasswordInputHasValue(x.target.value.trim().length > 0);
        setPassword(x.target.value);
        console.log(password);
    }

    useEffect(() => {
        const toggleImages = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
        };

        const intervalId = setInterval(toggleImages, 5000);

        return() => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setIsButtonDisabled(!(usernameInputHasValue && password.length >= 6));
    }, [usernameInputHasValue, password]);

    return(
        <div className="main-page"> 
            <article className="main">
                <div className="login-left">
                    <div className="animating-pics">
                        {imageURLs.map((url, index) => (
                        <img
                            key={index}
                            alt=""
                            className={`phone-pics ${currentImageIndex === index ? '' : 'hidden'}`}
                            src={url}                        
                        />
                        ))}
                    </div>
                </div>
                <div className="login-right">
                        <div className="login-ui">
                            <div className="ig-logo">
                                <div className="ig-box" role="button">
                                    <div className="ig"></div>
                                </div>
                            </div>
                            <div className="login-container">
                                <form className="login-within">
                                    <div className="login-parts">
                                        <div className="login-boxes">
                                            <div className={`a990128 ${usernameInputHasValue ? 'input-filled' : ''}`}>
                                                <div className="label">
                                                    <span className={`placeholder-text ${usernameInputHasValue ? 'small-text' : ''}`}>
                                                        Phone number, username, or email
                                                    </span>
                                                    <input 
                                                        autoCapitalize="off" 
                                                        autoCorrect="off" 
                                                        maxLength={75} 
                                                        className="input"
                                                        onChange={(e) => setUsernameInputHasValue(e.target.value.trim().length > 0)}
                                                        >
                                                    </input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-boxes">
                                            <div className={`a990128 ${passwordInputHasValue ? 'input-filled' : ''}`}>
                                                <div className="label">
                                                    <span className={`placeholder-text ${passwordInputHasValue ? 'small-text' : ''}`}>
                                                        Password
                                                    </span>
                                                    <input 
                                                        autoCapitalize="off" 
                                                        autoCorrect="off" 
                                                        maxLength={75} 
                                                        className="input"
                                                        onChange={(e) => 
                                                            passwordStater(e)
                                                        }
                                                        >
                                                    </input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="log-in">
                                            <button className="login-button" disabled={isButtonDisabled}>
                                                <div className="button-text">
                                                    Log In
                                                </div>
                                            </button>
                                        </div>
                                        <div className="or-spacer">
                                            <div className="or-inner">
                                                <div className="or-line"></div>
                                                <div className="or">OR</div>
                                                <div className="or-line"></div>
                                            </div>
                                        </div>
                                        <div className="facebook-login">
                                            <button className="facebook-button">
                                                <span className="facebook-logo"></span>
                                                <span className="facebook-text">
                                                    Log In with Facebook
                                                </span>
                                            </button>
                                        </div>
                                        <a className="forgot-password" href="https://www.instagram.com/accounts/password/reset/">
                                            <span className="forgot-password-text">
                                                Forgot Password?
                                            </span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div> 
                        <div className="login-ui">
                            <span className="sign-up">
                                <p className="sign-up-container">
                                    Don't have an account?
                                     <a className="sign-up-button" href="https://www.instagram.com/accounts/emailsignup/">
                                        <span className="sign-up-text"> Sign Up</span>
                                    </a>
                                </p>
                            </span>
                        </div> 
                        <div className="get-the-app">
                            <div className="get-the-app-container">
                                <span className="get-the-app-text">Get the App.</span>
                            </div>
                            <div className="get-the-app-container">
                                <a className="link-block" href="https://l.instagram.com/?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android%26referrer%3Dig_mid%253DEEA46D67-5058-4E2E-81B7-803F656D7024%2526utm_campaign%253DloginPage%2526utm_content%253Dlo%2526utm_source%253Dinstagramweb%2526utm_medium%253Dbadge&e=AT02UdFQz3ldL3LBW9DxhIQTw-975oD4iL_o5YLQ1-iVDEejFqSTI07V-4o_0O6yMnW4QWBFMLXxV517VTG4gsyC2b8HMW6YCa2wOhQGwe4PJfrexQiL56Pgf8yN0WrBkd6vLyk0M_rJHVQlwdN10Q">
                                    <img className="imagery" alt="googleplay" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"></img>
                                </a>
                                <a className="link-block" href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1040">
                                    <img className="imagery" alt="microsoft" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"></img>
                                </a>
                            </div>
                        </div>
                    </div>  
            </article>
            <footer className="footer">
                <div className="footer-container">
                    <div className="top-container">
                        <div className="inner-container">
                            <div className="chips">
                                <a href="https://about.meta.com/" className="anchor-tag">
                                    <span className="chips-text">Meta</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://about.instagram.com/" className="anchor-tag">
                                    <span className="chips-text">About</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://about.instagram.com/blog/" className="anchor-tag">
                                    <span className="chips-text">Blog</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://www.instagram.com/about/jobs/" className="anchor-tag">
                                    <span className="chips-text">Jobs</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://help.instagram.com/" className="anchor-tag">
                                    <span className="chips-text">Help</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://developers.facebook.com/docs/instagram" className="anchor-tag">
                                    <span className="chips-text">API</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://www.instagram.com/legal/privacy/" className="anchor-tag">
                                    <span className="chips-text">Privacy</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://www.instagram.com/legal/terms/" className="anchor-tag">
                                    <span className="chips-text">Terms</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://www.instagram.com/explore/locations/" className="anchor-tag">
                                    <span className="chips-text">Locations</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://www.instagram.com/web/lite/" className="anchor-tag">
                                    <span className="chips-text">Instagram Lite</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://www.threads.net/" className="anchor-tag">
                                    <span className="chips-text">Threads</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a className="anchor-tag" href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT02UdFQz3ldL3LBW9DxhIQTw-975oD4iL_o5YLQ1-iVDEejFqSTI07V-4o_0O6yMnW4QWBFMLXxV517VTG4gsyC2b8HMW6YCa2wOhQGwe4PJfrexQiL56Pgf8yN0WrBkd6vLyk0M_rJHVQlwdN10Q">
                                    <span className="chips-text">Contact Uploading & Non-Users</span>
                                </a>
                            </div>
                            <div className="chips">
                                <a href="https://about.meta.com/technologies/meta-verified/" className="anchor-tag">
                                    <span className="chips-text">Meta Verified</span>
                                </a>
                            </div>                           
                        </div>              
                    </div>
                    <div className="bottom-container">
                        <span className="language">
                            <div className="language-text">
                                <span className="inner-text-container">
                                    English
                                </span>
                                <div className="select-arrow">
                                <span className="arrow-style">
                                <svg aria-label="Down chevron icon" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Down chevron icon</title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
                                </span>
                            </div>
                            </div>
                            <select className="select">
                                <option>Afrikaans</option>
                                <option>العربية</option>
                                <option>Čeština</option>
                                <option>Dansk</option>
                                <option>Deutsch</option>
                                <option>Ελληνικά</option>
                                <option>English</option>
                                <option>English (UK)</option>
                                <option>Español (España)</option>
                                <option>Español</option>
                                <option>فارسی</option>
                                <option>Suomi</option>
                                <option>Français</option>
                                <option>עברית</option>
                                <option>Bahasa Indonesia</option>
                                <option>Italiano</option>
                                <option>日本語</option>
                                <option>한국어</option>
                                <option>Bahasa Melayu</option>
                                <option>Norsk</option>
                                <option>Nederlands</option>
                                <option>Polski</option>
                                <option>Português (Brasil)</option>
                                <option>Português (Portugal)</option>
                                <option>Русский</option>
                                <option>Svenska</option>
                                <option>ภาษาไทย</option>
                                <option>Filipino</option>
                                <option>Türkçe</option>
                                <option>中文(简体)</option>
                                <option>中文(台灣)</option>
                                <option>বাংলা</option>
                                <option>ગુજરાતી</option>
                                <option>हिन्दी</option>
                                <option>Hrvatski</option>
                                <option>Magyar</option>
                                <option>ಕನ್ನಡ</option>
                                <option>മലയാളം</option>
                                <option>मराठी</option>
                                <option>नेपाली</option>
                                <option>ਪੰਜਾਬੀ</option>
                                <option>සිංහල</option>
                                <option>Slovenčina</option>
                                <option>தமிழ்</option>
                                <option>తెలుగు</option>
                                <option>اردو</option>
                                <option>Tiếng Việt</option>
                                <option>中文(香港)</option>
                                <option>Български</option>
                                <option>Français (Canada)</option>
                                <option>Română</option>
                                <option>Српски</option>
                                <option>Українська</option>
                            </select>
                        </span>
                        <div className="trademark">
                            <span className="trademark-text">
                            © 2023 Instagram from Meta
                            </span>
                        </div>
                    </div>
                </div>                
            </footer>
        </div>
    )
}