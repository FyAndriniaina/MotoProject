<?php

namespace App\Repository;

use App\Entity\Essaye;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Essaye|null find($id, $lockMode = null, $lockVersion = null)
 * @method Essaye|null findOneBy(array $criteria, array $orderBy = null)
 * @method Essaye[]    findAll()
 * @method Essaye[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EssayeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Essaye::class);
    }

    // /**
    //  * @return Essaye[] Returns an array of Essaye objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Essaye
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
