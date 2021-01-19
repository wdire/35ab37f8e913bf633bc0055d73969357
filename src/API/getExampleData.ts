import { FormTeamType, FormType } from './../components/molecules/FormItem/FormItem';
//Example data.(Takes long to write many entries it with hand..)

import { FormStatus } from "../components/molecules/FormItem/FormItem";

export type exampleDataType = {
    position: number;
    prev_position: number;
    name: string;
    shortName:string,
    image: string;
    info: {
        played: number;
        won: number;
        drawn: number;
        lost: number;
        gf: number;
        ga: number;
        gd: string;
        points: number;
        form: FormType[];
        latest_match: {
            this_team:FormTeamType,
            other_team:FormTeamType
            date:string
        };
        next_match: {
            this_team:FormTeamType,
            other_team:FormTeamType,
            date:string,
            time:string
        };
        performance_chart: {};
    }
}

const exampleData:exampleDataType[] = [
    {
        position:1,
        prev_position:1,
        name:"Manchester United",
        shortName:"MUN",
        image:"t001.png",
        info:{
            played:18,
            won:11,
            drawn:4,
            lost:3,
            gf:34,
            ga:24,
            gd:"+10",
            points:37,
            form:[
                {
                    status:FormStatus.DRAWN,
                    date:"Saturday 30 December 2020",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t003.png",
                        score:2
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester United",
                        image:"t001.png",
                        score:2
                    },
                },
                {
                    status:FormStatus.WIN,
                    date:"Saturday 31 December 2020",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t003.png",
                        score:1
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester United",
                        image:"t001.png",
                        score:2
                    },
                },
                {
                    status:FormStatus.WIN,
                    date:"Saturday 32:d December 2021",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t003.png",
                        score:0
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester United",
                        image:"t001.png",
                        score:1
                    },
                },
                {
                    status:FormStatus.WIN,
                    date:"",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t003.png",
                        score:0
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester United",
                        image:"t001.png",
                        score:1
                    },
                },
                {
                    status:FormStatus.DRAWN,
                    date:"",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t003.png",
                        score:0
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester United",
                        image:"t001.png",
                        score:1
                    },
                },
            ],
            latest_match:{
                other_team:{
                    shortName:"LIV",
                    name:"Liverpool",
                    image:"t002.png",
                    score:0
                },
                this_team:{
                    shortName:"MUN",
                    name:"Manchester United",
                    image:"t001.png",
                    score:0
                },
                date:"Saturday 26 December 2020"
            },
            next_match:{
                other_team:{
                    shortName:"FUL",
                    name:"Fulham",
                    image:"t003.png",
                },
                this_team:{
                    shortName:"MUN",
                    name:"Manchester United",
                    image:"t001.png",
                },
                date:"Sunday 27 December 2020",
                time:"22:15"
            },
            performance_chart:{}
        }
    }
];

export default exampleData;