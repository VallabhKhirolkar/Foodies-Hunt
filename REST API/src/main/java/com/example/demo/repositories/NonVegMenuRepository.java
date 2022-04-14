package com.example.demo.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.NonVegMenu;

@Transactional
@Repository
public interface NonVegMenuRepository extends JpaRepository<NonVegMenu, Integer>
{
	 @Query(value="select * from nonvegmenu where messid= ?1 and day =?2",nativeQuery=true)
		public Optional<NonVegMenu> getTodaysMessMenu(int id,String day);
	 
	 
	 @Modifying
	 @Query(value="delete from nonvegmenu",nativeQuery=true)
		public int truncateAll();
	 
	 
}
