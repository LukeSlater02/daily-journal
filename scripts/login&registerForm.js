export const loginForm = () => {
    return `
    <div class="login">
    <h3>Login</h3>
    <section>
        <input value=""
          name="name"
          class="newPost__input"
          type="text"
          placeholder="User Name" />
    </section>

    <section>
        <input value=""
        name="email"
        class="newPost__input"
        type="text"
        placeholder="name@place.com" />
    </section>
    <input type="button" id="login__submit" value="Login">
    <input type="button" id="login__cancel" value="Cancel">
</div>
    `
}

export const registerForm = () => {
    return `
    <div class="register">
    <h3>Register</h3>
    <section>
        <input value=""
        name="registerName"
        class="newPost__input"
        type="text"
        placeholder="User Name" />
    </section>

    <section>
        <input value=""
        name="registerEmail"
        class="newPost__input"
        type="text"
        placeholder="name@place.com" />
    </section>

    <input type="button" id="register__submit" value="Register">
    <input type="button" id="register__cancel" value="Cancel">
</div>
    `
}