import StoryType from './StoryType'
import StoryInfo from './StoryInfo'
import '../styles/IdeaProposal.css'
import { type } from '@testing-library/user-event/dist/type';

function Main(){
    type="none";
    return(
    <div id="menu">
        <div id="Type" className='Type'>
            <h2>Partager votre histoire</h2>

            <form action="StoryInfo type={type}" method="post">
                <p>
                    <input type="radio" id="Book" name="story" value="Book" onclick="type=='Book'"/>
                    <label for="Book">Un livre existant</label>
                </p>
                <p>
                    <input type="radio" id="Webtoon" name="story" value="Webtoon" onclick={type=="Webtoon"}/>
                    <label for="Webtoon">Un Webtoon</label>
                </p>
                <p>
                    <input type="radio" id="Wattpad" name="story" value="Wattpad" onclick={type=="Wattpad"}/>
                    <label for="Webtoon">Un Wattpad</label>
                </p>
                <p>
                    <input type="radio" id="scenario" name="story" value="scenario" onclick={type=="scenario"}/>
                    <label for="scenario">Un scénario original</label>
                </p>
                <p>
                    <input type="radio" id="synopsy" name="story" value="synopsy" onclick={type=="synopsy"}/>
                    <label for="synopsy">Un synopsy original</label>
                </p>
            </form>
        </div>
        <div id="Info">
            <StoryInfo type={type} />
            {type}
        </div>
    </div>
    )
}
export default Main
