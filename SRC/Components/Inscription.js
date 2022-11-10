import '../styles/Inscription.css'
function Inscription(){
    return(
        <div className='inscription'>
            <h2>Inscription</h2>
            <form action="/Inscription_Connexion" method="post">
                <div>
                    <label for="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div>
                    <label for="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
                </div>
                <div>
                    <label for="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label for="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
                </div>
                <div>
                    <label for="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
                </div>
                <div>
                    <label for="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
                </div>
                <div>
                    <label for="cmdp">Confirmation mot de passe : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
                </div>
            </form>
            <div class="button">
                <button type="submit">Inscription</button>
            </div>
        </div>
    )
}
export default Inscription