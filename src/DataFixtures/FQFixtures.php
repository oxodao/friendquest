<?php

namespace App\DataFixtures;


use App\Entity\Answer;
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
            (new Friendship($users[5], $users[3]))->setState(Friendship::$STATE_ACCEPTED),
            (new Friendship($users[6], $users[3]))->setState(Friendship::$STATE_ACCEPTED),
            (new Friendship($users[7], $users[3]))->setState(Friendship::$STATE_ACCEPTED)
        ];


        for ($i = 0; $i < count($friendships); $i++) {
            $om->persist($friendships[$i]);
        }


        // We create a game between 3 and 5 which just started (No answers yet)
        $game = new Game($users[3]);
        $game->setSecondPlayer($users[5]);
        $om->persist($game);

        // We create a game between 3 and 6 which one player responded
        $game2= new Game($users[3]);
        $game2->setSecondPlayer($users[6]);
        $om->persist($game2);

        // We create a game between 3 and 7 which both player responded
        $game3= new Game($users[3]);
        $game3->setSecondPlayer($users[7]);
        $om->persist($game3);

        $game4 = new Game($users[1]);
        $game4->setSecondPlayer($users[2]);
        $game4->nextTurn();
        $om->persist($game4);

        $questionList = Generator::generateQuestions($om);

        for ($i = 0; $i < 2; ++$i)
        {
            $answer = new Answer($game, $questionList[$i], $i);
            $game->addAnswer($answer);

            $answer2 = new Answer($game2, $questionList[$i], $i);
            $game2->addAnswer($answer2);

            $answer3 = new Answer($game3, $questionList[$i], $i);
            $game3->addAnswer($answer3);

            $answer4 = new Answer($game4, $questionList[$i], $i);
            $game4->addAnswer($answer4);
        }

        for ($i = 2; $i < 4; ++$i) {
            $answer2 = new Answer($game2, $questionList[$i], $i);
            $answer2->setCorrectAnswer(0);
            $game2->addAnswer($answer2);

            $answer3 = new Answer($game3, $questionList[$i], $i);
            $answer3->setCorrectAnswer(0);
            $game3->addAnswer($answer3);
        }

        for ($i = 4; $i < 6; ++$i) {
            $answer3 = new Answer($game3, $questionList[$i], $i);
            $answer3->setCorrectAnswer(0);
            $answer3->setPlayerAnswer(0);
            $game3->addAnswer($answer3);
        }

        $om->persist($game);
        $om->persist($game2);
        $om->persist($game3);
        $om->persist($game4);

        $om->flush();
    }

}