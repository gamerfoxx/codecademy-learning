import { getObstacleEvents } from './computer-vision';

interface AutonomusCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
    steeringControl: Steering
}

interface Events {
    [turns: string]: boolean
}

interface Control {
    execute: (command: string) => void;
}

interface Steering {
    turn: (direction: string) => void;
}

class SteeringControl implements Steering {
    execute(command: string) {
        console.log(`executing: ${command}`)
    }
    turn(direction: string) {
        console.log(`executing: turn ${direction}`)
    }
}

class Car implements AutonomusCar {
    isRunning;
    steeringControl;
    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl
    }
    respond(events: Events) {
        if (this.isRunning === false) {
            console.log('The car is off')
        } else {
            let eventKey = Object.keys(events)
            eventKey.forEach(e => {
                if (events.e === false) {
                    return false;
                }
                if (e === 'ObstacleLeft') {
                    let newSteering = new SteeringControl();
                    newSteering.turn('right')
                }
                if (e === 'ObstacleRight') {
                    let newSteering = new SteeringControl();
                    newSteering.turn('left')
                }
            })
        }
    };
}

const steering = new SteeringControl();
steering.turn('right');

const autonomousCar = new Car({ isRunning: true, steeringControl: steering });

autonomousCar.respond(getObstacleEvents());