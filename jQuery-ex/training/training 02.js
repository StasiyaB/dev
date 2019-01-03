var tab = [
			{
            	'name' : 'Thib',
                'age' : 29,
                'job' : 'dev',
                'aplhabet' : ['a', 'b', 'c', 'd', 'e', 'f']
            },

           	'coucou',

           	[
            	[
                	['a'],
                    {
                    	'chat' : 'cat'
                    }
               	],

            	524,

                {
                	'animals' : ['poulpe', 'canard', 'chien'],
                    'country' : [
                    				'France',
                                    'Allemagne',
                                    'Italie',
                                    [
                                    	'Serbie',
                                        'Montenegro',
                                        'Macédoine'
                                    ]
                                 ]
                }
            ]

	   ];

// tab[2][2].animals[1] // canard

// tab[2][0][1].chat // cat

// tab[2][0][0] // a

// tab[0].alphabet[2] // c

// tab[2][1] // 524

$('#target').html('<ul>');

for(var i = 0; i < tab[2][2].country[3].length; i++) {

	$('#target ul').append('<li>'+tab[2][2].country[3][i]+'</li>')
}
