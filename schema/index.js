export default [
    {
        summary:'this api gives access to the aiport operational database values',
        uuid:'123456',
        uri:'https://aodb.kix/',
        endpoints:[
            {
                summary:'information related to flights and ONLY flight (one flight per row)',
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
                            constraints:'must be one of those 3 airports: KIX, ITM or UKB. No other airports can be specified.'
                        }
                    },
                    {
                        name:'landing_time',
                        summary:'flight landing date and time',
                        expected_value: {
                            type:'number',
                            constraints:'must be an UNIX timestamp in seconds'
                        }
                    },
                    {
                        name:'takeoff_time',
                        summary:'flight take off date and time',
                        expected_value: {
                            type:'number',
                            constraints:'must be an UNIX timestamp in seconds'
                        }
                    }
                ]
            }
        ],
    }
];