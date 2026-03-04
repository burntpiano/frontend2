function Greeting({username}) {
    
    function fingerPrint() {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        return `...but I know a lot about you.
        \nI can see your user agent: 
        ${userAgent}
        \nyour platform: 
        ${platform}
        \nand your language: 
        ${language}
        \nYou should give LibreWolf a try.`;

    }

    return (
        <div>
            <h1>
                Hello, {username}.
            </h1>
            <p style={{ color: 'red' }}>
                I don't mean to alarm you...
            </p>
            <p className="fingerprint">
                {fingerPrint()}
            </p>
        </div>
    )
}

export default Greeting;