//Example data

export enum formStatus {
    WIN=1,
    LOST=2,
    DRAWN=3
}

export type exampleDataType = {
    position: number;
    prev_position: number;
    name: string;
    image: string;
    info: {
        played: number;
        won: number;
        drawn: number;
        lost: number;
        gf: number;
        ga: number;
        gd: number;
        points: number;
        form: {
            status: formStatus;
            date: string;
            first_team: object;
            second_team: object;
        }[];
        latest_match: object;
        next_match: object;
        performance_chart: {};
    }
}

const exampleData:exampleDataType[] = [
    {
        position:1,
        prev_position:1,
        name:"Manchester United",
        image:"t001.png",
        info:{
            played:18,
            won:11,
            drawn:4,
            lost:3,
            gf:34,
            ga:24,
            gd:10,
            points:37,
            form:[
                {
                    status:formStatus.DRAWN,
                    date:"",
                    first_team:{
                        name:"Leicester City",
                        image:"t003.png",
                        score:2
                    },
                    second_team:{
                        name:"Manchester United",
                        image:"t001.png",
                        score:2
                    },
                },
                {
                    status:formStatus.WIN,
                    date:"",
                    first_team:{
                        name:"Leicester City",
                        image:"t003.png",
                        score:1
                    },
                    second_team:{
                        name:"Manchester United",
                        image:"t001.png",
                        score:2
                    },
                },
                {
                    status:formStatus.WIN,
                    date:"",
                    first_team:{
                        name:"Leicester City",
                        image:"t003.png",
                        score:0
                    },
                    second_team:{
                        name:"Manchester United",
                        image:"t001.png",
                        score:1
                    },
                },
                {
                    status:formStatus.WIN,
                    date:"",
                    first_team:{
                        name:"Leicester City",
                        image:"t003.png",
                        score:0
                    },
                    second_team:{
                        name:"Manchester United",
                        image:"t001.png",
                        score:1
                    },
                },
            ],
            latest_match:{
                first_team:{
                    name:"Liverpool",
                    image:"t004.png",
                    score:0
                },
                second_team:{
                    name:"Manchester United",
                    image:"t001.png",
                    score:0
                },
            },
            next_match:{
                first_team:{
                    name:"Fulham",
                    image:"t018.png",
                },
                second_team:{
                    name:"Manchester United",
                    image:"t001.png",
                },
                time:"22:15"
            },
            performance_chart:{}
        }
    }
];

export default exampleData;