import { FormTeamType, FormType } from './../components/molecules/FormItem/FormItem';
//Example data. Didn't wrote much entry takes too long to write by hand. The names are a little random.

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
        prev_position:4,
        name:"Leicester City",
        shortName:"LEI",
        image:"t003.png",
        info:{
            played:19,
            won:12,
            drawn:2,
            lost:5,
            gf:35,
            ga:21,
            gd:"+14",
            points:38,
            form:[
                {
                    status:FormStatus.WIN,
                    date:"Saturday 26 December 2020",
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
                    status:FormStatus.DRAWN,
                    date:"Monday 28 December 2020",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t003.png",
                        score:0
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester United",
                        image:"t002.png",
                        score:1
                    },
                },
                {
                    status:FormStatus.WIN,
                    date:"Friday 1 January 2021",
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
                        score:1
                    },
                },
                {
                    status:FormStatus.WIN,
                    date:"Sunday 17 January 2021",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t002.png",
                        score:3
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
                    date:"Friday 17 January 2021",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t003.png",
                        score:3
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester United",
                        image:"t001.png",
                        score:3
                    },
                },
            ],
            latest_match:{
                other_team:{
                    shortName:"MUN",
                    name:"Manchester United",
                    image:"t001.png",
                    score:3
                },
                this_team:{
                    shortName:"FUL",
                    name:"Leicester City",
                    image:"t003.png",
                },
                date:"Sunday 17 January 2021"
            },
            next_match:{
                other_team:{
                    shortName:"MUN",
                    name:"Manchester United",
                    image:"t001.png",
                },
                this_team:{
                    shortName:"FUL",
                    name:"Leicester City",
                    image:"t002.png",
                },
                date:"Wednesday 27 January 2021",
                time:"20:15"
            },
            performance_chart:{}
        }
    },
    {
        position:2,
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
                    status:FormStatus.WIN,
                    date:"Saturday 26 December 2020",
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
                    status:FormStatus.DRAWN,
                    date:"Monday 28 December 2020",
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
                    date:"Friday 1 January 2021",
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
                        score:1
                    },
                },
                {
                    status:FormStatus.WIN,
                    date:"Sunday 17 January 2021",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t002.png",
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
                    date:"Friday 17 January 2021",
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
                        score:0
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
                date:"Sunday 17 January 2021"
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
                date:"Wednesday 27 January 2021",
                time:"20:15"
            },
            performance_chart:{}
        }
    },
    {
        position:3,
        prev_position:3,
        name:"Manchester City",
        shortName:"MCI",
        image:"t002.png",
        info:{
            played:17,
            won:10,
            drawn:5,
            lost:2,
            gf:29,
            ga:13,
            gd:"+16",
            points:35,
            form:[
                {
                    status:FormStatus.WIN,
                    date:"Saturday 26 December 2020",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t002.png",
                        score:2
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester City",
                        image:"t001.png",
                        score:2
                    },
                },
                {
                    status:FormStatus.LOST,
                    date:"Monday 28 December 2020",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t002.png",
                        score:0
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester City",
                        image:"t001.png",
                        score:1
                    },
                },
                {
                    status:FormStatus.WIN,
                    date:"Friday 1 January 2021",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t002.png",
                        score:2
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester City",
                        image:"t001.png",
                        score:1
                    },
                },
                {
                    status:FormStatus.LOST,
                    date:"Sunday 17 January 2021",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t002.png",
                        score:0
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester City",
                        image:"t001.png",
                        score:1
                    },
                },
                {
                    status:FormStatus.WIN,
                    date:"Friday 17 January 2021",
                    first_team:{
                        shortName:"LEI",
                        name:"Leicester City",
                        image:"t002.png",
                        score:0
                    },
                    second_team:{
                        shortName:"MUN",
                        name:"Manchester City",
                        image:"t001.png",
                        score:0
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
                    name:"Manchester City",
                    image:"t002.png",
                    score:0
                },
                date:"Sunday 17 January 2021"
            },
            next_match:{
                other_team:{
                    shortName:"dd",
                    name:"Fulham",
                    image:"t003.png",
                },
                this_team:{
                    shortName:"MUN",
                    name:"Manchester City",
                    image:"t002.png",
                },
                date:"Wednesday 27 January 2021",
                time:"20:15"
            },
            performance_chart:{}
        }
    }
];

export default exampleData;