package com.example.demo.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.VegMenu;

@Transactional
@Repository
public interface VegMenuRepository extends JpaRepository<VegMenu, Integer> 
{
	 @Query(value="select * from vegmenu where messid= ?1 and day =?2",nativeQuery=true)
		public Optional<VegMenu> getTodaysMessMenu(int id,String day);
	 
	 @Modifying
	 @Query(value="delete from vegmenu",nativeQuery=true)
		public int truncateAll();
	 
}
