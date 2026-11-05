import React from 'react';
import {Text, ScrollView} from 'react-native';
import Boat from './Components/Boat';

class App extends React.Component {
    render(){
        return(
            <ScrollView>
                <Text></Text>
                <Text>GetABoat - For Sale</Text>
                <Text></Text>
                <Boat
                    boat_name={'Sea Ray 500 Sundancer'}
                    boat_desc={'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'}
                    boat_pic={require('./Images/sea_ray.jpg')}
                />
                <Text></Text>
                <Boat
                    boat_name={'Four Winns Horizon 180'}
                    boat_desc={'A sporty look and refined details truly set the Horizon 180 above all others.'}
                    boat_pic={require('./Images/four_winns.jpg')}
                />
                <Text></Text>
                <Boat
                    boat_name={'Flipper 640 ST'}
                    boat_desc={'A modern take on the classic, traditional hardtop and perfect for a family picnic.'}
                    boat_pic={require('./Images/flipper.jpg')}
                />
                <Text></Text>
                <Boat
                    boat_name={'Princess V48'}
                    boat_desc={'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'}
                    boat_pic={require('./Images/princess.jpg')}
                />
                <Text></Text>
                <Boat
                    boat_name={'Bayliner 175 Bowrider'}
                    boat_desc={'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'}
                    boat_pic={require('./Images/bayliner.jpg')}
                />
                <Text></Text>
                <Boat
                    boat_name={'Fairline Targa 47'}
                    boat_desc={'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'}
                    boat_pic={require('./Images/fairline.jpg')}
                />
                <Text></Text>
            </ScrollView>
        );
    };
};

export default App;