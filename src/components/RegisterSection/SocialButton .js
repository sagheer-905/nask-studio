import React from "react"
import SocialLogin from "react-social-login";

const SocialButton = (props)=>{
    const { children, triggerLogin, ...prop } = props
    return(
        <button onClick={triggerLogin} {...prop}>
        {children}
      </button>
    )
}
export default SocialLogin(SocialButton);