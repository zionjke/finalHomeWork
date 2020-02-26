import React from 'react';
import styles from './css/App.module.css'
import Greeting from "./components/Greeting";
import Photo from "./components/Photo";
import Skills from "./components/Skills";

class App extends React.Component {
    state = {
        person: {
            name: "Васильев Артем",
            age: 31,
            city: "Киев",
            photo: "https://cdn1.savepice.ru/uploads/2020/2/26/59dde4d8c95c90836dc97fdedc378fba-full.jpg"
        },
        skills: [
            {skill: "Непреклонный"},
            {skill: "Трудолюбивый"},
            {skill: "Порядочный"}
        ],

        friends: [
            {name:""}
        ]
    };

    addFriend = (newName) => {
        let newFriend = {
            name: newName
        };
        let newFriends = [...this.state.friends, newFriend];
        this.setState({
            friends: newFriends
        })
    };



    render = () => {

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <Greeting person={this.state.person}/>
                        <Photo photo={this.state.person.photo}/>
                    </div>
                    <Skills skills={this.state.skills}/>
                    <div className="form">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
