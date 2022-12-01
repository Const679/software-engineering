import '../styles/IdeaProposal.css'

function StoryInfo({type}){
    if (type=="Book"){
        return(
            <div className='storyinfo'>
                <h2>Information sur l'histoire</h2>
                <form action="/Inscription_Connexion" method="post">
                    <p>
                            <label for="name">Nom : </label>
                            <input type="text" id="name" name="name"/>
                    </p>
                    <p>
                            <label for="firstname">Prénom : </label>
                            <input type="text" id="fname" name="fname"/>
                    </p>
                    <p>
                            <label for="username">Nom d'utilisateur : </label>
                            <input type="text" id="username" name="username" />
                    </p>
                    <p>
                            <label for="DDN">Date de naissance : </label>
                            <input type="date" id="DDN" name="DDN" />
                    </p>
                    <p>
                            <label for="mail">Adresse mail : </label>
                            <input type="email" id="mail" name="user_mail"/>
                    </p>
                    <p>
                            <label for="mdp">Mot de passe : </label>
                            <input type="text" id="mdp" name="mdp"/>
                    </p>
                    <p>
                            <label for="cmdp">Confirmation : </label>
                            <input type="text" id="cmdp" name="cmdp"/>
                    </p>
                </form>
                <div class="button">
                    <button type="submit">Inscription</button>
                </div>
            </div>);
        }
        else if (type=="Webtoon"){
            return(
                <div className='storyinfo'>
            <h2>Information sur l'histoire</h2>
            <form action="/Inscription_Connexion" method="post">
                <p>
                        <label for="name">Nom : </label>
                        <input type="text" id="name" name="name"/>
                </p>
                <p>
                        <label for="firstname">Prénom : </label>
                        <input type="text" id="fname" name="fname"/>
                </p>
                <p>
                        <label for="username">Nom d'utilisateur : </label>
                        <input type="text" id="username" name="username" />
                </p>
                <p>
                        <label for="DDN">Date de naissance : </label>
                        <input type="date" id="DDN" name="DDN" />
                </p>
                <p>
                        <label for="mail">Adresse mail : </label>
                        <input type="email" id="mail" name="user_mail"/>
                </p>
                <p>
                        <label for="mdp">Mot de passe : </label>
                        <input type="text" id="mdp" name="mdp"/>
                </p>
                <p>
                        <label for="cmdp">Confirmation : </label>
                        <input type="text" id="cmdp" name="cmdp"/>
                </p>
            </form>
            <div class="button">
                <button type="submit">Inscription</button>
            </div>
        </div>
        );
    }
    else if (type=="Wattpad"){
        return(
            <div className='storyinfo'>
            <h2>Information sur l'histoire</h2>
            <form action="/Inscription_Connexion" method="post">
                <p>
                        <label for="name">Nom : </label>
                        <input type="text" id="name" name="name"/>
                </p>
                <p>
                        <label for="firstname">Prénom : </label>
                        <input type="text" id="fname" name="fname"/>
                </p>
                <p>
                        <label for="username">Nom d'utilisateur : </label>
                        <input type="text" id="username" name="username" />
                </p>
                <p>
                        <label for="DDN">Date de naissance : </label>
                        <input type="date" id="DDN" name="DDN" />
                </p>
                <p>
                        <label for="mail">Adresse mail : </label>
                        <input type="email" id="mail" name="user_mail"/>
                </p>
                <p>
                        <label for="mdp">Mot de passe : </label>
                        <input type="text" id="mdp" name="mdp"/>
                </p>
                <p>
                        <label for="cmdp">Confirmation : </label>
                        <input type="text" id="cmdp" name="cmdp"/>
                </p>
            </form>
            <div class="button">
                <button type="submit">Inscription</button>
            </div>
        </div>
        );
    }
    else if (type=="scenario"){
        return(
            <div className='storyinfo'>
            <h2>Information sur l'histoire</h2>
            <form action="/Inscription_Connexion" method="post">
                <p>
                        <label for="name">Nom : </label>
                        <input type="text" id="name" name="name"/>
                </p>
                <p>
                        <label for="firstname">Prénom : </label>
                        <input type="text" id="fname" name="fname"/>
                </p>
                <p>
                        <label for="username">Nom d'utilisateur : </label>
                        <input type="text" id="username" name="username" />
                </p>
                <p>
                        <label for="DDN">Date de naissance : </label>
                        <input type="date" id="DDN" name="DDN" />
                </p>
                <p>
                        <label for="mail">Adresse mail : </label>
                        <input type="email" id="mail" name="user_mail"/>
                </p>
                <p>
                        <label for="mdp">Mot de passe : </label>
                        <input type="text" id="mdp" name="mdp"/>
                </p>
                <p>
                        <label for="cmdp">Confirmation : </label>
                        <input type="text" id="cmdp" name="cmdp"/>
                </p>
            </form>
            <div class="button">
                <button type="submit">Inscription</button>
            </div>
        </div>);
    }
    else if (type=="Webtoon"){
        return(
            <div className='storyinfo'>
        <h2>Information sur l'histoire</h2>
        <form action="/Inscription_Connexion" method="post">
            <p>
                    <label for="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
            </p>
            <p>
                    <label for="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
            </p>
            <p>
                    <label for="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
            </p>
            <p>
                    <label for="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
            </p>
            <p>
                    <label for="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
            </p>
            <p>
                    <label for="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
            </p>
            <p>
                    <label for="cmdp">Confirmation : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
            </p>
        </form>
        <div class="button">
            <button type="submit">Inscription</button>
        </div>
    </div>
    );
}
else if (type=="Wattpad"){
    return(
        <div className='storyinfo'>
        <h2>Information sur l'histoire</h2>
        <form action="/Inscription_Connexion" method="post">
            <p>
                    <label for="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
            </p>
            <p>
                    <label for="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
            </p>
            <p>
                    <label for="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
            </p>
            <p>
                    <label for="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
            </p>
            <p>
                    <label for="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
            </p>
            <p>
                    <label for="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
            </p>
            <p>
                    <label for="cmdp">Confirmation : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
            </p>
        </form>
        <div class="button">
            <button type="submit">Inscription</button>
        </div>
    </div>
    );
    }
    else if (type=="synopsy"){
        return(
            <div className='storyinfo'>
            <h2>Information sur l'histoire</h2>
            <form action="/Inscription_Connexion" method="post">
                <p>
                        <label for="name">Nom : </label>
                        <input type="text" id="name" name="name"/>
                </p>
                <p>
                        <label for="firstname">Prénom : </label>
                        <input type="text" id="fname" name="fname"/>
                </p>
                <p>
                        <label for="username">Nom d'utilisateur : </label>
                        <input type="text" id="username" name="username" />
                </p>
                <p>
                        <label for="DDN">Date de naissance : </label>
                        <input type="date" id="DDN" name="DDN" />
                </p>
                <p>
                        <label for="mail">Adresse mail : </label>
                        <input type="email" id="mail" name="user_mail"/>
                </p>
                <p>
                        <label for="mdp">Mot de passe : </label>
                        <input type="text" id="mdp" name="mdp"/>
                </p>
                <p>
                        <label for="cmdp">Confirmation : </label>
                        <input type="text" id="cmdp" name="cmdp"/>
                </p>
            </form>
            <div class="button">
                <button type="submit">Inscription</button>
            </div>
        </div>);
    }
    else if (type=="Webtoon"){
        return(
            <div className='storyinfo'>
        <h2>Information sur l'histoire</h2>
        <form action="/Inscription_Connexion" method="post">
            <p>
                    <label for="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
            </p>
            <p>
                    <label for="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
            </p>
            <p>
                    <label for="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
            </p>
            <p>
                    <label for="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
            </p>
            <p>
                    <label for="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
            </p>
            <p>
                    <label for="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
            </p>
            <p>
                    <label for="cmdp">Confirmation : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
            </p>
        </form>
        <div class="button">
            <button type="submit">Inscription</button>
        </div>
    </div>
    );
}
else if (type=="Wattpad"){
    return(
        <div className='storyinfo'>
        <h2>Information sur l'histoire</h2>
        <form action="/Inscription_Connexion" method="post">
            <p>
                    <label for="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
            </p>
            <p>
                    <label for="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
            </p>
            <p>
                    <label for="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
            </p>
            <p>
                    <label for="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
            </p>
            <p>
                    <label for="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
            </p>
            <p>
                    <label for="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
            </p>
            <p>
                    <label for="cmdp">Confirmation : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
            </p>
        </form>
        <div class="button">
            <button type="submit">Inscription</button>
        </div>
    </div>
    );
    }
    else{
        return(
            <div className='storyinfo'>
                <h2>Information sur l'histoire</h2>
            </div>
        )
    }
}
export default StoryInfo