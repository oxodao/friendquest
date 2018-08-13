<?php

namespace App\DataFixtures;


use App\Entity\Friendship;
use App\Entity\Game;
use App\Entity\Question;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * Default set of data for the database in dev
 *
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */
class FQFixtures extends Fixture
{

    private $images = [
        "https://i.pinimg.com/736x/63/a5/e8/63a5e8ee8cdcfab2f952bcd46a73e5c4--mr-bean-profile-pictures.jpg",
        "https://d12swbtw719y4s.cloudfront.net/images/mC3EpqFj/y1W3RXWxGo476VSa8h5X/Profile_image_random.jpeg?w=620",
        "https://gocartoonme.com/wp-content/uploads/2015/04/cartoon-me.png",
        "https://i.ytimg.com/vi/lDM2ATylrtw/maxresdefault.jpg"
    ];

    /** @var UserPasswordEncoderInterface */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $upei)
    {
        $this->encoder = $upei;
    }

    public function load(ObjectManager $om)
    {
        /** @var User[] $users */
        $users = [];

        // Adding a user with it's email
        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $user->setUsername("user-" . $i);
            $user->setPassword($this->encoder->encodePassword($user, "user-" . $i));
            $user->setEmail("user-$i@friendsquest.dev");
            $user->setRoles(['ROLE_USER']);

            $rand = rand(0, count($this->images) - 1);
            $user->setImage($this->images[$rand]);

            $users[] = $user;

            $om->persist($user);
        }

        $om->flush();

        // Friend them
        $friendships = [
            (new Friendship($users[3], $users[4]))->setState(Friendship::$STATE_PENDING),
            (new Friendship($users[2], $users[3]))->setState(Friendship::$STATE_PENDING),
            (new Friendship($users[5], $users[3]))->setState(Friendship::$STATE_ACCEPTED)
        ];


        for ($i = 0; $i < count($friendships); $i++) {
            $om->persist($friendships[$i]);
        }


        $game = new Game($users[0]);
        $game->setSecondPlayer($users[1]);
        $om->persist($game);

        $game2 = new Game($users[1]);
        $game2->setSecondPlayer($users[2]);
        $game2->nextTurn(false);
        $om->persist($game2);

        $questions = [
            [
                "Would you go in vacation with your best friend ?",
                false,
                [
                    "yes",
                    "no"
                ]
            ],
            [
                "What do you fear the most ?",
                false,
                [
                    "Spider",
                    "Being alone",
                    "Nothing, I'm a superhero"
                ]
            ],
            [
                "You get a billion dollar to spend, what do you use them for ?",
                false,
                [
                    "Buy everything I've ever wanted",
                    "Live wisely and save them",
                    "Donate them to charity",
                    "YOLO"
                ]
            ]
        ];
        foreach ($questions as $question) {
            $currQuest = new Question();
            $currQuest->setQuestion($question[0]);
            $currQuest->setAdult($question[1]);
            foreach ($question[2] as $ans) {
                $currQuest->addAnswer($ans);
            }

            $om->persist($currQuest);
        }

        $om->flush();
    }

}