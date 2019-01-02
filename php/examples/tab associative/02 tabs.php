<?php

$tab = [
			[
            	'name' => 'Thib',
                'age' => 29,
                'job' => 'dev',
                'aplhabet' => ['a', 'b', 'c', 'd', 'e', 'f']
            ],

           	'coucou',

           	[
            	[
                	['a'],
                    [
                    	'chat' => 'cat'
                    ]
               	],

            	524,

                [
                	'animals' => ['poulpe', 'canard', 'chien'],
                    'country' => [
                    				'France',
                                    'Allemagne',
                                    'Italie',
                                    [
                                    	'Serbie',
                                        'Montenegro',
                                        'Macédoine'
                                    ]
                                 ]
                ]
            ]

	   ];
?>

// $tab[1] // coucou

// $tab[2][0][1]['chat'] // cat

// array_search('cat', $tab[2][0][1]);

// $tab[2][2]['country'][3][1] // Montenegro
<?php

foreach ($tab[2][2]['country'][3] as $country ) {

    echo $country;

}

foreach ($tab[2][2]['animals'] as $animal) {

	echo $animal;
}

?>
*************************************
*************************************
<ul>
	<?php foreach ($tab[0]['alphabet'] as $alpha):  ?>
		<li><?= $alpha ?></li>

    <?php endforeach ?>
</ul>

***********************************
**************************************
<ul>
	<?php foreach ($tab[0]['alphabet'] as $alpha):  ?>
		<li><?= $alpha ?></li>

    <?php endforeach ?>
</ul>
******************************************
******************************************
<ul>
	<?php foreach($tab[2][2]['country'] as $i => $country): ?>

        <li>
        	<?php if($i == 3) { ?>

                <?php foreach ($country as $soloCountry ): ?>

                        <span><?= soloCountry.' '?></span>

            	<?php endforeach?>

            <?php } else { ?>

                <?= $country ?>

            <?php } ?>
        </li>

    <?php endforeach  ?>

</ul>
