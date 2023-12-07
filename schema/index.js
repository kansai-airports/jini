export default [
    {
        summary:'this api gives access to the aiport operational database values',
        uuid:'123456',
        uri:'https://aodb.kix/',
        endpoints:[
            {
                summary:'provide detailed infomartion related to flights (one flight per row)',
                path:'/flights',
                method:'GET',
                parameters:[
                    {
                        name:'airline',
                        summary:'IATA code of the airline to which the flight belongs',
                        expected_value: {
                            type:'string',
                            constraints:'must be an airline IATA code'
                        }
                    },
                    {
                        summary:'airport',
                        name:'specify the airport used by the flight',
                        expected_value: {
                            type:'string',
                            constraints:'must be one of the 3 airports: KIX, ITM or UKB'
                        }
                    },
                ]
            }
        ],
    }
];