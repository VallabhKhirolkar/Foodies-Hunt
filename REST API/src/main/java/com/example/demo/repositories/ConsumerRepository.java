package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Consumer;

import com.example.demo.entities.Login;

@Transactional
@Repository
public interface ConsumerRepository extends JpaRepository<Consumer, Integer> 
{
  /*	@Query("select c from Consumer c where c.consumerloginid = :id")
	 public Optional<Consumer> getByLoginId(int id);  */
	 
	 
	 @Query(value="select * from consumer  where loginid= ?1",nativeQuery=true)
	public Optional<Consumer> getByLoginId(int no);
	 
	 @Modifying
	 @Query(value="update consumer set messid=?1 where regid=?2 and messid is null",nativeQuery=true)
	 public int getMessfromId(int messid,int regid);
	 
	 @Query(value="select * from consumer  where messid= ?1",nativeQuery=true)
		public List<Consumer> getAllCons(int id); 
	 
}


