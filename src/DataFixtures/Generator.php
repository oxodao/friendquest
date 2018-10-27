<?php

namespace App\DataFixtures;

use App\Entity\Question;
use Doctrine\Common\Persistence\ObjectManager;

class Generator
{

    static function generateQuestions(ObjectManager $om)
    {

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
            ],
            [
                "If a brand paid you a million dollards, would you have an ad for their product tatooed on your forehead ?",
                false,
                [
                    "Yes",
                    "No"
                ]
            ],
            [
                "You're on a crazy roller coaster and suddenly realize you're about to throw up. Sitting on your left is your mother, to your right your partner. Who do you throw up on?",
                false,
                [
                    "My mother",
                    "My partner"
                ]
            ],
            [
                "What would be your ideal Saturday night?",
                false,
                [
                    "Up in the club",
                    "Watching TV",
                    "Talking with friends"
                ]
            ]
        ];

        $questionList = [];

        foreach ($questions as $question) {
            $currQuest = new Question();
            $currQuest->setQuestion($question[0]);
            $currQuest->setAdult($question[1]);
            foreach ($question[2] as $ans) {
                $currQuest->addAnswer($ans);
            }

            $questionList[] = $currQuest;
            $om->persist($currQuest);
        }

        return $questionList;
    }
}
