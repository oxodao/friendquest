<?php
namespace App\DataFixtures;


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

    /** @var UserPasswordEncoderInterface */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $upei)
    {
        $this->encoder = $upei;
    }

    public function load(ObjectManager $om)
    {

        // Adding a user with it's email
        $user1 = new User();
        $user1->setUsername("user-1");
        $user1->setPassword($this->encoder->encodePassword($user1, "user-1"));
        $user1->setEmail("user-1@friendsquest.dev");
        $user1->setRoles([ 'ROLE_USER' ]);

        $om->persist($user1);

        // Adding a user without email
        $user2 = new User();
        $user2->setUsername("user-2");
        $user2->setPassword($this->encoder->encodePassword($user2, "user-2"));
        $user2->setRoles([ 'ROLE_USER' ]);

        $om->persist($user2);

        $om->flush();
    }

}