<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Repository;

use App\Entity\User;
use Doctrine\ORM\EntityRepository;

class GameRepository extends EntityRepository
{

    public function findOrCreateByFriend(User $user, string $friend)
    {
        $game = $this->getEntityManager()->createQuery("SELECT * FROM App\Entity\Game WHERE (firstPlayer = $user OR secondPlayer = $user) OR (firstPlayer.id = $friend OR secondPlayer.id = $friend)");
        return $game;
    }

}