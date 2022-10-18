import React, {useState} from 'react';
import './Body.css';

function Body() {
    // Activate the following 3 lines of code for reset data in localStorage
    // localStorage.removeItem('isReadAll');
    // localStorage.removeItem('listStory');
    // localStorage.removeItem('idCurrentStory');

    // Add stories to localStorage
    localStorage.setItem('story-1', `A child asked his father, "How were people born?" 
        So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."

        The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
    
        The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`);
    localStorage.setItem('story-2',`Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`);
    localStorage.setItem('story-3',`The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`);
    localStorage.setItem('story-4',`A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`);
    
    
    const numStories = 4;
    let listReadStory;
    let currentStory;

    // Check if currentStory and isReadAll is existing
    if(!localStorage.getItem('isReadAll')){
        localStorage.getItem('isReadAll', false);
    }
    const isReadAll = JSON.parse(localStorage.getItem('isReadAll'));

    if(localStorage.getItem('currentStory')){
        currentStory = localStorage.getItem('currentStory');
    }else{
        currentStory = 0;
    }

    
    // Create list random joke story
    const createListStory = () => {
        const ranNum = () => Math.floor(Math.floor(Math.random() * (numStories - 1 + 1) + 1));
        let current;
        let listId= [];
        let listStory = [];
        
        // Create random id story list
        while(listId.length < 4) {
            if(listId.indexOf(current = ranNum()) === -1) {
                listId.push(current);
            }
        }

        // Create story list
        for(var i = 0; i < listId.length; i++){
            if(listId[i] === 1){
                listStory.push('story-1');
            }else if(listId[i] === 2){
                listStory.push('story-2');
            }else if(listId[i] === 3){
                listStory.push('story-3');
            }else{
                listStory.push('story-4');
            }
        }
        return listStory;
    }

    // Check if list random joke story is existing
    if (!localStorage.getItem('listStory')){
        listReadStory = createListStory();
        localStorage.setItem('listStory', JSON.stringify(listReadStory));
    }else{
        listReadStory = JSON.parse(localStorage.getItem('listStory'));
    }

    // Show story in first time
    let showStory;
    if(isReadAll){
        showStory = "That's all the jokes for today! Come back another day!";
    }else{
        showStory = localStorage.getItem(listReadStory[currentStory]);
    }
    const [story, setStory] = useState(showStory);

    // Create function for change story when user click votes button
    const handleRandomStory = (e) =>{
        // Stop Propagation
        e.stopPropagation();

        if( isReadAll || currentStory >= numStories){
            setStory("That's all the jokes for today! Come back another day!")
            return;
        }else{
            currentStory = JSON.parse(localStorage.getItem('idCurrentStory')) + 1;   
            console.log(currentStory);
            setStory(localStorage.getItem(listReadStory[currentStory]));
        }
        if (currentStory +1 >= numStories){
            localStorage.setItem('isReadAll', true);
        }
        localStorage.setItem('idCurrentStory', currentStory);
    };

    return (
        <div className="app__content">

            {/* Slogan */}
            <div className="slogan">
                <div className="slogan__content">
                    <h1 className="slogan__title">A joke a day keeps the doctor away</h1>
                    <p className="slogan__note">If you joke wrong way, your teeth have to pay. (Serious)</p>
                </div>
            </div>

            <div className="joke">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <div className="row">
                                {/* Joke paragrah */}
                                <p id="joke__content">{story}</p>
                            </div>

                            {/* Votes joke */}
                            <div className="joke__votes">
                                <div className=" row">
                                    <div id="like-btn" className="col l-6 m-12 c-12">
                                        <button onClick={handleRandomStory} className="btn btn--like">This is Funny!</button>
                                    </div>
                                    <div id="unlike-btn" className="col l-6 m-12 c-12">
                                        <button onClick={handleRandomStory} className="btn btn--unlike">This in not funny.</button>
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default Body;
